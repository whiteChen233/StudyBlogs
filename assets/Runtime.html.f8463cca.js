import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as c,f as s,d as a,r as l}from"./app.5b8eea61.js";const i={},r=s(`<h1 id="vue\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#vue\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> Vue\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B</h1><p><code>runtime-compiler</code> \u4E0E <code>runtime-only</code> \u533A\u522B\uFF0C<code>runtime-only</code> \u7684\u6027\u80FD\u66F4\u597D\uFF0C\u4EE3\u7801\u91CF\u66F4\u5C11\uFF08\u4F7F\u7528\u4E24\u79CD\u65B9\u5F0F\u521B\u5EFA\u9879\u76EE\u7684\u65F6\u5019\uFF0Ccomplier \u6BD4 only \u8981\u5927\uFF09\u3002</p><blockquote><ol><li><p>runtime-compiler\u7684\u5904\u7406\u8FC7\u7A0B</p><p>vm.options.template \u2014[parse]\u2014&gt; AST(\u62BD\u8C61\u8BED\u6CD5\u6811) \u2014[compile]\u2014&gt; vm.options.render(functions) \u2014[render]\u2014&gt; virtual dom(\u865A\u62DFDOM) \u2014[update]\u2014&gt; UI</p></li><li><p>runtime-only\u7684\u5904\u7406\u8FC7\u7A0B</p><p>render -&gt; vdom -&gt; UI</p></li></ol></blockquote><p>\u4F7F\u7528 runtime-only \u7684\u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 runtime-compiler \u7684\u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>runtime-only \u4E2D\u7684\u51FD\u6570 h\uFF0C\u5B9E\u9645\u4E0A\u662F createElement \u51FD\u6570\u3002\u6240\u4EE5\u4E0A\u9762\u8FD9\u79CD\u5199\u6CD5\u53EF\u4EE5\u6539\u6210\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// createElement \u7684\u4E00\u79CD\u7528\u6CD5: createElement(&#39;\u6807\u7B7E&#39;,{\u6807\u7B7E\u7684\u5C5E\u6027},[\u5185\u5BB9])</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">createElement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A &lt;h1 class=&quot;box&quot;&gt;Hello World&lt;/h1&gt; \u66FF\u6362\u6389app\u6302\u8F7D\u7684\u5143\u7D20</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;box&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">/*
     * \u56E0\u4E3A\u5185\u5BB9\u662F\u4E2A\u6570\u7EC4\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8FD9\u4E48\u5199\u6765\u5B9E\u73B0\u5D4C\u5957
     * return createElement(&#39;h1&#39;, {class: &#39;box&#39;}, [&#39;Hello World&#39;, createElement(&#39;button&#39;,[&#39;\u6309\u94AE&#39;])])
     */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// createElement \u8FD8\u80FD\u63A5\u53D7\u4E00\u4E2A\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570</span>
<span class="token keyword">import</span> cpn <span class="token keyword">from</span> <span class="token string">&#39;./cpn&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">createElement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// createElement\u7684\u7528\u6CD5: createElement(\u7EC4\u4EF6)\u3002\u5982\u679C\u5C06\u7EC4\u4EF6 cpn \u6362\u6210 App\uFF0C\u5176\u5B9E\u5C31\u8DDF runtime-only \u7684\u5199\u6CD5\u662F\u4E00\u6837\u7684\u4E86</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>cpn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),u=a("\u66F4\u591A\u5173\u4E8E createElement \u7684\u5185\u5BB9\uFF0C\u8BF7\u89C1"),d={href:"https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},m=a("\u5B98\u65B9\u6587\u6863"),k=s("<p>\u5728<code>runtime-only</code>\u4E2D\u662F\u6CA1\u6709<code>runtime-compiler</code>\u524D\u9762\u4ECE<code>template \u2014&gt; AST</code>\u7684\u5904\u7406\u8FC7\u7A0B\uFF0C\u90A3<code>*.vue</code>\u6587\u4EF6\u4E2D\u7684 template \u662F\u7531\u8C01\u5904\u7406\u7684\u5462\uFF1F<br> \u2014\u2014 \u7531 package.json \u4E2D<code>devDependencies</code>\u5F15\u5165\u7684<code>vue-template-compiler</code>\u63D2\u4EF6\u5B8C\u6210\u7684</p>",1);function v(b,g){const e=l("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[u,n("a",d,[m,c(e)])]),k])}const _=t(i,[["render",v],["__file","Runtime.html.vue"]]);export{_ as default};
