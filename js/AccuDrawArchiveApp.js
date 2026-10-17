class AccuDrawArchiveApp {

  constructor() {
    this.activeSection = "overview";
    this.viewMode = "dark"; // dark, light, print
    this.selectedPromptId = 1;
    this.expandedCardId = null;
  }
  async run(env) {
    this.container = (env && env.container) || document.getElementById("app-root") || document.body;
    this.render();
  }

  setMode(mode) {
    this.viewMode = mode;
    this.render();
  }

  render() {
      const target = this.container;
      target.innerHTML = "";

      const isPrint = this.viewMode === "print";
      const isLight = this.viewMode === "light" || isPrint;

      const bg = isLight ? "#ffffff" : "#080c14";
      const cardBg = isLight ? "#f8fafc" : "#0f172a";
      const panelInner = isLight ? "#ffffff" : "#0a0f1d";
      const text = isLight ? "#0f172a" : "#f1f5f9";
      const textMuted = isLight ? "#475569" : "#94a3b8";
      const border = isLight ? "#cbd5e1" : "#1e293b";
      const accent = isLight ? "#0284c7" : "#38bdf8";

      this.applyStyles(isLight, bg, cardBg, border, accent, text, textMuted);

      target.style.cssText = [
        "background:" + bg + ";",
        "color:" + text + ";",
        "min-height:100vh;",
        "padding:0.75rem 1rem 3rem 1rem;",
        "font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;",
        "line-height:1.6;",
        "box-sizing:border-box;"
      ].join("");

      const pageWrapper = document.createElement("div");
      pageWrapper.style.cssText = "max-width:1080px; margin:0 auto; display:flex; flex-direction:column; gap:1.25rem;";

      // Top Header Banner
      const topBar = document.createElement("div");
      topBar.style.cssText = "display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; border-bottom:1px solid " + border + "; padding-bottom:0.85rem;";

      const brandBlock = document.createElement("div");
      brandBlock.innerHTML = [
        "<div style='display:flex; align-items:center; gap:0.5rem;'>",
        "  <span style='font-size:1.4rem;'>📐</span>",
        "  <h1 style='margin:0; font-size:1.3rem; font-weight:800; color:" + accent + "; letter-spacing:-0.01em;'>AccuDraw & SmartLine Archive</h1>",
        "  <span style='font-size:0.68rem; font-weight:bold; background:" + (isLight ? "#e0f2fe" : "rgba(56,189,248,0.15)") + "; color:" + accent + "; border:1px solid " + accent + "66; padding:0.15rem 0.5rem; border-radius:12px;'>1994–2026 Historical Record</span>",
        "</div>",
        "<p style='margin:0.2rem 0 0 0; font-size:0.82rem; color:" + textMuted + ";'>Robert J. Brown's Foundational CAD Inventions, Bentley Systems' First Patent (#5,754,182), & Economic Valuation</p>"
      ].join("");

      const modeControls = document.createElement("div");
      modeControls.style.cssText = "display:flex; gap:0.35rem; align-items:center;";

      const btnDark = document.createElement("button");
      btnDark.textContent = "🌙 Dark";
      btnDark.style.cssText = "padding:0.35rem 0.65rem; border-radius:6px; cursor:pointer; font-size:0.75rem; font-weight:bold; font-family:monospace; background:" + (!isLight ? "#0284c7" : "#1e293b") + "; color:#fff; border:1px solid " + (!isLight ? "#38bdf8" : "#334155") + ";";
      btnDark.onclick = () => this.setMode("dark");

      const btnLight = document.createElement("button");
      btnLight.textContent = "☀️ Light";
      btnLight.style.cssText = "padding:0.35rem 0.65rem; border-radius:6px; cursor:pointer; font-size:0.75rem; font-weight:bold; font-family:monospace; background:" + (isLight && !isPrint ? "#0284c7" : "#1e293b") + "; color:#fff; border:1px solid " + (isLight && !isPrint ? "#38bdf8" : "#334155") + ";";
      btnLight.onclick = () => this.setMode("light");

      const btnPrint = document.createElement("button");
      btnPrint.textContent = "🖨️ Print Dossier";
      btnPrint.style.cssText = "padding:0.35rem 0.65rem; border-radius:6px; cursor:pointer; font-size:0.75rem; font-weight:bold; font-family:monospace; background:" + (isPrint ? "#0284c7" : "#1e293b") + "; color:#fff; border:1px solid " + (isPrint ? "#38bdf8" : "#334155") + ";";
      btnPrint.onclick = () => {
        this.setMode("print");
        setTimeout(() => window.print(), 120);
      };

      modeControls.appendChild(btnDark);
      modeControls.appendChild(btnLight);
      modeControls.appendChild(btnPrint);
      topBar.appendChild(brandBlock);
      topBar.appendChild(modeControls);
      pageWrapper.appendChild(topBar);

      // Sleek Sticky Navigation Bar (No horizontal scroll track)
      const stickyNav = document.createElement("nav");
      stickyNav.className = "accudraw-sticky-nav-bar";

      const navPills = document.createElement("div");
      navPills.className = "accudraw-nav-pills";

      const sections = [
        { id: "overview", label: "🏛️ Executive Thesis" },
        { id: "inventions", label: "⚙️ Inventions & Patents" },
        { id: "articles", label: "📖 1990s Magazine Articles" },
        { id: "lore", label: "💬 CAD Lore & Reviews" },
        { id: "valuation", label: "💰 Multi-Billion Valuation" },
        { id: "verify", label: "🔍 Self-Verification Sandbox" }
      ];

      sections.forEach(s => {
        const isActive = this.activeSection === s.id;
        const b = document.createElement("button");
        b.className = "accudraw-pill-btn" + (isActive ? " active" : "");
        b.textContent = s.label;
        b.onclick = () => {
          this.activeSection = s.id;
          this.render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        navPills.appendChild(b);
      });

      stickyNav.appendChild(navPills);
      pageWrapper.appendChild(stickyNav);

      // Main Content Area
      const main = document.createElement("main");
      main.style.cssText = "display:flex; flex-direction:column; gap:1.75rem;";

      if (this.activeSection === "overview") {
        main.appendChild(this.buildOverviewSection(isLight, cardBg, panelInner, border, accent, text, textMuted));
      } else if (this.activeSection === "inventions") {
        main.appendChild(this.buildInventionsSection(isLight, cardBg, panelInner, border, accent, text, textMuted));
      } else if (this.activeSection === "articles") {
        main.appendChild(this.buildArticlesSection(isLight, cardBg, panelInner, border, accent, text, textMuted));
      } else if (this.activeSection === "lore") {
        main.appendChild(this.buildLoreSection(isLight, cardBg, panelInner, border, accent, text, textMuted));
      } else if (this.activeSection === "valuation") {
        main.appendChild(this.buildValuationSection(isLight, cardBg, panelInner, border, accent, text, textMuted));
      } else if (this.activeSection === "verify") {
        main.appendChild(this.buildVerifySection(isLight, cardBg, panelInner, border, accent, text, textMuted));
      }

      pageWrapper.appendChild(main);

      // Clean Footer
      const footer = document.createElement("footer");
      footer.style.cssText = "border-top:1px solid " + border + "; padding-top:1rem; margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; font-size:0.75rem; color:" + textMuted + "; font-family:monospace;";
      footer.innerHTML = [
        "<span>AccuDraw & SmartLine Archive • Inventor: Robert J. Brown (Bentley Systems First Patent #5,754,182)</span>",
        "<span>Unanimous Consensus across Claude, Gemini, ChatGPT & Grok</span>"
      ].join("");
      pageWrapper.appendChild(footer);

      target.appendChild(pageWrapper);
    }
  buildOverviewSection(isLight, cardBg, panelInner, border, accent, text, textMuted) {
      const card = document.createElement("div");
      card.style.cssText = "background:" + cardBg + "; border:1px solid " + border + "; border-radius:12px; padding:1.75rem; display:flex; flex-direction:column; gap:1.25rem;";

      card.innerHTML = [
        "<div style='border-left:4px solid " + accent + "; padding-left:1rem;'>",
        "  <h2 style='margin:0 0 0.35rem 0; font-size:1.2rem; font-weight:800; color:" + text + ";'>The Asymmetric CAD Invention</h2>",
        "  <p style='margin:0; font-size:0.9rem; color:" + textMuted + "; line-height:1.5;'>How a 3-year payroll investment in a single interface architect anchored a multi-billion dollar platform for over three decades.</p>",
        "</div>",
        "<div style='background:" + (isLight ? "#f0fdf4" : "rgba(16,185,129,0.08)") + "; border:1px solid " + (isLight ? "#bbf7d0" : "rgba(16,185,129,0.25)") + "; border-radius:8px; padding:1rem;'>",
        "  <p style='margin:0; font-size:0.92rem; font-weight:600; color:" + (isLight ? "#166534" : "#6ee7b7") + "; line-height:1.6;'>",
        "    \"In realistic counterfactual terms, Bob Brown’s invention of AccuDraw and SmartLine contributed between $2.0 Billion and $8.5 Billion to Bentley Systems' current enterprise valuation—representing one of the highest return-on-investment individual engineering hires in software history.\"",
        "  </p>",
        "  <span style='display:block; margin-top:0.4rem; font-size:0.75rem; color:" + textMuted + ";'>— Unanimous consensus across Google Gemini, Anthropic Claude, ChatGPT, and Grok</span>",
        "</div>",
        "<div style='display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1rem;'>",
        "  <div style='background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <div style='font-size:0.7rem; font-weight:bold; color:" + accent + "; text-transform:uppercase;'>Patent Landmark</div>",
        "    <div style='font-size:1.1rem; font-weight:bold; margin:0.25rem 0;'>US Patent #5,754,182</div>",
        "    <p style='margin:0; font-size:0.78rem; color:" + textMuted + ";'>Bentley Systems' first issued patent in corporate history. Sole inventor: Robert J. Brown.</p>",
        "  </div>",
        "  <div style='background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <div style='font-size:0.7rem; font-weight:bold; color:#10b981; text-transform:uppercase;'>Longevity & Retention</div>",
        "    <div style='font-size:1.1rem; font-weight:bold; margin:0.25rem 0;'>30+ Years Active</div>",
        "    <p style='margin:0; font-size:0.78rem; color:" + textMuted + ";'>Introduced in MicroStation 95; remains the flagship drafting interaction model in MicroStation 2026.</p>",
        "  </div>",
        "  <div style='background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <div style='font-size:0.7rem; font-weight:bold; color:#a855f7; text-transform:uppercase;'>Corporate ROI Multiple</div>",
        "    <div style='font-size:1.1rem; font-weight:bold; margin:0.25rem 0;'>5,000x – 10,000x</div>",
        "    <p style='margin:0; font-size:0.78rem; color:" + textMuted + ";'>Calculated on ~$300,000 in payroll compensation against billions in protected enterprise revenue.</p>",
        "  </div>",
        "</div>",
        "<div style='font-size:0.85rem; color:" + text + "; line-height:1.65; display:flex; flex-direction:column; gap:0.75rem;'>",
        "  <p style='margin:0;'>",
        "    In 1994, Robert J. Brown joined Bentley Systems and designed two tools: <strong>AccuDraw</strong> (a dynamic polar/rectangular coordinate compass and shortcut engine) and <strong>SmartLine</strong> (a continuous multi-segment geometry placement tool). Together with intuitive 3D spatial view controls, they transformed MicroStation from an obscure drafting clone into the dominant infrastructure design platform worldwide.",
        "  </p>",
        "  <p style='margin:0;'>",
        "    Prior to AccuDraw, CAD users were forced to type repetitive command-line coordinate codes (like <code>DX=</code>, <code>DL=</code>, and <code>@distance&lt;angle</code>) or create disposable construction lines simply to align endpoints. AccuDraw introduced a floating, context-sensitive compass that anticipated user intent, locked onto drawing axes with single keystrokes, and gave instant visual feedback.",
        "  </p>",
        "  <p style='margin:0;'>",
        "    This archive preserves the complete historical record: original 1990s magazine articles, patent records, CAD community lore, and verified AI evaluations that quantify the economic scale of this singular contribution.",
        "  </p>",
        "</div>"
      ].join("");

      return card;
    }

  buildInventionsSection(isLight, cardBg, panelInner, border, accent, text, textMuted) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display:flex; flex-direction:column; gap:1.5rem;";

      const inventions = AccuDrawData.getInventions();
      const patents = AccuDrawData.getPatents();

      // Inventions Grid
      const invHeader = document.createElement("div");
      invHeader.innerHTML = [
        "<h2 style='margin:0 0 0.25rem 0; font-size:1.2rem; font-weight:800; color:" + accent + ";'>The Core Technical Inventions</h2>",
        "<p style='margin:0; font-size:0.85rem; color:" + textMuted + ";'>Architected in MDL (MicroStation Development Language) and C by Rob Brown between 1994 and 1997.</p>"
      ].join("");
      wrapper.appendChild(invHeader);

      inventions.forEach(inv => {
        const box = document.createElement("div");
        box.style.cssText = "background:" + cardBg + "; border:1px solid " + border + "; border-radius:10px; padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;";

        const bullets = inv.details.map(d => "<li style='margin-bottom:0.35rem; color:" + text + "; font-size:0.82rem;'>" + d + "</li>").join("");

        box.innerHTML = [
          "<div style='display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;'>",
          "  <div style='display:flex; align-items:center; gap:0.5rem;'>",
          "    <h3 style='margin:0; font-size:1.05rem; font-weight:bold; color:" + text + ";'>" + inv.name + "</h3>",
          "    <span style='font-size:0.7rem; color:" + accent + "; font-family:monospace;'>(" + inv.year + ")</span>",
          "  </div>",
          "  <span style='font-size:0.72rem; font-weight:bold; background:" + (isLight ? "#e0f2fe" : "rgba(56,189,248,0.15)") + "; color:" + accent + "; padding:0.15rem 0.5rem; border-radius:4px;'>" + inv.badge + "</span>",
          "</div>",
          "<p style='margin:0; font-size:0.85rem; color:" + textMuted + "; line-height:1.5;'>" + inv.summary + "</p>",
          "<ul style='margin:0.25rem 0 0 1.25rem; padding:0;'>",
          bullets,
          "</ul>"
        ].join("");
        wrapper.appendChild(box);
      });

      // Patent Section
      const patHeader = document.createElement("div");
      patHeader.style.cssText = "margin-top:0.5rem;";
      patHeader.innerHTML = [
        "<h2 style='margin:0 0 0.25rem 0; font-size:1.2rem; font-weight:800; color:#10b981;'>Intellectual Property & Patents</h2>",
        "<p style='margin:0; font-size:0.85rem; color:" + textMuted + ";'>Sole inventor patents proving independent technical provenance.</p>"
      ].join("");
      wrapper.appendChild(patHeader);

      patents.forEach(p => {
        const pBox = document.createElement("div");
        pBox.style.cssText = "background:" + panelInner + "; border:1px solid " + border + "; border-left:4px solid #10b981; border-radius:8px; padding:1.1rem; display:flex; flex-direction:column; gap:0.4rem;";
        pBox.innerHTML = [
          "<div style='display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;'>",
          "  <strong style='color:#10b981; font-size:0.95rem; font-family:monospace;'>" + p.number + ": " + p.title + "</strong>",
          "  <span style='font-size:0.72rem; color:" + textMuted + "; font-family:monospace;'>Issued: " + p.issued + "</span>",
          "</div>",
          "<div style='font-size:0.78rem; color:" + textMuted + ";'>Inventor: <strong>" + p.inventor + "</strong> | Assignee: <strong>" + p.assignee + "</strong> (Filed " + p.filed + ")</div>",
          "<p style='margin:0.35rem 0 0 0; font-size:0.82rem; color:" + text + "; line-height:1.5;'>" + p.significance + "</p>"
        ].join("");
        wrapper.appendChild(pBox);
      });

      return wrapper;
    }

  buildArticlesSection(isLight, cardBg, panelInner, border, accent, text, textMuted) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display:flex; flex-direction:column; gap:1.25rem;";

      const articles = [
        { id: "accudraw_page1", title: "A PowerDraft Highlight: AccuDraw (Part 1)", author: "Rob Brown", pub: "MicroStation Manager, February 1995", page: "36" },
        { id: "accudraw_page2", title: "A PowerDraft Highlight: AccuDraw (Part 2)", author: "Rob Brown", pub: "MicroStation Manager, February 1995", page: "37" },
        { id: "accudraw3d_page1", title: "AccuDraw: The 3D Thinking Tool (Part 1)", author: "Scott Williams", pub: "MicroStation Manager, December 1996", page: "54" },
        { id: "accudraw3d_page2", title: "AccuDraw: The 3D Thinking Tool (Part 2 - The Third Dimension)", author: "Scott Williams", pub: "MicroStation Manager, December 1996", page: "55" },
        { id: "accudraw3d_page3", title: "AccuDraw: The 3D Thinking Tool (Part 3 - AccuDreamer Profile)", author: "Scott Williams", pub: "MicroStation Manager, December 1996", page: "56" }
      ];

      const currentArt = articles.find(a => a.id === this.activeArticle) || articles[0];

      // Sub-Navigation Pills for Articles (Clean wrapped flex, no horizontal scroll track)
      const picker = document.createElement("div");
      picker.style.cssText = "display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center; background:" + panelInner + "; padding:0.6rem; border-radius:8px; border:1px solid " + border + ";";

      articles.forEach(art => {
        const isSel = (art.id === currentArt.id);
        const b = document.createElement("button");
        b.textContent = art.title;
        b.style.cssText = [
          "padding:0.35rem 0.65rem;",
          "border-radius:6px;",
          "font-size:0.74rem;",
          "font-weight:700;",
          "font-family:monospace;",
          "cursor:pointer;",
          "transition:all 0.15s ease;",
          "background:" + (isSel ? accent : cardBg) + ";",
          "color:" + (isSel ? "#ffffff" : textMuted) + ";",
          "border:1px solid " + (isSel ? accent : border) + ";"
        ].join("");
        b.onclick = () => {
          this.activeArticle = art.id;
          this.render();
        };
        picker.appendChild(b);
      });

      wrapper.appendChild(picker);

      // Document Container with Anti-Trap Navigation
      const docBox = document.createElement("div");
      docBox.style.cssText = "background:" + cardBg + "; border:1px solid " + border + "; border-radius:10px; padding:1.25rem; display:flex; flex-direction:column; gap:0.85rem;";

      docBox.innerHTML = [
        "<div style='display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid " + border + "; padding-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;'>",
        "  <div>",
        "    <h3 style='margin:0; font-size:1.1rem; color:" + accent + "; font-weight:800;'>" + currentArt.title + "</h3>",
        "    <div style='font-size:0.78rem; color:" + textMuted + ";'>By " + currentArt.author + " • " + currentArt.pub + " (Page " + currentArt.page + ")</div>",
        "  </div>",
        "  <div style='display:flex; gap:0.4rem; align-items:center;'>",
        "    <a href='" + currentArt.id + ".html' target='_blank' style='padding:0.35rem 0.75rem; background:#1e293b; color:#38bdf8; border:1px solid #38bdf866; border-radius:6px; font-size:0.74rem; font-weight:bold; text-decoration:none; font-family:monospace;'>↗ Open in Full Tab</a>",
        "  </div>",
        "</div>",
        "<div class='accudraw-article-frame-container'>",
        "  <iframe id='accudraw-article-iframe' src='" + currentArt.id + ".html' title='" + currentArt.title + "'></iframe>",
        "</div>"
      ].join("");

      wrapper.appendChild(docBox);
      return wrapper;
    }
  buildLoreSection(isLight, cardBg, panelInner, border, accent, text, textMuted) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display:flex; flex-direction:column; gap:1.25rem;";

      const intro = document.createElement("div");
      intro.innerHTML = [
        "<h2 style='margin:0 0 0.25rem 0; font-size:1.2rem; font-weight:800; color:" + accent + ";'>30 Years of CAD Community Praise</h2>",
        "<p style='margin:0; font-size:0.85rem; color:" + textMuted + ";'>Documentary quotes and archived discussions from 1995 through today reflecting the user loyalty sparked by AccuDraw.</p>"
      ].join("");
      wrapper.appendChild(intro);

      const quotes = AccuDrawData.getCommunityTestimonials();

      quotes.forEach(q => {
        const card = document.createElement("div");
        card.style.cssText = "background:" + cardBg + "; border:1px solid " + border + "; border-radius:10px; padding:1.25rem; display:flex; flex-direction:column; gap:0.65rem;";

        card.innerHTML = [
          "<div style='display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;'>",
          "  <div>",
          "    <h3 style='margin:0; font-size:0.95rem; font-weight:bold; color:" + text + ";'>" + q.title + "</h3>",
          "    <div style='font-size:0.75rem; color:" + textMuted + ";'>" + q.source + " (" + q.year + ")</div>",
          "  </div>",
          "  <span style='font-size:0.7rem; font-weight:bold; background:" + (isLight ? "#f1f5f9" : "rgba(255,255,255,0.06)") + "; color:" + textMuted + "; padding:0.15rem 0.5rem; border-radius:4px; font-family:monospace;'>" + q.tag + "</span>",
          "</div>",
          "<blockquote style='margin:0; padding:0.75rem 1rem; border-left:3px solid " + accent + "; background:" + panelInner + "; border-radius:0 6px 6px 0; font-style:italic; font-size:0.85rem; color:" + text + "; line-height:1.55;'>",
          "  \"" + q.quote + "\"",
          "</blockquote>"
        ].join("");
        wrapper.appendChild(card);
      });

      return wrapper;
    }

  buildValuationSection(isLight, cardBg, panelInner, border, accent, text, textMuted) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display:flex; flex-direction:column; gap:1.5rem;";

      const consensus = AccuDrawData.getValuationConsensus();

      const banner = document.createElement("div");
      banner.style.cssText = "background:linear-gradient(135deg, " + (isLight ? "#f0f9ff" : "#0c1d32") + " 0%, " + cardBg + " 100%); border:2px solid " + accent + "; border-radius:12px; padding:1.5rem; display:flex; flex-direction:column; gap:0.85rem;";

      banner.innerHTML = [
        "<div style='display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;'>",
        "  <h2 style='margin:0; font-size:1.3rem; font-weight:900; color:" + accent + ";'>Multi-Billion Dollar Enterprise Consensus</h2>",
        "  <span style='font-size:0.75rem; font-weight:bold; background:#0284c7; color:#fff; padding:0.2rem 0.6rem; border-radius:12px;'>Unanimous AI Economic Finding</span>",
        "</div>",
        "<p style='margin:0; font-size:0.88rem; color:" + text + "; line-height:1.55;'>" + consensus.keyInsight + "</p>",
        "<div style='display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-top:0.5rem;'>",
        "  <div style='background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:0.85rem;'>",
        "    <div style='font-size:0.7rem; color:" + textMuted + "; font-family:monospace; text-transform:uppercase;'>Consensus Midpoint</div>",
        "    <div style='font-size:1.3rem; font-weight:900; color:#38bdf8; margin:0.2rem 0; font-family:monospace;'>" + consensus.consensusMidpoint + "</div>",
        "    <div style='font-size:0.72rem; color:" + textMuted + ";'>Direct long-term enterprise value</div>",
        "  </div>",
        "  <div style='background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:0.85rem;'>",
        "    <div style='font-size:0.7rem; color:" + textMuted + "; font-family:monospace; text-transform:uppercase;'>Full Valuation Range</div>",
        "    <div style='font-size:1.3rem; font-weight:900; color:#10b981; margin:0.2rem 0; font-family:monospace;'>" + consensus.consensusValuationRange + "</div>",
        "    <div style='font-size:0.72rem; color:" + textMuted + ";'>Across conservative and strategic models</div>",
        "  </div>",
        "  <div style='background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:0.85rem;'>",
        "    <div style='font-size:0.7rem; color:" + textMuted + "; font-family:monospace; text-transform:uppercase;'>Estimated Payroll ROI</div>",
        "    <div style='font-size:1.3rem; font-weight:900; color:#f59e0b; margin:0.2rem 0; font-family:monospace;'>" + consensus.impliedPayrollROI + "</div>",
        "    <div style='font-size:0.72rem; color:" + textMuted + ";'>On ~$300,000 in mid-90s compensation</div>",
        "  </div>",
        "</div>"
      ].join("");
      wrapper.appendChild(banner);

      // Breakdown per model
      const list = document.createElement("div");
      list.style.cssText = "display:flex; flex-direction:column; gap:1rem;";

      consensus.modelEstimates.forEach(m => {
        const item = document.createElement("div");
        item.style.cssText = "background:" + cardBg + "; border:1px solid " + border + "; border-left:4px solid " + m.color + "; border-radius:8px; padding:1.15rem; display:flex; flex-direction:column; gap:0.5rem;";

        const linkHtml = m.verifiedLink
          ? "<a href='" + m.verifiedLink + "' target='_blank' style='padding:0.25rem 0.55rem; background:#1e293b; color:" + m.color + "; border:1px solid " + m.color + "66; border-radius:4px; font-size:0.72rem; font-weight:bold; text-decoration:none; font-family:monospace;'>↗ Verify Original Session</a>"
          : "<span style='font-size:0.7rem; color:" + textMuted + "; font-family:monospace;'>Independent Test Run</span>";

        item.innerHTML = [
          "<div style='display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;'>",
          "  <div style='display:flex; align-items:center; gap:0.5rem;'>",
          "    <h3 style='margin:0; font-size:1.05rem; font-weight:bold; color:" + text + ";'>" + m.name + "</h3>",
          "    <span style='font-size:0.85rem; font-weight:bold; color:" + m.color + "; font-family:monospace;'>" + m.range + "</span>",
          "  </div>",
          linkHtml,
          "</div>",
          "<div style='font-size:0.75rem; color:" + textMuted + "; font-family:monospace; font-weight:bold;'>" + m.shareOfMarketCap + "</div>",
          "<p style='margin:0; font-size:0.82rem; color:" + text + "; line-height:1.55;'>" + m.coreArgument + "</p>"
        ].join("");
        list.appendChild(item);
      });
      wrapper.appendChild(list);

      return wrapper;
    }

  buildVerifySection(isLight, cardBg, panelInner, border, accent, text, textMuted) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display:flex; flex-direction:column; gap:1.25rem;";

      const card = document.createElement("div");
      card.style.cssText = "background:" + cardBg + "; border:1px solid " + border + "; border-radius:10px; padding:1.5rem; display:flex; flex-direction:column; gap:1rem;";

      card.innerHTML = [
        "<h2 style='margin:0; font-size:1.2rem; font-weight:800; color:" + accent + ";'>Independent Self-Verification Sandbox</h2>",
        "<p style='margin:0; font-size:0.85rem; color:" + textMuted + "; line-height:1.5;'>",
        "  You do not have to accept these calculations at face value. The exact prompt queries below were formulated under strict neutral controls—without mentioning the inventor's name or suggesting an answer. Copy any prompt below with 1 tap and paste it into ChatGPT, Claude, Gemini, or Grok to verify the findings independently.",
        "</p>"
      ].join("");

      const prompts = AccuDrawData.getVerificationPrompts();

      prompts.forEach(p => {
        const pBox = document.createElement("div");
        pBox.style.cssText = "background:" + panelInner + "; border:1px solid " + border + "; border-radius:8px; padding:1.15rem; display:flex; flex-direction:column; gap:0.6rem;";

        const btnCopy = document.createElement("button");
        btnCopy.textContent = "📋 Copy Prompt " + p.id;
        btnCopy.style.cssText = "align-self:flex-start; padding:0.35rem 0.75rem; background:#0284c7; color:#fff; border:none; border-radius:5px; font-size:0.75rem; font-weight:bold; cursor:pointer; font-family:monospace;";
        btnCopy.onclick = () => {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(p.text);
            btnCopy.textContent = "✓ Copied to Clipboard!";
            setTimeout(() => { btnCopy.textContent = "📋 Copy Prompt " + p.id; }, 2000);
          } else {
            prompt("Copy prompt:", p.text);
          }
        };

        pBox.innerHTML = [
          "<div style='display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;'>",
          "  <strong style='font-size:0.9rem; color:" + accent + "; font-family:monospace;'>" + p.title + "</strong>",
          "  <span style='font-size:0.7rem; color:" + textMuted + "; font-style:italic;'>" + p.objective + "</span>",
          "</div>",
          "<pre style='margin:0; padding:0.75rem; background:" + (isLight ? "#f1f5f9" : "#070a12") + "; border:1px solid " + border + "; border-radius:6px; color:" + text + "; font-size:0.8rem; font-family:monospace; white-space:pre-wrap; line-height:1.5;'>\"" + p.text + "\"</pre>"
        ].join("");

        pBox.appendChild(btnCopy);
        card.appendChild(pBox);
      });

      wrapper.appendChild(card);
      return wrapper;
    }

  applyStyles(isLight, bg, cardBg, border, accent, text, textMuted) {
      const css = [
        "/* AccuDraw Archive Custom Layout & Sticky Navigation */",
        ".accudraw-sticky-nav-bar {",
        "  position: sticky;",
        "  top: 0;",
        "  z-index: 1000;",
        "  background: " + (isLight ? "rgba(255, 255, 255, 0.92)" : "rgba(8, 12, 20, 0.92)") + ";",
        "  backdrop-filter: blur(16px);",
        "  -webkit-backdrop-filter: blur(16px);",
        "  border-bottom: 1px solid " + border + ";",
        "  padding: 0.65rem 0;",
        "  margin-bottom: 1.25rem;",
        "  display: flex;",
        "  justify-content: space-between;",
        "  align-items: center;",
        "  flex-wrap: wrap;",
        "  gap: 0.5rem;",
        "}",
        ".accudraw-nav-pills {",
        "  display: flex;",
        "  flex-wrap: wrap;",
        "  gap: 0.35rem;",
        "  align-items: center;",
        "}",
        ".accudraw-pill-btn {",
        "  padding: 0.4rem 0.75rem;",
        "  border-radius: 20px;",
        "  font-size: 0.76rem;",
        "  font-weight: 700;",
        "  font-family: monospace;",
        "  cursor: pointer;",
        "  white-space: nowrap;",
        "  transition: all 0.15s ease;",
        "  border: 1px solid " + border + ";",
        "  background: " + cardBg + ";",
        "  color: " + textMuted + ";",
        "}",
        ".accudraw-pill-btn:hover {",
        "  border-color: " + accent + ";",
        "  color: " + text + ";",
        "}",
        ".accudraw-pill-btn.active {",
        "  background: " + accent + " !important;",
        "  color: #ffffff !important;",
        "  border-color: " + accent + " !important;",
        "  box-shadow: 0 2px 10px " + (isLight ? "rgba(2,132,199,0.3)" : "rgba(56,189,248,0.3)") + ";",
        "}",
        ".accudraw-article-frame-container {",
        "  position: relative;",
        "  width: 100%;",
        "  border-radius: 8px;",
        "  overflow: hidden;",
        "  background: #f5f2ed;",
        "  box-shadow: 0 4px 20px rgba(0,0,0,0.3);",
        "}",
        ".accudraw-article-frame-container iframe {",
        "  width: 100%;",
        "  height: 820px;",
        "  border: none;",
        "  display: block;",
        "}"
      ].join("\n");

      if (typeof applyCss === "function") {
        applyCss(css, "accudraw_archive_styles");
      } else {
        let style = document.getElementById("accudraw_archive_styles");
        if (!style) {
          style = document.createElement("style");
          style.id = "accudraw_archive_styles";
          document.head.appendChild(style);
        }
        style.textContent = css;
      }
    }
}

globalThis.AccuDrawArchiveApp = AccuDrawArchiveApp;
if (typeof module !== "undefined" && module.exports) module.exports = AccuDrawArchiveApp;