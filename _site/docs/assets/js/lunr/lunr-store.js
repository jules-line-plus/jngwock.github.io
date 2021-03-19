var store = [{
        "title": "The first evaluation release",
        "excerpt":"The first release in the evaluation environment.        sample-ios   sample-android  ","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-03-16-the1st-eval/",
        "teaser": null
      },{
        "title": "The first real release",
        "excerpt":"The first release in the real environment.     We deployed the real LINE Planet environment for a 1:1 call.  ","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-06-15-the1st-real/",
        "teaser": null
      },{
        "title": "Add Send Short Data API",
        "excerpt":"플래닛의 새로운 기능 - Send Short Data 기능이 추가 되어 릴리즈 되었습니다. send short data api 는 통화가 연결된 이후에 application 에서 원하는 데이터를 상대방에게 보낼 수 있습니다. 현재는 1:1 콜만 가능 하지만 추후 그룹콜이 지원되는 경우에는 룸에 참여한 사람들에게 보낼 수 있습니다. 트렌젝션 기반의 전송방식이기 때문에 최대 700 바이트까지...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-07-24-send-short-data/",
        "teaser": null
      },{
        "title": "Group Call Release",
        "excerpt":"Planet에 그룹콜이 추가 되었습니다. A. 전반적인 흐름 및 요구 되는 Client/Server API Conference flow를 참고 해주세요. B. GCallEvent API Specification 또한 Group call event 에 해당하는 서버 API spec.은 Group Call Event에서 확인 할 수 있습니다. C. How to integrate Planet 만일 처음 LINE Planet 과 연동 하실 분들이라면 How...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-08-19-groupcall/",
        "teaser": null
      },{
        "title": "데스크탑 일정 공유 및 PRSIM 소개",
        "excerpt":"데스크탑 릴리즈 일정 및 PRISM 소개를 드립니다. 1. 데스크탑(windows/macOS)의 첫 릴리즈 일정을 잡았습니다: 8/31 오늘 관련하여 데모를 진행했습니다. 현재 상태는 조금 미진한 부분이 있어 이를 보완 하고 8/31에 릴리즈 하도록 하겠습니다. 2. PRSIM 소개 네이버 동영상 기술 2개발 팀에서 PRISM을 플래닛킷과 연동하여 샘플을 제공 하시고 계십니다. PRISM SDK 와 PlanetKit...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-08-20-prism/",
        "teaser": null
      },{
        "title": "Desktop Release",
        "excerpt":"PlanetKit 데스크탑 버젼 첫 릴리즈를 하였습니다. 또한 예제로 사용될 샘플코드 및 샘플클라이언트도 함께 제공 됩니다. Windows macOS 각 플랫폼별 제공되는 세부 기능 및 추후 제공될 기능들은 다음과 같습니다.   Windows macOS PlanetKit (8/31 release) - audio / video 1:1 call - audio / video conference - ring 및 ringback tone...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-08-31-the1st-dt/",
        "teaser": null
      },{
        "title": "Call init data and R-Preparation status",
        "excerpt":"1:1 콜 셋업시 착신자는 콜 수락 전 발신자가 전달 하는 메시지를 미리 확인 할 수 있습니다. 또한 수락 이후, 대화를 위한 준비를 할 수 있습니다. 각 기능에 대한 자세한 설명은 다음과 같습니다. Call Init Data: 착신자는 통화 수락 이전에 발신자로 부터 짧은 데이터 등을 미리 보고 수락 여부를 판단 할...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-09-18-rprep/",
        "teaser": null
      },{
        "title": "1:1 Call Server Record Server Patch",
        "excerpt":"1:1 콜통화의 서버 녹화기능이 추가 되었습니다. 기능 추가를 위해 서버 패치 작업이 있을 예정이며, 패치 시간 동안은 Evaluation 환경의 콜이 안될 수도 있으니 참고 바랍니다. 시간: 2020.09.22 19:00~20:00 서버 레코딩과 관련한 API Specification 은 아래를 참고 부탁 드립니다. Server Callback: Recording Complete 참고로 1:1 콜 서버 레코딩은 사전에 협의가 된...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-09-22-call-record/",
        "teaser": null
      },{
        "title": "(PlanetKit 2.10.0) Enable video",
        "excerpt":"음성 통화 중에 영상 전환이 가능합니다. 음성 1:1 Call 및 음성 Conference Call 중에 영상으로 전환이 가능 합니다. 1:1 call 의 경우, 상대방의 영상 전환 요청에 대해 선택적으로 전환 여부를 선택 할 수 있습니다. 자세한 API Usage 는 Enable Video을 참고 해 주세요. 만일 처음 LINE Planet 을 연동 하실...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-10-16-atov/",
        "teaser": null
      },{
        "title": "(PlanetKit 2.11.0) Hold and Network unavailable event",
        "excerpt":"통화중에 Hold 를 할 수 있습니다. 또한 1:1 통화 중에 망이 불안정한 경우, 이벤트가 발생하며 어떤 단말의 망이 문제인지 알 수 있습니다. 1:1 Call 및 Conference Call 중에 Hold가 가능 합니다. 1:1 Call 중 Hold 하면 자신이 보내는 미디어를 잠시 중지 시킵니다. 선택적으로 상대방으로 부터 받는 미디어도 일시 중지 할...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-10-28-hold/",
        "teaser": null
      },{
        "title": "(WebPlanetKit 0.1.0) WebPlanetKit Release and Site change",
        "excerpt":"WebPlanetKit 이 릴리즈 되었습니다. kitDisconnectReason 추가 되었습니다. 그 외 본 사이트의 관리상 링크가 변경 되었습니다. LINE Planet milestone 이 변경 되었습니다. WepPlanetKit WebPlanetKit 이 릴리즈 되었습니다. WebPlanetKit 의 경우 내부적으로 WebRTC 를 사용하여 기존의 PlanetKit 과 콜연동이 가능합니다. Note WebPlanetKit 의 사용을 위해 SLA key 를 요청 하실 때는 Web...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2020-11-30-web-site/",
        "teaser": null
      },{
        "title": "(PlanetKit 3.0) PlanetKit Release and Update milestone",
        "excerpt":"PlanetKit 3.0 이 릴리즈 되었습니다. LINE Planet milestone 이 변경 되었습니다. LINE Planet 서버 설정 일정 및 PlanetKit 3.1 에 대한 공지가 있습니다. PlanetKit 3.0 PlanetKit 3.0 이 릴리즈 되었습니다. iOS Android Mac Windows 3.0.7 3.0.12 3.0.7 3.0.11 주요 업데이트는 다음과 같습니다. Screen share 현재는 룸 내에서 한 사람만 screen...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2021-02-06-Kit30/",
        "teaser": null
      },{
        "title": "(PlanetKit 3.1) PlanetKit Release",
        "excerpt":"PlanetKit 3.1 이 릴리즈 되었습니다. PlanetKit 3.1 PlanetKit 3.1 이 릴리즈 되었습니다. iOS Android Mac Windows 3.1.5 3.1.5 3.1.5 3.1.6 PlanetKit 3.1 부터 WebPlanetKit과 그룹콜 호환이 가능합니다. WebPlanetKit 3.0 (Group call, Screen share) 는 QA 중입니다. 하지만 sample code repository 에 올려놓았으며 사용은 가능한 상태 입니다. WebPlanetKit 의 그룹콜 및...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2021-02-15-Kit31/",
        "teaser": null
      },{
        "title": "(WebPlanetKit 3.1) WebPlanetKit Release",
        "excerpt":"WebPlanetKit 3.1 이 릴리즈 되었습니다. WebPlanetKit 3.1 PlanetKit 3.1.4 이 릴리즈 되었습니다. 주요 업데이트 Group Call WebPlanetKit 에서 그룹콜이 가능 합니다. 단, iOS, Android, Windows and macOS 와 그룹콜 연동은 PlanetKit 3.1 부터 가능합니다. Screen share in Group Call 1:1 call 중에는 아직 미지원입니다. Mute request isSupported API 브라우져에 따라...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2021-02-24-WebKit31/",
        "teaser": null
      },{
        "title": "Update milestone and pre-share PlanetKit 3.2",
        "excerpt":"Milestone is updated. Pre-share PlanetKit 3.2 features. [Korean] Milestone 이 업데이트 되었습니다. 개발에 참고 부탁 드립니다. Milestone Data session 과 Shared contents 기능에 대해 작성된 문서를 미리 공유 드립니다. 개발에 참고 부탁 드립니다. Data session API 전송이 보장 되는 채널을 제공 합니다. Application 에서는 통화중에 간단한 메시지 전송 혹은 whiteboard...","categories": [],
        "tags": [],
        "url": "/jungnam-gwock/TestDoc/notice/2021-03-09-PreKit32/",
        "teaser": null
      },{
        "title": "Server Callback: Notify",
        "excerpt":"Notify is always called when caller tried to make a call. Application needs to inform a new call has been made to a callee. The application could use mobile push system(i.2 APNs, FCM) or the others. AppServer must deliver param to the callee. Please see AppServer Requirements. The param key...","categories": ["documents","API Specification"],
        "tags": ["API","notify_cb"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-server-notify/",
        "teaser": null
      },{
        "title": "Sample Server API Specification",
        "excerpt":"Development Guide Environment Environment as_base_url Evaluation https://voipnx-as.line-apps-rc.com Real https://voipnx-as.line-apps.com Naming Rule url : under_score query params : under_score response object(json) : camelCase Error Handling Application Error Code Table HttpStatusCode Application Error Code Reason Message Data Note For testing 200 461 INVALID_ID     reserved   200 463 INVALID_STATE    ...","categories": ["documents","API Specification"],
        "tags": ["Sample"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-sample-server/",
        "teaser": null
      },{
        "title": "What is the Sample?",
        "excerpt":"It’s pretty cumbersome to get started with push integration. So if you want to develop quickly and conveniently, you can use our sample application server. Sample application server is provided only in development environment. In a production environment, you have to build your own service AppServer. If you integrate LINE...","categories": ["documents","Sample"],
        "tags": ["Sample"],
        "url": "/jungnam-gwock/TestDoc/documents/sample/sample-intro/",
        "teaser": null
      },{
        "title": "General Topology",
        "excerpt":"Application domain includes Caller, Callee and AppServer.   Application could use mobile push system or application defined push system.       LINE Planet icon  presents LINE Planet domain.   Orange color (Caller, Callee, AppServer and so on) presents Application domain.   ","categories": ["documents","Article"],
        "tags": ["call flow"],
        "url": "/jungnam-gwock/TestDoc/documents/article/topo-general/",
        "teaser": null
      },{
        "title": "Server Callback Specification",
        "excerpt":"1:1 call Application server requires 2 callback api implementations. Notify (notify_cb) Call Event (on_call_evt_cb) Please note these two callback urls must be defined to request SLA key. Also below specifications will help you to understand more. Call Release Reason Group call Application server requires 1 callback api implementations. Group Call...","categories": ["documents","API Specification"],
        "tags": ["API","server development"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-server/",
        "teaser": null
      },{
        "title": "How to integrate LINE Planet",
        "excerpt":"Request SLA key with 3 environment parameters. Implement Request SLA key with 3 environment parameters Before implementing, you need proper SLA key(s). Please refer LINE Planet development environment to understand more. 3 environment parameters means. LINE Planet Environment Service ID Server Callback URLs You can request by sending email. e-mail:...","categories": ["documents","Quick Start"],
        "tags": ["guide","how to","quick start"],
        "url": "/jungnam-gwock/TestDoc/documents/quick%20start/howto-integrate/",
        "teaser": null
      },{
        "title": "PRISM SDK",
        "excerpt":"What is the PRISM PRISM is a Client SDK to video process and live stream on a mobile device. Application can serve various video processing and live streaming in calling with PRISM SDK. PRISM features PRISM has many features, but following functions are representative Live streaming 2D, 3D stickers on...","categories": ["documents","PRISM"],
        "tags": ["PRISM","live","video filter"],
        "url": "/jungnam-gwock/TestDoc/documents/prism/prism/",
        "teaser": null
      },{
        "title": "1:1 call flow",
        "excerpt":"Application domain includes AppClient and AppServer. PlanetKit and LINE Planet Clound belong to LINE Planet domain. LINE Planet 1:1 call flow can be shown below but the call setup flow could be changed by application requirments. When a user want to end the call, the flow cab be shown: Green...","categories": ["documents","Article"],
        "tags": ["1:1 call","call flow","API flow"],
        "url": "/jungnam-gwock/TestDoc/documents/article/flow-call/",
        "teaser": null
      },{
        "title": "Server Callback: Call Event",
        "excerpt":"When the call ends, this callback is called. Application can do below tasks by using Call Event. Leave call logs Check call status such call was ended in normal or error Collect statistical data Method &amp; URI Method: GET URI: ${on_call_evt_cb_url} Query Key Type Nullable Description Example sid String N...","categories": ["documents","API Specification"],
        "tags": ["API","on_call_evt_cb"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-server-callevt/",
        "teaser": null
      },{
        "title": "Server release reason",
        "excerpt":"When the call ends, Call Event (on_call_evt_cb) is called. Application can get to know the reason of a call release by investigating related keys. There are 4 types to describe a release reason. Type Description Related keys Simple There are only 6 reasons terminate LINE Planet definition LINE Planet defines...","categories": ["documents","API Specification"],
        "tags": ["API","on_call_evt_cb","release code"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-server-release/",
        "teaser": null
      },{
        "title": "Call Init Data",
        "excerpt":"In 1:1 call, a caller can send limited size data to a callee before the callee accepts the call. This Call Init Data is set by a caller in makeCall API as one of arguments. And the value is delivered to the callee in the evtVerified event. Please check 1:1...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-call-init-data/",
        "teaser": null
      },{
        "title": "Responder preparation status",
        "excerpt":"Responder preparation status gives callee a time to ready for communication. In 1:1 call, callee may need to time to prepararation to check her/his face or something before starting a bidirectional communication. By appliying Responder preparation status to 1:1 call setup flow, an application easily implements above user requirement. In...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-rprep-stat/",
        "teaser": null
      },{
        "title": "Send Short Data",
        "excerpt":"An application can send limited size data during communication. This supports both 1:1 call and conference call communication types. If the communication is a conference call , the application can choose specific participants to be received. If don’t choose - not select any one - the data will be sent...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-sendshortdata/",
        "teaser": null
      },{
        "title": "Service Ticket ID",
        "excerpt":"An application can share an application data between AppClient an AppServer in making a call or joining a conference. stid is the field name that delivers the application data from AppClient to AppServer. In 1:1 call, stid is set in makeCall API as one of arguments and this is delivered...","categories": ["documents","Function"],
        "tags": ["function","stid"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-stid/",
        "teaser": null
      },{
        "title": "How to use sample server",
        "excerpt":"Sample server(Sample AppServer) is a very simple application server. The sample server interoperates external push systems - FCM, GCM and APNs. Also it uses the long polling way as the internal push system. If application want to experiment LINE Planet in a short time or without server implementation tasks, you...","categories": ["documents","Quick Start"],
        "tags": ["guide","how to","quick start","Sample"],
        "url": "/jungnam-gwock/TestDoc/documents/quick%20start/howto-sample/",
        "teaser": null
      },{
        "title": "Server Callback: Group Call Event",
        "excerpt":"When a participant joins and leaves, this callback is called. Application can do below tasks by using Group Call Event. To notify participants have just started To know status such as a conference call ends or not To collect statistical data Method &amp; URI Method: GET URI: ${on_gcall_evt_cb_url} Query Key...","categories": ["documents","API Specification"],
        "tags": ["API","conference","on_gcall_evt_cb"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-server-gcallevt/",
        "teaser": null
      },{
        "title": "Hold",
        "excerpt":"An application can hold or unhold to send its own media streams with related events. The behavior of hold API differs depends on the call service type. 1:1 call Conference 1:1 call When a client holds(Client01), the peer(Client02) should wait un-hold to communication again. On Client02, an application lets PlanetKit...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-hold/",
        "teaser": null
      },{
        "title": "Network Unavailable Event",
        "excerpt":"Network Unavailable Event notifies the network becomes unstable. The LINE Planet call quality could be bad when the network has a problem. LINE Planet will try re-connect the call for a while after releasing evtNetworkUnavailable. If trying reconnection is fail, LINE Planet call is disconnected with kitDisconnectReason :: NetworkUnavailable. However...","categories": ["documents","Function"],
        "tags": ["function","kitDisconnectReason"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-net-unavail/",
        "teaser": null
      },{
        "title": "Server Callback: Recording Status",
        "excerpt":"If a specific 1:1 call is requested to be recorded, the voice and video streams are recorded and uploaded to OBS server. LINE Planet will call Recording Status callback when a recording is started and uploading the streams of the ended call is completed. AppServer can download files with parameters...","categories": ["documents","API Specification"],
        "tags": ["API","on_call_rec_cb"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-server-record/",
        "teaser": null
      },{
        "title": "Mute share and control",
        "excerpt":"Mute means to disable sending audio from the local microphone device. An application can share its own mute status to peers. Also can control peer’s mute status by calling request_mute() API. To share your own mute status, Application must set callParam::shareMicMute as TRUE. Default value: FALSE Share mute status Control...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-mute/",
        "teaser": null
      },{
        "title": "Video pause event",
        "excerpt":"LINE Planet releases evtPeerUpdated event when a peer pauses its video stream. The video stream would be paused by various reasons such as by use selection or by disabling a camera device. pauseReason lets an application know the pause reason. In Conference, the callParam::shareVideoPause must be set as TRUE if...","categories": ["documents","Function"],
        "tags": ["Function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-pause-evt/",
        "teaser": null
      },{
        "title": "Conference flow",
        "excerpt":"Application domain includes AppClient and AppServer. PlanetKit and LINE Planet Cloud belong to LINE Planet domain. Join LINE Planet conference join flow can be shown: To join a room , group call participants must know room id before joining the room. Request Peer Video Mixed audio will be automatically streamed...","categories": ["documents","Article"],
        "tags": ["conference","call flow","API flow"],
        "url": "/jungnam-gwock/TestDoc/documents/article/flow-conference/",
        "teaser": null
      },{
        "title": "Enable video call from audio call",
        "excerpt":"An application can enable video call in the middle of an audio call. The API procedure for enabling video call is differ depends on the call service type. 1:1 call Conference 1:1 call The video call requester side always sends its camera stream, but the peer has two available scenarios....","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-atov/",
        "teaser": null
      },{
        "title": "LINE Planet Function Table",
        "excerpt":"Support: Support the function NY: Not Yet. But have plan. NA: Not Available. We don’t have plan. WebRTC: Follow WebRTC’s Extended Functions Function Windows macOS iOS Android Web Screen share Support Support Support Support Support only group call Video pause event Support Support Support Support Support Mute share and control...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-table/",
        "teaser": null
      },{
        "title": "LINE Planet Call Quality",
        "excerpt":"Audio Feature iOS Android Windows macOS WebPlanetKit Max quality HD+ HD+ FHD FHD FHD Acoustic Echo Cancellation Support Support Support Support Support Auto Gain Control Support Support Support Support Support Noise Suppressor Support Support Support Support Support Video 1:1 Call Feature iOS Android Windows macOS WebPlanetKit Camera Max resolution 720p...","categories": ["documents","Call Quality"],
        "tags": ["quality"],
        "url": "/jungnam-gwock/TestDoc/documents/call%20quality/quality-intro/",
        "teaser": null
      },{
        "title": "LINE Planet development environment",
        "excerpt":"LINE Planet provides two development environments - Evaluation and Real. Application MUST use right planet_base_url as a server address. Environment planet_base_url Evaluation https://voipnx-saturn.line-apps-rc.com Real https://voipnx-saturn.line-apps.com Evaluation Application use this environment to integrate LINE Planet, test in development step or PoC(Proof of Concept) in a short time. Real Application MUST use...","categories": ["documents","Article"],
        "tags": ["guide","SLA Key","notify_cb","on_call_evt_cb","on_gcall_evt_cb"],
        "url": "/jungnam-gwock/TestDoc/documents/article/art-planet-env/",
        "teaser": null
      },{
        "title": "Sample client",
        "excerpt":"LINE Planet provides sample code to Test LINE Planet in a short time Show example codes of using LINE Planet Supportable push system Application need to understand how to receive the notification to a callee. It depends on the OS system. The sample client provides various options.   Push iOS...","categories": ["documents","Sample"],
        "tags": ["Sample"],
        "url": "/jungnam-gwock/TestDoc/documents/sample/sample-client-codes/",
        "teaser": null
      },{
        "title": "Information to send push notifications",
        "excerpt":"Common Service ID iOS: APNs Apple Push Notification service SSL (Sandbox &amp; Production) certificate for your application. Create certificate for your sample app Generate .p12 file from the certificate Send the .p12 file and its password to us Please make sure that the push certificate MUST be the same with...","categories": ["documents","Sample"],
        "tags": ["Sample","APNs","FCM"],
        "url": "/jungnam-gwock/TestDoc/documents/sample/sample-push/",
        "teaser": null
      },{
        "title": "Client API Specification",
        "excerpt":"Please check the API reference to get to know how to call PlanetKit APIs in detail. Platform API Reference Note iOS iOS API Reference   Android Android API Reference Deployment via Linecorp Maven macOS macOS API Reference   Windows Please check header declaration   Web WebPlanetKit API Reference Please check...","categories": ["documents","API Specification"],
        "tags": ["API","PlanetKit"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-client-api/",
        "teaser": null
      },{
        "title": "AppServer Role",
        "excerpt":"To setup a 1:1 call or a group call, AppServer should make a callee(or participants) perceive. PlanetKit call requires proper information to communicate, so AppServer should to deliver some fields depends on call type. 1:1 Call Group Call 1:1 Call - cc_param AppServer MUST deliver cc_param to a callee that...","categories": ["documents","Article"],
        "tags": ["requirements"],
        "url": "/jungnam-gwock/TestDoc/documents/article/art-appserver-role/",
        "teaser": null
      },{
        "title": "Presentation - Screen share",
        "excerpt":"Presentation means a presenter shares his or her screen to show a material such as slides to the other call peer(s). PlanetKit tries HD video to presentation so the clients should to be under good network. Please check Network Requirements for the detail information. Presentation life time A presenter decides...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-presentation/",
        "teaser": null
      },{
        "title": "PlanetKit System Requirements",
        "excerpt":"Contents 1. Operating System Requirements 2. Audio Device Requirements 3. Video Device Requirements 4. Network Requirements 1. Operating System Requirements Windows macOS iOS Android Web Windows 7 macOS 10.11 iOS 11.0 Android 5.0 (min SDK 21) WebPlanetKit Supported Browser Android requires Manifest.permission.READ_PHONE_STATE PlanetKit assumes cellular phone call has more priority...","categories": ["documents","Article"],
        "tags": ["PlanetKit","iOS","Android","Windows","macOS","requirements"],
        "url": "/jungnam-gwock/TestDoc/documents/article/art-sys-spec/",
        "teaser": null
      },{
        "title": "Client Disconnect Reason - kitDisconnectReason",
        "excerpt":"PlanetKit provides kitDisconnectReason for an application to get to know the call disconnection reason. The application could react such as showing a message depends on the following reason codes. The “1:1 Call” column means this can be shown when a 1:1 call is disconnected. The “Conference” column means this can...","categories": ["documents","API Specification"],
        "tags": ["kitDisconnectReason"],
        "url": "/jungnam-gwock/TestDoc/documents/api%20specification/api-kit-disconnect/",
        "teaser": null
      },{
        "title": "Network firewall settings for LINE Planet",
        "excerpt":"If an application cannot make it a call or join a conference and disconnected with kitDisconnectReason :: ServiceHttpError, you should check network connection or network firewall settings. LINE Planet firewall rules Please refer the following table to check your network firewall. PlanetKit (iOS, macOS, Android and Windows) Protocol Source Destination...","categories": ["documents","Article"],
        "tags": ["kitDisconnectReason"],
        "url": "/jungnam-gwock/TestDoc/documents/article/art-firewall/",
        "teaser": null
      },{
        "title": "Terminology",
        "excerpt":"LINE Planet VoIP platform name. Often LINE Planet is called as LINE Planet cloud. Sometimes this means LINE Planet developers or the team. Application A client application and server application that uses LINE Planet cloud. Sometimes this means service developers or a team. SLA Service Layer Agreement. An application requires...","categories": ["documents","Article"],
        "tags": ["terminology"],
        "url": "/jungnam-gwock/TestDoc/documents/article/art-terminology/",
        "teaser": null
      },{
        "title": "Shared contents API",
        "excerpt":"Contents share api lets an application share time related data with peers. The shared data could be anything but 1KBytes limited size. Supported service type Minimum SDK version 1:1 call, group call PlanetKit 3.2 for iOS, macOS and Android PlanetKit 3.3 for Windows WebPlanetKit NOT Supported Contents share API Function...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-contents-share/",
        "teaser": null
      },{
        "title": "Data session API",
        "excerpt":"LINE Planet provides data session for an application to communicate application data. For example, an application sends or receives text message to implement text chatting during a conference. Note that data session is only available after a call setup is completed or join in a conference. Application must define data...","categories": ["documents","Function"],
        "tags": ["function"],
        "url": "/jungnam-gwock/TestDoc/documents/function/ftn-data-session/",
        "teaser": null
      }]
