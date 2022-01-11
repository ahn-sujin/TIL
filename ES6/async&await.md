## asyns & await
- async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이다.
- 기존의 비동기 처리 방식인 콜백 함수와 프롬스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성하게 도와준다.

<br>

> 기본문법
```javascript
async function 함수명() {
  await 비동기_처리_매서드_명();
}

```
- 함수 앞에 ```async```라는 예약어를 붙인다.
- 함수 내부 로직 중 HTTP통신을 하는 비동기 처리 코드 앞에 ```await```를 붙인다. 
- ❗ **주의할 점 : 비동기 처리 매서드가 꼭 프로미스 객체를 반환해야 ```await```가 의도한 대로 작동한다.**

<br>

> syns & await 사용했을 때 
```javascript
function fetchItems() {
  return new Promise((resolve, reject) => {
    const items = [1,2,3]; 
    resolve(items)
  });
}

async function logItems() {
  const resultItems = await fetchItems(); 
  console.log(resultItems);
}

 logItems();
 
 // [1,2,3]

```
- ```fetchItems()``` 함수는 프로미스 객체를 반환하는 함수이다. 
- ```fetchItems()`` 함수를 실행하면 **프로미스가 이행(Resolved)** 되며 결과 값은 items 배열이 된다.
- ```logItems()``` 함수를 실행하면 ```fetchItems()``` 함수의 결과 값인 items 배열이 resultItems 변수에 담긴다. 따라서, 콘솔에는 [1,2,3]이 출력

<br> 

> asyns & await 사용하지 않았을 때
```javascript 
function fetchItems() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var items = [1,2,3];
      resolve(items)
    }, 3000);
  });
}

fetchItems().then((result) => {
  console.log(result);
})

// [1,2,3]

```
- await를 사용하지 않으면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 ```.then()```를 사용해야한다.













