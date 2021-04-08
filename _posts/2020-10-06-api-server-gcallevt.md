---
title: "Server Callback: Group Call Event"
categories:
  - documents
  - API Specification
tags:
  - API
  - conference
  - on_gcall_evt_cb
---

When a participant joins or leaves, this callback is called. <br>
Applications can do the following tasks with Group Call Event. <br>
* Notify participants have just started
* Check call status i. e. Whether the conference call ended or not
* Collect statistical data

### Method & URI
* Method: GET
* URI: ${on_gcall_evt_cb_url}

### Query

| Key | Type | Nullable | Description | Example |
| --- | --- | --- | --- | --- |
| sid | String | N | Session ID.<br> You can identify a call using a sid.<br> Fixed size of 36 bytes without null.|6364e8b3-bdac-436e-9631-0bce2498ce0c|
| svc_id | String | N | Conference service ID | planetkit |
| id | String | N | Conference ID | room.id |
| user_svc_id | String | N | Participant Service ID | planetkit |
| user_id | String | N | Caller user ID | user.id |
| host_svc_id | String | N | Host Service ID | planetkit |
| host_id | String | N | Host user ID | user.id |
| sc | String | N | Conference Status Code<br>S: Started<br>C: Changed<br>E: Ended | S |
| setup_time | Long | N	| The time when this conference was made (seconds)| 0 |
| start_time | Long | N	| The time when this conference started (seconds) | 0 |
| end_time | Long | N | The time when this conference ended (seconds) | 0 |
| online | Integer | N | The number of online participants(= connected participants) | 0 |
| media_type | String | N | A : Audio conference<br> V : Video conference | A |
| msc | String | N | Participants status code<br>C: Connected<br>D: Disconnected<br>T: Timeout<br>M: Media changed| C |
| stid | String | Y | Application data delivered from conferenceJoin() in PlanetKit SDK | application-data |
| ts | Numeric | N | Timestamp in millisecond | 2277272 |

### Example

{% highlight ruby lineos %}
# Let's suppose on_gcall_evt_cb_url is
# http://sample.server.com:20200/gcall_event
# LINE Planet server will request to on_gcall_evt_cb_url as follows.

GET http://sample.server.com:20200/gcall_event?
sid=59db2167e13911ea83a8213945545d1c&
svc_id=planetkit-inhouse&
id=1111&
user_svc_id=planetkit-inhouse&
user_id=9286&
host_svc_id=planetkit-inhouse&
host_id=2809&
sc=C&
setup_time=1597744702514&
start_time=1597744703058&
end_time=0&
online=2&
mediaType=V&
msc=C&
stid=application-data&
ts=1599463610820

{% endhighlight %}
