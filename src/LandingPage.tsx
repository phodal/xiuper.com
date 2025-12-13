import React from 'react';

const FEATURE_LIST: Array<{ title: string; desc: string }> = [
  { title: '全平台 AI Agent', desc: '一套核心逻辑，多端复用：Desktop、Android、iOS、Web、CLI、IDE 插件。' },
  { title: '多模型支持', desc: '支持 OpenAI / Anthropic / Google / DeepSeek / Ollama / OpenRouter 等。' },
  { title: '可扩展工具生态', desc: '内置 MCP（Model Context Protocol），让工具集成和能力扩展更标准。' },
  { title: '代码理解与变更', desc: 'TreeSitter 多语言解析 + Agent 工具链，面向真实工程工作流。' },
  { title: '跨平台 UI', desc: 'Kotlin Multiplatform + Compose Multiplatform，统一设计与交互。' },
  { title: '双语支持', desc: '中文/英文界面，适配不同团队与使用场景。' },
];

const PLATFORM_LIST: Array<{ name: string; note: string }> = [
  { name: 'IntelliJ IDEA', note: 'Jewel UI / 工具窗口 / Code Review / Remote Agent' },
  { name: 'VSCode', note: 'Xuiper Agent（扩展）' },
  { name: 'Desktop', note: 'macOS / Windows / Linux（Compose Desktop）' },
  { name: 'Android', note: '原生 Android（Compose）' },
  { name: 'iOS', note: 'SwiftUI + Compose（Production Ready）' },
  { name: 'Web', note: '浏览器 Web App（React + mpp-core）' },
  { name: 'CLI', note: 'Node.js TUI（React/Ink）' },
  { name: 'Server', note: 'Ktor（可选）' },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="xu-page">
      <header className="xu-header">
        <div className="xu-container xu-header__inner">
          <a className="xu-brand" href="#/">
            <span className="xu-brand__mark" aria-hidden="true">X</span>
            <span className="xu-brand__text">Xuiper</span>
          </a>
          <nav className="xu-nav">
            <a className="xu-nav__link" href="#features">特性</a>
            <a className="xu-nav__link" href="#platforms">平台与使用</a>
            <a className="xu-nav__link" href="https://github.com/phodal/auto-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="xu-hero">
          <div className="xu-container xu-hero__inner">
            <div className="xu-hero__content">
              <p className="xu-badge">AutoDev 3.0 · Xiuper</p>
              <h1 className="xu-hero__title">
                面向 AI4SDLC 的
                <br />
                全平台开发助理与 Agents（ChatDB, WebEdit, Knowledge Agent, Code Review, Testing(comming soon)）
              </h1>
              <p className="xu-hero__subtitle">
                基于 Kotlin Multiplatform 与 Compose Multiplatform，覆盖 IDE、桌面、移动端、Web、CLI。
                让 AI Agent 真正进入你的工程化工作流。
              </p>
            </div>

            <div className="xu-hero__visual" aria-hidden="true">
              <div className="xu-orbit">
                <div className="xu-orbit__ring" />
                <div className="xu-orbit__ring xu-orbit__ring--2" />
                <div className="xu-orbit__core">
                  <div className="xu-orbit__x">X</div>
                  <div className="xu-orbit__hint">X =&gt; Super open</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platforms" className="xu-section xu-section--alt">
          <div className="xu-container">
            <h2 className="xu-section__title">平台与使用</h2>
            <p className="xu-section__desc">从编辑器到终端，从桌面到移动端，选择适合你的平台快速上手。</p>
            
            <div className="xu-platform-guide">
              <details className="xu-guide-item" open>
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">🔌</span>
                  <span className="xu-guide-title">IntelliJ IDEA 插件</span>
                </summary>
                <div className="xu-guide-content">
                  <p>直接在 JetBrains 插件市场搜索并安装：</p>
                  <ol>
                    <li>打开 IntelliJ IDEA → Settings → Plugins</li>
                    <li>搜索 <strong>"AutoDev Experiment"</strong> 或访问 <a href="https://plugins.jetbrains.com/plugin/29223-autodev-experiment" target="_blank" rel="noreferrer">插件页面</a></li>
                    <li>安装后重启，打开工具窗口即可使用 Xuiper Agent</li>
                  </ol>
                  <p className="xu-guide-note">支持：Jewel UI、工具窗口、Code Review、Remote Agent</p>
                </div>
              </details>

              <details className="xu-guide-item">
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">📝</span>
                  <span className="xu-guide-title">VSCode 扩展</span>
                </summary>
                <div className="xu-guide-content">
                  <p>从 Visual Studio Marketplace 安装：</p>
                  <ol>
                    <li>打开 VSCode 扩展面板（Cmd/Ctrl+Shift+X）</li>
                    <li>搜索 <strong>"AutoDev"</strong> 或访问 <a href="https://marketplace.visualstudio.com/items?itemName=Phodal.autodev" target="_blank" rel="noreferrer">Marketplace 页面</a></li>
                    <li>点击安装，配置后即可使用 Xuiper Agent</li>
                  </ol>
                </div>
              </details>

              <details className="xu-guide-item">
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">💻</span>
                  <span className="xu-guide-title">CLI 终端工具</span>
                </summary>
                <div className="xu-guide-content">
                  <p>通过 npm 全局安装（需要 Node.js ≥20）：</p>
                  <pre><code>npm install -g @autodev/cli</code></pre>
                  <p>安装后，在项目目录下运行：</p>
                  <pre><code>autodev code --task "你的任务描述"</code></pre>
                  <p className="xu-guide-note">支持本地模式与 Server 模式，配置文件位于 <code>~/.autodev/config.yaml</code></p>
                </div>
              </details>

              <details className="xu-guide-item">
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">🌐</span>
                  <span className="xu-guide-title">Web 浏览器</span>
                </summary>
                <div className="xu-guide-content">
                  <p>无需安装，直接打开浏览器访问：</p>
                  <ul>
                    <li>官方 Web UI：<a href="https://web.xiuper.com/" target="_blank" rel="noreferrer">web.xiuper.com</a></li>
                  </ul>
                  <p>在设置中配置 LLM provider 和 API key 后即可使用。</p>
                </div>
              </details>

              <details className="xu-guide-item">
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">🖥️</span>
                  <span className="xu-guide-title">Desktop 桌面应用</span>
                </summary>
                <div className="xu-guide-content">
                  <p>从 GitHub Releases 下载对应平台的安装包：</p>
                  <ul>
                    <li><strong>macOS</strong>：下载 <code>.dmg</code> 文件并安装</li>
                    <li><strong>Windows</strong>：下载 <code>.msi</code> 文件并安装</li>
                    <li><strong>Linux</strong>：下载 <code>.deb</code> 文件或使用 AppImage</li>
                  </ul>
                  <p>
                    <a href="https://github.com/phodal/auto-dev/releases" target="_blank" rel="noreferrer" className="xu-link-primary">
                      前往 Releases 页面下载 →
                    </a>
                  </p>
                  <p className="xu-guide-note">基于 Compose Multiplatform，提供原生性能和跨平台一致体验。</p>
                </div>
              </details>

              <details className="xu-guide-item">
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">📱</span>
                  <span className="xu-guide-title">Android 应用</span>
                </summary>
                <div className="xu-guide-content">
                  <p>从 GitHub Releases 下载 APK 并安装：</p>
                  <ol>
                    <li>访问 <a href="https://github.com/phodal/auto-dev/releases" target="_blank" rel="noreferrer">Releases 页面</a></li>
                    <li>下载最新的 <code>.apk</code> 文件</li>
                    <li>在 Android 设备上安装（需允许未知来源）</li>
                  </ol>
                  <p className="xu-guide-note">原生 Android Compose UI，支持完整 Agent 功能。</p>
                </div>
              </details>

              <details className="xu-guide-item">
                <summary className="xu-guide-summary">
                  <span className="xu-guide-icon">🍎</span>
                  <span className="xu-guide-title">iOS 应用（Production Ready）</span>
                </summary>
                <div className="xu-guide-content">
                  <p>iOS 版本目前处于 Production Ready 状态。</p>
                  <p>从 <a href="https://github.com/phodal/auto-dev/releases" target="_blank" rel="noreferrer">Releases 页面</a> 获取最新构建说明，或联系开发团队获取 TestFlight 邀请。</p>
                  <p className="xu-guide-note">基于 SwiftUI + Compose Multiplatform。</p>
                </div>
              </details>
            </div>

            <div className="xu-callout" style={{ marginTop: '3rem' }}>
              <div className="xu-callout__t">💡 配置多模型</div>
              <div className="xu-callout__d">
                <p>所有平台均支持多 LLM provider 配置。参考 <code>mpp-ui/config.yaml.example</code>：</p>
                <ul>
                  <li>支持 OpenAI、Anthropic、Google Gemini、DeepSeek、Ollama、OpenRouter 等</li>
                  <li>可配置多个 config 并通过 <code>active</code> 字段快速切换</li>
                  <li>本地模型（Ollama）无需 API key</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="xu-section">
          <div className="xu-container">
            <h2 className="xu-section__title">关键特性</h2>
            <p className="xu-section__desc">
              Landing 文案基于本仓库 `mpp-ui`/`mpp-web` 的 README 及实现：多端一致、可扩展、面向真实工程。
            </p>
            <div className="xu-grid">
              {FEATURE_LIST.map((f) => (
                <div key={f.title} className="xu-card">
                  <div className="xu-card__title">{f.title}</div>
                  <div className="xu-card__desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="xu-footer">
        <div className="xu-container xu-footer__inner">
          <div className="xu-footer__left">
            <div className="xu-footer__brand">Xuiper</div>
            <div className="xu-footer__meta">AutoDev 3.0 · MPL 2.0</div>
          </div>
          <div className="xu-footer__right">
            <a className="xu-footer__link" href="https://github.com/phodal/xuiper.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="xu-footer__link" href="https://web.xiuper.com/" target="_blank" rel="noreferrer">
              Web
            </a>
            <a className="xu-footer__link" href="#/app">Web UI</a>
          </div>
        </div>
      </footer>
    </div>
  );
};


