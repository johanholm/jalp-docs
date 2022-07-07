import{_ as s,c as n,o as a,a as p}from"./app.1bb6a06d.js";const F=JSON.parse('{"title":"Configuratiton","description":"","frontmatter":{},"headers":[],"relativePath":"configuration.md"}'),l={name:"configuration.md"},o=p(`<h1 id="configuratiton" tabindex="-1">Configuratiton <a class="header-anchor" href="#configuratiton" aria-hidden="true">#</a></h1><p>The diffirent breakpoints can be overwritten</p><div class="language-scss"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jalp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  $breakpoints</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    tablet: </span><span style="color:#F78C6C;">767px</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    desktop-min: </span><span style="color:#F78C6C;">1366px</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    desktop: </span><span style="color:#F78C6C;">1920px</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>Alternatively you can create your own file and set the default variables in there, and then use that file instead of &#39;jalp&#39;</p><div class="language-scss"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// functions.scss</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@forward</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jalp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">with</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  $breakpoints: (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">tablet</span><span style="color:#A6ACCD;">: </span><span style="color:#82AAFF;">767px</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">desktop-min</span><span style="color:#A6ACCD;">: </span><span style="color:#82AAFF;">1366px</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">desktop</span><span style="color:#A6ACCD;">: </span><span style="color:#82AAFF;">1920px</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// heading.scss</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./functions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> functions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fluid</span><span style="color:#89DDFF;">(</span><span style="color:#B2CCD6;">font-size</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">14px</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">12px</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">16px</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,i,C,y,A){return a(),n("div",null,e)}var d=s(l,[["render",t]]);export{F as __pageData,d as default};
