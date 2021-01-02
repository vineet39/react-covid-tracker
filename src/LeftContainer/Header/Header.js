import React from 'react';
import Dropdown from '../../UI/DropDown/Dropdown';
import './Header.css';

export default function Header(props) {
    return (
        <div className="app_header">
            <h1>COVID-19 Tracker</h1>
            <Dropdown
                className="dropdown"
                value={props.countryValue}
                onChange={props.countryOnChange}
                items={props.countryItems} />
            <Dropdown
                className="dropdown"
                value={props.casesValue}
                onChange={props.casesOnChange}
                items={props.casesItems} />
        </div>
    )
}