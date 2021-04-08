---
title: "Network Unavailable Event"
categories:
  - documents
  - Function
tags:
  - function
  - kitDisconnectReason
---


<span style="font-size: 150%; color:lightblue">Network Unavailable Event</span> notifies when the network becomes unstable.
The LINE Planet call quality could deteriorate when the network has a problem.
LINE Planet will try re-connect the call for a while after releasing <span style="font-size: 150%; color:red">`evtNetworkUnavailable`</span>.
<br>
<br>
If the reconnection try fails, LINE Planet call is disconnected with
<span style="font-size: 150%; color:orange">`kitDisconnectReason :: NetworkUnavailable`</span>.<br>
However, if the reconnection try is successful, LINE Planet continues the call with <span style="font-size: 150%; color:red">`evtNetworkReavailable`</span>.
<br>
<br>
These events are released in 1:1 call type only.
<br>
<br>
Applications can show a message why the current call has a problem, using this event.<br>


#### evtNetworkUnavailable
Released when the network has a problem.

| Event Parameters | Description |
| ---- | ---- |
| isPeer| TRUE: the peer network has a problem.<br> FALSE: the local network has a problem |
| willDisconnectAfterSec | The call will be disconnected after `willDisconnectAfterSec` value seconds with `NetworkUnavailable` client disconnect reason if re-connection fails. |


#### evtNetworkReavailable
Released when the network problem is recovered.

| Event Parameters | Description |
| ---- | ---- |
| isPeer| TRUE: the peer network had a problem.<br> FALSE: the local network had a problem |
