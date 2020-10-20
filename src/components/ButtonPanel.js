import React from 'react'
import { Button } from "./Button";

export class ButtonPanel extends React.Component {
  constructor(props){
    super(props)
  }

  renderButton(name){
    return <Button name={name}/>
  }

  render(){
    const buttonNames = {
      group1: ['AC', '+/-', '%', '÷'],
      group2: ['7', '8', '9', 'X'],
      group3: ['4', '5', '6', '-'],
      group4: ['1', '2', '3', '+'],
      group5: ['0', '.', '=']
    }

    return (
      <div>
        <div id="group1">
          {this.renderButton(buttonNames.group1[0])}
          {this.renderButton(buttonNames.group1[1])}
          {this.renderButton(buttonNames.group1[2])}
          {this.renderButton(buttonNames.group1[3])}
        </div>
        <div id="group2">
          {this.renderButton(buttonNames.group2[0])}
          {this.renderButton(buttonNames.group2[1])}
          {this.renderButton(buttonNames.group2[2])}
          {this.renderButton(buttonNames.group2[3])}
        </div>
        <div id="group3">
          {this.renderButton(buttonNames.group3[0])}
          {this.renderButton(buttonNames.group3[1])}
          {this.renderButton(buttonNames.group3[2])}
          {this.renderButton(buttonNames.group3[3])}
        </div>
        <div id="group4">
          {this.renderButton(buttonNames.group4[0])}
          {this.renderButton(buttonNames.group4[1])}
          {this.renderButton(buttonNames.group4[2])}
          {this.renderButton(buttonNames.group4[3])}
        </div>
        <div id="group5">
          {this.renderButton(buttonNames.group5[0])}
          {this.renderButton(buttonNames.group5[1])}
          {this.renderButton(buttonNames.group5[2])}
        </div>
      </div>
    )
  }
}