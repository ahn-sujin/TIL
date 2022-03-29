```javascript
function Person(){}

let Person = new Function();
```
- 자바스크립트는 함수의 **객체**이다.
- **프로퍼티**를 가질 수 있고 위와 같이 나타낼 수 있다. 

<br>

```javascript
function Person(name,first,second){
  this.name = name;
  this.first = first;
  this.second = second;
}

```
- 위와 같이 ```Person```라는 함수를 생성하면 **```Person```객체** 와 **```Person```의 ```prototype```객체**가 생성된다. 
