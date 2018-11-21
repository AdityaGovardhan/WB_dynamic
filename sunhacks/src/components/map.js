import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import USAMap from 'react-usa-map';
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { st: '' };
    //   //this: is the instance of searchBar that has a func called handleChange.
    //   //we are overriding the local func(this.handleChange) by binding this with it.
    this.mapHandler = this.mapHandler.bind(this);
  }

  /* mandatory */
  mapHandler(event) {
    this.setState({ st: event.target.dataset.name });
    this.props.fetchData(this.state.st);
    // this.setState({ st: '' });
    console.log(event.target.dataset.name);

    // var st = this.props.state.st;
    // switch (st) {
    //   case 'AZ':
    //     console.log('04000US04');
    //     break;
    //   case 'AK':
    //     console.log('04000US02');
    //     break;
    //   default:
    //     console.log('No value');
    // }
  }

  render() {
    return (
      <div className="App">
        <USAMap value={this.state.st} onClick={this.mapHandler} />
        <div>Map</div>
      </div>
    );
  }
}

function mapStateToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(
  null,
  mapStateToProps
)(Map);
