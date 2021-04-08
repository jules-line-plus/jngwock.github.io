---
title: "Responder preparation status"
categories:
  - documents
  - Function
tags:
  - function
---

`Responder preparation status`<span style="font-size: 150%; color:lightblue"> gives callees a time to get ready</span> for communications.
<br><br>
<span style="font-size: 150%; color:lightblue">In 1:1 calls</span>,
the callee may need time for preparation such as checking their face or outfit
before starting a bidirectional communication.
By adding `Responder preparation status` to the 1:1 call setup flow,
applications can easily fulfill various user needs as mentioned above.
In particular, the application could solve the compatibility issue between caller and callee.
![]({{ site.baseurl }}/assets/images/rpreparation.png)

AppClient, on the callee side,
<span style="font-size: 150%; color:lightblue">must consider caller's capability</span> to enable `Responder preparation status`.
<br><br>
Also, Caller's AppClient can present that the callee is now preparing to start the call when `evtConnected` is released.
LINE Planet doesn't send or receive any media packets in this preparation status.
<br><br>
When the callee finishes the preparation time and calls the `finishPreparation` API, 
LINE Planet starts to send or receive media packets for the bidirectional communication.
