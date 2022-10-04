import React, { Component } from "react";

// 생명주기란??
// 생명주기는 우리가 계속 사용할거고 중요하다
// 작업을 하면서 원하는 분기가 필요한데 , 그 분기에 맞게 컨트롤하려면
// 만약 화면을 그려주는 시기와 state 값이 변햇을때 같이 , 이런 부분을 컨트롤 할수 있게 리액트에서 지원해주는 함수들의 lifecycle 함수이다.

// 생긴건 함수형과 많이 다르지 않지만 , class로 선언되었고 리액트에서 제공하는 component라는 class를 상속받아 온다.

// 1. mounting : 그려주고 컴포넌트가 시작될때 처음 한번 실행
// 2. updating : state가 업데이트 되고 UI가 그려질때
// 3. unmounting : 컴포넌트가 화면에서 사라질때

// UI 세팅과정
// constructure -> render -> dom update -> componentDidmount
// 이후 값이 변하면
// componentDidupdate (state가 변하면 update 해주는 함수)
export default class BlockClass extends Component {
  // constructure lifecycle 함수 중 하나고 생성자
  // 컴포넌트가 생성되면 제일 처음으로 실행되는 함수
  constructor(props) {
    // super() 자식 클래스가 생성될때 부모 클래스의 생성자를 참조하는 방법
    // react 클래스 컴포넌트의 부모 클래스는 react.Component가 된다.
    // super를 쓰는 이유는 super를 사용하기 전에는 constructure 안에서 this를 쓸수가 없다.
    // 결국 constructure 생성자 내부에서 this.props를 쓰려고 사용
    super(props);

    // 함수형에서는 useState 함수를 썼지만..
    // 클래스 컴포넌트에서는 state 값을 객체로 사용한다.
    // 이 state 값이 변하면 reRendering
    // let [num, setNum] = useState(0); 와 같다
    // let [name , setName] = useState("ㅎㅎ") 와 같다.
    // 주시할 값들
    this.state = {
      num: 0,
      name: "ㅎㅎ",
    };
    console.log("constructor");
  }
  // 그려주고 한번 실행되는 함수 생성될때
  componentDidMount() {
    // 작업을 하면 여기서 주로 데이터베이스 값을 가져온다.
    // componentDidMount가 UI를 그려준 다음에 실행되는 함수이기 떄문에
    // UI를 그리기전에 데이터는 가져와봤자 넣어줄수가 없기때문에
    // UI를 그려주고 데이터를 가져와서 동작 시켜주기 위해서 componentDidMount lifecycle 함수를 이용한다.
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    // 전에 말했던 함수형에서 useState() 함수 , class 컴포넌트에서는 setState()이 함수
    // state 값이 변하는 것은 비동기하고 했는데 그 값을 변하는 값을 update에서 확인 할수 있다.
    // 이 말은 state 값이 변하고 실행되는 함수라는 얘기
    // state 값이 변하고 처리해야하는 작업은 전부 이곳에서 해주면 된다.
    console.log(this.state);
    console.log("componentDidUpdate");
  }
  add = () => {
    // class 컴포넌트에서 state 값을 변하게 하고 싶으면 setState 함수를 이용해서 값을 수정한다.
    // setState 함수의 매개변수 안에 객체에서 바꾸고 싶은 키와 값을 넣어준다.
    this.setState({ num: this.state.num + 1 });
    // 객체의 값을 추가해주면 여러 state 값을 같이 수정해줄수 있다.
    // this.setState({ num: this.state.num + 1, name: "안녕" });
    // 비동기 처리되기 때문에 값이 밀린다. >> update에서 확인
    // console.log('this.state)
  };
  render() {
    console.log("render");
    return (
      <div>
        {/* 함수를 전달할때 , 클래스 안에 있기때문에 this.add로 함수를 넣어줘야한다. */}
        {/* class형 컴포넌트는 this가 계속 붙는다. 이런 이유로 사람들이 함수형 컴포넌트를 선호하는 이유 */}
        <button onClick={this.add}></button>
        {/* prrps 값은 부모컴포넌트에서 받아서 사용할수있따. */}
        <div>{this.props.test}</div>
      </div>
    );
  }
}
// rcc 리액트 클래스 컴포넌트
