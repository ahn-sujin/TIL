// * 평균을 구하는 avg메소드 추가하기

class Score {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
    // 1. 직접 클래스 수정
    // avg() {
    //     return (this.first + this.second)/2;
    // }
}

// 2. 새로운 클래스 생성
// class ScoreAvg {
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
//     sum() {
//         return this.first + this.second;
//     }
//     avg() {
//         return (this.first + this.second)/2;
//     }
// }

// 3. 상속
class ScoreAvg extends Score{
    avg() {
        return (this.first + this.second)/2;
    }
}

let ahn = new ScoreAvg('sujin', 90, 100);
let kim = new ScoreAvg('gildong', 60, 50);


console.group('sum')
console.log("ahn.sum()", ahn.sum());
console.log("kim.sum()", kim.sum());
console.groupEnd('score sum')

console.group('avg')
console.log("ahn.avg()", ahn.avg());
console.log("kim.avg()", kim.avg());
console.groupEnd('score sum')


