import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const SquareBtn = (props) => {
  const content = props.children
  const filled = props.filled
  const action = props.onClick  
  const style = props.style
  const small = props.small

  return (
    <Btn filled={filled} onClick={action} small={small} style={style}> {content} </Btn>
  )
}

const Btn = styled.button `
  display: flex;
  justify-content:center;
  align-items:center;

  width:370px;
  height: ${(props) => props.small ? '48px' : '56px'};
  border-radius: 3px;
  font-size: ${(props) => props.small ? '14px' : '16px'};
  font-weight: 500;
  cursor:pointer;  
  
  border: ${(props) => props.filled ? 'none' : '1px solid #5f0080'};
  background: ${(props) => props.filled ? '#5f0080' : '#fff'};
  color: ${(props) => props.filled ? '#fff' : '#5f0080'};

  ${(props) => props.style}
`
export default SquareBtn