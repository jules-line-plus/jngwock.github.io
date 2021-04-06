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

Sample server (Sample AppServer) is a very simple application server.  <br>
The sample server interoperates with <span style="color:red">external push systems - FCM, GCM and APNs</span>.
Also, it uses <span style="color:lightgreen"> long polling for the internal push system</span>.

If applications want to experiment with LINE Planet in a short time or without server implementation, you can use our sample server or sample client.

[Sample Clients]({{site.baseurl}}/documents/sample/sample-client-codes/) are client application codes implemented to interoperate with the sample server.

> <span style="color:yellow"> Note </span> <br>
> You MUST not define server callback urls when using the sample server.<br>
> Please don't request us to set server callbacks until AppServer can interoperate with push systems such as APNs, FCM or your own push system.


### How do you want to try it?
1. Use Sample Client Application as it is: <span style="color:yellow"> Please conduct Step 1 only. </span>
1. Use your own client but with our ***Sample Server***: <span style="color:yellow">Please follow all steps.</span>

### Steps to use the sample server
1. Issue SLA-key
  * Related page: [LINE Planet Environment]( {{site.baseurl}}/documents/article/art-planet-env/ )
  * Specific section: `SLA Key and LINE Planet environment`
> <span style="color:orange"> Note </span> <br>
> If you request to set server callback urls, our LINE Planet server calls them instead of sample server's.
> This may lead to a push failure if your server (AppServer) doesn't interoperate with push systems.


2. Client registration and update
* Related page: [Sample server API]( {{site.baseurl}}/documents/api specification/api-sample-server/) <br>
2.1) Register your devices: `Register device`<br>
2.2) Update device notification token: `Update notification token`
3. If you want to <span style="color:red">use an external push system</span>, please give us the [information for push notifications]( {{site.baseurl}}/documents/sample/sample-push/)
4. That's all!
