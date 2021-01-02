import React from 'react'
import classes from './Table.css';
import Aux from '../../hoc/Aux';
import { useState, useEffect } from 'react';
import { COUNTRYSPECIFICDATA_URL as countrySpecificDataURL} from '../../constants';
import { sortData } from '../../util';

export default function Table(props) {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        const getCountriesData = async () => {
          const response = await fetch(countrySpecificDataURL);
          const responseJSON = await response.json();
          const sortedResponse = await sortData(responseJSON);
          setTableData(sortedResponse);
        }
        getCountriesData();
      }, []);
    return (
        <Aux>
            <h3>Live Cases</h3>
            <div className="table">
                {tableData.map(({ country, cases }) => (
                    <tr>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                    </tr>
                ))}
            </div>
        </Aux>
    )
}
