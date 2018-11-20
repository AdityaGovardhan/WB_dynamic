import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchData } from '../actions';
import USAMap from 'react-usa-map';

export default class Map extends Component {
  state = {
    returnedData: null
  };

  /* mandatory */
  mapHandler(event) {
    this.setState({ st: event.target.dataset.name });
    alert(event.target.dataset.name);
  }

  statesCustomConfig() {
    return {
      NJ: {
        value: this.state.st,
        clicked: false,
        clickHandler: event => {
          this.setState({ openModal: true });
          console.log('Custom handler for:', event.target.dataset);
        }
      },
      NY: {
        // fill: '#CC0000',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      AZ: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      AK: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      AL: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      AR: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      CA: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      CO: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      CT: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      },
      DC: {
        // fill: 'blue',
        clicked: false,
        clickHandler: event => console.log('Custom handler for NY', event.target.dataset)
      }
    };
  }

  render() {
    return (
      <div className="App">
        <USAMap
          // value={this.state.st}
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
        <div>Map</div>
        {/* <Modal isOpen={this.state.openModal} onClose={this.toggleModal} /> */}
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   { fetchData }
// )(Map);
