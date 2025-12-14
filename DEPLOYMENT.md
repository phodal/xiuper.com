# AutoDev Xiuper 官网部署说明

> **One Codebase. Full SDLC. Every Device.**

## 已完成

✅ Landing Page 源码已推送到 https://github.com/phodal/xiuper.com  
✅ GitHub Actions 自动构建成功  
✅ 静态站点已部署到 GitHub Pages
✅ Xiuper Edition 品牌升级完成

## 配置自定义域名 www.xiuper.com

### 1. 配置 DNS（在你的域名提供商控制台）

添加以下 DNS 记录：

```
类型: CNAME
名称: www
值: phodal.github.io
TTL: 3600（或默认值）
```

如果你还想让根域名 `xiuper.com` 也能访问，添加 A 记录：

```
类型: A
名称: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
TTL: 3600
```

### 2. 在 GitHub 仓库启用 Pages

1. 访问 https://github.com/phodal/xiuper.com/settings/pages
2. **Source** 选择：`GitHub Actions`（已自动设置）
3. **Custom domain** 输入：`www.xiuper.com`
4. 点击 **Save**
5. 等待 DNS 检查通过（可能需要几分钟到几小时）
6. 勾选 **Enforce HTTPS**（DNS 验证通过后）

### 3. 验证部署

DNS 生效后（通常 10 分钟到 48 小时），访问：

- https://www.xiuper.com/
- https://phodal.github.io/xiuper.com/

两个地址都应该能看到 **AutoDev Xiuper** Landing Page。

## 站点功能

### Landing Page（默认 `/` 或 `/#/`）
- **核心 Slogan**: One Codebase. Full SDLC. Every Device.
- 展示 **AutoDev Xiuper** 全平台 AI Agent 生态
- **7 大 SDLC Agent**: Knowledge、Coding、Review、Testing、ChatDB、WebEdit、Ops
- **8 大平台支持**: IDEA、VSCode、CLI、Web、Desktop、Android、iOS、Server
- KMP 架构说明与技术亮点

### Web UI 跳转（`/#/app`）
- 自动重定向到 https://web.xiuper.com/
- 保留完整 Web UI 功能（基于 mpp-core）

## 后续更新

要更新站点内容，只需：

```bash
cd /path/to/xiuper.com
# 修改 src/ 下的文件
git add .
git commit -m "Update landing content"
git push origin main
```

GitHub Actions 会自动重新构建并部署。

## 技术栈

- **框架**: Vite + React + TypeScript
- **部署**: GitHub Pages + GitHub Actions
- **域名**: www.xiuper.com（通过 CNAME）
- **CDN**: GitHub Pages 自动提供全球 CDN

## 版本信息

**当前版本**: AutoDev Xiuper Edition (v3.0.0-xiuper)

**版本特性**:
- ✅ 品牌升级：AutoDev → AutoDev Xiuper
- ✅ 核心 Slogan：One Codebase. Full SDLC. Every Device.
- ✅ 完整的 8 平台支持（一个代码库）
- ✅ 7 大 SDLC Agent 覆盖全生命周期
- ✅ Kotlin Multiplatform 架构展示

## 相关链接

- 官网: https://www.xiuper.com/
- 源码仓库: https://github.com/phodal/xiuper.com
- 主项目: https://github.com/phodal/auto-dev
- Web UI: https://web.xiuper.com/
- CLI 安装: `npm install -g @autodev/cli`
- VS Code 插件: https://marketplace.visualstudio.com/items?itemName=Phodal.autodev
- IDEA 插件: https://plugins.jetbrains.com/plugin/29223-autodev-experiment


