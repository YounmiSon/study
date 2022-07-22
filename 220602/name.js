//4명 들어간 함수 만들기
let herName = "지니";

function callBackFun(name) {
  let othersName = ["수진", "하진", "지원"];
  name(othersName);
}

function callName(others) {
  console.log(herName + "는 동갑 " + others + "은 언니");
}

callBackFun(callName);