# 💡뷰 템플릿 & 뷰 프로젝트 구성 방법

## 📝목차 
[01. 뷰 템플릿](#01-뷰-템플릿)


[02. 뷰 프로젝트 구성 방법](#02-뷰-프로젝트-구성-방법)


<br><br>

## 01. 뷰 템플릿
### 01-1. 뷰 템플릿이란?
* 뷰의 템플릿은 HTML,CSS 등의 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결하여 사용자가 브라우저에서 볼 수 있는 형태의 HTML로 변환해 주는 속성이다.


```html
<div id="app">
         <h3>{{message}}}}</h3> 
</div>
<script>
	 new Vue({
	 	el:'#app', 
	 	data:{
	 		message: 'Hello Vue.js!'
	 	}
	 });
</script> 
```
> template 속성을 사용하지 않는 경우 

```html
<div id="app"></div>

<script>
	new Vue({
		el:'#app',
		data: {
		  message: 'Hello Vue.js!'	
		},
		template: '<h3>{{ message }}</h3>'
	});
</script>
```
> template 속성을 사용한 경우

### 01-2. 데이터 바인딩
* 데이터 바인딩은 HTML화면 요소를 뷰 인스턴스의 데이터와 연결하는 것을 의미 
	```html
	<div id="app" v-once>
		{{ message }}
	</div>
	
	<script>
		new Vue({
			el: '#app',
			data:{
			  message:'Hello vue.js!'
			}
		})
	</script>
	```
	> **{{ }} - 콧수염 괄호**
	- 뷰 인스턴스의 데이터를 HTML 태그에 연결하는 가장 기본적인 텍스트 삽입 방식이다.
	- data 속성의 message 값이 바뀌면 뷰 반응성에 의해 화면이 자동으로 갱신된다.
	- 뷰 데이터가 변경되어도 값을 바꾸고 싶지 않을 때, v-once 속성을 사용한다. 

	<br><br>
	
	```html
	<div id="app">
		<p v-bind:id="idA">아이디 바인딩</p>
		<p v-bind:class="classA">클래스 바인딩</p>
		<p v-bind:style="styleA">스타일 바인딩</p>
	</div>
	
	<script>
		new Vue({
			el:'#app',
			data:{
			    idA: 10, 
			    classA: 'container', 
			    styleA: 'color:blue'
			}
		});
	</script>
	```
	> **v-bind**
	- 아이디, 클래스, 스타일 등의 HTML속성 값에 뷰 데이터 값을 연결할 때 사용하는 데이터 연결 방식이다.
	- 'v-bind:' 문법을 ':'로 간소화할 수 있다.
	
### 01-3. 자바스크립트 표현식
* 데이터 바인딩 방법 중 하나인 {{ }}안에 자바








### 01-4. 디렉티브

### 01-5. 이벤트 처리







## 02. 뷰 프로젝트 구성 방법
















	      
<br><br>
						  
						  
#### 참고 do it vue.js
