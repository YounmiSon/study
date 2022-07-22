window.onload = function () {
  //window 객체 로드 이후
};

//콜백 함수란?
//비동기 방식으로 작성된 함수를 동기(동시에) 처리 하기 위해 주로 사용
//비동기 처리를 기본으로 하고 일부 구간에서 순차적인 처리가 필요할때(ex. API)
//응답을 받은 다음에 처리해야 할 때

//익명의 함수 사용
let num = [1, 2, 3, 4];

num.forEach(function (el, i) {
  //console.log(el);
  console.log(i);
});

//함수의 이름만 전달하는 방법, 매개변수로 이름과 함수를 받을 함수
//보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막으로 하나 더 선언해준다

function myFun(text, callBack) {
  //매개변수로 받은 text 보여줌
  console.log(text);
  //매개변수로 받은 콜백함수 사용
  callBack();
}
//callFun 콜백으로 전달해서 보여줄 함수를 만듦
//
myFun("어쩌구", callFun);

//함수의 이름만 전달하는 방법
function callFun() {
  console.log("난 콜백");
}

// 함수를 사용했고 첫번째 매개변수는 임의의 문자를 삽입
// 함수를 전달하는 부분은 우리가 함수를 사용할 때 ()괄호를 붙이는데
// ()괄호는 함수를 사용하겠다는 뜻이고 콜백으로 함수를 전달 할때는
// ()괄호가 없이 함수의 이름만 전달하는 것

//전역변수, 지역변수 콜백 함수의 파라미터로 전달
//전역변수 를  선언
let myName = "윤철";

//매개변수로 함수를 받을 함수를 만듦
function callBackFun(call) {
  // call 자리의 이름은 임의로 지정가능, 매개변수를 받을거임
  //지역 변수 선언
  let youName = "병현";
  call(youName);
}

//매개변수로 넘겨줄 함수
function callName(you) {
  //매개변수 받을거 you
  //매개 변수로 넘길 함수를 선언해둔 myName 전역 변수를 사용하고
  //자신이 받은 매개 변수 you를 사용한다.
  //
  console.log(myName + "이랑" + you + "사이가 좋아");
}

//callBackFun 함수를 사용을 하는데 매개 변수로 callName 함수의 이름을 전달
callBackFun(callName);

// 콜백의 주의 할 점 this를 보호하자
// this로 쓴 함수를 콜백으로 전달하면 안됨?<?
class con {
  constructor(name) {
    this.name = name;
  }
  setname = function (firstName, lastName) {
    this.name = firstName + " " + lastName;
    //console.log(this.name + "내 이름");
  };
}

let con = {
  name: "홍길동",
  setname: function (firstName, lastName) {
    this.name = firstName + " " + lastName;
    console.log(this.name + "내 이름");
  },
};

// let _con = new con("윤철");
// console.log(_con);
// _con.setname();

function getName(firstName, lastName, callBack) {
  //callBack 찍으면 함수가 그대로 나옴
  callBack(firstName, lastName);
  console.log(this);
}

getName("나 병현", "나 윤철", con.setname);
console.log(con.name);
console.log(window.name);

// getName이 함수에 전달한 callBack변수에는 con.setname의
// 함수가 전달이 되었는데 con.setname(); 이렇게 코드상에서 사용하면
// this는 con객체이지만 getName 함수에 getName의 이름으로 callBack
// 함수를 전달해서 사용하면 this는 window 객체이다.

let con = {
  name: "이름",
  setname: function (firstname,  lastname) {
    this.name = firstname + "," + lastname;
    console.log(this.name);
  },
};

function getName(firstname, lastname, callBack) {
  callBack(firstname, lastname);
}

getName("지니", "윤철", con.setname);
console.log(window.name);

4명 들어간 함수 만들기
let herName = "지니";

function callBackFun(name) {
  let othersName = ["수진", "하진", "지원"];
  name(othersName);
}

function callName(others) {
  console.log(herName + "는 동갑 " + others + "은 언니");
}

callBackFun(callName);
