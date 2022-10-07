import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  HeaderWrap,
  HeaderContents,
  ContentBtn,
  LoginWrap,
  LoginInput,
} from "./styledComponent";
import { loginAction } from "../../redux/middleware";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ isLogin }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 로그인할수있는 상태와 회원가입할수잇는 상태
  const [wrapState, setWrapState] = useState(true);
  const userName = useSelector((state) => state.loginReducer.id);

  // 리액트에서 태그를 선택해야하는데 어떻게 하나??
  // document.querySelector를 안쓰기 위해...
  // useRef() 는 current 속성을 가지고 있는 객체를 반환한다.
  // 객체의 원하는 키값에 값을 넣어줄수도 있고,
  // 이 값이 바뀌어도 렌더링은 되지 않지만 값은 계속 남아있다.
  // current = 태그 가 들어온다.
  // 사용법 >> 들고있고 싶은 컴포넌트에 ref props로 useRef() 반환한 객체를 넣어준다.
  const idInput = useRef();
  const pwInput = useRef();
  const login = () => {
    dispatch(loginAction.login(idInput.value, pwInput.value));

    // 빈값 만들기
    // document.querySelector('태그').value === idInput.current.value
    // idInput.current.value = "";
    // pwInput.current.value = "";
  };

  const logOut = () => {
    dispatch(loginAction.logOut());
  };

  const signUp = () => {
    dispatch(loginAction.signUp(idInput.value, pwInput.value, setWrap));
  };

  const setWrap = () => {
    setWrapState((current) => !current);
    idInput.value = "";
    pwInput.value = "";
    idInput.current.value = "";
    pwInput.current.value = "";
  };
  return (
    <HeaderWrap>
      <HeaderContents>
        <ContentBtn
          onClick={() => {
            nav("/");
          }}
        >
          Main
        </ContentBtn>
        <ContentBtn
          onClick={() => {
            nav("/shop");
          }}
        >
          Shop
        </ContentBtn>
      </HeaderContents>
      <LoginWrap>
        {isLogin ? (
          <>
            <div>{userName} 로그인됨</div>
            <Button onClick={logOut}>로그아웃</Button>
          </>
        ) : (
          <>
            {wrapState ? (
              <>
                <label>아이디 : </label>
                <LoginInput
                  ref={idInput}
                  placeholder="ID"
                  onChange={(e) => (idInput.value = e.target.value)}
                />
                <label>비밀번호 : </label>
                <LoginInput
                  type="password"
                  ref={pwInput}
                  placeholder="PW"
                  onChange={(e) => (pwInput.value = e.target.value)}
                />
                <Button onClick={login}>Login</Button>
                <Button onClick={setWrap}>회원가입 ㄱㄱ</Button>
              </>
            ) : (
              <>
                <label>아이디 : </label>
                <LoginInput
                  ref={idInput}
                  placeholder="ID"
                  onChange={(e) => (idInput.value = e.target.value)}
                />
                <label>비밀번호 : </label>
                <LoginInput
                  type="password"
                  ref={pwInput}
                  placeholder="PW"
                  onChange={(e) => (pwInput.value = e.target.value)}
                />
                <Button onClick={signUp}>SignUp</Button>
                <Button onClick={setWrap}>로그인 ㄱㄱ</Button>
              </>
            )}
          </>
        )}
      </LoginWrap>
    </HeaderWrap>
  );
};

export default Header;
