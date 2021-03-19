---
title: "Server release reason"
categories:
  - documents
  - API Specification
tags:
  - API
  - on_call_evt_cb 
  - release code
---

When the call ends, [Call Event (on_call_evt_cb)]({{site.baseurl}}/documents/api specification/api-server-callevt) is called.<br>
Application can get to know the reason of a call release by investigating related keys.<br>
<br>

There are 4 types to describe a release reason.

| ***Type*** | ***Description*** | ***Related keys*** |
| Simple | There are only 6 reasons | <span style="color:yellow"> `terminate` </span>|
| LINE Planet definition | LINE Planet defines the reason of call releases | <span style="color:yellow">`call_end_reason`</span>|
| App definition | Application defines the reaon of call releases | <span style="color:yellow">`user_rel_code` </span>|
| Debug | Raw level data related call releases | <span style="color:yellow">`releaser`, `rel_code`, `rel_code_str` </span>|


### Simple release codes
This uses Q.850 codes but only 6 codes to be simple.

| ***Definition*** | ***Q.850 Cause Code*** |
| NORMAL_RELEASED | 16 <br> <span style="color:yellow">If `duration` is greater than 0, `terminate` will be 16</span> |
| CANCELED | 77 |
| REJECTED | 21 |
| BUSY | 17 |
| NO_ANSWER | 18 |
| else | 127 |

### LINE Planet definition release codes - Call End Reason
Show release reason in detail.

| ***Reason*** | ***Code value*** | ***Description*** |
| CALLER_CANCEL | 1000 | Caller canceled the call before callee answers |
| CALLEE_BUSY | 1001 | Callee was already in another calling |
| CALLEE_NO_ANSWER | 1002 | Callee didn't answer (Timeout event)|
| CALLEE_REJECT | 1003 | Callee rejected the call |
| CALLER_END | 1004 | Caller ended the call during a call |
| CALLEE_END | 1005 | Callee ended the call during a call |
| CALLER_NETWORK_ERROR | 1010 | The call ended by a network error at caller |
| CALLEE_NETWORK_ERROR | 1011 | The call ended by a network error at callee | 
| CALLER_DEVICE_ERROR | 1012 | The call ended by a device error at caller (Speaker, Mic and Camera) |
| CALLEE_DEVICE_ERROR |1013 | The call ended by a device error at callee (Speaker, Mic and Camera) |
| CALLER_PHONECALL_EVT | 1014 | The call ended by a cellular call at caller |
| CALLEE_PHONECALL_EVT | 1015 | The call ended by a cellular call at callee |
| CALLER_SYSTEM_ERROR |	1016 | The call ended by a system(OS) triggering error at caller |
| CALLEE_SYSTEM_ERROR |	1017 | The call ended by a system(OS) triggering  error at callee |
| CALLER_AUTH_FAIL | 1018 | The authentication for caller fails |
| CALLEE_AUTH_FAIL | 1019 | The authentication for callee fails |
| PUSH_ERROR | 1020 | The call notification from an application server returned failure |
| SERVER_INTERNAL_ERROR	| 1021 | The call ended by VoIP server internal error |
| CALLER_INTERNAL_ERROR	| 1022 | The call ended by the caller internal error |
| CALLEE_INTERNAL_ERROR	| 1023 | The call ended by the callee internal error |
| OTHER_DEV_IN_USE |1024 | Another device belong to the same user is in a call when making a call |
| CALLER_PROTOCOL_ERROR	| 1025 | The call ended by a protocol error of caller |
| CALLEE_PROTOCOL_ERROR	| 1026 | The call ended by a protocol error of callee |
| UNKNOWN_ERROR	| 1100 | The call ended by a unclassified error |


### Application definition release codes
If application want to define its own release reason,  `user_rel_code` can be used.<br>
When a call ends, application is available to define its own call end reason of string type through PlanetKit SDK. <br>

This string value will be delivered in `user_rel_code` to application server from LINE Planet server.<br>

### For debug
LINE Planet can track what happened when a call is released with `releaser`, `rel_code` and `rel_code_str`.

