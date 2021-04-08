---
title: "Call Init Data"
categories:
  - documents
  - Function
tags:
  - function
---

<span style="font-size: 150%; color:lightblue">In 1:1 calls</span>,
a caller can send a limited size of data to a callee
<span style="font-size: 150%; color:lightblue">before the callee accepts the call</span>.

This `Call Init Data` is set by a caller in the `makeCall` API as one of arguments.
And, the value is delivered to the callee in the `evtVerified` event.

Please check [1:1 call flow]({{site.baseurl}}/documents/article/flow-call/) to understand more about the `Call Init Data` flow.
<br><br><br>
### Call Init Data vs Service Ticket ID(stid)

They have the same data source but a different destination.

| | From --> To | Call Type |
|---|---|---|
| `Call Init Data` | Caller AppClient -->  Callee AppClient | Only 1:1 call |
| `Server Ticket ID` | Caller AppClient --> AppServer | 1:1 call<br> conference call|
