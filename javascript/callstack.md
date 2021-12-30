1. callstack
-  자바스크립트가 함수 실행을 핸들하는 방법 중 하나
-  스택: 쌓아올린다
-  자바스크립트는 함수를 그 스택 위에 올리고, 함수를 다 실행하면 제거함

```javascript

function three() {
  console.log('callstack');
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
}
zero();

```
