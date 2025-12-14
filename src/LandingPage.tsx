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

// Platform categories with emphasis
const PLATFORM_CATEGORIES = [
  {
    category: 'IDE',
    highlight: true,
    platforms: [
      { name: 'IntelliJ IDEA', tech: 'Jewel UI', link: 'https://plugins.jetbrains.com/plugin/29223-autodev-experiment' },
      { name: 'VSCode', tech: 'Extension', link: 'https://marketplace.visualstudio.com/items?itemName=Phodal.autodev' },
    ]
  },
  {
    category: 'Terminal',
    highlight: true,
    platforms: [
      { name: 'CLI', tech: 'React Ink', usage: 'npm i -g @autodev/cli' },
      { name: 'Server', tech: 'Ktor JVM', usage: 'Self-hosted' },
    ]
  },
  {
    category: 'Desktop & Mobile',
    highlight: false,
    platforms: [
      { name: 'Desktop', tech: 'Compose', link: 'https://github.com/phodal/auto-dev/releases' },
      { name: 'Android', tech: 'Compose', link: 'https://github.com/phodal/auto-dev/releases' },
      { name: 'iOS', tech: 'SwiftUI', link: 'https://github.com/phodal/auto-dev/releases' },
    ]
  },
  {
    category: 'Web',
    highlight: false,
    platforms: [
      { name: 'Browser', tech: 'React', link: 'https://web.xiuper.com/' },
    ]
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
            <a className="xu-nav__link" href="#platforms">Platforms</a>
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
              <a href="#platforms" className="xu-btn xu-btn--secondary">View Platforms</a>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="xu-section">
          <div className="xu-container">
            <h2 className="xu-section__title">Kotlin Multiplatform</h2>
            <p className="xu-section__desc">一套核心逻辑，8 个平台复用</p>

            <div className="xu-platforms">
              {PLATFORM_CATEGORIES.map((cat) => (
                <div key={cat.category} className={`xu-platform-group ${cat.highlight ? 'xu-platform-group--highlight' : ''}`}>
                  <div className="xu-platform-group__header">{cat.category}</div>
                  <div className="xu-platform-group__items">
                    {cat.platforms.map((p) => (
                      <div key={p.name} className="xu-platform-item">
                        <span className="xu-platform-item__name">{p.name}</span>
                        <span className="xu-platform-item__tech">{p.tech}</span>
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noreferrer" className="xu-platform-item__link">
                            Open
                          </a>
                        )}
                        {p.usage && !p.link && (
                          <code className="xu-platform-item__usage">{p.usage}</code>
                        )}
                      </div>
                    ))}
                  </div>
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
