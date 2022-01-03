## 1. value type (값 타입)

```javascript

 let a  = 50;
 let b = a;
 
 a = 10;
 
 console.log(b); // 50
```
- a값을 복사해서 b에 붙여넣었음 
- 그래서 밑에서 a의 값을 바꿔도 b는 영향에서 벗어나게 됨(value 복사)
- **string, number, boolean, NaN, undefined, null**에서 사용 

<br>

## 2. reference types (참조타입)

```javascript

const food = ['kimchi', 'potato']; 
const lunch =  food;

food.push('chicken')

console.log(lunch); // ['kimchi', 'potato', 'chicken']

```
- 'food'를 변경하지 않고 'lunch'값을 변경하자 'food'의 값이 업데이트 됨(레퍼런싱)
- 'food'의 '값'이 해당 배열 ['kimchi', 'potato'] 이 아니라, 해당 배열을 '참조'하고 있음 

<br>

```javascript

console.log([10] === [10]) // false

```
- 이 둘은 각각 메모리에 위치한 각기 다른 오브젝트이다.

<br>

```javascript

const x = {
  a: 'hello';
}
const b = x;

b.a =  'bye';

console.log(x); // {a: 'bye'}

```
- x를 b를 통해 업데이트 할 수 있음
- **array, object, function**에서 사용


