## 스타일과 클래스

#### 요소에 스타일을 적용 할 수 있는 방법은 두가지가 있다.
1. CSS에 클래스를 만들고, 요소에 ```<div class="...">```처럼 클래스 추가하기
2. ```<div style="...">```처럼 프로퍼티를 ```style```에 바로 써주기

- 자바스크립트를 사용하면 **클래스**와 **style** 프로퍼티 둘 다를 수정할 수 있다. 
- style 보다 **CSS 클래스를 수정하는 것을 더 우선시**해야 한다. 
- style은 클래스를 '다룰 수 없을 때’만 사용해야 한다.
- **style**은 아래와 같이 자바스크립트를 사용해 요소의 **좌표를 동적으로 계산하고, 계산한 좌표를 설정해주고자 할 때 사용**하면 좋다.
- 텍스트를 빨간색으로 만든다거나 배경에 이미지를 추가하는 등의 작업은 자바스크립트를 사용해 **클래스를 요소에 추가해 주는 방식**이 좋다.

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

> 변경전
```html
<div class="greeting title">
  <h1>Hello World!</h1>
</div>

```

> 변경 후
```javascript
div.className = 'hello';

```

```html
<div class="hello">
  <h1>Hello World!</h1>
</div>

```

### classList
- 속성값 전체를 바꾸는 것이 아니라 클래스 하나만 추가하거나 제거하고 싶을 때 사용한다.
- ```element.classList.add/remove('class명') ``` :  class를 추가하거나 제거
- ``` element.classList.toggle('class명') ``` : class가 존재할 경우 class를 제거하고, 그렇지 않은 경우엔 추가
- ``` element.classList.contains('class명') ``` : class 존재 여부에 따라 true/false를 반환

<br>

## 클래스 추가 ```element.classList.add('className')```
- HTML 엘리먼트가 가진 기존 class속성을 유지한채, 새로운 class 을 추가한다. 

> 변경전
```html
<div class="greeting title">
  <h1>Hello World!</h1>
</div>

```

> 변경 후
```javascript
div.className = 'hello';

```

```html
<div class="hello">
  <h1>Hello World!</h1>
</div>

```

<br>

## 클래스 삭제 ```element.classList.remmove('className')```


<br>

## 클래스 토글 ```element.classList.toggle('className')```


<br>

## 클래스 확인 ```element.classList.contains('className')```


<br>

## 클래스 교체 ```element.classList.replace('className')```




<br>

#### 참고
https://hianna.tistory.com/469

https://ko.javascript.info/styles-and-classes

https://velog.io/@ssumniee/JS-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%AA%85-%EC%B6%94%EA%B0%80-%EC%82%AD%EC%A0%9C


