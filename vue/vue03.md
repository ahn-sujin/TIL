# 💡뷰 템플릿 & 뷰 프로젝트 구성 방법

## 📝목차 
[01. 뷰 템플릿](#01-뷰-템플릿)


[02. 뷰 프로젝트 구성 방법](#02-뷰-프로젝트-구성-방법)


<br><br>

## 01. 뷰 템플릿
### 01-1. 뷰 템플릿이란?
* 뷰의 템플릿은 HTML,CSS 등의 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결하여 사용자가 브라우저에서 볼 수 있는 형태의 HTML로 변환해 주는 속성이다.

* template 속성을 사용하지 않는 경우 
```html
<div id="app>
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

* template 속성을 사용한 경우
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



	      
<br><br>
						  
						  
#### 참고 do it vue.js
