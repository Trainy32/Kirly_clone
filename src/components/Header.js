import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import kutty from "../css/kutty.png";

import { GiHamburgerMenu } from 'react-icons/gi';
import { BiMap } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

function Header () {
    const navigate = useNavigate();

    return (
        <>
        <Head>
            <Container>
            <Btn>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입&nbsp;&nbsp;&nbsp;|
            </button>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              로그아웃&nbsp;&nbsp;&nbsp;|
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인&nbsp;&nbsp;&nbsp;|
            </button>
                <Select>
                  <option>고객센터▼</option>
                  <div className="op">
                  <option>공지사항</option>
                  <option>자주하는 질문</option>
                  <option>1:1 문의</option>
                  <option>대량주문 문의</option>
                  <option>상품 제안</option>
                  <option>에코포장 피드백</option>
                  </div>
                </Select>
              </Btn>
            </Container>
            <Home onClick={()=> navigate('/')}></Home>
        </Head>
        <Btn2>
        <Select2>
        <GiHamburgerMenu/>
          전체 카테고리      
        </Select2>
        <button>신상품</button>
        <button>베스트</button>
        <button>알뜰쇼핑</button>
        <button>특가/혜택</button>
        <Search type="text" placeholder=" 검색어를 입력해주세요.">
        </Search>
        <button><BiMap/></button>
        <button><AiOutlineHeart/></button>
        <button><BsCart2/></button>
        </Btn2>
        </>
    )
};
const Head = styled.div`
  height: 150px;
  background: url(${kutty}) no-repeat;
  background-position: center;
`;
const Home = styled.div`
/* background-color: green; */
width: 50%;
height: 70%;
cursor: pointer;
`
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
  margin-right: 17%;
  border: none;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 12px;
    font-weight: bold;
    color: black;
    :hover {
      /* color: black; */
      color: purple;
    }
  button {
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
    }
`;
const Select = styled.div`
  width: 70px;
  height: 30px;
  background: white;
  color: black;
  font-size: 12px;
  border: none;
  
  option {
    cursor: pointer;
    color: black;
    background: white;
    display: flex;
    min-height: 20px;
    margin-top: 6px;
    
  }
  .op {
    visibility : hidden;
  }
  &:hover {
    .op {
      visibility: visible;
  }
}
`;

const Btn2 = styled.ul`
  width: 70%;
  height: 100px;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 17px;
    font-weight: bold;
    color: black;
    margin-right: 50px; 
    :hover {
      /* color: black; */
      color: purple;
      text-decoration: underline;
    }
`;

const Search = styled.input`
  background-color: #F5F5F5;
  border-radius: 20px;
  border: none;
  height: 40px;
  margin-right: 20px;
`;

const Select2 = styled.div`
  width: 11%;
  height: 25px;
  background: white;
  color: black;
  padding-left: 0px;
  font-size: 16px;
  border: none;
  margin-right: 30px;
  option {
    cursor: pointer;
    color: black;
    background: white;
    display: flex;
    min-height: 20px;
    margin-top: 6px;
    
  }
  .op2 {
    visibility : hidden;
  }
  &:hover {
    /* color: black; */
    color: purple;
    .op2 {
      visibility: visible;
    }
  }
`;

export default Header;