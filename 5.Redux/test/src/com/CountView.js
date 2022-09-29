import React from "react";
import { useSelector } from "react-redux";

const CountView = (props) => {
  const { count } = props;

  // 저장소에 값을 가져와보자
  const count2 = useSelector((state) => state.count);
  // useSelector 함수를 콜백으로 reducer 폴더 안에 있는 index.js에 작성한 state 값을 받을수 있다.
  // (state) => state.count 저장소의 state 객체 안에 있는 count 값만 가져온다

  return <div>{count2}</div>;
};

export default CountView;
