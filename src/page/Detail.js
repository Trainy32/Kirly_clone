import React from "react";
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

// CSS 관련
import styled from 'styled-components'
import { BiShareAlt } from 'react-icons/bi'
import { VscHeart, VscBell } from 'react-icons/vsc'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

// 컴포넌트
import RoundBtn from "../Elements/RoundBtn";
import QtyBtn from "../Elements/QtyBtn";
import SquareBtn from "../Elements/SquareBtn";
import PointsTag from "../Elements/PointsTag";
import ScrollBtn from "../Elements/ScrollBtn";
import AddToCart from "../components/AddToCart";

const Detail = (props) => {
  const params = useParams()
  const isLogin = props.isLogin

  const [thisProduct, setThisProduct] = React.useState(null)
  const [heartTogle, setHeartTogle] = React.useState(null)

  //상품 데이터 불러오기
  React.useEffect(() => {
    axios.get('http://localhost:5001/goods-test?id=' + params.productId)
    .then(response => setThisProduct(response.data[0]))
  }, [])

  // 구매수량 체크
  const [qty, setQty] = React.useState(1)

  //장바구니
  const [cartFooterOpen, setCartFooterOpen] = React.useState(false)

  const CartAction = () => {
    const newCartItem = {
    name:thisProduct?.name,
    thumb: thisProduct?.thumb,
    price: thisProduct?.price,
    qty: qty
  }
    AddToCart(newCartItem)
  }

  // 스크롤 메뉴를 위한 ref 
  const productDesc_ref = React.useRef(null)
  const productDetail_ref = React.useRef(null)

  return (
    <>
      <Wrap>
        <ScrollBtn />
        <RoundBtn size='small' onClick={() => console.log('ok')} style={{ position: 'absolute', top: '10px', right: '10px' }}><BiShareAlt /> </RoundBtn>
        <TitleArea>
          <Thumb img_url={thisProduct?.introImage} />
          <TitleTexts>
            <h1>{thisProduct?.name}</h1>
            <h5>{thisProduct?.summary}</h5>

            <PriceInfo>
              <p><span className="num">{ thisProduct?.price ? (thisProduct?.price).toLocaleString() : '잠시 기다려주세요'}</span>원</p>
              <PointsInfo> {isLogin ? '적립 제외 상품입니다.' : '로그인 후, 회원할인가와 적립혜택이 제공됩니다.'}</PointsInfo>
            </PriceInfo>

            <GoodsInfo>
              <dt>판매단위</dt>
              <dd>{thisProduct?.amount}</dd>
            </GoodsInfo>

            <GoodsInfo>
              <dt>중량/용량</dt>
              <dd>{thisProduct?.weight}</dd>
            </GoodsInfo>

            <GoodsInfo>
              <dt>원산지</dt>
              <dd>{thisProduct?.origin}</dd>
            </GoodsInfo>

            <GoodsInfo>
              <dt>포장타입</dt>
              <dd>{thisProduct?.packageType}</dd>
            </GoodsInfo>

            <GoodsInfo>
              <dt>유통기한</dt>
              <dd> {thisProduct?.expired > 0 ? thisProduct.expired+'일 남았습니다.' : '가급적 빨리 섭취를 권장합니다.'}  </dd>
            </GoodsInfo>

            <GoodsInfo>
              <dt>안내사항</dt>
              <dd> {thisProduct?.notice}</dd>
            </GoodsInfo>

            <GoodsInfo>
              <dt>구매수량</dt>
              <dd><QtyBtn qty={qty} setQty={setQty} /></dd>
            </GoodsInfo>

            <Sum>
              <TotalPrice>총 상품 금액 : <span className="num">{thisProduct?.price ? (thisProduct.price * qty).toLocaleString()  : '기다려주세요'}</span> 
              <span className="won">원</span> </TotalPrice>
              <PointsTag>0</PointsTag>
            </Sum>

            <ButtonArea>
              <HeartBtn heartTogle={heartTogle} onClick={()=> setHeartTogle(!heartTogle)}> { heartTogle ? <VscHeart /> : <IoMdHeart /> }</HeartBtn>
              <BellBtn><VscBell /></BellBtn>
              <SquareBtn filled={true} style={{ width: '76%' }} onClick={CartAction}>장바구니 담기</SquareBtn>
            </ButtonArea>


          </TitleTexts>
        </TitleArea>

        <StickyHeader>
          <div onClick={() => productDesc_ref.current.scrollIntoView({ behavior: 'smooth' })}>상품설명</div>
          <div onClick={() => productDetail_ref.current.scrollIntoView({ behavior: 'smooth' })}>상세정보</div>
          <div onClick={() => window.alert('지금은 이용할 수 없어요!')}>후기</div>
          <div onClick={() => window.alert('지금은 이용할 수 없어요!')}>문의</div>
        </StickyHeader>

        <ProductDetail>
          <MainImage ref={productDesc_ref} img_url={thisProduct?.viewImage} />
          <div>
            <h3>{thisProduct?.summary}</h3>
            <h2>{thisProduct?.name}</h2>
          </div>
          <hr />
          <p ref={productDetail_ref}>{thisProduct?.introDesc}</p>
          {/* <AdditionalInfo src={process.env.PUBLIC_URL+'img/additionalInfo.jpg'} /> */}
          <AdditionalInfo src={'https://firebasestorage.googleapis.com/v0/b/mymagazinepjt.appspot.com/o/postImg%2F1655809001396?alt=media&token=484da4e3-f477-4bd8-96a5-ef769b0f1271'} />
        </ProductDetail>

      </Wrap>

      <CartFooter cartFooterOpen={cartFooterOpen} >
        <div id="footerContent">
        <SquareBtn filled={true} small={true} style={{ width: '170px', marginTop:'-48px'}} onClick={() => setCartFooterOpen(!cartFooterOpen)}> 
          상품 선택 <Arrow>{ cartFooterOpen ? <BsChevronDown/> : <BsChevronUp/>}</Arrow>
        </SquareBtn>

        <CartItem>
          <h5>{thisProduct?.name}</h5>
          <QtyBtn qty={qty} setQty={setQty} />
          <p><span className="num">{thisProduct?.price ? (thisProduct?.price).toLocaleString() : '기다려주세요'}</span>원</p>
        </CartItem>

          <Sum>
            <TotalPrice>총 상품 금액 : <span className="cart_num">{thisProduct?.price ? (thisProduct.price * qty).toLocaleString()  : '기다려주세요'}</span> <span className="won">원</span> </TotalPrice>
            <PointsTag>0</PointsTag>
          </Sum>
          <ButtonArea>
            <HeartBtn><VscHeart /></HeartBtn>
            <BellBtn><VscBell /></BellBtn>
            <SquareBtn filled={true} style={{ width: '300px' }} onClick={CartAction}>장바구니 담기</SquareBtn>
          </ButtonArea>
        </div>
      </CartFooter>
    </>
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
  margin: 10px 0px 60px;
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
  color: ${(props) => props.heartTogle ? '#5f0081' : '#FF5A5A'};
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

const StickyHeader = styled.div`
  position:sticky;
  top:0px;
  display:flex;
  width: 1010px;
  margin-top: 20px;

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
  margin: 100px 0px;
  width: 1000px;
`

const CartFooter = styled.div`
  background-color: #fff;
  border-top: 2px solid #5f0081;
  width: 100vw;
  position: fixed;
  bottom: ${(props) => props.cartFooterOpen ? '0px' : '-265px'};
  
  #footerContent {
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    width: 900px;
    margin: auto;
  }

  .cart_num {
    margin-left: 8px;
    font-size : 28px;
    font-weight: 700;
  }
  
`
const Arrow = styled.span`
font-size: 16px;
margin: 5px 0px 0px 8px;
`

const CartItem = styled.div`
  display:flex;
  align-items: center;
  margin : 20px 0px 0px;
  padding: 7px 20px; 
  border-radius: 3px;
  width: 900px;
  background-color: #f7f7f7;
  color: #333;
  font-size: 15px;

  h5 {
    font-size: 15px;
    font-weight: 400; 
    width: 600px;
    margin: 0px 10px;
  }

  p {
    font-weight: 700;
    margin: 0px 0px 0px 100px;
  }
`


export default Detail;