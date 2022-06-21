import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import UseTerm from './UseTerm'

const TermsView = (props) => {
  const TermsType = props.TermsType.type;
  const Title = props.TermsType.title
  const isRequired =  props.TermsType.isRequired? '(필수)' : '(선택)' 

  return (
    <div>
      <TitleArea>{Title} <span>{isRequired}</span></TitleArea>
      <Content>
        <UseTerm/>
      </Content>
    </div>
  )
}

const TitleArea = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #4c4c4c;
  margin: 10px 0px 30px 10px;

  span {
    font-size: 22px;
    font-weight: 400;
    color: #999;
  }
`

const Content = styled.div`
  margin: 10px;
  height: 400px;
  overflow: scroll;
  font-size: 14px;
  font-weight: 400;
  color: #4c4c4c;
`
export default TermsView