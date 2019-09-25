import React, {Fragment} from 'react'
import './dialog.scss'
import Icon from "../icon/icon";
import {scopedClassMaker} from "../classes";

interface Props {
  visable: boolean,
}

const scopedClass = scopedClassMaker('tui-dialog')
const tui = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visable ?
      <Fragment>
        <div className={tui('mask')}></div>
        <div className={tui()}>
          <div className={tui('close')}>
            <Icon name="close"/>
          </div>
          <header className={tui('header')}>
            提示
          </header>
          <main className={tui('main')}>
            {props.children}
          </main>
          <footer className={tui('footer')}>
            <button>ok</button>
            <button>cancle</button>
          </footer>
        </div>
      </Fragment>
      :
      null
  )
}
export default Dialog;