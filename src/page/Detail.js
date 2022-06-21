import React from "react";
import { useNavigate, useParams } from 'react-router-dom'

// CSS 관련
import styled from 'styled-components'
import { BiShareAlt } from 'react-icons/bi'
import { VscHeart, VscBell } from 'react-icons/vsc'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

// 컴포넌트
import RoundBtn from "../Elements/RoundBtn";
import QtyBtn from "../Elements/QtyBtn";
import SquareBtn from "../Elements/SquareBtn";
import PointsTag from "../Elements/PointsTag";
import ScrollBtn from "../Elements/ScrollBtn";

const Detail = (props) => {
  const [qty, setQty] = React.useState(1)

  return (
    <Wrap>
      <ScrollBtn/>
      <TitleArea>
        <Thumb/>
        <TitleTexts>
          <h1>[바버] 1833 체다 치즈</h1>
          <h5>가격, 퀄리티 모두 만족스러운 1A등급 우유</h5>
          <p><span>{(1970).toLocaleString()}</span>원</p>
          <span>적립 제외 상품입니다.</span>

          <GoodsInfo>
            <dt>판매단위</dt>
            <dd>1통</dd>
          </GoodsInfo>

          <GoodsInfo>
            <dt>중량/용량</dt>
            <dd>200g</dd>
          </GoodsInfo>

          <GoodsInfo>
            <dt>원산지</dt>
            <dd>국내산</dd>
          </GoodsInfo>

          <GoodsInfo>
            <dt>포장타입</dt>
            <dd>냉장</dd>
          </GoodsInfo>

          <GoodsInfo>
            <dt>유통기한</dt>
            <dd> 가급적 빨리 섭취를 권장합니다. </dd>
          </GoodsInfo>

          <GoodsInfo>
            <dt>안내사항</dt>
            <dd>-신선식품의 특성상 상품의 중량에 3% 차이가 발생할 수 있습니다. 길게길게</dd>
          </GoodsInfo>

          <GoodsInfo>
            <dt>구매수량</dt>
            <dd><QtyBtn qty={qty} setQty={setQty}/></dd>
          </GoodsInfo>

          <Sum>
            <TotalPrice>총 상품 금액 : <span className="num">{(1970*qty).toLocaleString()}</span> <span className="won">원</span> </TotalPrice>
            <PointsTag>0</PointsTag>
          </Sum>

          <ButtonArea>
            <HeartBtn><VscHeart/></HeartBtn>
            <BellBtn><VscBell/></BellBtn>
            <SquareBtn filled={true} style={{ width:'76%'}}>장바구니 담기</SquareBtn>
          </ButtonArea>


        </TitleTexts> 
      </TitleArea>
      <RoundBtn size='small' onClick={()=> console.log('ok')} style={{position:'absolute', top: '10px', right: '10px'}}><BiShareAlt/> </RoundBtn>
    </Wrap>
  );
}

const Wrap = styled.div`
position: relative;
margin: auto;
width:1050px;
`

const Thumb = styled.div`
width: 430px;
height: 552px;
background: ${(props) => props.imgUrl ? 'url(' + props.imgUrl + ')' : '#ddd'};
margin:20px;
`

const TitleArea = styled.div`
display:flex;
gap: 50px;
`

const TitleTexts = styled.div`
display:flex;
flex-direction: column;
`

const GoodsInfo = styled.dl`
display:flex;
font-size: 14px;
padding: 15px 0px;
border-bottom: 1px solid #f4f4f4;
margin:0px;

dt {
  width: 120px;
  color: #666;
}

dd {
  margin: 0px;
  color: #333;
}
`
const Sum = styled.div`
  margin: 15px 0px;
  display:flex;
  flex-direction: column;
  align-items:flex-end;
`

const TotalPrice = styled.div`
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size : 13px;

  .num {
    margin-left: 8px;
    font-size : 32px;
    font-weight: 700;
  }

  .won {
    font-size : 20px;
  }
`

const ButtonArea = styled.div`
margin: 10px 0px;
display:flex;
gap: 8px;
`

const HeartBtn = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 56px;
  height: 56px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size : 27px;
  padding:0px;
  color: #5f0081;
  cursor:pointer;
`

const BellBtn = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 56px;
  height: 56px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size : 27px;
  padding:0px;
  color: #ccc;
`


export default Detail;