# 11: 通过 Issue 分类并提交 Draft Note

**What to build:** 让仓库所有者通过专用 Issue Form 提交本人 Source Brief；系统验证最低作者输入，从受控词汇建议分类，并创建可人工审阅的 Draft Note pull request，绝不直接发布。

**Blocked by:** 02: 发布第一篇受控 Note; 09: 部署受保护的 GitHub Pages 技术预览.

**Status:** ready-for-agent

- [ ] Issue Form 要求作者问题、本人初步解释、例子或推导、不确定点、请求协助部分和允许来源范围。
- [ ] 缺少最低本人内容的 Source Brief 被拒绝，并说明需要补充什么。
- [ ] 分类只使用受控 Subject、Medium 和 Capability；系统不能自行创造标签。
- [ ] 分类不确定时使用明确待确认状态，而不是静默选择。
- [ ] 有效请求生成 Draft Note 和单一 pull request；生产内容在人工合并前不变。
- [ ] 只有仓库所有者或明确批准 actor 能触发有写权限的处理，重复事件保持幂等。
- [ ] 测试覆盖完整与不完整 Source Brief、未知主题、低置信度、未授权 actor 和 PR-only 行为。

