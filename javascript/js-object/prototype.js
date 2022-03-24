function Score(name, first, second, third) {
    this.name = name;
    this.first = first; 
    this.second = second;
    this.third = third;
    // this.sum = function(){
    //     return this.first + this.second +  this.third; 
    // }
}

Score.prototype.sum = function(){
    return 'prototype :' + (this.first + this.second +  this.third);  
}

let ahn = new Score('ahn', 89, 76, 90);
// 특정 객체에서만 sum함수를 다르게 동작시킬 때 
ahn.sum = function(){
    return 'this :' + (this.first + this.second +  this.third);  
}
let kim = new Score('kim', 70, 43, 50);

console.log ('ahn.score()', ahn.sum());
console.log ('kim.score()', kim.sum());



