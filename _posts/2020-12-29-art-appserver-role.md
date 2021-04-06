---
title: "AppServer Role"
categories:
  - documents
  - Article
tags:
  - requirements
---

To setup a 1:1 call or a group call,
AppServer should make a callee (or participants) perceive a call coming in. <br>

PlanetKit call requires proper information to communicate,
so AppServer should to deliver some fields, depending on call type.<br>

* [1:1 Call](#11-call)
* [Group Call](#group-call)


## 1:1 Call - `cc_param`
<span style="color:orange">
AppServer MUST deliver to a callee `cc_param`, which is copied from `param` in
[Notify (notify_cb)]({{site.baseurl}}/documents/api specification/api-server-notify).<br>
</span>

| Data from `notfy_cb` | Type | Corresponding push payload key |
| ---- | ---- | ---- |
| `param` | String | `cc_param` |

<br>
You can use a mobile push system to accomplish this as almost mobile apps do.<br>
<br>
Here we assume you use APNs and FCM push system.<br>

{% highlight json %}
{
  ...,      
  "cc_param": "...", /* You can get this value from param in `notify_cb()`*/
  ...
}

{% endhighlight %}

Also you can define application's push data using other fields from `notify_cb`
to handle application requirements such as showing caller's information or caller's call type.<br>
<br>
Find the following examples.<br>
"app_" prefix means they are defined by application and they are not required by PlanetKit call setup.<br>

APNs example
{% highlight json %}
{
  "app_caller_sid": "linecorp.com", /* from_service_id in notify_cb */
  "app_caller_uid": "1111",         /* from_user_id in notify_cb */
  "app_callee_sid": "linecorp.com", /* to_service_id in notify_cb */
  "app_callee_uid": "2222",         /* to_user_id in notify_cb */
  "app_stid": "SampleUserData",     /* stid in notify_cb */
  "app_call_type" : "A",            /* type in notify_cb */
  "cc_param": "... param value in notify cb ....",
  "app_alert": {
    "alert": "Incoming call from ios_test",
    "sound": "call.caf"
  }
}
{% endhighlight %}
<br>
<br>
GCM/FCM example
{% highlight json %}
{
  "app_caller_sid": "linecorp.com", /* from_service_id in notify_cb */
  "app_caller_uid": "1111",         /* from_user_id in notify_cb */
  "app_callee_sid": "linecorp.com", /* to_service_id in notify_cb */
  "app_callee_uid": "2222",         /* to_user_id in notify_cb */
  "app_stid": "SampleUserData",     /* stid in notify_cb */
  "app_call_type" : "A",            /* type in notify_cb */
  "cc_param": "... param value in notify cb ....",
}
{% endhighlight %}

## Group Call
Unlike 1:1 calls, there is no requirement for AppServer to setup a group call.<br>
Ensure that all participants should share the same service id and conference room id to communicate in the same room.<br>

Applications can share them via the application specific channel without involving handling of
[Group Call Event (on_gcall_evt_cb)]({{site.baseurl}}/documents//api specification/api-server-gcallevt),
depending on the application group call setup flow.<br>

If an application hope to use `on_gcall_evt_cb`,
the service id and room id can be copied from the following fields.

* service id: `svc_id`
* room id: `id`

## History
2020-12-29 Add description and move location to "Article"<br>
2020-08-07 The first version <br>
