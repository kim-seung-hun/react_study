import axios from "axios";

// axios
// axios는 브라우저
// 자바스크립트에 fetch가 있는데 , 프레임워크에서 ajax를 구현할때 axios를 쓰는편이다.
// 속성은 url 필수 , 나머지는 전달을 안해도 상관없다
// method는 지정안하면 >> 기본 get 방식

// axios 설치 명령어
// npm i axios

function getWeather(name) {
  // thunk는 action creators 함수를 만들어주는것
  // thunk는 dispatch를 딜레이 시켜주는 역할
  // action 함수는 함수를 반환한다
  // dispatch , getState 둘다 함수
  return async (dispatch, getState) => {
    const data = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d44da875ea57327b74a54aa81f573cfa`,
    });
    // getState 이게 뭐냐
    dispatch({ type: "GET_WEATHER_DATA", payload: data });
    // getState 이게 뭐냐
    // 저장소에 있는 state 객체를 반환해준다
    // console.log(getState());
  };
}

export const weather = { getWeather };
