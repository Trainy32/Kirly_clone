import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { VscAdd } from 'react-icons/vsc';

const AlertModal = (props) => {
  console.log(props.data)
  const { open, msg, title } = props.data;
  const [ isOpen, setIsOpen ] = React.useState(open)

  const BackDropClose = () => {

  }

  const modalClose = () => {

  }

  return isOpen ? (
    <BackDrop>
      <Wrap>
        <ModalHead> 알림메시지 <span onClick={()=>setIsOpen(false)} ><VscAdd/></span> </ModalHead>
        <Content> { msg } </Content>
        <ConfirmBtn onClick={()=>setIsOpen(false)}> 확인 </ConfirmBtn>
      </Wrap>
    </BackDrop>
  ) : null
}

const BackDrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #00000080;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
const Wrap = styled.div`
  width: 420px;
  padding: 25px;
  background: #fff;
  border-radius: 10px;

  display:flex;
  flex-direction: column;
  justify-content: center;
`
const ModalHead = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 10px;

  color: #5f0080;
  font-weight: 500;
  font-size: 14px;

  span {
    margin: -10px 0px;
    font-size: 30px;
    font-weight: 100;
    color: #aaa;
    transform: rotate(45deg);
    cursor:pointer;
  }
`
const ConfirmBtn = styled.button`
  margin: 20px auto 10px auto;
  width:160px;
  height: 45px;
  border: none;
  border-radius: 3px;
  background: #5f0080;
  font-weight: 500;
  color: #fff;
  cursor:pointer;
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

export default AlertModal