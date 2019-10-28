import React, {ReactElement} from "react";
import "./introduce.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}
const Introduce: React.FunctionComponent<Props> = () => {
  return (
    <div className="introduction">
      <section>
        <h1>TUI-react</h1>
        <p>TUI-react是一套PC端的组件库, 色彩、样式的设计参考了其他成熟的组件库。</p>
      </section>
      <section>
        <h1>使用TypeScript</h1>
        <p>TypeScript提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。TUI-react 完全使用 TypeScript 编写，有效增强了代码的健壮性。</p>
      </section>
      <section>
        <h1>没有额外依赖</h1>
        <p>TUI-react 只依赖 React、ReactDOM 两个核心库以及 PropTypes 进行类型检查，没有其他外部依赖。</p>
      </section>
    </div>
  )
}
export  default Introduce;