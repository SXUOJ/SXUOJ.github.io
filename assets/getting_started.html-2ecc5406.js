import{_ as e,X as a,Y as s,a1 as n}from"./framework-23afdf50.js";const t={},r=n(`<h2 id="getting-start" tabindex="-1"><a class="header-anchor" href="#getting-start" aria-hidden="true">#</a> Getting-start</h2><p>Linux服务器部署，请提前安装 <code>Docker</code>、<code>Docker-compose</code> 。</p><h2 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h2><h2 id="sandbox" tabindex="-1"><a class="header-anchor" href="#sandbox" aria-hidden="true">#</a> Sandbox</h2><h3 id="安装-启动" tabindex="-1"><a class="header-anchor" href="#安装-启动" aria-hidden="true">#</a> 安装&amp;&amp;启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/SXUOJ/sandbox.git
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认 50051 端口，如有需要，在<code>docker-compose.yml</code>中修改。</p>`,7),d=[r];function c(i,o){return a(),s("div",null,d)}const l=e(t,[["render",c],["__file","getting_started.html.vue"]]);export{l as default};