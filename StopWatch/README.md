# StopWatch



### Closure와 IIFE를 통한 구현

closure 함수와 IIFE로 구현을 함으로써 은닉데이터를 조작하는 형태로 StopWatch를 제작할 수 있다.
`onclick`에 등록된 함수는 bubling된 타겟을 기준으로 내부에 정의된 start/reset버튼의 동작이 구현되어 있다.

start버튼의 경우 start/stop의 기능을 각각 내부 함수로 구현한 closure함수로 만들 수 있다.
마찬가지로 reset버튼의 reset/lap기능을 각각 내부함수로 구현한다.

위와 같은 함수를 반환하는 IIFE로 closure구성이 가능하다.

### textContent

`element.textContent`는 해당 요소가 가진 text를 반환한다.

### disabled

`element.disabled`는 해당 요소의 이벤트 동작을 가능/불가하게 설정한다.

