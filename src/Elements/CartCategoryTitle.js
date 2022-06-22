import React from "react";

// CSS 관련
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CartCategoryTitle = (props) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const type = props.type

  switch (type) {
    case '냉장':
      return (
        <TitleWrap>
          <Title><img src={process.env.PUBLIC_URL + 'img/ico_cold.svg'} alt='icon' /> 냉장 상품 </Title> 
          <Arrow onClick={() => setIsOpen(!isOpen)}>{ isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</Arrow>
        </TitleWrap>
      )
    case '냉동':
      return (
        <TitleWrap>
          <Title><img src={process.env.PUBLIC_URL + 'img/ico_frozen.svg'} alt='icon' />냉동 상품</Title>
          <Arrow onClick={() => setIsOpen(!isOpen)}>{ isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</Arrow>
        </TitleWrap>
      )
    case '상온':
      return (
        <TitleWrap>
          <Title><img src={process.env.PUBLIC_URL + 'img/ico_room_v2.svg'} alt='icon' />상온 상품</Title>
          <Arrow onClick={() => setIsOpen(!isOpen)}>{ isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</Arrow>
        </TitleWrap>
      )
    default :
      return null;
  }
}

const TitleWrap = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
`

const Title = styled.h3`
  font-size:18px;
  font-weight: 500;
  display:flex;
  align-items: center;
  gap: 5px;
`

const Arrow = styled.span`
font-size: 24px;
margin: 5px 10px 0px 8px;
`

export default CartCategoryTitle