// mysql 프로젝트에 연결

// mysql npm 설치 명령어

// mysql 과 mysql2의 차이점
// mysql은 콜백 기반이기 때문에 promise를 사용하지 못하기 때문에 mysql을 쓸거고
// mysql을 보완한다면 promise-mysql을 설치해서 사용해야 한다
// mysql2는 promise를 지원하기 때문에 바로 써도 된다
//----------------------------------------
// npm i mysql2
//----------------------------------------
const mysql = require("mysql2");

// createConnection의 옵션
// host: 연결할 호스트를 나타냄
// port : 연결할 포트
// user : 사용자의 이름
// password : 사용자 비밀번호
// database : 연결할 데이터 베이스 이름
// debug : 디버그 모드를 사용할 것인지

const temp = mysql.createConnection({
  user: "root",
  password: "",
  database: "test4",
});

// database : 'test4' = test4 이름의 데이터 베이스를 사용하겠음
// query 함수의 첫번째 매개변수는 쿼리문을 입력해주고
// 두번째 매개변수는 콜백 함수 매개변수를 첫번째 쿼리 에러, 두번째 쿼리
// 이후 등등
temp.query("SELECT * FROM posts", (err, res) => {
  if (err) {
    console.log("안됨");
  } else {
    console.log(res);
  }
});

const http = require("http");

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  res.write("123");
  res.end("456");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log("port :", PORT);
});