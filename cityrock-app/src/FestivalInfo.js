// FestivalInfo.js
import React from 'react';

const FestivalInfo = () => {
  // 가상의 축제 정보 데이터
  const festivalInfo = {
    name: "봄 축제",
    date: "2024년 5월 30일",
    location: "서울시 강남구",
    description: "서울시 강남구에서 매년 열리는 봄 축제입니다. 다양한 공연과 전시가 준비되어 있습니다. 가족과 함께 즐거운 시간을 보내보세요!"
  };

  return (
    <div>
      <h2>축제 정보 페이지</h2>
      <h2>반가버요</h2>
      <div>
        <h3>{festivalInfo.name}</h3>
        <p>일시: {festivalInfo.date}</p>
        <p>장소: {festivalInfo.location}</p>
        <p>설명: {festivalInfo.description}</p>
      </div>
    </div>
  );
}

export default FestivalInfo;
