import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Header } from 'semantic-ui-react';

class chart extends Component {
  componentDidMount() {
    // this will automatically shows up in console
    this.props.fetchData();
  }

  render() {
    console.log('PROPS:', this.props.data);

    return (
      <div>
        Chart
        {this.props.data.map((item, index) => (
          <li key={index}>{item[2]}</li>
        ))}
        {/* <Header as="h4" inverted>
          {average(this.props.data)} {this.props.units}
        </Header> */}
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(chart);
