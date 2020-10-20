import React from 'react';
import Button from './Button';

const renderButton = (name, width = 25) => <Button name={name} width={width} />;

const ButtonPanel = () => (
  <div className='buttonPanel'>
    <div className='buttonGroup' id="group1">
      {renderButton('AC')}
      {renderButton('+/-')}
      {renderButton('%')}
      {renderButton('÷')}
    </div>
    <div className='buttonGroup' id="group2">
      {renderButton('7')}
      {renderButton('8')}
      {renderButton('9')}
      {renderButton('X')}
    </div>
    <div className='buttonGroup' id="group3">
      {renderButton('4')}
      {renderButton('5')}
      {renderButton('6')}
      {renderButton('-')}
    </div>
    <div className='buttonGroup' id="group4">
      {renderButton('1')}
      {renderButton('2')}
      {renderButton('3')}
      {renderButton('+')}
    </div>
    <div className='buttonGroup' id="group5">
      {renderButton('0', 50)}
      {renderButton('.')}
      {renderButton('=')}
    </div>
  </div>
);

export default ButtonPanel;
