import React from 'react';

const FEATURE_LIST: Array<{ title: string; desc: string }> = [
  { title: '全平台 AI Agent', desc: '一套核心逻辑，多端复用：Desktop、Android、iOS、Web、CLI、IDE 插件。' },
  { title: '多模型支持', desc: '支持 OpenAI / Anthropic / Google / DeepSeek / Ollama / OpenRouter 等。' },
  { title: '可扩展工具生态', desc: '内置 MCP（Model Context Protocol），让工具集成和能力扩展更标准。' },
  { title: '代码理解与变更', desc: 'TreeSitter 多语言解析 + Agent 工具链，面向真实工程工作流。' },
  { title: '跨平台 UI', desc: 'Kotlin Multiplatform + Compose Multiplatform，统一设计与交互。' },
  { title: '双语支持', desc: '中文/英文界面，适配不同团队与使用场景。' },
];

const PLATFORM_LIST: Array<{ name: string; note: string; icon: string; link?: string; usage?: string }> = [
  { 
    name: 'IntelliJ IDEA', 
    note: 'Jewel UI / 工具窗口 / Code Review / Remote Agent',
    icon: '🔌',
    link: 'https://plugins.jetbrains.com/plugin/29223-autodev-experiment',
    usage: '插件市场搜索 "AutoDev Experiment"'
  },
  { 
    name: 'VSCode', 
    note: 'Xuiper Agent（扩展）',
    icon: '📝',
    link: 'https://marketplace.visualstudio.com/items?itemName=Phodal.autodev',
    usage: 'Marketplace 搜索 "AutoDev"'
  },
  { 
    name: 'CLI', 
    note: 'Node.js TUI（React/Ink）',
    icon: '💻',
    usage: 'npm install -g @autodev/cli'
  },
  { 
    name: 'Web', 
    note: '浏览器 Web App',
    icon: '🌐',
    link: 'https://web.xiuper.com/',
    usage: '无需安装，直接访问'
  },
  { 
    name: 'Desktop', 
    note: 'macOS / Windows / Linux',
    icon: '🖥️',
    link: 'https://github.com/phodal/auto-dev/releases',
    usage: '下载对应平台安装包'
  },
  { 
    name: 'Android', 
    note: '原生 Android（Compose）',
    icon: '📱',
    link: 'https://github.com/phodal/auto-dev/releases',
    usage: '下载 APK 并安装'
  },
  { 
    name: 'iOS', 
    note: 'SwiftUI + Compose',
    icon: '🍎',
    link: 'https://github.com/phodal/auto-dev/releases',
    usage: 'Production Ready'
  },
  { 
    name: 'Server', 
    note: 'Ktor（JVM）',
    icon: '⚙️',
    usage: '可选部署'
  },
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
                全平台开发助理与 AI Agents
              </h1>
              <p className="xu-hero__subtitle">
                基于 Kotlin Multiplatform 与 Compose Multiplatform，覆盖 IDE、桌面、移动端、Web、CLI。
                让 AI Agent 真正进入你的工程化工作流。
              </p>
              
              <div className="xu-sdlc-pipeline">
                <div className="xu-pipeline-item">
                  <div className="xu-pipeline-icon">📚</div>
                  <div className="xu-pipeline-label">Knowledge Agent</div>
                  <div className="xu-pipeline-sub">需求理解</div>
                </div>
                <div className="xu-pipeline-arrow">→</div>
                <div className="xu-pipeline-item">
                  <div className="xu-pipeline-icon">💻</div>
                  <div className="xu-pipeline-label">ChatDB / WebEdit</div>
                  <div className="xu-pipeline-sub">智能编码</div>
                </div>
                <div className="xu-pipeline-arrow">→</div>
                <div className="xu-pipeline-item">
                  <div className="xu-pipeline-icon">🔍</div>
                  <div className="xu-pipeline-label">Code Review</div>
                  <div className="xu-pipeline-sub">质量保障</div>
                </div>
                <div className="xu-pipeline-arrow">→</div>
                <div className="xu-pipeline-item xu-pipeline-item--coming">
                  <div className="xu-pipeline-icon">🧪</div>
                  <div className="xu-pipeline-label">Testing</div>
                  <div className="xu-pipeline-sub">Coming Soon</div>
                </div>
              </div>
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
            <h2 className="xu-section__title">全平台覆盖</h2>
            <p className="xu-section__desc">从编辑器到终端，从桌面到移动端，一套核心能力多端复用。</p>
            <div className="xu-grid xu-grid--platforms">
              {PLATFORM_LIST.map((p) => (
                <div key={p.name} className="xu-card xu-card--platform">
                  <div className="xu-platform-icon">{p.icon}</div>
                  <div className="xu-card__title">{p.name}</div>
                  <div className="xu-card__desc">{p.note}</div>
                  {p.usage && (
                    <div className="xu-platform-usage">{p.usage}</div>
                  )}
                  {p.link && (
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="xu-platform-link"
                    >
                      查看详情 →
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="xu-callout" style={{ marginTop: '3rem' }}>
              <div className="xu-callout__t">💡 配置多模型</div>
              <div className="xu-callout__d">
                <p>所有平台均支持多 LLM provider 配置：OpenAI、Anthropic、Google Gemini、DeepSeek、Ollama、OpenRouter 等。</p>
                <p style={{ marginTop: '0.5rem' }}>可配置多个 config 并通过 <code>active</code> 字段快速切换，本地模型（Ollama）无需 API key。</p>
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


