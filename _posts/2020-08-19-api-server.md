---
title: "Server Callback Specification"
categories:
  - documents
  - API Specification
tags:
  - API
  - server development
---
### 1:1 call
---
Application server requires 2 callback api implementations.

1. [Notify (notify_cb)]({{site.baseurl}}/documents/api specification/api-server-notify)
2. [Call Event (on_call_evt_cb)]({{site.baseurl}}/documents/api specification/api-server-callevt)

Please note these two callback urls must be defined to request SLA key.<br>

Also below specifications will help you to understand more.

* [Call Release Reason]({{site.baseurl}}/documents/api specification/api-server-release)


### Group call
---
Application server requires 1 callback api implementations.

1. [Group Call Event (on_gcall_evt_cb)]({{site.baseurl}}/documents//api specification/api-server-gcallevt)
