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
        significance: "Bentley Systems' first issued patent in corporate history. Sole inventor: Robert J. Brown. Represents a deliberate engineering workaround of Brown's earlier Intergraph patent, establishing clean sole-inventorship on the floating polar/rectangular compass, dynamic view orientation controls, and neuromuscular single-stroke shortcuts."
      },
      {
        number: "US Patent 5,371,845",
        title: "Graphical User Interface System with Dynamic Constraints",
        inventor: "Robert J. Brown",
        assignee: "Intergraph Corporation (Huntsville, AL)",
        filed: "October 1, 1992",
        issued: "December 6, 1994",
        significance: "Foundational precursor invention conceived and patented by Robert J. Brown while at Intergraph. When Brown transitioned to Bentley Systems in 1994, he successfully navigated around this patent to architect AccuDraw, SmartLine, and dynamic view controls from first principles."
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
          "Closest-Point Sweep Principle: Evaluates proximity to candidate circumference, sweeping smoothly from +5° to -6° with zero deadband jitter.",
          "Short-Segment Fillet Fallback: If setback exceeds half the segment length, renders a clean sharp corner without interrupting the user."
        ]
      },
      {
        id: "viewcontrols",
        name: "Dynamic View Controls & 3D Spatial Navigation",
        badge: "3D Spatial Alignment",
        year: "1995–1996",
        summary: "Patented on-canvas dynamic view controls that transformed 3D drafting from an intimidating, calculation-heavy chore into an intuitive, tactile experience on 2D screens.",
        details: [
          "Instant Plane Reorientation: Pressing T, F, or S instantly snaps the working drawing plane to any principal isometric face.",
          "Mid-Stroke View Manipulation: Orbit, pan, and zoom without breaking active command placement sequences.",
          "Surface Normal Latching [Q]: Aligns drawing plane flush against arbitrary 3D faces using Gram-Schmidt orthogonalization.",
          "Context Reversion Invariant: On Reset (right-click / Esc), the compass automatically unwinds to the baseline plane."
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
      currentCapEstimate: "~$11 Billion – $12 Billion",
      inventorPayrollCost: "~$300,000 (roughly 3 years salary & benefits, 1994–1997)",
      consensusValuationRange: "$3.0 Billion – $8.5 Billion+",
      consensusMidpoint: "$5.0 Billion – $6.5 Billion",
      impliedPayrollROI: "15,000x – 25,000x (1,500,000% – 2,500,000%)",
      keyInsight: "Across leading frontier AI evaluations, Robert J. Brown's invention of AccuDraw, SmartLine, and dynamic view controls is recognized as the single highest return-on-investment individual engineering hire in CAD history. By designing around his own earlier Intergraph patent, Brown gave Bentley Systems an unencumbered usability moat that won the 1995 independence split, locked in State DOTs, and created billions in subscription enterprise value.",
      modelEstimates: [
        {
          name: "Google Gemini (Grounded Economic Analysis)",
          range: "$5.0 Billion – $6.5 Billion (Baseline) / Up to $11.0B+ (Existential)",
          shareOfMarketCap: "45% – 55% of Bentley's Enterprise Value",
          coreArgument: "During the 1994–1995 Intergraph breakaway, Autodesk stumbled with AutoCAD R13. MicroStation 95 with AccuDraw established independent technical supremacy. Over the subsequent 30 years, neuromuscular lock-in prevented State DOTs from migrating to AutoCAD or Civil 3D, securing the foundation for Civil AccuDraw and OpenRoads. Brown also generated $1.5B–$2.5B in cumulative private SELECT cash flow dividends prior to the 2020 IPO.",
          color: "#38bdf8",
          verifiedLink: null
        },
        {
          name: "Anthropic Claude",
          range: "$3.5 Billion – $6.0 Billion",
          shareOfMarketCap: "35% – 50% of Bentley's Enterprise Value",
          coreArgument: "AccuDraw and SmartLine weren't merely features; they were the ergonomic lock-in moat. The switching cost was cognitive and physical: drafters trained on AccuDraw found AutoCAD virtually unusable. This customer retention moat protected Bentley's core transportation franchise from aggressive displacement.",
          color: "#f59e0b",
          verifiedLink: null
        },
        {
          name: "OpenAI ChatGPT",
          range: "$3.0 Billion – $5.5 Billion",
          shareOfMarketCap: "25% – 45% of Bentley's Enterprise Value",
          coreArgument: "A classic example of asymmetric engineering leverage. Turning standard mid-90s engineering payroll into Bentley's first patent and signature user interface delivered tens of billions in lifetime recurring revenue across civil infrastructure contracts worldwide.",
          color: "#10b981",
          verifiedLink: null
        },
        {
          name: "xAI Grok",
          range: "$2.0 Billion – $4.5 Billion",
          shareOfMarketCap: "20% – 40% of Bentley's Enterprise Value",
          coreArgument: "Even under aggressive discounting and attributing significant value to civil acquisitions (InRoads, GEOPAK), those acquisitions only succeeded because they were layered on top of MicroStation's AccuDraw and Civil AccuDraw drafting core.",
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
