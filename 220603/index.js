// function one() {
//     //setTimeout으로 2초 뒤에 콘솔 사용
//     setTimeout(() => {
//         console.log("첫번째");
//     }, 2000);

// }

function two() {
    console.log('두번째');
}

function three() {
    console.log('세번째');
}

//순서 첫번째가 2초 뒤에 나오고
//두번째, 세번째가 먼저 나옴
// one();
// two();
// three();

function one() {
    //setTimeout으로 2초 뒤에 콘솔 사용
    setTimeout(() => {
        console.log("첫번째");
    }, 2000);

}
// function use() {
//     //Promise 동적으로 생성
//     return new Promise(function (res, rej) {
//         //setTimout 실행하고 1초 뒤에 
//         setTimeout(() => {
//             //console로 첫번째 
//             console.log("첫번째");
//             one();
//             rej(); //결과 내고
//         }, 1000);
//     })
// }

function use(data) {
    //Promise 동적으로 생성
    return new Promise(function (res, rej) {
        //setTimout 실행하고 1초 뒤에 
        setTimeout(() => {
            if (data === 1) {
                //console로 첫번째 
                console.log("첫번째");
                //one();
                res();

            }
            else if (data === -1) {
                rej();
            }
        }, 1000);
    });
}

use(1).then(function () { //then 결과 올때까지 기다렸다가 익명함수 two(), three() 실행
    //use에 1, -1 넣는 값에 따라 res/rej 다르게 나옴
    // two();
    // three();
    console.log('난 res 성공');
}).catch(function () {
    console.log('난 rej 실패');  //성공할 땐 then, 실패시 reject 나옴
}
)

// //json 파일을 데이터처럼 가져와보기
// //이제 데이터를 저장된 것을 가져와 볼거야

function loadJson() {
    //fetch 경로에 데이터를 요청한다 기본적으로 method는 
    //get(데이터를 가져온다)방식과 post(참조도 되고 쓰기 및 수정 가능)방식
    //fetch는 비동기 요청 방식이다.
    return fetch("index.json")
    //요청을 하는데 json 방식으로 받는다
        .then((res) =>  res.json())
        //player 키값의 객체를 가져옴
        .then((json) => json.player)
        //catach 실패했을때 
        .catch ((rej) => {
            console.log('난 죽었어');
        });
}

loadJson().then((player) => {
    console.log(player);
});
