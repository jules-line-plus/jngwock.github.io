---
title: "Conference flow"
categories:
  - documents
  - Article
tags:
  - conference
  - call flow
  - API flow
---

Application domain includes AppClient and AppServer. <br>
PlanetKit and LINE Planet Cloud belong to LINE Planet domain.


### Join

LINE Planet conference join flow can be shown:

![]({{ site.baseurl }}/assets/images/conf-join.png)

<span style="font-size: 120%; color:yellow"> To join a room </span>,<br>
group call participants must know room id before joining the room.

### Request Peer Video

Mixed audio will be automatically streamed when a participant joins.<br>
However video stream requires to call `requestPeerVideo()` API with the proper user id and service id.

![]({{ site.baseurl }}/assets/images/conf-req-vid.png)

> Depends on OS UI Framework
> You may need to additional API call to render a peer video stream.
> Please check [PlanetKit API specifications]({{site.baseurl}}/documents/api specification/api-client-api/). 

### Leave
When a participant leaves, the flow can be shown:

![]({{ site.baseurl }}/assets/images/conf-leave.png)

<small>
<span style="color:green">Green color (conferenceJoin, requestPeerVideo, leave, evtJoined ,evtUpdated and evtLeft)</span> presents client APIs that are exported by PlanetKit SDK.
<span style="color:red">Red color (GCallEvent)</span> presents a server call back API that is called by a LINE Planet Cloud server.
</small>

### History
2020-11-24 Change client API
- `addMember()` --> `requestPeerVideo()` <br>

2020-08-18 the first version
