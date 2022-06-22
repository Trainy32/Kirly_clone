import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const PointsTag = (props) => {
  const isLogin = props.isLogin
  const content = props.children
  const fontSize = props.fontSize
  const color = props.color
  const style = props.style

  return (
    <Wrap fontSize={fontSize} color={color} style={style}> <Tag>적립</Tag> 구매 시 <span>{content}원 적립</span> </Wrap>
  )

}

const Wrap = styled.div`
font-size: ${(props) => props.fontSize ? props.fontSize : '14px'};
color: ${(props) => props.color ? props.color : '#333'};

span {
  font-weight: 500;
}
`
const Tag = styled.span`
font-size: 11px;
background-color: #FFBF00;
color: white;

padding: 2px 8px;
border-radius: 10px;
margin-right: 2px;
`

export default PointsTag