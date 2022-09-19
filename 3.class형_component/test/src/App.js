import "./App.css";
import { img01, img02, img03 } from "./img";
import Block from "./Block";
import { useState } from "react";

function App() {
  // 가위바위보 만들기
  // 플레이어 영역 , 컴퓨터 영역
  // 플레이어가 가위나 보를 선택해서 버튼을 누르면
  // 플레이어가 선택한 이미지가 플레이어 영역이 보이고
  // 컴퓨터는 랜덤한 값을 이용해서 가위바위보 이미지가 보이게 만들고
  // 결과가 이겼는지 졌는지 보여주자

  // 1. 플레이어 컴퓨터 영역 (컴포넌트로 정리)

  // 이 객체는 선택할 테이터를 객체로 정리 해준것
  const select = {
    scissors: {
      name: "가위",
      img: img01,
    },
    rock: {
      name: "바위",
      img: img02,
    },
    paper: {
      name: "보",
      img: img03,
    },
  };

  // 유저가 선택한 값을 담아놓고 주시해야한다.
  // 데이터가 바뀌어서 다시 그려줘야 하기 떄문에 (이미지가 변해야함)
  // 유저의 선택한 값을 담을 useState
  const [userSelect, setUserSelect] = useState(null);

  // 컴퓨터의 선택 값을 담을 useState
  // 컴퓨터는 버튼이 없다. 유저가 click하면 랜덤으로 값이 전잘
  // Math.random() 함수로 랜덤 값을 받아온다
  // 받아온 값으로 위에 만들어준 객체에서 값을 가져와야하는데
  // 객체에서 키값만 뽑아서 배열로 만들자
  // let arr = Object.keys(select) 함수로 반환해주면
  // arr 변수 안에 키값만 뽑아서 배열로 받아준다.
  const [comSelect, setComSelect] = useState(null);

  // 승패 결과를 담아줄 useState
  const [result, setResult] = useState("");

  function userClick(temp) {
    setUserSelect(select[temp]);
    //////////////////////////////////////////////////
    // Object.keys 함수를 사용해서 객체의 키값만 뽑아서 배열을 반환 받는데 arr 변수에 바인딩 넣어준다.
    let arr = Object.keys(select);
    // 랜덤한 인덱스 뽑자 근데 3개 0 1 2 중 하나
    // Math.floor 함수로 소수점 제외하고
    let comRandom = Math.floor(Math.random() * 3);
    // arr[comRandom] 얘는 랜덤한 키값이 뽑히는것
    // select 객체에 값을 불러오는 방법이 select. 점찍고 키값을 가져오거나 , select['문자열'] 가져오는 방법 등 두가지가 있다.
    setComSelect(select[arr[comRandom]]);

    // 결과를 가져오는 방법
    // 결과를 가지고 승패를 보여준다.
    let player = select[temp];
    let computer = select[arr[comRandom]];

    // 유저와 컴퓨터가 같으면 무승부
    // 유저가 가위 내면 컴퓨터의 승리는 주먹 / 지면 보
    // 유저가 보 내면 컴퓨터의 승리는 가위 / 지면 주먹
    // 유저가 주먹 내면 컴퓨터의 승리는 보 / 지면 가위
    if (player.name == computer.name) {
      setResult("무승부");
    } else if (player.name == "가위") {
      let temp = computer.name == "보" ? "이겼다" : "졌다";
      setResult(temp);
    } else if (player.name == "바위") {
      let temp = computer.name == "가위" ? "이겼다" : "졌다";
      setResult(temp);
    } else if (player.name == "보") {
      let temp = computer.name == "바위" ? "이겼다" : "졌다";
      setResult(temp);
    }
  }
  // 1. 우리가 만들어놓은 객체의 값이 필요하기 떄문에 userClick 함수를 만들었고
  // 그 값을 저장해주는 userSelect변수를 useState 함수를 통해서 만들어줬고

  // 2. 버튼을 클릭해줬을때 그 함수가 실행이 되고 state값이 변하기 때문에 다시 리렌더링 된다.
  // 부모가 리렌더링 됐으니 자식 컴포넌트도 리렌더링 된다.

  // Block에 우리는 userClick을 실행하고 setUserSelect 함수로 변경한 userSelect 값을 props로 넘겨줫다.

  // Block에서는 props로 넘겨받은 값을 사용해서 img의 경로를 받아서 이미지를 보여줬다. >> 부모가 리렌더링 되었기 때문에 자식도 변한 값이 리렌더링 된다.

  return (
    <div>
      <div className="App">
        <Block data={userSelect} name="user" test={result} />
        <Block data={comSelect} name="com" test={result} />
      </div>
      <div>
        <button
          onClick={() => {
            userClick("scissors");
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            userClick("rock");
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            userClick("paper");
          }}
        >
          보
        </button>
      </div>
    </div>
  );
}

export default App;

// 함수형
