---
title: "How to use sample server"
categories:
  - documents
  - Quick Start 
tags:
  - guide
  - how to
  - quick start
  - Sample
---

Sample server(Sample AppServer) is a very simple application server.  <br>
The sample server interoperates <span style="color:red">external push systems - FCM, GCM and APNs</span>.
Also it uses  <span style="color:lightgreen">the long polling way as the internal push system</span>.

If application want to experiment LINE Planet in a short time or without server implementation tasks, you can use our sample server or even sample client.

[Sample Clients]({{site.baseurl}}/documents/sample/sample-client-codes/) are client application codes already interoperating with the sample server.

> <span style="color:yellow"> Note </span> <br>
> You MUST not define server callback urls when use the sample server.<br>
> Please don't request to us to set server callbacks until AppServer can interoperate push systems such as APNs, FCM or your own push system. 


### Which type do you want ?
1. Use Sample Client Application as is: <span style="color:yellow"> Please Do only Step 1 </span>
1. Use your own client but ***Sample Server***: <span style="color:yellow">Please Follow all steps</span>

### Steps to use sample server
1. Issue SLA-key 
  * Related page: [LINE Planet Environment]( {{site.baseurl}}/documents/article/art-planet-env/ )
  * Specific section: `SLA Key and LINE Planet environment`
> <span style="color:orange"> Note </span> <br>
> If you request server callback urls to set, our LINE Planet server calls them instead of sample server's.
> This may lead to a push failure if your server(AppServer) don't interoperate push systems.


2. Client registration and update
* Related page: [Sample server API]( {{site.baseurl}}/documents/api specification/api-sample-server/) <br>
2.1) Register your devices: `Register device`<br>
2.2) Update device notification token: `Update notification token` 
3. If want to <span style="color:red">use an external push system</span>, please give us [information for push notifications]( {{site.baseurl}}/documents/sample/sample-push/)
4. That's all



