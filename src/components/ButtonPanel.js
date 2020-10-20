import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="buttonPanel">
    <div className="buttonGroup" id="group1">
      <Button name="AC" color="ash" />
      <Button name="+/-" color="ash" />
      <Button name="%" color="ash" />
      <Button name="÷" />
    </div>
    <div className="buttonGroup" id="group2">
      <Button name="7" color="ash" />
      <Button name="8" color="ash" />
      <Button name="9" color="ash" />
      <Button name="X" />
    </div>
    <div className="buttonGroup" id="group3">
      <Button name="4" color="ash" />
      <Button name="5" color="ash" />
      <Button name="6" color="ash" />
      <Button name="-" />
    </div>
    <div className="buttonGroup" id="group4">
      <Button name="1" color="ash" />
      <Button name="2" color="ash" />
      <Button name="3" color="ash" />
      <Button name="+" />
    </div>
    <div className="buttonGroup" id="group5">
      <Button name="0" wide color="ash" />
      <Button name="." color="ash" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
