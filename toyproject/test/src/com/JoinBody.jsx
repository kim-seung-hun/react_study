import React from "react";

const JoinBody = (props) => {
  return (
    <form onSubmit={props.joinUser}>
      <div className="body">
        <div className="logInput">
          <input
            name="userId"
            onChange={props.onChangeHandle}
            placeholder="사용할 아이디 입력"
            value={props.user.userId}
          />
        </div>
        <div className="logInput">
          <input
            name="userName"
            onChange={props.onChangeHandle}
            placeholder="이름"
            value={props.user.userName}
          />
        </div>
        <div className="btn">
          <button type="submit">{props.text}</button>
        </div>
      </div>
    </form>
  );
};

export default JoinBody;
