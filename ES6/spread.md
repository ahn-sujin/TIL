## 1. spread(...)
- **스프레드 연산자(...)** 를 사용하면 배열, 문자열, 객체 등 반복 가능한 객체를 개별 요소로 분리할 수 있다. 

### 1-1. 배열
```javascript
const animals = ['개', '고양이', '호랑이'];
const anotherAnimals = [...animals, '곰'];

console.log(animals); //개, 고양이, 호랑이
console.log(anotherAnimals); //개, 고양이, 호랑이, 곰

```
- 기존의 ```animals```는 건드리지 않는다. 
- 새로운 ```anotherAnimals``` 배열에 ```animals```가 가지고 있는 내용을 모두 집어 넣고 '곰'을 추가했다. 

<br>

```javascript
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]

```
- 배열에서 spread 연산자를 여러번 사용할 수 있다.


### 1-2. 객체
```javascript
const slime = {
  name:'슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime); //{name:'슬라임'}
console.log(cuteSlime); //{name:'슬라임', attribute:'cute'}
console.log(purpleCuteSlime); //{name:'슬라임', attribute:'cute', color:'purple'}

``` 
- 기존에 선언한 ```smlile```을 건들이지 않고 새로운 객체를 만들어서 ```smile```이 가지고 있는 값을 그대로 사용했다.
- 기존의 것을 건들이지 않고, 새로운 객체를 만든다. 

<br>

## 2. rest(...)
- rest는 객체, 배열, 함수의 파라미터에서 사용이 가능하다.
- 하나의 함수에서 여러 개의 인자를 받을 때, 앞 쪽에서 받은 인자를 제외한 나머지(rest) 인자들을 배열로 합쳐서 받을 수 있게 해준다.

### 2-1. 배열
- 원하는 값을 밖으로 꺼내고, 나머지 값을 ```rest```안에 넣는다.

> 예제1
```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one); // 0
console.log(rest); // [1,2,3,4,5,6]


```

> 예제2 - 오류 
```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers; // systaxError

```
- 배열에서 rest는 맨 앞에 올 수 없다. 


### 2-2. 객체
- 주로 사용 할때는 ```rest```라는 키워드를 사용하게 되지만, 추출한 값의 이름이 꼭 ```rest```일 필요는 없다. 

> 예제1
```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
}

const { color, ...rest } = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // {name: '슬라임' , attribute:'cute'}

```
<br>

> 예제2 - 추출한 값 이름 변경 (rest -> cuteSlime) 
```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
}

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color); // purple
console.log(cuteSlime ); // {name: '슬라임' , attribute:'cute'}

```
<br> 

> 예제3 - 새로운 객체 만들기 
```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
}

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color); // purple
console.log(cuteSlime ); // {name: '슬라임' , attribute:'cute'}

const {attribute, ...slime} = cuteSlime;
console.log(attribute); //cute
console.log(slime); {name: '슬라임'}

```
<br>

## 3. 함수 파라미터에서의 rest
> 수정 전
```javascript
function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); //21

```
- sum 함수는 7개의 파라미터를 받아오는데, 아래에서 사용 할때에는 6개만 넣었을 때, 
- ```g``` 값이 ```undefined``` 가 되기 때문에 sum 에 더하는 과정에서 ```+= undefined``` 를 하게 되면 결과는 ```NaN``` 이 된다. 
- 그렇기 때문에 함수에서 하나하나 유효한 값인지 확인해야한다.

<br>

> 수정 후 
```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21

```
- 함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 매우 유용하다. 
- ```result``` 가 가르키고 있는 것은 함수에서 받아온 파라미터들로 이루어진 배열이다.
- 파라미터들이 들어가있는 배열을 받았으니, ```reduce```함수를 사용해 모두 더해준다. 

<br> 

### 4. 함수 인자와 spread
> 수정 전 
```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
  numbers[0],
  numbers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
);
console.log(result); //21

```



> 수정 후 
```javascript


```






