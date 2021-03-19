---
title: "Network Unavailable Event"
categories:
  - documents
  - Function
tags:
  - function
  - kitDisconnectReason
---


<span style="font-size: 150%; color:lightblue">Network Unavailable Event</span> notifies the network becomes unstable. 
The LINE Planet call quality could be bad when the network has a problem.
LINE Planet will try re-connect the call for a while after releasing <span style="font-size: 150%; color:red">`evtNetworkUnavailable`</span>.
<br>
<br>
If trying reconnection is fail, LINE Planet call is disconnected with 
<span style="font-size: 150%; color:orange">`kitDisconnectReason :: NetworkUnavailable`</span>.<br>
However if trying reconnection is successful, LINE Planet continues the call with <span style="font-size: 150%; color:red">`evtNetworkReavailable`</span>.
<br>
<br>
These events are released in only 1:1 call type.
<br>
<br>
An application can show a message why the current call has a problem by using this events.<br>


#### evtNetworkUnavailable
Release when a network gets a problem.

| Event Parameters | Description |
| ---- | ---- |
| isPeer| TRUE: the peer network has a problem.<br> FALSE: the local network has a problem |
| willDisconnectAfterSec | The call will be disconnected after `willDisconnectAfterSec` value seconds with `NetworkUnavailable` client disconnect reason if re-connection gets failure. |


#### evtNetworkReavailable
Release when the network problem is recovered.

| Event Parameters | Description |
| ---- | ---- |
| isPeer| TRUE: the peer network had a problem.<br> FALSE: the local network had a problem |



