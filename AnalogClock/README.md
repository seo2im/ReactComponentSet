# Analog Clock

### transform
변형을 통해 다양한 visualization styling이 가능하다. 

### Css 의 변수

`--변수이름`으로 정의하고 `var(--변수이름)`으로 사용한다. 대체로 `calc()`에 활용될 수 있다.
```css
.some {
    --deg: 0;
    transform: translate(-50%, 0, 0) rotate(rotate(calc(var(--var) * 1deg)))
}
```

해당 값은 DOM에서 `style.setProperty('--변수이름', value)` 으로 설정할 수 있다. 

### DOM을 조작하는 함수는 기본적으로 closure인가?

일단 HTML요소를 가져오는 함수에 대해 생각하면 `DOMContentedLoad`가 발생했을 때 이다. 따라서 DOM요소의 `get`을 해당 이벤트때 적용된다고 하면 DOM을 불러오는 것은 Interval적으로 실행되는 것이 아닌 최초 1회만 실행되면 이상적이다.

따라서 IIFE를 반환하는 closure로 만들어 등록하면 해당 요소의 호출이 1회만 진행되므로 이상적이라 할 수 있다.

### Ref

`useRef()`로 설정하는 값은 해당 함수의 DOM과 관련된 요소를 `current`로 가져오게 된다. 이후 조작은 current로 진행할 수 있다.

### Array.from({ length : 12 }, () => {})

Array 생성시 설정한 길이만큼 callback의 return으로 만들어진다.
