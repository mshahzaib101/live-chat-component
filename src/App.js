import React, { Component } from 'react';
import LiveChat from './Component/LiveChat';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{'display':'flex', 'color': '#1565c0', 'justifyContent': 'center','alignItems': 'center', 'height':'100vh', 'fontSize': '40px'}}>
      WEBSITE
      </div>
      <LiveChat />
      </div>
    );
  }
}

export default App;
