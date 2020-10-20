import React from "react";
import Button from "./Button";

const renderButton = (name) => <Button name={name} />;

const ButtonPanel = () => {
  const buttonNames = {
    group1: ["AC", "+/-", "%", "÷"],
    group2: ["7", "8", "9", "X"],
    group3: ["4", "5", "6", "-"],
    group4: ["1", "2", "3", "+"],
    group5: ["0", ".", "="],
  };

  return (
    <div>
      <div id="group1">
        {renderButton(buttonNames.group1[0])}
        {renderButton(buttonNames.group1[1])}
        {renderButton(buttonNames.group1[2])}
        {renderButton(buttonNames.group1[3])}
      </div>
      <div id="group2">
        {renderButton(buttonNames.group2[0])}
        {renderButton(buttonNames.group2[1])}
        {renderButton(buttonNames.group2[2])}
        {renderButton(buttonNames.group2[3])}
      </div>
      <div id="group3">
        {renderButton(buttonNames.group3[0])}
        {renderButton(buttonNames.group3[1])}
        {renderButton(buttonNames.group3[2])}
        {renderButton(buttonNames.group3[3])}
      </div>
      <div id="group4">
        {renderButton(buttonNames.group4[0])}
        {renderButton(buttonNames.group4[1])}
        {renderButton(buttonNames.group4[2])}
        {renderButton(buttonNames.group4[3])}
      </div>
      <div id="group5">
        {renderButton(buttonNames.group5[0])}
        {renderButton(buttonNames.group5[1])}
        {renderButton(buttonNames.group5[2])}
      </div>
    </div>
  );
};

export default ButtonPanel;
