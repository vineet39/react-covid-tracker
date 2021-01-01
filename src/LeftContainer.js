import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { MenuItem } from '@material-ui/core';
import './App.css';
import InfoBoxStats from './InfoBoxStats';
import Map from './Map';
import 'leaflet/dist/leaflet.css';
import { WORLDWIDEDATA_URL as worldWideDataURL, COUNTRYSPECIFICDATA_URL as countrySpecificDataURL } from './constants';
import { pushAtBeginning } from './util';
import { SomeContext } from "./Provider";
import { caseTypes } from './constants';
import Header from './Header';

export default function LeftContainer() {
    const [_, setContext] = useContext(SomeContext)
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide')
    const [countryInfo, setCountryInfo] = useState({})
    const [mapCenter, setMapCenter] = useState({ lat: 34.80, lng: -40.47 })
    const [mapZoom, setMapZoom] = useState(3)
    const [mapCountries, setMapCountries] = useState([])
    const [casesType, setCasesType] = useState(caseTypes.cases.value);

    // Case type dropdown items and on change command
    const casesDropdownItems = Object.keys(caseTypes).map(key =>
        <MenuItem key={caseTypes[key].title} value={caseTypes[key].value}>{caseTypes[key].title}</MenuItem>
    );
    const onCaseTypeChange = async (event) => {
        const caseType = await event.target.value;
        setCasesType(caseType);
        await setContext({ caseType: caseType })
    }

    // Country dropdown items and on change command
    const countryDropdownItems = countries.map(country => (
        <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
    ));
    pushAtBeginning(countryDropdownItems, <MenuItem key='worldwide' value='worldwide'>World Wide</MenuItem>);
    const onCountryChange = async (event) => {
        const countryValue = event.target.value;
        await setCountry(countryValue);
        const url = countryValue === 'worldwide' ? worldWideDataURL : countrySpecificDataURL + "/" + countryValue;
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
            <Header
                countryValue={country}
                countryOnChange={onCountryChange}
                countryItems={countryDropdownItems}
                casesValue={casesType}
                casesOnChange={onCaseTypeChange}
                casesItems={casesDropdownItems} />
            <InfoBoxStats countryInfo={countryInfo} />
            <Map center={mapCenter} zoom={mapZoom} countries={mapCountries} />
        </div>
    )
}
