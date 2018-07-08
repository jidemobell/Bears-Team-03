import React from 'react';
import LineGraph from './../Charts/Line';
import BarGraph from './../Charts/Bar';

class GraphDisplay extends React.Component{
 
  getChart(data){
      if(data === 'pie'){
        return < LineGraph />
      }else if (data === 'bar'){
        return < BarGraph />
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
