import React from "react";
import axios from "axios";
import { customAxios } from "../shared/Request";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom'
import ToCartBtn from "../Elements/ToCartBtn";

const Category = (props) => {
  const navigate = useNavigate()
  const params = useParams()

  const [thisCategory, setThisCategory] = React.useState(null)

  React.useEffect(() => {
    customAxios.get('/api/category/' + params.categoryNo)
      .then(response => {
        console.log(response)
        setThisCategory(response.data.productDto)
      })
  }, [params.categoryNo])


  const [order,setOrder] = React.useState('basic')

  const orderAction =(type)=>{
    setOrder(type)
  }

  return (
    <Wrap>
      <Title>신상품</Title>

      <Info>
        <span>총 {thisCategory?.length}개</span>
        <Order> 
          <OrderOption selected={order === 'basic'} onClick={() => orderAction('basic')}>기본순</OrderOption> <hr/>
          <OrderOption selected={order === 'new'} onClick={() => orderAction('new')}>신상품순</OrderOption> <hr/>
          <OrderOption selected={order === 'lowprice'} onClick={() => orderAction('lowprice')}>낮은 가격순 </OrderOption><hr/>
          <OrderOption selected={order === 'highprice'} onClick={() => orderAction('highprice')}>높은 가격순</OrderOption>
        </Order>
      </Info>

      <List>
        {
          thisCategory?.map((p, i) => (
            <Card key={i}>
              <Image img_url={p.thumb}><ToCartBtn style={{ position: 'absolute', bottom: '20px', right: '20px' }} /></Image>
              <Contents>
                <h2>{ p.name }</h2>
                <h3>{ p.price }</h3>
                <p>{ p.summary }</p>
              </Contents>
            </Card>
          ))
        }

      </List>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin: 10px auto 180px auto;
  width:1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`
const Title = styled.h1`
  margin:auto;
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  margin: 40px 0px;
  color: #333;
`
const Info = styled.sub`
  width:100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Order = styled.div`
  font-size: 12px;
  display: flex;

hr {
  margin: 5px;
  width:0px;
  border:0px;
  height: 10px;
  border-left : 1px solid #ccc;
}

`

const OrderOption = styled.span`
  color: ${(props) => props.selected ? '#333' : '#aaa'};
  font-weight: ${(props) => props.selected ? '500' : '400'};
`

const List = styled.div`
  margin: 10px auto 180px auto;
  width:1050px;
  display: flex;
  justify-content:center;
`

const Image = styled.div`
  width: 338px;
  height:435px;
  background: ${(props) => props.img_url ? 'url(' + props.img_url + ')' : '#ddd'};
  background-size:cover;
  position: relative;
`


const Contents = styled.div`
  font-weight: 400;

h2{
  font-weight: 400;
  margin: 10px 0px 0px 0px;
  padding:0px;
}

h3{
  margin: 8px 0px 0px 0px;
  padding:0px;
}

p{
  margin: 5px 0px 0px 0px;
  padding:0px;
  font-size: 13px;
  color:#999;
}
`

const Card = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
`

export default Category