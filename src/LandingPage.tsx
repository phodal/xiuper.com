import React from 'react';

// Agent Types - Core AI Agents in the system
const AGENT_LIST: Array<{
  name: string;
  displayName: string;
  desc: string;
  capabilities: string[];
  status: 'stable' | 'beta' | 'coming';
}> = [
  {
    name: 'CodingAgent',
    displayName: 'Coding Agent',
    desc: '自主编码代理，具备完整的文件系统、Shell 和工具访问能力，可自主完成开发任务。',
    capabilities: ['File R/W', 'Shell', 'MCP Tools', 'Error Recovery'],
    status: 'stable'
  },
  {
    name: 'CodeReviewAgent',
    displayName: 'Code Review',
    desc: '专业代码审查代理，分析代码质量、安全性、性能和最佳实践，支持自动修复。',
    capabilities: ['Git Integration', 'Linter', 'Auto Fix', 'Issue Tracking'],
    status: 'stable'
  },
  {
    name: 'ChatDBAgent',
    displayName: 'ChatDB',
    desc: '数据库对话代理，支持 Text-to-SQL，可连接多个数据库进行自然语言查询。',
    capabilities: ['Multi-DB', 'Text-to-SQL', 'Schema Analysis', 'Query Explain'],
    status: 'stable'
  },
  {
    name: 'WebEditAgent',
    displayName: 'WebEdit',
    desc: '网页编辑代理，浏览网页、选择 DOM 元素、与页面交互，支持源码映射。',
    capabilities: ['DOM Selection', 'Element Tags', 'LLM Analysis', 'Source Mapping'],
    status: 'beta'
  },
  {
    name: 'KnowledgeAgent',
    displayName: 'Knowledge',
    desc: '知识阅读代理，AI 原生的文档阅读和分析能力，支持多种文档格式。',
    capabilities: ['Doc Reader', 'RAG', 'Embedding', 'Context Build'],
    status: 'stable'
  },
];

// Lifecycle Phases - DevIns Language Lifecycle
const LIFECYCLE_PHASES: Array<{
  phase: string;
  name: string;
  desc: string;
  example: string;
}> = [
  {
    phase: 'when',
    name: 'Trigger',
    desc: '定义触发条件，决定何时激活 Agent',
    example: 'when: { $selection.length > 0 }'
  },
  {
    phase: 'beforeStreaming',
    name: 'Prepare',
    desc: '流式处理前的准备工作',
    example: 'beforeStreaming: { caching | splitting | embedding }'
  },
  {
    phase: 'onStreaming',
    name: 'Process',
    desc: '流式处理中的中间件',
    example: 'onStreaming: { logging() | redacting() }'
  },
  {
    phase: 'onStreamingEnd',
    name: 'Complete',
    desc: '流式结束时的后处理',
    example: 'onStreamingEnd: { parseCode | saveFile }'
  },
  {
    phase: 'afterStreaming',
    name: 'Route',
    desc: '基于条件的任务路由',
    example: 'afterStreaming: { case "success" { done } }'
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

// Core Features
const FEATURE_LIST: Array<{ title: string; desc: string }> = [
  { title: 'Agent as Tool', desc: 'Agent 本身就是 Tool，可被其他 Agent 调用，实现灵活的任务编排。' },
  { title: 'SubAgent Architecture', desc: 'ErrorRecovery、Analysis、Chart 等 SubAgent 可被 MainAgent 动态调用。' },
  { title: 'MCP Protocol', desc: '内置 Model Context Protocol，标准化工具集成和能力扩展。' },
  { title: 'DevIns Language', desc: '声明式 AI 指令语言，定义 Agent 行为、生命周期和任务路由。' },
  { title: 'TreeSitter Parsing', desc: '多语言代码解析，精准理解代码结构和语义。' },
  { title: 'Multi-LLM Support', desc: 'OpenAI / Anthropic / Google / DeepSeek / Ollama / OpenRouter' },
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
            <a className="xu-nav__link" href="#agents">Agents</a>
            <a className="xu-nav__link" href="#lifecycle">Lifecycle</a>
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
                Agent as Tool，SubAgent 架构，DevIns 声明式语言，
                让 AI 真正融入软件开发生命周期。
              </p>

              {/* Architecture Overview */}
              <div className="xu-arch-diagram">
                <div className="xu-arch-layer xu-arch-layer--main">
                  <div className="xu-arch-label">MainAgent</div>
                  <div className="xu-arch-items">
                    <span className="xu-arch-item">CodingAgent</span>
                    <span className="xu-arch-item">ReviewAgent</span>
                    <span className="xu-arch-item">ChatDBAgent</span>
                  </div>
                </div>
                <div className="xu-arch-connector">
                  <span className="xu-arch-arrow">calls</span>
                </div>
                <div className="xu-arch-layer xu-arch-layer--sub">
                  <div className="xu-arch-label">SubAgent / Tools</div>
                  <div className="xu-arch-items">
                    <span className="xu-arch-item xu-arch-item--sub">ErrorRecovery</span>
                    <span className="xu-arch-item xu-arch-item--sub">Analysis</span>
                    <span className="xu-arch-item xu-arch-item--sub">Chart</span>
                    <span className="xu-arch-item xu-arch-item--sub">MCP</span>
                  </div>
                </div>
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

        {/* Agents Section */}
        <section id="agents" className="xu-section">
          <div className="xu-container">
            <h2 className="xu-section__title">AI Agents</h2>
            <p className="xu-section__desc">
              专业化的 AI Agent 覆盖软件开发全生命周期，每个 Agent 都可作为 Tool 被其他 Agent 调用。
            </p>
            <div className="xu-grid xu-grid--agents">
              {AGENT_LIST.map((agent) => (
                <div key={agent.name} className={`xu-card xu-card--agent xu-card--${agent.status}`}>
                  <div className="xu-agent-header">
                    <div className="xu-agent-name">{agent.displayName}</div>
                    <span className={`xu-agent-status xu-agent-status--${agent.status}`}>
                      {agent.status}
                    </span>
                  </div>
                  <div className="xu-card__desc">{agent.desc}</div>
                  <div className="xu-agent-caps">
                    {agent.capabilities.map((cap) => (
                      <span key={cap} className="xu-agent-cap">{cap}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifecycle Section */}
        <section id="lifecycle" className="xu-section xu-section--alt">
          <div className="xu-container">
            <h2 className="xu-section__title">Agent Lifecycle</h2>
            <p className="xu-section__desc">
              DevIns 语言定义的 Agent 生命周期，支持触发条件、流式处理、后处理和条件路由。
            </p>

            <div className="xu-lifecycle">
              {LIFECYCLE_PHASES.map((phase, index) => (
                <React.Fragment key={phase.phase}>
                  <div className="xu-lifecycle-phase">
                    <div className="xu-lifecycle-header">
                      <span className="xu-lifecycle-step">{index + 1}</span>
                      <span className="xu-lifecycle-name">{phase.name}</span>
                    </div>
                    <div className="xu-lifecycle-phase-name">{phase.phase}</div>
                    <div className="xu-lifecycle-desc">{phase.desc}</div>
                    <code className="xu-lifecycle-code">{phase.example}</code>
                  </div>
                  {index < LIFECYCLE_PHASES.length - 1 && (
                    <div className="xu-lifecycle-arrow" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="xu-callout" style={{ marginTop: '2rem' }}>
              <div className="xu-callout__t">DevIns Language</div>
              <div className="xu-callout__d">
                <p>DevIns (Development Intelligence) 是声明式 AI 指令语言，用于定义 Agent 行为和工作流。</p>
                <p style={{ marginTop: '0.5rem' }}>支持变量、函数、条件表达式、生命周期钩子，让 AI Agent 的行为可配置、可复用。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="xu-section">
          <div className="xu-container">
            <h2 className="xu-section__title">Cross-Platform</h2>
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

        {/* Features Section */}
        <section id="features" className="xu-section xu-section--alt">
          <div className="xu-container">
            <h2 className="xu-section__title">Core Features</h2>
            <p className="xu-section__desc">
              面向真实工程的 AI Agent 框架，可扩展、可组合、跨平台。
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
