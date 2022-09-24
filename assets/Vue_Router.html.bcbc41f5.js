const e=JSON.parse('{"key":"v-22858834","path":"/zh/front-end/Vue2/Vue_Router.html","title":"Vue-\u8DEF\u7531\u7BA1\u7406\u5668","lang":"zh-CN","frontmatter":{"summary":"Vue-\u8DEF\u7531\u7BA1\u7406\u5668 \u4EC0\u4E48\u662F\u8DEF\u7531 \u8DEF\u7531\u662F\u4E00\u4E2A\u7F51\u7EDC\u5DE5\u7A0B\u91CC\u9762\u7684\u672F\u8BED\u3002\u8DEF\u7531(routing)\u5C31\u662F\u901A\u8FC7\u4E92\u8054\u7684\u7F51\u7EDC\u628A\u4FE1\u606F\u4ECE\u6E90\u5730\u5740\u4F20\u8F93\u5230\u76EE\u7684\u5730\u5740\u7684\u6D3B\u52A8\u3002 \u8DEF\u7531\u5668\u63D0\u4F9B\u4E86\u4E24\u79CD\u673A\u5236\uFF1A\u8DEF\u7531\u548C\u8F6C\u9001 \u8DEF\u7531\u65F6\u51B3\u5B9A\u6570\u636E\u5305\u4ECE\u6765\u6E90\u5230\u76EE\u7684\u5730\u7684\u8DEF\u5F84; \u8F6C\u9001\u5C06\u8F93\u5165\u7AEF\u7684\u6570\u636E\u8F6C\u79FB\u5230\u5408\u9002\u7684\u8F93\u51FA\u7AEF; \u8DEF\u7531\u4E2D\u6709\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\u53EB\u8DEF\u7531\u8868 \u8DEF\u7531\u8868\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u6620\u5C04\u8868\uFF0C\u51B3\u5B9A\u4E86\u6570\u636E\u5305\u7684\u6307\u5411; \\" \u4ECE\u8868\u73B0\u5F62\u5F0F\u4E0A\u770B\uFF1A","head":[["meta",{"property":"og:url","content":"https://whiteChen233/whitechen233.github.io/zh/front-end/Vue2/Vue_Router.html"}],["meta",{"property":"og:site_name","content":"\u6E29\u6545\u800C\u77E5\u65B0~"}],["meta",{"property":"og:title","content":"Vue-\u8DEF\u7531\u7BA1\u7406\u5668"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-24T09:49:25.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-09-24T09:49:25.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"/en/front-end/Vue2/Vue_Router.html"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u8DEF\u7531","slug":"\u4EC0\u4E48\u662F\u8DEF\u7531","link":"#\u4EC0\u4E48\u662F\u8DEF\u7531","children":[{"level":3,"title":"\u540E\u7AEF\u8DEF\u7531\u9636\u6BB5","slug":"\u540E\u7AEF\u8DEF\u7531\u9636\u6BB5","link":"#\u540E\u7AEF\u8DEF\u7531\u9636\u6BB5","children":[]},{"level":3,"title":"\u524D\u540E\u7AEF\u5206\u79BB\u9636\u6BB5","slug":"\u524D\u540E\u7AEF\u5206\u79BB\u9636\u6BB5","link":"#\u524D\u540E\u7AEF\u5206\u79BB\u9636\u6BB5","children":[]},{"level":3,"title":"\u5355\u9875\u9762\u5BCC\u5E94\u7528\u9636\u6BB5","slug":"\u5355\u9875\u9762\u5BCC\u5E94\u7528\u9636\u6BB5","link":"#\u5355\u9875\u9762\u5BCC\u5E94\u7528\u9636\u6BB5","children":[]}]},{"level":2,"title":"URL\u7684hash\u548CHTML5\u7684history","slug":"url\u7684hash\u548Chtml5\u7684history","link":"#url\u7684hash\u548Chtml5\u7684history","children":[{"level":3,"title":"URL\u7684hash","slug":"url\u7684hash","link":"#url\u7684hash","children":[]},{"level":3,"title":"window\u7684history","slug":"window\u7684history","link":"#window\u7684history","children":[]}]},{"level":2,"title":"\u5B89\u88C5\u548C\u4F7F\u7528 vue-router","slug":"\u5B89\u88C5\u548C\u4F7F\u7528-vue-router","link":"#\u5B89\u88C5\u548C\u4F7F\u7528-vue-router","children":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]},{"level":3,"title":"\u9ED8\u8BA4\u9996\u9875","slug":"\u9ED8\u8BA4\u9996\u9875","link":"#\u9ED8\u8BA4\u9996\u9875","children":[]},{"level":3,"title":"history \u6A21\u5F0F","slug":"history-\u6A21\u5F0F","link":"#history-\u6A21\u5F0F","children":[]},{"level":3,"title":"\u7F16\u7A0B\u5F0F\u7684\u5BFC\u822A","slug":"\u7F16\u7A0B\u5F0F\u7684\u5BFC\u822A","link":"#\u7F16\u7A0B\u5F0F\u7684\u5BFC\u822A","children":[]}]},{"level":2,"title":"\u52A8\u6001\u8DEF\u7531","slug":"\u52A8\u6001\u8DEF\u7531","link":"#\u52A8\u6001\u8DEF\u7531","children":[{"level":3,"title":"\u54CD\u5E94\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316","slug":"\u54CD\u5E94\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316","link":"#\u54CD\u5E94\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316","children":[]}]},{"level":2,"title":"\u8DEF\u7531\u61D2\u52A0\u8F7D","slug":"\u8DEF\u7531\u61D2\u52A0\u8F7D","link":"#\u8DEF\u7531\u61D2\u52A0\u8F7D","children":[{"level":3,"title":"\u61D2\u52A0\u8F7D\u7684\u51E0\u79CD\u65B9\u6CD5","slug":"\u61D2\u52A0\u8F7D\u7684\u51E0\u79CD\u65B9\u6CD5","link":"#\u61D2\u52A0\u8F7D\u7684\u51E0\u79CD\u65B9\u6CD5","children":[]},{"level":3,"title":"\u628A\u7EC4\u4EF6\u6309\u7EC4\u5206\u5757","slug":"\u628A\u7EC4\u4EF6\u6309\u7EC4\u5206\u5757","link":"#\u628A\u7EC4\u4EF6\u6309\u7EC4\u5206\u5757","children":[]}]},{"level":2,"title":"\u5D4C\u5957\u8DEF\u7531","slug":"\u5D4C\u5957\u8DEF\u7531","link":"#\u5D4C\u5957\u8DEF\u7531","children":[]},{"level":2,"title":"\u53C2\u6570\u4F20\u9012","slug":"\u53C2\u6570\u4F20\u9012","link":"#\u53C2\u6570\u4F20\u9012","children":[]},{"level":2,"title":"\u5BFC\u822A\u5B88\u536B","slug":"\u5BFC\u822A\u5B88\u536B","link":"#\u5BFC\u822A\u5B88\u536B","children":[{"level":3,"title":"\u5168\u5C40\u524D\u7F6E\u5B88\u536B","slug":"\u5168\u5C40\u524D\u7F6E\u5B88\u536B","link":"#\u5168\u5C40\u524D\u7F6E\u5B88\u536B","children":[]},{"level":3,"title":"\u5168\u5C40\u89E3\u6790\u5B88\u536B","slug":"\u5168\u5C40\u89E3\u6790\u5B88\u536B","link":"#\u5168\u5C40\u89E3\u6790\u5B88\u536B","children":[]},{"level":3,"title":"\u5168\u5C40\u540E\u7F6E\u94A9\u5B50","slug":"\u5168\u5C40\u540E\u7F6E\u94A9\u5B50","link":"#\u5168\u5C40\u540E\u7F6E\u94A9\u5B50","children":[]},{"level":3,"title":"\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B","slug":"\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B","link":"#\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B","children":[]},{"level":3,"title":"\u7EC4\u4EF6\u5185\u7684\u5B88\u536B","slug":"\u7EC4\u4EF6\u5185\u7684\u5B88\u536B","link":"#\u7EC4\u4EF6\u5185\u7684\u5B88\u536B","children":[]},{"level":3,"title":"\u5B8C\u6574\u7684\u5BFC\u822A\u89E3\u6790\u6D41\u7A0B","slug":"\u5B8C\u6574\u7684\u5BFC\u822A\u89E3\u6790\u6D41\u7A0B","link":"#\u5B8C\u6574\u7684\u5BFC\u822A\u89E3\u6790\u6D41\u7A0B","children":[]}]},{"level":2,"title":"keep-alive","slug":"keep-alive","link":"#keep-alive","children":[]}],"git":{"createdTime":1664012965000,"updatedTime":1664012965000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":20.08,"words":6025},"filePathRelative":"zh/front-end/Vue2/Vue_Router.md","localizedDate":"2022\u5E749\u670824\u65E5"}');export{e as data};
