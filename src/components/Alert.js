import React from "react";
import styled from 'styled-components'

const Alert = (props) => {
  const msg = props.msg;

  return (
    <div>
        <ModalHead> 알림 메시지 </ModalHead>
        <Content> { msg } </Content>
    </div>
  )
}

const ModalHead = styled.div`
  margin-bottom: 10px;

  color: #5f0080;
  font-weight: 500;
  font-size: 14px;

  span {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 30px;
    font-weight: 100;
    color: #aaa;
    transform: rotate(45deg);
    cursor:pointer;
  }
`

const Content = styled.div`
  border-top: 1px solid #aaa;
  width: 100%;
  padding: 40px 0px 30px; 
  text-align: center;
  color: #666;
  font-weight: 400;
  font-size: 14px;
`

export default Alert