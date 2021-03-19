---
title: "LINE Planet Call Quality"
categories:
  - documents
  - Call Quality
tags:
  - quality
---

## Audio

| Feature | iOS | Android | Windows | macOS | WebPlanetKit |
| ---- | --- | ---- | ---- | ---- | --- |
| Max quality | HD+ | HD+ | FHD | FHD | FHD |
| Acoustic Echo Cancellation | Support | Support | Support | Support | Support |
| Auto Gain Control | Support | Support | Support | Support | Support |
| Noise Suppressor | Support | Support | Support | Support | Support |


## Video


<!-- https://wiki.linecorp.com/display/voip/Video+Call+Service+specification -->

### 1:1 Call

| Feature | iOS | Android | Windows | macOS | WebPlanetKit |
| ---- | --- | ---- | ---- | ---- | --- |
| Camera<br> Max resolution | 720p | 720p | 1080p | 1080p | 1080p |
| Camera<br> Max FPS | 20 | 20 | 20 | 20 | 20 |
| Codec | VP8, H.264 | VP8 | VP8 | VP8 | VP8 |
| H.264 HW Accelerator | Yes | No | No | No | No |


### Conference Call

| Feature | iOS | Android | Windows | macOS | WebPlanetKit |
| ---- | --- | ---- | ---- | ---- | --- |
| Camera<br> Max resolution | 720p | 720p | 1080p | 1080p | NY |
| Camera<br> Max FPS | 20 | 20 | 20 | 20 | NY |
| Scalability | 4 Spatial layers | 4 Spatial layers | 4 Spatial layers | 4 Spatial layers | NY |
| Codec | VP8<br> VP8+H.264 | VP8 | VP8 | VP8 | NY |
| H.264 HW Accelerator | Yes | No | No | No | NY |


<!-- WebRTC simulcast: 
 [Spatial Simulcast](https://webrtcglossary.com/simulcast/) 
 -->


## Data usage per 1 minute

| Media type | WIFI | Ethernet | 3G | 4G | 5G |
| ---------- | ---- | ------- | --- | --- | --- |
| Audio(KBytes) | 192 ~ 288 | 192 ~ 288 | 144 ~ 216 | 144 ~ 216 | 192 ~ 288 |
| Video(MBytes) | 1.6 ~ 30.2 | 7.9 ~ 30.2| 1.6 ~ 9.2 | 1.6 ~ 22.7 | 1.6 ~ 22.7 |

<!--
Audio calculation
DTX-Factor = 0.8 
FEC-Factor = 1.5
144 KBytes = 24kbps x DTX-Factor x 60 sec / 8 bitsperbyte
192 KBytes = 32kbps x DTX-Factor x 60 sec / 8 bitsperbyte 

216 KBytes = 144 * FEC-Factor
288 KBytes = 192 * FEC-Factor
-->