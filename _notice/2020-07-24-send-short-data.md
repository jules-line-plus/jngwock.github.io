---
layout: archive
title: "Add Send Short Data API"
author_profile: true
type: LINE PLANET RELEASE
excerpt_separator: <!--more-->
---


플래닛의 새로운 기능 - Send Short Data 기능이 추가 되어 릴리즈 되었습니다.

<!--more-->
> send short data api 는 통화가 연결된 이후에 application 에서 원하는 데이터를 상대방에게 보낼 수 있습니다.
> 현재는 1:1 콜만 가능 하지만 추후 그룹콜이 지원되는 경우에는 룸에 참여한 사람들에게 보낼 수 있습니다.<br>
> <br>
> 트렌젝션 기반의 전송방식이기 때문에 최대 700 바이트까지 전송 가능하며,
> 한 트렌젝션 내에서는 전송이 실패한 경우 자체적으로 몇 번 재전송을 시도 합니다.
> 하지만 망 상황에 의해 모든 재전송을 실패 하면(상대방으로 부터 수신 응답을 못 받으면),
> 실패 결과를 application에게 알려주며,  이때 application에서는 적절한 조취를 취해주셔야 합니다.


