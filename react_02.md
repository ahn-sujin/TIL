# React에 관하여2

# 목차 
[1. 리액트가 없다면](#1-리액트가-없다면)

[2. 컴포넌트 만들기1](#2-컴포넌트-만들기1)

[3. 컴포넌트 만들기2](#3-컴포넌트-만들기2)

## 1. 리액트가 없다면 
```html
<html>
    <body>
        
        <header>
            <h1>WEB</h1>
            world wide web!
        </header>
        
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JAVASCRIPT</a></li>
            </ul>
        </nav>
            
        <article>
            <h2>HTML</h2>
            HTML is Hyper Text Markup Language.
        </article>

    </body>
</html>
```

### WEB

###### world wide web!

* HTML
* CSS
* JAVASCRIPT

#### HTML

###### HTML is Hyper Text Markup Langage.


* 코드가 길어지면 복잡해짐으로 관리하기가 어렵다.


## 2. 컴포넌트 만들기1
### 2-1. 컴포넌트 만드는 기본 틀 
```javascript 
class App extends Component {
  render() {
    return (
      
      
    );
  } 
}
```
* return 안에서 원하는 코드를 짜면 된다. 
* 컴포넌트를 만들 때, 반드시 최상위 태그로 시작해야 한다. 

### 2-2. header영역 컴포넌트 
```javascript 
class Subject extends Component{
  render(){
    return(
      <header>
            <h1>WEB</h1>
            world wide web!
      </header>
    );
  }
}
```
### 2-3. nav영역 컴포넌트 
```javascript 
class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JAVASCRIPT</a></li>
        </ul>
      </nav>
    );
  }
}
```

### 2-4. article영역 컴포넌트 
```javascript 
class Content extends Component{
  render(){
    return(
      <article>
          <h2>HTML</h2>
          HTML is Hyper Text Markup Language.
      </article>
    );
  }
}
```

## 3. 컴포넌트 만들기3
### 3-1. 최종 결과물 
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>  
      </div>
    );
  }
}
```


### WEB

###### world wide web!

* HTML
* CSS
* JAVASCRIPT

#### HTML

###### HTML is Hyper Text Markup Langage.


*  동일한 화면을 react컴포넌트 없이 순수 html로 코드를 짰을 때 보다 훨씬 더 간편한 코드를 볼 수 있다.




