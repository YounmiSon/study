//콜백 지옥
//첫번째로 숫자 값을 받고 두번째로 함수를 받는다.
function temp(num, call) {
  let _num = num * num;
  console.log(_num);
  call(_num);
}

// temp(5, function(){ //이름이 아니라 익명함수 전달
//     console.log("안녕 난 익명");
// });

//함수를 실행하는데 
//첫번째 매개변수로 5의 값을 전달
//두번째 매개변수로 매개변수 하나를 받을 익명함수를 전달
temp(5, function (result) {
  //이 안에서 함수를 또 실행시키는데 위에 익명함수의 매개변수 값을 전달
  //첫번째 매개변수로 result(실행시킨후 값)을 다시 전달
  temp(result, function (result) {
    console.log("첫번째");
    temp(result, function (result) {
      console.log("두번째");
    });
  });
});

//해결방안
function add(num) {
  return new Promise((resolve, reject) => {
    let _num = num + num;
    console.log(_num);
    resolve(_num);
  });
}

//Promise는 정상 수행 후 resolve, 실패 후 reject가 실행된다.
//callback을 사용했던 것과 마찬가지로 resolve 값을 담아 전달한다.

//이건 Promise Hell
add(5).then((result) => {
  //resolve reject 나왔을 때 까지
  add(result).then((result) => {
    console.log("END");
  });
});

//Promise Hell 탈출 하려면
function add(num) {
  return new Promise((resolve, reject) => {
    let _num = num + num;
    console.log(_num);
    resolve(_num);
  });
}

add(5)
  .then((result) => {
    return add(result);
  })
  .then((result) => {
    return add(result);
  })
  .then((result) => {
    console.log("Hell 지옥 탈출");
  });

  function eat(){
      return new Promise(function(resolve){
          //setTimeout 밑에 쓴 숫자는 1000에 1초다. 
          //setTimeout은 밑의 시간 이후에 실행.
          setTimeout(() => { 
              resolve("5초 후 날 볼거야(작업완료)");
          }, 5000);  //1000이 1초
      })
  }

  //await는 처리 될 때까지 기다려줌
  (async function(){
     var result = await eat(); //eat resolve가 될때까지 기다려
     console.log(result);
  })();