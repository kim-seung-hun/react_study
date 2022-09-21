import React from "react";

// 이렇게 컴포넌트로 작얼을 하면 좋은 점은
// 일반 태그처럼 우리가 원하는 내용을 태그화해서 사용할수 있기 때문에 코드의 재활용서잉 용이해진다.
// 이렇게 하면 좋은점은 유지보수가 편하다.

// 리액트의 데이터 구조는 단방향(위에서 아래로 데이터를 전달)
// 매개변수로 받은 num의 명칭을 props이다.
// 부모 컴포넌트가 자식한테 데이터 전달할 수 있다.(자식이 줄순 없다.) 객체 형태로 준다.
const Mycom = (num) => {
  const { name, age, Cname } = num;

  // 중괄호를 쓰는 이유는 자바스크립트 구문을 활요하겠다는 뜻
  return (
    // 태그에 class 추가할땐 className 리액트 어트리뷰트로 추가해줘야한다.
    <div className={Cname + " com"}>
      나는
      {age}
      {name}
      컴포넌트
    </div>
  );
};

// default 하나만 내보낼때
export default Mycom;
