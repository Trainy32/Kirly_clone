import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

// 외부 데이터
import axios from 'axios'
import DaumPostcode from 'react-daum-postcode'

// 컴포넌트
import AlertModal from "../components/AlertModal";

// CSS 관련
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5';
import { HiCheck } from 'react-icons/hi';

const Signup = (props) => {
  const navigate = useNavigate()

  // 모달창 컨트롤
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMsg, setModalMsg] = useState('이메일을 입력해주세요.')

  // 중복검사
  const [idDupCheck, setIdDupCheck] = useState(false)
  const [emailDupCheck, setEmailDupCheck] = useState(false)

  const dupCheckAction = (type) => {
    setModalOpen(true)
  }


  // 회원정보 받아오기
  const id_ref = React.useRef(null)
  const pw_ref = React.useRef(null)
  const pwCheck_ref = React.useRef(null)
  const name_ref = React.useRef(null)
  const email_ref = React.useRef(null)
  const tel_ref = React.useRef(null)
  const address_ref = React.useRef(null)


  // 회원가입
  const signUpAction = () => {

    const alertMsg =
      id_ref.current.value === '' ? '아이디를 입력해주세요'
        : !idDupCheck ? '아이디 중복 확인을 해주세요'
          : pw_ref.current.value === '' ? '비밀번호를 입력해주세요'
            : pwCheck_ref.current.value === '' ? '비밀번호를 한번 더 입력해주세요'
              : pw_ref.current.value === pwCheck_ref.current.value ? '비밀번호 확인이 일치하지 않아요'
                : name_ref.current.value === '' ? '이름을 입력해주세요'
                  : email_ref.current.value === '' ? '이메일 형식을 확인해주세요'
                    : !emailDupCheck ? '이메일 중복 확인을 해주세요'
                      : requiredCheck ? '필수 동의 항목에 체크해주세요'
                        : ''


    if (requiredCheck) {
      const userData = {
        username: id_ref.current.value,
        password: pwCheck_ref.current.value,
        nickname: name_ref.current.value,
        email: email_ref.current.value,
        phone: tel_ref.current.value,
        address: '서울시 00구 00로00길 10',
        addressDetail: '00동 00호',
        zoneNo: 12345
      }

      axios.post('http://localhost:5001/signup-test', userData)
        .then(response => console.log(response))

    } else {
      window.alert('alertMsg')
    }
  }

  // 약관 동의 여부 체크하는 부분
  const [useTermCheck, setUseTermCheck] = useState(false)
  const [privacyCheck, setPrivacyCheck] = useState(false)
  const [optPrivacyCheck, setOptPrivacyCheck] = useState(false)
  const [smsMktCheck, setSmsMktCheck] = useState(false)
  const [emailMktCheck, setEmailMktCheck] = useState(false)
  const [ageCheck, setAgeCheck] = useState(false)

  const [allCheck, setAllCheck] = useState(false)
  const [allMktCheck, setAllMktCheck] = useState(false)
  const [requiredCheck, setRequiredCheck] = useState(false)

  React.useEffect(() => {
    setAllCheck(useTermCheck && privacyCheck && optPrivacyCheck && ageCheck && smsMktCheck && emailMktCheck)
    setAllMktCheck(smsMktCheck && emailMktCheck)
    setRequiredCheck(useTermCheck && privacyCheck && ageCheck)
  }, [useTermCheck, privacyCheck, optPrivacyCheck, ageCheck, smsMktCheck, emailMktCheck])

  const allCheckAction = () => {
    setAllCheck(!allCheck)
    setUseTermCheck(!allCheck)
    setPrivacyCheck(!allCheck)
    setOptPrivacyCheck(!allCheck)
    setAgeCheck(!allCheck)
    setSmsMktCheck(!allCheck)
    setEmailMktCheck(!allCheck)
  }

  const MktCheckAction = () => {
    setAllMktCheck(!allMktCheck)
    setSmsMktCheck(!allMktCheck)
    setEmailMktCheck(!allMktCheck)
  }


  return (
    <>
      {modalOpen ? <AlertModal data={{ open: true, msg: modalMsg }} /> : null}

      <Wrap>
        <button onClick={() => navigate('/login')}> 임시: 로그인 가기</button>

        <h1>회원가입</h1>
        <p><RedStar>*</RedStar>필수 입력사항</p>

        <InputFields>
          <tbody>
            <tr>
              <th> <h4>아이디<RedStar>*</RedStar></h4> </th>
              <td> <input ref={id_ref} type='text' onChange={() => setIdDupCheck(false)} placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                <ul>
                  <li>6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                  <li>아이디 중복확인</li>
                </ul>
              </td>
              <td> <button className="checkBtn" onClick={() => dupCheckAction('id')}> 중복 확인 </button> </td>
            </tr>

            <tr>
              <th><h4>비밀번호<RedStar>*</RedStar></h4></th>
              <td><input ref={pw_ref} type='password' placeholder="비밀번호를 입력해주세요" />
                <ul>
                  <li>10자 이상 입력</li>
                  <li>영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합</li>
                  <li>동일한 숫자 3개 이상 연속 사용 불가</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th><h4>비밀번호 확인<RedStar>*</RedStar></h4></th>
              <td><input ref={pwCheck_ref} type='password' placeholder="비밀번호를 한번 더 입력해주세요" />
                <ul>
                  <li>동일한 비밀번호를 입력해주세요.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th><h4>이름<RedStar>*</RedStar></h4></th>
              <td><input ref={name_ref} type='text' placeholder="이름을 입력해주세요" /></td>
            </tr>

            <tr>
              <th><h4>이메일<RedStar>*</RedStar></h4></th>
              <td><input ref={email_ref} type='email' onChange={() => setEmailDupCheck(false)} placeholder="예: marketkurly@kurly.com" /></td>
              <td><button className="checkBtn" onClick={() => dupCheckAction('email')} > 중복 확인 </button></td>
            </tr>

            <tr>
              <th><h4>휴대폰<RedStar>*</RedStar></h4></th>
              <td><input ref={tel_ref} type='tel' placeholder="숫자만 입력해주세요" /></td>
            </tr>

            <tr>
              <th><h4>주소</h4></th>
              <td><button className="addressBtn"> <IoSearch /> 주소 검색 </button>
                <br /><sub>배송지에 따라 상품 정보가 달라질 수 있습니다.</sub></td>
            </tr>


            <tr id='termsSection'>
              <th><h4>이용약관 동의<RedStar>*</RedStar></h4></th>
              <td colSpan='2'><AllTermsLabel> <CheckBox is_checked={allCheck}><HiCheck/></CheckBox>
                <input type='checkbox' checked={allCheck} onChange={() => allCheckAction()} />전체 동의합니다. </AllTermsLabel>
                  <sub>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다. </sub></td>
            </tr>

            <tr>
              <td />
              <td ><TermsLabel> <CheckBox is_checked={useTermCheck}><HiCheck/></CheckBox>
                <input type='checkbox' checked={useTermCheck} onChange={() => setUseTermCheck(!useTermCheck)} />
                이용약관 동의 <span>(필수)</span> </TermsLabel>
              </td>
              <td><TermsBtn>약관보기 ></TermsBtn></td>
            </tr>

            <tr>
              <td />
              <td><TermsLabel> <CheckBox is_checked={privacyCheck}><HiCheck/></CheckBox>
                <input type='checkbox' checked={privacyCheck} onChange={() => setPrivacyCheck(!privacyCheck)} />
                개인정보 수집·이용동의 <span>(필수)</span> </TermsLabel>
              </td>
              <td><TermsBtn>약관보기 ></TermsBtn></td>
            </tr>

            <tr>
              <td />
              <td><TermsLabel> <CheckBox is_checked={optPrivacyCheck}><HiCheck/></CheckBox>
                <input type='checkbox' checked={optPrivacyCheck} onChange={() => setOptPrivacyCheck(!optPrivacyCheck)} />
                개인정보 수집·이용동의<span>(선택)</span> </TermsLabel>
              </td>
              <td><TermsBtn>약관보기 > </TermsBtn></td>
            </tr>

            <tr>
              <td />
              <td colSpan='2'>
                <TermsLabel> <CheckBox is_checked={allMktCheck}><HiCheck/></CheckBox>
                  <input type='checkbox' checked={allMktCheck} onChange={() => MktCheckAction()} />
                  무료배송,할인쿠폰 등 혜택/정보 수신동의<span>(선택)</span></TermsLabel>
                <MktCheck>
                  <div>
                    <TermsLabel> <CheckBox is_checked={smsMktCheck}><HiCheck/></CheckBox>
                      <input type='checkbox' checked={smsMktCheck} onChange={() => setSmsMktCheck(!smsMktCheck)} />SMS</TermsLabel>
                    <TermsLabel> <CheckBox is_checked={emailMktCheck}><HiCheck/></CheckBox>
                      <input type='checkbox' checked={emailMktCheck} onChange={() => setEmailMktCheck(!emailMktCheck)} />이메일</TermsLabel>
                  </div>
                  <p> └ 동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                </MktCheck>
              </td>
            </tr>

            <tr>
              <td />
              <td><TermsLabel><CheckBox is_checked={ageCheck}><HiCheck/></CheckBox>
                <input type='checkbox' checked={ageCheck} onChange={() => setAgeCheck(!ageCheck)} />
                본인은 만 14세 이상입니다.<span>(필수)</span></TermsLabel>
              </td>
            </tr>
          </tbody>
        </InputFields>

        <JoinBtn onClick={signUpAction}>가입하기</JoinBtn>

      </Wrap>
    </>
  );
}

export default Signup;

// #5f0080
// #4c4c4c
// #666

const Wrap = styled.div`
  width: 650px;
  margin:auto;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    color: #333;
  }

  p {
    text-align: right;
    font-size: 12px;
    color: #666;
    margin:0px;
  }
`
const InputFields = styled.table`
  margin:  10px auto;
  padding: 10px;
  font-size: 14px;
  border-spacing: 5px;
  border-top: 2px solid #333;
  border-bottom: 1px solid #eee;


  tr, th, td {
    vertical-align: top;
    border-bottom: 5px solid #fff0;
  }

  th {
    width: 600px;
    text-align: left;
    padding: 5px;
  }

  h4 {
    font-weight: 500;
    margin: 5px;
  }

  input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 15px;
    width: 300px;

    &:focus {
      border: 1px solid #666;
    }

    &::placeholder {
      color: #ccc;
      font-size: 14px;
      font-weight: 700;
    }
  }

  input[type=checkbox]{
    width: 0px;
    height: 0px;
  }

  button {
    height: 45px;
    border: 1px solid #5f0080;
    border-radius: 3px;
    background: #ffff;
    color: #5f0080;
    font-weight: 700;
    cursor:pointer;
  }

  .checkBtn {
    width: 120px;
  }

  .addressBtn {
    width: 350px;
  }

  ul {
    margin: 0px 20px 20px 0px;
    padding: 0px 20px;

  }

  li {
    font-size: 12px;
    font-weight: 400;
    color: #666;
  }

  sub {
    color: #666;
  }
`
const termsSection = styled.tr`
`



const RedStar = styled.span`
color:red;
`

const AllTermsLabel = styled.label`
  display:flex;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  color: #4c4c4c;
`
const TermsLabel = styled.label`
  display:flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: #4c4c4c;

  span{
    color:#999; 
    font-size: 14px;
    margin-left: 5px;
  }
`
const TermsBtn = styled.span`
  font-size: 14px;
  color:#5f0080; 
  cursor:pointer;
`

const MktCheck = styled.div`
  margin-left: 20px;

  p {
    margin-left: 20px;
    color:#5f0080; 
    text-align: left;
  }
`

const JoinBtn = styled.button`
  width:240px;
  height:56px;
  margin: 30px 150px;
  border: none;
  border-radius: 3px;
  background: #5f0080;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor:pointer;
`

const CheckBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    margin: 2px 5px 0px 0px;
    padding: 0px;
    font-size: 18px;
    color: ${(props) => props.is_checked ? '#fff' : '#ddd'};
    border: 1px solid ${(props) => props.is_checked ? '#5f0080' : '#ddd'};
    border-radius: 20px;
    background-color: ${(props) => props.is_checked ? '#5f0080' : '#fff'}
`
