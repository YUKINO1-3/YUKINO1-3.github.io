# 10: 通过 Issue 更新 Academic Result

**What to build:** 让仓库所有者通过专用 Issue Form 提交 Academic Result；系统验证身份和字段，确定性生成数据变更与 pull request，并在人工合并前保持生产站点不变。

**Blocked by:** 04: 展示经过验证的 Academic Result; 09: 部署受保护的 GitHub Pages 技术预览.

**Status:** ready-for-agent

- [ ] Issue Form 收集 qualification、subject、result、predicted/achieved、awarding body、examination session、evidence-checked 和 effective date。
- [ ] 只有仓库所有者或明确批准的 actor 可以触发有写权限的工作流。
- [ ] 有效请求确定性生成单一结构化变更和 pull request，完全不调用生成式 AI。
- [ ] 无效、未授权或不完整请求不会修改内容，并返回可操作反馈。
- [ ] 重复 webhook 或重新运行保持幂等，不创建重复 Academic Result 或竞争 pull request。
- [ ] 工作流只获得完成任务所需的最小权限，Issue 文本始终被视为不可信输入。
- [ ] 集成测试用代表性 Issue payload 验证授权、schema、幂等、PR-only 和无 AI 调用行为。

