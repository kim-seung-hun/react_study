import React, { useCallback, useState } from "react";

const Calender = () => {
  const today = {
    year: new Date().getFullYear(), // 오늘 연도
    month: new Date().getMonth(), // 오늘 월
    date: new Date().getDate(), // 오늘 날짜
    day: new Date().getDay(), // 오늘 요일
  };

  const week = ["일", "월", "화", "수", "목", "금", "토"]; // 일주일
  const [selectedYear, setSelectedYear] = useState(today.year); // 현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 월
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); // total 일 수
  const prevMonth = useCallback(() => {
    // 이전달 보기 버튼
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(() => {
    // 다음달 보기 버튼
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const monthControl = useCallback(() => {
    // 달 선택박스에서 고르기
    let monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option key={i + 1} value={i + 1}>
          {i + 1} 월
        </option>
      );
    }
    return (
      <select onChange={changeSelectMonth} value={selectedMonth}>
        {monthArr}
      </select>
    );
  }, [selectedMonth]);

  const yearControl = useCallback(() => {
    // 연도 선택박스에서 고르기
    let yearArr = [];
    const startYear = today.year - 10; // 현재 연도부터 10년전까지
    const endYear = today.year + 10; // 현재 연도부터 10년 후까지

    for (let i = startYear; i < endYear + 1; i++) {
      yearArr.push(
        <option key={i} value={i}>
          {i} 년
        </option>
      );
    }
    return (
      <select onChange={changeSelectYear} value={selectedYear}>
        {yearArr}
      </select>
    );
  }, [selectedYear]);

  const changeSelectMonth = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const changeSelectYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const returnWeek = useCallback(() => {
    // 요일 반환 함수
    let weekArr = [];
    week.forEach((v) => {
      weekArr.push(<div key={v}>{v}</div>);
    });
    return weekArr;
  }, []);

  const returnDay = useCallback(() => {
    // 선택된 달의 날짜들을 반환하는 함수
    let dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(<div key={i + 1}>{i + 1}</div>);
        }
      } else {
        dayArr.push(<div className="weekday"></div>);
      }
    }
    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <div className="container">
      <div className="title">
        <h3>
          {yearControl()}년 {monthControl()}월
        </h3>
        <div className="pagination">
          <button onClick={prevMonth}>-</button>
          <button onClick={nextMonth}>+</button>
        </div>
      </div>
      <div className="week">{returnWeek()}</div>
      <div className="day">{returnDay()}</div>
    </div>
  );
};

export default Calender;
