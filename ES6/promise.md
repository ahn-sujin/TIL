## 1. promise
- 자바스크립트 비동기 처리에 사용되는 객체
- 📌**promise의 사용 이유**
     
     - 콜백 함수의 과정이 끝나기 전에 다음 프로세스로 진행 될 수 있다. 
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

## 2. promise의 3가지 상태
- **Pending(대기)** :  비동기 처리 로직이 아직 완료도지 않은 상태
- **Fulfilled(이행,완료)** : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- **Rejected(실패)** : 비동기 처리가 실패하거나 오류가 발생한 상태

### Pending(대기)
```javascript
new Promise();

```
- 위와 같이 ```new Promise()``` 메서드를 호출하면 대기(pending)상태가 된다.

<br>

```javascript
new Promise((resolve, reject) => {
    // 실행코드...
})

```
- ```new Promise()``` 메서드를 호출할 때, 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 ```resolve``` ```reject```

<br>

### Fulfilled(이행)
```javascript
new Promise((resolve, reject) => {
     resolve();
})

```
- 콜백 함수의 인자 ```resolve```를 실행하면 이행상태가 됨

<br>

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data");
  }, 1000);
});

// resolve()의 결과 값 data를 result로 받음 
myPromise.then((result) => {
     console.log(result); //data
})

```
- 이행상태가 되면 ```then()```을 이용하여 처리 결과 값을 받을 수 있음

<br>

### Rejected(실패)
```javascirpt
new Promise((resolve, reject) => {
     reject();
});

```
- 콜백 함수의 인자 ```reject```를 호출하면 실패상태가 됨

<br>

```javascript
const myPromise = new Promise((resolve, reject) => {
     setTimeout(() => {
          reject(new Error("Request is failed"));
     },1000);
});

// reject()의 결과 값 Request is failed를 error에서 받음
myPromise.then().catch((err) => {
     console.log(err); //Error: Request is failed
});

```
- 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)을 ```catch()```로 받을 수 있음

<br>

## 3. promise 함수
- 제대로 응답을 받아오면 ```resolve()``` 메서드를 호출하고, 응답이 없으면 ```reject()```를 호출함
- 호출된 메세드에 따라 ```then()```이나 ```catch()```로 분기하여 응답 결과 또는 오류를 출력함

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
         reject(new Error("Request is failed"));
      }
      resolve(value);
    }, 1000);
  });
}

// 위 호출 결과에 따라 'resolve' 또는 'reject' 값 출력
increaseAndPrint(0).then((n) => {
  console.log("result:", n); //resolve 값 출력
}).catch((err) => {
  console.error(err); //reject 값 출력
});
  
//result: 1    

```
<br>

### 여러 개의 프로미스 연결하기(Promise Chaining)
```javascript
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then((data) => {
    // ...
  })
  .then((data) => {
    // ...
  })
  .then((data) => {
    // ...
  });

```
- 여러 개의 프로미스를 연결하여 사용할 수 있다.
- ```then()``` 매세드를 호출하고 나면 새로운 프로미스 객체가 반환된다.

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        // const error = new Error();
        // error.name = "오류다오류";
        // reject(error);
        // return;
        reject(new Error("Request is failed"));
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.log(e);
  });
  
//1
//2
//3
//4
//5
//Error: Request id failed

```















