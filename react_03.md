# 💡React 이벤트 생성 

## 📝목차 
[01. 이벤트 state props 그리고 render함수](#01-이벤트-state-props-그리고-render함수)


[02. 이벤트 설치](#02-이벤트-설치)


[03. 이벤트 state 변경하기](#03-이벤트-state-변경하기)


[04. 이벤트 bind함수 이해하기](#04-이벤트-bind함수-이해하기)


[05. 이벤트 setState함수 이해하기](#05-setstate함수-이해하기)


[06. 컴포넌트 이벤트 만들기](#06-컴포넌트-이벤트-)

<br><br>

## 01. 이벤트 state props 그리고 render함수 
* 역동성 있는 사이트를 만들기 위한 요소 
  - 이벤트 
  - state
  - props

* 페이지의 구분(web, html, css, javascript)을 위해서 stat에 mode 값 설정 
```javascript 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'welcome' , desc:'Hello React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text Markup Language.'},
        {id:2, title:'CSS', desc:'CSS id for design'},
        {id:3, title:'JavaScript', desc:'JavaScript id for interactive'}
      ]
    }
  }

  render() {
    var _titls , _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read' ){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
  
    return (

      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>

    );
  }
  
}

```

* props 또는 state의 값이 바뀌면, 해당되는 컴포넌트의 render함수가 다시 호출된다

  => 화면이 다시 그려진다
  
* render 함수: 어떤 html을 그릴 것인지 결정하는 역할 


<br><br>

## 02. 이벤트 설치 
* 버튼(web)을 클릭했을 때, 해당 값 호출 
* onclick : 순수 자바스크립트 코드 / onClick : 리액트 코드 
* debugger;  : debugger를 사용한 부분에서 실행이 멈춤 (개발자 도구에서 확인 가능) 
* e.preventDefault  : 이벤트의 기본 동작을 막음 ex) a태그의 기본적이 동작방법(리로드)을 못하게 막음 

```javascript 
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'world wide web!'},
      welcom:{title:'welcome', desc:'Hello React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text Markup Language.'},
        {id:2, title:'CSS', desc:'CSS id for design'},
        {id:3, title:'JavaScript', desc:'JavaScript id for interactive'}
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (

      <div className="App">
        <header>
              <h1 a href="/" onClick={function(e){
                console.log(e);
                e.preventDefault();
              }}>{this.state.subject.title} </h1>
              {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>  
      </div>
      
    );
  }
  
}

```

<br><br>

## 03. 이벤트에서 state변경하기 

### 03-1) bind 함수 
* this.state.mode = 'welcome';  에러 발생   
* 이벤트가 호출됐을 때, 실행되는 함수 안에서 this의 값은 아무 값도 설정 되어 있지 않는다. 
* 함수 마지막에 .bind(this)를 추가한다. 

### 03-2) setState 함수 
* this.state.mode = 'welcome';  리액트에서 인지하지 못함, 값 변경X 
* this.setState({mode:'welcome'});  코드로 변경하여 입력 

```javascript 

return (

      <div className="App">
        <header>
              <h1 a href="/" onClick={function(e){
                console.log(e);
                e.preventDefault();
                // this.state.mode = 'welcome';
                this.setState({
                  mode:'welcome'
                });
              }.bind(this)}>{this.state.subject.title} </h1>
              {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>  
      </div>
      
    );

```

<br><br>

## 04. 이벤트 bind함수 이해하기 
* render함수 안에서 this는 컴포넌트 자신을 가르킨다. 
* 하지만, render함수 안에 있는 함수에 this를 호출했을 때, this값이 아무것도 없이 호출되는 경우가 발생한다.
* 함수 안에 this값이 없을 때, .bind(this)를  해당 함수 마지막에 추가한다. 

```javascript 
<h1 a href="/" onClick={function(e){
   this.state.mode = 'welcome';
}.bind(this)}>

```

<br><br>

## 05. 이벤트 setState함수 이해하기 
* 컴포넌트 생성 후 , 동적으로 state 값을 변경 할 때,  this.state.mode = 'welcome';  사용 불가
* 리액트가 변경 값을 인지 할 수 없음 (렌더가 호출되지 않음)
* this.state.mode = 'welcome';   =>   this.setState({ mode: 'welcome'; })
* state의 값이 바뀌면 setState 함수 사용 

* constructor함수에서 변경 할 때, this.state.mode = 'welcome';  사용 가능

```javascript 
<h1 a href="/" onClick={function(e){
   this.setState({
        mode:'welcome'
    });
}.bind(this)}>

```

<br><br>

## 06. 컴포넌트 이벤트 만들기
* 컴포넌트의 이벤트 생성 onChangePage 
* 이벤트 'onChagePage' 안에 실행할 함수 입력
* 컴포넌트 안에서 링크 클릭했을 때, 이벤트에 설치한 함수를 호출

### 06-1. Subject 이벤트 

* App.js
```javascript 

return (

      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>  
      </div>
      
    );

```
* Subject.js
```javascript

class Subject extends Component{
    render(){
      return(
        <header>
              <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1>
              {this.props.sub}
        </header>
      );
    }
  }


```

### 06-2. TOC 이벤트

* App.js
```javascript 
return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        
        <TOC 
          onChangePage = {function(){
            this.setState({mode:'read'});
          }.bind(this)}
          data={this.state.contents}
          ></TOC>
         
        <Content title={_title} desc={_desc}></Content>  
      </div>
    );

```
* TOC.js
```javascript 
class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
      
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}
            > {data[i].title}</a>
          </li>
        );
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

### 06-3. TOC 이벤트 실행 
* App.js
``` javascript 

return (

      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        
        <TOC 
          onChangePage = {function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
          ></TOC>
        <Content title={_title} desc={_desc}></Content>  
      </div>
      
    );

```


* TOC.js
``` javascript 

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            > {data[i].title}</a>
          </li>
        );
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

* break;  실행되는 순간 조건문이 끝나고, 조건문 밖에 있는 코드가 실행됨 
* 'e'이벤트 객체 속성 

  - target : 이벤트가 발생한 태그를 가르킨다
  - target.dataset : data[i].id의 값을 가져온다.
  - e.target.dataset.id

* Number() : 문자를 강제로 숫자로 바꿔준다 


