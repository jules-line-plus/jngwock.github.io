---
title: "Server Callback: Recording Status"
categories:
  - documents
  - API Specification
tags:
  - API
  - on_call_rec_cb
---

If a specific 1:1 call is requested to be recorded, the voice and video streams are recorded and uploaded to the OBS server.<br>

LINE Planet will call Recording Status callback when
1. recording starts and
1. uploading the streams of the ended call is completed.<br>


AppServer can access the OBS server and download files with parameters informed by Recording Complete callback.<br>
<br>
The default recorded media quality is:


| Video | | | | Audio |
| Codec | Bitrate | Size | Profile | Codec | Bitrate | Channel |
| --- | --- | --- | --- |  --- | --- | --- |
| MPEG4 AAC(H.264) | 1,258,291 bps | 960x540 | Baseline| MPEG4 AAC | 96,000 bps | 2 |



> Please note that this callback is not called just once.
> Due to an internal maintenance issue,it can be called many times.<br>
> But, they have the same `sid` value and different `recording_start_time` value.

### Method & URI
* Method: POST
* URI: ${on_call_rec_cb_url}

### Related HTTP headers

| Header | Value |
| --- | --- |
|Content-Type | application/json |

### Body contents

Belows are located in the body field as Json type.

| Parameter | Type | Nullable | Description | Example |
| --- | --- | --- | --- | --- |
| sid | String | N | Session ID.<br> You can identify a call using a sid.<br> Fixed size of 36 bytes without null.|6364e8b3-bdac-436e-9631-0bce2498ce0c|
| stid | String | N | Application data delivered from `makeCall()` in PlanetKit SDK | generated-by-application |
| from_service_id | String | N | Caller service ID | planetkit |
| from_user_id | String | N | Caller user ID | caller.id |
| to_service_id	| String | N | Callee service ID | planetkit |
| to_user_id | String | N | Callee user ID | callee.id |
| recording_start_time | Long | N | Recording start (seconds)| 1597744702514 |
| recording_status | String | N | IN_PROGRESS<br> COMPLETED<br> ABSENT<br> FAILED| COMPLETED |
| error_code| String | Y | Exists when `recording_status` is ABSENT or FAILED | 500 |
| from_recordings | `List<Object>` | Y | Caller's recording files.<br> Exists when `recording_status` is COMPLETED| |
| +-->object_id | String | | OBS object id | upload_test_sample_from792e8417t0c814c97  |
| +-->hash | String | | OBS hash |0htVb33WEsK3lfSgJbd7pULnkNKxEzJThmJjI0XSAWIVc2OzFxM3kKWi4IMCcwKjBuPnhiF3kefExyfCkuMSVkGihCcw |
| +-->order | Int | | File sequnece number. <br>If multiple files are, this presents the recorded sequence. | 1 |
| to_recordings | `List<Object>` | Y | Callee's recording files.<br> Exists when `recording_status` is COMPLETED| |
| +-->object_id | String | | OBS object id | upload_test_sample_from792e8417t0c814c97  |
| +-->hash | String | | OBS hash |0htVb33WEsK3lfSgJbd7pULnkNKxEzJThmJjI0XSAWIVc2OzFxM3kKWi4IMCcwKjBuPnhiF3kefExyfCkuMSVkGihCcw |
| +-->order | Int | | Same with the from_recordings's | 1 |

### `recording_status` and `error_code`

| recording_status | Description |
| --- | --- |
| IN_PROGRESS | Called when recording starts |
| COMPLETED | Called when recording is completed |
| ABSENT | There is no available recording file for this call |
| FAILED | Recording failed |

The `error_code` exists only if `recording_status` is ABSENT or FAILED.

| error_code| Description |
| --- | --- |
| 460 | Duration is too short to be processed |
| 500 | Internal server error |
| 520 | OBS processing error |

### Example

{% highlight http lineos %}

POST
Content-Type: application/json

{
"sid": "59db2167e13911ea83a8213945545d1c",
"from_service_id": "planetkit",
"from_user_id": "caller.service.id",
"to_service_id": "planetkit",
"to_user_id": "callee.service.id",
"recording_start_time": 1597744702514,
"recording_status": "COMPLETED",
"from_recordings": [
    {
        "object_id": "...",
        "hash": "...",
        "order": 1,
    },
    {
        "object_id": "...",
        "hash": "...",
        "order": 2,
    },
],
"to_recordings": [
    {
        "object_id": "...",
        "hash": "...",
        "order": 1,
    },
    {
        "object_id": "...",
        "hash": "...",
        "order": 2,
    },
]
}


{% endhighlight %}


### Response

| HTTP Status Code | Description |
| --- | --- |
| 200 | OK |

<br>
<br>

## How to download recorded files


Please check OBS download API documentation.
* [OBS download API via OBS](https://wiki.linecorp.com/display/LINEDOCS/OBS+API+-+Download+via+OBS)
* serviceCode: <span style="color:yellow">voipnext</span>
* spaceId: Please contact LINE Planet team.

### Required HTTP header  

| Header | Value |
| --- | --- |
|x-voip-sla-key | ${SLA-key} |
|x-voip-service-id | ${Service-Id} |


<br>
<br>

## Change history
2020-10-26 Add Prameter: `recording_status` and `error_code`<br>
2020-09-24 The first version
