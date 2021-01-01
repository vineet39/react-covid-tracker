import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import GraphStats from './GraphStats';
import Table from './Table';

export default function RightContainer() {
    return (
        <Card className="app_right">
            <CardContent>
                <Table />
                <GraphStats />
            </CardContent>
        </Card>
    )
}
