---
title: "Video pause event"
categories:
  - documents
  - Function
tags:
  - Function 
---

LINE Planet releases `evtPeerUpdated` event when a peer pauses its video stream.

The video stream would be paused by various reasons such as 
by use selection or by disabling a camera device.

`pauseReason` lets an application know the pause reason.

> In Conference, <br>
> the `callParam::shareVideoPause` must be set as `TRUE`
> if hope to share its own pause status to others.
> <span style="font-size: 100%; color:yellow">Default value: `FALSE`</span>

| `pauseReason` | Description |
| ---- | ---- |
| ByUser | When a peer calls `pauseVideo()` |
| ByInterrupt | When the app enters background status |
| EnableVideoResponse | Only for 1:1 call. Please refer [Enable video]({{site.baseurl}}/documents/function/ftn-atov/#11-call) 
| CameraInactive | When the camera device is being disabled |
| Hold | When a peer calls hold(). Pleser refer [Hold]({{site.baseurl}}/documents/function/ftn-hold/) |

