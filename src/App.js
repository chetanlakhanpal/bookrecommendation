import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";

class App extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
        </main>
      </div>
    );
  }
}

export default App;
