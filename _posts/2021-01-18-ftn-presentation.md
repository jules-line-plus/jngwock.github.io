---
title: "Presentation - Screen share"
categories:
  - documents
  - Function
tags:
  - function
---

Presentation is when a presenter shares his or her screen to show a material such as slides to the other call peer(s).

PlanetKit supports HD video with presentation so clients should be in good network conditions.
Please check [Network Requirements]({{site.baseurl}}/documents/article/art-sys-spec/#4-network-requirements)
for more information.

## Presentation life time

A presenter determines when start or end the presentation by calling `startMyScreenShare()` and `stopMyScreenShare()`.<br>

| Presenter API | Counterpart event | Counterpart render API |
| ---- | ---- | ---- |
| startMyScreenShare()<br>Result: compStarted() | evtPeerScreenShareStarted | addPeerScreenShareView() |
| stopMyScreenShare()<br>Result: compStopped() | evtPeerScreenShareStopped | removePeerScreenShareView() |

Counterpart means a peer in a 1:1 call or participants in a group call.<br>
After being notified by `evtPeerScreenShareStarted` that a presentation has started,
the counterpart must create a view instance and call `addPeerScreenShareView()` to let PlanetKit render.

## Controls by peers

Once a presentation starts, the presentation video will be automatically shared with the peer or participants.
After that, if the peer or participants want to pause or resume the video,
they can use `pausePeerScreenShare()` or `resumePeerScreenShare()`.

## Desktop consideration
A desktop application can let the user choose a monitor screen or application window to share.
So the application on Windows and macOS should decide which screen will be shared before calling `startMyScreenShare()`.
PlanetKit provides the available screen list for the application. Please check this via sample codes.

## 1:1 call
![]({{site.baseurl}}/assets/images/present-1x1-start.png)

![]({{site.baseurl}}/assets/images/present-1x1-end.png)

## Group call
![]({{site.baseurl}}/assets/images/present-NxN-start.png)

![]({{site.baseurl}}/assets/images/present-NxN-end.png)

![]({{site.baseurl}}/assets/images/present-NxN-lj.png)

## Reason to stop screen share
When a presenter calls `stopMyScreenShare()`, he/she can add one of the reasons defined as application requirements.
If so, the counterpart event `evtPeerScreenShareStopped` delivers the value of the reason. <br>
This value is an integer type, so the application should share the definition among multiple platform applications or different application codes.<br>
If the reason field is not used, `evtPeerScreenShareStopped` delivers `-1` or FALSE value in the `hasReason`.

## History
2021-02-05 The first version <br>
