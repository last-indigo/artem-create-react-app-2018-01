import React, { Component } from 'react';

import logo from './logo.svg';
import Skills from './skills/Skills';
import './App.css';

// TODO: find out where this code belongs
import './bank-account-redux/bank-account';

import { myFirstStore } from './App.store';
import { LoggerComponent } from './utils-artem/logger-artem.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerVisible: true,
      userName: "Artem",
      skills: ['Front-end', 'Software', 'Angular', 'React']
    }
  }

  render() {
    const userName = this.state.userName;

    let headerVisibleHintHTMLFromIfStatement;
    if (this.state.headerVisible) {
      headerVisibleHintHTMLFromIfStatement = (
        <p>HINT: You see me when this.state.headerVisible === true</p>
      );
    }

    return (
      <div className="App">
        {headerVisibleHintHTMLFromIfStatement}

        <div>
          <button
            onClick={this.onToggleHeaderBtnClick.bind(this)}>
            Toggle header
          </button>
        </div>


        {this.state.headerVisible &&
          <header
            onClick={this.onHeaderClick.bind(this)}
            className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome, my name is: {userName}</h1>
            <p>HINT: click the header or the button above to toggle header visibility :)</p>
          </header>
        }

        My skills are:
        <Skills
          skills={this.state.skills}
          onSkillAdd={this.onSkillAdd.bind(this)}/>
        
        <hr/>
        Reusing the Skills component
        <hr/>

        <Skills
          skills={['some', 'other', 'skills list', 'withour onSkillAdd callback']}>
          <div>
            I am a child element!  
          </div>
        </Skills>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LoggerComponent loggerHistory={myFirstStore.getState().loggerHistory}/>
      </div>
    );
  }

  onSkillAdd() {
    const randomSkill = Date.now();
    this.addSkill(randomSkill);
  }

  addSkill(newSkill) {
    this.setState({skills: [...this.state.skills, newSkill]});
  }

  onToggleHeaderBtnClick() {
    this.toggleHeader();
  }
  
  onHeaderClick() {
    this.toggleHeader();
  }

  toggleHeader() {
    this.setState({headerVisible: !this.state.headerVisible});
  }

}

export default App;
