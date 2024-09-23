import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from "./components/Header";
import './styles/main.css';
import Home from "./components/Home";
import FestivalInfo from './FestivalInfo';
import FestivalDetail from './FestivalDetail';
import AIprofile from './AIprofile';
import AIprofileStep1 from './AIprofileStep1';
import AIprofileStep2 from './AIprofileStep2';
import AIprofileCreating from './AIprofileCreating';

function App() {
  return (
    <Router>
      <div className='container'>
        <section className='contents'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/festival" element={<FestivalInfo />} />
            <Route path="/festival/:id" element={<FestivalDetail />} />
            <Route path="/aiprofile" element={<AIprofile />} />
            <Route path="/aiprofilestep1" element={<AIprofileStep1 />} />
            <Route path="/aiprofilestep2" element={<AIprofileStep2 />} />
            <Route path="/aiprofilecreating" element={<AIprofileCreating />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
