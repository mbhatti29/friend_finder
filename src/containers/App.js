import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
// import { robots } from './robot';

// import the action and then import the connect method from react-redux
//

import { setSearchField } from '../actions'

// tell me what peice of state i need to listen to and send it as a prop
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

// tell me what props I should listen to that are actions that need to be dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    } 
  }
  
  componentDidMount() {
    // console.log(this.props.store)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => {
        this.setState({
          robots: res
        })
      })
  }

  //! coming down as props so dont need to declare it as a method of app
  // onSearchChange = (event) => {
  //   this.setState({ 
  //     searchfield: event.target.value 
  //   })

  // }
  
  render() {
    const {robots} = this.state;
    const { searchField, onSearchChange } = this.props

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })                                                        
    return !robots.length ?
      <h1>Loading..</h1> :
      (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div> 

      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);