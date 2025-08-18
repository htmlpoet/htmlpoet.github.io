---
layout: default
title: Poésie & Écrits
---

<section class="intro">
  <p>Bienvenue dans la section poésie et essais. Chaque article est un fragment, une pensée ou un poème.</p>
</section>

{%- for post in site.posts -%}
<article class="post">
  <h2 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%d %B %Y" }}</p>
  <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 220 }}</div>
  <p class="read-more"><a href="{{ post.url }}">Lire →</a></p>
</article>
{%- endfor -%}
