# 09: 部署受保护的 GitHub Pages 技术预览

**What to build:** 建立可重复的 CI/CD 路径：pull request 接受完整质量检查但不能发布，只有受保护默认分支的成功静态 artifact 可以部署为 GitHub Pages 技术预览。

**Blocked by:** 01: 建立可运行的 Portfolio 技术预览.

**Status:** ready-for-agent

- [ ] pull request 执行 frozen pnpm 安装、类型检查、lint、格式检查、单元测试、内容 schema、链接检查、生产构建和浏览器冒烟测试。
- [ ] 部署使用 GitHub Pages artifact，不向部署分支提交生成文件。
- [ ] 生产部署只允许来自受保护默认分支，并使用最小 `contents: read`、`pages: write` 和 `id-token: write` 权限。
- [ ] pull request 和 fork 运行无法访问生产 secrets，也不能部署 production environment。
- [ ] 第三方 Actions 固定到不可变 commit，工作流设置并发控制且日志不泄露秘密。
- [ ] 未提供 GitHub 用户名或远程仓库时，本地和 CI 构建仍可验证，最终 Pages URL 保持显式待配置。
- [ ] Dependabot 以可审阅 pull request 提交依赖更新。

