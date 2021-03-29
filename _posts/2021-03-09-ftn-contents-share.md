---
title: "Shared contents API"
categories:
  - documents
  - Function
tags:
  - function
---

Contents share API lets an application share time related data with peers.
The shared data could be anything but only up to 1 KBytes in size.

| Supported service type | Minimum SDK version|
| ---- | ---- |
| 1:1 call, group call | PlanetKit 3.2 for iOS, macOS and Android<br> PlanetKit 3.3 for Windows<br> WebPlanetKit NOT Supported|

## Contents share API

| Function | Counterpart event | Description |
| ---- | ---- | ---- |
| setSharedContents(Data)<br> setExclusiveSharedContents(Data)| evtPeerSetSharedContents<br> evtPeerSetExclusiveSharedContents | Write shared-data as a specific value |
| unsetSharedContents(Data)<br> unsetExclusiveSharedContents(Data)| evtPeerUnsetSharedContents<br> evtPeerUnsetExclusiveSharedContents | Clean the shared-data |

Above <span style="color:orange"> contents share APIs are available only after
a call setup is completed - both 1:1 call and group call</span>.

Once someone starts to share data via `setSharedContents()`, others are notified by
`evtPeerSetSharedContents` that delivers the following:

| Field | Description |
| ---- | ---- |
|`user-id` | Application user id |
|`service-id` | Application service id |
|`application-data` and `data-length` | Data itself and size |
|`elapsed-ms-from-last-set` | Elapsed time in millisecond since the shared data was modified |

`elapsed-ms-from-last-set` field lets an application calculate how long time passed from the last modified time.

<span style="color:orange">
Please note that only `setExclusiveSharedContents()` caller can modify the shared data.
</span>

The prefix "Exclusive" means the shared data exists only in one instance for the room (or the call). <br>
If one shared data is required for all in the room, use the exclusive API pair.
Or if all participants require their own data to be shared, use the un-exclusive API pair.<br>

Using both exclusive API and un-exclusive API does not cause any problem.

## Example - raise hands before talking

This is a very simple case to show the usage of the contents share APIs.<br>
This example illustrates what the 'Exclusive' is and how to design shared data structure.<br>
<br>
An application plans to implement 'raise hands' before someone talks by using contents share APIs.<br>
And, the flag saying 'raise hands' is <span style="color:orange">valid only for 3 seconds</span>.

<span style="font-size: 150%; color:lightblue">
The first case
</span>
assumes participants can raise hands at the same time, so multiple participants can raise hands.

1) Shared data structure ={`flag`}.<br>
2) Anyone who wants to talk, call `setSharedContents(flag=TRUE)`<br>
3) All participants will know who wants to talk via `user-id` in `evtPeerSetSharedContents`.<br>
4) When a new participant joins, he(or she) will be notified `evtPeerSetSharedContents`s in 4 seconds.
And only participants eligible for `elapsed-ms-from-last-set` < 3000 msec can 'raise hands'.


<span style="font-size: 150%; color:lightblue">
The second case
</span>
assumes only one talker can raise hands at one time, so only one participant can raise hands.<br>
This case requires a master participant and just assumes user-m is the `user-id` of the master.

1) Shared data structure ={`h-user-id`, `flag`}.<br>
2) Master calls `setExclusiveSharedContents(h-user-id=NULL, flag=FALSE)`.<br>

Hereinafter, others calling `setExclusiveSharedContents()` are ignored.<br>

3) Anyone who wants to talk, call [sendShortData()]({{site.baseurl}}/documents/function/ftn-sendshortdata/) to user-m.<br>
4) Master picks only one participant (assume user-a).<br>
5) Master calls `setExclusiveSharedContents(h-user-id=user-a, flag=TRUE)`.<br>
6) All participants will know user-a(`h-user-id`) wants to talk(`flag=TRUE`) via `evtPeerSetExclusiveSharedContents`. <br>

In the step 6, the caller `user-id` in `evtPeerSetExclusiveSharedContents` is the user-m and this is different from the one who raises hands.



## History
2021-03-09 The first version <br>
