# xuiper.com Landing (mpp-web)

本目录基于现有 `mpp-web`（Vite + React）实现 **`www.xuiper.com` 的 landing page**，并保留原来的 Web UI（用于演示 `mpp-core`）：

- 访问 **Landing**：`/#/`
- 访问 **Web UI**：`/#/app`

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

- `public/CNAME` 已设置为 `www.xuiper.com`，适用于 GitHub Pages 自定义域名。
- 如果你使用 Vercel/Cloudflare Pages，也可以保留该文件（不影响构建产物）。