import React from "react";
import styled from "styled-components";
import instance from "../shared/Request";
import Banner from "../components/Banner";
import Card from "../components/Card";
import CardList from "../components/CardList";
import CardList2 from "../components/CardList2";
import { useDispatch, useSelector } from "react-redux";
import ScrollBtn from "../Elements/ScrollBtn";

const Main = (props) => {

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Banner/>
      <CardList/>
      <CardList2/>
      <ScrollBtn/>
    </React.Fragment>
  );
}

export default Main;