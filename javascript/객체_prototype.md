## Proptotype 이란?
- ```prototype```은 번역하면 **원형** 이라는 뜻으로 볼 수 있다.
- ```prototype```은 생성자 함수안에서 사용되는 **메소드**를 정의 해줄 때 사용한다.

<br>

## prototype이 필요한 이유
```javascript
function Score(name, first, second, third) {
    this.name = name;
    this.first = first; 
    this.second = second;
    this.third = third;
    this.sum = function(){
         return this.first + this.second +  this.third; 
    }
}

let ahn = new Score('ahn', 89, 76, 90);
let kim = new Score('kim', 70, 43, 50);

```
- 생성자 함수에서 새로운 객체가 생성될 때 마다, ```sum```이라는 내부 메소드가 실행된다.
- 이는 메모리 낭비와 성능 저하의 현상이 발생될 수 있다. 
- 따라서, **생성자 함수의 메소드를 프로토타입에 정의**하여 **객체들이 메소드를 공통으로 사용**하게 한다. 

<br>

## prototype의 사용
```javascript
function Score(name, first, second, third) {
    this.name = name;
    this.first = first; 
    this.second = second;
    this.third = third;
}

Score.prototype.sum = function(){
    return this.first+this.second+this.third;  
}

let ahn = new Score('ahn', 89, 76, 90);
let kim = new Score('kim', 70, 43, 50);

console.log ('ahn.score()', ahn.sum());
console.log ('kim.score()', kim.sum());


```
- 생성자 함수 안에 메소드를 정의하는 코드가 들어있지 않기 때문에, **객체가 생성될 때마다 호출되지 않고 한번만 생성하게 된다.**
- 여러개의 객체가 하나의 함수를 공유함으로써 성능을 높이고 메모리를 절약할 수 있다.

<br>

```javascript
Score.prototype.sum = function(){
    return 'prototype :' + (this.first + this.second +  this.third);  
}

let ahn = new Score('ahn', 89, 76, 90);
ahn.sum = function(){
    return 'this :' + (this.first + this.second +  this.third);  
}
let kim = new Score('kim', 70, 43, 50);

console.log ('ahn.score()', ahn.sum()); //ahn.score() this :255
console.log ('kim.score()', kim.sum()); //kim.score() prototype :163

```
- 특정 객체에서만 메소드를 다르게 동작시키고 싶다면, 원하는 객체에 sum 메소드를 추가하여 원하는대로 동작시키면 된다. 

<br>

- 자바스크립트 객체에서 메소드 또는 속성 출력할 때 우선 순위
   - 1️⃣ **해당 객체가 갖고있는** 메소드 또는 속성
   - 2️⃣ **객체의 생성자의 prototype에 정의되어있는** 메소드 또는 속성


