import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import USAMap from 'react-usa-map';
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';
import { renderCode } from '../States';
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
    const st = event.target.dataset.name;
    this.setState({ st });
    const code = renderCode(st);
    //react will wait till the end of the func to batch update all calls to setState
    this.props.fetchData(code);
    console.log(st);

    //think of a way to get the state
    // renderCode(st);
  }

  render() {
    return (
      <div className="App">
        <USAMap value={this.state.st} onClick={this.mapHandler} />
        <div>Map data</div>
      </div>
    );
  }
}

function mapStateToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(
  mapStateToProps,
  { fetchData }
)(Map);
