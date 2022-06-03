## 동기와 비동기
### 동기
- 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식(순차적 진행)
### 비동기 
- 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
- 여러 작업을 동시에 효율적으로 처리할 수 있음
- 하지만, 즉시 응답을 못받기 때문에 예상 밖의 결과가 나올 수 있음으로 주의해야함

<br>

## 콜백함수
### 사용 목적
- **비동기 방식 함수** 의 **동기 처리** 를 위해 사용된다.
- 비동기 처리에서도 **일부 구간에서는 순차적인 처리가 필요** 할 수 있기 때문이다.
- 즉, **응답을 받은 이후 처리되어야하는 종속적인 작업에 대한 대응방법** 이다.

### 콜백 함수 형태
```javascript
function mainFunc(param1, param2, callbackFunc) {
    // ... 처리 내용 작성
    callbackFunc(result);
}

```
- 합수 타입 파리미터를 마지막에 하나 더 선언 해준다. ```callbackFunc```
- 처리가 끝나면 파라미터로 전달 받은 함수 ```callbackFunc```를 실행한다. 
- 결과 값을 인자로 넘겨줄 수도 있다. ```result```

<br>

## 동기방식

```javascript
function buyNormal(item, price, quantity){
   console.log(`${item}을/를 ${quantity}개 골라서 점원에게 주었습니다.`);
   console.log('계산중 입니다. 잠시만 기다려 주십시오.')
   const total = price * quantity;
   return total;
}

function pay(money) {
  console.log(`총 ${money}원 입니다.`);
}
const buyInfo = buyNormal("감자", 1865, 4);
pay(buyInfo);

// 결과
// 감자을/를 4개 골라서 점원에게 주었습니다.
// 계산중 입니다. 잠시만 기다려 주십시오.
// 총 7460원 입니다.

```

<br>

## setTimeout 함수를 이용한 비동기 방식

```javascript
function buySetTimeOut(item, price, quantity) {
  console.log(`${item}을/를 ${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    console.log("계산중 입니다. 잠시만 기다려 주십시오.");
    const total = price * quantity;
    return total;
  }, 3000);
}

function pay(money) {
  console.log(`총 ${money}원 입니다.`);
}
const buyInfo = buySetTimeOut("감자", 1865, 4);
pay(buyInfo);

// 결과
// 감자을/를 4개 골라서 점원에게 주었습니다.
// 총 undefined원 입니다.
(3초뒤)
// 계산중 입니다. 잠시만 기다려 주십시오.


```

<br>

## callback함수를 이용한 비동기 방식 안에서의 동기 처리

```javascript
function buyCallBack(item, price, quantity, callback){
  console.log(`${item}을/를 ${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    console.log('계산중 입니다. 잠시만 기다려 주십시오.')
    const total = price * quantity;
    callback(total);
  }, 3000);
}

function pay(money) {
  console.log(`총 ${money}원 입니다.`);
}

buyCallBack("감자", 1865, 4, pay);

// 결과
//감자을/를 4개 골라서 점원에게 주었습니다. 
(3초뒤)
//계산중 입니다. 잠시만 기다려 주십시오. 
//총 7460원 입니다.

```


