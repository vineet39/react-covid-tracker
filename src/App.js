import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';
import userEvent from '@testing-library/user-event';
import Table from './Table';
import { sortData } from './util';
import LineGraph from './LineGraph';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA'])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [casesType, setCasesType] = useState("cases");
  const details = {
    cases: { title: "Cases", cases: countryInfo.todayCases, total: countryInfo.cases },
    recovered: { title: "Recovered", cases: countryInfo.todayRecovered, total: countryInfo.recovered },
    deaths: { title: "Deaths", cases: countryInfo.todayDeaths, total: countryInfo.deaths }
  };
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
      })
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
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(response => {
          const countries = response.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          const sortedResponse = sortData(response);
          setTableData(sortedResponse);
          setCountries(countries);
        });
    }
    getCountriesData();
  }, [])
  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>Lets Begin</h1>
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
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live cases</h3>
          <Table countries={tableData} />
          <h3 className="title">WorldWide cases</h3>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
