---
title: "음성/영상 통화 관련 해서 서버(App Server, Application Server)에서 구현 해야할 작업이 궁금합니다"
categories:
  - faqs
  - Server and Environment
tags:
  - quick start
---

LINE Planet server와의 인터페이스를 구현 해야 합니다.

* notify_cb : 통화 연결시 LINE Planet Server가 호출 해 줄는 콜백 API
* on_call_evt_cb : 통화 종료시 LINE Planet Server가 호출 해 주는 콜백 API

위와 관련한 스펙은 [Server Callback Specification]( {{site.baseurl}}/documents/api specification/api-server/)를 참고 하실 수 있습니다.


참고로 Planet은 자체적으로 푸쉬 연동을 하지 않습니다. 만일 서비스가 모바일 푸시를 사용 한다면 푸시 발송 및 디바이스 푸시 토큰 관리도 해야 합니다.

[토폴로지]({{site.baseurl}}/documents/article/topo-general/) 에서 푸시 발송 관련한 개념을 설명하고 있습니다.

----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.
* [플래닛 개념]({{ site.baseurl }}/about/)은 Planet을 처음 접하셨을 때 도움이 될 수 있습니다.
* [빠른 시작]({{ site.baseurl }}/documents/quick start/howto-integrate/)은 Planet을 연동 가이드를 제공합니다.




