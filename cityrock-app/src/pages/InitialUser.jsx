// InitialUser.jsx

import React from "react";
import "../styles/InitialUser.css";
import Food from "../assets/food.png";
import Nature from "../assets/nature.png";

const InitialUser = () => {
    return (
        <div className="algorithm-container">
            <p className="mainGuide">좋아하는 키워드를 3개 이상 선택하면<br></br>취향에 맞는 축제를 추천해드려요!</p>
            <p className="guide">3개 이상의 키워드 선택이 필요해요!</p>
            <section className="progress-bar">
                바 위치
            </section>
            <section className="category-items">
                <div className="items-box">
                    <div className="music">
                        <img src={Food} alt="Food" />
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
                        <img src={Food} alt="Food" />
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
                        <img src={Nature} alt="Culture" />
                        <p>문화</p>
                    </div>
                </div>
                <div className="items-box">
                    <div className="firework">
                        <img src={Nature} alt="Firework" />
                        <p>불꽃놀이</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default InitialUser;