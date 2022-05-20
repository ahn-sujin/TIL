# ios 노치대응

<br>

## 노치(notch)란? 
- 웹뷰에서는 문제없이 노출되지만 아이폰으로 확인 시 가려지거나 짤려보이는 현상을 말한다.
- 다른 표현으로 **안전영역(safe Area)** 라고 할 수 있다.

<br>

## 해결방법

> html

```html

<meta name='viewport' content='inital-scale=1, viewport-fit-cover'>
```
- 먼저 노치 문제를 해결하기 위해서는 html 소스에서 viewport의 content 속성에 ```viewport-fit=cover``` 를 넣어줘야한다. 
- viewport-fit의 기본값은 auto이다.

<br>

> css

```css
// iOS 11.0 버전
constant(safe-area-inset-top)
constant(safe-area-inset-right)
constant(safe-area-inset-bottom)
constant(safe-area-inset-left)

// iOS 11.2 이상
env(safe-area-inset-top)
env(safe-area-inset-right)
env(safe-area-inset-bottom)
env(safe-area-inset-left)

```
- **ios 11.0 버전**에서는 ```constant()``` 속성을 사용한다.
- **ios 11.2 버전 이상**부터는 ```env()```로 사용한다.
- **ios 11.0과 11.2 버전 이상** 모두를 만족하려면 두 속성을 다 적용한다. 



