import React, { Component } from 'react';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import Scroll from './scroll';
import SearchBox from './SearchBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
      .then(users => {
        this.setState({
          robots: users
        })
      });
  }

  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return (
        <div>
          <h2>No elements found</h2>
        </div>
      );
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f1'>  ROBO LIST</h1>
          <SearchBox SearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
            <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;