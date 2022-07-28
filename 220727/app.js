// 사용할 모듈
// socket.io, express, fs, nodemon 

// 설치 명령어
// ----------------
// npm i 모듈명
// ----------------

// ~영화관 좌석 예약 만들기~

const express = require('express');
const socketio = require('socket.io');
const fs = require('fs');

let seats = [
    // 1이 좌석, 0은 빈공간, 2는 선택된 좌석
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
];

// 웹서버 생성
const app = express();
const PORT = 3000;
const server = app.listen(PORT, ()=>{
    console.log(PORT, "번 포트 실행");
});

// socketio 생성 및 실행
const io = socketio(server);

app.get("/", (req, res) =>{
    fs.readFile("page.html", (err, data)=>{
    res.send(data.toString());        
    });
});

app.get('/seats', (req, res) => {
    res.send(seats);
});

io.sockets.on('connection', (socket)=>{
    socket.on('reserve', (data)=>{
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});