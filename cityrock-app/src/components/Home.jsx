import React from 'react';
import '../styles/main.css'; /* 가운데 정렬 */

const Home = () => {
    return (
        <section className='home-contents'>
            {/* New 캐러셀 */}
            <h1 className='home-p'>New</h1>
            <div className='imgBox'>
                <img src="" alt="" />
            </div>
            {/* 문화 콘텐츠 */}
            <div className='culture-contents'>
                <div className='cate-title'>
                    <h1 className='home-p'>문화 콘텐츠</h1>
                    <div className='makdagi-1'></div>
                </div>
                <div className='cate-box'>
                    <div className='c-img'>
                        <img src="" alt="" />
                    </div>
                    <div className='etc-text'>
                        <p className='text-t'>화려한 조명, 멋진 조명 <br />
                        그리고 열정적인 아티스트 </p>
                        <p className='link-t'>공연 바로가기</p>
                    </div>
                </div>
                <div className='cate-box'>
                    <div className='c-img'></div>
                    <div className='etc-text'>
                        <p className='text-t'>현대적이고 창의적인</p>
                        <p className='link-t'>전시회 바로가기</p>
                    </div>
                </div>
                <div className='cate-box'>
                    <div className='c-img'></div>
                    <div className='etc-text'>
                        <p className='text-t'>다채로운 문화, 함성과 기쁨</p>
                        <p className='link-t'>축제 바로가기</p>
                    </div>
                </div>
            </div>
            {/* 추천*/}
            <div className='recommend'>
                <div className='cate-title'>
                    <h1 className='home-p'>추천</h1>
                    <div className='makdagi-2'></div>
                </div>
                <p>당신에게 알맞은 컨텐츠를 추천해드릴게요!</p>
                <div className='rec-alg'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            

        </section>
    );
};

export default Home;
