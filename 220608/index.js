//이벤트 리스너

//이벤트 리스너 제거 
let el = document.createElement('div');
//el에 testclass 추가 
//클래스 여러 개 추가(띄어쓰기로 몇개가 있는지 구분함)
el.className = "test test2 test3";
//el에 id 추가
el.id = "test";
//익명함수를 변수에 담아 놓았다
let onevent = function () {
    console.log('난 이벤트');
}

//el에 이벤트를 추가하는데 이벤트 타입은 click이고 
//두번째 매개변수 함수는 onevent 변수에 담긴 익명함수이다.
el.addEventListener('click', onevent);
//removeEventListner 이벤트를 제거하는데 타입은 click이고
//두번째 매개변수는 제거할 함수이다. 
el.removeEventListener('click', onevent);
//▶만들자마자 제거했으니까 '난 이벤트' 는 콘솔에 안뜸

document.querySelector('.content').appendChild(el);

//클래스의 이름 읽기
console.log(el.className); //문자열 형태로 읽음
console.log(el.classList); //배열의 형태로 읽음

//클래스의 이름을 순서대로 읽기
for (let i = 0; i < el.classList.length; i++) {
    //classList에서 item 함수를 이용해 해당 index의 값을 확인할 수 있다. 
    //item(여기에 index)
    console.log(el.classList.item(i)); 
};

//classlist 클래스 추가
//add 함수를 사용해서 클래스 추가 
//,(콤마)로 여러 개의 클래스 추가 가능
el.classList.add("test4", "test5", "test6");
//console.log(el.classList);

//classlist 클래스 제거 
//remove 함수를 이용해서 클래스 제거
//이 함수도 콤마를 이용해 여러 개의 클래스 제거 가능
el.classList.remove("test4", "test5", "test6");
