// 배열
let userInfoArray = ['asj',26,'developer']
console.log('userInfoArray[2] :', userInfoArray[2]); 

//객체 생성
let userInfoObject = {
    name: 'asj',
    age: 26,
    job : 'developer'
}
// 객체 읽기
console.log("userInfoObject.name :", userInfoObject.name);
console.log("userInfoObject['name'] :", userInfoObject['name']);

// 객체 수정
userInfoObject.age = 27;
console.log("userInfoObject.age :", userInfoObject.age);

// 객체 삭제
delete userInfoObject.age
console.log("after delete userInfoObject.age", userInfoObject.age);