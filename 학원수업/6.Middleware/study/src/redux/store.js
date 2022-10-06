import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// applyMiddleware 미들웨어를 적용시켜주는 함수
// applyMiddleware() 적용시킬 미들웨어 매개변수로 전달

// createStore 함수의 두번째 매개변수로 applyMiddleware 함수를 전달하고
// applyMiddleware 함수의 매개변수로 사용할 미들웨어 전달 , 지금은 thunk

// composeWithDevTools >> 개발자 툴로 action이 일어났을때 변화된 state값을 보여준다
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
