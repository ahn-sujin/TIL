## 배열안의 객체 값 가져오기

json형식으로 데이터를 불러오고나, 직접 배열안에 객체 구조를 만들어 데이터화 했을 때, 객체 안에 특정 값을 가져오려면 어떻게 해야할까?

<br>

```javascript

const userInfo = [
  {'name':'gildong', 'gender':'man', 'age':20},
  {'name':'gilsoon', 'gender':'woman', 'age':24},
  {'name':'minjoo', 'gender':'woman', 'age':30},
  {'name':'dongjoo', 'gender':'man', 'age':28},
  {'name':'hoon', 'gender':'man', 'age':34}
]

```
- 위 와 같이 배열안에 객체를 담고 있는 변수가 있을 때, ```man```에 해당하는 ```name```의 값을 가져오고 싶다면 아래와 같이 할 수 있다.

<br>

```javascript
const Men = userInfo.filter((user) => user.gender === 'man');

console.log(Men)
//[{'name':'gildong', 'gender':'man', 'age':20},{'name':'dongjoo', 'gender':'man', 'age':28},{'name':'hoon', 'gender':'man', 'age':34}]
console.log(Men[0].name);
//'gildong'
console.log(Men[1].name);
//'dongjoo'
console.log(Men[2].name);
//'hoon'

```
- 위와 같이 **```filter```함수**를 이용하여 ```man```을 갖고 있는 객체들만으로 구성된 배열을 통해 ```man```에 해당하는 ```name```값을 가져올 수 있다.
- 하지만, 배열의 특성상 순서를 입력해줘야만 원하는 값을 얻을 수 있다.
- **```map```함수**를 통해 이를 해결할 수 있다.

<br>

```javascript
const Men = userInfo.filter((user) => user.gender === 'man').map((user) => user.name);

console.log(Men);
// ['gildong', 'dongjoo', 'hoon']

```
- **```map```함수**를 사용하면 원하는 값을 가져올 수 있다. 

<br>

## filter함수 VS map함수
- **공통점**
  - 기존 배열은 건드리지 않으면서 요소들을 순회한 후 새로운 배열을 리턴한다.
   
- **차이점**
   - filter는 조건문을 만족한 요소들을 반환한다.
   - map은 콜백함수가 적용된 새요소들을 반환한다.
   
<br>

## filter함수

배열을 순회하며 요소마다 조건을 확인 후 조건을 만족하는 원소들로 구성된 새로운 배열을 리턴한다.

<br>

```javascript
let newArray = arr.filter(callback(currentValue[, index, [array]]) {
  // return element for newArray, if true
}[, thisArg]);

```
- ```callback``` : 각 요소를 시험할 함수. **true를 반환하면 요소를 유지하고, false를 반환하면 버림**. 다음 세 가지 인수를 가짐
- ```currentValue``` : 처리할 현재 요소
- ```index(Optional)``` : 처리할 현재 요소의 인덱스
- ```array(Optional)``` : filter()를 호출한 배열
- ```thisArg(Optional)``` : callback을 실행할 때 this로 사용할 겂

<br>

> 예시

```javascript

const numbers = [1,4,9];
let parameters = numbers.filter((num, index, arr) => {
  console.log(num, index, arr)
});

//결과
// 1 0 [ 1, 4, 9 ]
// 4 1 [ 1, 4, 9 ]
// 9 2 [ 1, 4, 9 ]

```

> 응용
> 
```javascript
const users = [
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
  { id: 95, name: 'Ten', age: 20, group: 'admin' },
  { id: 45, name: 'Min', age: 48, group: 'editor' },
  { id: 75, name: 'Soo', age: 26, group: 'editor' }
]
let res = users.filter((it) => it.group.includes('editor'));

console.log(res);

//결과
//[{ id: 85, name: 'William', age: 34, group: 'editor'},{ id: 45, name: 'Min', age: 48, group: 'editor'},{ id: 75, name: 'Soo', age: 26, group: 'editor' }]
```

<br>

## map함수

배열을 순회하며 요소마다 callback함수 적용 후 새로운 배열로 리턴한다.

<br>

```javascript
let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}

```
- ```callback``` : **새로운 배열 요소를 생성** 하는 함수. 다음 세가지 인수를 가짐
- ```currentValue``` : 처리할 현재 요소
- ```index(Optional)``` : 처리할 현재 요소의 인덱스
- ```array(Optional)``` : map()를 호출한 배열
- ```thisArg(Optional)``` : callback을 실행할 때 this로 사용할 값

<br>

> 예시
```javascript
let numbers = [1, 4, 9]

// 화살표 함수
let roots = numbers.map((num) => Math.sqrt(num))

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

```

<br>

> 응용
```javascript
const users = [
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
  { id: 95, name: 'Ten', age: 20, group: 'admin' },
  { id: 45, name: 'Min', age: 48, group: 'editor' },
  { id: 75, name: 'Soo', age: 26, group: 'editor' }
]
let res = users.filter((it) => it.group.includes('editor'));
let resName = res.map((user) => user.name);

console.log(resName);
// ['William', 'Min', 'Soo']

```



