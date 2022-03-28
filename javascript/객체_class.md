## class 란?
- ```class```는 객체를 만드는 공장으로써, 자바스크립트 외에 다른 많은 언어들에서 쓰이고 있다.
- ```class```는 **constructor의 대체재**라고 할 수 있다. 
- ```class``` class는 ECMA script 6부터 도입된 문법임으로, 이전 버전에서는 동작하지 않는다는 단점이 있다.
- ```class```를 사용하게 되면 생성자의 기능은 그대로면서 코드의 양을 줄여주고, 직관적으로 코드를 볼수 있게 해준다.

<br>

## class를 이용한 객체 생성
```javascript
class Score {

}
let ahn = new Score();

console.log('ahn : ', ahn) // ahn : Score { }

```

<br>

## constructor 함수
-  ```class```에서 ```constructor``` 함수는 **객체의 초기 값을 지정하기 위해서 객체가 생성될 때 실행**되기로 약속 된 함수다.
-  ```constructor``` 함수는 약속된 이름으로 임의로 바꿀 수 없다.
-  이 함수를 통해 **객체의 초기 값을 설정**할 수 있다.
-  자바스크립트는 **객체를 생성할때 자동으로  constructor 함수를 호출**한다.


```javascript
class Score {
  constructor(){
    console.log('constructor');
  }
}

let ahn = new Score();
console.log('ahn : ', ahn);

//결과
// constructor
// ahn : Score{}

```
<br>

> 객체의 초기값 설정
```javascript
class Score{
  constructor(name,first,second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log('constructor');
  }
}

let ahn = new Score('sujin',90, 100);
console.log('ahn : ', ahn);

//결과
// constructor
// ahn: Score{name:'sujin', first:90, second:100}

```

<br> 

## 메소드 구현
> prototype 이용
```javascript
class Score{
  constructor(name,first,second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log('constructor');
  }
}

Score.prototype.sum = function() {
  return 'prototype:' + (this.first + this.second);
}

let ahn = new Score('sujin',90, 100);
console.log('ahn : ', ahn);
console.log('ahn : ', ahn.sum());

//결과
// ahn: Score{name:'sujin', first:90, second:100}
// ahn :  prototype:190

```

<br>

> class 내부 정의하기
```javascript
class Score{
  constructor(name,first,second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum(){
     return 'prototype:' + (this.first + this.second);
  }
}

let ahn = new Score('sujin',90,100);
console.log('ahn : ',ahn);
console.log("ahn.sum()",ahn.sum());

let kim = new Score('gildong',60,50);
console.log('kim : ',kim);
console.log("kim.sum()",kim.sum());

// 결과
// ahn : Score{name:'sujin', first:90, second:100}
// ahn : prototype:190
// kim : Score{name:'gildong', first:60, second:50}
// kim : prototype:110

```
- 메소드 ```sum```은 같은 class에 속해있는 모든 객체들이 공유하는 메소드임을 알 수 있다.

<br>

> 특정 객체의 메소드 만 수정할 때
```javascript
let ahn = new Score('sujin',90,100);
ahn.sum = function(){
  return 'this:' + (this.first + this.second);
}

```
- 어떤 객체(```ahn``` 객체)의 특성(```sum``` 메소드)을 호출하면, 자바스크립트는 그 객체가 해당 특성을 가지고 있는지 확인하고, 있다면 그 객체에서 특성을 호출한다.
- 만약 없다면, 그 객체가 속해있는 class(```Score```)에서 해당 특성을 가져와 호출한다.










