## constructor 란? 
- constrictor는 생성자라고 부르며, 객체를 생성하는 역할을 한다.

<br>

## constructor의 필요성
```javascript

let ahnScore = {
    name: 'sujin',
    first : 89, 
    second: 76,
    third: 90,
    sum: function(){
        return this.first + this.second +  this.third; 
    }
}

let kimScore = {
    name: 'gildong',
    first : 70, 
    second: 43,
    third: 50,
    sum: function(){
        return this.first + this.second + this.third; 
    }
}

console.log('ahnScore.sum():', ahnScore.sum()); //ahnScore.sum(): 255
console.log('kimScore.sum():', kimScore.sum()); //kimScore.sum(): 163

```
- 객체를 만들때마다 객체를 일일이 다시 정의해줘야한다. 
- 객체 내부 내용이 바뀌면 같은 동작을 하는 모든 객체의 내용을 바꿔줘야한다. 
