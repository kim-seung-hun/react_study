// redux에서 reducer를 합쳐주는 함수를 지원해줌 (번들링)
// combineReducers() 함수에 객체로 전달하면 끝
import { combineReducers } from "redux";
import login from "./login";
import weather from "./weather";
// 저장소에 합쳐진 리듀서 함수가 반영된다.

const routeReducer = combineReducers({ login, weather });

export default routeReducer;
