//대망의 node.js
//js를 써서 데이터 베이스에 연결해 서버로 요청을 보내는 기능을 구현할 수 있다
//node.js는 chrome v8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임이다
//node.js를 웹서버 자체로 생각하는건 잘못된거임 아파치같은 웹서버 중 하나가 아니다
//자바스크립트 브라우저가 아니라 서버에서 자바스크립트가 동작하도록 도와주는 런타임 플랫폼
//이라고 생각하면 된다

//2009년에 라이언 달 이라는 개발자가 node.js를 처음 만들었고 지금까지도 업데이트가 잘 되고 있다
//node.js를 설치해서 실행한다고 웹서버가 실행되는게 아니라 node.js에 있는 라이브러리 설치해서 
//npm(node package manager, node package를 관리하는거)를 이용해서 라이브러리를 설치해서 사용할 수 있다

//node.js의 특징 4개 
//1. 자바스크립트로 백엔드 서버 로직을 개발 할 수 있다(장점)

//2. 구글에서 개발한 js 엔진을 쓰기 때문에 속도가 빠르다(인터프리터 방식)

//3. 논 블로킹 방식 node.js의 모든 api는 비동기적으로 작동하며 호출 후 다른 API를 바로 불러올 수 있다
//한 번 불러왔던 API를 요청하면 이벤트 루프가 확인해서 동작

//node.js가 왜 생겼냐면?
//방대한 오픈 소스 생태계를 구축하기 위해서 
//npm(node package manager) 사용해서 패키지들을 다운받을 수 있고 
//리액트 익스프레스 코아 ... 이런 익숙한 것들의 패키지들은 다 npm에 등록되어 있다 
//특수한 걸 만드는 사람이 아닌 이상 거의 다 기능이 이미 나와 있는 것들이 많다
//잘쓰면 빠르고 좋은 효과를 볼 수 있다

//모듈(작은 기능들의 집합)
//패키지는 클래스의 묶음, 패키지의 모임이 모듈
//기능들의 모임, 파일의 모임

//require를 많이 사용할 거임
//node.js의 require 가 무엇인가?

//자동완성 안 뜰 때 ctrl + spacebar + !



//node.js에서 모듈을 가져오는 방법 require함수를 
//require(경로나 이름)
//http는 js 안에 있는 모듈, 따로 설치하지 않아도 됨
const http = require('http');

//http 객체 안의 createServer 함수를 사용해서 서버를 만듦
//http.createServer를 변수에 담으면 서버가 되는 부분을 반환받을 수 있다
const server = http.createServer((req, res) =>{
    //req 요청값
    //404 500 이런 오류들
    //http에서 ok를 나타내는 번호가 200번이라서 
    req.statusCode = 200; 

    //http 상태코드
    //100번대 : 정보응답
    //200번대 : 성공응답
    //300번대 : 리다이렉션 메세지, 요청한 url이 변경되었을 때
    //400번대 : 클라이언트 상의 오류
    //500번대 : 서버 오류 응답, 서버에 오류가 있을 때

    //write 문자를 써서 보내주는 함수
    res.write('123');
    //끝맺음, 매개변수를 문자를 보내주면서 끝
    res.end('456');
});

const PORT = 4000;
//서버가 되는 server에 함수를 사용한다 서버를 열어줌
//listen 함수로 서버를 열어줌
server.listen(PORT,()=>{
    console.log('port :', PORT);
});

//server 객체의 준비가 되면 listen 함수로 해당 포트에 서버를 대기시킨다
//서버를 대기시키는 이유는 클라이언트에서 요청이 오면 서버가 받아서 퍼리할 수 있다
//여기 들어가는 매개 변수는 (포트번호, 호스트의 이름, 백 로그, 콜백함수) 이렇게 있다

//node.js 실행하는 법
//node 자바스크립트 파일의 경로

//이렇게만 해도 웹서버가 열려요

//node.js 코딩을 해볼 수 있는 곳 테스트용 코드들
//코드 샌드박스, glitch 등등
//노드 서버를 바로 볼 수 있고 코딩도 바로바로 체스츠 해볼 수 있다

//glitch 장점
//https 검증도 되어있는 웹 서버를 테스트로 사용해 볼 수 있다
//node프로젝트 생성 버튼을 누르고
//server.js에 서버 로직을 작성한 후 바로
//preview 버튼을 눌러서 위에 버튼은 바로 그 창에서 화면을 볼 수 있고
//테스트용 링크가 필요하면 preview 버튼 눌렀을 때 preview in a new window 
//이 버튼을 누르면 클라이언트 요청을 보낼 웹서버 주소로 접속이 된다
//그래서 테스트에 용이하게 사용할 수 있다


//node.js 버전관리
//버전관리 하는 방법 서버노드는 최신인데 로컬노드가 구 버전이면
//최신버전은 기능이 있는데 구버전에 없을 경우에 기능이 실행되지 않아요
//이런 버전 문제가 생겼을 경우 해결해주는 아이
//물론 우리가 조작을 해줘야한다
//삭제했다 깔았다 하면 쉬운데 귀찮으니까
//nvm(node version manager)
//윈도우에선 https://github.com/coreybutler/nvm-windows/releases
//이전 버전 보려면 https://nodejs.org/ko/download/releases/

//nvm-setup.zip을 설치

//cmd 창 열어서

//노드 버전 확인
//node -v 

//nvm 버전 확인
//nvm -v

//설치된 버전 확인
//nvm ls

//nvm 변경할 node 버전 설치 명령어
//nvm install v15.10.0

//node 설치된 버전을 적용하라는 명령어
//nvm use 15.10.0

//state 오류가 발생하면 cmd를 관리자 권한으로 실행해야 한다
//(관리자 권한에서)
//nvm use 15.10.0

//설치되었는지 확인
//>node -v