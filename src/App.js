import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'

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


function App() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] =  React.useState(true)
  
  return (
    <div className="App">
      <Header/>
      <Routes>

        <Route path='/' element={<Main/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:productId' element={<Detail isLogin={isLogin} />} />
        <Route path='/cart' element={<Cart isLogin={isLogin} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
