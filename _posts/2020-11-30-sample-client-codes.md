---
title: "Sample client"
categories:
  - documents
  - Sample
tags:
  - Sample
---

LINE Planet provides sample code to
* Test LINE Planet in a short time
* Show example codes of using LINE Planet

## Supported push systems

Applications need to understand how to receive a notification to a callee.
It depends on the OS system. The sample client provides various options.

| | Push |
|---| ---|
| iOS | APNs, long polling |
| macOS | long polling |
| Android | FCM |
| Windows | long polling |
| Web | FCM |

* <span style="color:orange">long polling</span> means notifications are generated from Sample AppServer(sample server).

> Note: You should give push information if you choose to use an external push system.<br>
> Please check here: [Information to send push notifications]({{site.baseurl}}/documents/sample/sample-push/).

## Code
* [sample-ios](https://oss.navercorp.com/PlanetKit/sample-ios)
* [sample-android](https://oss.navercorp.com/PlanetKit/sample-android)
* [sample-windows](https://oss.navercorp.com/PlanetKit/sample-windows)
* [sample-macOS](https://oss.navercorp.com/PlanetKit/sample-macos)
* [sample-web](https://oss.navercorp.com/PlanetKit/sample-web)

Please feel free to ask us if you have any questions.

You might find answers to your questions in FAQs faster.


## History
2020-11-30 Add Web <br>
2020-09-18 The first version <br>
