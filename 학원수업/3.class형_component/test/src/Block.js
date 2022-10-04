import React from "react";

const Block = (props) => {
  let { data, name, test } = props;
  let temp = "";
  if (name == "user") {
    temp = test;
  } else {
    // test == "무승부" ? >> 유저가 무승부면 뒤에 true : false 이렇게 들어가는데 true가 '무승부'
    // false == '이겼따' ? '졌다' : '이겼다' 이 삼항 연산자
    temp = test == "무승부" ? "무승부" : test == "이겼다" ? "졌다" : "이겼다";
  }
  return (
    <div className="block">
      {/* 선택한 이미지를 props 값으로 받아온다 부모 컴포넌트에서 */}

      {/* 리액트에서 제일 많이쓴다 >> 값이 있으면 그리라는 문구 (&&) */}
      {/* 값이 없으면 오류를 내기 때문에 */}
      <div>{name}</div>
      <img src={data && data.img} />
      <div>{temp}</div>
    </div>
  );
};

export default Block;
