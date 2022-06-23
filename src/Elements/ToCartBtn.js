import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const ToCartBtn = (props) => {
  // console.log(props)
  const content = props.children
  const action = props.onClick
  const size = props.size
  const style = props.style
  
  return (
    <Btn onClick={action} size={size} style={style}> {content} </Btn>
  )

}

const Btn = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 45px;
  height: 45px;
  background: url('https://res.kurly.com/pc/ico/2010/ico_cart.svg');
  background-size: cover;
  border: 0px;
  border-radius: 120px;
  font-size : ${(props) => props.size === 'small' ? '22px' : '30px'};
  padding:0px;
  cursor:pointer;

  ${(props) => props.style}
`

export default ToCartBtn