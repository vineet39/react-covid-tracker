import React from 'react';
import { FormControl, Select } from '@material-ui/core';

export default function Dropdown(props) {
    return (
        <FormControl>
            <Select
                variant="outlined"
                value={props.value}
                onChange={props.onChange}>
                {
                   props.items
                }
            </Select>
        </FormControl>
    )
}
