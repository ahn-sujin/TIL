# React에 관하여2

# 목차 
[1. 리액트가 없다면](#1-리액트가-없다면)

[2. 컴포넌트 만들기1](#2-컴포넌트-만들기1)

[3. 컴포넌트 만들기2](#3-컴포넌트-만들기2)

[4. props](#4-props)

[5. React Develper Tools](#5-react-develper-tools)

[6. 컴포넌트 파일로 분리하기](#6-컴포넌트-파일로-)

[7. State소개](#7-state소개)

[8. State사용](#8-state사용)

[9. key]()

## 1. 리액트가 없다면 
* 코드가 길어지면 복잡해짐으로 관리하기가 어렵다.


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

## 3. 컴포넌트 만들기2
### 3-1. 최종 결과물


*  동일한 화면을 react컴포넌트 없이 순수 html로 코드를 짰을 때 보다 훨씬 더 간편한 코드를 볼 수 있다.


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


## 4. props
* 컴포넌트의 속성 값 
* props를 설정하기 전에는 하나의 태그는 언제나 똑같은 값만 출력됨 
* porps를 이용하여 입력값에 따라 출력 값이 달라 질 수 있음.
* 하나의 태그(subject)에 다른 props값 (title = " " , sub = " ")을 주어서 출력 값을 다르게 할 수 있다.
* 간단해진 코드 
* [사용 방법](https://reactjs.org/docs/components-and-props.html)

* 기본 포맷
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

* 적용 예 
```javascript 
class Subject extends Component{
    render(){
      return(
        <header>
              <h1>{this.props.title}</h1>
              {this.props.sub}
        </header>
      );
    }
 }
 
 class Content extends Component{
    render(){
      return(
        <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
      );
    }
}

class App extends Component {
  render() {
    return (

      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}
 
```

### WEB

###### world wide web!

### React

###### For UI

#### HTML

###### HTML is Hyper Text Markup Langage.

 


## 5. React Develper Tools
* 개발자 도구에서 컴포넌트를 볼 수 있음 (리액트 분석 가능) 
* [설치 사이트](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler)


## 6. 컴포넌트 파일로 분리하기
* 컴포넌트 폴더 생성 후 파일을 분리하면 관리 및 외부 사용이 편리하다. 

* App.js
```javascript 
import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}
export default App;
```

* component > Subject.js
```javascript
import React, { Component } from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
              <h1>{this.props.title}</h1>
              {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;
```

* component > Content.js
```javascript
import React, { Component } from 'react';

class Content extends Component{
    render(){
      return(
        <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
      );
    }
}

  export default Content;
```

* component > TOC.js
```javascript
import React, { Component } from 'react';

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

export default TOC;
```

* import React, { Component } from 'react';

  - js파일에서 react 컴포넌트 설정 할 때, 첫 줄에 선언 (파일오류방지)
  
* export default class명;

  - 위해서 설정한 class를 외부에서 사용할 수 있도록

## 7. State 소개
* Props: 사용자가 컴포넌트를 사용하는 입장에서 중요한 것 (사용하는 쪽)
* State: props값에 따라서 내부의 구현에 필요한 데이터들 (구현하는 쪽)

## 8. State 사용
```javascript
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Subject:{title:'WEB', sub:'world wide web!'}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}
```

* 어떤 컴포넌트가 실행 될 때, render함수 보다 먼저 실행이 되면서 컴포넌트를 초기화시켜 주고 싶은 코드는

  constructor 안에다가 코드를 작성한다.
  
  => 컴포넌트가 실행 될 때, constructor함수는 제일 먼저 실행되어서 초기화를 담당한다.

* 리액트에서 props에서 따옴표(" ")로 묶어주면 문자 처리
* 자바스크립트 코드로 실행 되게 하려면 { } 사용
* 상위 컴퍼넌트의 상태를 하위 컴퍼넌트로 전달하고 싶을 때, 상위 컴퍼넌트의 state값을 하위 컴퍼넌트의 props값으로 전달 가능!



## 9. key
* property에 여러 값을 줄 경우 

* App.js
```javascript 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text Markup Language.'},
        {id:2, title:'CSS', desc:'CSS id for design'},
        {id:3, title:'JavaScript', desc:'JavaScript id for interactive'}
      ]
    }
  }

  render() {
    return (

      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}

```

* TOC.js 
```javascript 

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
  }

```


* TOC안에 있는 데이터들을 App의 내부 state에 TOC에 주입 해주는 것을 통해 자동으로 데이터가 바뀌도록 처리
* TOC의 부모가 갖고 있는 state를 이용해서 TOC의 내부 데이터가 바뀌도록 처리
* 주의할 점

  - 여러개의 elements를 자동으로 생성하는 경우, 콘솔 에러가 발생 할 수 있음 
  - Each child in a list should have a unique "key" prop. 
  - 이런 경우, lists.push<li>의 key 값을 정해 줘야 함 (리액트에서 요청하는 것) 


  
