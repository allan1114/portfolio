# 📱 Modern Portfolio Website

A stunning, high-performance single-page portfolio built with vanilla HTML, CSS, and JavaScript. No build tools required—just pure, elegant code. Perfect for designers, developers, and creative professionals showcasing their work.

**Key Features:** Dark theme with vibrant gradients • Custom cursor tracking • Smooth scroll animations • Mobile-responsive • Bilingual support (English & Traditional Chinese) • Zero dependencies

---

## ✨ Features

- **Smooth Custom Cursor** – Animated tracking cursor with dynamic ring that responds to interactive elements
- **Scroll Reveal Animations** – Elements fade in and slide up as they enter the viewport using Intersection Observer
- **Vibrant Gradient Theme** – Color palette with 4 primary colors that animate and adapt across the design
- **Animated Background Blobs** – Floating, morphing shapes create depth and visual interest
- **Responsive Grid Layout** – Adapts seamlessly from mobile (stack) to desktop (multi-column)
- **Works Showcase** – Project cards with tags, descriptions, and design insights
- **Bilingual Support** – Easy to add English & Traditional Chinese content
- **Zero Dependencies** – Pure vanilla JavaScript, no frameworks or build tools
- **Smooth Scrolling** – Native scroll behavior with anchor navigation
- **Performance Optimized** – Fast load times, GPU-accelerated animations

---

## 🛠️ Technologies Used

- **HTML5** – Semantic markup
- **CSS3** – Flexbox, Grid, custom properties (CSS variables), animations, gradients
- **Vanilla JavaScript** – Mouse tracking, scroll reveal animation, DOM manipulation
- **No build tools required** – Works directly in any modern browser

**Browser Support:** Chrome 88+, Firefox 85+, Safari 14+, Edge 88+ (basically anything modern)

---

## 📁 Project Structure

```
portfolio/
├── index.html         # Single-file application (HTML + CSS + JavaScript)
├── README.md          # This file
└── .git/              # Version control
```

**Why single file?** Maximum portability and zero setup. Perfect for sharing, deploying, and forking. All styles and scripts are embedded.

---

## 🎨 Color Palette

The design uses CSS variables for easy theming. Edit these in the `<style>` section:

```css
:root {
  --c1: #FF4D6D;      /* Primary - Vibrant Red */
  --c2: #FFBE0B;      /* Accent - Bold Yellow */
  --c3: #3A86FF;      /* Accent - Bright Blue */
  --c4: #8338EC;      /* Accent - Purple */
  --bg: #0D0D0D;      /* Dark Background */
  --bg2: #161616;     /* Lighter Background */
  --text: #F5F5F5;    /* Primary Text */
  --text-muted: #888; /* Muted Text */
}
```

Change these values to create your own color scheme instantly.

---

## 📖 Sections Overview

### Navigation
Fixed sticky navbar with logo and links to About, Works, and Contact sections.

### Hero
Full-screen splash with animated title, subtitle, CTA buttons, and decorative blob animations.

### About
Grid layout with image placeholder, bio text, and skill tags. Replace emoji placeholder with your actual photo.

### Works
Responsive grid showcase of 4 project examples. Each card includes:
- Visual emoji/gradient background
- Project tags (category badges)
- Title and description
- "💡 Design Insights" box with methodology

### Contact
Centered CTA section with email button and social media links.

### Footer
Simple copyright footer with customizable year.

---

## 🚀 Getting Started

### Option 1: Run Locally (Recommended for Development)

1. **Clone or fork the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Start a local server** (required to properly load the file)
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (with http-server):**
   ```bash
   npx http-server
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

**Why a server?** Some browsers restrict `file://` URLs for security reasons. A simple local server takes 10 seconds to set up.

### Option 2: Direct File Preview

Simply open `index.html` directly in a browser. Most modern features will work, but some animations may behave differently without a server.

---

## ✏️ Customization Guide

All content lives in a single `index.html` file. Edit using any text editor (VS Code, Sublime, Notepad++, etc.).

### 1. **Update Basic Info**

```html
<!-- In <title> tag (browser tab) -->
<title>Your Name — Designer</title>

<!-- In Navigation -->
<div class="nav-logo">YN.</div>  <!-- Change to your initials or name -->
```

### 2. **Customize Hero Section**

Find the `#hero` section and update:

```html
<div class="hero-tag">✦ Available for work</div>
<h1 class="hero-title">
  <span>Your Name</span>
  <span class="gradient-text">Designer.</span>
</h1>
<p class="hero-sub">Your subtitle or bio here</p>

<!-- Update button links -->
<a href="#works" class="btn btn-primary">View Work →</a>
<a href="#contact" class="btn btn-ghost">Contact Me</a>
```

### 3. **Update About Section**

Replace the image placeholder:

```html
<!-- Option A: Add your own image -->
<img src="your-photo.jpg" alt="Your Name" style="width:100%;border-radius:16px;">

<!-- Option B: Keep placeholder, just change emoji -->
<span>📸</span>  <!-- Change emoji -->
<p>Replace with your photo</p>
```

Update bio and skills:

```html
<h2 class="section-title">Hi, I'm<br><span class="gradient-text">Your Name</span></h2>
<p class="section-sub">Your bio...</p>

<!-- Update skill tags -->
<span class="skill-tag">Your Skill 1</span>
<span class="skill-tag">Your Skill 2</span>
```

### 4. **Add/Edit Project Cards**

Each project card is a `<div class="work-card">`. Example structure:

```html
<div class="work-card">
  <!-- Background gradient and emoji -->
  <div class="work-thumb" style="background: linear-gradient(135deg,#FF4D6D22,#FFBE0B22)">
    🎯  <!-- Change emoji -->
    <div class="work-overlay">✦ View Details</div>
  </div>
  
  <div class="work-body">
    <!-- Category tags -->
    <div class="work-tags">
      <span class="work-tag" style="background:#FF4D6D22;color:#FF4D6D">UI/UX</span>
      <span class="work-tag" style="background:#FFBE0B22;color:#FFBE0B">Mobile</span>
    </div>
    
    <!-- Project info -->
    <div class="work-title">Your Project Title</div>
    <div class="work-desc">Brief description of what you did.</div>
    
    <!-- Design thinking box -->
    <div class="work-thinking">
      <strong>💡 Design Insight</strong>
      Explain your process, challenge solved, or result achieved.
    </div>
  </div>
</div>
```

**To add more cards:** Copy the entire `<div class="work-card">` block and paste it again in the works grid. The staggered animation delays are automatic.

### 5. **Update Contact Section**

```html
<!-- Email button -->
<a href="mailto:your@email.com" class="btn btn-primary">
  ✉️ your@email.com
</a>

<!-- Social links -->
<div class="social-links">
  <a href="https://behance.net/yourprofile" class="social-link">🎨 Behance</a>
  <a href="https://instagram.com/yourprofile" class="social-link">📸 Instagram</a>
  <a href="https://linkedin.com/in/yourprofile" class="social-link">💼 LinkedIn</a>
  <a href="https://github.com/yourprofile" class="social-link">🐙 GitHub</a>
</div>
```

### 6. **Update Footer**

```html
<footer>
  <p>© 2026 Your Name — Designed & Built with ❤️</p>
</footer>
```

### 7. **Customize Colors**

Edit the CSS variables at the top of the `<style>` section:

```css
:root {
  --c1: #FF4D6D;   /* Primary color - change to your brand color */
  --c2: #FFBE0B;   /* Secondary accent */
  --c3: #3A86FF;   /* Tertiary accent */
  --c4: #8338EC;   /* Quaternary accent */
  /* ... rest of variables ... */
}
```

### 8. **Adjust Animations & Timing**

Find these in the `<style>` section to customize:

```css
/* Blob animation speed (change 8s, 10s, 12s) */
@keyframes blobMove { ... }

/* Gradient animation speed (change 4s) */
@keyframes gradShift { ... }

/* Scroll reveal transition duration (change 0.7s) */
.reveal { transition: opacity 0.7s ease, transform 0.7s ease; }

/* Cursor animation smoothness (change 0.12) */
rx += (mx - rx) * 0.12;  /* Lower = smoother, higher = snappier */
```

### 9. **Font Customization**

Change the font family:

```css
:root {
  --font: 'Segoe UI', system-ui, sans-serif;
}
```

Or add a custom web font (add before `<style>` tag):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap" rel="stylesheet">
```

Then update the CSS variable:

```css
--font: 'Inter', system-ui, sans-serif;
```

---

## 🌐 Language Support

The template comes with **English navigation + Traditional Chinese/Cantonese content**. The HTML lang attribute is set to `zh-HK` (Traditional Chinese, Hong Kong).

**To change language:**

```html
<!-- In opening <html> tag -->
<html lang="en">  <!-- Change from "zh-HK" to "en" or other codes -->
```

**Common language codes:**
- `en` – English
- `zh-HK` – Traditional Chinese (Hong Kong)
- `zh-CN` – Simplified Chinese (Mainland)
- `ja` – Japanese
- `ko` – Korean

**To support multiple languages**, you could:

1. Create separate files: `index-en.html`, `index-zh.html`
2. Use JavaScript to toggle content (more advanced)
3. Use a simple i18n library

For now, edit the content directly for your language.

---

## 📱 Responsive Behavior

The design is **mobile-first** with breakpoints:

- **Mobile (< 768px):** Stacked layout, standard cursor, larger touch targets
- **Desktop (≥ 768px):** Multi-column grids, custom cursor tracking

The custom cursor automatically disables on mobile (where it's not useful) and switches back to native cursor.

---

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended - Free)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose main branch, / (root) folder
   - Click Save

3. **Your site is live at:** `https://yourusername.github.io/portfolio/`

### Option 2: Netlify (Free, Recommended Alternative)

1. **Drag and drop** your `index.html` file on [netlify.com](https://netlify.com)
2. **Get instant live URL** with auto-https
3. **Auto-deploys** on push if you connect GitHub

### Option 3: Traditional Web Hosting

If you have web hosting (cPanel, shared hosting, etc.):

1. Upload `index.html` via FTP/SFTP
2. Access at your domain URL
3. Done!

### Option 4: Vercel (Advanced)

If familiar with CLI:

```bash
npm install -g vercel
vercel
```

---

## ♿ Accessibility Notes

Current implementation includes:

- Semantic HTML (nav, section, footer)
- Good color contrast (WCAG AA compliant)
- Keyboard navigation (anchor links work with Tab key)

**Future improvements:**

- Add ARIA labels for custom cursor
- Add skip-to-content link
- Ensure keyboard focus visible on all interactive elements

---

## 🔧 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 88+ | Full |
| Firefox | 85+ | Full |
| Safari | 14+ | Full |
| Edge | 88+ | Full |
| Opera | 74+ | Full |
| Mobile Safari (iOS) | 14+ | Full |
| Chrome Android | 88+ | Full |

**Note:** IE 11 is not supported (it's 2026, let it go 🙂).

---

## 📝 License

This project is licensed under the **MIT License**. Feel free to:

- Use for personal or commercial projects
- Modify and customize
- Fork and distribute
- Credit appreciated but not required

See [MIT License](https://opensource.org/licenses/MIT) for details.

---

## 🤝 Contributing

Found a bug or want to improve the template?

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature/my-improvement`
5. Open a Pull Request

---

## 💡 Tips & Tricks

### Performance Optimization

- Images: Compress before adding to avoid large file sizes
- Emojis: Use Unicode emojis (included in OS) instead of image assets
- Animations: Most animations use CSS and are GPU-accelerated for smooth performance

### Adding More Sections

To add a new section (Services, Blog, etc.):

```html
<section id="services">
  <div class="section-tag">Services</div>
  <h2 class="section-title">What I Offer</h2>
  <!-- Your content -->
</section>
```

Then add navigation link:

```html
<li><a href="#services">Services</a></li>
```

### Customizing Animations

Disable scroll reveal:
```javascript
// Comment out or remove the scroll reveal section
// reveals.forEach(el => observer.observe(el));
```

Disable custom cursor:
```javascript
// Comment out the custom cursor section
// document.addEventListener('mousemove', e => { ... });
```

### Dark Mode Alternative

Swap the colors for a lighter theme:

```css
:root {
  --bg: #FFFFFF;
  --bg2: #F5F5F5;
  --text: #1a1a1a;
  --text-muted: #666;
}
```

---

## 🎓 Learning Resources

- **CSS Variables:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- **Intersection Observer:** [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- **CSS Grid:** [CSS-Tricks Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Animation Timing:** [easing.net](https://easing.net/)

---

## ❓ FAQ

**Q: Can I use this commercially?**
A: Yes! MIT license allows commercial use.

**Q: How do I add a logo image?**
A: Replace the text `.nav-logo` with an `<img>` tag pointing to your logo file.

**Q: Can I add more projects?**
A: Absolutely! Copy a `.work-card` block and paste it again in the works grid.

**Q: How do I change font sizes?**
A: Edit the `font-size` property in CSS. Use `clamp()` for responsive sizing.

**Q: Will my portfolio work without an internet connection?**
A: Yes, as long as you don't link to external images or resources. Stick to emojis or local files.

**Q: How do I track visitors?**
A: Add Google Analytics, Plausible, or similar in the `<head>` section (snippet provided by analytics platform).

---

## 📞 Support

For questions or issues:

1. Check the **Customization Guide** above
2. Review the **Learning Resources**
3. Open an issue on GitHub

---

## 🙌 Credits

Built with passion for designers and developers who want a beautiful, lightweight portfolio without complexity.

Inspired by modern design trends and optimized for performance.

---

**Made with ❤️ — Happy building! 🚀**
