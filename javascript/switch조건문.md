## switch 조건문
- ```if문```과 ```삼항 연산자```와 같이 ```switch문```은 조건에 따라 다른 동작을 수행시킬 수 있다.
- ```switch문```은 **어떤 값을 가진 대상을 두고 조건값과 일치하는지를 확인하고 동작을 수행하는 방식**이다. 

<br>

## 문법
```javascript
let 변수;

switch (변수){
  case 상수1 :  // 변수 = 상수1이면, 실행문 A실행
    실행문 A; 
    break; // swith{} 코드 블록 탈출
    
  case 상수2 : // 변수 != 상수1 이고, 변수 = 상수2 이면, 실행문 B 실행
    실행문 B;
    break; // swith{} 코드 블록 탈출
    
  default: // 변수 != 상수1 이고, 변수 != 상수2 이면, 실행문 C 실행
    실행문 C;
}

```

- ```switch조건문```은 **switch문**과 **case문**으로 구성된다. 
- **switch의 변수와 case의 상수를 비교**하여 일치하면 실행, 일치하지 않으면 다음 case문으로 넘어간다. 
- switch() 괄호안에는 변수, 상수, 비교연산자 등 데이터가 자유롭게 올 수 있지만, **case 문 뒤에는 상수 값만** 올 수 있다. 

<br>

## break문의 역할과 이유
> break는 switch의 중괄호를 빠져나가는 명령어다. <br> switch조건문은 break문을 만나기 전까지 조건값들을 비교하여 case문 혹은 default문을 실행한다. <br>
그렇다면, 만약 break문이 없이 switch 조건문을 작성한다면 어떻게 될까

<br>

```javascript
let a = 2;

//=============== break 사용하지 않았을 때 ===================
switch(a) {
  case 1 : 
        console.log('a는 1입니다.');
   case 2:
        console.log('a는 2입니다.'); 
    default:
        console.log('a는 1도 2도 아닙니다.'); 
}

// 결과
// a는 2입니다.
// a는 1도 2도 아닙니다.

//=============== break 사용했을 때 ===================
switch(a) {
  case 1 : 
        console.log('a는 1입니다.');
        break;
   case 2:
        console.log('a는 2입니다.'); 
        break;
    default:
        console.log('a는 1도 2도 아닙니다.'); 
}

// 결과
// a는 2입니다.

```
- **break를 사용하지 않았을 때**, 'a는 2입니다.'와 'a는 1도 2도 아닙니다.'가 **모두 출력**이 된다.
-  switch문의 조건과 일치하는 두 번째 case 문의 동작 부분을 수행한 다음, **break문이 없기 때문에 그다음 동작도 수행**해 버린 것이다.
-  ```case문```은 ```switch문``` 내부의 여러 동작들 중에서 **가장 먼저 동작할 시작점을 찾는 기준**이라고 할 수 있다.
-   **case별로 동작들을 구분**하고 싶다면 필요한 구간에 **break문을 작성**해줘야 한다.

<br>

## switch문 장점 : 간결성, 가독성
- ```switch 조건문```은 ```if else if 조건식```으로 변환할 수 있다.
- . 두 식을 비교해보면 ```switch 조건문```이 조금더 간결하고 가독성이 높다.

> switch문
```javascript
let drink = prompt ( "가격 조회를 원하는 음료수를 입력하세요.( 콜라, 사이다, 커피 中 택1)", "" );

switch (drink){
    case "콜라" :
      document.write ( "800원" );
      break;

    case "사이다" :
      document.write ( "900원");
      break;

    case "커피" :
      document.write ( "700원" );
      break;

    default :
      document.write ("잘못된 단어 입력");
}

```

<br>


> if else if문
```javascript
let drink = prompt ( "가격 조회를 원하는 음료수를 입력하세요.( 콜라, 사이다, 커피 中 택1)", "" );

if ( drink = "콜라" ){
    document.write ( "800원" );
}else if (drink = "사이다"){
    document.write ( "900원" );
}else if (drink = "커피"){
    document.write ( "700원" );
}else{
    document.write ( "잘못된 단어 입력" );
}

```





<br>


## switch문 단점 : 상수









<br>

#### 참고
https://dasima.xyz/javascript-switch/

https://bigtop.tistory.com/29
