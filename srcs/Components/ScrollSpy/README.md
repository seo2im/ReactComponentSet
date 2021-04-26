### ScrollSpy

스크롤에 대한 이벤트를 처리하는 과정

### Element의 scroll 관련 요소들

`scrollingElement`: 스크롤 가능 요소를 반환
`scrollHeight`: 전체 contents의 길이
`clientHeight`: 현재 보이는 (scorll상 눈에 보이는) contents의 길이
`offsetHeight`: 스크롤테두리를 포함한 만큼의 contents 길이
`scrollTop`: 스크롤돼 올라간 만큼의 높이
`offsetTop`: 스크롤 테두리를 제외하고 올라간 만큼의 높이

### scrollIntoView()

호출된 요소로 스크롤링되는 액션을 진행한다.