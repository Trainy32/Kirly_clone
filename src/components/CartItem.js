import React from "react";

// 리덕스 관련 Imports
import { useDispatch, useSelector } from 'react-redux'

import { delete_cart_AX, update_qty_AX, select_item } from "../redux/modules/cart";

// CSS 관련 Imports
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc';

//컴포넌트 
import CheckLabel from "../Elements/CheckLabel";
import QtyBtn from "../Elements/QtyBtn";

const CartItem = (props) => {
  const dispatch = useDispatch()

  const data = props.data
  const checkChange = props.checkChange
  const [isChecked, setIsChecked] = React.useState(true)

  React.useEffect(() => {
    setIsChecked(checkChange)
    dispatch(select_item(data.detailID, isChecked))
  }, [checkChange])

  const [qty, setQty] = React.useState(data.quantity)

  const priceSum = data.price * qty

  const deleteItem = () => {
    if(window.confirm('삭제하시겠습니까?')){
      const deleteItem = [{productId: data.productId}]
      dispatch(delete_cart_AX(deleteItem))
      window.location.reload()
    }
  }

  const selectAction = () => {
    dispatch(select_item(data.detailID, !isChecked))
    setIsChecked(!isChecked)
  }

  const changeQty = (new_qty) => {
    const updateItem = { ...data, quantity: new_qty }
    dispatch(update_qty_AX(updateItem))
    setQty(new_qty)
  }

  return (
    <Item>
      <CheckLabel isChecked={isChecked} setIsChecked={selectAction}/>
      <Thumb img_url={data.thumb}/>
      <h4>{data.name}</h4>
      <QtyBtn qty={qty} setQty={changeQty} minVal={1}/>
      <p>{priceSum.toLocaleString()}원</p>
      <span onClick={deleteItem}><VscChromeClose/></span>
    </Item>
  )
}


const Item = styled.div`
  display:flex;
  align-items: center;
  color: #333;

  h4 {
    font-weight: 500;
    width: 50%;
  }

  p {
    font-weight: 500;
    text-align: right;
    width: 100px;
    margin: 0px 20px 0px 40px;
  }

  span {
    font-size: 18px;
    color: #ccc;
    cursor:pointer
  }
`
const Thumb = styled.div`
  width: 60px;
  min-width: 60px;
  height: 78px;
  background: ${(props) => props.img_url ? 'url(' + props.img_url + ')' : '#ddd'};
  background-size:cover;
  margin: 20px;
`

export default CartItem
