import React from 'react';
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button level="normal">Default</Button>
      <Button level="important">Primary</Button>
      <Button level="dashed">Dashed</Button>
      <Button level="danger">Danger</Button>
      <Button level="forbidden" disabled>Forbidden</Button>
    </div>
  );
};
export default ButtonExample;