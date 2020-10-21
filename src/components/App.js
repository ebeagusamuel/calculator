/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayObj: {
        total: '',
        next: '',
        operation: '',
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { displayObj } = this.state;
    const result = calculate(displayObj, buttonName);
    this.setState({ displayObj: result });
  }

  render() {
    const { displayObj } = this.state;
    return (
      <div className="containerDiv">
        <Display result={displayObj} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
