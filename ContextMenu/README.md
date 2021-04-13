### ContextMenu

마우스 오른쪽 클릭하면 나타나는 메뉴

### Event delegation
이벤트는 default로 버블링(bubbling = 하위 요소로부터 상위 요소로 이벤트가 전달됨, 이벤트 요소는 target)된다. 반대로 캡처링 될 수 도 있다(하위로 전달)

이벤트리스너는 적을수록 성능향상에 도움이 되지만 반대로 handler를 제어하거나 삭제할 때 어려움이 있을 수 있다. 또한 조건문이 많아져 최적화 코드를 고려해야 한다.

### stopPropagation()
상황에 따라 어떤 이벤트가 발생했을 때, 해당 이벤트가 상위로 전달되는 것을 막아야 할 필요가 있을 수 있고 event의 `stopPropagation()`을 통해 전달을 막을 수 있다.

### Sub-information
#### 가상요소(Pseudo-Element)
가상요소는(Pseudo-Element) 가상 클래스처럼 선택자에 추가되어 존재하지 않는 요소를 존재하는것처럼 문서(document)의 일부분을 선택할 수 있게된다.

```css
/*
    :fisrt-letter - 첫 문자를 요소로 선택
*/
.class:first-letter{font-size:30px}
```

#### :before / :after = content
실제 내용이 있을때 그 앞/뒤에 가상의 자식요소를 생성한다. 생성될 요소의 값을 content로 지정할 수 있다.

```css
/*
    요소에 마우스를 올리면 open이라는 키워드가 뒤에 생성된다.
*/
.class:hover:after {
    content: 'hover';
}
```

#### classList
component요소가 가지고 있는 클래스들을 조작할 수 있는 object
`toggle`: 요소가 존재하면 삭제하고 `false` / 존재하지 않으면 생성하고 `true`를 반환

#### JQuery 문법

1. jqeury의 이벤트 등록(`on()`)에는 bubling된 타겟을 두번째 파라미터로 설정할 수 있다.
2. jquery 이벤트 리스너의 `$(this)`는 등록된 target이다.
3. `toggleClass()`: js의 이외 클래스 선택과 통일하다.
4. `siblings()`: 요소의 형제들중 지정한 선택자에 해당하는 요소를 모두 가져온다.
5. `is('className(선택자)')`: 같은 선택자를 가지고 있는지 확인한다.

대체로 복수선택된 요소에 동일한 class작업을 할 수 있는것으로 보인다.

#### details / summary

details는 하위 요소를 open상태일때 보여준다. label은 summary로 지정할 수 있다. 참고로 버블링 시 summary가 클릭 대상이므로 details는 parentElement이며 open은 Class가 아닌 Attribute이다.

Js가 동작하지 않을때도 HTML태그로 open/close를 동작시킬수 있는 부분을 생각하면 좋은 선택이다.

#### createPortal(react)

DOM계층 구조 바깥에서 DOM노드로 자식을 넣어준다(pop over가 되는 modal이나 contextMenu 구현에 적합)

```javascript
ReatDOM.createPortal(child, container)
```

`container`가 실제 DOM요소가 들어와야 하므로 ref를 통해 값을 전달해주어야 한다.