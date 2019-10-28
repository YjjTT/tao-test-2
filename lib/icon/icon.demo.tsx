import * as React from "react";
import Demo from "../../demo";
import IconExample from "./icon.example";

const code = require('!!raw-loader!./icon.example.tsx');

const IconDemo = () => {
  return (
    <div className="button_demo_container">
      <section>
        <h1>Icon 图标</h1>
        <p>点击开始使用</p>
      </section>
      <section>
        <h1>何时使用</h1>
        <p>响应用户点击行为,触发响应业务逻辑</p>
      </section>
      <div className="button_demo_container_example">
        <div className="container">
          <Demo code={code.default} subtitle="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。">
            <IconExample />
          </Demo>
        </div>
      </div>
    </div>
  );
};
export default IconDemo;