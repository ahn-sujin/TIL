// ============ 생성자 함수 사용 전 ================ //
let ahnScore = {
    name: 'sujin',
    first : 89, 
    second: 76,
    third: 90,
    sum: function(){
        return this.first + this.second +  this.third; 
    }
}

let kimScore = {
    name: 'gildong',
    first : 70, 
    second: 43,
    third: 50,
    sum: function(){
        return this.first + this.second + this.third; 
    }
}

//--> 이렇게 객체를 만들때 마다 객체를 하나하나 다시 정의 해줘야 함

console.group('constructor unused');
console.log('ahnScore.sum():', ahnScore.sum());
console.log('kimScore.sum():', kimScore.sum());
console.groupEnd('constructor unused');

// ============ 생성자 함수 사용 후 ================ //
function Score(name, first, second, third) {
    this.name = name;
    this.first = first; 
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second +  this.third; 
    }
}

// console.log('Score() :', Score()); // 일반 함수 호출 할 경우 일반 함수 취급된다.
// console.log('new Score() :', new Score()); // new(생성자, constructor)를 붙일 경우 객체를 생성하는 생성자 함수가 된다.

let ahn = new Score('ahn', 89, 76, 90);
let kim = new Score('kim', 70, 43, 50);

console.group('constructor use');
console.log ('ahn.score() :', ahn.sum());
console.log ('kim.score() :', kim.sum());
console.groupEnd('constructor use');


