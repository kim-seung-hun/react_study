import React, { useState } from "react";

// 리액트가 왜 리액트인지?
// 자기 값이 변하면 반응해서 알려주고 리액트는 반응한 애들을 리렌더링
const Block = () => {
  let count = 0;

  // [실사용 값 , 값을 수정할수 있는 함수] = useState(초기값);
  // setnum 함수를 사용해서 값을 수정할땐 setnum 함수의 매개변수로 전달
  // useState 값은 리액트가 보관하여 리렌더링하더라도 가져옴
  // useState 같은 유용한 함수를 react hook 이라 부른다.
  const [num1, setnum] = useState(count);
  function add() {
    // 일반변수 count는 다시 그려주기때문에 초기값으로 변한다.
    // 이유는 리렌더링 하기 떄문
    // console.log("클릭됨");
    // console.log(count);
    setnum(num1 + 1);

    // 비동기적 발생으로 인해 실수가 잦을수 있다.
    // 콘솔이 값이 변하기전에 동작해서 바뀌기 전 값이 보이는 현상
    console.log(num1);
  }
  return (
    <>
      {/* 
        변수를 바꾼다고 태그에 변수값을 넣은게 바뀌지 않았다
        기존엔 innerHTML을 사용함
        리액트에서는
        useState >> 리액트에게 값을 주시하게 만들고 값이 변하면
                    내가 변했으니까 나 다시 그려줘라
        변수를 전부 보고 다 그린다고 하면 처음에 dom 그리는 비용이 생각보다 비싼데
        이걸 많이 그려주다보면 컴퓨터가 줄여주는것
        결론은 효율적으로 관리해주기 위해 사용한다.
    */}
      {/* onclick 이거였지만 리액트 어트리뷰트는 onClick */}
      <div className="block">{num1}</div>
      <button onClick={add}>더하기</button>
    </>
  );
};

export default Block;
