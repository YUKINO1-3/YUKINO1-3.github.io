# 03: 发布第一个 Work 与 Case Study

**What to build:** 让维护者能够添加一个完成或可充分演示的 Work，并让读者从 Works 索引进入包含完整证据链的 Case Study，而不是看到项目卡片式自我宣传或未来计划。

**Blocked by:** 01: 建立可运行的 Portfolio 技术预览.

**Status:** ready-for-agent

- [ ] Work schema 要求稳定 slug、摘要、生命周期、主 Subject、受控 Medium/Capability 和申请者贡献说明。
- [ ] published Work 出现在 Works 索引并生成包含问题、假设、过程、关键决策、结果、验证和局限的 Case Study。
- [ ] Capability 只在至少一个 published Work 或 Note 提供证据时呈现，并链接回该证据。
- [ ] Planned Work Category、空分类和 coming-soon 卡片不会出现在生产站点。
- [ ] Case Study 可以引用受控交互组件标识，但不能执行内容作者提供的任意组件代码。
- [ ] draft 与 review Work 不出现在生产页面或公开路由中。
- [ ] 自动化测试覆盖合法 Work、无效 schema、无证据 Capability 和空分类隐藏行为。

