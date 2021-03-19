---
title: "통화가 종료 되었는데 어떤 이유로 종료 된 것인지 알고 싶습니다"
categories:
  - faqs
  - Call End
tags:
  - release code
---


통화가 종료 되면 여러가지 방법으로 해당 콜의 종료 이유를 추적 할 수 있습니다. 
또한 통화 종료를 기술하는 방법은 통화 종료 주체(Client or Server) 혹은 종료 코드 필드의 정의에 따라 다른 값이 가능합니다.

1. 클라이언트 측면에서 통화 종료
클라이언트가 종료 되면 통화 종료 코드를 종료 이벤트와 함께 제공합니다. 
클라이언트 어플리케이션은 이 통화 종료에 따라 적절하게 사용자에게 종료 이유를 설명 할 수 있습니다.
클라이언트 종료 코드는 [kitDisconnectReason]({{site.baseurl}}/documents/api specification/api-kit-disconnect/)를 참고 해 주세요.
2. 서버 측면에서 통화 종료
서버 콜백인 Call Event가 호출 될때 통화 종료 이유도 함께 전달 됩니다. 이때는 총 4가지 타입의 통화 종료가 제공 되고 있습니다.
 각 타입별로 매핑관계는 존재 하지 않고, 단지 정의에 따라 결정된 코드 들입니다.
[Release reason]({{site.baseurl}}/documents/api specification/api-server-release/) 를 참고 하시면 해당 코드들의 리스트를 볼 수 있습니다.
  * `call_end_reason` : 서버 입장에서 바라본 통화 종료 코드 입니다. 이 코드는 Application layer 에서 통화 종료를 추적 하고 싶을때 사용 하기 적합합니다.
  * `terminate` : Q.850중 일부 코드를 제공합니다. 통화 종료 패턴을 통계적으로 볼때 일반적으로 나누는 기준으로 정의된 필드이며, 자세한 통화 추적에는 적합하지 않습니다.
  * `user_rel_code`: Application의 비지니스 로직에 의해 통화를 끊고, 종료 이유를 정의 하고 싶을때 사용 할수 있습니다. 통화를 종료하는 주체(클라이언트)에 통화 종료 arguement로 넣어 주면 서버(App Server, Application Server)로 전달 됩니다.
  * `releser, rel_code, rel_code_str`: 이 코드는 통화 종료에 대한 자세한 이유를 추적을 LINE Planet 팀에 요청 할 때 필요한 값입니다.
 `sid` 와 함께 플랫폼 팀에 제공해주시면 통화 종료 이유를 추적할 수 있습니다.



----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.

