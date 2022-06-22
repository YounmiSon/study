// //<UI 이벤트>

// //load - 페이지와 기타 요소들의 로딩이 완료되었을 때
// //on이 붙으면 어트리뷰트 방식
// window.onload = function () {
//     //로드가 완료되고 실행되는 함수(로드 완료? => 페이지를 전부 한 번 읽음)
//     console.log('page가 로드됨');
//     console.log(document.querySelector('.tag')); //document에 있는 이벤드
// };

// window.addEventListener('load', function () {
//     //여기도 로드가 완료되고 실행되는 함수
//     console.log('page가 로드됨');
// });

// //어트리뷰트를 사용하거나
// //window.addEventListener('이벤트의 타입', 함수)를 사용하여
// //이벤트 핸들러에도 load이벤트를 등록할 수 있다. 

// ///resize 브라우저 창의 크기가 바뀌었을 때 
// window.onresize = function () {
//     console.log("페이지 사이즈가 변했다.");
// }; //어트리뷰트

// window.addEventListener("resize", function () {
//     console.log("페이지 사이즈가 변했다.2");
// });//이벤트핸들러 

// //scroll 사용자가 페이지를 스크롤 했을 때
// //window.scrollY : 브라우저의 스크롤 값 맨위가 0
// window.onscroll = function () {
//     //console.log(window.scrollY);
//     console.log("나 스크롤 됨");
// }

// window.addEventListener("scroll", function () {
//     console.log("나 스크롤 됨2");
// });

// //------------------------------------------------------
// //<키보드 이벤트>
// //keydown 사용자가 키를 눌렀을 때(누르고 땐게 아니라 누르자마자)
// window.onkeydown = function () {
//     console.log("키가 입력됨");
// };
// window.addEventListener("keydown", function () {
//     console.log("키가 입력됨2");
// });


// //keyup 사용자가 키를 누르고 땠을 때
// window.onkeyup = function () {
//     console.log("키를 땠음");
// };

// window.addEventListener("keyup", function () {
//     console.log("키를 땠음");
// });


// //keypress 사용자가 키를 계속 누르고 있는 둥안
// window.onkeypress = function () {
//     console.log("키를 누르고 있음");
// };

// window.addEventListener("keypress", function () {
//     console.log("키를 누르고 있음2");
// });

//------------------------------------------------------
// //<마우스 이벤트>
// //click 사용자가 페이지 위에서 해당 태그elector('.content') //에 마우스를 클릭했을 때
// document.querySclass 인 경우
// content.onclick = function(){
//     //console.log("나 클릭됨");
// };

// content.addEventListener("click", function(){
//     //console.log("나 클릭됨2");
// });

// //dblclick 더블 클릭 했을 때 발동 되는 함수
// content.ondblclick = function () {
//     console.log("더블 클릭함");
// };

// content.addEventListener("dblclick", function () {
//     console.log("더블 클릭함2");
// });

// //mousedown  마우스 버튼을 누르자 마자
// content.onmousedown = function () {
//     console.log("마우스 눌렀음");
// }

// content.addEventListener("mousedown", function(){
//     console.log("마우스 눌렀음2");
// });

//mouseup 마우스 버튼을 누르고 뗐을 때
//어트리뷰트는 단일 함수 추가(갈아낄 수 있다)
//이벤트 핸들러는 다수로 함수를 추가할 수 있다 
// content.onmouseup = function(){
//     console.log("마우스 뗌");
// };
// content.onmouseup = function(){
//     console.log("마우스 뗌1"); //갈아껴짐
// };

// content.addEventListener("mouseup", function(){
//     console.log("마우스 뗌2");
// });
// content.addEventListener("mouseup", function(){
//     console.log("마우스 뗌3");
// });
// content.addEventListener("mouseup", function(){
//     console.log("마우스 뗌4");
// });
// content.addEventListener("mouseup", function(){
//     console.log("마우스 뗌5");
// });

// //mousemove 마우스가 움직일 때
// window.onmousemove = function () {
//     console.log("움직이고 있다");
// };

// window.addEventListener("mousemove", function(){
//     console.log("움직이고 있다2");
// });

// //mouseenter 마우스를 해당 요소의 위로 올렸을 때
// content.onmouseenter = function () {
//     console.log("content에 마우스가 올라옴");
// };

// content.addEventListener("mouseenter", function () {
//     console.log("content에 마우스가 올라옴2");
// });

// //mouseleave 마우스가 해당 요소를 빠져나갔을 때
// content.onmouseleave = function () {
//     console.log("content에서 마우스가 나감");
// };

// content.addEventListener("mouseleave", function(){
//     console.log("content에서 마우스가 나감2");
// });

//------------------------------------------------------
// //<모바일 터치>
// //touchstart 화면을 눌렀을 때
// window.ontouchstart = function(){
//     console.log("모바일 화면이 눌림");
// };


// //touchend 화면에서 손을 뗐을 때
// window.ontouchend = function(){
//     console.log("화면에서 손을 뗐을 때");
// };

// //touchmove 화면에서 터치로 이동할 때
// window.ontouchmove = function(){
//     console.log("터치 이동 중");
// };

//------------------------------------------------------
// //<드래그 이벤트>
// //drag 드래그 하고 있을 때
// window.ondrag = function () { };

// //dragstart 드래그가 시작됐을 때
// window.ondragstart = function () { };

// //dragend 드래그가 끝났을 때
// window.ondragend = function () { };

// //dragenter 드래그 하면서 요소 위로 마우스가 올라왔을 때
// window.ondragenter = function () { };

// //dragleave 드래그 하면서 요소 밖으로 마우스가 나갔을 때
// window.ondragleave = function () { };

// //drop 드래그하다가 놓았을 때
// window.ondrop = function () { };
//------------------------------------------------------

