## input이 여러개 일때 상태 관리하기

input값은 ```useState```를 통해서 상태 관리가 이루어졌다.<br>
하지만, input이 여러개 일 때 input의 갯수 만큼 ```useState```를 생성해서 상태 관리를 해주는 것은 좋은 방법이 아니다.

<br>

> 첫번째 방법
```javascript

import { useState } from 'react';

const InputSample = () => {
  const [inputFirst, setInputFirst] = useState('');
  const [inputSecond , setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
  
  const onChangeFirst = (e) => {
    setInputFirst(e.target.value);
  }
  
  const onChangeSecond = (e) => {
    setInputSecond(e.target.value);
  }
  
  const onChangeThird = (e) => {
    setInputThird(e.target.value);
  }
  
  return(
      <>
        <input onChange = {onChangeFirst} value = {inputFirst} />
        <input onChange = {onChangeSecond} value = {inputSecond} />
        <input onChange = {onChangeThird} value = {inputThird} />
      </>    
  )
}

export default InputSample;

```
- 위의 방법은 늘어난 input갯수 만큼 input을 관리하기 위한 ```state```와 ```onChange```함수를 생성해야하기 때문에 좋은 방법이 아니다. 
- 하나의 ```state```로 input값들을 설정 할 수 있도록 코드를 수정할 수 있다.

<br>

>두번째 방법
```javascript

import { useState } from 'react';

const InputSample = () => {
  const [input, setInput] = useState({
    // 사용할 문자열들을 저장하는 객체 형채로 관리
    input1: '',
    input2: '',
    input3: '',
  });
  
  const {input1, input2, input3} = input //구조분해할당
  
  const onChange = (e) => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name] : value // name 키에 맞는 키값(value)를 가져온다. 
    })
  }
 
  
  return(
      <>
        <input onChange = {onChange} name ={input1} value = {input1} />
        <input onChange = {onChange} name ={input2} value = {input2} />
        <input onChange = {onChange} name ={input3} value = {input3} />
      </>    
  )
}

export default InputSample;


```
- input에 ```name```이라는 값을 설정하고 이벤트가 발생했을 때 그 값을 참조한다.
- 이전에 ```useState``` 함수가 문자열을 관리해줬다면, 여기에서는 여러개의 문자열을 갖고 있는 **객체 형태**로  관리 해줘야한다.
- 그리고 ```<input />```에  name을 속성을 부여 해줘야 하는데, ```onChange```함수에서 ```e.target.name```를 조회하면 변화된 값이 어떤 name인지 알 수 있다.
- input의 상태 관리를 위한 하나의 ```state```를 만들어 주고 값이 바뀔 때 마다 객체 **spread방식** ```...input``` 으로 값을 업데이트 해준다.
- spread방식을 사용하는 이유
  - 객체 상태를 업데이트 할 때는 꼭 기존의 상태를 한번 복사하고 나서 특정값을 덮어 씌우고 새로운 값을 설정 해주어야한다. 이것을 **불변성**을 지켜준다고 함. 이렇게 해야 리액트에서 업데이트 된 것을 감지하고 랜더링한다.
  - **불변성** 을 지켜줘야지만 나중에 컴포넌트 업데이트 성능을 최적화시켜줄 수 있다. 

<br>

[예시 보러가기](https://codesandbox.io/s/input-yeoreogae-sangtaegwanri-dklpo1?file=/src/App.js)


