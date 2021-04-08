---
title: "Server Callback: Notify"
categories:
  - documents
  - API Specification
tags:
  - API
  - notify_cb
---

Notify is always called when a caller tries to make a call.<br>
Applications need to inform the callee that a call is coming in.<br>
The application could use a mobile push system (i.2 APNs, FCM) or others.<br>

AppServer must deliver `param` to the callee.
Please see [AppServer Requirements]({{site.baseurl}}/documents/article/art-appserver-role/).<br>
The `param` key name must be changed to `cc_param`.<br>


### Method & URI
* Method: GET
* URI: ${notify_cb_url}

### Query

| Key | Type | Nullable | Description | Example |
| sid | String | N | Session ID.<br> You can identify a call using a sid.<br> Fixed size of 36 bytes without null.|6364e8b3-bdac-436e-9631-0bce2498ce0c|

| from_service_id | String | N | Caller service ID | planetkit |
| from_user_id | String | N | Caller user ID | caller.id |
| to_service_id	| String | N | Callee service ID | planetkit |
| to_user_id | String | N | Callee user ID | callee.id |
| type | String | N | Call Type<br> A : Audio call<br> V : Video call | A |
| param	| String | N | This value MUST be delivered to callees or participants.<br>(Please see [Application Requirements](/application requirements/req-apps)<br> base64 encoded string.| eyJjYWxsRmxvd1R5cGUiOiJNIiwiY29tbVBhcmFtIjoie1wibXBrZXlcIjpcIkFoTFJVMzBYdVhGZW5UM1o4WmFwVSsyWVBUUHpyWUEyWk9iRHFSenkraHIzXCIsXCJjdG1cIjozMDAwLFwiaWN0XCI6NjAwMH0iLCJjYWxsVHlwZSI6IkEifQ== |
| stid | String | Y | Application data delivered from MakeCall() in PlanetKit SDK | generated-by-application |

### Example

{% highlight ruby lineos %}
# Let's suppose notify_cb_url is
# http://sample.server.com:20200/notify_cb
# LINE Planet server will request to notify_cb_url as follows.

GET http://sample.server.com:20200/notify_cb?
from_user_id=9286&
from_service_id=linecorp.com&
to_user_id=2809&
to_service_id=linecorp.com&
sid=151ad995-749c-4a28-893f-636700469db1&
type=A&
stid=stid&
param=eyJjYWxsRmxvd1R5cGUiOiJNIiwiY29tbVBhcmFtIjoie1wibXBrZXlcIjpcIkFoTFJVMzBYdVhGZW5UM1o4WmFwVSsyWVBUUHpyWUEyWk9iRHFSenkraHIzXCIsXCJjdG1cIjozMDAwLFwiaWN0XCI6NjAwMH0iLCJjYWxsVHlwZSI6IkEifQ%3D%3D
{% endhighlight %}
