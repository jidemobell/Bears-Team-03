import React from 'react';
import {LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend} from 'recharts';
import './Line.css'


const data = [
  {
    name: "Grocery",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1,
    amount: 100.00
  },
  {
    name: "Transportation",
    BMI: 24.28,
    age: 26,
    birthday: "1995-11-10T00:00:00.000Z",
    city: "South Eldredtown",
    married: false,
    index: 3,
    amount: 75.80
  },
  {
    name: "Academics",
    BMI: 24.41,
    age: 30,
    birthday: "1975-06-12T00:00:00.000Z",
    city: "Koeppchester",
    married: true,
    index: 5,
    amount: 10.00
  },
  {
    name: "Food",
    BMI: 23.77,
    age: 32,
    birthday: "1985-08-09T00:00:00.000Z",
    city: "West Josiemouth",
    married: false,
    index: 6,
    amount: 55.50
  }
]

// const data = [
//   { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
//   { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
//   { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
//   { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
// ];


class LineGraph extends React.Component{
  render(){
    return (
      <LineChart width={500} height={300} data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="BMI" stroke="#8884d8" />
      <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
    </LineChart>
    )
  }
}

export default LineGraph;