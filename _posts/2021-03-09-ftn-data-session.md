---
title: "Data session API"
categories:
  - documents
  - Function
tags:
  - function
---

LINE Planet provides data session for an application to communicate application data.<br>
For example, an application sends or receives text message to implement text chatting during a conference.<br>
Note that data session is only available after a call setup is completed or join in a conference.<br>

Application must define data communication protocol and LINE Planet just provides data session(s) 
as a communication channel for application's data communication protocol.

<span style="font-size: 70%; color:deepskyblue">
LINE Planet is a real time communication platform. <br>
And the real time communication on the internet is not guaranteed because packets 
could be lost or delayed depends on current network condition.
These network impairments affect real time communication quality. Even 
sometimes the call(or conference) cannot be continued.<br>
Also heavy traffic could cause various network impairments.<br>
***When an application uses data session,
please perceive data communication makes lower voice communication or video communication quality***
.<br>
</span>

| Supported service type | Minimum SDK version| 
| ---- | ---- |
| 1:1 call, group call | PlanetKit 3.2 for iOS, macOS and Android<br> PlanetKit 3.3 for Windows<br> WebPlanetKit NOT Supported|

<!--  refrence
https://wiki.linecorp.com/display/voip/AMP+core+API+for+data+session
-->

## Data session APIs

<span style="font-size: 70%; color:green">
An API signature describing this page is different with the real code's. 
Please refer API reference documents or codes in implementation.
</span>

Data session apis are directional - Send and Receive. For each side, 
application should request a data session with pre-defined stream id. 
The 'pre-defined' means the stream id value is discussed between the both side before implementation stage.

### About Stream ID
A stream id is an identifier of data communication defined by application in a design stage. 
This is not dynamic.
If A receiver cannot handle a specific stream id, must stop to use it.

<span style="font-size: 100%; color:deepskyblue;">
Available Stream ID Range: 100 ~ 1000
</span>

Application must choose stream ids within above available stream id range.

Requesting both sides for the one stream id is available.

### API Summary
Related APIs(including event callbacks) are following:

| Sender side | |
| ---- | ---- |
| makeSendDataSession | Make one data session for a stream id |
| dataSessionSend | Send data |
| dataSessionChangeDestination| Change destination |
| isSupportedDataSession | Check data session compatibility in 1:1 call |

| Receiver side | |
| ---- | ---- |
| evtDataSessionIncoming | New data has arrived through a data session mapped a stream id |
| makeRecvDataSession | Make one data session to receive |
| unsupportDataSession| Un-support the stream id |

### Data session lifetime

Once a data sessions is made, it is active until the call(or conference) session is ended.<br>

### Data session streaming type
Data session has 3 streaming types. Application should choose which type to use depends on application data characteristics.

| Type | Description |
| ----  | ---- |
| Reliable message | Lost packets will be retransmitted. <br>`evtDataSessionRecved` is called when every one message is aggregated. So it is called as `dataSessionSend` calling times.|
| Reliable bytes | Lost packets will be retransmitted. <br>SDK fragments data if the data is larger than MTU. However will not aggregate packets on the receiver side. Application should aggregate fragmented packets. |
| UnReliable bytes | Lost packets are not retransmitted. <br>SDK only fragments data such as 'Reliable byte'. |

### APIs

<span style="font-size: 120%; color:yellowgreen;">
Sender side<br>
</span>

| makeSendDataSession(streamId, type, cbException ,completion...) |
| ---- |
| Request the new data session to send belong to `streamId` |
| @[streamId](#about-stream-id): stream identifier defined by application|
| @[type](#data-session-streaming-type): data streaming type|
| @cbException(streamId, exceptionType, ...): Called when exception occur|
| @completion(streamId, ...): Completion callback. Application must use the stream id after this completion. |

Following table shows the sender side exception list. 
Please refer and do proper actions on the application layer.
Note that too much traffic could lower the audio and video communication quality.

| Type | Description<br>Direction | Application should do |
| ---- | ---- | ---- |
| TooLong<br>QueuedData<br>(Triggered=TRUE) | Detected that the data traffic is too much| Application should stop or lower send bitrate|
| TooLong<br>QueuedData<br>(Triggered=FALSE) | Network condition is being better before | Available more send traffic|
| UnspportedDataSessionStreamId | Released when `unsupportDataSession` is called on the receiver side  | Do not use that stream id|

Please note that the more `TooLongQueuedData` event would the lower voice and video quality.

<br>

| dataSessionSend(streamId, ...) |
| ---- |
| Send data |
| @streamId: stream id |

<br> 

| dataSessionChangeDestination(streamId, userId, completion, ...) |
| ---- |
| Change destination. Default means broadcast. |
| @streamId: stream id |
| @userId: user id. Null means broadcast. |
| @completion: Completion callback. Changed destination will be applied after this callback. |

<br>
<span style="font-size: 120%; color:yellowgreen;">
Receiver side<br>
</span>

| evtDataSessionIncoming (streamId, ...) |
| ---- |
| When arrive a new data via the data session that had have made and sent by the sender side, a receiver side is notified by `evtDataSessionIncoming`.|
| @[streamId](#about-stream-id): `streamId` in `requestSendDataSession()` called by the sender |

> In a conference, <br>
> late joiners will also receive `evtDataSessionIncoming` when receiving the data after join flow completion.

<span style="font-size: 70%;">
 The late joiner means who joins after someone has already started a data stream
 </span>

| makeRecvDataSession(streamId, cbRecved, cbException, completion, ...) |
| ---- |
| Request the new data session to receive belong to `streamId` |
| @[streamId](#about-stream-id): stream identifier defined by application. `evtDataSessionIncoming` delivers this from peer's `streamId` in `requestSendDataSession`|
| @cbRecved(streamId, data, ...) : Received data callback |
| @cbException(streamId, exceptionType, ...): Called shen exception occur |
| @completion(streamId, ...): Completion callback. `cbRecved` is called after this completion. |
  
<br> 

| unsupportDataSession(streamId, ...) |
| ---- |
| Call this when an application receive unknown `streamId` in `evtDataSessionIncoming`. This function lets sender stop to send.  |
|@[streamId](#about-stream-id): stream identifier defined by application. `evtDataSessionIncoming` delivers this from peer's `streamId` in `addSendDataSession()`|

<br> 


## Data session compatibility
* 1:1 call
  * isSupportedDataSession() provides whether if the peer supports data session or not.
* Group call
  * Participant info describes whether if a participant supports data session or not
  
Even the peer(s) has data session capability, capability of handling a specific stream id is another compatibility issue.
This issue is about handling of a not implemented stream id old versions.

Compatibility pre-check of specific stream id could be solved by calling `rejectRecvDataSession()`.
Or implement reliable stream id data session that is available from the first version.

## History
2021-03-09 The first version <br>
