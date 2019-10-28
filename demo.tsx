import React, {useState} from "react";
import Highlight, {defaultProps} from 'prism-react-renderer';
import './demo.scss';

interface Props {
  code: string,
  subtitle?: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisiable, setCodeVisiable] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
          </pre>
      )}
    </Highlight>
  )
  return (
    <div className="example_container">
      <div className="example">
        {props.children}
      </div>
      <div className="demo_container">
        <p>{props.subtitle}</p>
        {props.subtitle && <img src={require('./lib/icons/sandbox.png')} alt="" onClick={() => setCodeVisiable(!codeVisiable)}/>}
      </div>
      <div className="code_container">
        {codeVisiable && code}
      </div>
    </div>
  );
};

export default Demo;