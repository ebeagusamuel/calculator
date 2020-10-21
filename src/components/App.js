/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: '0',
      next: '',
      operation: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonName){
    let calObj = this.state
    let result = calculate(calObj, buttonName)
    this.setState(result)
  }

  render(){
    return (
      <div className="containerDiv">
        <Display result={this.state} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
