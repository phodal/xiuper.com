# Xuiper.com 部署说明

## 已完成

✅ Landing Page 源码已推送到 https://github.com/phodal/xuiper.com  
✅ GitHub Actions 自动构建成功  
✅ 静态站点已部署到 GitHub Pages

## 配置自定义域名 www.xuiper.com

### 1. 配置 DNS（在你的域名提供商控制台）

添加以下 DNS 记录：

```
类型: CNAME
名称: www
值: phodal.github.io
TTL: 3600（或默认值）
```

如果你还想让根域名 `xuiper.com` 也能访问，添加 A 记录：

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

1. 访问 https://github.com/phodal/xuiper.com/settings/pages
2. **Source** 选择：`GitHub Actions`（已自动设置）
3. **Custom domain** 输入：`www.xuiper.com`
4. 点击 **Save**
5. 等待 DNS 检查通过（可能需要几分钟到几小时）
6. 勾选 **Enforce HTTPS**（DNS 验证通过后）

### 3. 验证部署

DNS 生效后（通常 10 分钟到 48 小时），访问：

- https://www.xuiper.com/
- https://phodal.github.io/xuiper.com/

两个地址都应该能看到 Xuiper Landing Page。

## 站点功能

### Landing Page（默认 `/` 或 `/#/`）
- 展示 Xuiper 全平台 AI Agent 介绍
- 各平台详细使用指南（IDEA/VSCode/CLI/Web/Desktop/Android/iOS）
- 关键特性与平台覆盖说明

### Web UI 跳转（`/#/app`）
- 自动重定向到 https://web.xiuper.com/
- 保留完整 Web UI 功能（需要 mpp-core）

## 后续更新

要更新站点内容，只需：

```bash
cd /path/to/xuiper.com
# 修改 src/ 下的文件
git add .
git commit -m "Update landing content"
git push origin main
```

GitHub Actions 会自动重新构建并部署。

## 技术栈

- **框架**: Vite + React + TypeScript
- **部署**: GitHub Pages + GitHub Actions
- **域名**: www.xuiper.com（通过 CNAME）
- **CDN**: GitHub Pages 自动提供全球 CDN

## 相关链接

- 源码仓库: https://github.com/phodal/xuiper.com
- 主项目（xiuper）: https://github.com/phodal/auto-dev
- Web UI: https://web.xiuper.com/
- CLI: `npm install -g @autodev/cli`

