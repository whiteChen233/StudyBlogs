import{_ as t,W as i,X as d,a2 as e}from"./framework-e073d8fb.js";const l="/assets/note/qccstp/安全基础技术-非对称加密技术.png",a="/assets/note/qccstp/安全基础技术-加密技术、信息摘要、数字签名的应用.png",r="/assets/note/qccstp/安全基础技术-PKI公钥体系.png",o="/assets/note/qccstp/安全基础技术-PKI公钥体系-银行实例.png",c="/assets/note/qccstp/网络安全-各个网络层次的安全保障.png",s="/assets/note/qccstp/网络安全-信息安全体系结构.png",n={},h=e('<h2 id="安全基础技术" tabindex="-1"><a class="header-anchor" href="#安全基础技术" aria-hidden="true">#</a> 安全基础技术</h2><h3 id="对称与非对称加密" tabindex="-1"><a class="header-anchor" href="#对称与非对称加密" aria-hidden="true">#</a> 对称与非对称加密</h3><h4 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h4><p>对称加密算法就是传统的用一个密码进行加密和解密</p><p>缺陷：</p><ul><li>加密强度不高（但效率高）</li><li>密钥分发困难</li></ul><p>常见对称密钥算法：</p><ul><li>DES：替换+移位、56 位密钥、64 位数据块、速度快、密钥易产生 <ul><li>3DES：两个 56 位密钥的 K1、K2 <ul><li>加密：K1 加密 → K2 解密 → K1 加密</li><li>解密：K1 解密 → K2 加密 → K1 解密</li></ul></li></ul></li><li>RC-5：RSA 数据安全公司的很多产品都使用了 RC-5</li><li>IDEA 算法：128 密钥、64 位数据块、比 DES 的加密性好对计算机功能要求相对较低，PGP</li><li>AES 算法：高级加密标准，又称 Rijndael 加密法，是美国政府使用的以中国区块加密标准</li></ul><h4 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h4><p>对称加密算法就是传统的用一个密码进行加密和解密</p><p>缺陷：加密速度慢</p><p>常见的非对称加密算法：</p><ul><li>RAS：2048 位（或 1024 位）密钥、计算量极大、难破解</li><li>Elgamal：安全性依赖于计算有限域上离散对数这一难题</li><li>ECC：椭圆曲线算法</li></ul><figure><img src="'+l+'" alt="安全基础技术-非对称加密技术" tabindex="0" loading="lazy"><figcaption>安全基础技术-非对称加密技术</figcaption></figure><blockquote><ul><li><p>P<sub>a</sub>加密的只能 S<sub>a</sub>解密，S<sub>a</sub>加密的只能 P<sub>a</sub>解密</p></li><li><p>A 向 B 发送消息</p><ul><li>从保密性的角度来看：如果使用 S<sub>a</sub>加密，因为 P<sub>b</sub>是公开的，所以起不到保密的作用（任何人都可以解密），如果使用 P<sub>b</sub>加密，则只能用 S<sub>b</sub>才能解开，就保证了发送消息的保密性</li><li>从防抵赖的角度来看：消息能使用 P<sub>a</sub>解开，那么说明它是经过了 S<sub>a</sub>的加密，而只有 A 持有 P<sub>a</sub>对应的私钥 S<sub>a</sub>，说明消息是 A 发过来的。这就是<code>数字签名</code>的应用，它可以识别发送者的身份，以及防抵赖。其中，用 S<sub>a</sub>加密的过程就是<code>签名</code>，而使用 P<sub>a</sub>解密的过程就是<code>验证签名</code></li></ul></li><li><p><code>私钥一般用来签名和解密，反之，公钥一般用来验证签名和加密</code></p></li></ul></blockquote><h3 id="信息摘要" tabindex="-1"><a class="header-anchor" href="#信息摘要" aria-hidden="true">#</a> 信息摘要</h3><p>将明文通过<code>单向</code>散列函数处理，得到固定长度的散列值的算法</p><p>常用的消息摘要算法有 MD5、SHA 等，市场上广泛使用的 MD5、SHA 算法的散列值分别为 128 位和 160 位，由于 SHA 通常采用的密钥长度较长，一次安全性高于 MD5</p><p>信息摘要一般用于保障数据的<code>完整性</code>，因为原文变，摘要也会变</p><h3 id="数字签名" tabindex="-1"><a class="header-anchor" href="#数字签名" aria-hidden="true">#</a> 数字签名</h3><p>数字签名（又称公钥数字签名）是只有信息的发送者才能产生的别人无法伪造的一段数字串，这段数字串同时也是对信息的发送者发送信息真实性的一个有效证明。它是一种类似写在纸上的普通的物理签名，但是在使用了公钥加密领域的技术来实现的，用于鉴别数字信息的方法。一套数字签名通常定义两种互补的运算，一个用于签名，另一个用于验证。<code>数字签名是非对称密钥加密技术与数字摘要技术的应用</code></p><h4 id="加密技术、信息摘要、数字签名的应用的例子" tabindex="-1"><a class="header-anchor" href="#加密技术、信息摘要、数字签名的应用的例子" aria-hidden="true">#</a> 加密技术、信息摘要、数字签名的应用的例子</h4><figure><img src="'+a+'" alt="安全基础技术-加密技术、信息摘要、数字签名的应用" tabindex="0" loading="lazy"><figcaption>安全基础技术-加密技术、信息摘要、数字签名的应用</figcaption></figure><blockquote><p>使用非对称加密方式加密对称密钥的技术称为<code>数字信封</code></p></blockquote><h3 id="数字证书" tabindex="-1"><a class="header-anchor" href="#数字证书" aria-hidden="true">#</a> 数字证书</h3><ul><li>证书的<code>版本信息</code></li><li>证书的<code>序列号</code>，每个证书都有唯一的证书序列号</li><li>证书所使用的签名算法</li><li>证书的发行机构名称，命名规则一般采用 X.500 格式</li><li>正式的<code>有效期</code>，现在通过的证书一般采用 UTC 时间格式，它的计算范围为 1950-2049</li><li>证书所有人的名称，命名规则一般采用 X.500 格式</li><li>证书所有人的<code>公开密钥</code></li><li><code>证书发行者对证书的签名</code>（CA 使用 CA 的私钥对数字证书进行签名，所以需要使用 CA 的公钥对数字证书来进行验证）</li></ul><h4 id="pki-公钥体系" tabindex="-1"><a class="header-anchor" href="#pki-公钥体系" aria-hidden="true">#</a> PKI 公钥体系</h4><ul><li>CA（Certificate Authority）认证中心</li><li>RA（Registration Authority）注册审批机构</li><li>证书受理点</li><li>密钥管理中心-KMC</li></ul><figure><img src="'+r+'" alt="安全基础技术-PKI公钥体系" tabindex="0" loading="lazy"><figcaption>安全基础技术-PKI公钥体系</figcaption></figure><figure><img src="'+o+'" alt="安全基础技术-PKI公钥体系-银行实例" tabindex="0" loading="lazy"><figcaption>安全基础技术-PKI公钥体系-银行实例</figcaption></figure><h2 id="网络安全" tabindex="-1"><a class="header-anchor" href="#网络安全" aria-hidden="true">#</a> 网络安全</h2><h3 id="安全协议" tabindex="-1"><a class="header-anchor" href="#安全协议" aria-hidden="true">#</a> 安全协议</h3><figure><img src="'+c+'" alt="网络安全-各个网络层次的安全保障" tabindex="0" loading="lazy"><figcaption>网络安全-各个网络层次的安全保障</figcaption></figure><ul><li>PGP（Pretty Good Privacy）：优良保密协议，针对邮件、文件的混合加密系统</li><li>SSL（Secure Sockets Layer）：安全套接字协议，工作在传输层至应用层</li><li>TLS（Transport Layer Security）：传输层安全协议</li><li>SET（Secure Electronic Transaction）：安全电子交易协议，用于电子商务</li><li>IPSEC（Internet Protocol Security）：互联网安全协议，对 IP 包加密</li></ul><h3 id="网络攻击" tabindex="-1"><a class="header-anchor" href="#网络攻击" aria-hidden="true">#</a> 网络攻击</h3><h4 id="被动攻击" tabindex="-1"><a class="header-anchor" href="#被动攻击" aria-hidden="true">#</a> 被动攻击</h4><p>收集信息为主，破坏保密性</p><table><thead><tr><th>攻击名称</th><th>描述</th></tr></thead><tbody><tr><td>窃听（网络监听）</td><td>用各种可能的合法或非法手段窃取系统中的<code>信息资源和敏感信息</code></td></tr><tr><td>业务流分析</td><td>通过对系统进行长期监听，利用统计分析方法对诸如<code>通信频度、通信的信息流向</code>、通信的总量变化等参数进行研究，从而发现有价值的信息和规律</td></tr><tr><td>非法登录</td><td>有些资料将这种方式归为被动攻击</td></tr></tbody></table><h4 id="主动攻击" tabindex="-1"><a class="header-anchor" href="#主动攻击" aria-hidden="true">#</a> 主动攻击</h4><p>主动攻击的类别主要有：</p><ul><li>中断（破坏可用性）</li><li>篡改（破坏完整性）</li><li>伪造（破坏真实性）</li></ul><table><thead><tr><th>攻击名称</th><th>描述</th></tr></thead><tbody><tr><td>假冒身份</td><td>通过欺骗通信系统（或用户）达到非法用户冒充合法用户，或者特权小的用户冒充成特权大的用户的目的。黑客大多是采用假冒进行攻击</td></tr><tr><td>抵赖</td><td>这是一种来自用户的攻击，比如：否认自己曾经发布过某条消息、伪造一份对方来信等</td></tr><tr><td>旁路控制</td><td>攻击者利用系统的安全缺陷或安全性上的脆弱之处获得非授权的权力或特权</td></tr><tr><td>重放攻击</td><td>所截获的某次合法通信数据拷贝，处于非法的目的而被重新发送。加时间戳能识别并应对重放攻击</td></tr><tr><td>拒绝服务（DOS/DDOS）</td><td>对信息或其他资源的合法访问被无条件的阻止</td></tr></tbody></table><h3 id="等级保护保准" tabindex="-1"><a class="header-anchor" href="#等级保护保准" aria-hidden="true">#</a> 等级保护保准</h3><p>计算机信息系统安全保护等级划分准则（GB17859-1999）</p><ul><li><strong>用户自主保护级</strong>：适用于普通内联网用户 <ul><li>系统被破坏后，对<code>公民、法人和其他组织权益有损害</code>，但不损害国家安全社会秩序和公共利益</li></ul></li><li><strong>系统审计保护级</strong>：适用于通过内联网或国际网进行商务活动，需要保密的非重要单位 <ul><li>系统被破坏后，对<code>公民、法人和其他组织权益有严重损害</code>，或<code>损害社会秩序和公共利益</code>，但不损害国家安全</li></ul></li><li><strong>安全标记保护级</strong>：适用于地方各级国家机关、金融机构、邮电通信、能源与水源供给部门、交通运输、大型工商与信息技术企业、重点工程建设等单位 <ul><li>系统被破坏后，对<code>社会秩序和公共利益造成严重损害</code>，或对<code>国家安全造成损害</code></li></ul></li><li><strong>结构化保护级</strong>：适用于中央级国家机关、广播电视部门、虫咬物资储备单位、社会应急部门、尖端科技企业集团、国家重点科研机构和国防建设等部门 <ul><li>系统被破坏后，对<code>社会秩序和公共利益造成特别严重损害</code>，或对<code>国家安全造成严重损害</code></li></ul></li><li><strong>访问验证保护级</strong>：适用于国防关键部门和依法需要对计算机信息系统实施特殊隔离的单位 <ul><li>系统被破坏后，对<code>国家安全造成特别严重损害</code></li></ul></li></ul><h4 id="速记表格" tabindex="-1"><a class="header-anchor" href="#速记表格" aria-hidden="true">#</a> 速记表格</h4><table><thead><tr><th></th><th>公民、法人和其他组织权益</th><th>社会秩序和公共利益</th><th>国家安全</th></tr></thead><tbody><tr><td>用户自主保护级</td><td>损害</td><td></td><td></td></tr><tr><td>系统审计保护级</td><td>严重损害</td><td>损害</td><td></td></tr><tr><td>安全标记保护级</td><td></td><td>严重损害</td><td>损害</td></tr><tr><td>结构化保护级</td><td></td><td>特别严重损害</td><td>严重损害</td></tr><tr><td>访问验证保护级</td><td></td><td></td><td>特别严重损害</td></tr></tbody></table><h4 id="信息安全体系结构" tabindex="-1"><a class="header-anchor" href="#信息安全体系结构" aria-hidden="true">#</a> 信息安全体系结构</h4><figure><img src="'+s+'" alt="网络安全-信息安全体系结构" tabindex="0" loading="lazy"><figcaption>网络安全-信息安全体系结构</figcaption></figure><ul><li>鉴别服务 <ul><li>用户名 + 口令</li><li>数字证书</li><li>生物特征识别</li></ul></li><li>访问控制 <ul><li><strong>自主访问控制（DAC）</strong>：对主体指定哪些客体的访问权</li><li>访问控制列表（ACL）：对客体指定允许的主体</li><li><strong>强制访问控制（MAC）</strong>：主体客体分级</li><li><strong>基于角色的访问控制（RBAC）</strong></li><li>基于任务的访问控制（TBAC）</li></ul></li><li>数据完整性 <ul><li>阻止对媒体访问的机制：隔离，访问控制，路由控制</li><li>探测非授权修改的机制：数字签名，数据重复，数字指纹，消息序列号</li></ul></li><li>数据保密性 <ul><li>通过禁止访问提供机密性</li><li>通过加密提供机密性</li></ul></li><li>抗抵赖 <ul><li>数字签名</li></ul></li></ul>',50),u=[h];function p(b,g){return i(),d("div",null,u)}const S=t(n,[["render",p],["__file","system-security-analysis-and-design.html.vue"]]);export{S as default};
