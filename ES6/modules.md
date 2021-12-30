# 💡 Import / Export


``` 📍 모듈 : 파일을 쪼개서 보관함으로써 코드의 재활용성과 유지보수를 쉽게 할 수 있도록 한다. ```

<br>

## 1. Named Export
- 파일 혹은 모듈이 원하는 만큼 많은 수의 named export를 가질 수 있음 
- 중괄호 안에는 import 하고 싶은 함구의 이름을 쓸 수 있다.
- import된 이름은 반드시 export된 이름과 같아야 한다. ('as'키워드를 사용해서 이름을 바꿀 수 있음)

> math.js
```javascript

export const plus = (a,b) => a+b;
export const minus = (a,b) => a-b;
export const divide = (a,b) => a/b;

```
> main.js 
```javascript

import { plus, minus, divide } from './math';

plus(2,3);
minus(2,3);
divide(2,3);

```

> main.js ('as'키워드 사용)
```javascript

import { plus as add } from './math';

plus(2,3);
minus(2,3);
divide(2,3);

```

<br>

## 2. Default Export
- 각 파일마다 단 한개의 default export만 존재 할 수 있음 
- 한개의 파일에서 모든걸 export하고 import 할 수 있음
- 원하는 이름으로 import 할 수 있음
- 파일에서 딱 한개만 export 하고 싶을때 사용해도 됨

> math.js 
```javascript

const plus = (a,b) => a+b;
const minus = (a,b) => a-b;
const divide = (a,b) => a/b;

export default { plus, minus, divide }

```

> main.js 
```javascript

import math from './math';

math.plus(2,3);

```

<br>

## 3. Named Export 와 Default Export
- 파일에서 1개의 함수만 export를 하고 싶을 때 : default export
- named export - import를 한 줄의 코드에 섞을 수 있음

> db.js
```javascript

const connnectToDB = () => { abc };
export const getUrl = () => { 111 };
export default connectToDB;

```

> main.js
``` javascript

import connect, { getUrl } from './db';

```

<br>

## 4. * (= everything)
- 모든 export 된 내용을 import 하고 싶을 때 (단, default export가 없는 파일에서 가능)

> math.js
``` javascript

export const plus = (a,b) => a+b;
export const minus = (a,b) => a-b;
export const divide = (a,b) => a/b; 

```

> main.js
```javascript

import * as myMath from './math';

myMath.plus(2,2);

```

<br>

## 5. Daynamic Import
- 유저가 사용할 모듈만 import 할 수 있다.
- async/await

> 변경전
```javascript

function doMath() {
  import('./math)
  .then(math => math.plus(2,2));
}
btn.addEventListener('click', doMath);

```

> 변경후
```javascript

async function doMath() {
  const math = await import('./math');
  math.plus(2,2);
}
btn.addEventListener('click', doMath);

```
