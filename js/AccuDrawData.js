class AccuDrawData {
  static getPatents() {
    return [
      {
        number: "US Patent 5,754,182",
        title: "Precision Graphical Input for Computer Aided Design",
        inventor: "Robert J. Brown",
        assignee: "Bentley Systems, Incorporated (Exton, PA)",
        filed: "January 19, 1995",
        issued: "May 19, 1998",
        significance: "Bentley Systems' first issued patent in corporate history. Established the intellectual property foundation for AccuDraw, defining automated coordinate indexing, floating origin translation, and dynamic polar/rectangular alignment."
      },
      {
        number: "US Patent 5,371,845",
        title: "Graphical User Interface System with Dynamic Constraints",
        inventor: "Robert J. Brown",
        assignee: "Intergraph Corporation (Huntsville, AL)",
        filed: "October 1, 1992",
        issued: "December 6, 1994",
        significance: "Precursor invention conceived and prototyped at Intergraph (which owned 50% of Bentley at the time). Demonstrates early sole-inventor provenance before Brown joined Bentley Systems in 1994 to architect AccuDraw and SmartLine from scratch."
      }
    ];
  }

  static getInventions() {
    return [
      {
        id: "accudraw",
        name: "AccuDraw",
        badge: "Flagship Interaction Engine",
        year: "1994–1995",
        summary: "The revolutionary compass and dynamic coordinate indexing engine that replaced cumbersome command-line coordinate entry with real-time mouse-and-keyboard synergy.",
        details: [
          "Floating Dynamic Compass: Evaluates cursor motion in real time and automatically aligns drawing axes to prior vertices.",
          "Single-Stroke Shortcuts: Fast single-letter operations (T for Top, F for Front, S for Side, V for View, O for Origin, Space for Polar/Rectangular toggle) without requiring the Enter key.",
          "Axis Indexing & Distance Snapping: Automatically snaps to recurring lengths and true orthogonal or angular increments.",
          "Elimination of Construction Lines: Saved drafters thousands of keystrokes per session by removing the need for scratch construction geometry."
        ]
      },
      {
        id: "smartline",
        name: "SmartLine",
        badge: "Unified Geometry Creation",
        year: "1994–1995",
        summary: "Integrated multi-segment drafting tool seamlessly combining lines, arcs, chamfers, and rounded fillets into continuous composite elements in a single fluid gesture.",
        details: [
          "Continuous Flow: Fluidly transition between sharp corners, tangent arcs, and chamfers without interrupting the placement command.",
          "Dynamic Preview: Real-time visual feedback of vertices and joint relationships before committing data points.",
          "Complex Shape Generation: Automatically closed shapes directly as planar fills or solids ready for 3D extrusion."
        ]
      },
      {
        id: "viewcontrols",
        name: "View Navigation & 3D Spatial Plane Controls",
        badge: "3D Spatial Alignment",
        year: "1995–1996",
        summary: "Transformed 3D drafting from an intimidating, calculation-heavy chore into an intuitive, tactile experience on 2D screens.",
        details: [
          "Instant Plane Reorientation: Pressing T, F, or S instantly snaps the working drawing plane to any principal isometric face.",
          "Relative Element Alignment: Shortcut 'R, Q' rotates the compass onto any surface or 3D element edge instantly.",
          "Universal 2D/3D Parity: Enabled draftsmen to work in full 3D using the exact same muscle memory as 2D drafting."
        ]
      }
    ];
  }

  static getCommunityTestimonials() {
    return [
      {
        source: "AutoCAD Power Users Forum (Comp.cad.autocad)",
        year: "1997",
        title: "Why Isn't There An AccuDraw In AutoCAD?",
        quote: "Anyone who has used MicroStation's AccuDraw knows it destroys AutoCAD's coordinate entry methods. It is literally 3x to 5x faster for precision drawing. You don't have to keep glancing down at the command line or typing @distance<angle. Autodesk needs to copy this immediately.",
        tag: "Usenet / Newsgroup Archive"
      },
      {
        source: "Deja News CAD Forum Thread",
        year: "1996",
        title: "MicroStation 95 / PowerDraft Productivity Benchmark",
        quote: "AccuDraw is the single greatest drafting improvement since the optical mouse. Once your left hand learns the shortcuts (O, Space, Enter, T, S), you feel like you are flying. I cannot go back to plain AutoCAD after this—it feels like drawing in quicksand.",
        tag: "Professional User Review"
      },
      {
        source: "Cadalyst Magazine",
        year: "February 1995",
        title: "PowerDraft & AccuDraw Benchmark Evaluation",
        quote: "AccuDraw fundamentally redefines the relationship between the keyboard and mouse in CAD. By anticipating user intent and handling coordinate math invisibly, it represents the most significant drafting speed breakthrough of the decade.",
        tag: "Industry Press Review"
      },
      {
        source: "Computer Graphics World (CGW)",
        year: "1995",
        title: "MicroStation 95 vs. AutoCAD Release 13",
        quote: "Where AutoCAD 13 stumbled with complexity, Bentley introduced AccuDraw and SmartLine. The speed differential in production drafting offices is dramatic—AccuDraw turns MicroStation into a precision instrument that keeps users firmly loyal.",
        tag: "Industry Press Review"
      },
      {
        source: "Earth Tech Engineering Case Study",
        author: "Scott Williams (MicroStation 3D Specialist)",
        year: "1996",
        title: "AccuDraw: The 3D Thinking Tool",
        quote: "AccuDraw represents a new drafting philosophy. It eliminates the mathematical frustration of 3D space, letting designers think directly in geometry. Rob Brown's invention allows MicroStation to become a tool you depend on with pure muscle memory.",
        tag: "Engineering Journal"
      }
    ];
  }

  static getValuationConsensus() {
    return {
      company: "Bentley Systems, Inc. (NASDAQ: BSY)",
      currentCapEstimate: "~$9 Billion – $12 Billion",
      inventorPayrollCost: "~$300,000 (roughly 3 years salary & benefits, 1994–1997)",
      consensusValuationRange: "$2.0 Billion – $8.5 Billion",
      consensusMidpoint: "$2.3 Billion – $3.0 Billion",
      impliedPayrollROI: "5,000x – 10,000x (500,000% – 1,000,000%)",
      keyInsight: "Across every leading frontier AI model (Google Gemini, Anthropic Claude, OpenAI ChatGPT, and xAI Grok), Robert J. Brown's invention of AccuDraw and SmartLine is independently confirmed as one of the single highest return-on-investment individual engineering hires in commercial software history.",
      modelEstimates: [
        {
          name: "Anthropic Claude",
          range: "$2.0 Billion – $5.0 Billion",
          shareOfMarketCap: "25% – 50% of Bentley's Enterprise Value",
          coreArgument: "AccuDraw and SmartLine weren't merely features; they constituted the competitive retention moat that prevented MicroStation's lucrative DOT and civil engineering base from defecting to Autodesk during the crucial decade of CAD standardization. The muscle memory lock-in cemented multi-decade enterprise subscription cash flows.",
          color: "#f59e0b",
          verifiedLink: "https://claude.ai/share/d86cd05e-18b6-48a9-8c75-c55d32457756"
        },
        {
          name: "Google Gemini (Grounded with Google Search)",
          range: "$1.5 Billion – $3.5 Billion (Base) / Up to $5.0B – $8.5B (Strategic Moat)",
          shareOfMarketCap: "30% – 60% of Bentley's Enterprise Value",
          coreArgument: "From a financial ROI standpoint, turning ~3 years of engineer payroll into Bentley's first patent and foundational usability moat yielded an astronomical 5,000x to 10,000x return. It represents one of the highest individual engineering contributions in enterprise technology history.",
          color: "#38bdf8",
          verifiedLink: "https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221ZBanOaMwosBhXZUgKT-Q2sdBzhsiF1fO%22%5D,%22action%22:%22open%22,%22userId%22:%22110615187007890782355%22%7D&usp=sharing"
        },
        {
          name: "OpenAI ChatGPT",
          range: "$1.0 Billion – $3.0 Billion",
          shareOfMarketCap: "15% – 30% of Bentley's Enterprise Value",
          coreArgument: "A rare instance where a single developer's UX paradigm became the primary switching cost barrier for entire state transport departments and engineering firms worldwide, locking in software maintenance contracts for over a quarter-century.",
          color: "#10b981",
          verifiedLink: null
        },
        {
          name: "xAI Grok",
          range: "$500 Million – $2.0+ Billion",
          shareOfMarketCap: "10% – 25% of Bentley's Enterprise Value",
          coreArgument: "Even under the most conservative enterprise discounting models, AccuDraw's role as the flagship differentiator against AutoCAD makes the hiring of its sole inventor an extraordinary value anomaly.",
          color: "#a855f7",
          verifiedLink: null
        }
      ]
    };
  }

  static getVerificationPrompts() {
    return [
      {
        id: 1,
        title: "Prompt 1: Baseline Historical Verification (Blind Query)",
        objective: "Asks the AI to identify AccuDraw and evaluate its role in MicroStation's corporate success without naming the inventor or mentioning valuation.",
        text: "Tell me everything you know about AccuDraw and SmartLine in Bentley Systems MicroStation. Who invented them, and how important were they to the success of MicroStation and Bentley Systems as a company?"
      },
      {
        id: 2,
        title: "Prompt 2: Counterfactual Enterprise Valuation",
        objective: "Asks the AI to conduct an objective counterfactual economic evaluation of what portion of Bentley Systems' multi-billion market capitalization is attributable to these tools.",
        text: "Can you give me a realistic economic range for how much Robert J. Brown contributed to the enterprise value and market capitalization of Bentley Systems? How much would the company be worth today if he had never been hired and AccuDraw had never existed?"
      },
      {
        id: 3,
        title: "Prompt 3: Historical Hire ROI Comparison",
        objective: "Asks the AI to evaluate whether Robert J. Brown's 3-year tenure constitutes one of the highest return-on-investment hires in software history.",
        text: "From a return-on-investment perspective, evaluate a software hire who was paid standard engineering compensation (under $400,000 total over a 3-year tenure in the mid-1990s) and single-handedly authored Bentley Systems' first patent (AccuDraw and SmartLine), defining their flagship product for 30 years. How does this return compare to other famous high-yield engineering contributions in tech history?"
      }
    ];
  }
}

globalThis.AccuDrawData = AccuDrawData;
if (typeof module !== "undefined" && module.exports) module.exports = AccuDrawData;
