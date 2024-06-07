// InitialUser.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InitialUser.css";
import Music from "../assets/keyword_001.png";
import Food from "../assets/keyword_002.png";
import Flower from "../assets/keyword_003.png";
import Nature from "../assets/keyword_004.png";
import Culture from "../assets/keyword_005.png";
import Firework from "../assets/keyword_006.jpg";
import Children from "../assets/keyword_007.jpg";
import Exercise from "../assets/keyword_008.png";
import PopupStore from "../assets/keyword_009.jpg";

const InitialUser = () => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [showButton, setShowButton] = useState(false); // useState를 사용하여 showButton 상태 정의
    const navigate = useNavigate();

    const keywords = [
        { id: 1, name: "뮤직", src: Music},
        { id: 2, name: "음식", src: Food},
        { id: 3, name: "꽃", src: Flower},
        { id: 4, name: "자연", src: Nature},
        { id: 5, name: "문화", src: Culture},
        { id: 6, name: "불꽃놀이", src: Firework},
        { id: 7, name: "어린이", src: Children},
        { id: 8, name: "운동", src: Exercise},
        { id: 9, name: "팝업", src: PopupStore},
    ];

    // 1
    // const handleKeywordClick = (id) => {
    //     setSelectedKeywords((prevSelectedKeywords) => {
    //         if (prevSelectedKeywords.includes(id)) {
    //             return prevSelectedKeywords.filter((keywordId) => keywordId !== id);
    //         } else {
    //             const newSelectedKeywords = [...prevSelectedKeywords, id];
    //             if (newSelectedKeywords.length > 3 && newSelectedKeywords.length <= 8) {
    //                 <button type="submit">로그인</button>
    //                 navigate('/next-page'); // 다음 페이지로 이동 (경로는 원하는 대로 수정)
    //             }
    //             // return [...prevSelectedKeywords, id];
    //             return newSelectedKeywords;
    //         }
    //     });
    // };

    const handleKeywordClick = (id) => {
        setSelectedKeywords((prevSelectedKeywords) => {
            if (prevSelectedKeywords.includes(id)) {
                const newSelectedKeywords = prevSelectedKeywords.filter((keywordId) => keywordId !== id);
                setShowButton(newSelectedKeywords.length >= 3); // 키워드가 3개 이상 선택되지 않은 경우 버튼 숨김
                return newSelectedKeywords;
            } else {
                const newSelectedKeywords = [...prevSelectedKeywords, id];
                setShowButton(newSelectedKeywords.length >= 3); // 키워드가 3개 이상 선택된 경우 버튼 표시
                return newSelectedKeywords;
            }
        });
    };

    const progressBarWidth = `${Math.min((selectedKeywords.length / 3) * 100, 100)}%`;

    const handleButtonClick = () => {
        navigate('/next-page');
    }
    return (
        <div className="algorithm-container">
            <p className="mainGuide">좋아하는 키워드를 3개 이상 선택하면<br />취향에 맞는 축제를 추천해드려요!</p>
            <p className="guide">3개 이상의 키워드 선택이 필요해요!</p>
            <section className="progress-bar">
                <div className="progress" style={{ width: progressBarWidth }}></div>
            </section>
            <section className="category-items">
                {keywords.map((keyword) => (
                    <div 
                        className={`items-box ${selectedKeywords.includes(keyword.id) ? "selected" : ""}`}
                        key={keyword.id} 
                        onClick={() => handleKeywordClick(keyword.id)}
                    >
                        <div className="keyword">
                            <img src={keyword.src} alt={keyword.name} />
                            <p>{keyword.name}</p>
                        </div>
                    </div>
                    
                ))}
                {/* <div className="items-box">
                    <div className="music">
                        <img src={Music} alt="Music" />
                        <p>뮤직</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="food">
                        <img src={Food} alt="Food" />
                        <p>먹거리</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="flower">
                        <img src={Flower} alt="Flower" />
                        <p>꽃</p>
                    </div>
                </div>
            </section>
            <section className="category-items">
                <div className="items-box">
                    <div className="nature">
                        <img src={Nature} alt="Nature" />
                        <p>자연</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="culture">
                        <img src={Culture} alt="Culture" />
                        <p>문화</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="firework">
                        <img src={Firework} alt="Firework" />
                        <p>불꽃놀이</p>
                    </div>
                </div>
            </section>
            <section className="category-items">
                <div className="items-box">
                    <div className="children">
                        <img src={Children} alt="Children" />
                        <p>어린이</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="exercise">
                        <img src={Exercise} alt="Exercise" />
                        <p>운동</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="popup">
                        <img src={Popup} alt="Popup" />
                        <p>팝업</p>
                    </div>
                </div> */}
            </section>
            { showButton && (
                <button type="button" onClick={handleButtonClick} className="submitButton">완료</button>
            )}
        </div>
    )
}
export default InitialUser;