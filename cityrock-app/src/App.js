import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from "./components/Header";
import './styles/main.css';
import Home from "./components/Home";
import FestivalInfo from './FestivalInfo';
import FestivalDetail from './FestivalDetail';

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
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
