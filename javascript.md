# 💡javascript에 대한 기초 지식 및 이론 정리

# 📝목차 
[1. 데이터타입 - 문자열과 숫자](#1데이터타입-문자열과-숫자)


[2. 변수와 대입 연산자](#2-변수와-대입-연산자)


[3. 제어할 태그 선택하기](#3-제어할-태그-선택하기)


[4. 프로그램, 프로그래, 프로그래머 ](#4-프로그램-프로그래밍-프로그래머)


[5. 조건문](#5-조건문)


[6. 비교 연산자와 블리언](#6-비교-연산자와-블리언)


[7. 조건문](#7-조건문)


[8. 조건문의 활용](#8-조건문의-활용)


[9. 리팩토링 중복의 제거](#9-리팩토링-중복의-제거)


[10. 배열(Array)](#10-배열array)


[11. 반복문(Loop)](#11-반복문loop)


[12. 배열과 반복문의 활용](#12-배열과-반복문의-활용)


[13. 함수 (function)](#13-함수-function)


[14. 함수 : 매개변수와 인자 ](#14-함수--매개변수와-인자)


[15. 객체](#15-객체)


[16. 객체 쓰기와 읽기](#16-객체-쓰기와-읽기)


[17. 객체와 반복문](#17-객체와-반복문)


[18. 객체프로퍼티와 메소드](#18-객체프로퍼티와-메소드)


[19. 객체의 활용](#19-객체의-활용)


[20. 파일로 쪼개서 정리 정돈하기](#20-파일로-쪼개서-정리-정돈하기)


[21. 라이브러리와 프레임워크](#21-라이브러리와-프레임워크)


[22. UI  vs API](#22-ui-vs-api)


[23. 마무리](#23-마무리)

<br><br>


## 1.데이터타입-문자열과 숫자 

### 1-1. 데이터타입 종류 
* Boolean 
* Null
* Undefined
* Number (숫자)
* String (문자열)
* Symbol

### 1-2. String(문자열)
* 문자는 ""('')사용 
* .length  문자열의 갯수를 알려줌 
* .toUpperCase( ) 대문자 알파벳으로 변경 
* .indexOf( ) 문자의 위치를 찾아줌 
* .trim( ) 공백을 없애줌  

<br><br>

## 2. 변수와 대입 연산자 
* x(변수) =(대입연산자)  1 ;
* 대입연산자 : 좌항과 우항을 결합해서 우항의 값을 만들어 낸다.  
* 1(상수)=2;    -> 성립되지 않는 수식 
* varibale(변수)  vs  constant(상수) 
* 실행 = enter  / 실행유보 = shift + enter 
* 변수 사용할 때 앞에 'var' 붙여서 사용 할 것 ex) var name ="sujin" ;
* 변수 사용의 이유: 방대한 자료 속 특정한 문자를 변수를 이용하여 정확하고 빠르게 바꿀 수 있다.

<br><br>

## 3. 제어할 태그 선택하기 
* javascript select tag by css selector


  :  element = document .querySelector(selectors);


  ex) var el = document .querySelector(".myclass");
      

* javascript element style


  : var x = document .getElementById("myH1").style;
      

* javascript style background-color


  : document.body.style.backgroundColor="red";
      
<br><br>

## 4. 프로그램, 프로그래, 프로그래머 
* HTML: 프로그래밍 언어(X), 시간에 순서에 구애 받지 않는다 
* JAVASCRIPT : 프로그래밍 언어(0), 사용자와의 상호작용, 시간의 순서에 따라 실행
* 프로그램 : 순서 
* 프로그래밍 : 순서를 만드는 행위 -> 반복적인 일을 하지 않아도 됨
* 프로그래머: 순서를 만드는 사람 

<br><br>

## 5. 조건문 
* 조건문: 조건에 따라 다른 순서의 기능들이 실행 되도록 함 -> 복잡한 일을 해결

<br><br>

## 6. 비교 연산자와 블리언 
### 6-1. === (비교 연산자)
   ex) 1 === 1   : true    /  1===2  : false

### 6-2. true / false (블리언) 
   html '<'  은  '&lt;' 로 표현한다 

<br><br>

## 7. 조건문 
```javascript
document .write("1");
if (true){
      document.write("2");
}    else  {
     document.write("3");
}
document.write("4");	
```


===> if (  true or false  ) {  A  } else { B  }   
* if 절의 값이 true 일 때, else 조건문(B) 이 생략 되고, 
* if 절의 값이 false 일 때, if 조건문(A) 이 생략 된다. 


<br><br>

## 8. 조건문의 활용 
* javascript element get value


  : document.querySelector('selector' ).value;


<br><br>

## 9. 리팩토링 중복의 제거 
* 리팩토링: 비효울적인 코드를 효율적으로 만들어 가독성을 높이고 유지보수가 쉽도록 코드를 개선 

### 9-1. this: 이벤트가 속해 있는 자신을 가르킴 (따로 id, class명을 설정하지 않아도 됨)
```javascript
    if(document.querySelector('#night_day').value ==='night'){
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    document.querySelector('#night_day').value='day';
    } else {
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
    document.querySelector('#night_day').value='night';
    }
```

```javascript
    if(this.value ==='night'){
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    this.value='day';
    } else {
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
    this.value='night';
    }
```

* 코딩을 잘하는 tip : 중복되는 코드 제거!

### 9-2. 중복되는 코드 이름 설정 
```javascript
    if(this.value ==='night'){
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    this.value='day';
    }
```

```javascript
   var target = document.querySelector('body');	
    if(this.value ==='night'){
    target.style.backgroundColor='black';
    target.style.color='white';
    this.value='day';
    }
```

<br><br>


## 10. 배열(Array)
*  [ "값1", "값2" ]

   index 0 = 값1
  
   index 1 = 값2

* javascript array count 

  : var fruits = ["Banana" , "Orange" , "Apple", "Mango"]; fruits.length;
  
* javascript array add data

  : var fruits = ["Banana" , "Orange" , "Apple", "Mango"]; fruits.push("Kiwi");


<br><br>

## 11. 반복문(Loop)
* 반복문: 순서대로 흐르는 순서문의 흐름을 제어 
* while(ture / false ){     코드   } 

  : ( ) 안에 값이 false가 될 때까지 { } 안에 코드 들이 실행 됨, ( ) 안에 값이 false가 되면 
  
*  while문 :  바깥에 코드가 실행됨. (반복문 종료)
*  var i  = 0; : 실행 코드가 몇번 실행 됐는지 적는 코드  


<br><br>

## 12. 배열과 반복문의 활용 
* querySelector  : 찾으려고 하는 태그의 첫 번째만 찾아오는 속성이 있음( 해당하는 모든 태그를 가져오려고 할때 사용하기에는 부적절함) 
* javascript get element by css selector multiple

  : document.querySeletorAll( );
 
 
<br><br>
 
## 13. 함수 (function)
* 연속적인 반복이 아니라면 반복문을 사용할 수 없다. 함수를 이용 ! 
* 기본 형식 : function night  name(     ) {   코드   }
* 실행 코드 : name ( ) ;


<br><br>

## 14. 함수 : 매개변수와 인자 
* 자판기 음료 선택 : 입력 
* 음료 나옴 : 출력 
* 함수 : 입력와 출력으로 이루어져 있음 

```javascript
  function sum( left, right){
           document.write(left+right);
  }
  sum(2,3);
  sum(3,4);
```

* (left, right) => 매개변수 
* (2,3)/(3,4) => 인자 
* 매개변수와 인자는 함수에 들어오는 입력값! 


<br><br>

## 15. 객체 
* 함수와 연관
* 정리정돈의 수단 
* 변수가 많아져 한계에 부딪혔을 때, 서로 연관된 함수와 변수를 같은 이름으로 정리정돈 하는 것 




### 15-1. 함수의 이름이 중복 될 때 : 기존의 코드가 다음에 나오는 코드(중복)에 의해 덮어쓰기 되면서 삭제 됨 
* 이름이 중복 되지 않도록 앞에 구분해주기 

  function SetColor( ) --->  unction LinksSetColor( ), function BodysetColor( )
  
* 데이터의 양이 많아지면 이름도 길어 질 수 있음, 따라서 길어지는 이름을 편리하게 관리하기 위해 폴더, 디렉토리의 역할의 객체를 사용

  LinksSetColor( ) ---> Links.setcolor( )
  
  BodysetColor( ) ---> Body.setcolor( )
  
* document.querySelector(   ) 

  객체 : documnet / 함수 : querySelector
  
  객체에 속해있는 함수는 '메소드'라고 불린다. 
  
 <br><br>
  
  
## 16. 객체 쓰기와 읽기 
* 배열: 정보를 담는 그릇, 순서대로 정보를 저장 / '[]'사용 
* 객체: 순서 없이 정보를 저장 (이름이 있는 정리정돈 상자) / '{}'사용 
* 이름에 띄어쓰기를 넣을 수 없음, '[]' 를 사용 할 것

  ex) coworkers.data scientist (X) ---> coworkers["data scientist"] (O)


<br><br>

## 17. 객체와 반복문
* javascript object iterate (객체 반복문) 

  : for ( var key in yourobject) { document.write(key); }
  
  : for ( var key in yourobject) { document.write(exo[key]); }
  
  => exo(객체)에 있는 key값(leader , main dancer, vocal, main vocal, sub vocal....) 하나하나를 변수 값으로 세팅 해준다. 


<br><br>

## 18. 객체프로퍼티와 메소드 
* coworkers.showAll = function( ){ } 
* function showAll( ) { }
* var showAll = function( ) { }

  => 같은 표현(의미)
  
* 객체에 소속된 함수 : 메소드 
* 객체에 소속된 변수 : 프로퍼티 
* 갹체의 이름 바꼈을 때, 데이터를 못가져 올 수 있음 
* 따라서 함수 안에서 함수가 소솓되어 있는 객체를 가르키는 약속된 기호 사용 (= this)

<br><br>


## 19. 객체의 활용 
* 객체의 프로퍼티와 프로퍼티를 구분 할 때 콤마(,)를 입력한다. 

<br><br>


## 20. 파일로 쪼개서 정리 정돈하기 
* cache(캐시): 저장


<br><br>

## 21. 라이브러리와 프레임워크 
* 다른 사람의 도움을 받아 소프트웨어를 만든다.
* 다른 사람과 협력하는 모델 

### 21-1. 라이브러리(library)
* 내가 만들고자 하는 소프트웨어의 부품들을 잘 정리정돈하여 재사용 하기 쉽도록 해논 것
* 내가 만들고 있는 프로그램의 부품을 가져오는 느낌  ex) jQuery

### 21-2. 프레임워크(framework) 
* 만들고자 하는 것이 무엇이냐에 따라(게임, 웹, 쳇팅) 공통적인 부분을 프레임워크가 만들어 놓고, 달라지는 부분은 생산해 내는 것

### 21-3. jQuery
* 반복문을 사용하지 않아도 된다. 
* '$'로 시작
* 새로운 언어가 아니고, javascript를 이용 
* 어떤 라이브러리가 생성되어 있는지 파악하는 것이 중요 


<br><br>

## 22. UI  vs API
### 22-1.  User Interface (UI)
* 사용자가 시스템을 제어하기 위해서 사용하는 조작장치 

### 22-2. Application Programming Interface (API)
* Application을 만들기 위해서  Programming을 할때 사용 하는 조작장치

  ex) alert( )...
  
* API와 순서는 깊은 관련 


<br><br>

## 23. 마무리 
* 태그를 삭제 또는 자식 태그를 추가하고 싶을 때 (웹페이지 제어)

  => docuement < DOM
  
* window (웹브라우저 제어 , 현재 열려있는 웹페이지의 주소, 새창, 화면크기..)
* ajax (웹페이지를 리로드 하지 않고 정보를 변경)
* cookie ( 웹페이지가 리로드 되어도 현재 상태 유지, 사용자를 위한 개인화된 서비스 제공)
* offline web application (인터넷이 끊겨도 동작하는 웹페이지)
* webRTC  (화상통신 웹앱)
* speech (사용자 음성인식, 음성 정보 전달)
* webGL (3차원 그래픽 게임) 
* webVR  (가상현실)


<br><br>

## Contact
:envelope: asj9674@gmail.com
