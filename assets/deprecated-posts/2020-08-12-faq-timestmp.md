---
title: "클라이언트 앱(App, Application)에서 오디오 및 영상 데이터를 받아 올때 Timestamp가 있는데 어떤 의미인가요?"
categories:
  - faqs
  - Client
tags:
  - PlanetKit
  - timestamp
---

PlanetKit SDK는 미디어 데이터 인터페이스를 통해 application 에 미디어 데이터를 전달 할 수 있습니다. 이 때 미디어와 함께 timestamp가 제공 되고 있습니다.
이 timestamp는 PlanetKit SDK 내부에 기준이 되는 하나의 wall clock이 있으며 이 시간의 흐름을 미디어에 찍어서 제공 합니다.


예를 들어 같은 timestamp 값이 다른 미디어의 데이터 - 오디오와 비디오 - 에 온다면 두 미디어는 같은 시간에 발생했음을 의미 하며 시간적으로 동기가 맞아야 함을 의미 합니다.


PlanetKit SDK가 제공 하는 timestamp의 clock rate는 nano-seconds 입니다.

----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.




