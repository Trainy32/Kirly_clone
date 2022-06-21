import React from "react";

import CheckLabel from '../Elements/CheckLabel'

// CSS 관련
import styled from 'styled-components'


function Cart() {
  return (
    <Wrap>
      <h1>장바구니</h1>

      <Menu> 
        <span>전체선택 (3/3)</span> 
        <span>선택삭제</span> 
      </Menu>

      <div>
        <h3>냉장 상품</h3>
        <div>
          
        </div>
      </div>

      <div>
        <h3>냉동 상품</h3>
      </div>

      <div>
        <h3>상온 상품</h3>
      </div>
      

    </Wrap>
  );
}

const Wrap = styled.div`
  margin: auto;
  width:1050px;

  h1 {
    margin: auto;
    text-align: center;
  }
`

const Menu = styled.div`
border-bottom: 1px solid #333;
`



export default Cart;