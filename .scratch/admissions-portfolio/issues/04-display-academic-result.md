# 04: 展示经过验证的 Academic Result

**What to build:** 让维护者能够记录真实的 achieved 或 officially predicted Academic Result，并让读者在 About 和首页 Academic Snapshot 中看到清晰、紧凑且无空字段的学术背景。

**Blocked by:** 01: 建立可运行的 Portfolio 技术预览.

**Status:** ready-for-agent

- [ ] Academic Result schema 校验 qualification、可选 subject、result、predicted/achieved 状态、awarding body、examination session、evidence-checked 状态和 effective date。
- [ ] 只有完整且允许公开的 Academic Result 才出现在 About 和 Academic Snapshot。
- [ ] predicted 与 achieved 使用清楚、非误导的文字区分。
- [ ] 不存在的成绩不会生成空白单元格、Pending 分数或占位结果。
- [ ] 当前学习科目与 Academic Result 在数据和展示上保持分离。
- [ ] Academic Snapshot 保持视觉次要，不压过 Featured Work 和 Note。
- [ ] 测试覆盖合法记录、缺失字段、无成绩状态和 predicted/achieved 呈现。

