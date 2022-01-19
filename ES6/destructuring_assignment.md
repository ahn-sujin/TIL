## 비구조화(구조분해) 할당 (Destructuring Assignment)
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

<br>

> 원래 key 대신 다른 변수명 사용
```javascript
const { cat: catName, dog: dogName, tiger: tigerName } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
}

console.log(catName); // CAT
console.log(dogName); // DOG

```
- 좌항의 변수에 다른 이름으로 사용할 변수명을 대입할 수 있다.

<br>

### 3. 기본값 할당
#### 3-1. 배열
```javascript
const [cat, dog, tiger] = ["CAT", "DOG"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // undefined

```
- 비구조화의 범위를 벗어나는 값 할당을 시도하면 ```undefined```를 반환한다.
- 이럴 경우 아래와 같이 호출될 변수명에 기본값을 할당 할 수 있다.

```javascript
const [cat, dog, tiger = "TIGER"] = ["CAT", "DOG"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

```

<br> 

#### 3-2. 객체
```javascript
const { cat, dog, tiger = "TIGER" } = {
  cat: "CAT",
  dog: "DOG"
};
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

```

```javascript
const { monkey: monkey_name = 'MONKEY' } = {};
console.log(monkey_name); // MONKEY

```

- 배열과 마찬가지로 객체도 기본값을 설정할 수 있다. 
- 객체의 key에 새로운 변수명을 할당하는 방식에도 기본값을 할당하여 사용할 수 있다. 

<br>

### 4. 함수에서의 비구조화 할당
- 함수의 파라미터 부분에서도 비구조화 할당을 사용할 수 있다. 
- 이러한 문법은 특히 API응답값을 처리하는데 유용하게 사용된다.

<br>

```javascript
function renderUser({name, age, addr}){
  console.log(name);
  console.log(age);
  console.log(addr);
}
const users = [
  {name: 'kim', age: 10, addr:'kor'},
  {name: 'joe', age: 20, addr:'usa'},
  {name: 'miko', age: 30, addr:'jp'}
];

users.map((user) => {
  renderUser(user);
});
// kim
// 10
// kor
// joe
// 20
// usa
// miko
// 30
// jp

```
- ```user```배열의  ```map```메소드로 인하여 ```renderUser```함수에 ```users```의 객체가 각각 전달된다.
- 각 객체의 key값이  ```renderUser```함수의 파라미터 받는 부분에서 비구조화 할당을 받았기 때문에 함수 내에서 key값을 각각 가져올 수 있게 된다.

<br>

### 5. 중첩된 객체 및 배열의 비구조화
```javascript
const kim = {
  name: 'kim',
  age: 10,
  addr: 'kor',
  friends: [
    {name: 'joe', age: 20, addr:'usa'},
    {name: 'miko', age: 30, addr:'jp'}
  ]
};

let { name: userName, friends: [ { name: koFriend }, { name: jpFriend }] } = kim;
console.log(userName); // kim
console.log(jpFriend); // miko

```


