import React, {useState} from 'react'
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false)
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
    </div>
  )
}
export default DialogExample;