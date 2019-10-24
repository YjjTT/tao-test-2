import * as React from "react";
import {HTMLAttributes, useEffect, useRef, useState} from "react";
import './scroll.scss';
import scrollbarWidth from './scroll-width';
import {UIEventHandler} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0)
  const [barTop, setBarTop] = useState(0);
  const onScroll: UIEventHandler = (e) => {
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight; // 滚动全高
    const viewHeight = current!.getBoundingClientRect().height; // 可视区域高度
    const scrollTop = current!.scrollTop;
    setBarTop(scrollTop * viewHeight / scrollHeight);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{ // mounted的时候 算滚动条的高度
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight; // 滚动全高
    const viewHeight = current!.getBoundingClientRect().height; // 可视区域高度
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);
  return (
    <div className="tui-scroll" {...rest}>
      <div className="tui-scroll-inner" style={{right: -scrollbarWidth()}}
           ref={containerRef}
           onScroll={onScroll}>
        {props.children}
      </div>
      <div className="tui-scroll-track">
        <div className="tui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}} />
      </div>
    </div>
  );
};
export default Scroll;