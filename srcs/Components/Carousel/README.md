# Carousel

### 기본 구성에서 유의할 점

1. 처음과 마지막 요소는 양쪽 끝에 하나씩 추가한다.
    - 이미지 슬라이드 시 맨뒤에서 맨처음으로 돌아올 때, 실제로는 하나 뒤의 복사된 요소로 이동하고 맨처음요소로 변경하기 위함(애니메이션의 자연스러움)

2. overflow: hidden;
    - 이미지의 오버 요소를 보이지 않도록 정의

3. opacity: 0;
    - 요소의 길이, 너비를 맞추기 전까진 보이지 않게 하기 위함이다.

### ontransitionend event

transition이 발생하고 종료될때 발생하는 이벤트로 대체로 transition동안 어떠한 동작을 막은것을 풀어줄 때 활용된다.

```javascript
element.ontransitionend = () => {
    ~~~
}
```

### react component event handler

기본적으로 모든 이벤트 핸들러는 JSX 컴포넌트에 등록하여 사용할 수 있다. 즉, vanila로 작성된 함수를 모두 동일하게 구성할 수 있다.

### static file with loader

url loader vs file loader