import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// SDLC Agents - AI Agents mapped to Software Development Lifecycle phases
const SDLC_AGENTS: Array<{
  name: string;
  displayName: string;
  sdlcPhase: string;
  desc: string;
  caps: string;
  status: 'stable' | 'beta' | 'coming';
}> = [
  {
    name: 'KnowledgeAgent',
    displayName: 'Knowledge',
    sdlcPhase: 'Requirements',
    desc: '需求理解与知识构建，AI 原生的文档阅读和分析能力。',
    caps: 'RAG / Embedding / Context',
    status: 'stable'
  },
  {
    name: 'CodingAgent',
    displayName: 'Coding',
    sdlcPhase: 'Development',
    desc: '自主编码代理，具备完整的文件系统、Shell 和工具访问能力。',
    caps: 'File / Shell / MCP',
    status: 'stable'
  },
  {
    name: 'CodeReviewAgent',
    displayName: 'Review',
    sdlcPhase: 'Code Review',
    desc: '专业代码审查，分析代码质量、安全性、性能和最佳实践。',
    caps: 'Git / Linter / AutoFix',
    status: 'stable'
  },
  {
    name: 'TestAgent',
    displayName: 'Testing',
    sdlcPhase: 'Testing',
    desc: '自动化测试代理，生成测试用例、执行测试、分析覆盖率。',
    caps: 'Unit / E2E / Coverage',
    status: 'coming'
  },
  {
    name: 'ChatDBAgent',
    displayName: 'ChatDB',
    sdlcPhase: 'Data',
    desc: '数据库对话代理，支持 Text-to-SQL，自然语言查询数据。',
    caps: 'SQL / Schema / Query',
    status: 'stable'
  },
  {
    name: 'WebEditAgent',
    displayName: 'WebEdit',
    sdlcPhase: 'Deployment',
    desc: '网页编辑代理，浏览网页、选择 DOM 元素、与页面交互。',
    caps: 'DOM / Browser / Mapping',
    status: 'beta'
  },
  {
    name: 'OpsAgent',
    displayName: 'Ops',
    sdlcPhase: 'Operations',
    desc: '运维监控代理，日志分析、性能监控、告警处理。',
    caps: 'Logs / Metrics / Alerts',
    status: 'coming'
  },
];

// All 8 platforms with detailed info
const ALL_PLATFORMS = [
  {
    name: 'IntelliJ IDEA',
    category: 'IDE',
    tech: 'Jewel UI',
    target: 'JVM',
    desc: 'Code Review / Remote Agent',
    link: 'https://plugins.jetbrains.com/plugin/29223-autodev-experiment',
    featured: true
  },
  {
    name: 'VSCode',
    category: 'IDE',
    tech: 'Extension',
    target: 'JS/Node.js',
    desc: 'Xiuper Agent Extension',
    link: 'https://marketplace.visualstudio.com/items?itemName=Phodal.autodev',
    featured: true
  },
  {
    name: 'CLI',
    category: 'Terminal',
    tech: 'React Ink',
    target: 'JS/Node.js',
    desc: 'Terminal User Interface',
    usage: 'npm i -g @autodev/cli',
    featured: true
  },
  {
    name: 'Web',
    category: 'Browser',
    tech: 'React',
    target: 'JS/WASM',
    desc: 'Browser Web App',
    link: 'https://web.xiuper.com/',
    featured: false
  },
  {
    name: 'Desktop',
    category: 'Desktop',
    tech: 'Compose',
    target: 'JVM',
    desc: 'macOS / Windows / Linux',
    link: 'https://github.com/phodal/auto-dev/releases',
    featured: false
  },
  {
    name: 'Android',
    category: 'Mobile',
    tech: 'Compose',
    target: 'Android',
    desc: 'Native Android App',
    link: 'https://github.com/phodal/auto-dev/releases',
    featured: false
  },
  {
    name: 'iOS',
    category: 'Mobile',
    tech: 'SwiftUI',
    target: 'iOS Native',
    desc: 'SwiftUI + KMP Core',
    link: 'https://github.com/phodal/auto-dev/releases',
    featured: false
  },
  {
    name: 'Server',
    category: 'Backend',
    tech: 'Ktor',
    target: 'JVM',
    desc: 'Self-hosted Server',
    usage: 'Self-hosted',
    featured: false
  },
];

export const LandingPage: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="xu-page">
      <header className="xu-header">
        <div className="xu-container xu-header__inner">
          <a className="xu-brand" href="#/">
            <span className="xu-brand__mark" aria-hidden="true">X</span>
            <span className="xu-brand__text">Xiuper</span>
          </a>
          <nav className="xu-nav">
            <a className="xu-nav__link" href="#use">Use Xiuper</a>
            <a className="xu-nav__link" href="#kmp">KMP</a>
            <a className="xu-nav__link" href="https://github.com/phodal/auto-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero + SDLC Combined Section */}
        <section className="xu-hero">
          <div className="xu-container">
            <div className="xu-hero__top">
              <p className="xu-badge">AutoDev 3.0 - Xiuper</p>
              <h1 className="xu-hero__title">
                <span className="xu-hero__highlight">让 AI 真正融入软件开发生命周期</span>
              </h1>
              <p className="xu-hero__subtitle">
                Kotlin Multiplatform 驱动的全平台 AI Agent 框架，覆盖 SDLC 全阶段。
              </p>
            </div>

            {/* SDLC Carousel */}
            <div className="xu-carousel">
              <button className="xu-carousel__btn xu-carousel__btn--prev" onClick={scrollPrev} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="xu-carousel__viewport" ref={emblaRef}>
                <div className="xu-carousel__container">
                  {SDLC_AGENTS.map((agent) => (
                    <div key={agent.name} className="xu-carousel__slide">
                      <div className={`xu-agent-card xu-agent-card--${agent.status}`}>
                        <div className="xu-agent-card__phase">{agent.sdlcPhase}</div>
                        <div className="xu-agent-card__header">
                          <span className="xu-agent-card__name">{agent.displayName}</span>
                          <span className={`xu-agent-card__status xu-agent-card__status--${agent.status}`}>
                            {agent.status}
                          </span>
                        </div>
                        <p className="xu-agent-card__desc">{agent.desc}</p>
                        <code className="xu-agent-card__caps">{agent.caps}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="xu-carousel__btn xu-carousel__btn--next" onClick={scrollNext} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* SDLC Timeline */}
            <div className="xu-timeline">
              {SDLC_AGENTS.map((agent, i) => (
                <React.Fragment key={agent.name}>
                  <div className={`xu-timeline__dot xu-timeline__dot--${agent.status}`} title={agent.displayName} />
                  {i < SDLC_AGENTS.length - 1 && <div className="xu-timeline__line" />}
                </React.Fragment>
              ))}
            </div>

            <div className="xu-hero__actions">
              <a href="https://github.com/phodal/auto-dev" target="_blank" rel="noreferrer" className="xu-btn xu-btn--primary">
                Get Started
              </a>
              <a href="#use" className="xu-btn xu-btn--secondary">Use Xiuper</a>
            </div>
          </div>
        </section>

        {/* Use Xiuper - 8 Platforms */}
        <section id="use" className="xu-section">
          <div className="xu-container">
            <h2 className="xu-section__title">Use Xiuper Everywhere</h2>
            <p className="xu-section__desc">
              8 个平台，一套核心逻辑 · 从 IDE 到移动端，从终端到浏览器
            </p>

            {/* Platform Grid - All 8 */}
            <div className="xu-platform-grid">
              {ALL_PLATFORMS.map((platform) => (
                <div key={platform.name} className={`xu-platform-card ${platform.featured ? 'xu-platform-card--featured' : ''}`}>
                  <div className="xu-platform-card__header">
                    <div className="xu-platform-card__name">{platform.name}</div>
                    <div className="xu-platform-card__category">{platform.category}</div>
                  </div>
                  <div className="xu-platform-card__tech">
                    <span className="xu-platform-card__tech-label">{platform.tech}</span>
                    <span className="xu-platform-card__target">{platform.target}</span>
                  </div>
                  <div className="xu-platform-card__desc">{platform.desc}</div>
                  <div className="xu-platform-card__footer">
                    {platform.link && (
                      <a href={platform.link} target="_blank" rel="noreferrer" className="xu-platform-card__link">
                        Open →
                      </a>
                    )}
                    {platform.usage && !platform.link && (
                      <code className="xu-platform-card__usage">{platform.usage}</code>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Count Highlight */}
            <div className="xu-platform-stats">
              <div className="xu-platform-stat">
                <div className="xu-platform-stat__number">8</div>
                <div className="xu-platform-stat__label">Platforms</div>
              </div>
              <div className="xu-platform-stat">
                <div className="xu-platform-stat__number">5</div>
                <div className="xu-platform-stat__label">Targets</div>
              </div>
              <div className="xu-platform-stat">
                <div className="xu-platform-stat__number">1</div>
                <div className="xu-platform-stat__label">Codebase</div>
              </div>
            </div>
          </div>
        </section>

        {/* KMP Architecture Section */}
        <section id="kmp" className="xu-section xu-section--alt">
          <div className="xu-container">
            <h2 className="xu-section__title">Kotlin Multiplatform 架构</h2>
            <p className="xu-section__desc">
              基于 expect/actual 模式的跨平台实现，共享核心逻辑，平台特定优化
            </p>

            {/* Architecture Overview */}
            <div className="xu-kmp-arch">
              <div className="xu-kmp-layer xu-kmp-layer--common">
                <div className="xu-kmp-layer__label">commonMain</div>
                <div className="xu-kmp-layer__desc">
                  共享代码 · Agent 核心 · DevIns 语言 · MCP 协议 · YAML 工具
                </div>
              </div>
              <div className="xu-kmp-arrow-down" />
              <div className="xu-kmp-targets">
                <div className="xu-kmp-target">
                  <div className="xu-kmp-target__name">JVM</div>
                  <div className="xu-kmp-target__impl">Platform.jvm.kt</div>
                </div>
                <div className="xu-kmp-target">
                  <div className="xu-kmp-target__name">Android</div>
                  <div className="xu-kmp-target__impl">Platform.android.kt</div>
                </div>
                <div className="xu-kmp-target">
                  <div className="xu-kmp-target__name">iOS</div>
                  <div className="xu-kmp-target__impl">Platform.ios.kt</div>
                </div>
                <div className="xu-kmp-target">
                  <div className="xu-kmp-target__name">JS</div>
                  <div className="xu-kmp-target__impl">Platform.js.kt</div>
                </div>
                <div className="xu-kmp-target">
                  <div className="xu-kmp-target__name">WASM</div>
                  <div className="xu-kmp-target__impl">Platform.wasm.kt</div>
                </div>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="xu-tech-highlights">
              <div className="xu-tech-card">
                <div className="xu-tech-card__icon">🎯</div>
                <div className="xu-tech-card__title">expect/actual</div>
                <div className="xu-tech-card__desc">
                  平台抽象机制，commonMain 定义接口，各平台实现细节
                </div>
              </div>
              <div className="xu-tech-card">
                <div className="xu-tech-card__icon">🔧</div>
                <div className="xu-tech-card__title">Ktor Client</div>
                <div className="xu-tech-card__desc">
                  多引擎支持：OkHttp (JVM/Android) · Darwin (iOS) · JS Engine
                </div>
              </div>
              <div className="xu-tech-card">
                <div className="xu-tech-card__icon">📦</div>
                <div className="xu-tech-card__title">Compose UI</div>
                <div className="xu-tech-card__desc">
                  声明式 UI，Desktop/Android/iOS 共享组件，平台特定适配
                </div>
              </div>
              <div className="xu-tech-card">
                <div className="xu-tech-card__icon">🌐</div>
                <div className="xu-tech-card__title">TypeScript 互操作</div>
                <div className="xu-tech-card__desc">
                  自动生成 .d.ts 定义，UMD 模块格式，Node.js/Browser 双支持
                </div>
              </div>
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
