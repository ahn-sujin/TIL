// 배열
let userInfoArray = ['asj',26,'developer']
console.group('array group');
// *while문
// let i = 0;
// while(i < userInfoArray.length){
//     console.log(i, userInfoArray[i]);
//     i = i + 1;
// }
// *for문
for(let i = 0; i < userInfoArray.length; i++){
    console.log(i, userInfoArray[i]);
}
console.groupEnd('array group');


//객체
let userInfoObject = {
    name: 'asj',
    age: 26,
    job : 'developer'
}
// *for in문
console.group('object group');
for( let key in userInfoObject){ //(let 현재 원소의 이름이 들어갈 변수 in 객체)
    console.log(key); // 객체 요소 이름 출력
    console.log(key, userInfoObject[key]); // 객체 요소 이름의 값 출력
}
console.groupEnd('object group');
