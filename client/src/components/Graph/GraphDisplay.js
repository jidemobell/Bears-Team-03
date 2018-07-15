import React from 'react';
import LineGraph from './../../container/Charts/Line';
import PieGraph from './../../container/Charts/Pie';
import BarGraph from './../../container/Charts/Bar';

class GraphDisplay extends React.Component{
 
  getChart(data){
      switch (data) {
        case 'line':
          return < LineGraph />
          case 'pie':
          return < PieGraph />
          case 'bar':
          return < BarGraph />
          default:
          return < LineGraph />
      }
  }

  render(){
      return (
        <div> 
          {this.getChart(this.props.menu)}
        </div>
      )
  }


}

export default GraphDisplay;
