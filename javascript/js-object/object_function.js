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

console.log('sum.call(ahn)',sum.call(ahn, '이건'));
console.log('sum.call(kim)',sum.call(kim, '뭘까'));

