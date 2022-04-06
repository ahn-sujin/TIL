# Index
### 1. [객체 기본](./객체.md)
### 2. [객체 this](./객체_this.md)
### 3. [객체 constructor](./객체_constructor.md)
### 4. [객체 prototype](./객체_prototype.md)
### 5. [객체 class](./객체_class.md)

<br>

## this
- **어떤 메소드에서 그 메소드가 속해있는 객체를 가리키는 특수한 키워드**를 ```this```라고 한다. 

<br>

> this 사용 전
```javascript
let score = {
    name: 'sujin',
    first : 89, 
    second: 76,
    sum: function(f,s){
       return f + s;
    }
}

console.log('score.sum(score.first, score.second):' , score.sum(score.first, score.second));  
// score.sum(score.first, score.second): 165

```
- 객체 ```score```가 변할 때마다 출력되는 ```sum``` 메소드의 인자값을 바꿔줘야한다.
- 이미 객체 내부에서 first와 second를 알고 있기 때문에 굳이 한번 더 언급할 필요가 없다.

<br>

> this 사용 후
```javascript
let score = {
    name: 'sujin',
    first : 89, 
    second: 76,
    sum: function(){
        return this.first + this.second; 
    }
}

console.log('score.sum() :',score.sum());  
//score.sum(): 165

```
- ```this```를 사용해서 ```sum```의 인자를 생력할 수 있다. 



