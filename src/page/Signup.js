import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

// 외부 데이터
import axios from 'axios'
import instance, { customAxios } from "../shared/Request";

// 컴포넌트
import Modal from "../components/Modal";
import Alert from "../components/Alert";
import FindAddress from "../components/FindAddress";
import TermsView from "../components/TermsView";

// CSS 관련
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5';
import { HiCheck } from 'react-icons/hi';


const Signup = (props) => {
  const navigate = useNavigate()

  // 모달창 컨트롤
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [modalMsg, setModalMsg] = useState('잘못된 요청입니다.')

  // 주소받아오기 
  const [address, setAddress] = React.useState(null)

  const getAddress = () => {
    setModalType('address')
    setModalOpen(true)
  }

  // 회원정보 받아오기
  const id_ref = React.useRef(null)
  const pw_ref = React.useRef(null)
  const pwConfirm_ref = React.useRef(null)
  const name_ref = React.useRef(null)
  const email_ref = React.useRef(null)
  const tel_ref = React.useRef(null)
  const subAddress_ref = React.useRef(null)

  // 아이디, 비밀번호 양식 체크

  const [idFormCheck, setIdFormCheck] = useState(null)
  
  const checkId = (e) => {
    setIdDupCheck(false)
    setIdFormCheck(/^[a-zA-Z0-9]{6,}/g.test(e.target.value))
  }

  const [pwLengthCheck, setPwLengthCheck] = useState(null)
  const [pwFormCheck, setPwFormCheck] = useState(null)
  const [pwRepeatLetterCheck, setPwRepeatLetterCheck] = useState(null)

  const checkPw = (e) => {
    setPwLengthCheck(e.target.value.length > 10)
    setPwRepeatLetterCheck(!/([0-9a-zA-Z])\1{2,}/.test(e.target.value))

    const num = e.target.value.search(/[0-9]/g)
    const eng = e.target.value.search(/[a-z]/ig)
    const spe = e.target.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi)

    setPwFormCheck((num >= 0 && eng >= 0) || (num >= 0 && spe >= 0) || (eng >= 0 && spe >= 0))
    setPwConfirmCheck(pwConfirm_ref.current?.value === pw_ref.current?.value && pwConfirm_ref.current?.value !== '')
  }

  const [PwConfirmCheck, setPwConfirmCheck] = useState(null)

  // 중복검사
  const [idDupCheck, setIdDupCheck] = useState(true)
  const [emailDupCheck, setEmailDupCheck] = useState(true)

  const dupCheckAction = (type) => {
    setIdDupCheck(true)
    setEmailDupCheck(true)
  //   if(type === 'id') {
  //   const requestUrl = 'http://localhost:5001/signup-test'
  //   const currentValue = id_ref.current.value

  //     if (idFormCheck) {
  //       axios.get(requestUrl)
  //         .then(response => response.data.find((v) => v.username === currentValue))
  //         .then(response => {
  //           setIdDupCheck(!response)
  //           window.alert(response ? '이미 등록된 아이디입니다.' : '사용이 가능합니다.')
  //         })
  //     } else {
  //       setModalType('alert')
  //       setModalMsg('아이디를 입력해주세요.')
  //       setModalOpen(true)
  //     }
  //   }

  //  if(type === 'email') {
  //   const requestUrl = 'http://localhost:5001/signup-test'
  //   const currentValue = email_ref.current.value
  //   const emailFormCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/.test(currentValue)

  //     if (emailFormCheck) {
  //       axios.get(emailFormCheck)
  //         .then(response => response.data.find((v) => v.email === currentValue))
  //         .then(response => {
  //           setIdDupCheck(!response)
  //           window.alert(response ? '이미 등록된 아이디입니다.' : '사용이 가능합니다.')
  //         })
  //     } else {
  //       setModalType('alert')
  //       setModalMsg('이메일 양식을 확인해주세요.')
  //       setModalOpen(true)
  //     }
  //  }
  }


  // 회원가입
  const signUpAction = () => {

    const alertMsg =
      id_ref.current.value === '' ? '아이디를 입력해주세요'
        : !idDupCheck ? '아이디 중복을 확인 해주세요'
          : pw_ref.current.value === '' ? '비밀번호를 입력해주세요'
            : pwConfirm_ref.current.value === '' ? '비밀번호를 한번 더 입력해주세요'
              : pw_ref.current.value !== pwConfirm_ref.current.value ? '비밀번호 확인이 일치하지 않아요'
                : name_ref.current.value === '' ? '이름을 입력해주세요'
                  : email_ref.current.value === '' ? '이메일 형식을 확인해주세요'
                    : !emailDupCheck ? '이메일 중복을 확인 해주세요'
                      : tel_ref.current.value === '' ? '휴대폰 번호를 입력해주세요'
                        // : requiredCheck ? '필수 동의 항목에 체크해주세요'
                          : 'pass'

                          
    if (alertMsg === 'pass') {
      const userData = {
        username: id_ref.current.value,
        password: pwConfirm_ref.current.value,
        nickname: name_ref.current.value,
        email: email_ref.current.value,
        phone: tel_ref.current.value,
        address: address.address,
        addressDetail: subAddress_ref.current.value,
        zonecode: address.zoneCode
      }

      // axios.post('http://localhost:5001/signup-test', userData)
      //   .then(response => console.log(response))

      customAxios.post('/api/user/signup',userData)
      .then(response => console.log(response))

    } else {
      window.alert(alertMsg)

      const inputAtIssue =
        id_ref.current.value === '' || !idDupCheck ? id_ref
          : pw_ref.current.value === '' ? pw_ref
            : pw_ref.current.value !== pwConfirm_ref.current.value ? pwConfirm_ref
              : name_ref.current.value === '' ? name_ref
                : !emailDupCheck ? email_ref : tel_ref

      inputAtIssue.current.focus()
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

  // 약관 보기 
  const [TermsType, setTermsType] = useState(false)

  const viewTerms = (type) => {
    setModalType('terms')
    setTermsType(type)
    setModalOpen(true)
  }


  return (
    <>
      {modalOpen ?
        <Modal setModalOpen={setModalOpen} btn={modalType === 'address' ? false : true}>
          {
            modalType === 'alert' ? <Alert msg={modalMsg} />
              : modalType === 'address' ? <FindAddress setAddress={setAddress} setModalOpen={setModalOpen} />
                : modalType === 'terms' ? <TermsView TermsType={TermsType} />
                  : '잘못된 접근입니다'
          }
        </Modal> : null}

      <Wrap>
        <button onClick={() => navigate('/login')}> 임시: 로그인 가기</button>

        <h1>회원가입</h1>
        <p><RedStar>*</RedStar>필수 입력사항</p>

        <InputFields>
          <tbody>
            <tr>
              <th> <h4>아이디<RedStar>*</RedStar></h4> </th>
              <td> <input ref={id_ref} type='text' onChange={(e) => checkId(e)} placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                {/* <ValidityList displayed={'none'}> */}
                <ValidityList>
                  <ValidityInfo is_valid={idFormCheck}>6자 이상의 영문 혹은 영문과 숫자를 조합</ValidityInfo>
                  <ValidityInfo is_valid={idDupCheck}>아이디 중복확인</ValidityInfo>
                </ValidityList>
              </td>
              <td> <button className="checkBtn" onClick={() => dupCheckAction('id')}> 중복 확인 </button> </td>
            </tr>

            <tr>
              <th><h4>비밀번호<RedStar>*</RedStar></h4></th>
              <td><input ref={pw_ref} onChange={(e) => checkPw(e)} type='password' placeholder="비밀번호를 입력해주세요" />
                <ValidityList>
                  <ValidityInfo is_valid={pwLengthCheck}>10자 이상 입력</ValidityInfo>
                  <ValidityInfo is_valid={pwFormCheck} >영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합</ValidityInfo>
                  <ValidityInfo is_valid={pwRepeatLetterCheck}>동일한 숫자 3개 이상 연속 사용 불가</ValidityInfo>
                </ValidityList>
              </td>
            </tr>

            <tr>
              <th><h4>비밀번호 확인<RedStar>*</RedStar></h4></th>
              <td><input ref={pwConfirm_ref} onChange={(e)=> setPwConfirmCheck(pwConfirm_ref.current?.value === pw_ref.current?.value && pwConfirm_ref.current?.value !== '')}
                  type='password' placeholder="비밀번호를 한번 더 입력해주세요" />

                <ValidityList>
                  <ValidityInfo is_valid={PwConfirmCheck}>
                    동일한 비밀번호를 입력해주세요.</ValidityInfo>
                </ValidityList>
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
              <td>
                {address ?
                  <><input type='text' value={address?.address} readOnly />
                    <input type='text' defaultValue={address?.addressDetail} ref={subAddress_ref} placeholder="나머지 주소를 입력해주세요" /></>
                  : <button className="addressBtn" onClick={getAddress}> <IoSearch /> 주소 검색 </button>
                }
                <br /><sub>배송지에 따라 상품 정보가 달라질 수 있습니다.</sub></td>

              {address ? <td><button className="checkBtn" onClick={getAddress}> <IoSearch /> 재검색 </button></td> : null}
            </tr>

            <MidLine>
              <td colSpan='3' />
            </MidLine>


            <TermsSection>
              <th><h4>이용약관 동의<RedStar>*</RedStar></h4></th>
              <td colSpan='2'><AllTermsLabel> <CheckBox is_checked={allCheck}><HiCheck /></CheckBox>
                <input type='checkbox' checked={allCheck} onChange={() => allCheckAction()} />전체 동의합니다. </AllTermsLabel>
                <sub>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다. </sub></td>
            </TermsSection>

            <tr>
              <td />
              <td ><TermsLabel> <CheckBox is_checked={useTermCheck}><HiCheck /></CheckBox>
                <input type='checkbox' checked={useTermCheck} onChange={() => setUseTermCheck(!useTermCheck)} />
                이용약관 동의 <span>(필수)</span> </TermsLabel>
              </td>
              <td><TermsBtn onClick={() => viewTerms({ type: 'use', title: '이용약관 동의', isRequired: true })}>
                약관보기 &gt;</TermsBtn></td>
            </tr>

            <tr>
              <td />
              <td><TermsLabel> <CheckBox is_checked={privacyCheck}><HiCheck /></CheckBox>
                <input type='checkbox' checked={privacyCheck} onChange={() => setPrivacyCheck(!privacyCheck)} />
                개인정보 수집·이용동의 <span>(필수)</span> </TermsLabel>
              </td>
              <td><TermsBtn onClick={() => viewTerms({ type: 'privacy', title: '개인정보 수집·이용동의', isRequired: true })}>
                약관보기 &gt;</TermsBtn></td>
            </tr>

            <tr>
              <td />
              <td><TermsLabel> <CheckBox is_checked={optPrivacyCheck}><HiCheck /></CheckBox>
                <input type='checkbox' checked={optPrivacyCheck} onChange={() => setOptPrivacyCheck(!optPrivacyCheck)} />
                개인정보 수집·이용동의<span>(선택)</span> </TermsLabel>
              </td>
              <td><TermsBtn onClick={() => viewTerms({ type: 'optPrivacy', title: '개인정보 수집·이용동의', isRequired: false })}>
                약관보기 &gt; </TermsBtn></td>
            </tr>

            <tr>
              <td />
              <td colSpan='2'>
                <TermsLabel> <CheckBox is_checked={allMktCheck}><HiCheck /></CheckBox>
                  <input type='checkbox' checked={allMktCheck} onChange={() => MktCheckAction()} />
                  무료배송,할인쿠폰 등 혜택/정보 수신동의<span>(선택)</span></TermsLabel>
                <MktCheck>
                  <div>
                    <TermsLabel> <CheckBox is_checked={smsMktCheck}><HiCheck /></CheckBox>
                      <input type='checkbox' checked={smsMktCheck} onChange={() => setSmsMktCheck(!smsMktCheck)} />SMS</TermsLabel>
                    <TermsLabel> <CheckBox is_checked={emailMktCheck}><HiCheck /></CheckBox>
                      <input type='checkbox' checked={emailMktCheck} onChange={() => setEmailMktCheck(!emailMktCheck)} />이메일</TermsLabel>
                  </div>
                  <p> └ 동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                </MktCheck>
              </td>
            </tr>

            <tr>
              <td />
              <td><TermsLabel><CheckBox is_checked={ageCheck}><HiCheck /></CheckBox>
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

// 보라색 #5f0080

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
    width: 315px;

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

  sub {
    color: #666;
  }
`

const ValidityList = styled.ul`
  display: ${(props) => props.displayed};
  margin: 0px 20px 20px 0px;
  padding: 0px 20px;
`

const ValidityInfo = styled.li`
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.is_valid ? '#0f851a' : '#b3130b'};
    /* #666; */
`

const MidLine = styled.tr`
  td{
    border-top: 10px solid #fff0;
    border-bottom: 1.5px solid #333;
  }
`
const TermsSection = styled.tr`
  th, td {
    border-top: 10px solid #fff0;
  }
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

  div {
    margin: 7px 0px 3px 5px;
    display:flex;
    gap : 80px;
  }

  p {
    margin-left: 40px;
    color:#5f0080; 
    text-align: left;
  }
`

const JoinBtn = styled.button`
  width:240px;
  height:56px;
  margin: 30px 200px;
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
