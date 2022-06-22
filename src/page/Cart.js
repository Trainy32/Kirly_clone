import React from "react";

// 리덕스 관련 Imports
import { useDispatch, useSelector } from 'react-redux'
import { load_cart_AX } from "../redux/modules/cart";

// CSS 관련
import styled from 'styled-components'
import { GrLocation } from 'react-icons/gr';
import { IoSearch } from 'react-icons/io5';

//컴포넌트 
import CartItem from "../components/CartItem";
import CheckLabel from "../Elements/CheckLabel";
import SquareBtn from "../Elements/SquareBtn";
import PayEsteem from "../components/PayEsteem";

import CartCategoryTitle from "../Elements/CartCategoryTitle";

function Cart() {
  const dispatch = useDispatch()

  // 장바구니 정보 받아오기
  React.useEffect(() => {
    dispatch(load_cart_AX())
    setSelectedItems(only_items.filter((item) => item && item.selected))
  }, [])

  const userCart = useSelector((state) => state.cart.list)
  const only_items = userCart.map((category) => category.data).flat()

  // 전체 선택하기    
  const [isAllCheck, setIsAllCheck] = React.useState(true)
  const [checkChange, setCheckChange] = React.useState(isAllCheck)

  const allCheckAction = () =>{
    setIsAllCheck(!isAllCheck)
    setCheckChange(!isAllCheck)
  }

  const TotalItemCount = userCart?.reduce((acc,category) => category.data ? acc + (category.data.length) : acc, 0)

  const [selectedItems, setSelectedItems] = React.useState(null)

  React.useEffect(() => {
    setSelectedItems(only_items.filter((item) => item && item.selected))
  }, [userCart])

  return (<>
    <Title>장바구니</Title>
    <Wrap>
      <CartContents>
        <Menu>
          <span><CheckLabel isChecked={isAllCheck} setIsChecked={allCheckAction}>전체선택</CheckLabel>({selectedItems?.length}/{TotalItemCount})</span>
          <hr />
          <span>선택삭제</span>
        </Menu>

        {
          userCart?.map((category, index) => {
            return category.result ? (
              <CategoryBox key={index}>
                <CartCategoryTitle type={category.package}/>
                {
                  category.data.map((item, item_index) => (
                    <CartItem key={item_index} data={{...item, package:category}} checkChange={checkChange}/>
                  ))
                }
              </CategoryBox>
            ) : null
          })
        }

        <Menu>
        <span><CheckLabel isChecked={isAllCheck} setIsChecked={allCheckAction}>전체선택</CheckLabel>({selectedItems?.length}/{TotalItemCount})</span>
          <hr />
          <span>선택삭제</span>
        </Menu>
      </CartContents>

      <OrderInfo>
        <DeliverTo>
          <h3><GrLocation />배송지</h3>

          <p>
            <span className="highlighted">배송지를 입력</span>하고<br />
            배송유형을 확인해보세요!
          </p>

          <DeliveryType className="highlighted" >샛별배송</DeliveryType>
          <DeliveryType>택배배송</DeliveryType>

          <SquareBtn style={{ height: '36px', fontSize: '12px', fontWeight: '700', marginTop: '15px' }}><IoSearch /> 주소 검색</SquareBtn>
          {/* <SquareBtn style={{height:'36px', fontSize:'12px', fontWeight:'700', marginTop:'15px'}}>배송지 변경</SquareBtn> */}

        </DeliverTo>

        <PayEsteem />

        <SquareBtn filled={true}>주문하기</SquareBtn>

        <AdditionalInfo>
          <li>· 쿠폰/적립금은 주문서에서 사용 가능합니다</li>
          <li>· [배송준비중] 이전까지 주문 취소 가능합니다.</li>
          <li>· [마이컬리&gt;주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
        </AdditionalInfo>
      </OrderInfo>

    </Wrap>
  </>
  );
}

const Wrap = styled.div`
  margin: 10px auto 180px auto;
  width:1050px;
  display: flex;
`
const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  margin: 40px 0px;
  color: #333;
`
const CartContents = styled.div`
width: 750px;
`

const Menu = styled.div`
  display:flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #4c4c4c;
  margin: 15px 0px;

  span {
    display:flex;
    align-items: center;
    margin: 0px;
  }

  hr {
    border:0px;
    width:1px;
    margin:0px 15px;
    height:14px;
    border-left: 1px solid #ddd;
  }
`

const CategoryBox = styled.div`
  margin: 0px 0px 0px 0px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #f3f3f3;

    h3 {
      font-size:18px;
      font-weight: 500;
      display:flex;
      align-items: center;
      gap: 5px;
    }
`

const OrderInfo = styled.div`
  margin: 55px 10px 10px 20px;
  width:284px;
  
  li{
    font-size: 12px;
    line-height: 22px;
    padding:0px;
    margin:0px;
    list-style-type:none;
    color:#666;
  }

  .highlighted {
    color: #5f0081;
  }
`

const DeliverTo = styled.div`
  border:1px solid #f2f2f2;
  box-sizing:border-box;
  width:284px;
  padding:20px;
  font-weight: 500;
  color: #333;
  
  p{
    margin: 10px 0px;
  }

  h3{
    font-size: 16px;
    font-weight: 500;
    display:flex;
    align-items: center;
    gap: 5px;
    margin: 0px;
  }
`

const DeliveryType = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const AdditionalInfo = styled.ul`
  margin: 35px 0px;
  padding:0px;
`


export default Cart;