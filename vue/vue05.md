# 💡뷰엑스(Vuex), 뷰의 반응성(Vue Reactivity)

<br>

## 📝목차 
### [01. Vuex(뷰엑스)](#01-Vuex(뷰엑스))

### [02. Vue Reactivity(뷰의 반응성)](#02-Vue-Reactivity(뷰의-반응성))

<br>

## 01. Vuex(뷰엑스)
    애플리케이션의 상태 관리(state management)를 돕는 라이브러리

### 상태란? 
  - 특정 데이터를 여러 컴포넌트가 공유하고 있을 때, 그 데이터를 **상태**라고 한다.

### 상태 관리가 필요한 이유? 
- 컴포넌트가 너무 많이 존재할 때 

  - props로 데이터를 전달 한다고 할 때, 사이에 있는 모든 컴포넌트에 props를 설정해 줘야한다.
  - 만약 데이터 이름을 바꾸기라고 한다면 관리가 힘들어 진다.

- 데이터 흐름 규칙이 정해져 있지 않을 때   

  - props 대신 이벤트 버스를 활용한다고 가정했을 때, 상-하위 간의 데이터 전달 구조를 따르지 않고도 한 번에 컴포넌트간 데이터를 보낼 수 있다.
  - 하지만, 단방향 데이터 흐름이 아닌 셀 수 없이 많은 데이터 이름이 될 수 있다. 
  - 컴포넌트 간 데이터 통신이 어디서 와서 어디로 가는지 파악하기 어렵게 된다.

### 상태 관리
- 에플리케이션에서 사용하는 모든 데이터를 중앙에서 관리하여 크기가 큰 애플리케이션의 데이테를 효율적으로 관리한다. 
  ![image](img/vuex-diagram.png) 
  #### vuex 전체 흐름도

<br> 

### [👉vuex 더 살펴보기](https://github.com/ahn-sujin/vuex-test/blob/master/README.md)  

<br>

## 02. Vue Reactivity(뷰의 반응성)
    뷰가 데이터 변화를 감지하고 자동으로 화면을 갱신하는 특성

- 프레임워크 내부적으로 화면을 그리는 방법, 가상 돔이 동작하는 방법, 화면을 빠르게 그리기 위해 브라우저에 부하를 주지 않고 돔을 추가,삭제 하는 방법을 익힐 수 있다.

### 뷰에서 자동으로 화면을 갱신하는 원리
- getter, setter
  - 애플리케이션을 구현하려면 인스턴스를 생성한다.
  - 인스턴스가 생성될 때, data속성에 정의 된 객체들은 변환 작업을 거친다.
  - 라이브러리에서 data에 정의된 모든 속성(객체)을 **getter,setter** 의 형태로 변환한다. 
  - getter와 setter는 사용자가 접근할 수 있는 속성이 아니고, 뷰 인스턴스에 정의해 놓은 data 속성에 변화가 생길 때 뷰에서 감지하기 위해 필요한 내부적 속성이다.
  - getter와 setter를 변환할 때는 자바스크립트 내장 API인 [Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 가 사용된다.   

- watcher
  - 모든 컴포넌트에 존재하는 속성, 화면을 다시 그리는데 중요한 역할을 한다.
  - 인스턴스가 화면에 올라가고 나서 특정 data 속성을 바꾸거나 접근하면 watcher에서 해단 사실을 감시하고 신호를 보낸다.

- 뷰의 반응성은 인스턴스를 생성하는 시점에 생긴다. 
- 따라서, 인스턴스를 정의할 때 data 속성에 정의하지 않고 인스턴스를 생성하고 data 속성에 객체를 추가하면 그 객체에는 반응성이 생기지 않는다. 
- 반응성이 없다는 것은 해당 객체의 변화가 있든 없든 뷰에서 화면을 다시 갱신하지 않는다는 의미이다. 
- [뷰 반응성 공식 가이드](https://kr.vuejs.org/v2/guide/reactivity.html)

<br><br>
						  
#### 참고 do it vue.js
