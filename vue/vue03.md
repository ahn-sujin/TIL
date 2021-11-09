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

<br>

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

<br>

### 01-3. 자바스크립트 표현식
* 데이터 바인딩 방법 중 하나인 **{{ }}** 안에 자바스크립트 표현식을 넣으면 된다.


```html
<div id="app">
    <p>{{message}}</p>
    <p>{{message + '!!!'}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el:'#app',
        data: {
            message: 'Hello Vue!'
        }
    });
</script>
```

<br>

☝ **자바스크립트 표현식에서 주의할 점**
- 자바스크립트의 선언문과 분기 구문은 사용할 수 없다.
- 복잡한 연산은 인스턴스 안에서 처리하고 화면에는 간단한 연산 결과만 표시해야한다.

```html
<div id="app">
    {{ var a = 10; }} <!-- X, 선언문은 사용 불가능  -->
    {{ if (true) {return 100} }} <!-- X, 분기 구문은 사용 불가능 -->
    {{ true ? 100 : 0 }} <!-- O, 삼항 연산자로 표현 가능 -->

    {{ message.split('').reverse().join('') }} <!-- X, 복잡한 연산은 인스턴스 안에서 수행 -->
    {{ reversedMessage }} <!-- O, 스크립트에서 computed 속성으로 계산한 후 최종 값만 표현 -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({ 
        el:'#app',
        data: {
            message: 'Hello Vue!'
        },
        computed : { //데이터 속성을 자동으로 계산해 주는 속성
            reversedMessage :  function() { // {{ reversedMessage }}에 표현되지 전에 연산을 수행하는 함수
                return this.message.split('').reverse().join('');
            }
        }
    });
</script>
```

<br>

### 01-4. 디렉티브
* 뷰 디렉티브(Directive)란 HTML태그 안에 v- 접두사를 가지는 모든 속성을 의미한다
* 화면의 요소를 더 쉽게 조작하기 위해 사용하는 기능이다
* 뷰 데이터 값이 변경되었을 때 화면의 요소들이 반응하여 변경된 데이터 값에 따라 갱신된다.
* 화면 요소를 직접 제어할 필요 없이 뷰의 디렉티브를 활용하여 요소들을 조작할 수 있다.

<figure>
    <table>
        <thead>
            <tr>
                <th>디렉티브 이름</th>
                <th>역할</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>v-if</td>
                <td>지정한 뷰 데이터 값에 참, 거짓 여부에 따라 해당 html 태그를 화면에 표시하거나 표시하지 않는다.</td>
            </tr>
            <tr>
                <td>v-for</td>
                <td>지정한 뷰 데이터의 개수만큼 해당 html태그를 반복 출력한다.</td>
            </tr>
		 <tr>
                <td>v-show</td>
                <td>v-if와 유사하게 데이터의 진위 여부에 따라 해당 html 태그를 화면에 표시하거나 표시하지 않는다. 다만, v-if는 해당 태그를 완전히 삭제 하지만 v-show는 display:none 처리를 하여 태그는 남아있고 화면 상에만 보이지 않게 된다.</td>
            </tr>
            <tr>
                <td>v-bind</td>
                <td>html 태그의 기본 속성과 뷰 데이터 속성을 연결한다. </td>
            </tr>
		 <tr>
                <td>v-on</td>
                <td>화면 요소의 이벤트를 감지하여 처리할 때 사용한다. 예를 들어 v-on:click은 해당 태그의 클릭 이벤트를 감지하여 특정 매서드를 실행 할 수 있다.</td>
            </tr>
            <tr>
                <td>v-model</td>
                <td>폼(form)에서 주로 사용되는 속성이다. 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화 한다. 화면에 입력된 값을 저장하여 서버에 보내거나 추가 로직을 수행할 수 있다. input, selsect, textarea 태그에만 사용할 수 있다.</td>
            </tr>
        </tbody>
    </table>
</figure>


<br>


### 01-5. 이벤트 처리






<br><br>

## 02. 뷰 프로젝트 구성 방법
















	      
<br><br>
						  
						  
#### 참고 do it vue.js
