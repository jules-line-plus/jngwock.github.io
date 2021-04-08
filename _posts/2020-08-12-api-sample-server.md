---
title: "Sample Server API Specification"
categories:
  - documents
  - API Specification
tags:
  - Sample
---
Development Guide
----

### Environment

| Environment | as_base_url |
| --- | --- |
| Evaluation |  <span style="font-size: 100%; color:orange"> https://voipnx-as.line-apps-rc.com </span>|
| Real | <span style="font-size: 100%; color:orange"> https://voipnx-as.line-apps.com </span> |


### Naming Rule
* url : under_score<br>
* query params : under_score<br>
* response object(json) : camelCase<br>


### Error Handling

> Application Error Code Table

| HttpStatusCode | Application Error Code | Reason | Message | Data | Note | For testing |
|---|---|---|---|---|---|---|
| 200	 | 461	| INVALID_ID | | |  reserved | |
| 200 | 463 | INVALID_STATE | | | | |
| 200 | 520 | UNDER_MAINTENANCE | under maintenance | start, end| | O |

{% highlight json %}
# Example
# http status code is 200
{status: "error", code:"520", "message":"UNDER_MAINTENANCE", "data": {"start": 1490762455349, "end": 1490762455350}}
{% endhighlight %}

> Error Handling Guide

1 . Check http status error code<br>
  - Client error code (4XX)<br>
  {% highlight json %}
  # Example:
  # http status code is 400
  {"status":"error","message":"parameter is null","code":"400","data":{"requestContext":"may not be null"},"timestamp":1490261690087}
  {% endhighlight %}
  * - Server side code (5XX)
  {% highlight json %}
  # example
  # http status code is 500
  {"status":"error","message":"cannot support VoIP","code":"500","data":null,"timestamp":1490320867281}
  {% endhighlight %}
2 . Check application error code (jsend code) ↔ http status code < 400<br>
  - http status is O.K
  {% highlight json %}
  # example
  # http status code is 200 but jsend's error code is 461
  {"status":"error","message":"Caller's app doesn't support VoIP","code":"461","data":null,"timestamp":1490320867281}

  # http status code is 200 but jsend's error code is 531
  {"status":"error","message":"Mercury unavailable.","code":"531","data":null,"timestamp":1490320867281}
  {% endhighlight %}

API for Client
----

### Protocol Spec
> HTTP RESTful API

* Request: HTTP, RESTful Style, Json body
* Request Method: GET or POST
  * case GET
  *case POST
    * Request body is raw JSON string. When you send raw JSON, you should add `Content-Type: application/json` to request header.
* Response: JSON (jsend)

> Mandatory Headers

Accept
* application/json (UTF-8)

### Register device
To register a device
* If you want multi-device simulation, call `register_device` with different `app_type`.
  i.e) iPhone + android

> Method & URI

* Method: GET
* URI: ${as_base_url}/v1/register_device

> Query

| Name | Type | Mandatory | Description |
| --- | --- | --- |  --- |
| user_id | String | Y | user id |
| service_id | String | Y | service id |
| region | String | Y | registration country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) or [alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) ) <br> i.e) JP, JPN |
| app_type | String | Y	| application type which service provider defines <br> i.e) IOS, ANDROID, DESKTOPWIN, DESKTOPMAC |
| app_ver | String | Y |  application version <br> i.e) 1.0.0, 1.0.0-RELEASE |


> Response

* N/A

> Example

{% highlight ruby lineos %}
curl --location --request GET 'http://voipnx-as.line-apps-beta.com:10712/v1/register_device?user_id=to&service_id=voip.com&region=KR&app_type=IOS&app_ver=1.0.0&=' \
--header 'Accept: application/json'

{
    "status": "success",
    "data": {},
    "timestamp": 1580218637059
}
{% endhighlight %}


### Update notification token

To update device notification token (a.k.a device token)

> Method & URI

* Method: GET
* URI: ${as_base_url}/v1/update_notification_token

> Query

| Name | Type | Mandatory | Description |
| --- | --- | --- |  --- |
| user_id | String | Y |user id |
| service_id | String | Y | service id |
| app_type | String | Y	| application type which service provider defines <br> i.e) IOS, ANDROID |
| app_ver | String | Y | application version<br> i.e) 1.0.0, 1.0.0-RELEASE |
| notification_type | String | Y | ***apns*** : apple regular APNs<br> ***apnsvoip*** : apple VoIP APNs<br> ***gcm*** : google gcm<br> ***fcm*** : google fcm |
| notification_token | String | Y | platform specific notification token |

| apns_server | String | N | effective only if notification_type is apns.<br> ***development*** (a.k.a sandbox) <br> ***production***<br> ref. [APNs Connections](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html#//apple_ref/doc/uid/TP40008194-CH11-SW1)|

> Response

* N/A

> Example
{% highlight ruby lineos %}
curl --location --request GET 'http://voipnx-as.line-apps-beta.com:10712/v1/update_notification_token?user_id=to&service_id=voip.com&notification_type=apnsvoip&notification_token=notification_token&apns_server=development&app_type=IOS&app_ver=1.0.0' \
--header 'Accept: application/json'

{
    "status": "success",
    "data": {},
    "timestamp": 1580218737464
}
{% endhighlight %}

### Get notification (***Long-Polling***)

If platform-specific notifications (APN, FCM, etc.) are not available, use http long polling method.
* When a caller receives an error code, re-run polling.
* Do not call APIs too often within a short time.

> Method & URI

* Method: GET
* URI: ${as_base_url}/v1/notification/lp

> Query

| Name | Type | Mandatory | Description |
| --- | --- | --- |  --- |
| user_id | String | Y |user id |
| service_id | String | Y | service id |

> Response

* N/A

> Example

{% highlight ruby lineos %}
curl --location --request GET 'http://voipnx-as.line-apps-beta.com:10712/v1/notification/lp?service_id=planetkit&user_id=0252' \
--header 'Accept: application/json'


{
  "status": "success",
  "data": {
    "app_callee_uid": "0252",
    "app_stid": "SampleUserData",
    "app_callee_sid": "planetkit",
    "app_caller_sid": "planetkit",
    "app_call_type": "A",
    "app_caller_uid": "th",
    "cc_param": "eyJ2b2lwVGNwUG9ydCI6IjgwODAiLCJ2b2lwQWRkcmVzcyI6IjE0Ny45Mi4xNTkuNywxNDcuOTIuMTU5LjcwIiwiZnJvbVpvbmUiOiJrciIsImNvbW1QYXJhbSI6IntcIm1wa2V5XCI6XCJBbVhYYk9zMkRud3NNSUFEUUNhamQ3QzcxVXB2KzJBSDcweU1HUVlrK0tjVVwiLFwiY3RtXCI6MzAwMCxcImljdFwiOjYwMDB9Iiwidm9pcFVkcFBvcnQiOiIxMTA3MSIsImNhbGxUeXBlIjoiQSIsInRvVG9rZW4iOiIyZmY3ODRkLi4uIiwic2lkIjoiOTIwNTM5NkYtODAxMi00RDU4LTgxQTItRjc3MEJDQzE2QTU3IiwidG9ab25lIjoia3IifQ=="
  },
  "timestamp": 1586334096360
}
{% endhighlight %}
