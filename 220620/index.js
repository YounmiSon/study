//RegExp의 test 함수
//test함수는 일치하는 부분의 문자열이 있으면 true를 반환하고 틀리면 false를 반환
//주로 쓰는 곳) 이메일, 비밀번호, 아이디 등 형식검사 

//버튼 클릭
btn.onclick = function(){
    //input의 값을 val에 담고
    let val = "test";
    //검사식
    //정규식 객체 생성 new RegExp(검사식, 플래그);
    //i는 대소문자 상관없이 찾는다. 
    let reg = new RegExp(val, "i");
    //test() 함수로 input value가 test가 맞는지 확인 
    //맞으면 true 틀리면 false
    console.log(reg.test(input.value));
};

let str = "this is true";
let reg = /this/i;

//match(정규식 객체) str문자를 검사한다
//문자열에 있는 함수
//맞는 문자를 반환
console.log(str.match(reg)); 

//정규식의 test 함수 사용
//정규식에 있는 함수
//식에 적합한지 확인해준다(true, flase)
console.log(reg.test(str));

//문자 클래스들

//문자 클래스는 특정 문자의 특별한 표현이다
let str2 = "aa2a3a4a5a6a7a8a8984476382393";

//정규식 생성
//\d : 모든 숫자를 검사함, 플래그 g를 붙여서 모든 숫자를 검사함
let reg2 = /\d/g;

console.log(str2.match(reg2)); //배열로 나옴

//join 함수는 배열의 요소 하나하나를 합쳐서 하나의 문자열로 반환해주고
//join(매개변수) 매개변수를 넣으면 값과 값 사이에 구분자를 바꿀 수 있다
//매개변수 문자로 바꿔준다
let num = str2.match(reg2).join(); //이 join에는 매개변수 아직 안넣음
//join 안에 매개변수를 문자열로 추가하면 구분점을 그 문자열로 대체할 수 있다
let num2 = str2.match(reg2).join(""); //매개변수 빈 문자열

//join함수가 str2.match(reg2) 배열을 하나의 문자열로 반환해줬다
//구분점은 ,로
console.log(num); //2,3,4,5,6,7,8,8,9,8,4,4,7,6,3,8,2,3,9,3
console.log(num2); //23456788984476382393

//문자 클래스 종류

//1. \d : 0 ~ 9까지의 모든 숫자 
//2. \s : 줄바꿈이나 공백 기호
//3. \w : 단어에 들어가는 문자와 언더바(_), 라틴문자나 숫자 등만 됨, 키릴 문자, 힌디 문자는 안됨

//실습
//input 위에 있는거 사용해서 문자랑 숫자를 섞어서 쓰는데 
//문자만 뽑아서 페이지나 콘솔에 보이기
//구분점은 _ 언더바로

btn.onclick = function(){
    //input값 
    let text = input.value;
    let str2 = /\w/g; 
    let str = text.replace(/\d/g, "").match(str2).join("_");
    console.log(str);
}

//문자클래스의 반대 
//반대 클래스

//1. \D : \d의 반대 숫자가 아닌 것들
//2. \S : \s의 반대 공백이 아닌 것들
//3. \W : \w의 반대 단어, 숫자가 아닌 것들

let str3 = "jaj1hg2jj213gi123jjjk13jh5984jj097k";
//숫자가 아닌 것들 전체 반환
console.log(str3.replace(/\D/g, ""));

//replaceAll 함수는 해당되는 전체 문자 반환
console.log(str3.replaceAll("j", "")); //j제거

//특별한 문자 클래스 
//.(점) : 줄바꿈 문자(\n)를 제외하고 모든 문자, 특수문자도 가능

console.log("1245".match(/./)); //['1', index: 0, input: '1245', groups: undefined]

//.은 특수문자도 잡을 수 있고 모든 문자 그냥 줄바꿈 제외 다 잡는다
console.log("-1245".match(/./)); //['-', index: 0, input: '-1245', groups: undefined]
console.log("-1245".match(/\w/)); //['1', index: 1, input: '-1245', groups: undefined] 이건 안잡힘

//문자 클래스 여러 개 문자를 조건으로 검사 
//조건식 해석'\w 문자나 숫자 \d 숫자(0~9) \s 공백 포함 \w 마지막(문자나 숫자)인 애만 가져옴
//조건을 뒤에 계속 붙여넣기 가능
console.log("w2 z".match(/\w\d\s\w/)); 

//수량 {몇 개}
//숫자 갯수 3개까지
console.log("123456789".match(/\d{3}/g)); //['123', '456', '789']

//갯수 범위
//{최소 갯수, 최대 범위}
// console.log("1".match(/\d{2,3}/)); //null 
console.log("123".match(/\d{2,3}/)); //['123']

//{최소 갯수, }최소 갯수는 3개 이상이어야 하고 길이는 상관없이 
console.log("123456789".match(/\d{3,}/)); 

//세트 및 범위
//[]대괄호 안의 문자 또는 문자 클래스
//임의의 문자를 검색한다

//세트 사용
//문자를 찾는데 A나 Z가 앞에 있고 BC가 붙은 문자
//gi 붙여서 모두 검색하고 대소문자 구분없이
console.log("ABC ZBC XBC".match(/[az]bc/gi)); //['ABC', 'ZBC']

//범위 사용
//[0-9A-F]의 뜻은 0~9까지의 숫자 또는 문자 A~F까지를 찾는다는 뜻
//[0-9]이거는 \d와 같다 
//[a-zA-Z0-9_] 이거는 \w와 같다 
console.log("ABCDE".match(/A[0-9A-F][0-9A-F]/));

//범위 제외
//[^0-9]\D : 숫자를 제외한 모든 문자 제외
//[^\s]: 공백이 아닌 모든 문자 제외

//숫자와 문자를 제외해서 abc를 제외한 문자가 나온다
console.log('abc123.-'.match(/[^\sA-Z]/gi));

//과제 회원가입 페이지 만들기 이쁘게!
//1. bootstrap 이나 css 사용해서 이쁘게 만들고
//2. input에 회원가입 조건 추가해서 통과하면 수락되게(이름, 전화번호, 이메일)
//3. input에 쓴 값이 회원가입 조건에 충족하지 않으면
//4. 충족되지 않은 이유 표시


