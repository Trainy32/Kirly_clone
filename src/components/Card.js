import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
    const navigate = useNavigate();
    console.log(props);
  return (
    <React.Fragment>
        <DivSt
            onClick={() => {
                navigate(`/detail/${props.id}`);
            }}
        >
        <CardSt>
          <ImageSt img={props.img}>

          </ImageSt>
          <h3 style={{ marginLeft: "4px", fontSize: "16px" }}>
            {props?.name}
          </h3>
          &nbsp;
          <span style={{ marginLeft: "4px", fontSize: "16px" }}>
            {" "}
            {Number(props?.price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </span>
        </CardSt>
      </DivSt>
    </React.Fragment>
  );
};

const DivSt = styled.div`
  width: 20%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;

const CardSt = styled.div`
  /* background-color: gray; */
  width: 267px;
  height: 411px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 9px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageSt = styled.div`
  /* background-color: yellow; */
  width: 17vw;
  height: 320px;
  margin: auto;
  background: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
`;

export default Card;