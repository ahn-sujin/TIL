## 배열이란?
- 배열은 여러개의 순서가 있는 항목들의 리스트
- 배열 안에는 어떤 값이던지 넣을 수 있다.(문자, 숫자, 객체 등...)

```javascript
const array = [1, 'home' ,{name:'asj', age:26}]


```

<br>

- 배열을 선언하고 나서 n번째 항목을 조회하고 싶을 땐 다음과 같이 할 수 있다.
- **주의할 점:** 첫번째 항목은 ```1```이 아닌 ```0```부터 시작이다.

```javascript
const array = [1, 'home' ,{name:'asj', age:26}]

console.log(array[0]) //1
console.log(array[1]) //'home'
console.log(array[2]) // {name:'asj', age:26}

```

<br>

## 배열에 새 항목 추가하기
- 새 항목을 추가 할 때, 내장 함수인 ```push```를 사용한다.

```javascript
const dogInfo = [{name:'potato',age:3},{name:'tomato',age:1}]

dogInfo.push({name:'bibi',age:5});

console.log(dogInfo); // [{name:'potato',age:3},{name:'tomato',age:1},{name:'bibi',age:5}]

```

<br>


## 배열의 크기 알아내기
- 배열의 크기를 알아낼 때에는 배열의 ```length``` 값을 확인한다.

```javascript
const dogInfo = [{name:'potato',age:3},{name:'tomato',age:1}]

console.log(dogInfo.length); //2

dogInfo.push({name:'bibi',age:5});

console.log(dogInfo.length); //3

```

<br>

  [배열 내장함수 자세히 보기🔎](내장함수.md)

