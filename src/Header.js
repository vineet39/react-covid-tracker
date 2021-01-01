import React from 'react';
import Dropdown from './Dropdown';

export default function Header(props) {
    return (
        <div className="app_header">
            <h1>COVID-19 Tracker</h1>
            <Dropdown
                value={props.countryValue}
                onChange={props.countryOnChange}
                items={props.countryItems} />
            <Dropdown
                value={props.casesValue}
                onChange={props.casesOnChange}
                items={props.casesItems} />
        </div>
    )
}