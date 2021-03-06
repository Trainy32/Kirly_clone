import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'

import { set_address_AX } from "./redux/modules/user";
import { useDispatch, useSelector } from 'react-redux'

// CSS 관련 Imports
import styled from 'styled-components'

// 컴포넌트 Imports
import Login from "./page/Login";
import Signup from "./page/Signup";
import Detail from "./page/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./page/Main";
import Cart from "./page/Cart";
import Category from "./page/Category";
import ScrollRestore from "./components/ScrollRestore";

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] =  React.useState(true)

  React.useEffect(()=>{
    // dispatch(set_address_AX())
  },[])
  
  return (
    <div className="App" >
      <Header/>
      <ScrollRestore/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:productId' element={<Detail isLogin={isLogin} />} />
        <Route path='/category/:categoryNo' element={<Category isLogin={isLogin} />} />
        <Route path='/cart' element={<Cart isLogin={isLogin} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
