import React from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

// 아이콘
import { IoSearch } from 'react-icons/io5';

const Signup = (props) => {
  const navigate = useNavigate()
  
  const userId = React.useRef(null)

  return (
    <Wrap>
      <button onClick={() => navigate('/login')}> 임시: 로그인 가기</button>

      <h1>회원가입</h1>
      <p><RedStar>*</RedStar>필수 입력사항</p>
      <hr />

      <InputFields>
        <tbody>
          <tr>
            <th> <h4>아이디<RedStar>*</RedStar></h4> </th>
            <td> <input ref={userId} type='text' placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
              <li>6자 이상의 영문 혹은 영문과 숫자를 조합</li>
              <li>아이디 중복확인</li>
            </td>
            <td> <button className="checkBtn"> 중복 확인 </button> </td>
          </tr>

          <tr>
            <th><h4>비밀번호<RedStar>*</RedStar></h4></th>
            <td><input ref={userId} type='text' placeholder="비밀번호를 입력해주세요" />
              <li>10자 이상 입력</li>
              <li>영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합</li>
              <li>동일한 숫자 3개 이상 연속 사용 불가</li>
            </td>
          </tr>

          <tr>
            <th><h4>비밀번호 확인<RedStar>*</RedStar></h4></th>
            <td><input ref={userId} type='text' placeholder="비밀번호를 한번 더 입력해주세요" />
              <li>동일한 비밀번호를 입력해주세요.</li>
            </td>
          </tr>

          <tr>
            <th><h4>이름<RedStar>*</RedStar></h4></th>
            <td><input ref={userId} type='text' placeholder="이름을 입력해주세요" /></td>
          </tr>

          <tr>
            <th><h4>이메일<RedStar>*</RedStar></h4></th>
            <td><input ref={userId} type='text' placeholder="예: marketkurly@kurly.com" /></td>
            <td><button className="checkBtn" > 중복 확인 </button></td>
          </tr>

          <tr>
            <th><h4>휴대폰<RedStar>*</RedStar></h4></th>
            <td><input ref={userId} type='text' placeholder="숫자만 입력해주세요" /></td>
          </tr>

          <tr>
            <th><h4>주소</h4></th>
            <td><button className="addressBtn"> <IoSearch /> 주소 검색 </button>
              <br /><sub>배송지에 따라 상품 정보가 달라질 수 있습니다.</sub></td>
          </tr>


          <tr id='termsSection'>
            <th><h4>이용약관 동의<RedStar>*</RedStar></h4></th>
            <td colSpan='2'><AllTermsLabel> <input ref={userId} type='checkbox' />전체 동의합니다. </AllTermsLabel>
              <br /> <sub>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다. </sub></td>
          </tr>

          <tr>
            <td />
            <td><TermsLabel> <input ref={userId} type='checkbox' />이용약관 동의 <span>(필수)</span> </TermsLabel></td>
            <td><TermsBtn>약관보기 ></TermsBtn></td>
          </tr>

          <tr>
            <td />
            <td><TermsLabel> <input ref={userId} type='checkbox' />개인정보 수집·이용동의 <span>(필수)</span> </TermsLabel></td>
            <td><TermsBtn>약관보기 ></TermsBtn></td>
          </tr>

          <tr>
            <td />
            <td><TermsLabel> <input ref={userId} type='checkbox' />개인정보 수집·이용동의<span>(선택)</span> </TermsLabel></td>
            <td><TermsBtn>약관보기 > </TermsBtn></td>
          </tr>

          <tr>
            <td />
            <td>
              <TermsLabel> <input ref={userId} type='checkbox' />무료배송,할인쿠폰 등 혜택/정보 수신동의<span>(선택)</span></TermsLabel>
              <MktCheck>
                <TermsLabel> <input ref={userId} type='checkbox' />SMS</TermsLabel>
                <TermsLabel> <input ref={userId} type='checkbox' />이메일</TermsLabel>
                <p> └ 동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
              </MktCheck>
            </td>
          </tr>

          <tr>
            <td />
            <td><TermsLabel><input ref={userId} type='checkbox' />본인은 만 14세 이상입니다.<span>(필수)</span></TermsLabel></td>
          </tr>
        </tbody>
      </InputFields>

      <JoinBtn>가입하기</JoinBtn>

    </Wrap>
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

  hr {
    border-top: 2px solid #333;
  }
`
const InputFields = styled.table`
  margin:auto;
  width: 630px;
  font-size: 14px;
  border-spacing: 5px;

  tr, th, td {
    vertical-align: top;
  }

  th {
    width: 600px;
    text-align: left;
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

  input[type=checkbox]{
    width: 10px;
    height: 10px;
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
    width: 370px;
  }

  li {
    font-size: 12px;
    font-weight: 400;
    color: #666;
  }

  sub {
    color: #666;
  }

  #termsSection {
    border: 1px solid #ddd;
  }
`
const RedStar = styled.span`
color:red;
`

const AllTermsLabel = styled.label`
  font-size: 19px;
  font-weight: 500;
  color: #4c4c4c;
`
const TermsLabel = styled.label`
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

const MktCheck = styled.div `
  margin-left: 20px;
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