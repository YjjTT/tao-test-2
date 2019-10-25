import React from 'react';
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button level="normal">按钮</Button>
      <Button level="important">按钮</Button>
      <Button level="danger">按钮</Button>
    </div>
  );
};
export default ButtonExample;