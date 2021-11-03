# 💡라우터 & HTTP통신

## 📝목차 
[01. 뷰 라우터](#01-뷰-라우터)


[02. 뷰 HTTP 통신](#02-뷰-HTTP-통신)


<br><br>

## 01. 뷰 라우터
### 01-1. 라우팅이란?
* 웹페이지 간의 이동 방법, 싱글 페이지 애플리케이션(SPA)에서 주로 사용
* 브라우저에서 웹 페이지를 요청하면 서버에서 응답을 받아 웹 페이지를 다시 사용자에세 돌려주는 시간 동안 화면 상에 깜빡거림 현상없이 매끄러운 전환 가능

### 01-2. 뷰 라우터
* 뷰에서 라우팅 기능을 구현할 수 있도록 지원하는 공식 라이브러리
* 뷰로 만든 페이지 간에 자유롭게 이동할 수 있다.
* ```<router-link to = "URL값">``` : 페이지 이동 태그/ 화면에서는<a>로 표시되며 클릭하면 to에 지정한 URL로 이동
* ```<router-view>``` : 페이지 표시 태그/ 변경되는 URL에 따라 해당 컴포넌트를 뿌려주는 영역
```html
<div id="app">
    <h1></h1> 
    <p>
        <!-- URL 값을 변경하는 태그 -->
        <router-link to="/main"><button type="button">Main 컴포넌트로 이동</button></router-link>
        <router-link to="/login"><button type="button">Login 컴포넌트로 이동</button></router-link>
    </p>
    <!-- URL 값에 따라 갱신되는 화면 영역 -->
    <router-view></router-view>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 라우터 CDN -->
<script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>

<script>
    // Main, Login 컴포넌트 정의
    var Main = {template : '<div>main</div>'}
    var Login = {template : '<div>login</div>'}

    // 각 URL에 맞춰 표시할 컴포넌트 지정
    var routes = [
        {path: '/main', component: Main},
        {path: '/login', component: Login}
    ];

    // 뷰 라우터 정의
    var router = new VueRouter({
        mode : 'history', // 라우터 URL의 해시 값(#) 없애기
        routes
    });

    // 뷰 인스턴스에 라우터 추가
    var app = new Vue({
        router
    }).$mount('#app');
</script>  
```
✋ **$mount( )**  
```
- el속성과 동일하게 인스턴스를 화면에 붙이는 역할
- 인스턴스를 생성할 때 el송성을 넣지 않았더라도 생성하고 나서 $mount( )를 이용하면 강제로 인스턴스를 화면에 붙일 수 있다
- 뷰 라우터의 공식문서에서는 모두 인스턴스 안에 el을 지정하지 않고 라우터만 지정하여 생성하여 $mount( )를 이용한다 
```		
[결과물 보기](http://frontend-asj.coding.onlinepowers.com/vue/router/router01.html)
	

### 01-3. 네스티드 라우터
* 라우터로 페이지 이동할 때, 최소 2개 이상의 컴포넌트를 화면에 나타낼 수 있다.
* 화면을 구성하는 컴포넌트의 수가 적을 때는 유용하지만 한 번에 많은 컴포넌트를 표시하는데는 한계가 있다.
```html
<div id="app">
    <!-- URL 값에 따라 갱신되는 화면 영역 -->
    <router-view></router-view><!-- user 컴포넌트가 뿌려질 영역 -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 라우터 CDN -->
<script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>

<script>
    // ====== 컴포넌트 내용 정의 S ====== //
    var User = {
        template : `
            <div>
                User Comonent
                <router-view></router-view>  
            </div>
        `
    };
    var UserProfile = { template: '<p>User Profile Component</p>' };
    var UserPost = { template: '<p>User Post Component</p>' };
    // ====== 컴포넌트 내용 정의 E ====== //

    // ====== 네스티드 라우팅 정의 S ====== //
    var routes = [
        {
            path:'/user',
            component: User,
            children: [
                {
                    path: 'posts',
                    component : UserPost
                }, 
                {
                    path: 'profile',
                    component : UserProfile
                },
            ]
        }  
    ];
    // ====== 네스티드 라우팅 정의 E ====== //

    // ====== 뷰 라우터 정의 S ====== //
    var router = new VueRouter({
        routes
    });
    // ====== 뷰 라우터 정의 E ====== //

    // ====== 뷰 인스턴스에 라우처 추가 S ====== //
    var app = new Vue({
        router
    }).$mount('#app');
    // ====== 뷰 인스턴스에 라우처 추가 E ====== //
</script>	
```
	
[결과물 보기](http://frontend-asj.coding.onlinepowers.com/vue/router/router02.html)
* 첫 화면에는 아무것도 보이지 않으므로 **URL값의 끝에 user를 입력**한다.	
	
### 01-4. 네임드 뷰
* 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 표시하는 라우팅 방식
* 네스티드 라우터가 상위 컴포넌트가 하위 컴포넌트를 포함하는 형식이라면, 네임드 뷰는 오른쪽 그림처럼 같은 레벨에서 여러 개의 컴포넌트를 한 번에 표시한다.
	
```html
<div id="app">
    <!-- URL 값에 따라 갱신되는 화면 영역 -->
    <!-- name속성은 아래 components 속성에 정의하는 컴포넌트와 매칭하기 위한 속성 -->
    <!-- name속성이 없을 때, default로 표시될 컴포넌트 의미 -->
    <router-view name="header"></router-view> 
    <router-view></router-view>
    <router-view name="footer"></router-view>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 라우터 CDN -->
<script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>

<script>
    // ====== 컴포넌트 내용 정의 S ====== //
    var Body = { template: '<div>This is Body</div>'};
    var Header = { template: '<div>This is Header</div>'};
    var Footer = { template: '<div>This is Footer</div>'};

    // ====== 컴포넌트 내용 정의 E ====== //

    // ====== 뷰 라우터 정의 S ====== //
    var router = new VueRouter({
        routes : [
            {
                path: '/',
                components : {
                    default: Body,
                    header: Header,
                    footer: Footer
                }
            }
        ]
    });
    // ====== 뷰 라우터 정의 E ====== //

    // ====== 뷰 인스턴스에 라우터 추가 S ====== //
    var app = new Vue({
        router
    }).$mount('#app');
    // ====== 뷰 인스턴스에 라우터 추가 E ====== //
</script>	
	
```
[결과물 보기](http://frontend-asj.coding.onlinepowers.com/vue/router/router03.html)
	
<br><br>

## 02. 뷰 HTTP 통신 
### 02-1. HTTP통신 방법
* HTTP는 브라우저와 서버 간에 데이터를 주고받는 통신 프로토콜(컴퓨터간 통신을 위해 상호간 정의한 규칙)이다
* 브라우저에서 특정 데이터를 보내달라고 요청 보내면, 서버에서 응답으로 해당 데이터를 보내주며 동작
* 제이쿼리, ajax
* ajax는 받아온 데이터를 표기할 때 화면 전체를 갱신하지 않고도 화면의 일부분만 변경 가능
* 뷰 라이브러리 : 뷰 리소스, 액시오스(axios)
  
### 02-2. 뷰 리소스
```html
<div id="app">
    <button v-on:click="getData">프레임워크 목록 가져오기</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 뷰 리소스 CDN -->
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
<script>
    new Vue({
        el:'#app',
        methods: {
            getData: function() {
                this.$http.get(`https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json`)
                .then(function(response){
                    console.log(response);
                    console.log(JSON.parse(response.data)); // 객체 전환
                });
            }
        }
    });
</script>	
```
[결과물 보기](http://frontend-asj.coding.onlinepowers.com/vue/http/index01.html)	
	
	
### 02-3. 액시오스
```html
<div id="app">
    <button v-on:click="getData">프레임워크 목록 가져오기</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 뷰 리소스 CDN -->
<!-- <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script> -->
<!-- 액시오스 라이브러리 로딩 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el:'#app',
        methods: {
            getData: function() {
                axios.get(`https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json`)
                .then(function(response){
                    console.log(response);
                });
            }
        }
    });
</script>		
```
[결과물 보기](http://frontend-asj.coding.onlinepowers.com/vue/http/index02.html)
	      
<br><br>
						  
						  
#### 참고 do it vue.js						  

