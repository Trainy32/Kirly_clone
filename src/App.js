import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'

// CSS 관련 Imports
import styled from 'styled-components'

// 컴포넌트 Imports
import Login from "./page/Login";
import Signup from "./page/Signup";
import FindAddress from "./components/FindAddress";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<> 메인페이지 텅텅</>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
