import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'
import { HiCheck } from 'react-icons/hi';
 
const CheckLabel = (props) => {
  const isChecked = props.isChecked
  const setIsChecked = props.setIsChecked
  const radius = props.radius
  const style = props.style

  const CheckAction = () => {
    setIsChecked(!isChecked)
  }
  
  return (
    <Label>
      <CheckBox checked={isChecked} radius={radius} style={style}><HiCheck/></CheckBox>
      <HiddenInput type='checkbox' checked={isChecked} onChange={CheckAction}/>
      { props.children }
    </Label>
  )
}

const Label = styled.label`
  display:flex;
  align-items: center;
  margin-right: 5px;
`

const HiddenInput = styled.input`
width: 0px;
height:0px;
margin:0px;
`
const CheckBox = styled.div `
  display:flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.radius ? props.radius+'px' : '22px'};
  height: ${(props) => props.radius ? props.radius+'px' : '22px'};
  margin: 2px 10px 0px 0px;
  padding: 0px;
  font-size: 18px;
  color: ${(props) => props.checked ? '#fff' : '#ddd'};
  border: 1px solid ${(props) => props.checked ? '#5f0080' : '#ddd'};
  border-radius: ${(props) => props.radius ? props.radius+'px' : '22px'};
  background-color: ${(props) => props.checked ? '#5f0080' : '#fff'};

  ${(props) => props.style}
`

export default CheckLabel
