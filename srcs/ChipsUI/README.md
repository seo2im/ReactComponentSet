# Chips UI

HashTag와 같이 간단히 추가하고 삭제하는 component

### Class 형태로써 구성하는 component

클래스가 하는 동작은 최초의 initializing(component의 생성), eventBinding(component의 event handler 등록)이다. 

클래스는 클래스가 만든 component를 property로 가지고 있으며 내부 동작을 모두 정의하고 있어야 한다.

통상 파라미터는 해당 요소를 가지고 있을 container(부모 요소)의 셀렉터와 등록할 data이다. (d3의 select와 data의 기능을 가진다라고 보면 좋을것 같다.) 두 요소는 반드시 class의 property로 가지고 있도록 한다.


