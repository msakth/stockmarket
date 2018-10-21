import React from 'react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    //ToDoMS - Log this error for debugging
  }

  render() {

    if (this.state.hasError) {
      return <h1>error occurred.</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
