import React, { Component } from 'react';

class App extends Component {
  doThis() {
      console.log("CLICKED")
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.doThis()}>App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;
