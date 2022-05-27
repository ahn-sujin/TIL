# Getter 와 Setter
- ```getter```와 ```setter```를 통해 특정 값을 바꾸려고하거나 조회하려고 할 때 원하는 코드를 실행 할 수 있다. 
- 함수의 값을 **획득(get)** 하고 **설정(set)** 하는 역할을 담당한다.

<br>

```javascript
let obj = {
  get propName() {
    // getter : obj.propName을 실행할 때 실행되는 코드
  },
   
  set propName(value) {
    // setter : obj.propName = value를 실행할 때 실행되는 코드
  }
}

```
- getter 메서드는 ```obj.propName```을 사용해 **프로퍼티를 읽으려고** 할 때 실행
- setter 메서드는 ```obj.potpName = value```으로 **프로퍼티에 값을 할당**하려 할 때 실행

<br>

## 1. getter(획득자)
- **반환값(return)** 이 반드시 있어야 한다.
- 특정 값을 **조회** 하려고 할 때```(함수 호출X)```, 특정 코드를 실행시켜 값을 받는다.

```javascript
const numbers = {
  a:1, 
  b:2,
  get sum(){
    console.log('sum 함수가 실행됩니다.');
    return this.a + this.b;
  }
}

console.log(numbers.sum); // sum 함수가 실행됩니다. 3
numbers.b = 5;
console.log(number.sum) // sum 함수가 실행됩니다. 6

```

<br>

## 2. setter(설정자)
- set함수의 **파라미터 값**을 반드시 설정해 줘야한다.
- 특정 값을 설정하거나 바꿀 때 만, 함수를 호출

```javascript
const dog = {
  _name = '멍멍이',
  set name(value){
    console.log('이름이 바뀝니다.' + value);
    this._name = value;
  }
};

console.log(dog._name); // 멍멍이
dog.name = '뭉뭉이';
console.log(dog._name); // 이름이 바뀝니다.뭉뭉이 뭉뭉이

```

## 3. getter + setter

```javascript
const numbers =  {
  _a : 1,
  _b: 2,
  sum : 3,
  calculate(){
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a(){
    return this._a;
  },
  get b(){
    return this._b;
  },
  set a(value){
    this._a = value;
    this.calculate();
  },
  set b (value){
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum); //3
numbers.a = 5; // calculate
numbers.b = 7; // calculate
console.log(numbers.sum); //12
console.log(numbers.sum); //12
console.log(numbers.sum); //12
console.log(numbers.sum); //12


```












