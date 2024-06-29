import React, { useEffect, useState } from 'react';
import '../styles/main.css'; // 가운데 정렬

import image1 from '../assets/carousel-test_1.png';
import image2 from '../assets/carousel-test_2.png';
import image3 from '../assets/carousel-test_3.png';

const images = [image1, image2, image3];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // 5초마다 이미지 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    }, []);

    return React.createElement('section', { className: 'home-contents' },
        React.createElement('h1', { className: 'home-p' }, 'New'),
        React.createElement('div', { className: 'imgBox' },
            React.createElement('img', { src: images[currentImageIndex], alt: '슬라이드 이미지' })
        ),
        React.createElement('div', { className: 'culture-contents' },
            React.createElement('div', { className: 'cate-title' },
                React.createElement('h1', { className: 'home-p' }, '문화 콘텐츠'),
                React.createElement('div', { className: 'makdagi-1' })
            ),
            React.createElement('div', { className: 'cate-box' },
                React.createElement('div', { className: 'c-img' },
                    React.createElement('img', { src: '', alt: '' })
                ),
                React.createElement('div', { className: 'etc-text' },
                    React.createElement('p', { className: 'text-t' }, 
                        '화려한 조명, 멋진 조명', 
                        React.createElement('br'), 
                        '그리고 열정적인 아티스트 '),
                    React.createElement('p', { className: 'link-t' }, '공연 바로가기')
                )
            ),
            React.createElement('div', { className: 'cate-box' },
                React.createElement('div', { className: 'c-img' }),
                React.createElement('div', { className: 'etc-text' },
                    React.createElement('p', { className: 'text-t' }, '현대적이고 창의적인'),
                    React.createElement('p', { className: 'link-t' }, '전시회 바로가기')
                )
            ),
            React.createElement('div', { className: 'cate-box' },
                React.createElement('div', { className: 'c-img' }),
                React.createElement('div', { className: 'etc-text' },
                    React.createElement('p', { className: 'text-t' }, '다채로운 문화, 함성과 기쁨'),
                    React.createElement('p', { className: 'link-t' }, '축제 바로가기')
                )
            )
        ),
        React.createElement('div', { className: 'recommend' },
            React.createElement('div', { className: 'cate-title' },
                React.createElement('h1', { className: 'home-p' }, '추천'),
                React.createElement('div', { className: 'makdagi-2' })
            ),
            React.createElement('p', null, '당신에게 알맞은 컨텐츠를 추천해드릴게요!'),
            React.createElement('div', { className: 'rec-alg' },
                React.createElement('img', { src: '', alt: '' }),
                React.createElement('img', { src: '', alt: '' }),
                React.createElement('img', { src: '', alt: '' })
            )
        )
    );
};

export default Home;
