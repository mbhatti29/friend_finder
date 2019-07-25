import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
// import { robots } from './robot';

// import the action and then import the connect method from react-redux
//

import { setSearchField, requestRobots } from '../actions'

// tell me what peice of state i need to listen to and send it as a prop
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// tell me what props I should listen to that are actions that need to be dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  //dont need constructor anymore because there is no states and these robots will be returned from one of the props 'onRequestRobots()'
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: []
  //   } 
  // }
  
  //! coming down as props now so dont need to make fetch call inside lifecycle methods
  componentDidMount() {
    this.props.onRequestRobots();
    // console.log(this.props.store)
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(res => {
    //     this.setState({
    //       robots: res
    //     })
    //   })
  }

  //! coming down as props so dont need to declare it as a method of app
  // onSearchChange = (event) => {
  //   this.setState({ 
  //     searchfield: event.target.value 
  //   })

  // }
  
  render() {
    // const {robots} = this.state;  // this is now coming down as props
    const { searchField, onSearchChange, robots, isPending } = this.props

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })                                                        
    return isPending ?
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