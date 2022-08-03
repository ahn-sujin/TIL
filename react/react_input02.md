## input이 여러개 일때 상태 관리하기

input값은 ```useState```를 통해서 상태 관리가 이루어졌다.
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
- 위의 방법은 늘어난 input갯수 만큼 input을 관리하기 위한 state와 onChange함수를 생성해야하기 때문에 좋은 방법이 아니다. (input의 상태 관리를 한번에 할 수 없음)



