import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import instance, { customAxios } from "../shared/Request";
import { useDispatch, useSelector } from 'react-redux'
import { set_user } from "../redux/modules/user";

import { setCookie } from "../shared/Cookie";

// CSS 관련 
import { HiCheck } from 'react-icons/hi';
import styled from 'styled-components'

const Login = (props) => {
  const navigate = useNavigate() 
  const dispatch = useDispatch() 
  const id_ref = React.useRef(null)
  const pw_ref = React.useRef(null)

  const [secureLogin, setSecureLogin] = useState(true)

  const loginAction =  (e) => {
    // e.preventDefault()

    if (id_ref.current.value === '' || pw_ref.current.value === '') {
      window.alert('아이디 혹은 패스워드를 정확히 입력해주세요')
    } else {
      const loginData = {
        username : id_ref.current.value,
        password : pw_ref.current.value 
      }

      customAxios.post('/api/user/login', loginData)
      .then(response => {
        window.alert(response.data.errorMsg)
        // setCookie('Authorization', response.data.token)
        // localStorage.setItem("refresh_token", response.data.refreshToken);
        dispatch(set_user(response.data.nickname))
        localStorage.setItem("authorization", response.data.token);
      })
    }
  }

  return (
    <Wrap>
      <h1>로그인</h1>
      <input type='text' ref={id_ref} placeholder='아이디를 입력해주세요'></input>
      <input type='password' ref={pw_ref} placeholder='비밀번호를 입력해주세요'></input>

      <LoginOptions>
        <CheckBox is_checked={secureLogin} onClick={() => setSecureLogin(!secureLogin)}><HiCheck/></CheckBox> 
        <label> <input checked={secureLogin} onChange={() => setSecureLogin(!secureLogin)} type='checkbox' />보안접속</label>
      </LoginOptions>

      <button className="loginBtn" onClick={(e) => loginAction(e)} >로그인</button>
      <button className="joinBtn" onClick={() => navigate('/signup')}>회원가입</button>
    </Wrap>
  );
}

const Wrap = styled.form`
  display:flex;
  flex-direction:column;
  align-items : center;
  margin:auto; 
  width: 370px;

  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    color: #333;
    margin-bottom: 30px;
  }

  input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 10px auto 0px auto;
    padding: 20px;
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
    margin: 10px auto 0px auto;
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
  display:flex;
  align-items: center;
  margin: 10px auto 20px auto;
  width: 370px;
  font-size: 13px;
  color: #333;

  input[type=checkbox]{
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
`
const CheckBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    margin: 2px 5px 0px 0px;
    padding: 0px;
    font-size: 15px;
    color: #fff;
    border: 1.5px solid ${(props) => props.is_checked ? '#5f0080' : '#bbb'};
    border-radius: 3px;
    background-color: ${(props) => props.is_checked ? '#5f0080' : '#fff'}
`

export default Login;