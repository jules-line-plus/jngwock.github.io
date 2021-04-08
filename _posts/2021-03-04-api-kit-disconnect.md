---
title: "Client Disconnect Reason - kitDisconnectReason"
categories:
  - documents
  - API Specification
tags:
  - kitDisconnectReason
---
<!--
wiki: https://wiki.linecorp.com/display/voip/Disconnect+Reason
for web: https://wiki.linecorp.com/display/voip/Web+PlanetKit+Disconnect+Reason
-->
PlanetKit provides <span style="font-size: 150%; color:orange">`kitDisconnectReason`</span>
for an application to know the call disconnection reason.

The application could react such as showing a message,
depending on the following reason codes.

The "1:1 Call" column means this can be shown when a 1:1 call is disconnected.

The "Conference" column means this can be shown when a user leaves from a conference call.

"Initiator" means a caller and "Responder" means a callee in 1:1 call.

## Normal scenario

| Reason | 1:1 Call | Conference | Description |
| --- | --- | --- | --- |
| Normal | Y | Y | Disconnected the call without exceptions |
| Cancel | Y | N | Initiator disconnects the call before the responder answers |
| Busy | Y | N | Responder is calling |
| NoAnswer | Y | N | Responder doesn't answer. Initiator waits for the answer for 60 seconds. |
| Decline | Y | Y | **1:1 Call**: Responder rejects a call<br> **Conference**: The previously joined conference is declined when entering into the same conference room. <br>(e. g. Re-join after crash)|
| MultiDevInUse | Y | Y | The same id pair (`user-id` and `service-id`) is calling in another device |
| MultiDevAnswer | Y | N | Responder using the same id pair (`user-id` and `service-id`) answered for the call in another device |
| MultiDevDecline | Y | N | Responder using the same id pair(`user-id` and `service-id`) declined for the call in another device |
| AlreadyGotACall | Y | Y | The initiator or the participant already has an incoming call but not received push yet |

## Exception cases - Terminal

The following reasons are generated on a terminal such as local network environment, device status or PlanetKit internal.

| Reason | 1:1 Call | Conference | Description |
| --- | --- | --- | --- |
| AudioTxNoSrc | Y | Y | Audio source (i.e mic) has not sent any audio data for a while |
| NetworkUnavailable | Y | Y | Network is unavailable to keep a call.<br> Please refer to [NetworkUnavailableEvent]({{site.baseurl}}/documents/function/ftn-net-unavail/) |
| InternalError | Y | Y | PlanetKit disconnected the call because of internal error |
| CellCall | Y | Y | Received cellular call during the PlanetKit call |
| NoPermission | Y | Y | (Only WebPlanetKit case. from 3.1.6)<br>User doesn't have permission to use device(microphone, camera) |


## Exception cases - LINE Planet Server

The following reasons are generated within LINE Planet server cloud.
"LINE Planet GW" means LINE Planet Gateway that interfaces between AppServer and LINE Planet internal servers.

| Reason | 1:1 Call | Conference | Description |
| --- | --- | --- | --- |
| PushError | Y | N | LINE Planet GW failed to call [Notify]({{site.baseurl}}/documents/api specification/api-server-notify) or `notify_cb` returned a failure. <br>Please check AppServer or Notify url.|
| ServerInternalError | Y | Y | Server disconnected a call because of internal error |
| AuthError | Y | Y | Authentication failure |
| ReleasedCall | Y | Y | The call was already released.<br> Ex) Initiator already canceled. |
| RoomIsFull | N | Y | The number of participants in this room is full |
| AloneKickOut | N | Y | Server kicks out a user when the user stays in a conference room alone for a long time |
| NoMediaPacket | N | Y | (Only WebPlanetKit case. from 3.1.6)<br>WebPlanetKit GW could not receive any media packets |
| ServiceSLAKeyError | Y | Y | Invalid SLA Key |
| ServiceInvalidID | Y | Y | Unacceptable character is used in `service-id` or `user-id`.<br> Please refer to [Terminology]({{site.baseurl}}/documents/article/terminology/#service-id). |
| ServiceMaintenance | Y | Y | Under maintenance |
| ServiceBusy | Y | Y | LINE Planet GW is busy for now |
| ServiceHttpError | Y | Y | Could not make a HTTP request.<br>Please check user network environment.<br>1. Firewall [Network firewall settings for LINE Planet]({{site.baseurl}}/documents/article/art-firewall)<br>2. Client vaccine program|
| ServiceInternalError | Y | Y | LINE Planet GW internal error |


## User defined error

| Reason | 1:1 Call | Conference | Description |
| --- | --- | --- | --- |
| UserError | Y | N | PlanetKit user(application) disconnected the call with user's error release code |


## History
2021-03-04 Add NoPermission and NoMediaPacket case <br>
2020-12-11 Modify description about Delcine for conference case<br>
2020-11-24 Location movement: Article --> API Specification <br>
2020-11-19 The first version <br>
