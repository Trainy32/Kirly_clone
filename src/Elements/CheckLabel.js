import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'
import { HiCheck } from 'react-icons/hi';

const CheckLabel = (props) => {
  const is_checked = props.is_checked
  const radius = props.radius
  const style = props.style

  
  return (
    <CheckBox><HiCheck is_checked={is_checked} radius={radius} style={style}/></CheckBox>
  )
}

const CheckBox = styled.div `
  display:flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.radius ? props.radius+'px' : '22px'};
  height: ${(props) => props.radius ? props.radius+'px' : '22px'};
  margin: 2px 5px 0px 0px;
  padding: 0px;
  font-size: 18px;
  color: ${(props) => props.is_checked ? '#fff' : '#ddd'};
  border: 1px solid ${(props) => props.is_checked ? '#5f0080' : '#ddd'};
  border-radius: ${(props) => props.radius ? props.radius+'px' : '22px'};
  background-color: ${(props) => props.is_checked ? '#5f0080' : '#fff'};

  ${(props) => props.style}
`

export default CheckLabel
