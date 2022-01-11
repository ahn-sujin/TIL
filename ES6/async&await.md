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
- ```fetchItems()``` 함수를 실행하면 **프로미스가 이행(Resolved)** 되며 결과 값은 **items 배열**이 된다.
- ```logItems()``` 함수를 실행하면 ```fetchItems()``` 함수의 결과 값인 **items 배열**이 **resultItems 변수**에 담긴다. 따라서, **콘솔에는 [1,2,3]이 출력된다**

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
- await를 사용하지 않으면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 **콜백 함수**나 ```.then()```를 사용해야한다.

<br>

## async & await 예외 처리
- async & await에서 예외를 처리하는 방법은 ```try catch```이다.
- 프로미스에서 에러 처리를 위해 ```.catch()```를 사용했던 것 처럼 async에서는 ```catch {}```를 사용한다.

> try catch 기본 문법
```javascript
try{
  try_statements
} catch (exception_var) {
  catch_statements
}

```
- **try_statements** : 실행될 선언들
- **catch_statements** : try 블록에서 예외가 발생했을 때 실행될 선언들 
- **exception_var** : catch블록과 관련된 예외 객체를 담기 위한 

<br> 

> 예외 처리 예시 

```javascript
function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return fetch(url).then(function(response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(url).then(function(response) {
    return response.json();
  });
}

async function logTodoTitle(){
  try{
    const user = await fetchUser();
    if(user.id === 1){
      const todo = await fetchTodo();
      console.log(todo.title);
    }
  } catch (error){
    console.log(error);
  }
}

logTodoTitle() //delectus aut autem 

```
- 코드를 실행하다가 발생한 네트워크 통신 오류뿐만 아니라 간단한 타입 오류 등의 일반 적인 오류까지도 ```catch```로 잡아낼 수 있다.
- 발견된 에러는 ```error```객체에 담기게 된다.

