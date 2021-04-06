---
title: "Network firewall settings for LINE Planet"
categories:
  - documents
  - Article
tags:
  - kitDisconnectReason
---

If your application cannot make a call or join a conference
and disconnected with `kitDisconnectReason :: ServiceHttpError`,
you should check network connection or network firewall settings.

## LINE Planet firewall rules

Please refer to the following table to check your network firewall.

<span style="font-size: 130%; color:deepskyblue">
PlanetKit
</span>
<span style="font-size: 100%; color:deepskyblue">
(iOS, macOS, Android and Windows)
</span>

| Protocol | Source | Destination | Ports |
| --- | --- | --- | --- |
| TCP | Any | https://voipnx-saturn.line-apps.com<br> 147.92.144.0/24 | 443 |
| TCP | Any | 110.93.154.0/24<br> 110.93.157.0/24<br> 110.93.156.0/24<br> 147.92.179.0/24<br> 147.92.147.0/24<br> 147.92.166.0/24<br> 203.104.162.0/24<br> 203.104.164.0/24 | 10001~10020 |
| UDP | Any | 110.93.154.0/24<br> 110.93.157.0/24<br> 110.93.156.0/24<br> 147.92.179.0/24<br> 147.92.147.0/24<br> 147.92.166.0/24<br> 203.104.162.0/24<br> 203.104.164.0/24 | 10001~30000 |

<span style="font-size: 130%; color:deepskyblue">
WebPlanetKit
</span>

| Protocol | Source | Destination | Ports |
| --- | --- | --- | --- |
| TCP | Any | voipnx-wtp-kr.line-apps.com<br> 223.130.192.0/24 | 12000 |
| UDP | Any | 110.93.157.0/24<br> 110.93.156.0/24 | 20000~30000 |

## History
2021-03-04 Apply scale up and WebPlanetKit<br>
2021-02-05 Apply scale up<br>
2020-11-18 The first version
