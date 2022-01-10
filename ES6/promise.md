## 1. promise
- 자바스크립트 비동기 처리에 사용되는 객체
- promise의 사용 이유 : 콜백함수의 단점을 해결하기 위해서
     - 비동기 처리를 순차적으로 실행할 필요가 있는 경우, 비동기 처리를 중첩시켜서 표현하므로 **에러, 예외처리가 어렵다.**
     - 중첩으로 인한 **복잡도가 증가한다.(콜백지옥)**

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data');
  }, 1000)
});

// myPromise의 실행이 끝나면 호출되는 then()
myPromise.then((result) => {
  // resolve()의 결과 값이 여기로 전달 됨
  console.log(result);
}); 

//data

```
