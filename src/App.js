import React, { Component } from 'react';

import logo from './logo.svg';
import Skills from './skills/Skills';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Artem",
      skills: ['Front-end', 'Software', 'Angular', 'React']
    }
  }

  render() {
    const userName = this.state.userName;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, my name is: {userName}</h1>
        </header>
        
        My skills are:
        <Skills skills={this.state.skills}/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
