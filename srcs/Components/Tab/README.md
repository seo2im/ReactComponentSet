# Tab

서버에서 여러 값이 왔을 때 이를 Tab으로 데이터를 표시하는 동적 처리

### 기본적인 tab 구성

Navigation(`<nav>`)은 tab의 key와 선택을 표시하는 glider로 구성하고, 그아래 콘텐츠를 표시하는 `<div>`로 구성한다.

### Css calc과 var

css요소도 `--valueName`을 통해 값을 지정한 후 이를 `calc` 내부에서 `var(--varlueName)`으로 활용할 수 있다. `element.style.setProperty('--valueName', data)`로 설정한다.

### innerHTML vs createElement

데이터를 받아 만들 때, 요소가 정적이면 `innerHTML()`, 동적이면 `createElement()`를 활용하자.

### data-~~ attribute

`element.dataset`은 elem에 `data-~~~`로 저장한 값을 불러온다. 예를 들면 `<div data-index="0">`이라면 `elem.dataset.index`로 `0`을 가져올 수 있다.

### fetching custom hook(React)

useEffect내부에서 async를 구현하려면 IIFE를 이용하여 구성한다. 통상 pending상태에선 `isLoading`을 true로 두는 state를 구성하고 반환된 데이터는 promise가 반환된 수 값을 할당하는 식이다. 

### z-index
위치의 상위 포지션으로의 이동을 관련한다.