## 1. 동기적(Synchoronous)
- 작업이 끝나야 다음 작업을 진행 할 수 있음

```javascript
function work(){
  const start = Date.now();
  for(let i = 0; i < 100000000; i++){
  }
  const end = Date.now();
  console.log(end - start + 'ms');
}

work();
console.log('다음작업');

// 83ms 
// 다음작업

```

<br>

## 2. 비동기적(Asynchoronous)
- 동시에 여러 작업을 처리 할 수 있음
- 특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것 
- 비동기적으로 처리하는 작업
     - Ajax Web API요청
     - 파일 읽기 
     - 암호화 / 복호화 
     - 작업 예약 
    
```
📍 자바스크립트에서 비동기 처리가 필요한 이유는 서버로 데이터를 요청했을 때, 
  언제 그 요청에 대한 응담을 줄지도 모르는데 마냥 다른 코드를 실행 안하고 기다릴 수는 없기 때문이다. 
```

### 2-1. ajax
- 보통 화면에 표시할 이미지나 데이터를 서버에서 불러와 표시해야 하는데, ajax통신으로 해당 데이터를 서버로부터 가져올 수 있음

```javascript
function getData(){
  var tableData;
  $.get('http://domain.com/products/1', function(response){
    tableData = response;
  });
  return tableData;
}

console.log(getData()); // undefined

```
- ```$.get()```로 데이터를 요청하고 받아올 때까지 기다려주지 않고 다음 코드인 ```return tableData;```를 실행
- 따라서, ```getData()```의 결과 값은 초기 값을 설정하지 않은 ```tableData```의 값 ```undefined```를 출력하게됨


### 2-2. setTimeout
- 코드를 바로 실행하지 않고 지정한 시간만큼 기다렸다가 로직을 실행함

```javascript
function work(){
  setTimeout(() => {
    const start = Date.now();
    for(let = i; i < 100000000; i++){
    
    }
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 3000);
}

console.log('작업시작');
work();
console.log('작업중');

// 작업시작 
// 작업중
// 84ms


```


### 2-3. 콜백함수
- 함수 타입의 값을 파라미터로 넘겨주고 파라미터로 받은 함수를 일정 작업이 끝나고 나서 호출 해주는 함수

> 예제1
```javascript
function returnName(callback){
  callback('asj');
  console.log('만나서 반갑습니다.');
}

function sayHello(name){
  console.log(`안녕하세요! ${name}님`);
}

returnName(sayHello);

// 안녕하세요! asj님
// 만나서 반갑습니다.

```
- ```returnName```함수는 ```sayHello```라는 함수를 파라미터로 가지고 호출하게 되는데, 
- ```returnNAme```함수는 ```sayHello```함수를 인자로 받아야하기 때문에 ```sayHello```함수가 먼저 실행된 뒤 ```returnName```함수가 실행되게 된다.


> 예제2
```javascript

function work(callback){
  setTimeout(() => {
    const start = Date.now();
    for(let i = 0; i < 100000000; i++){
    
    }
    const end = Date.now();
    console.log(end - start + 'ms');
    callback(end - start);
  },3000);
}

console.log('작업시작');
work((ms) => {
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸다고 해요.');
});
console.log('작업중');

// 작업시작 
// 작업중
// 87 ms
// 작업이 끝났어요 
// 87 ms 걸렸다고 해요.

```


### 2-4. 콜백지옥
- 콜백 지옥은 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제
- 해결방법으로는 **promise** 와 **async**가 있음

```javascript
function increaseAndPrint(n, callback){
  setTimeout(() => {
    const increased  = n+1;
    console.log(increased);
    if(callback){
      callback(increased);
    }
  }, 1000);
}

//콜백지옥
increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n , n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n , n => {
          console.log('작업 끝!');
        })
      })
    })
  })
});

//1
//2
//3
//4 
//5
//작업 끝!

```
