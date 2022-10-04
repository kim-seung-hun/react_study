import { React, useState } from "react";
import { Header, Body } from "../com";
import {
  useLocation,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 파라미터 값을 가져오기 위한 방법
// 리액트에서 지원해주는 유용한 함수를 hook 이라고 한다.
// 리액트 훅 함수를 사용해서 작업할수있다.
// useParams 사용
// url 경로에 있는 parameter를 객체의 형태로 불러온다.
// useParams 함수를 실행해주고 반환된 객체를 가지고 동작한다.

// 검색하려면 ??
// 검색 쿼리문도 가져와보자
// 검색하려면 input 입력창이 있어야하니까 , input을 만들자
// 입력했을때 값을 저장해놓자 , 리액트에서 값을 저장해야할땐 useState로 들고 있어야겠따.
// 입력한 값을 언제든 사용할수 있다.
// 검색 쿼리문을 만들어보자
// useSearchParams 함수를 사용한다.
// useSearchParams 함수를 실행해서 반환받은 객체를 사용
// useSearchParams가 경로에서 뽑아주는 영역은
// ?뒤에 키값을 기준으로
// ?q=1 >> 이런 형태는 q라는 키값이 객체형태로 나온다. {q:1}
// useSearchParams 함수 실행 후 반환된 객체 사용

// 현재 경로를 가져와서 사용해야하는데.. 또 함수 useLocation
// 함수 실행 후 반환된 객체 사용

const Detail = () => {
  const params = useParams();
  const [serch, setSerch] = useState("");
  const location = useLocation();
  const [query, setQuery] = useSearchParams();
  //   console.log(query.get("q"));

  // input 값을 documnet로 들고오지 못하기 떄문에 함수로 사용
  const keyInput = (e) => {
    setSerch(e.target.value);
  };
  return (
    <div>
      <Header title={"상세페이지"} />
      {/* <Body path={"/shop"} name="상점페이지" item={params} /> */}
      <div>{serch}</div>
      <div>검색 내용 : {query.get("q")}</div>
      <input onChange={keyInput} />
      <Link to={location.pathname + "?q=" + serch}>검색하기</Link>
    </div>
  );
};

export default Detail;
