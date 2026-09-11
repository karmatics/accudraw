class AccuDrawArchiveApp {
  constructor() {
    this.activeArticle = "accudraw_page1";
    this.viewMode = "dark"; // dark, light, print
    this.showOriginalScans = true;
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
    
    const bg = isLight ? "#ffffff" : "#0d1117";
    const cardBg = isLight ? "#f6f8fa" : "#161b22";
    const text = isLight ? "#1f2328" : "#c9d1d9";
    const textMuted = isLight ? "#656d76" : "#8b949e";
    const border = isLight ? "#d0d7de" : "#30363d";
    const accent = isLight ? "#0969da" : "#00f2fe";
    
    target.style.cssText = "background:" + bg + "; color:" + text + "; min-height:100vh; padding:1.5rem; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif; box-sizing:border-box;";
    
    const header = document.createElement("header");
    header.style.cssText = "max-width:980px; margin:0 auto 1.5rem auto; border-bottom:1px solid " + border + "; padding-bottom:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;";
    
    header.innerHTML = [
      "<div>",
      "  <h1 style='margin:0 0 0.25rem 0; font-size:1.5rem; color:" + accent + "; font-family:monospace;'>📐 AccuDraw & SmartLine Historical Archive</h1>",
      "  <p style='margin:0; font-size:0.85rem; color:" + textMuted + ";'>Original 1990s CAD Innovations by Rob Brown (Bentley Systems First Patent)</p>",
      "</div>",
      "<div style='display:flex; gap:0.4rem; align-items:center;'>",
      "  <button id='btn-mode-dark' style='padding:0.35rem 0.75rem; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.75rem; background:" + (!isLight ? "#238636" : "#21262d") + "; color:#fff; border:1px solid #3fb950;'>🌙 Dark</button>",
      "  <button id='btn-mode-light' style='padding:0.35rem 0.75rem; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.75rem; background:" + (isLight && !isPrint ? "#0969da" : "#21262d") + "; color:#fff; border:1px solid #58a6ff;'>☀️ Light</button>",
      "  <button id='btn-mode-print' style='padding:0.35rem 0.75rem; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.75rem; background:" + (isPrint ? "#6e7681" : "#21262d") + "; color:#fff; border:1px solid #8b949e;'>🖨️ Print View</button>",
      "</div>"
    ].join("");
    
    target.appendChild(header);
    
    // Tab Bar for Articles & Evidence
    const nav = document.createElement("nav");
    nav.style.cssText = "max-width:980px; margin:0 auto 1.5rem auto; display:flex; gap:0.4rem; flex-wrap:wrap;";
    
    const tabs = [
      { id: "accudraw_page1", label: "📄 AccuDraw Origin Article (Part 1)" },
      { id: "accudraw_page2", label: "📄 AccuDraw Origin Article (Part 2)" },
      { id: "accudraw3d_page1", label: "🎲 3D AccuDraw: The Next Dimension (Part 1)" },
      { id: "accudraw3d_page2", label: "🎲 3D AccuDraw: The Next Dimension (Part 2)" },
      { id: "accudraw3d_page3", label: "🎲 3D AccuDraw: The Next Dimension (Part 3)" },
      { id: "press_reviews", label: "📰 90s Press Reviews (Cadalyst / CGW)" },
      { id: "usenet_lore", label: "💬 Usenet Deja News & CAD Forums" },
      { id: "valuation", label: "💰 Market Valuation ($2B-$8B ROI)" }
    ];
    
    tabs.forEach(t => {
      const isActive = this.activeArticle === t.id;
      const btn = document.createElement("button");
      btn.textContent = t.label;
      btn.style.cssText = "padding:0.45rem 0.85rem; border-radius:6px; font-size:0.78rem; font-weight:bold; cursor:pointer; font-family:monospace; border:1px solid " + (isActive ? accent : border) + "; background:" + (isActive ? (isLight ? "#ddf4ff" : "#003847") : cardBg) + "; color:" + (isActive ? accent : text) + ";";
      btn.onclick = () => {
        this.activeArticle = t.id;
        this.render();
      };
      nav.appendChild(btn);
    });
    
    target.appendChild(nav);
    
    const content = document.createElement("main");
    content.id = "accudraw-main-content";
    content.style.cssText = "max-width:980px; margin:0 auto; background:" + cardBg + "; border:1px solid " + border + "; border-radius:10px; padding:2rem; box-shadow:0 4px 20px rgba(0,0,0,0.25);";
    
    if (this.activeArticle.startsWith("accudraw")) {
      content.innerHTML = [
        "<div style='display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid " + border + "; padding-bottom:0.75rem; margin-bottom:1.5rem;'>",
        "  <h2 style='margin:0; color:" + accent + "; font-size:1.25rem;'>" + tabs.find(x => x.id === this.activeArticle).label + "</h2>",
        "  <span style='font-size:0.75rem; color:" + textMuted + ";'>Transcribed from Original 1990s MicroStation Manager Magazine</span>",
        "</div>",
        "<iframe src='" + this.activeArticle + ".html' style='width:100%; min-height:75vh; border:none; background:#ffffff; border-radius:6px;'></iframe>"
      ].join("");
    } else if (this.activeArticle === "press_reviews") {
      content.innerHTML = [
        "<h2 style='color:" + accent + "; margin-top:0;'>📰 1990s CAD Industry Press Reviews</h2>",
        "<p style='color:" + textMuted + ";'>High-resolution scans of original magazine reviews analyzing AccuDraw and SmartLine:</p>",
        "<div style='display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-top:1.5rem;'>",
        "  <div style='background:" + bg + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <h3 style='margin:0 0 0.5rem 0; font-size:1rem; color:" + accent + ";'>Cadalyst Magazine Feature</h3>",
        "    <a href='cadalyst.jpg' target='_blank'><img src='cadalyst.jpg' style='width:100%; border-radius:4px; max-height:260px; object-fit:cover;'></a>",
        "    <p style='font-size:0.78rem; color:" + textMuted + "; margin-top:0.5rem;'>Featured review calling AccuDraw the defining innovation in CAD drafting speed.</p>",
        "  </div>",
        "  <div style='background:" + bg + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <h3 style='margin:0 0 0.5rem 0; font-size:1rem; color:" + accent + ";'>Computer Graphics World (CGW)</h3>",
        "    <a href='cgw.jpg' target='_blank'><img src='cgw.jpg' style='width:100%; border-radius:4px; max-height:260px; object-fit:cover;'></a>",
        "    <p style='font-size:0.78rem; color:" + textMuted + "; margin-top:0.5rem;'>CGW full-page review comparing MicroStation with AutoCAD release 13.</p>",
        "  </div>",
        "  <div style='background:" + bg + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <h3 style='margin:0 0 0.5rem 0; font-size:1rem; color:" + accent + ";'>MicroStation Manager Cover Feature</h3>",
        "    <a href='mmarticlepage1.jpg' target='_blank'><img src='mmarticlepage1.jpg' style='width:100%; border-radius:4px; max-height:260px; object-fit:cover;'></a>",
        "    <p style='font-size:0.78rem; color:" + textMuted + "; margin-top:0.5rem;'>Rob Brown's definitive tutorial explaining dynamic polar snapping.</p>",
        "  </div>",
        "</div>"
      ].join("");
    } else if (this.activeArticle === "usenet_lore") {
      content.innerHTML = [
        "<h2 style='color:" + accent + "; margin-top:0;'>💬 1990s Usenet & AutoCAD Forum Discussions</h2>",
        "<p style='color:" + textMuted + ";'>Archived discussions from Deja News and AutoCAD forums documenting user reactions to AccuDraw:</p>",
        "<div style='display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-top:1.5rem;'>",
        "  <div style='background:" + bg + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <h3 style='margin:0 0 0.5rem 0; font-size:1rem; color:" + accent + ";'>AutoCAD Forum: \'Should Be In AutoCAD\'</h3>",
        "    <a href='shouldbe.jpg' target='_blank'><img src='shouldbe.jpg' style='width:100%; border-radius:4px; max-height:240px; object-fit:cover;'></a>",
        "    <p style='font-size:0.78rem; color:" + textMuted + "; margin-top:0.5rem;'>AutoCAD power users demanding an AccuDraw equivalent.</p>",
        "  </div>",
        "  <div style='background:" + bg + "; border:1px solid " + border + "; border-radius:8px; padding:1rem;'>",
        "    <h3 style='margin:0 0 0.5rem 0; font-size:1rem; color:" + accent + ";'>Deja News: \'Better Than Anything Else\'</h3>",
        "    <a href='deja-better-than.jpg' target='_blank'><img src='deja-better-than.jpg' style='width:100%; border-radius:4px; max-height:240px; object-fit:cover;'></a>",
        "    <p style='font-size:0.78rem; color:" + textMuted + "; margin-top:0.5rem;'>Usenet discussions highlighting the 5x speed increase in production CAD drafting.</p>",
        "  </div>",
        "</div>"
      ].join("");
    } else if (this.activeArticle === "valuation") {
      content.innerHTML = [
        "<h2 style='color:" + accent + "; margin-top:0;'>💰 Economic Valuation & Market Impact ($2B-$8.5B)</h2>",
        "<p style='color:" + textMuted + ";'>Cross-model consensus across Google Gemini, Anthropic Claude, and financial filings examining the return on investment of Rob Brown\'s tenure:</p>",
        "<div style='background:rgba(56,189,248,0.1); border-left:4px solid #38bdf8; padding:1rem; border-radius:6px; margin:1.5rem 0;'>",
        "  <p style='margin:0; font-size:0.95rem; font-weight:600; color:" + (isLight ? "#0369a1" : "#7dd3fc") + ";'>",
        "    \'Hiring Rob Brown is considered one of the highest-yielding engineering hires in software history—turning roughly 3 years of payroll (~$300,000) into a patented interface that anchored Bentley Systems\' flagship product, generating between $2 Billion and $8.5 Billion in enterprise market capitalization.\'",
        "  </p>",
        "</div>",
        "<p style='font-size:0.85rem; color:" + textMuted + ";'>To view the complete prompt transcripts, skeptical audit challenges, and verified shared conversation links, switch to the <strong>ValuationOfAccudraw</strong> project in the Luno header navigation.</p>"
      ].join("");
    }
    
    target.appendChild(content);
    
    // Event bindings for theme toggles
    document.getElementById("btn-mode-dark").onclick = () => this.setMode("dark");
    document.getElementById("btn-mode-light").onclick = () => this.setMode("light");
    document.getElementById("btn-mode-print").onclick = () => this.setMode("print");
  }
}

globalThis.AccuDrawArchiveApp = AccuDrawArchiveApp;
if (typeof module !== "undefined" && module.exports) module.exports = AccuDrawArchiveApp;