---
title: "PlanetKit System Requirements"
categories:
  - documents
  - Article
tags:
  - PlanetKit
  - iOS
  - Android
  - Windows
  - macOS
  - requirements
---
## Contents

[1. Operating System Requirements](#1-operating-system-requirements) <br>
[2. Audio Device Requirements](#2-audio-device-requirements)<br>
[3. Video Device Requirements](#3-video-device-requirements)<br>
[4. Network Requirements](#4-network-requirements)<br>
<!--
[5. CPU/RAM Requirements](#5-cpuram-requirements)<br>
-->


## 1. Operating System Requirements

| Windows | macOS | iOS | Android | Web |
| --- | --- | --- | --- | --- |
| Windows 7 | macOS 10.11 | iOS 11.0 | Android 5.0<br>(min SDK 21) | [WebPlanetKit Supported Browser](https://oss.navercorp.com/PlanetKit/sample-web#supported-browser) |


### Android requires Manifest.permission.READ_PHONE_STATE
PlanetKit assumes mobile phone calls have a higher priority than LINE Planet calls for both 1:1 and group calls.
PlanetKit will end the LINE Planet call when a mobile phone call comes in during the LINE Planet call.
So the android application requires the `Manifest.permission.READ_PHONE_STATE` permission.

If the application Do Not have the `Manifest.permission.READ_PHONE_STATE` permission,
PlanetKit cannot detect whether a mobile phone call is coming in or not.



## 2. Audio Device Requirements

|  | Windows | macOS | iOS | Android | Web |
| --- | --- | --- | --- | --- | --- |
| Speaker | Mandatory | Equipped | Equipped | Mandatory | Option |
| Microphone | Option | Option | Equipped | Option | Mandatory |

- Supported speaker
  - Built-in, USB audio device or Bluetooth
- Supported microphone
  - Built-in, USB audio device or Bluetooth

### Permission to access audio device

| |  Required permission | Note |
| --- | --- | --- |
| iOS | NSMicrophoneUsageDescription key <br>in your app’s Info.plist file | [Apple Developer](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios) |
| Android | Manifest.permission.RECORD_AUDIO |[Android Developer](https://developer.android.com/reference/android/Manifest.permission) |
| macOS | NSMicrophoneUsageDescription key <br>in your app’s Info.plist file | [Apple Developer](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_macos)|

## 3. Video Device Requirements

|  | Windows | macOS | iOS | Android | Web |
| --- | --- | --- | --- | --- | --- |
| Camera | Option | Option | Equipped | Option | Option |
| Graphic card | n/a | [Metal supported graphic card](https://support.apple.com/en-us/HT202239) | n/a | n/a | n/a |

- Supported camera: Built-in or USB webcam

### Supported camera image format

|  | Windows | macOS | iOS | Android |
| --- | --- | --- | --- | --- |
| Raw image | YUV (I420) <br>RGB | YUV (I420, NV12) <br>RGB | YUV (I420, NV12) <br>RGB | YUV (I420, NV12) |
| Compressed image | MJPEG(from 3.0) |  Not Support |  Not Support |  Not Support |

### Permission to access camera device

| | Required permission | Note |
| --- | --- | --- |
| iOS | NSCameraUsageDescription key <br>in your app’s Info.plist file | [Apple Developer](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios) |
| Android | Manifest.permission.CAMERA |[Android Developer](https://developer.android.com/reference/android/Manifest.permission) |
| macOS | NSCameraUsageDescription key <br>in your app’s Info.plist file | [Apple Developer](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_macos) |

<!--
아래 내용은 사용자에게 가이드 할 os 설정 내용
 Windows : [Turn on app permissions for your camera in Windows 10](https://support.microsoft.com/en-us/windows/turn-on-app-permissions-for-your-camera-in-windows-10-87ebc757-1f87-7bbf-84b5-0686afb6ca6b)  |
 -->

> Web PlanetKit
> will shows pop up when need to access camera permission

<!--
### Graphic card requirement
<span style="font-size: 100%; color:orange"> Mac </span>
device must equip
<span style="font-size: 100%; color:orange"> Metal supported graphic card</span>.
Please check [Apple Support page](https://support.apple.com/en-us/HT202239) to show metal equipped Mac.
-->

## 4. Network Requirements

Network characteristics are not fixed and LINE Planet controls audio and video quality
to adapt to a call with the given network conditions.<br>
For example, if there are packets lost, LINE Planet protects media packets by generating FEC packets to keep the call quality.<br>
Also if there is speed limitation, LINE Planet lowers the video bitrate to avoid the network congestion.<br>

Following table shows
<span style="font-size: 100%; color:yellow">
the uni-directional network speed (kbps) requirement when not in lossy network.
</span>

> Please note that this is the minimum requirement for a LINE Planet call.
> LINE Planet delivers better call quality in the higher speed network.

### 1:1 Call
<!-- DTX Factor = 0.8/ 소수점 이하 올림
audio (2g,3g,4g,5g,wifi,ether) = (12.8, 19.2, 19.2, 25.6, 25.6, 25.6 )
video (2g,3g,4g,5g,wifi,ether) = (50, 100, 100, 100, 100, 400)
REFERL: jup_config_list.h
-->

| Terminal Network | Audio Call | Video Call |
| ---- | ---- | --- |
| 2G | 13 | 63 |
| 3G | 20 | 120 |
| 4G | 20 | 120 |
| 5G | 26 | 126 |
| WIFI | 26 | 126 |
| Ethernet| 26 | 426 |

> We recommend to try <br>
> a 1:1 video call in the <span style="font-size: 100%; color:orange">1.5Mbps/1.5Mbps (up/down)</span> network.

### Group Call
<!-- SVC Video : 1:1 Video Call 에서 Thumbnail 50 더함.-->

| Terminal Network | Audio Conference (Mixing) | Video Conference(SVC)<br>(For one video stream) |
| ---- | ---- | --- |
| 2G | 13 | 113 |
| 3G | 20 | 170 |
| 4G | 20 | 170 |
| 5G | 26 | 176 |
| WIFI | 26 | 176 |
| Ethernet| 26 | 476 |


> The adequate level of network requirement depends on how many videos are streamed on one client.<br>
> For example, we recommend to try <br>
> a group call in the <span style="font-size: 100%; color:orange">2Mbps/2Mbps(Up/Down) network</span> for a video conference with in 4 participants.

### Presentation
Presentation (Screen share) video is usually HD video resolution. <br>
This requires <span style="font-size: 100%; color:orange">1.6Mbps/1.6Mbps (Up/Down)</span> network.<br>
When a presentation is started, the presentation video has a higher priority than the camera video.
So the camera video resolution could be resized to a smaller resolution.
<!-- only presentation: 1.5Mbps ~ 2Mbps -->


### Video resolution and bandwidth

The video resolution is controlled by the network speed. <br>
<span style="font-size: 100%; color:yellow">
The uni-directional minimum network speed (kbps) for each resolution when not in lossy networks is as follows.
</span>

| Video Call Resolution | 1:1 Video Call | Video Conference(SVC) |
| --- | --- | --- |
| QVGA | 50 | 100 |
| VGA | 100 | 250 |
| HD | 1000 | 1150 |




<!--
Following CPU includes i3/i5/i7/i9 and AMD equivalent.
https://wiki.linecorp.com/pages/viewpage.action?spaceKey=voip&title=PLANETKIT+SUPPORT+DEVICE+TEST+FOR+DESKTOP
-->
<!-- audio 1:1 call windows min은 os 설치 기준, recommended 는 약간 올림 -->
<!-- audio 1:1 call mac min = recommeded =  os 설치 기준 -->
<!-- audio group call 은 1:1 콜과 같음(믹싱일때) 먹싱은 테스트 필요 -->
<!--
## 5. CPU/RAM Requirements
iOS and (mobile) Android depend on Operating System version.
Also WebPlanetKit depends on WebRTC.<br>
<br>
Please note that below tables consider only desktop environments.

### 1:1 call

| Audio Call | Windows | macOS |
| --- | --- | --- |
| Minimum CPU | 1 GHz x Single Core | 2.5 GHz x Dual Core |
| Recommended CPU | 2.5 GHz x Dual Core | 2.5 GHz x Dual Core |
| Recommended RAM | 2GB | 4GB |

| Video Call | Windows | macOS |
| --- | --- | --- |
| Minimum CPU | TBD | TBD |
| Recommended CPU | TBD | TBD |
| Recommended RAM | TBD | TBD |

### Group call

| Audio Conference  | Windows | macOS |
| --- | --- | --- |
| Minimum CPU | 1 GHz x Single Core | 2.5 GHz x Dual Core |
| Recommended CPU | 2.5 GHz x Dual Core | 2.5 GHz x Dual Core |
| Recommended RAM | 2GB | 4GB |

| Video Conference  | Windows | macOS |
| --- | --- | --- |
| Minimum CPU | TBD | TBD |
| Recommended CPU | TBD | TBD |
| Recommended RAM | TBD | TBD |
-->

## History
2021-02-05 The first version <br>
