import logo from './logo.svg';
import './App.css';
import Letters from './component/Letters';
import Hint from './component/Hint';
import Score from './component/Score';
import Solution from './component/Solution';

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      litterStatus: this.generateLetterStatuses(),
      solution: {
        word: "HARRY",
        hint: "abra cadabra wizard  Name  "
      },
      score: 100
    }
  }
  render() {
    { console.log(this.state.litterStatus) }
    return (
      <div className="App">
        <Score score={this.state.score}></Score>
        <Solution LitterStatus={this.state.litterStatus} solution={this.state.solution}></Solution>
        <Letters LitterStatus={this.state.litterStatus}></Letters>
        <input placeholder="enter Word"></input>
        <button >click</button>
      </div>
    );
  }
  checkWord() {

  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
}



export default App;
