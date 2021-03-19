---
layout: archive
permalink: /notice/
author_profile: true
---

{% for notice in site.notice reversed %}
  <h2>
    <span style="color:yellow">{{ notice.title }}</span>
  </h2>
  <small>{{ notice.type}}, {{ notice.date | date_to_long_string}} </small>
  {{ notice.content}}

  {% break %}
{% endfor %}


-------
<br>
<br>
{% for notice in site.notice reversed %}


 {% if forloop.first == true %}

## <span style="color:orange">Recent Notices</span>
   {% continue %}

 {% endif %}

  <h3>
    <a href="{{site.baseurl}}{{ notice.url }}">{{ notice.title }}</a>
  </h3>
  <small>{{ notice.type}}, {{ notice.date | date_to_long_string}} </small>
  {{ notice.excerpt}} 

-------

{% endfor %}
