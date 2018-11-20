import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class chart extends Component {
  componentDidMount() {
    //this will automatically shows up in console
    this.props.fetchData();
  }

  render() {
    console.log('PROPS:', this.props.data);
    return <div>fetchData</div>;
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(chart);
