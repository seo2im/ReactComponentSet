# Auto Complete

자동완성에 대한 기능을 표현하는 컴포넌트의 구성

### 기본적인 로직흐름
1. keyup에 대한 디바운스 설정을 통해 특정 시간내에 일어난 마지막 keyup에 의거해 callback을 실행
2. callback은 일정 문자를 서버로부터 받아(비동기 콜백) 표기
3. 표기된 요소를 클릭하면 input을 변경, 동시에 auto template는 close
3 - 1. 외부를 클릭했을때 사라진다.

### input의 focusout/in 이벤트
input에 포커스됨에 따른 이벤트 핸들러 처리 가능
다만 focusout은 click보다 선행되므로 동시에 처리된다면 flag를 통한 조작이 요구됨