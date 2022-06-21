import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const PointsTag = (props) => {
  const content = props.children
  
  return (
    <Wrap> <Tag>적립</Tag> 구매 시 <span>{content}원 적립</span> </Wrap>
  )

}

const Wrap = styled.div`
font-size: 14px;
color: #333;

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