import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA'])
  const [country, setCountry] = useState('worldwide')
  const details = {
    cases: { title: "Cases", cases: 2000, total: 1000 },
    recovered: { title: "Recovered", cases: 3000, total: 2000 },
    deaths: { title: "Deaths", cases: 4000, total: 3000 }
  };
  const items = Object.keys(details).map(key =>
    <InfoBox key={key} title={details[key].title} cases={details[key].cases} total={details[key].total} />
  );
  const onCountryChange = (event) => {
    const countryValue = event.target.value;
    setCountry(countryValue);
  }
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(response => {
          const countries = response.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
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
          <h3>WorldWide cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
