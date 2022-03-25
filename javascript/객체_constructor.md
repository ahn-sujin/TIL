## constructor 란? 
- **constructor는 생성자**라고 부르며, **객체를 생성**하는 역할을 한다.
- 객체를 찍어내는 공장 역할을 한다.

<br>

## constructor의 필요성
```javascript

let ahnScore = {
    name: 'sujin',
    first : 89, 
    second: 76,
    third: 90,
    sum: function(){
        return this.first + this.second +  this.third; 
    }
}

let kimScore = {
    name: 'gildong',
    first : 70, 
    second: 43,
    third: 50,
    sum: function(){
        return this.first + this.second + this.third; 
    }
}

console.log('ahnScore.sum():', ahnScore.sum()); //ahnScore.sum(): 255
console.log('kimScore.sum():', kimScore.sum()); //kimScore.sum(): 163

```
- 객체를 만들때마다 객체를 일일이 다시 정의해줘야한다. 
- 객체 내부 내용이 바뀌면 같은 동작을 하는 모든 객체의 내용을 바꿔줘야한다. 

<br>


## constructor의 사용
```javascript
function Score() {
    this.name = 'sujin';
    this.first = 89;
    this.second = 76;
    this.third = 90;
    this.sum = function(){
        return this.first + this.second +  this.third; 
    }
}

console.log('Score() :', Score()); // undefined
console.log('new Score() :', new Score()); // 객체 생성

```
- 그냥 함수를 호출할 경우 **일반 함수** 취급 되어 ```undefined``` 가 나타나게 된다.
- 하지만 ```new```라는 키워드를 붙일 경우 객체를 생성하는 **생성자**가 되어 객체가 생성된다.
- **생성자**를 **constructor**라고 부른다.

<br>

```javascritpt
let ahn = new Score();
let kim = new Score();

console.log ('ahn.score() :', ahn.sum()); //ahn.Score() : 255
console.log ('kim.score() :', kim.sum()); //kim.Score() : 255

```
- 다른 객체임에도 생성자 함수에 값이 동일하기 때문에 같은 값을 같게 된다.
- 각각 객체가 다른 값을 갖게 하려면 아래와 같이 생성자 함수를 수정해야한다.

<br>

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

console.log ('ahn.score() :', ahn.sum()); //ahn.score() : 255
console.log ('kim.score() :', kim.sum()); //kim.score() : 163

```
- 생성자 함수에 매개변수 설정하고, 각각의 객체에 인자를 넣어준다.

<br>

## 생성자를 용했을 때 장점
- 객체를 생성할때 마다 객체를 일일이 다시 정의해주지 않아도, ```new``` 키워드를 통해 객체를 실행할 때마다 객체가 생성된다.
- 생성자 함수의 내용을 바꾸면 생성자 함수에 의해 만들어진 모든 객체의 내용이 한번에 바뀐다. 



