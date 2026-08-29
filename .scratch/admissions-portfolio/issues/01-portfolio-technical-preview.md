# 01: 建立可运行的 Portfolio 技术预览

**What to build:** 建立从源码到浏览器可验证静态产物的最小 Portfolio。读者可以访问 Home、Works、Notes、About 和 404；在真实身份与内容尚未提供时，网站明确表现为不可索引的技术预览，不虚构任何申请证据。

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] 项目使用 Astro、React、Vite、strict TypeScript 和 pnpm，并能通过单一命令启动开发环境和生成生产构建。
- [ ] Home、Works、Notes、About 和 404 均生成静态 HTML，并可通过一致的响应式导航访问。
- [ ] 技术预览使用明确的身份占位状态，不出现虚构姓名、经历、Work、Note 或 Academic Result。
- [ ] 技术预览声明 `noindex`，核心页面在禁用客户端 JavaScript 时仍可阅读和导航。
- [ ] 基础浏览器冒烟测试覆盖所有顶层页面、直接 URL 访问和未知路由。
- [ ] 使用提交的 pnpm lockfile，开发与生产构建均可在全新安装后复现。

