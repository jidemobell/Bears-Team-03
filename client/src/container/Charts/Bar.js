import React from 'react';
import {Bar, BarChart,XAxis,YAxis,CustomBarLabel} from 'recharts';


//label={<CustomBarLabel />}

const data = [
  { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
];


class BarGraph extends React.Component{
  render(){
    return (
      <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name"  />
     <YAxis />
     <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
      />
     </BarChart>
    )
  }
}

export default BarGraph;