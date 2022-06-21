import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'

const ScrollBtn = (props) => {

  return (
    <Btn onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>  </Btn>
  )

}

const Btn = styled.button`
  position: fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 120px;
  font-size : 30px;
  padding:0px;
`

export default ScrollBtn