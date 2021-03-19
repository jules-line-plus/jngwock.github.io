---
title: "Presentation - Screen share"
categories:
  - documents
  - Function
tags:
  - function
---

Presentation means a presenter shares his or her screen to show a material such as slides to the other call peer(s).

PlanetKit tries HD video to presentation so the clients should to be under good network.
Please check [Network Requirements]({{site.baseurl}}/documents/article/art-sys-spec/#4-network-requirements) 
for the detail information.

## Presentation life time

A presenter decides when the presentation starts or ends by calling `startMyScreenShare()` and `stopMyScreenShare()`.<br>

| Presenter API | Counterpart event | Counterpart render API |
| ---- | ---- | ---- |
| startMyScreenShare()<br>Result: compStarted() | evtPeerScreenShareStarted | addPeerScreenShareView() |
| stopMyScreenShare()<br>Result: compStopped() | evtPeerScreenShareStopped | removePeerScreenShareView() |

Counterpart means a peer in a 1:1 call or participants in a group call.<br>
After being notified by `evtPeerScreenShareStarted` that a presentation has started, 
the counterpart must create a view instance and call `addPeerScreenShareView()` to let PlanetKit render.

## Controls by peers

Once a presentation is started, peer or participants will be automatically shared the presentation video.
After that if peer or participants hope to pause or resume the presenting video, 
can use `pausePeerScreenShare()` or `resumePeerScreenShare()`.

## Desktop consideration
A desktop application can choose monitor screen or only application window to share.
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
When a presenter calls `stopMyScreenShare()`, it can add a reason that is defined by application requirements. 
If so, the counter part event `evtPeerScreenShareStopped` delivers the reason value. <br>
The reason is integer type, so an application should share the definition among multiple platform applications or different application codes.<br>
If do not use reason field, `evtPeerScreenShareStopped` delivers `-1` or FALSE value in the `hasReason`.

## History
2021-02-05 The first version <br>
