## 1. class
- ES6 문법
- 객체 생성자와 prototype을 더 쉽게 사용하기 위해서 만들어진 문법

<br>

> class생성하기
```javascript

class Person{

}

let kim = new Person();

console.log(kim) // Person {}  

```

<br>

> constructor(생성자)

```javascript

class Person {
     constructor(name,age,city){
          this.name = name;
          this.age = age;
          this.cuty = city;
     }
}
let kim = new Person('kim','24','seoul');
console.log(kim); //Person {name : 'kim',  age:'24', city:'seoul'}

```
- ex) constructor(parameter1, parameter2 ... )
- class객체의 초기 값을 설정해 줄 수 있다. 
- class 내부에 constructor는 한개만 존재 할 수 있다. (2번 이상 사용시 Syntax Error)
- 새로운 클래스를 생성할 때 가장 처음 실행되면서 초기값을 설정해준다.

<br>

> 메서드

```javascript

class Person {
     constructor(name,age,city){
          this.name = name;
          this.age = age;
          this.cuty = city;
     }
     //ap서드생성
     nextYearAge(){
          return Number(this.age) + 1;
     }
}
let kim = new Person('kim','24','seoul');
let park = new Person('park', '31', 'busan'); 

// 외부 메서드 생성 
kim.eat = function() {
     return 'apple'
}

console.log(kim.nextYearAge()); //25
console.log(kim.eat()); //apple
console.log(park.eat()); // Error!!

```
- class 내부에 함수를 구현하면 자동으로 prototype으로 등록된다.
- class 내부에 구현되는 함수를 메서드 라고 부른다.
- class 내부에 함수형식으로 만들어준 뒤 해당 메서드를 호출하여 사용한다. 
- class 밖에서 새로운 메서드를 넣는 것도 가능하지만 새로운 객체를 만들었을 때, 호출 할 수 없다.

<br>

> extends





- **extends**
     - 특정 class를 상속받는 의미
     - class에서도 상속을 이용하면 기존의 class의 값을 모두 접근하여 사용할 수 있다.
     - ```class 자식 extends 부모```
- **super** 
     - 상속 받은 class(부모)의 constructor를 호출 
     - 자식 쪽의 추가적으로 사용할 초기값이 필요할 경우 constructor에 super로 부모 초기값을 세팅한 뒤 자식 class에서만 사용할 초기 값을 따로 지정 가능
     - super 기능을 이용해서 자식 class에서 부모 매서드를 호출할 수 있다. 
- 같은 형태를 지닌 객체들(함수, 값)에 대해서 코드 관리하기가 편리하다.



