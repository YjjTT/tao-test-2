import * as React from "react";
import {HTMLAttributes, MouseEventHandler, useEffect, useRef, useState} from "react";
import './scroll.scss';
import scrollbarWidth from './scroll-width';
import {UIEventHandler} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
}
// 判断是否是触屏
// const isTouchDevice: boolean = 'ontouchstart' in document.documentElement;

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [scrollBarVisible, setScrollBarVisible] = useState(false)
  const setBarTop = (number: number) => {
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight; // 滚动全高
    const viewHeight = current!.getBoundingClientRect().height; // 可视区域高度
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
    if (number < 0) {return;}
    if (number > maxBarTop) {return;}
    _setBarTop(number);
  };
  const timerIdRef = useRef<number | null>(null);
  const onScroll: UIEventHandler = (e) => {
    setScrollBarVisible(true);
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight; // 滚动全高
    const viewHeight = current!.getBoundingClientRect().height; // 可视区域高度
    const scrollTop = current!.scrollTop;
    setBarTop(scrollTop * viewHeight / scrollHeight);
    if (timerIdRef.current !== null){
      window.clearTimeout(timerIdRef.current!)
    }
    timerIdRef.current = window.setTimeout(()=>{
      setScrollBarVisible(false);
    }, 300);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => { // mounted的时候 算滚动条的高度
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight; // 滚动全高
    const viewHeight = current!.getBoundingClientRect().height; // 可视区域高度
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);

  useEffect(()=>{

  }, [scrollBarVisible]);

  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTopRef = useRef(0);
  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };

  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta
      setBarTop(newBarTop);
      const {current} = containerRef;
      const scrollHeight = current!.scrollHeight; // 滚动全高
      const viewHeight = current!.getBoundingClientRect().height; // 可视区域高度
      current!.scrollTop = newBarTop * scrollHeight / viewHeight;
    }
  };

  const onMouseUpBar = () => {
    draggingRef.current = false;
  };

  const onSelect = (e: Event) => {
    if (draggingRef.current) {e.preventDefault()}
  }

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart', onSelect)
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('selectstart', onSelect)
    };
  }, []);
  return (
    <div className="tui-scroll" {...rest}>
      <div className="tui-scroll-inner" style={{right: -scrollbarWidth()}}
           ref={containerRef}
           onScroll={onScroll}>
        {props.children}
      </div>
      {scrollBarVisible &&
      <div className="tui-scroll-track">
        <div className="tui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}}
             onMouseDown={onMouseDownBar}
        />
      </div>}
    </div>
  );
};
export default Scroll;