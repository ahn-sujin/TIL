## 1. class
- ES6 문법
- 객체 생성자와 prototype을 더 쉽게 사용하기 위해서 만들어진 문법
- **constructor(생성자)**
     - ex) constructor(parameter1, parameter2)
     - class객체의 초기 값을 설정해 줄 수 있다. 
     - class 내부에 constructor는 한개만 존재 할 수 있다. (2번 이상 사용시 Syntax Error)
     - 새로운 클래스를 생성할 때 가장 처음 실행되면서 초기값을 설정해준다.
- class 내부에 함수를 구현하면 자동으로 prototype으로 등록된다.
- class 내부에 구현되는 함수를 메소드 라고 부른다.
- 상속을 해야되는 상황에서 더 쉽게 할 수 있다.
- **extends**
     - 특정 class를 상속받는 의미
- **super** 
     - 상속 받은 class의 constructor를 호출
- 같은 형태를 지닌 객체들(함수, 값)에 대해서 코드 관리하기가 편리하다.



