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



  const productDesc_ref = React.useRef(null)
  const productDetail_ref = React.useRef(null)


  return (
    <Wrap>
      <ScrollBtn />      
      <RoundBtn size='small' onClick={() => console.log('ok')} style={{ position: 'absolute', top: '10px', right: '10px' }}><BiShareAlt /> </RoundBtn>
      <TitleArea>
        <Thumb img_url={'https://img-cf.kurly.com/shop/data/goods/1653965528732y0.jpg'}/>
        <TitleTexts>
          <h1>[바버] 1833 체다 치즈</h1>
          <h5>가격, 퀄리티 모두 만족스러운 1A등급 우유</h5>

          <PriceInfo>
            <p><span className="num">{(1970).toLocaleString()}</span>원</p>
            <PointsInfo>적립 제외 상품입니다.</PointsInfo>
          </PriceInfo>

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
            <dd><QtyBtn qty={qty} setQty={setQty} /></dd>
          </GoodsInfo>

          <Sum>
            <TotalPrice>총 상품 금액 : <span className="num">{(1970 * qty).toLocaleString()}</span> <span className="won">원</span> </TotalPrice>
            <PointsTag>0</PointsTag>
          </Sum>

          <ButtonArea>
            <HeartBtn><VscHeart /></HeartBtn>
            <BellBtn><VscBell /></BellBtn>
            <SquareBtn filled={true} style={{ width: '76%' }}>장바구니 담기</SquareBtn>
          </ButtonArea>


        </TitleTexts>
      </TitleArea>

      <StickyHeader>
        <div onClick={() => productDesc_ref.current.scrollIntoView({ behavior:'smooth' })}>상품설명</div>
        <div onClick={() => productDetail_ref.current.scrollIntoView({ behavior:'smooth' })}>상세정보</div>
        <div onClick={() => window.alert('지금은 이용할 수 없어요!')}>후기</div>
        <div onClick={() => window.alert('지금은 이용할 수 없어요!')}>문의</div>
      </StickyHeader>

      <ProductDetail>
        <MainImage ref={productDesc_ref} img_url={'https://img-cf.kurly.com/shop/data/goodsview/20220531/gv00000321516_1.jpg'}/>
        <div>
          <h3>쌈채소부터 샐러드까지 다채롭게</h3>
          <h2>친환경 로메인 (적/청)</h2>
        </div>
        <hr/>
        <p ref={productDetail_ref}>로메인은 이제 상추만큼이나 친숙한 채소로 자리 잡았죠. 산뜻한 샐러드는 물론이고, 샌드위치의 속재료나 쌈채소로도 다양하게 활용할 수 있는데요. 이번에는 두 가지 색상의 로메인을 수확한 그대로 보내드릴게요. 아삭아삭하면서 청량감이 퍼지는 청로메인과 좀 더 부드러운 식감의 적로메인이랍니다. 농약을 사용하지 않고 깨끗하게 기른 채소라 생으로 먹기에도 안심일 거예요. 싱그러움 가득한 친환경 로메인으로 오늘의 밥상에 생기를 더해 보세요.</p>
        <AdditionalInfo src={'img/additionalInfo.jpg'} />
      </ProductDetail>

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
  background: ${(props) => props.img_url ? 'url(' + props.img_url + ')' : '#ddd'};
  background-position: center;
  background-size: cover;
  margin:20px;
`

const TitleArea = styled.div`
  display:flex;
  gap: 50px;
`

const TitleTexts = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 20px;
  color: #333;

  h1 {
    font-weight: 500;
    font-size : 24px;
    margin: 5px 0px;
  }

  h5 {
    color: #999;
    font-weight: 400;
    font-size : 14px;
    margin:0px;
  }
`
const PriceInfo = styled.div`
  font-size : 18px;
  margin : 30px 0px 15px;

  p{
    margin: 0px;
  }

  .num {
    font-size : 28px;
    font-weight: 500;
    margin-right: 2px; 
  }
`

const PointsInfo = styled.span`
  font-size: 14px;
  color: #5f0081;
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
  margin: 10px 0px 80px;
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

const StickyHeader =styled.div`
  position:sticky;
  top:0px;
  display:flex;
  width: 1010px;

  div{
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing: border-box;
    width: 25%;
    height: 60px;
    border: 1px solid #eee;
    background: #FAFAFA;
    color: #666;
    cursor:pointer;
  }
`

const ProductDetail = styled.div`
  margin: 40px 0px;

  div {
    text-align: center;
    color: #666;
    word-break: break-all;
  }

  h3 {
    font-weight: 400;
    font-size : 24px;
    margin: 60px 0px 0px 0px;
  }

  h2 {
    font-weight: 500;
    font-size : 38px;
    margin: 0px 0px 30px 0px;
  }

  hr {
    border: 0px;
    border-bottom: 1px solid #ccc;
  }

  p {
    font-weight: 300;
    font-size : 18px;
    line-height: 32px;
    margin: 30px 5px 0px 5px;

    scroll-margin: 80px;
  }
`
const MainImage = styled.div`
  background: ${(props) => props.img_url ? 'url(' + props.img_url + ')' : '#ddd'};
  background-position: center;
  background-size: cover;

  width: 1010px;
  height: 670px;

  scroll-margin: 80px;
`
const AdditionalInfo = styled.img`
  margin-top: 100px;
  width: 1000px;
`

export default Detail;