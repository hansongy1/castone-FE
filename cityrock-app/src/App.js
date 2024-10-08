// App.js 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import './styles/main.css';
import Home from './components/Home';
import FestivalInfo from './FestivalInfo';
import FestivalDetail from './FestivalDetail';
import AIprofile from './AIprofile';
import AIprofileStep1 from './AIprofileStep1';
import AIprofileStep2 from './AIprofileStep2';
import AIprofileCreating from './AIprofileCreating';
import Mypage from './pages/mypage';
import LoginMypage from './pages/LoginMypage';
import Profile from './pages/profile';
import Noticelist from './pages/noticelist.js';
import Notice1 from './pages/Notice1.js';
import Notice2 from './pages/Notice2.js';
import Notice3 from './pages/Notice3.js';
import Notice4 from './pages/Notice4.js';
import Review from './pages/review.js';
import Reviewlist from './pages/reviewlist.js';
import Reviewfav from './pages/reviewfav.js';
import ArCamera from './ArCamera';
import Register from './Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="container">
        <section className="contents">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/festival" element={<FestivalInfo />} />
            <Route path="/festival/:id" element={<FestivalDetail />} />
            <Route path="/aiprofile" element={<AIprofile />} />
            <Route path="/aiprofilestep1" element={<AIprofileStep1 />} />
            <Route path="/aiprofilestep2" element={<AIprofileStep2 />} />
            <Route path="/aiprofilecreating" element={<AIprofileCreating />} />
            <Route path="/arcamera" element={<ArCamera />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/loginmypage" element={<LoginMypage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/noticelist" element={<Noticelist />} />
            <Route path="/notice1" element={<Notice1 />} />
            <Route path="/notice2" element={<Notice2 />} />
            <Route path="/notice3" element={<Notice3 />} />
            <Route path="/notice4" element={<Notice4 />} />
            <Route path="/review" element={<Review />} />
            <Route path="/reviewlist" element={<Reviewlist />} />
            <Route path="/reviewfav" element={<Reviewfav/>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
