## super란? 
-  자식 클래스에만 새로운 기능, 매소드, 인자를 추가하고 싶을때 사용하는 기능이다. 
-  부모 클래스가 가지고 있는 기능을 실행시킬 수 있다. 
   - 부모 클래스의 **생성자**를 호출한다.
   - 부모 클래스의 **메서드**를 호출한다.

<br>

## super의 필요성
```javascript
class Score {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class ScoreAvg extends Score{
    constructor(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum() {
        return this.first + this.second + this.third;
    }
    avg() {
        return (this.first + this.second + this.third)/3;
    }
}

let ahn = new ScoreAvg('sujin', 90, 100, 80);

console.log("ahn.sum()", ahn.sum());
console.log("ahn.avg()", ahn.avg());

```
- 위와 같이 ```ScoreAvg```(자식클래스)에 ```Score```(부모클래스)의 기능을 모두 가져와 수정한다면, **상속**의 의의가 없어지게된다.(코드 중복 발생)

<br>

## super의 사용
```javascript
//1. 부모 클래스의 생성자 호출
super()

//2. 부모 클래스의 메스드 호출
super.sum() 

```

<br>

```javascript
class Score {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class ScoreAvg extends Score{
    constructor(name, first, second, third) {
        super(name, first, second)
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third)/3;
    }
}

let ahn = new ScoreAvg('sujin', 90, 100, 80);

console.log("ahn.sum()", ahn.sum());
console.log("ahn.avg()", ahn.avg());

```





