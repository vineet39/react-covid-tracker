import React from 'react'
import classes from './Table.css';
import Aux from './hoc/Aux';

export default function Table(props) {
    console.log(props);
    return (
        <Aux>
            <h3>Live Cases</h3>
            <div className="table">
                {props.countries.map(({ country, cases }) => (
                    <tr>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                    </tr>
                ))}
            </div>
        </Aux>
    )
}
