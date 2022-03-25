class Score {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class ScoreAvg extends Score{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third)/3;
    }
}

let ahn = new ScoreAvg('sujin', 90, 100, 80);

console.log("ahn.sum()", ahn.sum());
console.log("ahn.avg()", ahn.avg());



