/* App.js */
import { BrowserView, MobileView } from 'react-device-detect'
import Header from "./components/Header"

function App() {
  return (
    <section className='contents'>
      <Header />
      <BrowserView>
        브라우저 뷰입니다.
      </BrowserView>
      <MobileView>
        <p>모바일뷰입니다.</p>
      </MobileView>
    </section>
  );
}

export default App;