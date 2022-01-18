##  화살표 함수(Arrow Function)
- ES6에서 새로 추가된 화살표 함수(arrow function) 대신 화살표 ```=>``` 를 사용하여 간략한 방법으로 함수를 선언할 수 있다.

<br>

> 기존 함수 
```javascript
// 함수 표현식
var func = function(){
  ...
}

```

```javascript
// 함수 선언식
function func(){
  ...
}

```
<br>

> 화살표 함수
```javascript
const func = () => {
  ...
}

```

<br>

## 화살표 함수의 기본 문법
- 화살표 함수는 function 키워드 대신 화살표 ```=>```를 사용하여 보다 간략한 방법으로 선언할 수 있다. 

```javascript
// 매개 변수가 없을 경우
const func = () => {
  ...
}

// 매개 변수가 한 개의 경우, 소괄호를 생략할 수 있다.
const func = x => {
  ...
}

// 간단하게 한 줄로 표현할 때, 중괄호를 생략할 수 있으며 암묵적으로 값이 반환된다.
const func =  (x, y) => { x + y };
const func =  (x, y) => { return x + y };

// 객체를 반환시 중괄호를 생략하면 소괄호를 사용한다. 
const func =  (x) => { return { a: x } };
const func =  (x) => ({ a: x });

```

<br> 

## 화살표 함수의 호출
- 화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 함수를 호출하기 위해서는 함수 표현식을 사용한다. 

> 함수 표현식
```javascript
//ES5
var func = function(x,y) {
  return x + y;
}
console.log(func(5,10)) //15

```

```javascript
//ES6
const func = (x,y) => {
  return x + y;
}
console.log(func(5,10)) //15

```

<br>

> 콜백 함수
```javascript
//ES5
var arr = [1,2,3];
var result = arr.map(function(x){
  return x + x;
});
console.log(result);

```

```javascript
//ES6
const arr = [1,2,3];
const result = arr.map(x => x + x);
console.log(result);

```

<br> 

## this



<br>

## 화살표 함수를 사용해서는 안되는 경우






