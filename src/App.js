import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'

// CSS 관련 Imports
import styled from 'styled-components'

// 컴포넌트 Imports
import Login from "./page/Login";
import Signup from "./page/Signup";
import Detail from "./page/Detail"
import Cart from "./page/Cart"


function App() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] =  React.useState(true)
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<> <button onClick={()=> navigate('/detail/1')}>임시이동버튼</button></>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:productId' element={<Detail isLogin={isLogin} />} />
        <Route path='/cart' element={<Cart isLogin={isLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
