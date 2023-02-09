import{_ as l,X as i,Y as p,a3 as r}from"./framework-97177bfb.js";const e={},o=r("<hr><p>数据流图摆脱系统的物理内容，在逻辑上描述系统的功能、输入、输出和数据存储等，是系统逻辑模型的重要组成部分。</p><p>数据流图每条数据的起点或终点必须是加工，即至少有一端是加工。分层数据流图中必须要保持父图与子图平衡，每个加工必须有输入输出。必须保持数据守恒。</p><p>数据流图主要由四部分组成。</p><ul><li>实体：数据源或数据汇点，数据的输入来源或处理结果送往何处</li><li>数据流：数据沿箭头方向流动</li><li>加工：对数据的对象的处理或变换</li><li>数据存储：在数据流中起到保存数据的作用，可以是任何形式的数据组织</li></ul><p>顶层数据流描述的是系统的输入输出。</p><hr><p>结构化开发方法由结构化分析、结构化设计和结构化程序设计构成，是一种面下个数据流的开发方法。其指导思想是自顶向下，逐层分解，基本原则是功能的分解与抽象。他是软件工程中最早出现的开发方法，特别适合于数据处理领域的问题，但是不适合解决啊规模的、特别复杂的项目，而且难以适应需求的变化。</p><hr><p>结构化设计主要包括</p><ol><li>体系结构设计：定义软件的主要结构元素及其关系</li><li>数据设计：基于实体联系图确定软件设计的文件系统的结构及数据库的表结构</li><li>接口设计：描述用户界面，软件和其他硬件设备、其他软件系统及使用人员的外部接口</li><li>过程设计：确定软件各个组成部分内的算法及内部数据结构，并选定某种过程的表按姓氏来描述各种算法。</li></ol><hr><p>结构化分析的结果有以下几部分组成：一套分层的数据流图、一本数据字典、一组小说明（也称加工逻辑说明）、补充材料。</p><hr><p>耦合性：模块间相对独立性（互相连接的紧密程度）的度量</p><ul><li>无直接耦合：没有直接关系</li><li>数据耦合：传递简单数据</li><li>标记耦合：传递数据结构</li><li>控制耦合：传递控制变量</li><li>外部耦合：软件之外的环境连接</li><li>公共耦合：公共数据相互作用</li><li>内容耦合：直接使用模块内部数据或通过非正常入口传入另一个模块内部</li></ul><p>内聚性：是对一个模块内部各个元素彼此间结合的紧密程度的度量</p><ul><li>偶然（巧合）内聚：没有任何联系</li><li>逻辑内聚：若干逻辑相似的功能，通过参数确定完成哪一个功能</li><li>时间内聚：需要同时执行的组合在一个模块</li><li>过程内聚：模块内多个任务按指定的过程执行</li><li>通信内聚：在同一个数据结构上操作，或处理使用相同的输入数据或产生相同的输出数据</li><li>顺序内聚：同一个功能相关且必须顺序执行</li><li>功能内聚：最强的内聚，所有元素共同完成一个功能</li></ul><hr><p>一个模块的作用范围（或称影响范围）指受该模块内一个判定影响的所有模块的集合。</p><p>一个模块的控制范围指模块本身及其所有下属模块（直接或间接从属于它的模块）的集合。</p><hr><p>按照软件系统中的功能将模块分为四种类型。</p><ol><li>传入模块：去的数据或输入数据，经某些处理在将其输出到其他模块</li><li>传出模块：输出数据，再输出值卡可能进行某些处理，数据看被输出大系统外部，或者其他模块进行进步处理</li><li>变换模块：从上级调用模块得到数据，进行特定的处理，转换成其他形式。再将加工结果返回给调用模块</li><li>协调模式：一般不对数据进行加工，主要是通过调用、协调和管理其他模块来完成特定功能</li></ol><hr><p>数据字典是指对数据的数据项、数据结构、数据流、数据存储、处理逻辑、外部实体等进行定义和描述，其目的是对数据流图中各个元素做出详细说明，使用数据字典为简单的建模项目。其基本条目有：数据流、数据项、数据存储、基本加工等。</p><hr><p>系统结构图（SC）又称为模块结构图，它是软件概要设计阶段的工具，反应系统的功能实现和模块之间的联系与通信，包括各模块之间的层次结构，既反映了系统的总体结构。SC 包括模块、模块之间的调用关系、模块之间的通信和辅助控制符号等 4 个部分。</p><hr><p>MVC 是分层架构风格的一种，采用关注点分离的方针，将可视化页面界面呈现（View）、UI 处理逻辑（Controller）和业务逻辑（Model）三者分离开来，并利用合理的交互方针将它们的依赖降至最低。解耦之后，有利于代码的宠用、提高系统的可维护性，也提高系统的开发效率，但是由于分层之后调用也需要分层调用，使用不能提高系统的运行效率。</p><hr><p>系统设计为系统指定蓝图，软件设计模型关注新系统总体结构、代码设计、处理过程、数据结构和界面模型等。对项目范围的关注在软件设计之前。</p><hr><p>模块的擅入陕存储适中，模块的大小适中以及完善模块功能都可以改进设计质量。而将相似功能的模块合并可能会降低模块内聚和提高模块之间的耦合，因此不能改进设计质量。</p><hr><p>维护工具主要有：版本控制工具、文档分析工具、开发信息库工具、逆向工程工具、再工程工具、配置管理支持工具。</p><hr><p>系统的可维护性评价指标：可理解性、可测试性、可修改性。</p><hr><p>人机交互&quot;黄金三原则&quot;：至于用户控制之下、减少用户记忆负担、保持界面的一致性。</p><hr><p>软件维护的内容一般包括：</p><ul><li>准确性维护：改正开发阶段已发生而系统阶段未发现的错误</li><li>适应性维护：适应技术变化和管理需求变化而进行的修改</li><li>完善性维护：增加一些系统分析和设计阶段没有的规定与性能特征</li><li>预防性维护：主动增加预防性的新功能</li></ul><hr><p>软件测试按阶段划分为单元测试、集成测试和系统测试。</p><p>集成测试：</p><ul><li>自底向上：从系统层次中最底层的构建喀什测试，追捕向上。需要设计驱动模块来辅助测试。</li><li>自顶向下：总系统最顶层的勾践开始最不想下。需要设计桩模式来辅助测试</li><li>三明治：结合自底向上和自顶向下两种策略</li><li>一次性：对所有构建一 i 行测试，然后集成</li></ul><hr><p>白盒测试也称结构测试，根据程序的内部结构和逻辑来设计测试用例，对程序的执行路径和过程进行测试。常用逻辑覆盖和基本路径测试。</p><ul><li>语句覆盖：每个语句最少执行一次</li><li>判定（分支）覆盖：每个判定至少执行一次</li><li>条件覆盖：每个判定的每个条件至少都有一次真/假值</li><li>判定/条件覆盖：每个判定的以及判定的每个条件都有一次真/假值</li><li>条件组合覆盖：每个判定的每个值以及每个判定条件的每个值都出现一次</li><li>路径覆盖：覆盖程序中所有可能的路径</li></ul><hr><p>黑盒测试也称功能测试，在不考虑软件内部结构和特性的情况下来测试软件的外部特性。常用技术有：等价划分、边界值分析、错误猜测和因果图的报告。</p>",52),t=[o];function h(n,u){return i(),p("div",null,t)}const c=l(e,[["render",h],["__file","system-development-and-operation.html.vue"]]);export{c as default};
