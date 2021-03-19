---
title: "LINE Planet development environment"
categories:
  - documents
  - Article
tags:
  - guide
  - SLA Key
  - notify_cb
  - on_call_evt_cb
  - on_gcall_evt_cb
---

LINE Planet provides two development environments - Evaluation and Real.

Application MUST use right `planet_base_url` as a server address.

|Environment|planet_base_url|
|---|---|
|Evaluation|<span style="color:yellow">https://voipnx-saturn.line-apps-rc.com</span>|
|Real|<span style="color:yellow">https://voipnx-saturn.line-apps.com</span>|

> <span style="color:lightgreen">***Evaluation***</span><br>
> Application use this environment to integrate LINE Planet, test in development step or PoC(Proof of Concept) in a short time.
>
> 
> <span style="color:lightgreen">***Real***</span><br>
> Application MUST use this in a service or when hope to test under the same real environment such as a real service QA step.


## SLA Key and LINE Planet environment
Before implementing integration of LINE Planet, an application must get SLA key from LINE Planet platform.<br>

<span style="color:yellow"> To request SLA Key, you have to define 3 things below</span>:

<span style="color:yellow"> 1 LINE Planet Environment</span>: Evaluation or Real<br>
<span style="color:yellow"> 2 Service ID</span>: String type service identification<br>
<span style="color:yellow"> 3 Application Server callback URL</span>: 
An application server must define callback URL to be called by LINE Planet server.<br>
>  <span style="color:orange">1:1 call: </span>2 callbacks are required<br>
> 1) `notify_cb`: called when a new call is made <br>
> 2) `on_call_evt_cb`: called when the call was released <br>
> <br>
> <span style="color:orange">Group call: </span>1 callback is required<br>
> 1) `on_gcall_evt_cb`: called when a participant joins and leaves

<!-- https://wiki.linecorp.com/display/voip/CORS+Problem -->
<span style="font-size: 120%; color:red">If use WebPlanetKit, need one more information </span> <br>
<span style="color:yellow"> 4 WebApplication domain</span>: 
LINE Planet cloud server requires to pre-know the web application domain to allow the origin of the requested client.<br>

## Example
Let show example to understand the work flow.
Assume that application has organized 3 environments - Development, Release Candidate and Real Service.<br>

1. Application must request SLA keys for each application development environments.<br>
2. Application must use a proper pair of SLA key and `planet_base_url` for each environments.<br>

#### 1. Request 3 SLA keys
----

Request 3 SLA keys for Development, Release Candidate and Real.

| Application Environment | Data to request SLA Key | Issued SLA Key |
| ---- | ---- | ---- |
| <span style="color:red">Development</span> | 1 Environment: <span style="color:lightgreen">Evaluation</span><br> 2 Service ID: planet-ex-service<br> 3.1 notify_cb: http://<span style="color:red">dev</span>.app.com/call/notify<br> 3.2 on_call_evt_cb: http://<span style="color:red">dev</span>.app.com/call/endevt<br> 3.3 on_gcall_evt_cb: http://<span style="color:red">dev</span>.app.com/call/gcall | SLA-EVAL-1 |
| <span style="color:red">Release Candidate</span> | 1 Environment: <span style="color:lightgreen">Real</span><br> 2 Service ID: planet-ex-service <br> 3.1 notify_cb: http://<span style="color:red">rc</span>.app.com/call/notify<br> 3.2 on_call_evt_cb: http://<span style="color:red">rc</span>.app.com/call/endevt<br> 3.3 on_gcall_evt_cb: http://<span style="color:red">rc</span>.app.com/call/gcall | SLA-REAL-1 |
| <span style="color:red">Real Service</span> | 1 Environment: <span style="color:lightgreen">Real</span><br> 2 Service ID: planet-ex-service<br> 3.1 notify_cb: http://<span style="color:red">real</span>.app.com/call/notify<br> 3.2 on_call_evt_cb: http://<span style="color:red">real</span>.app.com/call/endevt<br> 3.3 on_gcall_evt_cb: http://<span style="color:red">real</span>.app.com/call/gcall| SLA-REAL-2 |

#### 2. Client setting: SLA key and `planet_base_url` pair
----

Application must use proper SLA key and `planet_base_url` in initialize LINE Planet Client SDK(PlanetKit SDK).
So depends on application environments, your application setting parameters are like here: <br>

| Application Environment | Issued SLA Key | `planet_base_url` |
| ---- | ---- | ----  |
| <span style="color:red">Development</span> | SLA-<span style="color:lightgreen">EVAL</span>-1  | <span style="color:lightgreen">Evaluation</span> |
| <span style="color:red">Release Candidate</span> | SLA-<span style="color:lightgreen">REAL</span>-1 | <span style="color:lightgreen">Real</span>  |
| <span style="color:red">Real</span> | SLA-<span style="color:lightgreen">REAL</span>-2 | <span style="color:lightgreen">Real</span>  |

## History
2020-11-30 Add Web <br>
2020-08-06 The first version <br>