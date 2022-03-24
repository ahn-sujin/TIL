let score = {
    name: 'sujin',
    first : 89, 
    second: 76,
    sum: function(){
        // return score.first + score.second;  // 객체 이름(score)이 변할 때 마다 바꿔줘야함
        return this.first + this.second; //sum 인자를 생략할 수 있도록 this를 이용해 객체를 수정, 
        //*this: 어떤 메소드에서 그 메소드가 속해 있는 객체를 가리키는 특수한 키워드
    }
}

// 첫번째 방법
console.log('score.sum(score.first, score.second):' , score.sum(score.first, score.second));

// 두번째 방법
console.log('score.sum()',score.sum());

