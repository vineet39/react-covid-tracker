import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import GraphStats from './Graph/GraphStats';
import Table from './Table/Table';
import './RightContainer.css';

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
