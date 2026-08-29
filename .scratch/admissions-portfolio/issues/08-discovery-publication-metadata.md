# 08: 建立可发现性与发布元数据

**What to build:** 让每个公开 Portfolio 页面拥有准确、稳定且可分享的元数据，同时确保 draft 和 review 内容不会通过 sitemap、RSS 或社交预览泄露。

**Blocked by:** 05: 整合证据导航与 Recent Activity.

**Status:** ready-for-agent

- [ ] 每个 published 页面生成唯一标题、摘要、canonical URL、Open Graph 信息、发布日期和可选更新日期。
- [ ] sitemap 只包含公开稳定路由，RSS 只聚合 published Note、Work 和适当的 Recent Activity。
- [ ] draft、review、私有 Generated Article 和测试 fixture 不出现在页面、sitemap、RSS 或公开元数据中。
- [ ] 所有内容封面和信息性视觉具有准确替代文本；纯装饰视觉不产生噪声描述。
- [ ] 404 页面提供返回主要内容的有效路径且不伪装成成功页面。
- [ ] 技术预览继续保持 noindex，直到应用就绪门槛明确解除。
- [ ] 自动测试解析构建产物并验证元数据唯一性、URL、索引排除和 feed 内容。

