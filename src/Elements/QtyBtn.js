import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const QtyBtn = (props) => {
  const qty = props.qty
  const setQty = props.setQty
  const qty_ref = React.useRef(null)
  const minVal = props.minVal ? props.minVal : 0

  React.useEffect(()=>{
    qty_ref.current.value = qty
  },[qty])

  const substract = () => {
    if(qty > minVal) {
      setQty(qty-1)
    }
  }

  return (
    <BtnWrap>
      <Minus onClick={substract} qty={qty} min={minVal} ><FaMinus /></Minus>
      <input ref={qty_ref} defaultValue={1} readOnly/>
      <button onClick={()=> setQty(qty+1)}><FaPlus /></button>
    </BtnWrap>
  )

}

const Minus = styled.button`
  color: ${(props) => props.qty === props.min ? '#ccc':'#333'};
`

const BtnWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 85px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding:0px;
  color: #333;
  ${(props) => props.style}

  button{
    display:flex;
    justify-content:center;
    align-items:center;
    width: 30px;
    background-color: #fff;
    border: 0px;
    font-size : 11px;
    cursor: pointer;
  }

  input{
    width: 25px;
    background-color: #fff;
    border: 0px;
    text-align:center;
    outline:none;
    font-size : 16px;
    font-weight: 500;
  }
`

export default QtyBtn