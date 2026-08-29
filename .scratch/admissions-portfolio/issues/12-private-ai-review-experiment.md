# 12: 提供隔离的 AI 私有审阅实验

**What to build:** 在 Note 工作流后提供可选、供应商无关的 AI 实验。它可以从第一篇 Source Brief 起生成私人审阅材料，但自由生成或实质重写的内容只能作为 Generated Article artifact，不能成为公开 Note 或申请证据。

**Blocked by:** 11: 通过 Issue 分类并提交 Draft Note.

**Status:** ready-for-agent

- [ ] AI 能力通过供应商无关接口调用，具体供应商、模型、预算和凭据均为外部配置。
- [ ] 未配置凭据时，可选 AI 任务以清晰状态停止，但站点构建、分类和确定性工作流继续成功。
- [ ] 启用后支持单次和周期用量限制，超过限制不继续调用且不产生部分公开内容。
- [ ] 模型新增或纠正的主张在审阅材料中列出修改前内容、修改后内容和依据。
- [ ] 自由生成或实质重写的输出被建模为 Generated Article，只存在于权限受控的 CI artifact。
- [ ] Generated Article 无法进入 Notes、Featured Work、Capability、Recent Activity、sitemap、RSS 或生产 artifact。
- [ ] 提示、模型输出和 Issue 输入均作为不可信数据处理，不能执行代码或泄露 secrets。
- [ ] 合同测试验证供应商替换、缺失配置、限额、日志脱敏和公开内容隔离。
