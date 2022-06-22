// 정규표현식
// 정규표현식은 문자 검색과 교체에 사용되는 패턴을 제공한다
// 자바스크립트에서 RegExp 객체의 문자 함수(메서드)를 조합해 정규 표현식을 사용할 수 있다

// box변수에 box 태그를 선택지로 담아 놓고 
let box = document.querySelector('.box');

// box의 innerHTML 안녕하세요를 대입
box.innerHTML = "안녕하세요";

let reg = new RegExp('안녕');

// RegExp는 두 개의 매개변수 string | RegExp, flags?L string
// 앞은 찾는 문자
// 두번째는 플래그
// 플래그는 정규표현식에 영향을 주는 옵션

// 플래그의 종류에는
// i : 대소문자 구분 없이 구별할 수 있다 A, a ...
// g : 패턴과 일치하는 모든 것을 찾는다 g가 없으면 일치하는 것에서 첫번째 것만 가져온다
// m : 다중 행모드 줄이 내려져있어도 찾아옴, 백틱 같은걸로 행 차이가 없어도

let string = "안녕하세요";
// //문자열 함수 = match('찾는 문자열', '플래그');
box.innerHTML = string.match("안녕");  //string의 정규식에 대함 함수가 들어있는거임

let string2 = "하하하하하하하하하";
// 슬래시는 "/" 자바스크립트에서 정규표현식을 생성하고 있다는 것을 알려준다
// 문자열에서 따옴표를 쓰는 것과 같다

// g플래그 사용
box.innerHTML = string2.match(/하/g);
// g는 패턴과 일치하는 모든 문자를 찾는데 콤마로 구분한다

// 정규식을 사용하는 이유는 
// 이메일인지 체크하는 정규식(인터넷 검색하면 나옴)

// i 플래그 사용
// i는 대소문자 구별 없이 문자를 찾는다. 
let str = "나는 abC, 나는 문자열";

let str2 = str.match(/aBc/i);

// 찾은 문자열을 배열의 형태로 담아 둔다 
console.log(str2[0]);
console.log(str2.length);
box.innerHTML = str2;


// 나는 웹 개발자 본인 이름
let text = "나는 웹 개발자 손윤미";
box.innerHTML = text.match(/나는/);
box.innerHTML += text.match(/ 웹/);
box.innerHTML += text.match(/ 개발자/);
box.innerHTML += text.match(/ 손윤미/);


// 편하게 바꿔보기
// name2에 box.innerHTML 넣으면 내용은 "나는 웹 개발자 본인이름"이렇게 들어있고
// 해당 문자열을 찾아서 바꿔주는 편리한 아이 (replace);
// replace(정규식 생성, 찾은 문자열을 바꿔줄 문자)
// name2에 "나는 웹 개발자 손윤미";라는 문자를 담아주고

// text2에 다시 대입하는데 name2를 문자열 함수 replace를 사용해서 " 본인이름" << 문자열 찾고
// 찾은 문자열을 "바꿀 문자열"로 교체한 후에 text2에 대입
// "나는 웹 개밟자 본인 이름" => "나는 웹 개발자 ㅇㅇㅇ"
let box = document.querySelector('.box');
let text2 = "나는 웹 개발자 손윤미";
// text2 = text2.replace(/ 본인이름/i, "바꿀 문자열");
text2 = text2.replace(/ 손윤미/i, " 아무거나");
box.innerHTML += text2;

// // 1) 변수를 각각 선언d
// let one = text.match(/나는 /g);
// let two = text.match(/웹 /g);
// let three = text.match(/개발자 /g);
// let four = text.match(/손윤미/g);
// box.innerHTML = one + two + three + four;

// // 2) 새 변수 선언해서 출력
// let res = text.match(/나는 /g) + text.match(/웹 /g) + text.match(/개발자 /g) + text.match(/손윤미/g);
// box.innerHTML = res;

// replace를 사용해서 바꿔보았는데 
// replace의 두번째 매개변수에 /특수문자를 입력하면 특수한 방법으로 문자열을 교체할 수 있다. 

// 특수한 방법에는 
// $& : 패턴과 일치하는 부분의 문자열 (사용하면 거의 얘만 씀)
// $` : 일치하기 전의 문자열의 일부를 대입
// $' : 일치한 후 문자열의 일부를 대입
let text3 = box.innerHTML;
box.innerHTML = text3.replace(/ 아무거나/, "$` 집에가고싶다");

// 실습
// 1. input을 2개 만들고 하고 싶은 일, 이름 입력받는건 버튼으로 처리(총 2개)
// 2.두 개가 box 안의 내용이나 console에 나오고
// 3. 교체버튼을 누르면 바뀌기
// 4. 이름 뒤에 하고 싶은 일 대입(두개의 위치를 바꿔보기)
// let res_area = documet.getElementById('res_area');

// 1. input을 2개 만들고 하고 싶은 일, 이름 입력받는건 버튼으로 처리(총 2개)


//2.두 개가 box 안의 내용이나 console에 나오고

print.onclick = () => {
    let work = document.getElementById('work').value;
    document.getElementById('print').innerHTML = work;
}

