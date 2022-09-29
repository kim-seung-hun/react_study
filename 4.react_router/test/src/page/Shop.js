import React from "react";
import { Header, Body } from "../com";

const Shop = (props) => {
  return (
    <div>
      <Header title="상점페이지" />
      <Body path="/detail/1/4/wemix" name="1번 상품" islogin={props.islogin} />
      <Body
        path="/detail/2/23/에이다"
        name="2번 상품"
        islogin={props.islogin}
      />
      <Body path="/detail/3/1/비트" name="3번 상품" islogin={props.islogin} />
      <Body
        path="/detail/4/421/에이다"
        name="4번 상품"
        islogin={props.islogin}
      />
      <Body path="/detail/5/4/리플" name="5번 상품" islogin={props.islogin} />
    </div>
  );
};

export default Shop;
