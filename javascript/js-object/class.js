class Score {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return '공통 class 메소드:' + (this.first + this.second);
    }
}

// prototype 이용하기
// Score.prototype.sum = function () {
//     return 'prototype:' + (this.first + this.second);
// }

let ahn = new Score('sujin', 90, 100);
ahn.sum = function(){
    return '특정 객체 메소드:' + (this.first + this.second);
}
console.log('ahn : ', ahn);
console.log("ahn.sum()", ahn.sum());

let kim = new Score('gildong', 60, 50);
console.log('kim : ', kim);
console.log("kim.sum()", kim.sum());



