import React from 'react'
import { VictoryPie } from 'victory'

const PieChart = (props) => {
  return (
    <VictoryPie 
      data={props.data} 
      x='name' 
      y='amount' 
      animate={{ duration: 2000 }}
      colorScale={props.colors}
      height={200}
      padAngle={3}
      innerRadius={30}
      style={{
        data: {
          fillOpacity: 0.9, stroke: '#494949', strokeWidth: 1
        },
        labels: {
          fontSize: 12, fill: '#494949'
        }
      }}
    />
  )
}

export default PieChart