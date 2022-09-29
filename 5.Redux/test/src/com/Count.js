import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = (props) => {
  const { setCount, count } = props;

  // useDispatch 함수를 사용하고
  const dispatch = useDispatch();
  // redux -> reducer에 쓰임
  // 반환된 dispatch를 사용해서 Action을 던질수 있다.
  // dispatch 함수를 사용하는데 매개변수로 객체를 전달해준다.
  // 객체의 규칙은 {type, payload}
  // type : 동작시킬 행동의 이름
  // payload : 선택사항으로 있어도되고 없어도 되는데 , 우리가 데이터 전달이 필요하면 사용

  const Add = () => {
    dispatch({ type: "ADD" });
    // setCount(count + 1);
  };
  const Remove = () => {
    dispatch({ type: "REMOVE" });
    // setCount(count - 1);
  };

  return (
    <div>
      <button onClick={Add}>+</button>
      <button onClick={Remove}>-</button>
    </div>
  );
};

export default Count;
