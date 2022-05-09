## 함수(Function)
- 반복되는 코드를 함수를 통해 정리할 수 있다.
- ❗ **반복문으로 반복되는 코드를 정리 할 수 있지만, 중복된 코드가 일정한 순서나 연속성 없을 때는 함수를 사용한다.**

<br>

> 사용전
```javascript
document.write('1');
document.write('2');
document.write('3');
document.write('4');
document.write('2');
document.write('3');

```
- '2'와 '3'가 반복되지만 중간에 껴있는 '4'때문에 반복문을 사용할 수 없다.

<br>

> 사용후
```javascript
function two() {
  document.write('2');
  document.write('3');
}

document.write('1');
two();
document.write('4');
two();

//결과
// 123423

```

<br>

## 함수 - 매개변수와 인자
- **함수**는 **입력과 출력**으로 이루어져 있다.
  - 입력 : 매개변수(Parameter)와 인자(Argument) 
  - 출력 : 리턴(Return)


```javascript
function sum(left, right) {
  document.write(left, right);
}

sum(2,3);

//결과
5
```

- **매개변수(Parameter)**: 함수 정의 시 나열되는 변수
  - ```sum```의 괄호 안에 들어오는 두 숫자를 각각 left, right라는 변수에 넣어 준 것이고, 이러한 변수를 매개변수라고 부른다.
- **인자(Argument)**: 함수 호출 시 전달되는 실제 값
 - ```sum```의 괄호 안에 넣어서 함수로 전달되는 숫자 2,3을 인자라고 부른다. 

<br>

## 함수 - 리턴
- 리턴은 함수의 출력 값이다.
- 리턴은 함수가 어떠한 기능을 직접적으로 수행하는 것이 아닌, **적절한 값을 돌려주도록** 한다.
- 리턴은 받은 값에 변화를 주고 싶을 때, 함수를 새로 만들지 않고도 기존의 함수를 응용하여 사용 할 수 있다.

<br>

> 사용전
```javascript
function sum(left, right) {
  document.write(left + right);
}
sum(2,3) //결과 5

function sumColor(left, right){
  document.write(`<div style="color: red;">${left+right}</div>`);
}
sumColor(2,3); //결과 <div style="color: red;">5</div>


```
- 만약, 다른 색상의 '5'를 출력하고 싶다면 새로운 함수를 만들어야한다.

<br>

> 사용후
```javascript
function sum(left, right) {
  return left + right;
}

console.log(sum(2,3))
console.log(`<div sytle="color:red;">${sum(2,3)}</div>`)

//결과
5
<div sytle="color:red;">5</div>

```







