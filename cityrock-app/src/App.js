/* App.js */
import React from 'react';
// import { BrowserView, MobileView } from 'react-device-detect' /* 브라우저, 모바일 */
import Header from "./components/Header";
import './styles/main.css'; /* 가운데 정렬 */

function App() {
  return (
    <div className='container'>
      <section className='contents'>
        <Header />
        {/* <BrowserView>
          브라우저 뷰입니다.
        </BrowserView>
        <MobileView>
          <p>모바일뷰입니다.</p>
        </MobileView> */}
      </section>
    </div>
  );
}

export default App;