import React, { Component } from 'react';
import '../App.css';
import SearchContainer from '../containers/SearchContainer'
import NavContainer from '../containers/NavContainer'
import RestaurantContainer from '../containers/RestaurantContainer'

class App extends Component {

    get view() {
        if(this.props.currentView === 'searchPage') return <SearchContainer />
        if(this.props.currentView === 'restaurantPage') return <RestaurantContainer/>
        return <SearchContainer />
    }

  render() {
    return (
      <div className="App">
          <NavContainer/>
          {this.view}
      </div>
    );
  }
}

export default App;
