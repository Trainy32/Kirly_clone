import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode'
import { useNavigate } from 'react-router-dom'


// CSS 관련
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { HiOutlineExclamationCircle } from 'react-icons/hi';


const FindAddress = (props) => {
  const navigate = useNavigate()
  const setAddress = props.setAddress;
  const setModalOpen = props.setModalOpen;

  const [zoneCode, setZoneCode] = React.useState(null)  
  const [mainAddress, setMainAddress] = React.useState(null)
  const detailAdr_ref = React.useRef(null)

  console.log(props)

  // 기본 주소 받아오는 함수. 도로명, 건물명, 우편번호
  const handleComplete = (data) => {
    console.log(data)
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setMainAddress(fullAddress);
    setZoneCode(data.zonecode);

  };

  const InsertAddress = () => {
    const addressData = {
      address:mainAddress,
      addressDetail:detailAdr_ref.current.value,
      zoneCode:zoneCode
    }
    setAddress(addressData)
    setModalOpen(false)
  }

  return (
    <>
    <DaumPostcode onComplete={handleComplete} />
    { zoneCode ?     
      <Wrap>
        <GoBackBtn>
          <IoIosArrowBack/>
          <span>주소 재검색</span>
        </GoBackBtn>

        <hr/>

        <input className="zone" type='text' value={zoneCode} readOnly/>
        <input type='text' value={mainAddress} readOnly/>
        <input type='text' ref={detailAdr_ref} placeholder="나머지 주소를 입력해주세요"/>
        <button onClick={InsertAddress}>주소 입력</button>

        <DeliveryInfo> 
          <InfoTitle> <span><HiOutlineExclamationCircle/></span>샛별배송 지역 중 배송 불가 장소 안내 </InfoTitle>
          <span>관공서/ 학교/ 병원/ 시장/ 공단 지역/ 산간 지역/ 백화점 등</span>
          <span> <br/> 자세히 보기 <IoIosArrowDown/> </span>
        </DeliveryInfo>
      </Wrap>
    : null}
    </>
  )
};

const Wrap = styled.div`
  width: 90%;
  margin-left: 5px;

  hr {
    border:0px;
    border-bottom: 1px solid #ccc;
    width: 110%;
    margin-bottom: 10px;
  }

  input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    height: 30px;
    font-size: 16px;

    &:focus {
      border: 1px solid #666;
    }

    &::placeholder {
      color: #ccc;
      font-size: 14px;
      font-weight: 700;
    }
  }
  
  .zone {
    width: 60px;
    text-align: center;
  }

  button {
    width: 106%;
    height: 54px;
    border: 0px;
    border-radius: 3px;
    background: #5f0080;
    color: #fff;
    font-weight: 700;
    cursor:pointer;
  }

`

const GoBackBtn = styled.div`
  font-weight: 600;
  margin: 10px 0px 0px 0px;
  font-size: 20px;
  display:flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-left: 15px;
  }
`

const DeliveryInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: #f4f4f4;
padding: 20px;
margin: 10px 0px;
box-sizing: border-box;
width: 106%;
font-size: 13px;

span {
  font-weight : 300;
  color: #666;
}
`

const InfoTitle = styled.p`
  color: #b3130b;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin : 0px;

  span {
    color: #b3130b;
    font-size: 17px;
    margin-right: 5px;
  }

`

export default FindAddress