---
title: "Shared contents API"
categories:
  - documents
  - Function
tags:
  - function
---

Contents share api lets an application share time related data with peers. 
The shared data could be anything but 1KBytes limited size.

| Supported service type | Minimum SDK version| 
| ---- | ---- |
| 1:1 call, group call | PlanetKit 3.2 for iOS, macOS and Android<br> PlanetKit 3.3 for Windows<br> WebPlanetKit NOT Supported|

## Contents share API

| Function | Counterpart event | Description |
| ---- | ---- | ---- |
| setSharedContents(Data)<br> setExclusiveSharedContents(Data)| evtPeerSetSharedContents<br> evtPeerSetExclusiveSharedContents | Write shared-data as a specific value |
| unsetSharedContents(Data)<br> unsetExclusiveSharedContents(Data)| evtPeerUnsetSharedContents<br> evtPeerUnsetExclusiveSharedContents | Clean the shared-data |

Above <span style="color:orange"> contents share apis are available only after
a call setup is completed - both 1:1 call and group call</span>.

Once someone starts to share data via `setSharedContents()`, others are notified by 
`evtPeerSetSharedContents` that delivers following:

| Field | Description |
| ---- | ---- |
|`user-id` | Application user id |
|`service-id` | Application service id |
|`application-data` and `data-length` | Data itself and size |
|`elapsed-ms-from-last-set` | elapsed millisecond time from the shared data is modified |

`elapsed-ms-from-last-set` field lets an application calculate how long time passed from the last modified time.

<span style="color:orange">
Please note that only `setExclusiveSharedContents()` caller can modify the shared data.
</span>

The prefix "Exclusive" means the shared data exists only one instance during the room (or the call). <br>
If one shared data is required for all in the room, use the exclusive API pair.
Or if all participants require its own data to be shared, use the un-exclusive API pair.<br>

Using both exclusive API and un-exclusive API does not cause any problem.

## Example - raise hands before talking

This is a very simple case to show the usage of the contents share apis.<br>
We hope to understand what the 'Exclusive` is and how to design shared data structure by this example.<br>
<br>
An application plans to implement 'raise hands' before someone talks by using contents share apis.<br>
And the flag saying 'raise hands' is <span style="color:orange">valid only 3 seconds</span>.

<span style="font-size: 150%; color:lightblue">
The first case 
</span>
assumes anyone can raise hands at one time, so multiple participants can raise hands.

1) Shared data structure ={`flag`}.<br>
2) Anyone who want to talk, call `setSharedContents(flag=TRUE)`<br>
3) Everyone knows who want to talk via `user-id` in `evtPeerSetSharedContents`.<br>
4) When a new participant joins 4 seconds later, he(or she) will be notified `evtPeerSetSharedContents`s. 
And only participants belong to `elapsed-ms-from-last-set` < 3000 msec are handled as 'raise hands'.


<span style="font-size: 150%; color:lightblue">
The second case 
</span>
assumes only one talker can raise hands at one time, so only one participant can raise hands.<br>
This case requires a master participant and just assume user-m is the `user-id` of the master.

1) Shared data structure ={`h-user-id`, `flag`}.<br>
2) Master calls `setExclusiveSharedContents(h-user-id=NULL, flag=FALSE)`.<br>

Here after, others calling `setExclusiveSharedContents()` is ignored.<br>

3) Anyone who want to talk, call [sendShortData()]({{site.baseurl}}/documents/function/ftn-sendshortdata/) to user-m.<br>
4) Master picks only one participant(assume user-a).<br>
5) Master calls `setExclusiveSharedContents(h-user-id=user-a, flag=TRUE)`.<br>
6) Everyone knows user-a(`h-user-id`) want to talk(`flag=TRUE`) via `evtPeerSetExclusiveSharedContents`. <br>

In the step 6, the caller `user-id` in `evtPeerSetExclusiveSharedContents` is the user-m and this is different someone who raises hands.



## History
2021-03-09 The first version <br>
