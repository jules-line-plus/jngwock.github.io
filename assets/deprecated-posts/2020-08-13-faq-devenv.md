---
title: "Planet은 개발 환경이 어떻게 구성 되어 있고 연동을 위해서 무엇을 해야 하나요?"
categories:
  - faqs
  - Server and Environment
tags:
  - quick start
---

LINE Planet 은 두 개의 서버 군을 제공 합니다. Application 에서는 연동 할 서버 군을 선택 하고 이에 맞는 SLA 키와 서버 주소를 설정 해 주셔야 합니다.

> ***Evaluation***<br>
> Application에서 개발하기 위한 클라우드 입니다. 또한 컨셉 확인 단계에서 짧은 시간에 VoIP 기능을 서비스에 통합하고 평가 할때 사용 할 수 있습니다.

> ***Real***<br>
>  실제 서비스를 위한 클라우드 입니다.



Application은 개발을 위해 여러 개발 환경을 갖추고 있을 수 있습니다.
<span style="color:orange">
Application의 개발 환경과 연동 하기 위해서는 Application의 개발 환경 별로 SLA 키를 발급 받고 또한 적절한 Planet의 개발 환경과 연동 해야 합니다.
</span>

예를 들어 Application 에서 갖추고 있는 개발 환경이 Development / RC / Real 이라고 가정 하면 다음과 같은 연동이 적합 할 수 있습니다.

| Application 개발 환경	| LINE Planet 개발 환경|
| --- | --- |
| Development |	Evaluation |
| RC |	Real |
| Real | Real |


위와 같은 경우 Application 은 총 세개의 SLA키를 발급 받으셔서 각 환경에 맞게 설정을 해주셔야 합니다.

또한 내부 접근 서버 주소도 연동할 LINE Planet 개발 환경의 주소를 사용 해 주셔야 합니다. 
즉, <span style="color:orange"> Development는 LINE Planet 의 Evaluation 의 서버 주소를, RC/Real은 LINE Planet 의 Real 의 서버 주소</span>를 설정 해 주셔야 합니다.

[개발 환경]({{ site.baseurl }}/documents/article/art-planet-env/)은 이와 관련하여 예제를 제공하고 있습니다.

----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.
* [플래닛 개념]({{ site.baseurl }}/about/)은 Planet을 처음 접하셨을 때 도움이 될 수 있습니다.
* [빠른 시작]({{ site.baseurl }}/documents/quick start/howto-integrate/)은 Planet을 연동 가이드를 제공합니다.




