/* App.js */
import React from 'react';
// import { BrowserView, MobileView } from 'react-device-detect' /* 브라우저, 모바일 */
import Header from "./components/Header";
import './styles/main.css'; /* 가운데 정렬 */
import Login from "./pages/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import FestivalInfo from './FestivalInfo'; // FestivalInfo 컴포넌트를 import 

function App() {
  return (
    <Router>
      <div className='container'>
        <section className='contents'>
          <Header />
          {/* <BrowserView>
            브라우저 뷰입니다.
          </BrowserView>
          <MobileView>
            <p>모바일뷰입니다.</p>
          </MobileView> */}
          
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/festival" element={<FestivalInfo/>} /> 
          </Routes>
        </section>
      </div>
    </Router>
    
  );
}

export default App;