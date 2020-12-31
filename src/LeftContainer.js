import React from 'react';
import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';
import 'leaflet/dist/leaflet.css';
import { BASE_URL as baseURL } from './constants';

export default function LeftContainer() {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide')
    const [countryInfo, setCountryInfo] = useState({})
    const details = {
        cases: { title: "Cases", cases: countryInfo.todayCases, total: countryInfo.cases },
        recovered: { title: "Recovered", cases: countryInfo.todayRecovered, total: countryInfo.recovered },
        deaths: { title: "Deaths", cases: countryInfo.todayDeaths, total: countryInfo.deaths }
    };
    const [mapCenter, setMapCenter] = useState({ lat: 34.80, lng: -40.47 })
    const [mapZoom, setMapZoom] = useState(3)
    const [mapCountries, setMapCountries] = useState([])
    const items = Object.keys(details).map(key =>
        <InfoBox key={key} title={details[key].title} cases={details[key].cases} total={details[key].total} />
    );
    const worldWideDataURL = baseURL + "all";
    const countrySpecificDataURL = baseURL + "countries/";
    const onCountryChange = async (event) => {
        const countryValue = event.target.value;
        await setCountry(countryValue);
        const url = countryValue === 'worldwide' ? worldWideDataURL : countrySpecificDataURL + countryValue;
        await fetch(url)
            .then(r => r.json())
            .then(data => {
                setCountryInfo(data);
                if (url !== worldWideDataURL) {
                    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                }
                else {
                    setMapCenter([34.80, -40.47]);
                }
                setMapZoom(4);
            })
    }

    useEffect(() => {
        fetch(worldWideDataURL)
            .then(r => r.json())
            .then(data => {
                setCountryInfo(data);
            })
    }, [])
    useEffect(() => {
        const getCountriesData = async () => {
            const response = await fetch(countrySpecificDataURL);
            const responseJSON = await response.json();
            const countries = await responseJSON.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2
            }));
            setCountries(countries);
            setMapCountries(responseJSON)
        }
        getCountriesData();
    }, [])
    return (
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
    )
}
