import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

export default function InfoBox(props) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {props.title}
                </Typography>
                <Typography className="infoBox_cases">
                    {props.cases}
                </Typography>
                <Typography className="infoBox_total" color="textSecondary">
                    {props.total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}
