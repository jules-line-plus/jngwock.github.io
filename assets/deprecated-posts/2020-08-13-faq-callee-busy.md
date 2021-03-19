---
title: "상대방이 통화 중일때 notify_cb가 오지 않습니다. 문제 있는 것인가요?"
categories:
  - faqs
  - Call End
tags:
  - release code
  - notify_cb
  - BUSY
---

상대방(Responder, Callee 혹은 착신자)이 통화 중일때 서버(App Server, Application Server)로 Notify는 호출 되지 않고 바로 Call Event가 호출 됩니다.

이때 다음과 같은 통화 종료 이유가 함께 설정 됩니다.

* `call_end_reason` field: CALLEE_BUSY
* `terminate field`: BUSY





----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.

