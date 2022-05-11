## 배열안의 객체 값 가져오기

json형식으로 데이터를 불러오고나, 직접 배열안에 객체 구조를 만들어 데이터화 했을 때, 객체 안에 특정 값을 가져오려면 어떻게 해야할까?

<br>

```javascript

const userInfo = [
  {'name':'gildong', 'gender':'man', 'age':20},
  {'name':'gilsoon', 'gender':'woman', 'age':24},
  {'name':'minjoo', 'gender':'woman', 'age':30},
  {'name':'dongjoo', 'gender':'man', 'age':28},
  {'name':'hoon', 'gender':'man', 'age':34}
]

```
- 위 와 같이 배열안에 객체를 담고 있는 변수가 있을 때, ```man```에 해당하는 ```name```의 값을 가져오고 싶다면 아래와 같이 할 수 있다.

<br>

```javascript
const Men = userInfo.filter((user) => user.gender === 'man');

console.log(Men)
//[{'name':'gildong', 'gender':'man', 'age':20},{'name':'dongjoo', 'gender':'man', 'age':28},{'name':'hoon', 'gender':'man', 'age':34}]
console.log(Men[0].name);
//'gildong'
console.log(Men[1].name);
//'dongjoo'
console.log(Men[2].name);
//'hoon'

```
- 위와 같이 **```filter```함수**를 이용하여 ```man```을 갖고 있는 객체들만으로 구성된 배열을 통해 ```man```에 해당하는 ```name```값을 가져올 수 있다.
- 하지만, 배열의 특성상 순서를 입력해줘야만 원하는 값을 얻을 수 있다.
- **```map```함수**를 통해 이를 해결할 수 있다.

<br>

```javascript
const Men = userInfo.filter((user) => user.gender === 'man').map((user) => user.name);

console.log(Men);
// ['gildong', 'dongjoo', 'hoon']

```
- **```map```함수**를 

 

