import React from "react";

import { useDispatch, useSelector } from 'react-redux'

// CSS 관련 Imports
import styled from 'styled-components'
import PointsTag from "../Elements/PointsTag";

const PayEsteem = (props) => {
  const selectedItems = useSelector((state) => state.cart.itemsOnly)

  const minForFreeDeliver = 50000
  const [subTotal, setSubTotal] = React.useState(0)
  const [deliverFree, setDeliverFree] = React.useState(subTotal > minForFreeDeliver || subTotal === 0 )
  const deliveryCost = deliverFree ? 0 : 3000

  React.useEffect(()=>{
    const cal = selectedItems?.filter((item) => item.selected).reduce((acc,item) => acc+(item.price * item.quantity),0)
    setSubTotal(cal)
    setDeliverFree(subTotal > minForFreeDeliver || subTotal === 0)
  },[selectedItems])

  return (
    <PayEst>
      <dl>
        <dt> 상품 금액 </dt>
        <dd> {subTotal?.toLocaleString()}<span> 원 </span></dd>
      </dl>

      <dl>
        <dt>상품 할인금액 </dt>
        <dd> 0 <span>원 </span></dd>
      </dl>

      <dl>
        <dt> 배송비 </dt>
        <dd> {'+ '+deliveryCost.toLocaleString()} <span>원 </span></dd>
      </dl>
      { deliverFree ? null : <p id="freeDelivery"> { (minForFreeDeliver - subTotal).toLocaleString()} 원 추가주문 시, <b>무료배송</b></p> }
      <hr />

      <dl>
        <dt>결제 예정금액</dt>
        <dd><Total>{(subTotal+deliveryCost).toLocaleString()}</Total><Won>원</Won></dd>
      </dl>

      <span id="points"><PointsTag fontSize={'12px'} color={'#666'}>0</PointsTag></span>
    </PayEst>
  )

}


const PayEst = styled.div`
  box-sizing:border-box;
  width:284px;
  background-color: #fafafa;
  border:1px solid #f2f2f2;
  margin-bottom: 20px;
  padding:20px;

  dl {
    display:flex;
    justify-content: space-between;
    color: #4c4c4c;
    margin: 0px 0px 15px;
  }
  
  dd {
    font-size: 18px;
  }

  #freeDelivery {
    color: #5f0081;
    margin-top: -10px;
    font-size: 12px;
    text-align: right;
 
  }

  hr {
    border:0px;
    border-bottom: 1px solid #f2f2f2;
    margin: 20px 0px;
  }

  #points {
    display:flex;
    justify-content: flex-end;
  }
`

const Won = styled.span`
font-size:16px;
margin-left: 2px;
`

const Total = styled.span`
font-size: 22px;
font-weight: 500;
`

export default PayEsteem