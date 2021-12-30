## callstack
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

>실행결과
```
callstack
```

<br>

**📍스택이 붕괴될때 에러가 나는 현상**

```javascript

function hello(){
  bye();  
}
function bye(){
  hello();
}
hello();
 
 ```
 
 > 실행결과
 ```
 uncaught RangeError: Maximum call stack size exceeded

 ```
 - 자바스크립트 스택에 올릴 수 있는 제한이 있음
 - 계속 서로를 부르는 함수를 사용할 경우 에러가 발생 할 수 있음 
