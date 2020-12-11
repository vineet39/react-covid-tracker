import React from 'react'
import classes from './Table.css';

export default function Table(props) {
    console.log(props);
    return (
        <div className="table">
            {props.countries.map(({country, cases}) => (
                <tr>
                    <td>{country}</td>
                    <td><strong>{cases}</strong></td>
                </tr>
            ))}
        </div>
    )
}
