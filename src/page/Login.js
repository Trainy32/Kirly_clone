import React from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
  const navigate = useNavigate()  
  const userId = React.useRef(null)


  return (
    <Wrap>
      <h1>로그인</h1>
      <input type='text' ref={userId} placeholder='아이디를 입력해주세요'></input>
      <input type='text' ref={userId} placeholder='비밀번호를 입력해주세요'></input>

      <LoginOptions>
        <label> <input ref={userId} type='checkbox' />보안접속</label>
      </LoginOptions>

      <button className="loginBtn" >로그인</button>
      <button className="joinBtn" onClick={() => navigate('/signup')}>회원가입</button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items : center;
  margin:auto; 
  width: 370px;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    color: #333;
  }

  input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 10px auto;
    padding: 15px;
    width: 340px;

    &:focus {
      border: 1px solid #666;
    }

    &::placeholder {
      color: #ccc;
      font-size: 14px;
      font-weight: 700;
    }
  }

  button {
    width:370px;
    height:56px;
    margin: 10px auto;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    cursor:pointer;
  }
  
  .loginBtn {
      background: #5f0080;
      color: #fff;
    }

    .joinBtn {
      border: 1px solid #5f0080;
      background: #fff;
      color: #5f0080;
    }
`

const LoginOptions = styled.div`
  input[type=checkbox]{
    width: 10px;
    height: 10px;
    margin: 10px auto;
  }
`

export default Login;