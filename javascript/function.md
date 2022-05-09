## 함수(Function)
- 반복되는 코드를 함수를 통해 정리할 수 있다.
- ❗ **반복문으로 반복되는 코드를 정리 할 수 있지만, 중복된 코드가 일정한 순서나 연속성 없을 때는 함수를 사용한다.**

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
