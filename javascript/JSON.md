# 💡 JSON.parse / JSON.stringify

<br>

### ✅ JSON (JavaScript Object Notation)
    * 데이터를 전달할 때 JS가 그걸 다룰 수 있도록 object로 바꿔주는 기능을 한다.
    * JSON 형식은 자바스크립트 객체와 마찬가지로 key / value가 존재할 수 있으며 key값이나 문자열은 항상 쌍따옴표를 이용하여 표기해야한다.
    
### ✅ JSON.parse
    문자열로 된 JSON을 객체로 변환한다. (문자열 -> 객체)

### ✅ JSON.stringify
    객체를 JSON 형태의 문자열로 변환한다. (객체 -> 문자열)
    
### 예시
```javascript
const str = '{"name": "student", "age": "25", "address":"서울"}'
const strToObj = JSON.parse(str);

const obj = {name : "student", age : "25", address : "서울"}
const objToStr = JSON.stringify(obj);

console.log(strToObj);
console.log(objToStr);
```

### 결과
```javascript
// console.log(strToObj)
{name: 'student', age: '25', address: '서울'}  
// console.log(objToStr)
{"name":"student","age":"25","address":"서울"} 
```
