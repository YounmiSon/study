//이벤트 함수의 타겟

// //클릭의 event.target
// window.onclick = function(event){
//     //event.target은 이벤트가 발생한 요소
//     //event 태그의 이벤트가 담겨있다. 
//     console.log(event.target);
//     //클래스가 무엇인지 판단을 해서 이벤트를 적용시킬수도 있다. 
//     if(event.target.classList.contains('_target')){
//         console.log('있어');
//     }

//     //클래스가 무엇인지 가져와서 조건문으로 이벤트를 설정해 줄 수 있다. 
//     let _class = event.target.className;
//     switch (_class) {
//         case "_target":

//             break;

//         default:
//             break;
//     }
// };

// //마우스의 현재 페이지에서의 위치
// //onmousemove : 마우스가 움직일 때
// window.onmousemove = function (e) {  //e나 event 원하는거 쓰기
//     //e.type : 해당 이벤트의 타입이 무엇인지
//     console.log(e.type);
//     //e.pageX : 문서 페이지의 상에서 마우스의 X 좌표
//     console.log(e.pageX);
//     //e.pageY : 문서 페이지의 상에서 마우스의 Y 좌표
//     console.log(e.pageY);
// };

//키보드 입력 이벤트
_input.onkeydown = function(e){
    //_input 여기에 이벤트는 keyboardEvent
    //.keycode : 아스키(ascii) 코드를 숫자로 보여줌
    //(영문, 숫자, 엔터, 컨트롤, 알트.. 한글 입력시 229만 뜬다)
    console.log(e.keyCode); 
};

//기본 동작을 취소하는 방법
_btn.onclick = function(e){
    //preventDefault() : 기본 동작을 취소하는 함수 
    e.preventDefault();
    //stopPropagetion() : 버블링 현상을 막는 방법
    //(자식 등에게 이벤트가 전파되는 것을 막는 방법)
    e.stopPropagetion();
};
