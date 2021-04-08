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
PlanetKit and LINE Planet Cloud belong to the LINE Planet domain.


### Join

Flow for joining a LINE Planet conference is as follows:

![]({{ site.baseurl }}/assets/images/conf-join.png)

<span style="font-size: 120%; color:yellow"> To join a room </span>,<br>
group call participants must know the room id to join the conference.

### Request Peer Video

Mixed audio will be automatically streamed when a participant joins.<br>
However, video stream requires to call the `requestPeerVideo()` API with the proper user id and service id.

![]({{ site.baseurl }}/assets/images/conf-req-vid.png)

> Depend on OS UI Framework
> You may need an additional API call to render a peer video stream.
> Please check [PlanetKit API specifications]({{site.baseurl}}/documents/api specification/api-client-api/).

### Leave
Find the following flow for when a participant leaves:

![]({{ site.baseurl }}/assets/images/conf-leave.png)

<small>
<span style="color:green">Green color (conferenceJoin, requestPeerVideo, leave, evtJoined ,evtUpdated and evtLeft)</span> presents client APIs that are exported by PlanetKit SDK.
<span style="color:red">Red color (GCallEvent)</span> presents a server call back API that is called by a LINE Planet Cloud server.
</small>

### History
2020-11-24 Change client API
- `addMember()` --> `requestPeerVideo()` <br>

2020-08-18 the first version
