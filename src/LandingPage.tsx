import React from 'react';

// SDLC Agents - AI Agents mapped to Software Development Lifecycle phases
const SDLC_AGENTS: Array<{
  name: string;
  displayName: string;
  sdlcPhase: string;
  desc: string;
  capabilities: string[];
  status: 'stable' | 'beta' | 'coming';
}> = [
  {
    name: 'KnowledgeAgent',
    displayName: 'Knowledge',
    sdlcPhase: 'Requirements',
    desc: '需求理解与知识构建，AI 原生的文档阅读和分析能力。',
    capabilities: ['Doc Reader', 'RAG', 'Embedding', 'Context Build'],
    status: 'stable'
  },
  {
    name: 'CodingAgent',
    displayName: 'Coding',
    sdlcPhase: 'Development',
    desc: '自主编码代理，具备完整的文件系统、Shell 和工具访问能力。',
    capabilities: ['File R/W', 'Shell', 'MCP Tools', 'Error Recovery'],
    status: 'stable'
  },
  {
    name: 'CodeReviewAgent',
    displayName: 'Review',
    sdlcPhase: 'Code Review',
    desc: '专业代码审查，分析代码质量、安全性、性能和最佳实践。',
    capabilities: ['Git Integration', 'Linter', 'Auto Fix', 'Issue Tracking'],
    status: 'stable'
  },
  {
    name: 'ChatDBAgent',
    displayName: 'ChatDB',
    sdlcPhase: 'Testing & Data',
    desc: '数据库对话代理，支持 Text-to-SQL，自然语言查询数据。',
    capabilities: ['Multi-DB', 'Text-to-SQL', 'Schema Analysis', 'Query Explain'],
    status: 'stable'
  },
  {
    name: 'WebEditAgent',
    displayName: 'WebEdit',
    sdlcPhase: 'Deployment',
    desc: '网页编辑代理，浏览网页、选择 DOM 元素、与页面交互。',
    capabilities: ['DOM Selection', 'Element Tags', 'LLM Analysis', 'Source Mapping'],
    status: 'beta'
  },
];

// Platform List - All supported platforms
const PLATFORM_LIST: Array<{ name: string; note: string; link?: string; usage?: string }> = [
  {
    name: 'IntelliJ IDEA',
    note: 'Jewel UI / Code Review / Remote Agent',
    link: 'https://plugins.jetbrains.com/plugin/29223-autodev-experiment',
    usage: 'AutoDev Experiment'
  },
  {
    name: 'VSCode',
    note: 'Xiuper Agent Extension',
    link: 'https://marketplace.visualstudio.com/items?itemName=Phodal.autodev',
    usage: 'AutoDev'
  },
  {
    name: 'CLI',
    note: 'Node.js TUI (React/Ink)',
    usage: 'npm i -g @autodev/cli'
  },
  {
    name: 'Web',
    note: 'Browser Web App',
    link: 'https://web.xiuper.com/',
    usage: 'web.xiuper.com'
  },
  {
    name: 'Desktop',
    note: 'macOS / Windows / Linux',
    link: 'https://github.com/phodal/auto-dev/releases',
    usage: 'Compose Desktop'
  },
  {
    name: 'Android',
    note: 'Native Android',
    link: 'https://github.com/phodal/auto-dev/releases',
    usage: 'Compose Android'
  },
  {
    name: 'iOS',
    note: 'SwiftUI + KMP',
    link: 'https://github.com/phodal/auto-dev/releases',
    usage: 'Production Ready'
  },
  {
    name: 'Server',
    note: 'Ktor (JVM)',
    usage: 'Self-hosted'
  },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="xu-page">
      <header className="xu-header">
        <div className="xu-container xu-header__inner">
          <a className="xu-brand" href="#/">
            <span className="xu-brand__mark" aria-hidden="true">X</span>
            <span className="xu-brand__text">Xiuper</span>
          </a>
          <nav className="xu-nav">
            <a className="xu-nav__link" href="#sdlc">SDLC</a>
            <a className="xu-nav__link" href="#platforms">Platforms</a>
            <a className="xu-nav__link" href="https://github.com/phodal/auto-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="xu-hero">
          <div className="xu-container xu-hero__inner">
            <div className="xu-hero__content">
              <p className="xu-badge">AutoDev 3.0 - Xiuper</p>
              <h1 className="xu-hero__title">
                AI-Native Development
                <br />
                <span className="xu-hero__highlight">Agent Framework</span>
              </h1>
              <p className="xu-hero__subtitle">
                Kotlin Multiplatform 驱动的全平台 AI Agent 框架。
                Agent as Tool，SubAgent 架构，DevIns 声明式语言。
              </p>
              <div className="xu-hero__actions">
                <a href="#sdlc" className="xu-btn xu-btn--primary">Explore Agents</a>
                <a href="https://github.com/phodal/auto-dev" target="_blank" rel="noreferrer" className="xu-btn xu-btn--secondary">GitHub</a>
              </div>
            </div>

            <div className="xu-hero__visual" aria-hidden="true">
              <div className="xu-orbit">
                <div className="xu-orbit__ring" />
                <div className="xu-orbit__ring xu-orbit__ring--2" />
                <div className="xu-orbit__core">
                  <div className="xu-orbit__x">X</div>
                  <div className="xu-orbit__hint">Xiuper = Super Open</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDLC Agents Section */}
        <section id="sdlc" className="xu-section">
          <div className="xu-container">
            <h2 className="xu-section__title">让 AI 真正融入软件开发生命周期</h2>
            <p className="xu-section__desc">
              专业化的 AI Agent 覆盖 SDLC 各阶段，每个 Agent 都可作为 Tool 被其他 Agent 调用。
            </p>

            {/* SDLC Flow */}
            <div className="xu-sdlc-flow">
              {SDLC_AGENTS.map((agent, index) => (
                <React.Fragment key={agent.name}>
                  <div className={`xu-sdlc-card xu-sdlc-card--${agent.status}`}>
                    <div className="xu-sdlc-phase">{agent.sdlcPhase}</div>
                    <div className="xu-sdlc-header">
                      <div className="xu-sdlc-name">{agent.displayName}</div>
                      <span className={`xu-agent-status xu-agent-status--${agent.status}`}>
                        {agent.status}
                      </span>
                    </div>
                    <div className="xu-sdlc-desc">{agent.desc}</div>
                    <div className="xu-agent-caps">
                      {agent.capabilities.map((cap) => (
                        <span key={cap} className="xu-agent-cap">{cap}</span>
                      ))}
                    </div>
                  </div>
                  {index < SDLC_AGENTS.length - 1 && (
                    <div className="xu-sdlc-arrow" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="xu-section xu-section--alt">
          <div className="xu-container">
            <h2 className="xu-section__title">全平台覆盖</h2>
            <p className="xu-section__desc">
              Kotlin Multiplatform 驱动，一套核心逻辑，8 个平台复用。
            </p>
            <div className="xu-grid xu-grid--platforms">
              {PLATFORM_LIST.map((p) => (
                <div key={p.name} className="xu-card xu-card--platform">
                  <div className="xu-card__title">{p.name}</div>
                  <div className="xu-card__desc">{p.note}</div>
                  {p.usage && (
                    <div className="xu-platform-usage">{p.usage}</div>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="xu-platform-link">
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="xu-footer">
        <div className="xu-container xu-footer__inner">
          <div className="xu-footer__left">
            <div className="xu-footer__brand">Xiuper</div>
            <div className="xu-footer__meta">AutoDev 3.0 - MPL 2.0</div>
          </div>
          <div className="xu-footer__right">
            <a className="xu-footer__link" href="https://github.com/phodal/auto-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="xu-footer__link" href="https://web.xiuper.com/" target="_blank" rel="noreferrer">
              Web App
            </a>
            <a className="xu-footer__link" href="#/app">Try Now</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
