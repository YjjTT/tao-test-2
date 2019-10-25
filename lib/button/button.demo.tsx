import * as React from "react";
import Demo from "../../demo";
import ButtonExample from "./button.example";
import './button.demo.scss';

const code = require('!!raw-loader!./button.example.tsx');

const ButtonDemo = () => {
  return (
    <div className="button_demo_container">
      <section>
        <h1>Button 按钮</h1>
        <p>点击开始使用</p>
      </section>
      <section>
        <h1>何时使用</h1>
        <p>响应用户点击行为,触发响应业务逻辑</p>
      </section>
      <div className="button_demo_container_example">
        <div className="container">
          <Demo code={code.default}>
            <ButtonExample />
          </Demo>
        </div>
        <div className="container">
          <Demo code={code.default}>
            <ButtonExample />
          </Demo>
        </div>
      </div>
    </div>
  );
};
export default ButtonDemo;