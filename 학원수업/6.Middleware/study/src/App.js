import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import { weather, logins } from "./middleware";

// get 요청 방식
// axios({url : ''});

// post 요청 방식
// axios({
//   method: "psot",
//   url: "",
//   data: {
//     // 넘겨줄 값을 넣어주면 된다.
//   },
// });

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const getWeather = (name) => {
    dispatch(weather.getWeather(name));
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const weatherData = useSelector((state) => state.weather.weatherData);

  // async function getWheather() {
  //   const data = await axios({
  //     url: "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=d44da875ea57327b74a54aa81f573cfa",
  //   });
  //   console.log(data);
  // }
  // getWheather();

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const isLogin = useSelector((state) => state.login.isLogin);
  const userName = useSelector((state) => state.login.id);

  const login = () => {
    dispatch(logins.login(id, pw));
  };
  const logout = () => {
    dispatch(logins.logout());
  };

  return (
    <div className="App">
      <label>도시 이름</label>
      <input value={name} type="text" onChange={onChange} />
      <button onClick={() => getWeather(name)}>날씨 검색</button>
      <div>
        지금 {weatherData && weatherData.data?.name}의 날씨는 :
        {weatherData && weatherData.data?.weather[0]?.main}
      </div>
      <br />
      <label>아이디</label>
      <br />
      <input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <label>비밀번호</label>
      <br />
      <input
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br />
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
      <div>로그인됨?</div>
      {isLogin ? <div>{userName} 로그인됨</div> : <div>로그인 안됨</div>}
    </div>
  );
}

export default App;
