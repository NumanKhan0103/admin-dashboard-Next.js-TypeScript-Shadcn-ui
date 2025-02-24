'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import analyticsData from '@/services/analyticsServices';


export default function AnalyticsChart() {
    return (
       <>
       <Card>
        <CardHeader>
            <CardTitle>
                Analytics For This Years
            </CardTitle>
            <CardDescription>
                views per months
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />               
              </LineChart>
            </ResponsiveContainer>
            </div>
        </CardContent>
       </Card>
       </>
    )   
}