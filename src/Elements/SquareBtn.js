import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const SquareBtn = (props) => {
  const content = props.children
  const filled = props.filled
  const action = props.onClick  
  const style = props.style

  return (
    <Btn filled={filled} onClick={action} style={style}> {content} </Btn>
  )
}

const Btn = styled.button `
  width:370px;
  height:56px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  cursor:pointer;  
  
  border: ${(props) => props.filled ? 'none' : '1px solid #5f0080'};
  background: ${(props) => props.filled ? '#5f0080' : '#fff'};
  color: ${(props) => props.filled ? '#fff' : '#5f0080'};

  ${(props) => props.style}
`
export default SquareBtn