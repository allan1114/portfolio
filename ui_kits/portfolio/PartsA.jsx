/* global React */
const { useState, useEffect, useRef } = React;

// ═══════════════════════════════════════════════════════════
// Custom Cursor — fixed two-layer (dot + eased ring)
// ═══════════════════════════════════════════════════════════
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, raf;
    const onMove = e => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      if (dot.current) { dot.current.style.left = mx + 'px'; dot.current.style.top = my + 'px'; }
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (ring.current) { ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px'; }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    tick();
    const activate = e => {
      if (!e.target.closest('a, button, .pk-card, .pk-skill')) return;
      dot.current.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.current.style.width = '60px'; ring.current.style.height = '60px';
      ring.current.style.borderColor = 'rgba(255,77,109,0.8)';
    };
    const deactivate = () => {
      dot.current.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.current.style.width = '36px'; ring.current.style.height = '36px';
      ring.current.style.borderColor = 'rgba(255,77,109,0.5)';
    };
    document.addEventListener('mouseover', activate);
    document.addEventListener('mouseout', deactivate);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', activate); document.removeEventListener('mouseout', deactivate); };
  }, []);
  return (
    <>
      <div ref={dot} id="pk-cursor" />
      <div ref={ring} id="pk-cursor-ring" />
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// Nav
// ═══════════════════════════════════════════════════════════
function Nav({ variant = 'home', onNav }) {
  return (
    <nav className="pk-nav">
      <a href="#" onClick={e => { e.preventDefault(); onNav('home'); }} className="pk-logo">YN.</a>
      {variant === 'home' ? (
        <ul className="pk-nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      ) : (
        <a href="#" onClick={e => { e.preventDefault(); onNav('home'); }} className="pk-nav-back">← 返回作品集</a>
      )}
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════
// Blobs — decorative floating color washes
// ═══════════════════════════════════════════════════════════
function Blobs({ opacity = 0.18 }) {
  return (
    <>
      <div className="pk-blob pk-blob-1" style={{ opacity }} />
      <div className="pk-blob pk-blob-2" style={{ opacity }} />
      <div className="pk-blob pk-blob-3" style={{ opacity }} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// Buttons
// ═══════════════════════════════════════════════════════════
function Button({ variant = 'primary', children, onClick, href, style }) {
  const cls = `pk-btn ${variant === 'primary' ? 'pk-btn-primary' : 'pk-btn-ghost'}`;
  const Tag = href ? 'a' : 'button';
  return <Tag className={cls} href={href} onClick={onClick} style={style}>{children}</Tag>;
}

// ═══════════════════════════════════════════════════════════
// Hero
// ═══════════════════════════════════════════════════════════
function Hero({ onNav }) {
  return (
    <section id="hero" className="pk-hero">
      <Blobs />
      <div className="pk-hero-tag">✦ Available for work</div>
      <h1 className="pk-hero-title">
        <span>Your Name</span>
        <span className="pk-grad-text">Designer.</span>
      </h1>
      <p className="pk-hero-sub">我把複雜的問題變成直覺、有趣的視覺體驗。專注於 UI/UX、品牌設計與數位體驗。</p>
      <div className="pk-hero-cta">
        <Button variant="primary" onClick={() => document.getElementById('works').scrollIntoView({behavior:'smooth'})}>查看作品 →</Button>
        <Button variant="ghost" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>聯絡我</Button>
      </div>
      <div className="pk-scroll">
        <div className="pk-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// About
// ═══════════════════════════════════════════════════════════
function About() {
  const skills = ['UI Design','UX Research','Figma','Brand Identity','Motion Design','Prototyping','Design System','Illustration'];
  return (
    <section id="about" className="pk-about">
      <div className="pk-about-grid">
        <div className="pk-reveal pk-about-img-wrap">
          <div className="pk-about-img-placeholder">
            <span>🧑‍🎨</span>
            <p>放你的照片</p>
          </div>
          <div className="pk-about-deco" />
        </div>
        <div className="pk-reveal" style={{transitionDelay:'.1s'}}>
          <div className="pk-section-tag">About Me</div>
          <h2 className="pk-section-title">Hi，我是<br/><span className="pk-grad-text">Your Name</span></h2>
          <p className="pk-section-sub" style={{marginBottom:'1rem'}}>一位熱愛解決問題的設計師，相信好的設計不只是好看，更是能讓人生活更好的工具。</p>
          <p className="pk-section-sub">擅長從用戶洞察出發，把複雜的需求轉化成清晰、有情感的設計語言。喜歡在規則與創意之間找平衡。</p>
          <div className="pk-skills">
            {skills.map(s => <span className="pk-skill" key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Cursor, Nav, Blobs, Button, Hero, About });
