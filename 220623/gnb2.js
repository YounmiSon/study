//표 하나 만들어보기 
//프로토타입 객체로 ul li태그를 만들어보기 
//자신의 li갯수 반환해주는 함수 작성해보기let 

let Gnb = (
    function(){
        function Gnb(a){
            this.init(a);
        }

        Gnb.prototype.init = function(a) {
            if(a === "" || a === null){
                return;
            }

            let parent = document.createElement('ul');
            parent.setAttribute("id", "parentUl")
            a.appendChild(parent);
            parentUl.innerText = "<ul>";
        };

        Gnb.prototype.addCount = function(b){
            let count = 0;
            for(let i = 0; i < b; i++){
                let child = document.createElement('li');
                parentUl.appendChild(child);
                child.innerText = `${count}번째 li`;
                count++;
            }

            let countNum = document.createElement('li')
            parentUl.appendChild(countNum);
            countNum.innerText = `li 갯수: ${count}`;
        }
        return Gnb;
    })();