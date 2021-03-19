---
title: "통화종료 이유를 서비스에서 자체적으로 정의 해서 쓰는게 가능 한가요?"
categories:
  - faqs
  - Call End
tags:
  - release code
---

통화 종료시, PlanetKit API에 아규먼트를 입력하면 가능합니다. 이때 입력된 아규먼트 값은 서버로도 전달 됩니다. 
[Call Event]({{ site.baseurl }}/documents/api specification/api-server-callevt/)를 참고해 주세요.

또한 이 값은 상대방에게도 해당 통화 종료 이벤트가 발생 할때 이벤트의 아규먼트로 전달 됩니다.


어플리케이션은 스트링 타입의 통화 종료 이유를 정의 할 수 있습니다.





----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.

