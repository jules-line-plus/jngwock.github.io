---
title: "Information to send push notifications"
categories:
  - documents
  - Sample
tags:
  - Sample
  - APNs
  - FCM
---

## Common

<span style="color:yellow"> Service ID </span>

## iOS: APNs

* Apple Push Notification service SSL (Sandbox & Production) certificate for your application.
    1.  [Create certificate for your sample app](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_certificate-based_connection_to_apns)
    2.  Generate .p12 file from the certificate
    3.  Send the .p12 file and its password to us

<span style="color:yellow"> Please make sure that the push certificate MUST be the same with the build certificate.</span>

## Android and Web: FCM

* Server key and Sender ID
    1. Login to your Firebase console [https://console.firebase.google.com/](https://console.firebase.google.com/) and select your Firebase project
    2. Go to Setting > Project Setting > Cloud messaging  
    ![]({{ site.baseurl }}/assets/images/fcm_setting.png)


## History
2020-11-30 Add Sample <br>
2020-08-11 The first version <br>
