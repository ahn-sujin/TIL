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



