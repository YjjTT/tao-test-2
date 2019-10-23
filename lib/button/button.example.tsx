import React from 'react';
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  const buttonClick = () => {
    console.log('点击');
  };
  return (
    <div style={{marginTop: 24}}>
      <Button onClick={buttonClick} level="normal">按钮</Button>
      <Button onClick={buttonClick} level="important">按钮</Button>
      <Button onClick={buttonClick} level="danger">按钮</Button>
    </div>
  );
};
export default ButtonExample;