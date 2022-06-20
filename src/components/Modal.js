import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { VscAdd } from 'react-icons/vsc';
import Portal from "../components/Portal";

const Modal = (props) => {
  const setModalOpen = props.setModalOpen;
  const backDrop_ref = React.useRef(null)

  const backDropClose = (e) => {
    if (e.target === backDrop_ref.current) {
      setModalOpen(false)
    } 
  }

  return (
    <Portal>
      <BackDrop ref={backDrop_ref} onClick={(e) => backDropClose(e)}>
        <Wrap>
          <CloseBtn onClick={()=>setModalOpen(false)} ><VscAdd/></CloseBtn> 
            { props.children }
            { props.btn ? <ConfirmBtn onClick={()=>setModalOpen(false)}> 확인 </ConfirmBtn> : null }
        </Wrap>
      </BackDrop>
    </Portal>
  )
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
  position: relative;
  width: 420px;
  padding: 25px;
  background: #fff;
  border-radius: 10px;

  display:flex;
  flex-direction: column;
  justify-content: center;
`

const CloseBtn = styled.span`
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 30px;
    font-weight: 100;
    color: #aaa;
    transform: rotate(45deg);
    cursor:pointer;
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

export default Modal