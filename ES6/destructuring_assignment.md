## 비구조화 할당 (Destructuring Assignment)
``` 
📌 비구조화 할당이란, 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식이다.
```

<br>

### 1. 배열
> ES6 전 코드
```javascript
const animals = ['CAT', 'DOG', 'TIGER']
const cat = animals[0];
const dog = animals[1];
const tiger = animals[2];

console.log(cat); //CAT 
console.log(dog); //DOG 
console.log(tiger); //TIGER

```
- 이 배열의 값을 각각 변수에 할당 하려면 하나씩 지정해줘야하기 때문에 번거롭고, 코드도 복잡해보이는 단점이 있다.

<br> 

> 비구조화 할당 적용 
```javascript
const [cat, dog, tiger] = ['CAT', 'DOG', 'TIGER']

console.log(cat); //CAT 
console.log(dog); //DOG 
console.log(tiger); //TIGER

```
- **좌항**이 **호출된 변수명** 집합, **우항**이 **할당할 값**이다. 
- 좌항의 각 요소에는 같은 index를 가지는 배열값이 할당된다.


<br>

### 2. 객체
> ES6 전 코드
```javascript
const animals = {
  cat: 'CAT',
  dog: 'DOG',
  tiger: 'TIGER'
};

const cat = animals.cat;
const dog = animals.dog;
const tiger = animals.tiger;

console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

```
- 객체도 배열과 마찬가지로 일일히 값을 따로 넣어주려면 번거롭다.

<br>

> 비구조화 할당 적용 
```javascript
const { cat, dog, tiger } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
};
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

```
- **좌항**에는 **key값**이 담긴다. 












