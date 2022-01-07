## Template Literal(템플릿 리터럴)
- 템플릿 리터럴은 **ES6**에서 새롭게 도입된 문자열 표기법이다.
- 따옴표 대신 **백틱(`)** 을 사용한다.
```javascript
const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`

console.log(template); //템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`

```

<br>

- 일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백(white-space)를 표현하기 위해서 백슬래시(/)로 시작하는 이스케이프 시퀀스(Escape Sequence)를 사용한다. 
- ES6 템플릿 리터럴 내에 있는 모든 white-space는 있는 그대로 적용된다.
```javascript
const template = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;

console.log(template);

// 결과
<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
//
```

<br>

- 템플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다. 이를 문자열 인터폴레이션(String Interpolation)이라 한다.
- 문자열 인터폴레이션은 ${ … }으로 표현식을 감싼다. 문자열 인터폴레이션 내의 표현식은 문자열로 강제 타입 변환된다.
```javascript
const first = 'Ung-mo';
const last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');
// "My name is Ung-mo Lee."

// ES6: String Interpolation
console.log(`My name is ${first} ${last}.`);
// "My name is Ung-mo Lee."

// 문자열 타입 변환
console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"

```


