import React, {Fragment, ReactElement, ReactNode} from 'react'
import ReactDom from 'react-dom';
import './dialog.scss'
import Icon from "../icon/icon";
import {scopedClassMaker} from "../classes";

interface Props {
  visable: boolean;
  buttons?: Array<ReactElement>;
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
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }
  const result = props.visable ?
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
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={tui('footer')}>
            {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
          </footer>
        }
      </div>
    </Fragment>
    :
    null
  return (
    ReactDom.createPortal(result, document.body)
  )
}
Dialog.defaultProps = {
  closeOnClickMask: true
}
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDom.render(React.cloneElement(component, {visable: false}), div)
    ReactDom.unmountComponentAtNode(div)
    div.remove()
  }
  const component =
    <Dialog
      visable={true}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDom.render(component, div)
  return close
}
const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>
  const close = modal(content, [button])
}
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close()
    yes && yes()
  };
  const onNo = () => {
    close()
    no && no()
  };
  const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>]
  const close = modal(content, buttons, no)
}
export {alert, confirm, modal}
export default Dialog;