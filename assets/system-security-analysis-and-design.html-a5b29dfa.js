const e=JSON.parse('{"key":"v-622a347f","path":"/zh/note/QCCSTP/system-architect/system-security-analysis-and-design.html","title":"系统安全分析与设计","lang":"zh-CN","frontmatter":{"title":"系统安全分析与设计","date":"2022-09-18T00:00:00.000Z","description":"安全基础技术 对称与非对称加密 对称加密 对称加密算法就是传统的用一个密码进行加密和解密 缺陷： 加密强度不高（但效率高） 密钥分发困难 常见对称密钥算法： DES：替换+移位、56 位密钥、64 位数据块、速度快、密钥易产生 3DES：两个 56 位密钥的 K1、K2 加密：K1 加密 → K2 解密 → K1 加密 解密：K1 解密 → K2 加密 → K1 解密 RC-5：RSA 数据安全公司的很多产品都使用了 RC-5 IDEA 算法：128 密钥、64 位数据块、比 DES 的加密性好对计算机功能要求相对较低，PGP AES 算法：高级加密标准，又称 Rijndael 加密法，是美国政府使用的以中国区块加密标准","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/zh/note/QCCSTP/system-architect/system-security-analysis-and-design.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"系统安全分析与设计"}],["meta",{"property":"og:description","content":"安全基础技术 对称与非对称加密 对称加密 对称加密算法就是传统的用一个密码进行加密和解密 缺陷： 加密强度不高（但效率高） 密钥分发困难 常见对称密钥算法： DES：替换+移位、56 位密钥、64 位数据块、速度快、密钥易产生 3DES：两个 56 位密钥的 K1、K2 加密：K1 加密 → K2 解密 → K1 加密 解密：K1 解密 → K2 加密 → K1 解密 RC-5：RSA 数据安全公司的很多产品都使用了 RC-5 IDEA 算法：128 密钥、64 位数据块、比 DES 的加密性好对计算机功能要求相对较低，PGP AES 算法：高级加密标准，又称 Rijndael 加密法，是美国政府使用的以中国区块加密标准"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T09:18:19.000Z"}],["meta",{"property":"article:published_time","content":"2022-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-23T09:18:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统安全分析与设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-23T09:18:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安全基础技术","slug":"安全基础技术","link":"#安全基础技术","children":[{"level":3,"title":"对称与非对称加密","slug":"对称与非对称加密","link":"#对称与非对称加密","children":[]},{"level":3,"title":"信息摘要","slug":"信息摘要","link":"#信息摘要","children":[]},{"level":3,"title":"数字签名","slug":"数字签名","link":"#数字签名","children":[]},{"level":3,"title":"数字证书","slug":"数字证书","link":"#数字证书","children":[]}]},{"level":2,"title":"网络安全","slug":"网络安全","link":"#网络安全","children":[{"level":3,"title":"安全协议","slug":"安全协议","link":"#安全协议","children":[]},{"level":3,"title":"网络攻击","slug":"网络攻击","link":"#网络攻击","children":[]},{"level":3,"title":"等级保护保准","slug":"等级保护保准","link":"#等级保护保准","children":[]}]}],"git":{"createdTime":1677143899000,"updatedTime":1677143899000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":8.12,"words":2437},"filePathRelative":"zh/note/QCCSTP/system-architect/system-security-analysis-and-design.md","localizedDate":"2022年9月18日","excerpt":"<h2> 安全基础技术</h2>\\n<h3> 对称与非对称加密</h3>\\n<h4> 对称加密</h4>\\n<p>对称加密算法就是传统的用一个密码进行加密和解密</p>\\n<p>缺陷：</p>\\n<ul>\\n<li>加密强度不高（但效率高）</li>\\n<li>密钥分发困难</li>\\n</ul>\\n<p>常见对称密钥算法：</p>\\n<ul>\\n<li>DES：替换+移位、56 位密钥、64 位数据块、速度快、密钥易产生\\n<ul>\\n<li>3DES：两个 56 位密钥的 K1、K2\\n<ul>\\n<li>加密：K1 加密 → K2 解密 → K1 加密</li>\\n<li>解密：K1 解密 → K2 加密 → K1 解密</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>RC-5：RSA 数据安全公司的很多产品都使用了 RC-5</li>\\n<li>IDEA 算法：128 密钥、64 位数据块、比 DES 的加密性好对计算机功能要求相对较低，PGP</li>\\n<li>AES 算法：高级加密标准，又称 Rijndael 加密法，是美国政府使用的以中国区块加密标准</li>\\n</ul>","autoDesc":true}');export{e as data};
