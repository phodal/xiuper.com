# AutoDev Xiuper Landing Page

> **One Platform. All Phases. Every Device.**  
> 统一平台 · 全开发阶段 · 跨全设备

本仓库是 **AutoDev Xiuper** 的官方网站源码，基于 Vite + React + TypeScript 构建。

**AutoDev Xiuper** 是 AI 原生的全生命周期开发平台，基于 Kotlin Multiplatform 架构，覆盖 SDLC 7 大阶段（Requirements → Development → Review → Testing → Data → Deployment → Operations），支持 8 大平台（IDEA、VSCode、CLI、Web、Desktop、Android、iOS、Server）。

## 访问地址

- **Landing Page**：`/#/` 或 https://www.xiuper.com/
- **Web UI**：`/#/app` 或 https://web.xiuper.com/

## 本地开发

```bash
cd mpp-web
npm run dev
```

## 构建

> `npm run build` 会先构建 Kotlin/JS 的 `mpp-core` 产物，再执行 Vite 构建。

```bash
cd mpp-web
npm run build
```

## 部署到自定义域名

- `public/CNAME` 已设置为 `www.xiuper.com`，适用于 GitHub Pages 自定义域名。
- 如果你使用 Vercel/Cloudflare Pages，也可以保留该文件（不影响构建产物）。

## 版本说明

当前版本：**AutoDev Xiuper Edition** (v3.0.0-xiuper)

Xiuper（音：修朴）是 AutoDev 的代号版本，灵感来自 Windows Vista。Xiuper 标志着 AutoDev 进入全平台时代：
- ✅ 基于 Kotlin Multiplatform 重构
- ✅ 统一 8 大平台的核心逻辑
- ✅ 覆盖 SDLC 全生命周期（7 大阶段 Agent）
- ✅ 品牌升级：One Platform. All Phases. Every Device.