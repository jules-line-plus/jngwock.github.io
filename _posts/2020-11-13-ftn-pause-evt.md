---
title: "Video pause event"
categories:
  - documents
  - Function
tags:
  - Function
---

LINE Planet releases `evtPeerUpdated` event when a peer pauses its video stream.

The video stream can be paused for various reasons such as
user selection or disabling a camera device.

`pauseReason` lets an application know the pause reason.

> In Conference, <br>
> the `callParam::shareVideoPause` must be set as `TRUE`
> if hope to share its own pause status to others.
> <span style="font-size: 100%; color:yellow">Default value: `FALSE`</span>

| `pauseReason` | Description |
| ---- | ---- |
| ByUser | When a peer calls `pauseVideo()` |
| ByInterrupt | When the app enters background status |
| EnableVideoResponse | Only for 1:1 call. Please refer to [Enable video]({{site.baseurl}}/documents/function/ftn-atov/#11-call)
| CameraInactive | When the camera device is being disabled |
| Hold | When a peer calls hold(). Please refer to [Hold]({{site.baseurl}}/documents/function/ftn-hold/) |
