# DarkMode

버튼을 눌르면 화면의 theme이 변경되는 요소

### DOMContentLoaded

초기 HTML문서를 불러왔을 때 발생하는 이벤트, resource의 로딩 전에 발생한다.

이후 load이벤트가 발생했을 때가 모든 resource가 로드된 이후이다.

### LocalStorage

값을 저장하는 web storage. `setItem()`, `getItem()`을 이용해서 처리한다.

### FOUC

일정 시간 깜박거리게 되는데, 이는 대부분 lazy loading을 통해 해결할수 있다.
```javascript
/* css */
body {
    visibility: 'hidden';
}

setTimeout(() => {
    document.body.style.visibility = 'visible'
}, 300)
```

### toggle(string, [ option ])

`option`은 해당 요소가 true일 때 리스트를 추가한다.

### Typescript Object key type setting
```typescript
const object: {[key : type] : type}
```

### TODO
1. hook state lazy loading when it use localStorage