import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as e,f as c}from"./app.5b8eea61.js";const i={},d=c('<h1 id="\u64CD\u4F5C\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7CFB\u7EDF" aria-hidden="true">#</a> \u64CD\u4F5C\u7CFB\u7EDF</h1><hr><p>\u786C\u76D8\u5BB9\u91CF\u5206\u4E3A\u975E\u683C\u5F0F\u5316\u5BB9\u91CF\u548C\u683C\u5F0F\u5316\u5BB9\u91CF\u4E24\u79CD\uFF0C\u8BA1\u7B97\u516C\u5F0F\u5982\u4E0B\uFF1A</p><ul><li><code>\u975E\u683C\u5F0F\u5316\u5BB9\u91CF=\u9762\u6570x(\u78C1\u9053\u6570/\u9762)x\u5185\u5706\u5468\u957Fx\u6700\u5927\u4F4D\u5BC6\u5EA6</code></li><li><code>\u683C\u5F0F\u5316\u5BB9\u91CF=\u9762\u6570x(\u78C1\u9053\u6570/\u9762)x(\u6247\u533A\u6570/\u9053)x(\u5B57\u8282\u6570/\u6247\u533A)</code></li></ul><hr><p>\u5E38\u7528\u7684I/O\u63A5\u53E3\u7F16\u5740\u65B9\u6CD5\u6709\u4E24\u79CD\uFF1A\u4E00\u662F\u4E0E\u5185\u5B58\u5355\u5143\u7EDF\u4E00\u7F16\u5740\uFF0C\u4E8C\u662F\u5355\u72EC\u7F16\u5740\u3002</p><p>\u4E0E\u5185\u5B58\u5355\u5143\u7EDF\u4E00\u7F16\u5740\u65B9\u5F0F\u4E0B\uFF0C\u662F\u5C06I/O\u63A5\u53E3\u4E2D\u6709\u5173\u7684\u5BC4\u5B58\u5668\u6216\u5B58\u50A8\u90E8\u4EF6\u770B\u4F5C\u5B58\u50A8\u5668\u5355\u5143\uFF0C\u4E0E\u4E3B\u5B58\u4E2D\u7684\u5B58\u50A8\u5355\u5143\u7EDF\u4E00\u7F16\u5740\u3002\u8FD9\u6837\uFF0C\u5185\u5B58\u5730\u5740\u548C\u63A5\u53E3\u5730\u5740\u7EDF\u4E00\u5728\u4E00\u4E2A\u516C\u5171\u7684\u5730\u5740\u7A7A\u95F4\u91CC\uFF0C\u5BF9I/O\u63A5\u53E3\u7684\u8BBF\u95EE\u5C31\u5982\u540C\u5BF9\u4E3B\u5B58\u5355\u5143\u7684\u8BBF\u95EE\u4E00\u6837\uFF0C\u53EF\u4EE5\u7528\u8BBF\u95EE\u5185\u5B58\u5355\u5143\u7684\u6307\u4EE4\u8BBF\u95EEI/O\u63A5\u53E3\u3002</p><p>I/O\u63A5\u53E3\u5355\u72EC\u7F16\u5740\u662F\u6307\u901A\u8FC7\u8BBE\u7F6E\u5355\u72EC\u7684I/O\u5730\u5740\u7A7A\u95F4\uFF0C\u4E3A\u63A5\u53E3\u4E2D\u7684\u6709\u5173\u5BC4\u5B58\u5668\u6216\u5B58\u50A8\u90E8\u4EF6\u5206\u914D\u5730\u5740\u7801\uFF0C\u9700\u8981\u8BBE\u7F6E\u4E13\u95E8\u7684I/O\u6307\u4EE4\u8FDB\u884C\u8BBF\u95EE\u3002\u8FD9\u79CD\u7F16\u5740\u65B9\u5F0F\u7684\u4F18\u70B9\u662F\u4E0D\u5360\u7528\u4E3B\u5B58\u7684\u5730\u5740\u7A7A\u95F4\uFF0C\u8BBF\u95EE\u4E3B\u5B58\u7684\u6307\u4EE4\u548C\u8BBF\u95EE\u63A5\u53E3\u7684\u6307\u4EE4\u4E0D\u540C\uFF0C\u5728\u7A0B\u5E8F\u4E2D\u5BB9\u6613\u4F7F\u7528\u548C\u8FA8\u8BA4\u3002</p><hr><p>\u4E2D\u65AD\u65B9\u5F0F\u548CDMA\u65B9\u5F0F\u65F6\uFF0CCPU\u53EF\u4EE5\u4E0E\u5916\u8BBE\u5E76\u884C\u5DE5\u4F5C</p><ul><li><code>\u7A0B\u5E8F\u67E5\u8BE2\u65B9\u5F0F</code>\uFF1A\u7531CPU\u4E3B\u52A8\u67E5\u8BE2\u5916\u8BBE\u7684\u72B6\u6001\uFF0C\u5728\u5916\u8BBE\u51C6\u5907\u597D\u65F6\u4F20\u8F93\u6570\u636E</li><li><code>\u4E2D\u65AD\u65B9\u5F0F</code>\uFF1A\u5728\u5916\u8BBE\u51C6\u5907\u597D\u662F\u7ED9CPU\u53D1\u4E2D\u65AD\u4FE1\u53F7\uFF0C\u4E4B\u540E\u518D\u8FDB\u884C\u6570\u636E\u4F20\u8F93\uFF08\u5728\u5916\u8BBE\u672A\u53D1\u9001\u4E2D\u65AD\u4FE1\u53F7\u524D\uFF0CCPU\u53EF\u4EE5\u6267\u884C\u5176\u4ED6\u4EFB\u52A1\uFF09</li><li><code>DMA\u65B9\u5F0F</code>\uFF1ACPU\u53EA\u9700\u8981\u5411DMA\u63A7\u5236\u5668\u4E0B\u8FBE\u6307\u4EE4\uFF0C\u8BA9DMA\u63A7\u5236\u5668\u6765\u5904\u7406\u6570\u636E\u7684\u4F20\u9001\uFF0C\u5B8C\u6210\u540E\u53CD\u9988\u7ED9CPU\u5373\u53EF</li></ul><hr><p>\u4FE1\u53F7\u91CF\u673A\u5236\uFF1A\u4FE1\u53F7\u91CF\u673A\u5236\u662F\u4E00\u79CD\u6709\u6548\u7684\u8FDB\u884C\u540C\u6B65\u4E0E\u4E92\u65A5\u5DE5\u5177\u3002\u4E00\u822C\u7528S\u8868\u793A\uFF0C<code>S\u22650</code>\u8868\u793A\u67D0\u8D44\u6E90\u53EF\u7528\u6570\uFF0C<code>S&lt;0</code>\u8868\u793A\u963B\u585E\u961F\u5217\u4E2D\u7B49\u5F85\u8BE5\u8D44\u6E90\u7684\u8FDB\u7A0B\u6570\u3002</p><p><code>PV\u64CD\u4F5C</code>\u662F\u5B9E\u73B0\u8FDB\u7A0B\u540C\u6B65\u4E0E\u4E92\u65A5\u7684\u5E38\u7528\u65B9\u6CD5\u3002P\u8868\u793A\u7533\u8BF7\u4E00\u4E2A\u8D44\u6E90\uFF0CV\u8868\u793A\u91CA\u653E\u4E00\u4E2A\u8D44\u6E90\u3002</p><ul><li><code>P\u64CD\u4F5C</code>\uFF1A<code>S=S-1</code>\uFF0C\u82E5<code>S\u22650</code>\uFF0C\u5219\u6267\u884CP\u64CD\u4F5C\u7684\u8FDB\u7A0B\u7EE7\u7EED\u6267\u884C\uFF1B\u82E5<code>S&lt;0</code>\uFF0C\u5219\u8BE5\u8FDB\u7A0B\u4E3A\u963B\u585E\u72B6\u6001\uFF0C\u8FDB\u5165\u963B\u585E\u961F\u5217</li><li><code>V\u64CD\u4F5C</code>\uFF1A<code>S=S+1</code>\uFF0C\u82E5<code>S&gt;0</code>\uFF0C\u5219\u6267\u884CV\u64CD\u4F5C\u7684\u8FDB\u7A0B\u7EE7\u7EED\u6267\u884C\uFF1B\u82E5<code>S=0</code>\uFF0C\u5219\u963B\u585E\u72B6\u6001\u5524\u9192\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u8BA1\u5165\u5C31\u7EEA\u961F\u5217\uFF0C\u7136\u540EV\u64CD\u4F5C\u7684\u8FDB\u7A0B\u7EE7\u7EED\u6267\u884C</li></ul><p><strong>\u7BAD\u5934\u7684\u8D77\u70B9\u5C31\u662FV\u64CD\u4F5C\uFF0C\u7BAD\u5934\u7684\u7EC8\u70B9\u5C31\u662FP\u64CD\u4F5C\u3002</strong></p><hr><p>\u78C1\u76D8\u7BA1\u7406\u7A0B\u5E8F\u53EF\u4EE5\u5BF9\u78C1\u76D8\u8FDB\u884C\u521D\u59CB\u5316\u3001\u521B\u5EFA\u5377\uFF0C\u5E76\u4E14\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528FAT\u3001FAT32\u6216NTFS\u6587\u4EF6\u7CFB\u7EDF\u683C\u5F0F\u5316\u5377</p><hr><p>\u8BA1\u7B97\u673A\u786C\u4EF6 \u2192 \u64CD\u4F5C\u7CFB\u7EDF \u2192 \u7CFB\u7EDF\u8F6F\u4EF6 \u2192 \u5E94\u7528\u8F6F\u4EF6</p><ul><li>\u7CFB\u7EDF\u8F6F\u4EF6\u5F00\u53D1\u4EBA\u5458\uFF1A\u8BA1\u7B97\u673A\u786C\u4EF6\u3001\u64CD\u4F5C\u7CFB\u7EDF</li><li>\u5E94\u7528\u8F6F\u4EF6\u5F00\u53D1\u4EBA\u5458\uFF1A\u7CFB\u7EDF\u8F6F\u4EF6</li><li>\u6700\u7EC8\u7528\u6237\uFF1A\u5E94\u7528\u8F6F\u4EF6</li></ul><hr><p>\u7CFB\u7EDF\u5B57\u957F32\u4F4D\uFF0C\u4E00\u4E2A\u5B57\u53EF\u4EE5\u8BB0\u5F5532\u4E2A\u7269\u7406\u5757\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p><p><code>\u7269\u7406\u5757\u6570\u91CF=\u78C1\u76D8\u5BB9\u91CF/\u7269\u7406\u5757\u5927\u5C0F</code></p><p><code>\u5B57\u7684\u6570\u91CF=\u7269\u7406\u5757\u6570\u91CF/\u5B57\u957F</code></p><hr><p>\u907F\u514D\u6B7B\u9501\u7684<code>\u6700\u5C11\u8D44\u6E90\u6570 = SUM(\u6BCF\u4E2A\u8FDB\u7A0B\u9700\u8981\u7684\u8D44\u6E90\u6570)-\u8FDB\u7A0B\u6570+1</code></p><hr><p>\u5206\u65F6\u7CFB\u7EDF\u4E2D\u628ACPU\u7684\u65F6\u95F4\u5206\u6210\u5F88\u77ED\u7684\u65F6\u95F4\u7247\u8F6E\u6D41\u7684\u5206\u914D\u7ED9\u5404\u4E2A\u7EC8\u7AEF\u7528\u6237\uFF0C\u5F53\u7CFB\u7EDF\u4E2D\u7528\u6237\u6570\u91CF\u4E3An\uFF0C\u65F6\u95F4\u7247\u4E3Aq\u65F6\uFF0C\u7CFB\u7EDF\u5BF9\u4E8E\u6BCF\u4E2A\u7528\u6237\u7684\u54CD\u5E94\u65F6\u95F4\u7B49\u4E8Enxq</p><hr><p>\u64CD\u4F5C\u7CFB\u7EDF\u6709\u4E24\u4E2A\u91CD\u8981\u91CD\u7528\uFF1A</p><ol><li>\u901A\u8FC7\u8D44\u6E90\u7BA1\u7406\u63D0\u9AD8\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7684\u6548\u7387\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u662F\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7684\u8D44\u6E90\u7BA1\u7406\u8005\uFF0C\u5B83\u542B\u6709\u5BF9\u7CFB\u7EDF\u8F6F/\u786C\u4EF6\u8D44\u6E90\u5B9E\u65BD\u7BA1\u7406\u7684\u4E00\u7EC4\u7A0B\u5E8F</li><li>\u6539\u5584\u4EBA\u673A\u754C\u9762\uFF0C\u5411\u7528\u6237\u63D0\u4F9B\u53CB\u597D\u7684\u5DE5\u4F5C\u73AF\u5883</li></ol><hr><p>\u78C1\u76D8\u8C03\u5EA6\u4E2D\uFF0C\u5148\u8FDB\u884C<code>\u79FB\u81C2\u8C03\u5EA6</code>\u5BFB\u627E\u78C1\u9053\uFF0C\u518D\u8FDB\u884C<code>\u65CB\u8F6C\u8C03\u5EA6</code>\u5BFB\u627E\u6247\u533A\uFF08<code>\u79FB\u81C2\u65CB\u8F6C</code>\uFF09\u3002</p><hr><p>\u5E38\u7528\u7684\u8FDB\u7A0B\u63A7\u5236\u5757\u7684\u7EC4\u7EC7\u65B9\u5F0F\u6709<code>\u8FDE\u63A5\u65B9\u5F0F</code>\u548C<code>\u7D22\u5F15\u65B9\u5F0F</code>\uFF1A</p><ul><li>\u91C7\u7528\u94FE\u63A5\u65B9\u5F0F\u662F\u628A\u5177\u6709\u540C\u4E00\u72B6\u6001\u7684PCB\uFF0C\u7528\u5176\u4E2D\u7684\u94FE\u63A5\u5B57\u94FE\u63A5\u6210\u4E00\u4E2A\u961F\u5217\u3002\u8FD9\u6837\uFF0C\u53EF\u4EE5\u5F62\u6210\u5C31\u7EEA\u961F\u5217\u3001\u82E5\u5E72\u4E2A\u963B\u585E\u961F\u5217\u548C\u7A7A\u767D\u961F\u5217\u7B49\u3002\u5BF9\u5176\u4E2D\u7684\u5C31\u7EEA\u961F\u5217\u5E38\u6309\u8FDB\u7A0B\u4F18\u5148\u7EA7\u7684\u9AD8\u4F4E\u6392\u5217\uFF0C\u628A\u4F18\u5148\u7EA7\u9AD8\u7684\u8FDB\u7A0B\u7684PCB\u6392\u5728\u961F\u5217\u524D\u9762\u3002\u6B64\u5916\uFF0C\u4E5F\u53EF\u6839\u636E\u963B\u585E\u539F\u56E0\u7684\u4E0D\u540C\u800C\u628A\u5904\u4E8E\u963B\u585E\u72B6\u6001\u7684\u8FDB\u7A0B\u7684PCB\u6392\u6210\u7B49\u5F85I/O\u64CD\u4F5C\u5B8C\u6210\u7684\u8BA4\u5217\u548C\u7B49\u5F85\u5206\u914D\u5185\u5B58\u7684\u961F\u5217\u7B49\u3002</li><li>\u91C7\u7528\u7D22\u5F15\u65B9\u5F0F\u662F\u7CFB\u7EDF\u6839\u636E\u6240\u6709\u8FDB\u7A0B\u7684\u72B6\u6001\u5EFA\u7ACB\u82E5\u5E72\u7D22\u5F15\u8868\u3002\u4F8B\u5982\uFF0C\u5C31\u7EEA\u7D22\u5F15\u8868\u3001\u963B\u585E\u7D22\u5F15\u8868\u7B49\uFF0C\u5E76\u628A\u5404\u7D22\u5F15\u8868\u5728\u5185\u5B58\u7684\u9996\u5730\u5740\u8BB0\u5F55\u5728\u5185\u5B58\u7684\u4E00\u4E9B\u4E13\u7528\u5355\u5143\u4E2D\u3002\u5728\u6BCF\u4E2A\u7D22\u5F15\u8868\u7684\u8868\u76EE\u4E2D\uFF0C\u8BB0\u5F55\u5177\u6709\u76F8\u5E94\u72B6\u6001\u7684\u67D0\u4E2APCB\u5728PCB\u8868\u4E2D\u7684\u5730\u5740\u3002</li></ul><hr><p>\u79FB\u81C2\u8C03\u5EA6\u7B97\u6CD5\uFF1A\u53C8\u53EB\u78C1\u76D8\u8C03\u5EA6\u7B97\u6CD5\uFF0C\u6839\u672C\u76EE\u7684\u5728\u4E8E\u6709\u6548\u5229\u7528\u78C1\u76D8\uFF0C\u4FDD\u8BC1\u78C1\u76D8\u7684\u5FEB\u901F\u8BBF\u95EE\u3002\uFF08\u67F1\u9762\u53F7\u5373\u78C1\u9053\u7F16\u53F7\uFF09</p><ol><li>\u5148\u6765\u5148\u670D\u52A1\u7B97\u6CD5\uFF08FCFS\uFF09\uFF1A\u7531\u8BF7\u6C42\u7684\u5148\u540E\u987A\u5E8F\u786E\u5B9A\u6267\u884C\u987A\u5E8F\uFF0C\u53EF\u968F\u65F6\u6539\u53D8\u79FB\u81C2\u65B9\u5411</li><li>\u6700\u77ED\u5BFB\u627E\u65F6\u95F4\u4F18\u5148\u8C03\u5EA6\u7B97\u6CD5\uFF08SSTF\uFF09\uFF1A\u6311\u9009\u5BFB\u627E\u65F6\u95F4\u6700\u77ED\u7684\u90A3\u4E2A\u8BF7\u6C42\u6267\u884C\uFF0C\u53EF\u968F\u65F6\u6539\u53D8\u79FB\u81C2\u65B9\u5411</li><li>\u7535\u68AF\u8C03\u5EA6\u7B97\u6CD5\uFF08SCAN\uFF09\uFF1A\u4ECE\u79FB\u81C2\u5F53\u524D\u4F4D\u7F6E\u6CBF\u79FB\u52A8\u65B9\u5411\u9009\u62E9\u6700\u8FD1\u7684\u90A3\u4E2A\u67F1\u9762\u7684\u8BBF\u95EE\u8005\u6765\u6267\u884C\uFF0C\u82E5\u8BE5\u65B9\u5411\u4E0A\u65E0\u8BF7\u6C42\u8BBF\u95EE\u65F6\uFF0C\u5C31\u6539\u53D8\u79FB\u81C2\u7684\u65B9\u5411\u518D\u9009\u62E9</li><li>\u5355\u5411\u626B\u63CF\u7B97\u6CD5\uFF08CSCAN\uFF09\uFF1A\u603B\u662F\u4ECE0\u53F7\u67F1\u9762\u5F00\u59CB\u5411\u91CC\u9053\u626B\u63CF\uFF0C\u6309\u7167\u5404\u81EA\u6240\u8981\u8BBF\u95EE\u7684\u67F1\u9762\u4F4D\u7F6E\u7684\u6B21\u5E8F\u53BB\u9009\u62E9\u8BBF\u95EE\u8005</li></ol><hr><p>\u6587\u4EF6\u7CFB\u7EDF\u7684\u7D22\u5F15\u95EE\u9898</p><blockquote><p>\u591A\u7EA7\u7D22\u5F15\uFF1A\u5DF2\u77E5\u78C1\u76D8\u5757\u5927\u5C0FA\uFF0C\u5757\u53F7\u5360\u7528\u5927\u5C0FB\uFF0C\u6C42\u4E00\u7EA7\u7D22\u5F15\u3001\u4E8C\u7EA7\u7D22\u5F15\u3001\u4E09\u7EA7\u7D22\u5F15\u7684\u6587\u4EF6\u6700\u5927\u957F\u5EA6\u3002</p><p>\u6BCF\u4E2A\u7269\u7406\u5757\u53EF\u4EE5\u5B58\u653E A/B \u4E2A\u5757\u53F7\uFF0C\u8BB0\u4E3AN<br> \u4E00\u7EA7\uFF1AN^1xA<br> \u4E8C\u7EA7\uFF1AN^2xA<br> \u4E09\u7EA7\uFF1AN^3xA</p><p>\u6DF7\u5408\u7D22\u5F15\uFF1A\u67D0\u7CFB\u7EDF\u4E2D\u78C1\u76D8\u7684\u6BCF\u4E2A\u76D8\u5757\u5927\u5C0F\u4E3A1KB\uFF0C\u5916\u5B58\u5206\u914D\u65B9\u6CD5\u91C7\u7528\u4E2D\u7684\u6DF7\u5408\u7D22\u5F15\u7ED3\u6784\uFF0C\u5176\u4E2D\u7D22\u5F15\u8282\u70B9\u4E2D\u76F4\u63A5\u5730\u57406\u9879\uFF0C\u4E00\u7EA7\u7D22\u5F15\u5730\u57402\u9879\uFF0C\u4E8C\u7EA7\u7D22\u5F15\u5730\u57401\u9879\uFF0C\u6BCF\u4E2A\u76D8\u5757\u53F7\u5360\u75284\u4E2A\u5B57\u8282\uFF0C\u8BF7\u95EE\u8BE5\u7CFB\u7EDF\u4E2D\u5141\u8BB8\u7684\u6587\u4EF6\u6700\u5927\u957F\u5EA6\u662F\u591A\u5C11?</p><p>\u4E00\u4E2A\u76D8\u5757\u53EF\u8BB0\u5F55\u7684\u76D8\u5757\u53F7\u7684\u6570\u91CF\u4E3A\u22361KB/4=256<br> \u76F4\u63A5\u5730\u5740\u2236\u8BB0\u5F556\u4E2A\u6587\u4EF6\u6240\u5360\u7269\u7406\u5757\u7684\u5757\u53F7<br> \u4E00\u7EA7\u7D22\u5F15\u2236\u8BB0\u5F55256x2=512\u4E2A\u6587\u4EF6\u6240\u5360\u7269\u7406\u5757\u7684\u5757\u53F7<br> \u4E8C\u7EA7\u7D22\u5F15\u2236\u8BB0\u5F55256x256x1\u4E2A\u6587\u4EF6\u6240\u5360\u7269\u7406\u5757\u7684\u5757\u53F7<br> \u8BE5\u7CFB\u7EDF\u4E2D\u5141\u8BB8\u7684\u6587\u4EF6\u6700\u5927\u957F\u5EA6(256x256+256x2+6)*1KB</p></blockquote><hr><p>\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u521D\u59CB\u5316\u8FC7\u7A0B\u53EF\u4EE5\u5206\u4E3A3\u4E2A\u4E3B\u8981\u73AF\u8282\uFF0C\u6309\u7167\u81EA\u5DF1\u60F3\u4E0A\u3001\u4ECE\u786C\u4EF6\u5230\u8F6F\u4EF6\u7684\u6B21\u5E8F\u4F9D\u6B21\u4E3A\uFF1A\u7247\u7EA7\u521D\u59CB\u5316\u3001\u677F\u7EA7\u521D\u59CB\u5316\u3001\u7CFB\u7EDF\u7EA7\u521D\u59CB\u5316\u3002</p><ul><li>\u7247\u7EA7\u521D\u59CB\u5316\u5B8C\u6210\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u7684\u521D\u59CB\u5316\uFF0C\u5305\u62EC\u8BBE\u7F6E\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u7684\u6838\u5FC3\u5BC4\u5B58\u5668\u548C\u63A7\u5236\u5BC4\u5B58\u5668\u3001\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u6838\u5FC3\u5DE5\u4F5C\u6A21\u5F0F\u548C\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u7684\u5C40\u90E8\u603B\u7EBF\u6A21\u5F0F\u7B49\u3002\u7247\u7EA7\u521D\u59CB\u5316\u628A\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u4ECE\u4E0A\u7535\u65F6\u7684\u9ED8\u8BA4\u72B6\u6001\u9010\u6B65\u8BBE\u7F6E\u6210\u7CFB\u7EDF\u6240\u8981\u6C42\u7684\u5DE5\u4F5C\u72B6\u6001\u3002\u8FD9\u662F\u4E00\u4E2A\u7EAF\u786C\u4EF6\u7684\u521D\u59CB\u5316\u8FC7\u7A0B\u3002</li><li>\u677F\u7EA7\u521D\u59CB\u5316\u5B8C\u6210\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u4EE5\u5916\u7684\u5176\u4ED6\u786C\u4EF6\u8BBE\u5907\u7684\u521D\u59CB\u5316\u3002\u53E6\u5916\uFF0C\u8FD8\u9700\u8BBE\u7F6E\u67D0\u4E9B\u8F6F\u4EF6\u7684\u6570\u636E\u7ED3\u6784\u548C\u53C2\u6570\uFF0C\u4E3A\u968F\u540E\u7684\u7CFB\u7EDF\u7EA7\u521D\u59CB\u5316\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u5EFA\u7ACB\u786C\u4EF6\u548C\u8F6F\u4EF6\u73AF\u5883\u3002\u8FD9\u662F\u4E00\u4E2A\u540C\u65F6\u5305\u542B\u8F6F\u786C\u4EF6\u4E24\u90E8\u5206\u5728\u5185\u7684\u521D\u59CB\u5316\u8FC7\u7A0B\u3002</li><li>\u7CFB\u7EDF\u521D\u59CB\u5316\u8FC7\u7A0B\u4EE5\u8F6F\u4EF6\u521D\u59CB\u5316\u4E3A\u4E3B\uFF0C\u4E3B\u8981\u8FDB\u884C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u521D\u59CB\u5316\u3002BSP\u5C06\u5BF9\u5D4C\u5165\u5F0F\u5FAE\u5904\u7406\u5668\u7684\u63A7\u5236\u6743\u8F6C\u4EA4\u7ED9\u5D4C\u5165\u5F0F\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u7531\u64CD\u4F5C\u7CFB\u7EDF\u5B8C\u6210\u4F59\u4E0B\u7684\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u5305\u542B\u52A0\u8F7D\u548C\u521D\u59CB\u5316\u4E0E\u786C\u4EF6\u65E0\u5173\u7684\u8BBE\u5907\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u5EFA\u7ACB\u7CFB\u7EDF\u5185\u5B58\u533A\uFF0C\u52A0\u8F7D\u5E76\u521D\u59CB\u5316\u5176\u4ED6\u7CFB\u7EDF\u8F6F\u4EF6\u6A21\u5757\uFF0C\u5982\u7F51\u7EDC\u7CFB\u7EDF\u3001\u6587\u4EF6\u7CFB\u7EDF\u7B49\u3002\u6700\u540E\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\u73AF\u5883\uFF0C\u5E76\u5C06\u63A7\u5236\u6743\u4EA4\u7ED9\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u3002</li></ul><hr><p>\u5D4C\u5165\u5F0F\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7279\u70B9\uFF1A</p><ol><li>\u5FAE\u578B\u5316\uFF0C\u4ECE\u6027\u80FD\u548C\u6210\u672C\u89D2\u5EA6\u8003\u8651\uFF0C\u5E0C\u671B\u5360\u7528\u7684\u8D44\u6E90\u548C\u7CFB\u7EDF\u4EE3\u7801\u91CF\u5C11\uFF1B</li><li>\u53EF\u5B9A\u5236\uFF0C\u4ECE\u51CF\u5C11\u6210\u672C\u548C\u7F29\u77ED\u7814\u53D1\u5468\u671F\u8003\u8651\uFF0C\u8981\u6C42\u5D4C\u5165\u5F0F\u64CD\u4F5C\u7CFB\u7EDF\u80FD\u8FD0\u884C\u5728\u4E0D\u540C\u7684\u5FAE\u5904\u7406\u5668\u5E73\u53F0\u4E0A\uFF0C\u80FD\u9488\u5BF9\u786C\u4EF6\u53D8\u5316\u8FDB\u884C\u7ED3\u6784\u4E0E\u529F\u80FD\u4E0A\u7684\u914D\u7F6E\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u5E94\u7528\u7684\u9700\u6C42\uFF1B</li><li>\u5B9E\u65F6\u6027\uFF0C\u5D4C\u5165\u5F0F\u64CD\u4F5C\u7CFB\u7EDF\u4E3B\u8981\u5E94\u7528\u4E8E\u8FC7\u7A0B\u63A7\u5236\u3001\u6570\u636E\u91C7\u96C6\u3001\u4F20\u8F93\u901A\u4FE1\u3001\u591A\u5A92\u4F53\u4FE1\u606F\u53CA\u5173\u952E\u8981\u5BB3\u9886\u57DF\u9700\u8981\u8FC5\u901F\u54CD\u5E94\u7684\u573A\u5408\uFF0C\u6240\u4EE5\u5BF9\u5B9E\u65F6\u6027\u8981\u6C42\u8F83\u9AD8\uFF1B</li><li>\u53EF\u9760\u6027\uFF0C\u7CFB\u7EDF\u6784\u4EF6\u3001\u6A21\u5757\u548C\u4F53\u7CFB\u7ED3\u6784\u5FC5\u987B\u8FBE\u5230\u5E94\u6709\u7684\u53EF\u9760\u6027\uFF0C\u5BF9\u5173\u952E\u8981\u5BB3\u5E94\u7528\u8FD8\u8981\u63D0\u4F9B\u5BB9\u9519\u548C\u9632\u6545\u969C\u63AA\u65BD\uFF1B</li><li>\u6613\u79FB\u690D\u6027\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u7CFB\u7EDF\u7684\u6613\u79FB\u690D\u6027\uFF0C\u901A\u5E38\u91C7\u7528\u786C\u4EF6\u62BD\u8C61\u5C42\u548C\u677F\u7EA7\u652F\u6491\u5305\u7684\u5E95\u5C42\u8BBE\u8BA1\u6280\u672F\u3002</li></ol><hr><p>\u5728Linux\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2A\u6839\u76EE\u5F55\uFF0C\u6839\u76EE\u5F55\u4F7F\u7528&quot;/&quot;\u6765\u8868\u793A\u3002\u6839\u76EE\u5F55\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u76EE\u5F55\uFF0C\u5176\u4ED6\u7684\u6587\u4EF6\u76EE\u5F55\u5747\u7531\u6839\u76EE\u5F55\u884D\u751F\u800C\u6765\u3002</p><p>\u5728Linux\u4E2D\uFF0C\u66F4\u6539\u4E00\u4E2A\u6587\u4EF6\u7684\u6743\u9650\u8BBE\u7F6E\u53EF\u4F7F\u7528<code>chmod</code>\u547D\u4EE4\u3002</p><hr><p>\u78C1\u76D8\u7BA1\u7406\u7684\u7F13\u5B58\u533A\u64CD\u4F5C\u65F6\u95F4\u516C\u5F0F\uFF1A</p><ul><li>\u5355\u7F13\u5B58\u533A:<code>(\u8F93\u5165+\u8F93\u51FA+\u5904\u7406)+(\u8F93\u5165+\u8F93\u51FA)*(\u78C1\u76D8\u6570-1)</code>\uFF0C\u5BF9\u4E8E\u5355\u7F13\u5B58\u533A\uFF0C\u53EA\u6709\u4E24\u6761\u6307\u4EE4\uFF0C\u4E00\u6761\u8F93\u5165\u8F93\u51FA\uFF0C\u4E00\u6761\u5904\u7406</li><li>\u53CC\u7F13\u5B58\u533A\uFF1A<code>(\u8F93\u5165+\u8F93\u51FA+\u5904\u7406)+\u8F93\u5165*(\u78C1\u76D8\u6570-1)</code>\uFF0C\u5BF9\u4E8E\u53CC\u7F13\u5B58\u533A\uFF0C\u5C31\u7C7B\u4F3C\u4E0E\u6D41\u6C34\u7EBF\u7684\u5904\u7406\uFF0C\u9009\u62E9\u65F6\u957F\u6700\u957F\u7684\u4F5C\u4E3A\u5468\u671F\uFF08\u4E00\u822C\u662F\u8F93\u5165\uFF09</li></ul><hr><p>UNIX\u7CFB\u7EDF\u4E2D\u5305\u542B\u4E24\u7C7B\u8BBE\u5907\uFF1A\u5757\u8BBE\u5907\u548C\u5B57\u7B26\u8BBE\u5907\u3002\u8BBE\u5907\u7279\u6B8A\u6587\u4EF6\u6709\u4E00\u4E2A\u7D22\u5F15\u8282\u70B9\uFF0C\u5728\u6587\u4EF6\u7CFB\u7EDF\u76EE\u5F55\u4E2D\u5360\u636E\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F46\u5176\u7D22\u5F15\u8282\u70B9\u4E0A\u7684\u6587\u4EF6\u7C7B\u578B\u4E0E\u5176\u4ED6\u6587\u4EF6\u4E0D\u540C\uFF0C\u662F&quot;\u5757&quot;\u6216\u8005\u662F&quot;\u5B57\u7B26&quot;\u7279\u6B8A\u6587\u4EF6\u3002\u53EF\u4EE5\u628AI/O\u8BBE\u5907\u770B\u4F5C\u662F\u7279\u6B8A\u6587\u4EF6\u3002</p>',57),p=[d];function r(t,h){return l(),e("div",null,p)}const x=o(i,[["render",r],["__file","\u64CD\u4F5C\u7CFB\u7EDF.html.vue"]]);export{x as default};
