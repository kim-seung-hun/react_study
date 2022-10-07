import styled from "styled-components";
// 마켓플레이스 가면 vscode-styled-components

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: tomato;
  color: white;
  margin: 0;
  padding: 0;
  border: 0;
  margin-left: 20px;
  cursor: grab;
  :last-child {
    width: 130px;
    background-color: red;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContents = styled.ul`
  display: flex;
  list-style: none;
`;

const ContentBtn = styled.li`
  color: white;
  cursor: grab;
  margin-left: 20px;
  padding: 10px;
`;

const LoginWrap = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
`;

const LoginInput = styled.input`
  height: 30px;
  margin: 0;
  padding: 0;
  border: 0;
  margin: 0 10px;
`;

export {
  Button,
  HeaderWrap,
  HeaderContents,
  ContentBtn,
  LoginWrap,
  LoginInput,
};
