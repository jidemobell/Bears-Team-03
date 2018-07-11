import React from 'react';
import LineGraph from './../Charts/Line';
import BarGraph from './../Charts/Bar';
import PieGraph from './../Charts/Pie';
class GraphDisplay extends React.Component{
 
  getChart(data){
      // if(data === 'pie'){
      //   return < LineGraph />
      // }else if (data === 'bar'){
      //   return < BarGraph />
      // }
      switch (data) {
        case 'line':
          return < LineGraph />
          case 'pie':
          return < PieGraph />
          case 'bar':
          return < BarGraph />

          // case 'area':
          // return < AreaGraph />
          // break;
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
