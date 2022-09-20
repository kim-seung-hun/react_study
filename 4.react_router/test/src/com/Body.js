import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Body = ({ path, name, item }) => {
  // Link 컴포넌트는 a 태그와 같은 역할을 함 (경로바꾸기) , 라우터간의 이동이 가능
  // Link에 필요한 props는 >> to이름의 props에 이동할 경로를 넣어준다.

  // useNavigate >> Link와 똑같이 페이지 이동을 도와주는 아이
  // useNavigate의 사용방법은 함수 실행 이후 반환받은 객체로 사용 한다.
  const nav = useNavigate();
  return (
    <div className="body">
      <Link to={path}>{name}로 이동</Link>
      <button
        onClick={() => {
          nav(path);
        }}
      >
        {name}로 이동
      </button>
      {item && item.id ? <div>{item.id}번 상품</div> : null}
      {item && item.num ? <div>{item.num}개</div> : null}
      {item && item.name ? <div>이름 : {item.name}</div> : null}
    </div>
  );
};

export default Body;
