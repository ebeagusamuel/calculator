import React from "react";
import Button from "./Button";

const ButtonPanel = (props) => {
  // function handleClick(buttonName) {
  //   return props.clickHandler(buttonName)
  // }
  let {clickHandler} = props

  return (
    <div className="buttonPanel">
      <div className="buttonGroup" id="group1">
        <Button name="AC" color="ash" onClick={clickHandler}/>
        <Button name="+/-" color="ash" onClick={clickHandler}/>
        <Button name="%" color="ash" onClick={clickHandler}/>
        <Button name="÷" onClick={clickHandler}/>
      </div>
      <div className="buttonGroup" id="group2">
        <Button name="7" color="ash" onClick={clickHandler}/>
        <Button name="8" color="ash" onClick={clickHandler}/>
        <Button name="9" color="ash" onClick={clickHandler}/>
        <Button name="x" onClick={clickHandler}/>
      </div>
      <div className="buttonGroup" id="group3">
        <Button name="4" color="ash" onClick={clickHandler}/>
        <Button name="5" color="ash" onClick={clickHandler}/>
        <Button name="6" color="ash" onClick={clickHandler}/>
        <Button name="-" onClick={clickHandler}/>
      </div>
      <div className="buttonGroup" id="group4">
        <Button name="1" color="ash" onClick={clickHandler}/>
        <Button name="2" color="ash" onClick={clickHandler}/>
        <Button name="3" color="ash" onClick={clickHandler}/>
        <Button name="+" />
      </div>
      <div className="buttonGroup" id="group5">
        <Button name="0" wide color="ash" onClick={clickHandler}/>
        <Button name="." color="ash" onClick={clickHandler}/>
        <Button name="=" onClick={clickHandler}/>
      </div>
    </div>
  );
};

export default ButtonPanel;
