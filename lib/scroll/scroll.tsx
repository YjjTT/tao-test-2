import * as React from "react";
import {HTMLAttributes} from "react";
import './scroll.scss';
import scrollbarWidth from './scroll-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  return (
    <div className="tui-scroll" {...rest}>
      <div className="tui-scroll-inner" style={{right: -scrollbarWidth()}}>
        {props.children}
      </div>
    </div>
  );
};
export default Scroll;