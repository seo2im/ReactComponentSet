# infinite Scroll

무한으로 늘어나는 page object

### Object

1. ScrollingElement의 요소들을 활용하는 법
2. Scroll Event를 관리하는 법
3. 새로운 요소를 아래에 추가하는 방법

### document.createDocumentFragment()

메인 DOM과 분리된 하나의 temp DOM을 생성한다. 해당 DOM의 조작은 메인 DOM과 관계 없으며 메인 DOM에 추가될 수 있다.

```javascript
const frag = document.createDocumentFragment()
frag.appendChild("some element")
someParentElem.appendChild(frag);
```

### Element.insertAdjacentHTML(position, text)

HTML text를 파싱하여 특정 element에 노드로 추가한다. innerHTML 보다 빠르다.

position 위치 요소는 아래와 같다.
**'beforebegin'**: elem 앞에
**'afterbegin'**: elem의 첫번째 child
**'beforeend'**: elem의 마지막 child
**'afterend'**: elem 뒤에

### debounce / throttle

스크롤 이벤트와 같이 너무 자주 발생하는 이벤트의 콜백을 제어하는 방법이다. **debounce**는 일정 시간동안 발생되는 이벤트를 무시하고 마지막 이벤트만 동작하게 한다.

```javascript
const debounce = (func, delay) => {
    let someEvent = null
    
    return (...args) => {
        clearTimeout(someEvent)
        someEvent = setTimeout(func.bind(null, ...args), delay)
    }
}

elem.addEventListener('event', debounce(callback, 300))
```

위와 같이 정의하면 background는 300ms내에 반복실행된 이전 이벤트를 삭제하고 새로운 이벤트의 콜백만을 담아둔다.

**Throttle**은 특정 시간마다 이벤트를 반복 실행되게 한다.

```javascript
const throttle = (func, delay) => {
    let someEvent = null;

    return (...args) => {
        if (!someEvent) {
            someEvent = setTimeout(() => {
                func.bind(null, ...args)
                someEvent = null
            }, delay)
        }
    }
}

elem.addEventListener('event', throttle(callback, 300))
```

위와 같이 정의하면 일정시간 내 재 반복된 이벤트는 무시하고 진행하고 된다.

throttle은 사용자 경험측면에서 유리하고 debounce는 리소스 측면에서 유리하다.

### intersectionObserver

최신 브라우저에서 사용될 수 있는 기술로 특정 오브젝트가 화면에 드러났는가를 판단하는 observer의 역할을 한다. 

```javascript
const observer = new InterSectingObserver(
    /* entry is array of intersecting info of observed elem */
    (entry) => {
        if (entry[0].isIntersecting) callback()
    })

observer.observe(elems)
```

등록된 elem들은 observer에 의해 화면의 표시 여부를 담은 오브젝트로 변환되어 callback에서 실행된다.

### React intersectionObserver

Observer에 observe되는 대상은 ref로 설정되어야 한다. 등록은 useEffect로 등록하고 return으로 해제한다.