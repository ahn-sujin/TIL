## 반복문 이란?
- 특정 작업을 반복적으로 할 때 사용할 수 있는 구문이다.

<br>

## for문
- 가장 기본적인 반복문으로, 특정 값에 **변화를 주며 조건에 만족된다면 계속 반복**한다.

<br>

> for문 기본 구조

```javascript
for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}

```

> 예시
```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//결과
// 10 9 8 7 6 5 4 3 2 1
```

### ➕ 배열과 for
- for문을 이용해 배열 안에 있는 원소들을 하나하나 나열 할 수 있다.

```javascript
const names = ['멍멍이', '야옹이', '멍뭉이'];

for(let i = 0; i < names.length; i++){
  console.log(names[i]);
}

//결과
// 멍멍이
// 야옹이
// 멍뭉이

```


<br>

## while문
- 특정 조건이 참이라면 계속해서 반복한다.
- ```for문```은 특정 숫자를 가지고 숫자의 값을 비교하고, 증감해주면서 반복한다면, 
  
  ```while문```은 **조건을 확인만 하면서 반복한다. 따라서 조건문 내부에서 변화를 직접 주어야한다.**

<br>

```javascript
while (???) {
  document.write('1');
  document.write('2');
}
document.write('3');
```
- 이때 ```(???)```에는 불리언 데이터 타입이 들어간다.
- **true**라면 중괄호 안의 코드가 실행된다.
- 코드를 다 실행하고 나면 다시 처음으로 돌아가 ```(???)```에 들어간 불리언 값을 살핀다.
- 불리언 값이 **false**가 될때까지 반복한다.
- 반복문과 조건문은 **순서대로 실행되는 프로그램의 흐름을 제어하는 제어문**이다.

<br>

```javascript
let i = 0;
while(i < 3){
  i = i + 2;
}
document.write(i);

//결과
4 

```
- ```while문```을 사용 할 때에는 조건문이 언젠간 ```false``` 해야한다. **```false```로 전환이 되지 않는다면 반복문이 끝나지 않고 계속 실행된다.**

<br>

## for ... of
- ```for...of 문```은 배열에 관한 반복문을 돌리기 위해서 만들어졌다.
- 하지만 배열에서는 보통 내장함수를 많이 사용하기 때문에 거의 사용하지 않는다.

```javascript
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

// 결과
// 10  20 30 40 50

```

<br>

## for ... in
- ```for ... in 문```은 객체에 관란 반복문을 돌리기 위해서 만들어졌다.

```javascript

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

//결과 
// name : 멍멍이
// sound : 멍멍
// age :  2

```

### ➕ 객체의 정보를 배열 형태로 받아올 수 있는 함수
```javascript
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

console.log(Object.entries(doggy));
// [['name','멍멍이'],['sound','멍멍'],['age': 2]]

console.log(Object.keys(doggy));
// [name, sound, 2]

console.log(Object.values(doggy));
// ['멍멍이', '멍멍', age]

```
- ```Object.entries``` : ```[[키, 값], [키, 값]]``` 형태의 배열로 변환
- ```Object.keys``` : ```[키, 키, 키]``` 형태의 배열로 변환
- ```Object.values``` : ```[값, 값, 값]``` 형태의 배열로 변환
 


















