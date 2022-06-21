import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'

// CSS 관련 Imports
import styled from 'styled-components'

// 컴포넌트 Imports
import Login from "./page/Login";
import Signup from "./page/Signup";
import Detail from "./page/Detail"


function App() {
  const navigate = useNavigate()
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<> <button onClick={()=> navigate('/detail')}>임시이동버튼</button></>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
