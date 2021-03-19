---
title: "Call Event에서 terminate는 NORMAL_RELEASED(16) 임에도, call_end_reason의 경우 정상종료가 아니라고 나옵니다. 어떤게 맞는지 궁금합니다"
categories:
  - faqs
  - Call End
tags:
  - release code
---

`terminate`필드와 `call_end_reason`은 내부적으로 특별한 연결 관계를 가지고 있지 않습니다. 
단지 각자의 정의에 따라 종료 코드를 결정합니다.

`terminate`필드는 Q.850중 일부 코드를 제공하며 크게 6가지 로만 통화종료 이유를 분류 하였습니다. 
통화시간이 기록되면 모두 NORMAL_RELEASED(16)로 분류 하고 있습니다.

`call_end_reason`은 서버 입장에서 통화 종료를 정의하고 있습니다. 
예를 들어 네트워크로 연결이 끊어진 경우 CALLER(CALLEE)_NETWORK_ERROR가 발생 할 수 있으며, 이때 클라이언트에서는 어떤일이 일어났는지 서버에서는 알수 없습니다.


그러므로 통화 종료의 이유를 추적하기 위해서는 `call_end_reason`이 더 세분화 되고 적합합니다. 
만일 통화 종료를 큰 묶음으로 단위화 하여 통계등을 만들때는 `termniate`가 적합 할 수 있습니다.


----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.
* [통화 종료 이유]({{ site.baseurl }}/documents/api specification/api-server-release/)는 통화 종료 이유를 설명 합니다.

