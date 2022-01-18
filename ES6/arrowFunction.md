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

### function 키워드 함수의 this
- function 키워드로 생성된 함수는 함수가 어떻게 호출되었는지에 따라 **```this```가 바인딩할 객체가 동적으로 결정**된다. 

<br>

> **일반 함수의 this**

```javascript
function func() {
    console.log(this); // window
}
func();

```
일반 함수 (전역 스코프에 있는 함수)를 호출하게 되면 ```this```는 전역 객체인 ```window```를 바인딩한다.

<br> 

> **생성자 함수의 this**

```javascript
function Func() {
    console.log(this); // Func {}
}
var obj = new Func();

```
```new 키워드```를 사용하여 **생성자함수** 호출 방식으로 obj 객체를 생성하면 함수 안에서의 **this는 생성자 함수를 바인딩** 한다.

<br>

> **메소드의 this**

```javascript
var obj = {
    myName: '나나',
    getName: function() {
        console.log(this); // {myName: "나나", getName: ƒ}
        console.log(this.myName); // 나나
    }
}
obj.getName();

```
function 키워드로 만들어진 **메소드의 this**는 **자신을 포함하는 객체를 바인딩** 한다.

<br>

### 화살표 함수의 this
- **화살표 함수**는 함수를 선언할 때 **```this```에 바인딩할 객체가 정적으로 결정**된다.
- **화살표 함수**는 자신의 ```this```를 바인딩하지 않고 언제나 **상위 스코프인 ```this```를 바인딩**한다. 
- 이를 **Lexical this** 라고 한다. 

<br>

> **일반 함수의 this**

```javascript
const func = () => {
    console.log(this); // window
}
func();

```
일반 함수의 경우 function 키워드와 마찬가지로 전역 객체인 ```window```를 바인딩한다.

<br> 

> **생성자 함수의 this**

```javascript
const Func = () => {
    console.log(this);
}
const obj = new Func(); // Uncaught TypeError: Func is not a constructor

```
**화살표 함수는 생성자 함수로 사용할 수 없다.**

<br>

```javascript
function Func() {}
console.log(Func.prototype); // {constructor: ƒ}

```
기존의 function 키워드로 만든 일반적인 생성자 함수는 ```prototype``` 프로퍼티를 가지며, ```prototype``` 프로퍼티가 가르키는 프로토 타입 객체의 ```constructor```를 사용한다.

<br>

```javascript
const Func = () => {}
console.log(Func.prototype) //undefined

```
하지만 **화살표 함수는 ```prototype``` 프로퍼티를 가지고 있지 않다.**

<br>

> **메소드의 this**

```javascript
var obj = {
    myName: '나나',
    getName: () => {
        console.log(this); // window
        console.log(this.myName); // undefined
    }
}
obj.getName();

```
화살표 함수로 만들어진 메소드의 ```this```는 자신을 포함하는 객체를 바인딩하지 않고 ```window```를 바인딩하기 때문에 **화살표 함수는 메소드에 적합하지 않다.**


