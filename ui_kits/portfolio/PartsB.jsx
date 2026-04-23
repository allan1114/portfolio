/* global React */
const { useState } = React;

// ═══════════════════════════════════════════════════════════
// Works grid + cards
// ═══════════════════════════════════════════════════════════
const WORKS = [
  { id: 'w1', emoji: '🛍️', grad: 'linear-gradient(135deg,rgba(255,77,109,.133),rgba(255,190,11,.133))',
    tags: [{t:'UI/UX',c:'#FF4D6D'},{t:'Mobile',c:'#FFBE0B'}],
    title: '電商 App 購物體驗重設計',
    desc: '為某品牌重新設計購物流程，提升轉換率與用戶留存。',
    insight: '發現用戶在結帳流程中大量流失，通過簡化步驟、加強信任感元素，最終將完成率提升 38%。',
    hero: '🛍️ UI/UX — Mobile', role: 'Lead UX Designer', client: '某品牌電商', year: '2024',
    stats: [{n:'38%',l:'結帳完成率提升'},{n:'52%',l:'購物車遺棄率下降'},{n:'2.3步',l:'平均結帳步數'},{n:'4.8/5',l:'用戶滿意度評分'}] },
  { id: 'w2', emoji: '🎨', grad: 'linear-gradient(135deg,rgba(131,56,236,.133),rgba(58,134,255,.133))',
    tags: [{t:'Brand',c:'#8338EC'},{t:'Identity',c:'#3A86FF'}],
    title: '新創品牌視覺識別系統',
    desc: '從零建立一個科技新創的完整品牌語言，包含 logo、色彩與字體系統。',
    insight: '品牌需要在「科技感」與「親近感」之間取得平衡，最終以有機曲線結合幾何形態解決這個張力。',
    hero: '🎨 Brand — Identity', role: 'Brand Designer', client: 'Tech Startup', year: '2024',
    stats: [{n:'3 週',l:'品牌建立時程'},{n:'12',l:'應用場景'},{n:'90%',l:'團隊滿意度'},{n:'1',l:'品牌語言'}] },
  { id: 'w3', emoji: '📊', grad: 'linear-gradient(135deg,rgba(58,134,255,.133),rgba(6,214,160,.133))',
    tags: [{t:'Dashboard',c:'#3A86FF'},{t:'Data Viz',c:'#06D6A0'}],
    title: '數據分析儀表板設計',
    desc: '為 B2B SaaS 產品設計複雜數據的視覺化界面，讓非技術用戶也能輕鬆讀懂數據。',
    insight: '大量數據容易讓用戶迷失，通過「漸進式揭露」設計模式，引導用戶從整體到細節逐步探索。',
    hero: '📊 Dashboard — Data Viz', role: 'Product Designer', client: 'B2B SaaS', year: '2025',
    stats: [{n:'45%',l:'數據理解度提升'},{n:'3x',l:'儀表板使用頻率'},{n:'22',l:'圖表類型'},{n:'4.7/5',l:'用戶評分'}] },
  { id: 'w4', emoji: '🌐', grad: 'linear-gradient(135deg,rgba(255,190,11,.133),rgba(255,77,109,.133))',
    tags: [{t:'Web Design',c:'#FFBE0B'},{t:'Motion',c:'#FF4D6D'}],
    title: '創意代理公司官網',
    desc: '充滿個性的代理公司展示網站，強調創意文化與團隊特質。',
    insight: '網站本身就是作品集，每一個滾動都是驚喜。用非線性動線打破傳統上下滾動的閱讀模式。',
    hero: '🌐 Web — Motion', role: 'Web Designer', client: 'Creative Agency', year: '2025',
    stats: [{n:'3x',l:'頁面停留時間'},{n:'18s',l:'平均停留'},{n:'12',l:'動畫場景'},{n:'2',l:'網站獎項'}] }
];

function WorkCard({ work, onOpen, delay = 0 }) {
  return (
    <a className="pk-card pk-reveal" style={{ transitionDelay: `${delay}s` }}
       onClick={e => { e.preventDefault(); onOpen(work.id); }} href="#">
      <div className="pk-thumb" style={{ background: work.grad }}>
        {work.emoji}
        <div className="pk-thumb-overlay">✦ 查看詳情</div>
      </div>
      <div className="pk-card-body">
        <div className="pk-card-tags">
          {work.tags.map(({t,c}) => (
            <span key={t} className="pk-chip" style={{background:`${c}22`, color:c}}>{t}</span>
          ))}
        </div>
        <div className="pk-card-title">{work.title}</div>
        <div className="pk-card-desc">{work.desc}</div>
        <div className="pk-insight">
          <strong>💡 設計思路</strong>
          {work.insight}
        </div>
      </div>
    </a>
  );
}

function Works({ onOpen }) {
  return (
    <section id="works" className="pk-works">
      <div className="pk-works-header">
        <div>
          <div className="pk-section-tag pk-reveal">Selected Works</div>
          <h2 className="pk-section-title pk-reveal">精選作品</h2>
        </div>
        <Button variant="ghost" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>看更多 →</Button>
      </div>
      <div className="pk-works-grid">
        {WORKS.map((w, i) => <WorkCard key={w.id} work={w} onOpen={onOpen} delay={i * 0.1} />)}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Contact + Footer
// ═══════════════════════════════════════════════════════════
function Contact() {
  return (
    <section id="contact" className="pk-contact">
      <div className="pk-contact-inner">
        <span className="pk-contact-emoji">👋</span>
        <div className="pk-section-tag pk-reveal" style={{textAlign:'center',display:'block'}}>Contact</div>
        <h2 className="pk-section-title pk-reveal" style={{fontSize:'clamp(2rem,5vw,4rem)'}}>
          讓我們一起<br/><span className="pk-grad-text">做點好玩的事</span>
        </h2>
        <p className="pk-section-sub pk-reveal" style={{margin:'1rem auto 0',textAlign:'center'}}>
          無論是合作項目、自由接案，還是純粹交流，我都很樂意聊聊。
        </p>
        <div style={{marginTop:'2rem'}} className="pk-reveal">
          <Button variant="primary" href="mailto:your@email.com" style={{margin:'0 auto',display:'inline-flex'}}>
            ✉️ your@email.com
          </Button>
        </div>
        <div className="pk-social pk-reveal" style={{transitionDelay:'.1s'}}>
          <a href="#" className="pk-social-link">🎨 Behance</a>
          <a href="#" className="pk-social-link">📸 Instagram</a>
          <a href="#" className="pk-social-link">💼 LinkedIn</a>
          <a href="#" className="pk-social-link">🐙 GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="pk-footer">© 2026 Your Name — Designed & Built with ❤️</footer>;
}

// ═══════════════════════════════════════════════════════════
// Case study page
// ═══════════════════════════════════════════════════════════
function CaseStudy({ work, onBack }) {
  return (
    <>
      <section className="pk-case-hero">
        <div className="pk-blob pk-blob-1" style={{opacity:.12}} />
        <div className="pk-blob pk-blob-2" style={{opacity:.12}} />
        <div className="pk-hero-tag">{work.hero}</div>
        <h1 className="pk-case-title">{work.title}</h1>
        <div className="pk-meta">
          <div className="pk-meta-item"><div className="pk-meta-label">客戶</div><div className="pk-meta-value">{work.client}</div></div>
          <div className="pk-meta-item"><div className="pk-meta-label">年份</div><div className="pk-meta-value">{work.year}</div></div>
          <div className="pk-meta-item"><div className="pk-meta-label">角色</div><div className="pk-meta-value">{work.role}</div></div>
          <div className="pk-meta-item"><div className="pk-meta-label">工具</div><div className="pk-meta-value">Figma, Prototyping</div></div>
        </div>
      </section>

      <section style={{background:'#161616'}}>
        <div className="pk-section-tag">背景</div>
        <h2 className="pk-case-h2">挑戰</h2>
        <p className="pk-case-text">{work.desc} 通過用戶行為分析，我們發現問題不只是 UI 設計，更涉及用戶心理與信任感。</p>
        <div className="pk-highlight">
          <h4>核心問題</h4>
          <p>• 流程過長，用戶感到疲勞<br/>• 缺乏信任信號，用戶擔心安全性<br/>• 遺棄率遠高於行業平均</p>
        </div>
      </section>

      <section>
        <div className="pk-section-tag">方法論</div>
        <h2 className="pk-case-h2">研究與洞察</h2>
        <div className="pk-content-grid">
          <div><div className="pk-content-img">📊</div></div>
          <div className="pk-content-text">
            <h3>用戶研究</h3>
            <p>我們進行了 20+ 場深度訪談和可用性測試，發現：</p>
            <ul>
              <li><strong>心理障礙</strong> — 用戶擔心支付安全，需要多次確認</li>
              <li><strong>認知負擔</strong> — 過多選項和步驟造成決策疲勞</li>
              <li><strong>缺乏反饋</strong> — 每步操作後缺乏清晰的進度提示</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'#161616'}}>
        <div className="pk-section-tag">結果</div>
        <h2 className="pk-case-h2">量化成效</h2>
        <div className="pk-stats-grid">
          {work.stats.map(s => (
            <div key={s.l} className="pk-stat">
              <div className="pk-stat-num">{s.n}</div>
              <div className="pk-stat-label">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="pk-highlight" style={{marginTop:'2rem'}}>
          <h4>設計反思</h4>
          <p>{work.insight} 這不只是設計成就，更是商業價值的直接體現。</p>
        </div>
      </section>

      <footer className="pk-footer" style={{padding:'3rem'}}>
        <p style={{marginBottom:'1.5rem'}}>看完這個案例？</p>
        <a href="#" onClick={e => { e.preventDefault(); onBack(); }} className="pk-footer-link">← 返回作品集</a>
        <p style={{marginTop:'2rem',fontSize:'.85rem'}}>© 2026 Your Name</p>
      </footer>
    </>
  );
}

Object.assign(window, { Works, WorkCard, Contact, Footer, CaseStudy, WORKS });
