import * as React from "react";
import Demo from "../../demo";
import IconExample from "./icon.example";

const code = require('!!raw-loader!./icon.example.tsx');

const IconDemo = () => {
  return (
    <Demo code={code.default}>
      <IconExample/>
    </Demo>
  );
};
export default IconDemo;