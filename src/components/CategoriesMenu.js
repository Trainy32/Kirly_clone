import React from "react";
import axios from "axios";
import { customAxios } from "../shared/Request";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'


const CategoriesMenu = () => {
  const navigate = useNavigate() 
  const [menuList, setMenuList] = React.useState(null)

  React.useEffect(()=>{
    customAxios.get('/api/category')
    .then((response) => setMenuList(response.data.depth1DtoList))
  },[])

  const moveTo = (e, param) => {
    e.stopPropagation()
    navigate('/category/'+param)
  }

  return (
    <CategoryWrap>
      { menuList?.map((m,i) => (
      <Menu key={i}>
        <div className="depth1" onClick={(e)=> {moveTo(e, m.id)}}>
          { m.name }
        </div>
        <div className="depth2">
             { m.depth2DtoList.map((submenu, i) => (
              <div key={i} className="subMenu" onClick={(e)=> moveTo(e, submenu.id)}>{submenu.name}</div>
              )) }
        </div>
      </Menu>
      ) )}
    </CategoryWrap>
  )
}

const CategoryWrap = styled.div`
  display:flex;
  flex-direction:column;  
  position:relative;  
  width:200px;
  height:600px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff;
`
const Menu = styled.div`
  font-weight: 400;
  color: #333;

  .depth1{
    box-sizing:border-box;
    width:200px;
    padding:10px 20px;
    background-color: #fff;
    cursor:pointer;

    &:hover {
      font-weight: 500;
      color:#5f0080;
    }
  }

  .depth2{
    position:absolute;
    top: -1px;
    left:200px;
    width:200px;
    display:none;
    background-color: #f3f3f3;
    box-sizing:border-box;
    border: 1px solid #ccc;
    height:600px;
  }
  .subMenu{
    box-sizing:border-box;
    width:200px;
    padding:10px 20px;
    cursor:pointer;

    &:hover {
      font-weight: 500;
      color:#5f0080;
      text-decoration: underline;
    }
  }

  &:hover {
    .depth2{
    display:block;
  }
  }
`

export default CategoriesMenu