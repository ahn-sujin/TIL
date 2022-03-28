let ahn = {
    name:'ahn',
    first: 10,
    second: 30
}

let kim = {
    name:'kim',
    first: 5,
    second: 25
}

function sum(prefix){
    return (this.first + this.second) + prefix;
}

console.log('sum.call(ahn)',sum.call(ahn, ' -> 이건 ahn객체를 인자로 갖는 call 메소드'));
console.log('sum.call(kim)',sum.call(kim, ' -> 이건 kim객체를 인자로 갖는 call 메소드'));

let kimSum = sum.bind(kim, ' => 이건 kim객체를 고정된 인자 값으로 갖는 bind 메소드');
console.log('kimSum()', kimSum());