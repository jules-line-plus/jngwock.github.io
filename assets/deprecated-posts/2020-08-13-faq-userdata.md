---
title: "통화를 하면서 서버(App Server, Application Server)에 특정 파라미터들을 전달 하고 싶습니다. 어떻게 할 수 있나요?"
categories:
  - faqs
  - Server and Environment
tags:
  - UserData
  - stid
---

클라이언트 SDK API(PlanetKit SDK) makeCall 의 UserData 변수가 LINE Planet(PlanetKit 및 LINE Planet server)을 통해 AppServer로 전달 됩니다. 

Notify, CallEvent 모두 전달 되며, <span style="color:yellow">`stid`</span> 필드로 값이 전달 됩니다. 

위와 관련한 스펙은 [Server Callback Specification]( {{site.baseurl}}/documents/api specification/api-server/)를 참고 하실 수 있습니다.

----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.




