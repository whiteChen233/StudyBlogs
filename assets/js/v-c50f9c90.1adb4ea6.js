"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[9356],{8624:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(6252);const p=[(0,t.uE)('<h2 id="何为slot" tabindex="-1"><a class="header-anchor" href="#何为slot" aria-hidden="true">#</a> 何为Slot</h2><p>翻译为插槽</p><h2 id="组件的插槽" tabindex="-1"><a class="header-anchor" href="#组件的插槽" aria-hidden="true">#</a> 组件的插槽</h2><p>组件的插槽也是为了让我们封装的组件更加具有拓展性，从而让使用者可以决定组件内部的一些内容到底展示什么。</p><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p>使用<code>&lt;slot&gt;&lt;/slot&gt;</code>标签声明插槽</p><h3 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h3><p>在<code>&lt;slot&gt;&lt;/slot&gt;</code>标签中添加的视为默认值。使用组件时没有使用则使用默认的，有则进行替换。如果有多个值同时放到组件中进行替换时，会一起作为替换元素。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 显示默认值 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token comment">&lt;!-- 显示替换值 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>替换内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>替换内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>默认值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;cpn&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;#cpn&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h3><p>组件中声明了多个插槽后需要给每个插槽起个名字以便使用，否则使用插槽时会将没有名字的插槽全部替换掉</p><h2 id="编译作用域" tabindex="-1"><a class="header-anchor" href="#编译作用域" aria-hidden="true">#</a> 编译作用域</h2><p>变量的作用域属于声明的模板之下。</p><p>官方给出了一条准则：<strong>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的</strong>。</p><h2 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h2><p>有时需要在插槽中访问子组件的数据，此时可以通过以下方式实现</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 在父组件中通过slotData获取从子组件传过来的数据，default是指默认的插槽，如果是具名插槽则需要替换成对应的名字且不能省略插槽名字。slotData.data中的data这个键就是子组件的slot中绑定的data(这个名字随便取) --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      {{ slotData.data.join(&#39; * &#39;) }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 将list绑定到data上 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;cpn&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;#cpn&#39;</span><span class="token punctuation">,</span>\n    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Java&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;C++&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;C#&#39;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缩写语法" tabindex="-1"><a class="header-anchor" href="#缩写语法" aria-hidden="true">#</a> 缩写语法</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 1.独占默认插槽 --&gt;</span>\n<span class="token comment">&lt;!--\n  原始写法\n&lt;cpn&gt;\n  &lt;template v-slot:default=&quot;slotData&quot;&gt;\n    {{ slotData.data.join(&#39; * &#39;) }}\n  &lt;/template&gt;\n&lt;/cpn&gt;\n--&gt;</span>\n<span class="token comment">&lt;!-- 简写 --&gt;</span>\n<span class="token comment">&lt;!-- 注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确。所以只要出现多个插槽，请始终为所有的插槽使用完整的基于 &lt;template&gt; 的语法 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    {{ slotData.data.join(&#39; * &#39;) }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token comment">&lt;!-- 2.解构插槽prop --&gt;</span>\n<span class="token comment">&lt;!--\n  作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：\n  function (slotProps) {\n    // 插槽内容\n  }\n  这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。\n--&gt;</span>\n<span class="token comment">&lt;!-- 直接解构 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    {{ user.name }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- 重命名 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user: person }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    {{ person.name }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- 定义后备内容，用于插槽 prop 是 undefined 的情形 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user = { firstName: &#39;Guest&#39; } }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    {{ user.firstName }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token comment">&lt;!-- 3.动态插槽名 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>[dynamicSlotName]</span><span class="token punctuation">&gt;</span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token comment">&lt;!-- 4.具名插槽的缩写 --&gt;</span>\n<span class="token comment">&lt;!-- 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header： --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',19)],e={},l=(0,a(3744).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},5332:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-c50f9c90","path":"/zh/front-end/Vue2/Slot.html","title":"插槽","lang":"zh-CN","frontmatter":{"title":"插槽","date":"2021-07-17T00:00:00.000Z","summary":"何为Slot 翻译为插槽 组件的插槽 组件的插槽也是为了让我们封装的组件更加具有拓展性，从而让使用者可以决定组件内部的一些内容到底展示什么。 基本使用 使用``标签声明插槽 默认值 在``标签中添加的视为默认值。使用组件时没有使用则使用默认的，有则进行替换。如果有多个值同时放到组件中进行替换时，会一起作为替换元素。 具名插槽 组件中声明了多个插槽后需要给每个","head":[["meta",{"property":"og:url","content":"https://whiteChen233/whitechen233.github.io/zh/front-end/Vue2/Slot.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"插槽"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-30T13:10:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:published_time","content":"2021-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-30T13:10:46.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://whiteChen233/whitechen233.github.io/en/front-end/Vue2/Slot.html"}]]},"excerpt":"","headers":[{"level":2,"title":"何为Slot","slug":"何为slot","link":"#何为slot","children":[]},{"level":2,"title":"组件的插槽","slug":"组件的插槽","link":"#组件的插槽","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"默认值","slug":"默认值","link":"#默认值","children":[]},{"level":3,"title":"具名插槽","slug":"具名插槽","link":"#具名插槽","children":[]}]},{"level":2,"title":"编译作用域","slug":"编译作用域","link":"#编译作用域","children":[]},{"level":2,"title":"作用域插槽","slug":"作用域插槽","link":"#作用域插槽","children":[{"level":3,"title":"缩写语法","slug":"缩写语法","link":"#缩写语法","children":[]}]}],"git":{"createdTime":1664012965000,"updatedTime":1664543446000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1},{"name":"white","email":"294487398@qq.com","commits":1}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"zh/front-end/Vue2/Slot.md","localizedDate":"2021年7月17日"}')}}]);