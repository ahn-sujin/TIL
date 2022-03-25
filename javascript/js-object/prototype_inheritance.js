let superObj = {superVal: 'super'}
// let subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;

let subObj = Object.create(superObj)
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal)
console.log('subObj.superVal =>', subObj.superVal)

superObj.superVal = 'new super'
console.log('superObj.superVal =>', superObj.superVal)
// console.log('subObj.superVal =>', subObj.superVal)


let ahn = {
    name : 'sujin',
    first: 10,
    second: 10,
    sum: function(){
        return this.first + this.second
    }
}

// let kim = {
//     name : 'aebong',
//     first: 20,
//     second: 20,
//     avg: function(){
//         return (this.first + this.second)/2;
//     }
// }

// kim.__proto__ = ahn;

let kim = Object.create(ahn);
kim.name = 'aebong';
kim.first = 20;
kim.second = 20;
kim.avg = function(){
    return (this.first + this.second)/2;
}

console.log('ahn.sum() : ', ahn.sum());
console.log('kim.sum() : ', kim.sum());
console.log('kim.avg() : ', kim.avg());