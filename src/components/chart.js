import React, { Component } from 'react';
// import sparklines lib
import { Sparklines, SparklinesLine } from 'react-sparklines';

// although is a component, it's very plain so we can just make it a function component instead of a class based one
/*
export default class Chart extends Component {
  render() {
    return (
      <Sparklines height={120} width={180} data={this.props.data}>
        <SparklinesLine color={this.props.color} />
      </Sparklines>
      
    );
  }
}
*/

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
    
  );
}
