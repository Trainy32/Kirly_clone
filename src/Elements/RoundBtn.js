import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const RoundBtn = (props) => {
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
  width: ${(props) => props.size === 'small' ? '40px' : '60px'};
  height: ${(props) => props.size === 'small' ? '40px' : '60px'};
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 120px;
  font-size : ${(props) => props.size === 'small' ? '22px' : '30px'};
  padding:0px;

  ${(props) => props.style}
`

export default RoundBtn