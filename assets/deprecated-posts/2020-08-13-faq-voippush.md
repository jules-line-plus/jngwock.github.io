---
title: "iOS 샘플앱 코드를 보면 VoIP 전용 푸쉬를 사용하는데, 서버(App Server, Application Server)에서 어떻게 해야 하나요?"
categories:
  - faqs
  - Server and Environment
tags:
  - iOS
  - APNs
---

VoIP push를 사용 하기 위해 서버측에서는 푸쉬 연동 방식에 따라 필요한 작업을 수행 하셔야 합니다. 
* Case 1 APNs 연동) 이 경우 <span style="color:orange">"apns-topic header"</span>에 <span style="color:orange">"voip"</span>를 추가 해 주시면 됩니다. 
[Sending Notification Request to APNs](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) 를 참고 해 주세요.
* Case 2 NPush 이용) 이 경우는 option에 <span style="color:orange">"apns-push-type"</span>에 <span style="color:orange">"voip"</span>를 지정하면 됩니다.

참고로 iOS 샘플앱에서는 VoIP push와 일반 push를 선택해서 사용 할 수 있습니다. 


----

다음의 문서들을 참고 하시면 도움이 될 수 있습니다.
* [용어 해설]({{ site.baseurl }}/documents/article/terminology)에서는 기본적으로 사용하고 있는 용어를 설명하고 있습니다.
* [플래닛 개념]({{ site.baseurl }}/about/)은 Planet을 처음 접하셨을 때 도움이 될 수 있습니다.
* [빠른 시작]({{ site.baseurl }}/documents/quick start/howto-integrate/)은 Planet을 연동 가이드를 제공합니다.
* [토폴로지]({{site.baseurl}}/documents/article/topo-general/) 에서 푸시 발송 관련한 개념을 설명하고 있습니다.




