import React from 'react';
import LineGraph from './LineGraph';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import Aux from './hoc/Aux';

export default function GraphStats(props) {
    return (
        <Aux>
            <div className="graph_heading">
                <h3 className="title">Worldwide cases</h3>
                <FormControl>
                    <Select
                        variant="outlined"
                        value={props.casesType}
                        onChange={props.onCaseTypeChange}>
                        {
                            Object.keys(props.caseTypes).map(key =>
                                <MenuItem key={props.caseTypes[key].title} value={props.caseTypes[key].value}>{props.caseTypes[key].title}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </div>
            <LineGraph casesType={props.casesType} />
        </Aux>
    )
}
