import React, { Component } from 'react'
import Raven from 'raven-js'


class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Raven.captureException(error, { extra: errorInfo })
  }
  render() {
    if (this.state.error) {
      return (
        <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
          <p>We're sorry — something's gone wrong.</p>
          <p>Our team has been notified, click here fill out a report.</p>
        </button>
      )
    }
    return this.props.children
  }
}


export default ErrorBoundary
