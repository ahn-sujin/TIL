## 구조 분해 문법(Destructuring)
-  **디스트럭처링** 이라고 불리며, 객체와 배열의 구조를 분해하여 표현하는 ES6 문법이다.

<br>

### 특정 객체의 값을 꺼내오는 방법

> 기존 방법
```javascript
const josh = {
  language: 'javascript',
  position: 'front-end',
  area: 'pangyo',
  hobby: 'singing',
  age: 102
};

const language = josh.language;
const position = josh.position;
const area = josh.area;
const hobby = josh.hobby;
const age = josh.age;

console.log(language) // javascript
console.log(position) // front-end
console.log(age) // 102

```
- 객체의 특정 속성 값을 꺼내올 때마다 일일이 변수를 생성하고 담아줘야한다. 
- 단순 반복을 계속 해줘야하며, 코드가 길어 질 수 있다. 

<br>

> 구조 분해 문법 적용
```javascript
const josh = {
  language: 'javascript',
  position: 'front-end',
  area: 'pangyo',
  hobby: 'singing',
  age: 102
};

const { language, position, area, hobby, age } = josh

console.log(language) // javascript
console.log(position) // front-end
console.log(hobby) // singing

```
- 구조 분해 문법을 사용하면 더 간결하게 사용할 수 있다.

<br>

### vue에 적용하는 구조 분해 문법

> 적용전
```javascript
actions: {
  fetchData(context) {
    context.commit('addProducts');
  }
}

```

<br>

> 적용후
```javascript
actions: {
  fetchData({ commit }){
    commit('addProducts')
  }
}

```














