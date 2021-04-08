---
title: "Server Callback: Call Event"
categories:
  - documents
  - API Specification
tags:
  - API
  - on_call_evt_cb
---

When the call ends, this callback is called. <br>
Applications can do the following tasks with Call Event. <br>
* Leave call logs
* Check call status i. e. Whether the call was ended in a normal status
* Collect statistical data


### Method & URI
* Method: GET
* URI: ${on_call_evt_cb_url}

### Query

| Key | Type | Nullable | Description | Example |
| sid | String | N | Session ID.<br> You can identify a call using a sid.<br> Fixed xize of 36 bytes without null.|6364e8b3-bdac-436e-9631-0bce2498ce0c|

| from_service_id | String | N | Caller service ID | planetkit |
| from_user_id | String | N | Caller user ID | caller.id |
| to_service_id	| String | N | Callee service ID | planetkit |
| to_user_id | String | N | Callee user ID | callee.id |
| type | String | N | Call Type<br> A : Audio call<br> V : Video call | A |
| stid | String | Y | Application data delivered from MakeCall() in PlanetKit SDK | generated-by-application |
| setup_time | Long | N	| The time when this call was made (seconds)| 0 |
| start_time | Long | N	| The time when this call started (seconds) | 0 |
| end_time | Long | N | The time when this call ended (seconds) | 0 |
| duration | Integer | N | Call duration(seconds). end_time - start_time.<br> The duration will be 0 if this call has failed.| 30 |
| srcip	| String | N | Caller IP address | 1.2.3.4 |
| dstip	| String | N | Callee IP address | 1.2.3.3 |
| call_end_reason | Integer | N | The reason of call end (detail release code). <br> Please refer to [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release). | 1004 |
| terminate | Integer |	N | Q.850 cause value.<br> If duration is greater than 0, terminate value will be '16(Normal)'. <br> Please refer to [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release). | 16 |
| releaser | String | N	| Component that end a call <br> `initiator`: caller<br> `responder`: callee<br> hostname of VoIP server.<br> Please refer to [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release). | initiator |
| rel_code | Integer | N	| Detail release code of a call. This is used to track the call release reason in the platform. <br> Please refer to [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release).	| 2 |
| rel_code_str | String	| N | Detail release code of a call. This is used to track the call release reason in the platform. <br> Please refer to [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release). | CANCEL|
| user_rel_code | String | Y | Application definition release code.<br> Please refer to [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release). | |

### Example

{% highlight ruby lineos %}
# Let's suppose on_call_evt_cb_url is
# http://sample.server.com:20200/call_event
# LINE Planet server will request to on_call_evt_cb_url as follows.

GET http://sample.server.com:20200/call_event?
sid=6364e8b3-bdac-436e-9631-0bce2498ce0c&
type=V&
from_user_id=9286&
from_service_id=linecorp.com&
to_user_id=2809&
to_service_id=linecorp.com&
setup_time=1582527420&
start_time=0&
end_time=1582527434&
duration=0&
terminate=16&
srcip=1.2.3.4&
dstip=1.2.3.5&
stid=voip.next&
call_end_reason=1005&
releaser=responder&
rel_code=1&
rel_code_str=NORMAL

{% endhighlight %}
