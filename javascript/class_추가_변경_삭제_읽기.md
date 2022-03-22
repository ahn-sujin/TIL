## 스타일과 클래스

#### 요소에 스타일을 적용 할 수 있는 방법은 두가지가 있다.
1. CSS에 클래스를 만들고, 요소에 ```<div class="...">```처럼 클래스 추가하기
2. ```<div style="...">```처럼 프로퍼티를 ```style```에 바로 써주기

- 자바스크립트를 사용하면 **클래스**와 **style** 프로퍼티 둘 다 수정할 수 있다. 
- style 보다 **CSS 클래스를 수정하는 것을 더 우선시**해야 한다. 
- **style은 클래스를 '다룰 수 없을 때’만** 사용해야 한다.
- **style**은 자바스크립트를 사용해 요소의 **좌표를 동적으로 계산하고, 계산한 좌표를 설정해주고자 할 때 사용**하면 좋다.(복잡한 계산식이 들어갈 때!)
- 텍스트를 빨간색으로 만든다거나 배경에 이미지를 추가하는 등의(디자인 요소) 작업은 자바스크립트를 사용해 **클래스를 요소에 추가해 주는 방식**이 좋다.

<br>

```javascript

let top = /* 복잡한 계산식 */;
let left = /* 복잡한 계산식 */;

elem.style.left = left; // 예시: '123px', 런타임으로 좌표를 계산할 수 있음.
elem.style.top = top; // 예시: '456px'

```

<br>

## className과 classList

### className
- ```element.className```에 무언가를 대입하면 class 문자열 전체가 바뀐다.
- **요소의 모든 클래스를 변경**한다. (기존 class 속성은 **초기화**된다.)

```html
<!-- 변경 전 -->
<div class="greeting title">
  <h1>Hello World!</h1>
</div>

<!-- 변경 후 -->
<div class="hello">
  <h1>Hello World!</h1>
</div>

```

```javascript
div.className = 'hello';

```

### classList
- 속성값 전체를 바꾸는 것이 아니라 클래스 하나만 추가하거나 제거하고 싶을 때 사용한다.
- ```element.classList.add/remove('class명') ``` :  class를 추가하거나 제거
- ``` element.classList.toggle('class명') ``` : class가 존재할 경우 class를 제거하고, 그렇지 않은 경우엔 추가
- ``` element.classList.contains('class명') ``` : class 존재 여부에 따라 true/false를 반환

<br>

## 클래스 추가 ```element.classList.add('className')```
- HTML 엘리먼트가 가진 **기존 class속성을 유지한채, 새로운 class 을 추가**한다. 

> 
```html
<!-- 변경 전 -->
<div class="greeting title">
  <h1>Hello World!</h1>
</div>

<!-- 변경 후 -->
<div class="greeting title hello">
  <h1>Hello World!</h1>
</div>

```

```javascript
div.classList.add('hello');

```

<br>

## 클래스 삭제 ```element.classList.remove('className')```
- HTML 엘리먼트의 class 속성 중에서 **기존의 class 속성 값은 유지되면, 인자로 사용된 class 값만 삭제**한다.

```html
<!-- 변경 전  -->
<div class="greeting title">
  <h1>Hello World!</h1>
</div>

<!-- 변경 후  -->
<div class="greeting">
  <h1>Hello World!</h1>
</div>

```

```javascript
div.classList.remove('title');

```

<br>

## 클래스 토글 ```element.classList.toggle('className')```
- HTML 엘리먼트에 **특정 동작에 따라 class값이 추가되었다가 삭제된다.** 
- **첫번째 인자는 class값, 두번째 인자에는 boolean값**을 받는다.

<br>

> 인자가 하나만 있을 때 ```element.classList.toggle('className');```
```html
<!-- 실행 전  -->
<button class="hello" onclick="buttonClicked()">button</button> 

<!-- 실행 후  -->
<button class="hello clicked" onclick="buttonClicked()">button</button> 

<!-- 재실행 -->
<button class="hello" onclick="buttonClicked()">button</button> 

```

```javascript
funtion buttonClicked() {
  button.classList.toggle('clicked');
}
```
- 인자가 하나일 때, **class값을 토글링** 한다.
- 인자로 사용된 **class값이 존재**하면 해당 **class값을 제거하고 false를 반환**한다.
- 인자로 사용된 **class값이 존재하지 않으면**, **class값을 추가하고 true를 반환**한다. 


<br><br>


> 두번째 인자가 존재 할 때 ```element.classList.toggle('className', true or false);```
```html
<!-- 실행 전  -->
<button class="hello" onclick="buttonClicked()">button</button> 

<!-- 실행 후  -->
<button class="hello clicked" onclick="buttonClicked()">button</button> 


```

```javascript
funtion buttonClicked() {
  button.classList.toggle('clicked', true);
}
```
- 두번째 값이 **true**일 경우, 인자로 사용된 **class값을 추가**한다.
- **false**일 경우, **class값을 제거**한다.  


<br>

## 클래스 확인 ```element.classList.contains('className')```
- 인자로 사용된 class값이 존재하는지 확인한다.
- **class값이 존재하면 true, 존재하지 않으면 false를 반환**한다.

``` html
<div class="title greeting">
  <h1>Hello World!</h1>
</div>

```

```javascript
div.classList.contains('hello'); // false
div.classList.contains('title'); // true

```


<br>

## 클래스 교체 ```element.classList.replace('className')```
- 존재하는 class 속성 값을 다른 class값으로 교체한다. 
- **교체할 class 값을 첫번째, 새로운 class 값을 두번째 인자**로 받는다.

```html
<!-- 변경 전  -->
<div class="title greeting">
  <h1>Hello World!</h1>
</div>

<!-- 변경 후  -->
<div class="title hello">
  <h1>Hello World!</h1>
</div>

```

```javascript
div.classList.replace('greeting', 'hello');

```


<br>

#### 참고
https://hianna.tistory.com/469

https://ko.javascript.info/styles-and-classes

https://velog.io/@ssumniee/JS-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%AA%85-%EC%B6%94%EA%B0%80-%EC%82%AD%EC%A0%9C


