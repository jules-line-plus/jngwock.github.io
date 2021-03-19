---
title: "Responder preparation status"
categories:
  - documents
  - Function
tags:
  - function
---

`Responder preparation status`<span style="font-size: 150%; color:lightblue"> gives callee a time to ready</span> for communication.
<br><br>
<span style="font-size: 150%; color:lightblue">In 1:1 call</span>, 
callee may need to time to prepararation to check her/his face or something 
before starting a bidirectional communication. 
By appliying `Responder preparation status` to 1:1 call setup flow, 
an application easily implements above user requirement. 
In particularly, the application could solve the compatibiliy issue between caller and callee. 
![]({{ site.baseurl }}/assets/images/rpreparation.png)

AppClient in the callee side, 
<span style="font-size: 150%; color:lightblue">must consider caller's capabiliy</span> to enable `Responder preapration status`.
<br><br>
Also Caller's AppClient can present that the callee is now preparing to start the call when `evtConnected` is released.
LINE Planet doesn' send or receive any media packets in this preparation status.
<br><br>
By the callee finishs the preparation that means calling `finishPreparation` API, 
LINE Planet starts to send or receive media packets for the bidirectional communication.
