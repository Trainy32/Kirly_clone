import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import kutty from "../css/kutty.png";
import { useDispatch, useSelector } from "react-redux";
// Icon import
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiMap } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi'


import CategoriesMenu from "./CategoriesMenu";

const Header = () => {
    const navigate = useNavigate();
    const islogin = useSelector((state) => state.user.isLogin);
    const user = useSelector((state) => state.user.user.user);
    return (
        <>
        <Head>
            <Container>
            <Btn>

            {islogin ? (
              <>
              <span>{user} 님</span>
            <span
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              로그아웃&nbsp;&nbsp;&nbsp;|
            </span></>
            ) : (
              <>
              <span
              onClick={() => {
                // <Gen>일반</Gen>
                navigate("/signup");
              }}
              >
              회원가입&nbsp;&nbsp;&nbsp;|
            </span>          
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인&nbsp;&nbsp;&nbsp;|
            </span>
              
              </>

                  )}
                <Select>
                  <span className="last">고객센터 <RiArrowDownSFill/></span>
                  <div className="op">
                  <span>공지사항</span>
                  <span>자주하는 질문</span>
                  <span>1:1 문의</span>
                  <span>대량주문 문의</span>
                  <span>상품 제안</span>
                  <span>에코포장 피드백</span>
                  </div>
                </Select>
              </Btn>
            </Container>
            <Home onClick={()=> navigate('/')}></Home>
        </Head>


        <Btn2>
        <Allcategory>
        <button onClick={()=> navigate('/category/001')}><GiHamburgerMenu/>  전체 카테고리    </button>
        <div className="categoryView"><CategoriesMenu/></div>
        </Allcategory>
        <button onClick={()=> navigate('/category/001')} >신상품</button>
        <button onClick={()=> navigate('/category/002')} >베스트</button>
        <button onClick={()=> navigate('/category/003')} >알뜰쇼핑</button>
        <button onClick={()=> navigate('/category/004')} >특가/혜택</button>
        <Search type="text" placeholder=" 검색어를 입력해주세요.">
        </Search> <SearchIcon><FiSearch/></SearchIcon>
        <button className="icons"><BiMap/></button>
        <button className="icons"><AiOutlineHeart/></button>
        <button className="icons" onClick={()=> navigate('/cart')}><BsCart2/></button>
        </Btn2>
        </>
    )
};
const Head = styled.div`
  height: 120px;
  background: url(${kutty}) no-repeat;
  background-position: center;
  background-size: 120px;
`;
const Home = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 70%;
  cursor: pointer;
  `;

const Container = styled.div`
  width: 100%;
  height: 30px;
  color: white;
  /* border-bottom: 2px solid #78909C; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: flex-end;
  /* background: url(${kutty});
    background-size: cover; */
  /* background-color: white; */
`;

const Btn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
  border: none;
  font-size: 11spx;
  font-weight:400;
  gap: 10px;

  span {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 12px;
    font-weight:400;
    color: black;
    :hover {
      color: purple;
    }
  }

  span {
        &:last-child {
        cursor: pointer;
        border: none;
        background-color: transparent;
        font-size: 10px;
        color: black;
        :hover {
        /* color: black; */
        color: purple;
        }
      }
    };
  
  .last {
    display:flex;
    align-items: center;
  }
`

const Select = styled.div`
  width: 70px;
  height: 30px;
  background: white;
  color: black;
  font-size: 12px;
  font-weight: 500;
  border: none;
  
  
  span {
    cursor: pointer;
    color: black;
    background: white;
    display: flex;
    min-height: 20px;
    margin-top: 6px;
    font-size: 12px;
  }
  .op {
    visibility : hidden;
    border: 1px solid #ccc;
    width: 70px;
    padding: 10px;
  }
  &:hover {
    .op {
      visibility: visible;
  }
}
`;

const Btn2 = styled.div`
  width: 1000px;
  height: 60px;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  font-weight: 700;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin: 0px 15px; 
    :hover {
      color: purple;
      text-decoration: underline;
    }


  }    
  
  .icons{
    font-size: 28px;
    margin:0px 0px 0px 0px;
    }
`;

const Search = styled.input`
  background-color: #F5F5F5;
  border-radius: 30px;
  border: none;
  height: 36px;
  width: 180px;
  margin: 0px 35px 0px -10px;
  padding :0px 10px;
  border: 0px;
  outline: none;
  &:focus {
    background-color: white;
  }
`;

const SearchIcon = styled.span`
font-size: 20px;
margin:0px;
padding:0px;
margin-left: -80px; 
`

const Allcategory = styled.div`
  font-weight: 700;
  background: white;
  color: black;
  font-size: 16px;
  border: none;
  position:relative;
  padding: 20px 0px;

  .categoryView {
    display:none;
    /* position:absolute */
    position:fixed;
    top : 178px;
    left: 350px;
    z-index: 99;
  }

  &:hover {
    color: purple;
    text-decoration: none;
    .op2 {
      visibility: visible;
    }

    .categoryView {
    display:block;

    :hover {
      display:block;
    }
  }
  }

`;

const Gen = styled.span`
  border: 1px solid #5f0080;
  background-color: #fff;
  color: #5f0080;
  margin-top: 1.5px;
  min-width: 38px;
  height: 16px;
  padding: 0 4px;
  border-radius: 30px;
  font-size: 9px;
  line-height: 14px;
  text-align: center;
  margin-right: 3px;
`;

export default Header;