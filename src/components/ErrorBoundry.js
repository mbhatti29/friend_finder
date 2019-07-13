import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError : false
    }
  }
  
  componentDidCatch(err, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. mistakes were made!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry
