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



