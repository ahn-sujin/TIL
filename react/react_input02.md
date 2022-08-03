## input이 여러개 일때 상태 관리하기

input값은 ```useState```를 통해서 상태 관리가 이루어졌다.
하지만, input이 여러개 일 때 input의 갯수 만큼 ```useState```를 생성해서 상태 관리를 해주는 것은 좋은 방법이 아니다.


> 첫번째 방법
```javascript

import { useState } from 'react';

const InputSample = () => {
  const [inputFirst, setInputFirst] = useState('');
  const [inputSecond , setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
  
  return(
      <>
        <input onChange = {} value = {} />
        <input />
        <input />
      </>    
  )
}

export default InputSample;

```
