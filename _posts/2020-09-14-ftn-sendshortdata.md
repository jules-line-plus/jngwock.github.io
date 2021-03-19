---
title: "Send Short Data"
categories:
  - documents
  - Function 
tags:
  - function
---

An application can  <span style="font-size: 150%; color:lightblue">send limited size data during communication</span>.
This supports both 1:1 call and conference call communication types.
<br><br><br>
If the communication is a <span style="font-size: 150%; color:lightblue"> conference call </span>, the application can choose 
<span style="font-size: 150%; color:lightblue">specific participants</span> to be received. <br>
If don't choose - not select any one - the data will be sent to <span style="font-size: 150%; color:lightblue">all participants</span>.
<br><br><br>
Sometimes, sending data could be failure although LINE Planet had tried to send the data multiple times by itself.
An application can be aware the result that data was sent or not by a result handler callback in asynchronously.


