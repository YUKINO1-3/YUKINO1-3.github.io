# 02: 发布第一篇受控 Note

**What to build:** 让维护者能够添加一篇结构化 Markdown Note，并获得带稳定地址、数学排版、分类和元数据的静态页面；未发布内容在任何生产表面都不可见。

**Blocked by:** 01: 建立可运行的 Portfolio 技术预览.

**Status:** ready-for-agent

- [ ] Note schema 校验标题、摘要、稳定 slug、日期、生命周期、主 Subject，以及受控 Medium 和 Capability。
- [ ] 合法 published Note 出现在 Notes 索引并生成可直接访问的静态详情页。
- [ ] Note 正文支持安全 Markdown、代码块和 KaTeX 数学表达，同时拒绝任意可执行 MDX 或 React 注入。
- [ ] draft 与 review Note 不出现在生产页面、导航或构建出的公开地址中。
- [ ] 未知标签、缺失字段、重复 slug 和非法嵌入会让构建以可操作错误失败。
- [ ] 修改标题不会改变已明确的稳定 slug。
- [ ] 测试从结构化内容输入到浏览器输出验证行为，而非内部组件结构。

