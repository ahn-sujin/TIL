//===================
// 생성자를 통한 상속  
//===================

function Score(name,first,second){
    this.name = name,
    this.first = first,
    this.second = second
}
Score.prototype.sum = function(){
    return this.first + this.second;
}

function ScorePlus(name,first,second,third){
    Score.call(this,name,first,second)
    this.third = third
}

// * 부모와 연결하기
// ScorePlus.prototype.__proto__ = Score.prototype; //비표준
ScorePlus.prototype = Object.create(Score.prototype);
ScorePlus.prototype.constructor =  ScorePlus;

ScorePlus.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}

let ahn = new ScorePlus ('ahn', 10, 20, 30);
console.log(ahn.sum());
console.log(ahn.avg());
console.log(ahn.constructor);