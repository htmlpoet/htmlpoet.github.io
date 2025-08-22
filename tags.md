---
layout: blog_base
title: "Thématiques"
permalink: /tags/
---

<a href="/tags/" class="show-all-tags" style="display: none;">← Voir toutes les thématiques</a>

{% assign tags = site.tags | sort %}
{% for tag in tags %}
  <div class="tag-group" id="{{ tag[0] | slugify }}">
    <h2 class="tag-title">#{{ tag[0] }}</h2>
    <ul class="post-list">
      {% for post in tag[1] %}
        {% assign first_tag = post.tags | first %}
        <li class="tag-{{ first_tag | slugify }}">
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p class="post-meta">{{ post.date | date: "%d %B %Y" }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>
{% endfor %}