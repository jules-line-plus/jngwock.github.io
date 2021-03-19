---
title: "PlanetKit SDK로 통화 중일 때 일반 전화가 오면 어떻게 되나요?"
categories:
  - faqs
  - Client
tags:
  - PlanetKit
  - exceptions
---


PlanetKit 을 이용한 VoIP 콜(이후 LINE Planet Call)은 일반 전화(Cellular phone, LTE call, 시스템 전화 등 다양한 이름으로 불릴 수 있습니다)가 올 때, 내부적으로 이벤트를 감지하고 LINE Planet Call을 끊습니다. 이때 통화 종료 코드로서 클라에서는 cell call, 서버로는 phone call event(1014, 1015) 가 정의 됩니다. 


또한 일반 전화와 현재 VoIP 콜의 진행 상황에 따라 달리 정의 될 수 있습니다. 

| LINE Planet Call 진행 상황| 일반 전화 중이거나 일반 전화가 걸려 올때 LINE Planet Call 처리|
| --- | --- |
| 발신 중| 발신이 걸리지 않고 바로 cell call 클라이언트 종료 코드로 통화 시도를 멈춥니다. |
| 착신 중| 착신을 더이상 진행 하지 않고 바로  cell call 클라이언트 종료 코드로 통화를 종료 합니다.<br>이때 서버로 phone call event로 알려 줍니다. |
| 통화중| 착, 발신에 상관 없이 바로 cell call 클라이언트 종료 코드로 통화를 종료 합니다.<br> 이때 서버로 phone call event로 알려 줍니다. |


iPhone의 경우 iOS에서 제공하는 CallKit을 사용 할 수 있습니다. 이때는 CallKit의 정의된 행동에 따르게 됩니다.


또한 PlanetKit에 구현되어 있는 기본 CallKit 연동 모듈은 상황에 따라 아래와 같은 종료 코드를 사용합니다. 
1. LINE Planet Call 중 새로운 통화(일반전화 혹은 다른 VoIP 콜)를 받게 되면, normal 종료코드로 통화를 종료합니다.
2. 다른 통화(일반전화 혹은 다른 VoIP 콜) 중 LINE Planet Call 이 걸려 왔을때, LINE Planet Call을 종료하면, decline 종료 코드로 통화를 종료합니다.


----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.




