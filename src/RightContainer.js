import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { useState, useEffect } from 'react';
import GraphStats from './GraphStats';
import { caseTypes } from './constants';
import Table from './Table';
import { sortData } from './util';

export default function RightContainer() {
    const [casesType, setCasesType] = useState(caseTypes.cases.value);
    const [tableData, setTableData] = useState([])
    const onCaseTypeChange = async (event) => {
        const caseType = event.target.value;
        setCasesType(caseType);
    }
    useEffect(() => {
        const getCountriesData = async () => {
          const response = await fetch('https://disease.sh/v3/covid-19/countries');
          const responseJSON = await response.json();
          const sortedResponse = await sortData(responseJSON);
          setTableData(sortedResponse);
        }
        getCountriesData();
      }, [])
    return (
        <Card className="app_right">
            <CardContent>
                <Table countries={tableData} />
                <GraphStats casesType={casesType} onCaseTypeChange={onCaseTypeChange} caseTypes={caseTypes} />
            </CardContent>
        </Card>
    )
}
