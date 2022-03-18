## addEventListener 오류 해결방법

<br>

> Uncaught TypeError: Cannot read property 'addEventListener' of null

[!image]()

<br>

### 💥에러 원인
  - script를 body의 상단에 작성하게 되면, 간혹 **html이 로드 되기 전에 script를 먼저 불러와버리는 경우**가 생긴다. 
  - 그렇게 되면 **addEventListener을 부여할 DOM을 찾지 못하게 되어** 에러가 발생하게 된다. 

<br>

### 🔅해결방법

#### 1. script는 body태그의 가장 아래에 작성한다. (내가 사용한 방법😁)
- body태그 하단에 js를 작성하면 html이 먼저 로드되고, js 가 그 다음 로드되기 때문에 오류가 발생하지 않는다

<br>

> 변경 전
``` html
<!DOCTYPE html>
<html>
<head>
    <script src="myscript.js"></script>
</head>
<body>
    <input type="button" id="hw" value="Hello world" />
</body>
</html>
```

> 변경 후
``` html
<!DOCTYPE html>
<html>
<head>
  // body태그 제일 아래로 이동
</head>
<body>
    <input type="button" id="hw" value="Hello world" />
  
    <script src="myscript.js"></script> 
</body>
</html>
```
<br>

#### 2. window.onload = function(){} 사용한다.
- ```window.onload = function(){}``` 함수는 **웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수**로,
해당 부분에 넣으면 HTML을 모두 로드한 뒤에 함수를 호출한다.
- head태그 내부에 script 영역을 참조하는 부분이 있지만, window.onload 함수 내부에 문제가 되는 함수를 넣어줌으로써 해결할 수 있다.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="script2.js"></script>
</head>
<body>
    <input type="button" id="hw" value="Hello world" />
</body>
</html>
```

```javascript
window.onload = function(){
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
}
```
