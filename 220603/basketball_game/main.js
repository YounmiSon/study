//컴퓨터의 스코어
let comScore = 0;
//플레이어의 스코어
let userScore = 0;

let turn = false;

//게임의 횟수
let gameCount = 10;
computer.disabled = true;

function userShoot() {
    //turn이 true면 return문으로 함수 종료
    if (turn) return;
    let shootType = Math.random() < 0.5 ? 2 : 3;  //0.5보다 작다면 2점, 아니면 3점
    if (shootType === 2) {
        if (Math.random() < 0.5) {
            console.log('user : 2점 성공');
            userScoreUpdate(shootType);
        }
        else {
            console.log('user : 2점 슛 실패');
        }
    } else {
        if (Math.random() < 0.3) {
            console.log('user : 3점 슛 성공');
            userScoreUpdate(shootType);
        }
        else {
            console.log('user : 3점 슛 실패');
        }
    }
    textUpdate('윤철');
    //다 동작 후 turn을 true로 
    turn = true;
}


//ID는 고유값으로 하나만 존재하기 때문에 document.~ 안써도 user를 가져옴 
// console.log(user);
// console.log(document.querySelector("#user").addEventListener());

// user.addEventListener()
//document.querySelector("#user").addEventListener()
//addEventListener() 이벤트 함수 설정
//document.querySelector("요소의 클래스나 아이디 아니면 어트리뷰트 선택자") 요소 선택자
//document.getElementId

//addEventListener 첫 매개변수는 이벤트 타입을 문자열로, 두번째 매개변수는 이벤트 작동 시 
//실행할 함수
user.addEventListener("click", function () {
    //user를 click 클릭하면 실행되는 곳
    //usershoot 함수 실행
    userShoot();
})

function userScoreUpdate(addScore) {
    //userScore에 addScore값을 증가 시킨다. 
    userScore += addScore;
    console.log(userScore);
    document.querySelector('.player-score').innerHTML = userScore;
}


//comShoot
function comShoot() {
    //turn이 false면 return문으로 함수 종료
    if (!turn) return;
    let shootType = Math.random() < 0.5 ? 2 : 3;  //0.5보다 작다면 2점, 아니면 3점
    if (shootType === 2) {
        if (Math.random() < 0.5) {
            console.log('com : 2점 성공');
            comScoreUpdate(shootType);
        }
        else {
            console.log('com : 2점 슛 실패');
        }
    } else {
        if (Math.random() < 0.3) {
            console.log('com : 3점 슛 성공');
            comScoreUpdate(shootType);
        }
        else {
            console.log('com : 3점 슛 실패');
        }
    }
    textUpdate('지니');
    gameCounting();
    turn = false;
}

computer.addEventListener("click", function () {
    //user를 click 클릭하면 실행되는 곳
    //usershoot 함수 실행
    comShoot();
})

function comScoreUpdate(addScore) {
    //comScore에 addScore값을 증가 시킨다. 
    comScore += addScore;
    console.log(comScore);
    document.querySelector('.computer-score').innerHTML = comScore;
}

//text를 갱신하는 함수
function textUpdate(name) {
    text.innerHTML = `${name}의 차례`;
    switch (name) {
        case "윤철":
            computer.disabled = false;
            user.disabled = true;
            break;
        case "지니":
            computer.disabled = true;
            user.disabled = false;
            break;
        default:
            break;
    }
}

//게임 횟수를 업데이트하는 함수
function gameCounting() {
    gameCount--;
    //게임 카운트 감소를 shots에 넣는다. 
    shots.innerHTML = gameCount;
    //게임 카운트 감소
    if (gameCount === 0) {
        //게임의 승패를 보여주고 
        if (comScore > userScore) {
            text.innerHTML = "윤철의 승리";
        }
        else if (comScore < userScore) {
            text.innerHTML = "지니의 승리";
        }
        else {
            text.innerHTML = "무승부";
        }
        computer.disabled = true;
        user.disabled = true;
    }
}