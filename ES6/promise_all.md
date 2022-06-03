## Promise.all
- **여러 개의 ```promise```를 동시에 처리** 할 때 사용한다.
- 등록한 ```promise```중 하나라도 에러가 나면 전체 에러로 간주한다.

<br>

> 사용전

```javascript

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
}

const getCat = async () => {
  await sleep(500);
  return '고양이';
}

const getRabbit = async () => {
  await sleep(3000);
  return '토끼';
}

async function process(){
    const dog = await getDog();
    console.log(dog);
    const cat = await getCat();
    console.log(cat);
    const rabbit = await getRabbit();
}

process();

//결과
//멍멍이
//고양이
//토끼

```
- ```getDog``` -> ```getCat``` ->  ```getRabbit``` 순서로 하나씩 하나씩 처리 되고 있다.

<br>

> 사용후

```javascript

async function process(){
    const results = await Promise.all([getDog(),getCat(),getRabbit()]);
    console.log(results);
}

process();

//결과
// ['멍멍이','고양이','토끼']         // 걸린 시간은 3초 (토끼가 제일 오랜 시간이 걸리기 때문에)

```

<br>

> ```promise```에 담긴 값을 각각의 다른 변수로 꺼내줄 때

```javascript

async function process(){
    const [dog, cat, rabbit] = await Promise.all([getDog(),getCat(),getRabbit()]);
    console.log(dog);
    console.log(cat);
    console.log(rabbit);
}

process();

// 결과
// 멍멍이
// 고양이
// 토끼

```
<br>

## promise.race
- 등록한 ```promise``` 중 **가장 빠른 것**만 나타나게 된다.
- **가장 빠른 ```promise```가 에러일 때만 에러가 뜬다**. 다른```promise```가 에러일때는 에러로 간주하지 않는다.

```javascript


async function process(){
    const first = await Promise.race([getDog(),getCat(),getRabbit()]);
    console.log(first);
}

process();

//결과
//고양이

```


