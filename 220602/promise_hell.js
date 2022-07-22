function add(num){
    return new Promise((resolve, reject) => {
        let _num = num + num;
        console.log(_num);
        resolve(_num);
    })
}

add(3)
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    return add(res);
})
.then((res) => {
    console.log("지옥 탈출");
});

function eat() {
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("6초 뒤 작업완료");
        }, 6000);
    })
}

(async function() {
    var res = await eat();
    console.log(res);
})();