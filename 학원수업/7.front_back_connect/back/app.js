const express = require("express");
const cors = require("cors");
const { sequelize, User } = require("./public");

const app = express();

// cors error 해결방법
// front와 back의 PORT 가 다르기 때문
// cors란 브라우저 보안정책
// 브라우저가 서로 다른 도메인/포트의 서버로 요청했을때 발생한다.
// 접근을 허용해주어야 한다.
// cors 설정을 해주어야한다.
// npm i cors

const options = {
  // origon: '*' // 누가 오든 요청 허용
  // origin: true // 들어오는 요청 도메인 /포트가 자동으로 origin에 들어감
  // origin: '도메인' // 실제 서비스되는 도메인만 접근할수 있게 허용한다.
  // credential: true,false (둘중 하나) // 사용자가 인증이 필요한 리소스를 접근 허용해줄지(쿠키 등)
  origin: "http://localhost:3000", // 현재 이 주소 허용 , 나중에 배포한 이후에 이곳에 그 도메인을 넣어준다.
};

// 전달받은 객체 형태를 해석해서 사용할수 있게 설정
app.use(express.json());

app.use(cors(options));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send({ id: "aaa" });
// });

app.post("/signUp", async (req, res) => {
  let { id, pw } = req.body;
  const users = await User.findOne({
    where: { user_id: id },
  });

  if (!users) {
    User.create({
      user_id: id,
      user_pw: pw,
    }).then(() => {
      res.send("가입완료");
    });
  } else {
    res.send("동일한 이이디가 있어요");
  }
});

app.post("/login", async (req, res) => {
  let { id, pw } = req.body;
  const users = await User.findOne({
    where: { user_id: id, user_pw: pw },
  });
  if (users) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(8000, () => {
  console.log(8000, "server running");
});
