---
title: "Data session API"
categories:
  - documents
  - Function
tags:
  - function
---

LINE Planet provides a data session for applications to communicate application data.<br>
For example, an application sends or receives text messages to enable text chatting during a conference.<br>
Note that a data session is available only after a call is set up or engages in a conference.<br>

Applications must define data communication protocol and LINE Planet just provides data session(s)
as a communication channel for application's data communication protocol.

<span style="font-size: 70%; color:deepskyblue">
LINE Planet is a real time communication platform. <br>
And the real time communication on the internet is not guaranteed because packets
could be lost or delayed, depending on network conditions at a given time.
These network impairments affect real time communication quality. Even
sometimes the call (or conference) can be interrupted.<br>
Heavy traffic could cause various network impairments as well.<br>
***When an application uses a data session,
note that data communication undermines the quality of voice or video communication.***
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
An API signature described on this page is different with the real code's.
Please refer to API reference documents or codes in implementation.
</span>

Data session APIs are directional - Send and Receive. For each side,
applications should request a data session with pre-defined stream id.
The 'pre-defined' means the stream id value is discussed between the both sides before the implementation stage.

### About Stream ID

Stream id is an identifier of data communication defined by each application in the design stage.
This is not dynamic.
If receiver A cannot handle a specific stream id, it must stop to use it.

<span style="font-size: 100%; color:deepskyblue;">
Available Stream ID Range: 100 ~ 1000
</span>

Applications must choose a stream id within the stream id range as described above.

Requesting both sides for one stream id is available.

### API Summary
Related APIs (including event callbacks) are as follows:

| Sender side | |
| ---- | ---- |
| makeSendDataSession | Make one data session per stream id |
| dataSessionSend | Send data |
| dataSessionChangeDestination| Change destination |
| isSupportedDataSession | Check data session compatibility in 1:1 call |

| Receiver side | |
| ---- | ---- |
| evtDataSessionIncoming | New data has arrived through a data session mapped to the stream id |
| makeRecvDataSession | Make one data session to receive |
| unsupportDataSession| Un-support the stream id |

### Data session lifetime
Once a data sessions is created, it is active until the call (or conference) session is ended.<br>

### Data session streaming type
Data session has three streaming types. Applications should choose which type to use, depending on application data characteristics.

| Type | Description |
| ----  | ---- |
| Reliable message | Lost packets will be retransmitted. <br>`evtDataSessionRecved` is called when each message is aggregated. So it is called as `dataSessionSend` calling times.|
| Reliable bytes | Lost packets will be retransmitted. <br>SDK fragments data if the data is larger than MTU. However, packets are not aggregated on the receiver side. Applications should aggregate fragmented packets. |
| UnReliable bytes | Lost packets are not retransmitted. <br>SDK only fragments data as 'Reliable byte'. |

### APIs

<span style="font-size: 120%; color:yellowgreen;">
Sender side<br>
</span>

| makeSendDataSession(streamId, type, cbException ,completion...) |
| ---- |
| Request a new data session to send data with `streamId` |
| @[streamId](#about-stream-id): stream identifier defined by application|
| @[type](#data-session-streaming-type): data streaming type|
| @cbException(streamId, exceptionType, ...): Called when exception occurs|
| @completion(streamId, ...): Completion callback. Applications must use the stream id upon completion. |

The following table shows the sender side exception list.
Please refer to the table and take a necessary action on the application layer.
Note that too much traffic could lower the audio and video communication quality.

| Type | Description<br>Direction |Required action by Application |
| ---- | ---- | ---- |
| TooLong<br>QueuedData<br>(Triggered=TRUE) | Data traffic is too heavy| Stop or lower send bitrate|
| TooLong<br>QueuedData<br>(Triggered=FALSE) | Network conditions are better | Send more traffic|
| UnspportedDataSessionStreamId | Released when `unsupportDataSession` is called on the receiver side  | Do not use that stream id|

Please note that incremental `TooLongQueuedData` events would lower the voice and video quality.

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
| When new data arrive from the sender during a data session, the receiver side is notified by `evtDataSessionIncoming`.|
| @[streamId](#about-stream-id): `streamId` in `requestSendDataSession()` called by the sender |

> In a conference, <br>
> late joiners will also receive `evtDataSessionIncoming` when receiving the data upon completion of the join flow.

<span style="font-size: 70%;">
 Late joiners are those who join after someone has already started a data stream.
 </span>

| makeRecvDataSession(streamId, cbRecved, cbException, completion, ...) |
| ---- |
| Request a new data session to receive data with `streamId` |
| @[streamId](#about-stream-id): Stream identifier defined by application. `evtDataSessionIncoming` delivers this from peer's `streamId` in `requestSendDataSession`.|
| @cbRecved(streamId, data, ...) : Received data callback |
| @cbException(streamId, exceptionType, ...): Called when exception occurs |
| @completion(streamId, ...): Completion callback. `cbRecved` is called upon completion. |

<br>

| unsupportDataSession(streamId, ...) |
| ---- |
| Call this when an application receives data with a unknown `streamId` in `evtDataSessionIncoming`. This function lets the sender to stop.  |
|@[streamId](#about-stream-id): Stream identifier defined by application. `evtDataSessionIncoming` delivers this from peer's `streamId` in `addSendDataSession()`.|

<br>


## Data session compatibility
* 1:1 call
  * isSupportedDataSession() checks whether the peer supports a data session or not.
* Group call
  * Participant info describes whether a participant supports data session or not

Even the peer(s) has data session capability, handling a specific stream id is another compatibility issue.
This issue is related to handling of old version stream id that is not implemented.

Compatibility pre-check of a specific stream id could be solved by calling `rejectRecvDataSession()`
or by implementing a reliable stream id data session that is available from the first version.

## History
2021-03-09 The first version <br>
