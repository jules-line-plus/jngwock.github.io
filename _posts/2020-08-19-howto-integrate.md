---
title: "How to integrate LINE Planet"
categories:
  - documents
  - Quick Start
tags:
  - guide
  - how to
  - quick start
---


1. Request SLA key with 3 environment parameters.
2. Implement.


## 1 Request SLA key with 3 environment parameters

Before implementing, you need proper SLA key(s). <br>
Please refer to [LINE Planet development environment]({{site.baseurl}}/documents/article/art-planet-env) to understand more.<br>
Three environment parameters are as follows:

* LINE Planet Environment
* Service ID
* Server Callback URLs

You can request via email.
* e-mail: `dl_planet_help@linecorp.com`



## 2 Implement

### 2.1 Client side
Be careful to use the proper SLA and `planet_base_url` pair.<br>
[LINE Planet development environment]({{site.baseurl}}/documents/article/art-planet-env) shows an example how to use the proper SLA and `planet_base_url` pair.
* Please refer to the [1:1 Call Flow]({{site.baseurl}}/documents/article/flow-call/) to understand the 1:1 call flow.
* Please refer to the [Conference Call Flow]({{site.baseurl}}/documents/article/flow-conference/) to understand the conference call flow.
* [Sample client code]( {{site.baseurl}}/documents/sample/sample-client-codes/ ) would give you some insights.


### 2.2 Server side
Implement Server Callback URLs that will request the SLA key.
* Please refer to the [Server Callback specification]({{site.baseurl}}/documents/api specification/api-server).
