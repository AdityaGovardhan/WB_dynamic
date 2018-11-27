import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Header } from 'semantic-ui-react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class chart extends Component {
  render() {
    const avg_wage = this.props.data.map(avg_wage => avg_wage[2]);
    console.log(avg_wage);
    console.log('PROPS:', this.props.data);

    return (
      <div>
        Chart
        {this.props.data.map((item, index) => (
          <li key={index}>{item[2]}</li>
        ))}
        <Sparklines data={avg_wage}>
          <SparklinesLine />
        </Sparklines>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(
  mapStateToProps
  //   { fetchData }
)(chart);
