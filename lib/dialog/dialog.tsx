import React, {Fragment, ReactElement} from 'react'
import './dialog.scss'
import Icon from "../icon/icon";
import {scopedClassMaker} from "../classes";

interface Props {
  visable: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('tui-dialog')
const tui = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if(props.closeOnClickMask){
      props.onClose(e)
    }
  }
  return (
    props.visable ?
      <Fragment>
        <div className={tui('mask')} onClick={onClickMask}></div>
        <div className={tui()}>
          <div className={tui('close')} onClick={onClickClose}>
            <Icon name="close"/>
          </div>
          <header className={tui('header')}>
            提示
          </header>
          <main className={tui('main')}>
            {props.children}
          </main>
          <footer className={tui('footer')}>
            {props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
          </footer>
        </div>
      </Fragment>
      :
      null
  )
}
Dialog.defaultProps = {
  closeOnClickMask: false
}
export default Dialog;