/* App.js */
import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mypage from './mypage';
import LoginMypage from './loginmypage';
import Profile from './profile';
import Noticelist from './noticelist.js';
import Notice1 from './notice1.js';
import Notice2 from './notice2.js';
import Notice3 from './notice3.js';
import Notice4 from './notice4.js';
import Review from './review.js';
import Reviewlist from './reviewlist.js';
import Reviewfav from './reviewfav.js';

function App() {
  return (
    <Router>
      <div className='container'>
        <section className='contents'>
          <Routes>
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
};

export default App;