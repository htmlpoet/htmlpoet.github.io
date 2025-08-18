---
layout: default
title: "Poésie & Essais"
---

<section id="intro">
Bienvenue dans la section **Poésie & Essais**.  
Fragments, essais, méditations – entre ombre et clarté.
</section>

<section id="articles">
{% for post in site.posts %}
<article class="post">
  <h2 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%d %B %Y" }}</p>
  <div class="post-content">
    {{ post.excerpt }}
  </div>
</article>
{% endfor %}
</section>
