## 반복문 이란?
- 특정 작업을 반복적으로 할 때 사용할 수 있는 구문이다.

<br>

## for문
- 가장 기본적인 반복문으로, 특정 값에 변화를 주며 조건에 만족된다면 계속 반복한다.

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

### 배열과 for


<br>




## while문
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
