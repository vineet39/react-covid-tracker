import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';
import userEvent from '@testing-library/user-event';
import Table from './Table';
import { sortData } from './util';
import LineGraph from './LineGraph';
import Map from './Map';
import 'leaflet/dist/leaflet.css';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA'])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const details = {
    cases: { title: "Cases", cases: countryInfo.todayCases, total: countryInfo.cases },
    recovered: { title: "Recovered", cases: countryInfo.todayRecovered, total: countryInfo.recovered },
    deaths: { title: "Deaths", cases: countryInfo.todayDeaths, total: countryInfo.deaths }
  };
  const caseTypes = {
    cases: { title: 'New', value: 'cases' },
    recovered: { title: 'Recovered', value: 'recovered' },
    deaths: { title: 'Death', value: 'deaths' }
  }
  const [casesType, setCasesType] = useState(caseTypes.cases.value);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80, lng: -40.47 })
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])
  const items = Object.keys(details).map(key =>
    <InfoBox key={key} title={details[key].title} cases={details[key].cases} total={details[key].total} />
  );
  const onCountryChange = async (event) => {
    const countryValue = event.target.value;
    setCountry(countryValue);

    const url = countryValue === 'worldwide' ? `https://disease.sh/v3/covid-19/all` : `https://disease.sh/v3/covid-19/countries/${countryValue}`;

    await fetch(url)
      .then(r => r.json())
      .then(data => {
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      })
  }
  const onCaseTypeChange = async (event) => {
    const caseType = event.target.value;
    setCasesType(caseType);
  }
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(r => r.json())
      .then(data => {
        setCountryInfo(data);
      })
  }, [])
  useEffect(() => {
    const getCountriesData = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      const responseJSON = await response.json();
      const countries = await responseJSON.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2
      }));
      setCountries(countries);
      setMapCountries(responseJSON)
      const sortedResponse = await sortData(responseJSON);
      setTableData(sortedResponse);
    }
    getCountriesData();
  }, [])
  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 Tracker</h1>
          <FormControl>
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}>
              <MenuItem key='worldwide' value='worldwide'>World Wide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="app_stats">
          {items}
        </div>
        <Map center={mapCenter} zoom={mapZoom} countries={mapCountries} />
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live cases</h3>
          <Table countries={tableData} />
          <div className="graph_heading">
            <h3 className="title">Worldwide cases</h3>
            <FormControl>
              <Select
                variant="outlined"
                value={casesType}
                onChange={onCaseTypeChange}>
                {
                  Object.keys(caseTypes).map(key =>
                    <MenuItem key={caseTypes[key].title} value={caseTypes[key].value}>{caseTypes[key].title}</MenuItem>
                  )
                }
              </Select>
            </FormControl>
          </div>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
