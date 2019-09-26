import React, {useState} from 'react'
import Dialog, {alert, confirm, modal} from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false)
  const openModal = () => {

     const close = modal(<h1>你好
     <button onClick={() => close()}>close</button>
     </h1>)
  }
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visable={x} closeOnClickMask={true} buttons={
        [
          <button onClick={() => {setX(false)}}>ok</button>,
          <button onClick={() => {setX(false)}}>cancle</button>
        ]
      } onClose={() => {setX(false)}}>
        <div>hi</div>
      </Dialog>
      <button onClick={()=>{alert("1")}}>alert</button>
      <button onClick={()=>{confirm("1", ()=>{console.log('yes')}, ()=>{console.log('no')})}}>confirm</button>
      <div>
        <h1>modal</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  )
}
export default DialogExample;