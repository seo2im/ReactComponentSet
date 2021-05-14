# Progressbar

### useRef

ref는 반드시 DOM에 접근할 때만 사용하는게 아닌 변경되는 단일 state의 활용에도 사용된다.

### delay 함수
Promise의 setTimeout을 통해 간단한 delay함수를 만들 수 있다.
```typescript 
const delay = (delay: number) => {
    isLoading.current = true
    return new Promise(() => {
        setTimeout(() => { isLoading.current = false    delay)
    })
}
```