import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import '../styles/Header.css';
import MenuBar from '../assets/fi-br-angle-left.png';

const Header = () => {
    const navigate = useNavigate(); // navigate 훅 사용

    const handleGoBack = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <header className='App-header' onClick={handleGoBack} style={{ cursor: 'pointer' }}>
            <section className='App-menu'>
                <img src={MenuBar} alt='Menu Bar'/>
            </section>
        </header>
    );
}

export default Header;