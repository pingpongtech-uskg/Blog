import type { Language } from "../config/site";

type PageLead = {
  eyebrow: string;
  title: string;
  body: string;
  panelTitle: string;
  panelBody: string;
  panelPoints: string[];
  image: string;
  imageAlt: string;
};

type SiteCopy = {
  brandDescriptor: string;
  nav: {
    articles: string;
    topics: string;
    resources: string;
    about: string;
  };
  common: {
    browseResources: string;
    viewAbout: string;
    languageAvailability: string;
    relatedInsights: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    heroPrimary: string;
    heroSecondary: string;
    heroPanelEyebrow: string;
    heroPanelTitle: string;
    heroPanelBody: string;
    heroPanelPills: string[];
    heroMetrics: Array<{ label: string; value: string }>;
    coreTopicsEyebrow: string;
    coreTopicsTitle: string;
    coreTopicsBody: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredBody: string;
    trustTitle: string;
    trustBody: string;
    trustPoints: string[];
    resourcesEyebrow: string;
    resourcesTitle: string;
    resourcesBody: string;
    aboutTitle: string;
    aboutBody: string;
  };
  pages: {
    articles: PageLead;
    topics: PageLead;
    resources: PageLead;
    about: PageLead;
  };
  aboutParagraphs: string[];
};

export const siteCopy: Record<Language, SiteCopy> = {
  en: {
    brandDescriptor: "Cyber Insight Journal",
    nav: {
      articles: "Articles",
      topics: "Topics",
      resources: "Resources",
      about: "About"
    },
    common: {
      browseResources: "Browse Resources",
      viewAbout: "View About",
      languageAvailability: "Language availability",
      relatedInsights: "Related insights"
    },
    home: {
      heroEyebrow: "Cybersecurity intelligence",
      heroTitle: "Strategic cyber insight for teams building resilient systems.",
      heroBody:
        "PingPongTech turns threat signals, architecture decisions, and field lessons into clear editorial guidance for modern organizations.",
      heroPrimary: "Explore Articles",
      heroSecondary: "View Topics",
      heroPanelEyebrow: "Tri-lingual system",
      heroPanelTitle: "Designed as a multi-language research publication.",
      heroPanelBody:
        "Language entry is explicit, editorial and resource tracks stay separate, and the interface is meant to feel institutional rather than personal.",
      heroPanelPills: ["English", "繁體中文", "日本語"],
      heroMetrics: [
        { label: "Languages", value: "3" },
        { label: "Core tracks", value: "2" },
        { label: "Editorial focus", value: "Security" }
      ],
      coreTopicsEyebrow: "Core topics",
      coreTopicsTitle: "Knowledge mapped for fast orientation",
      coreTopicsBody: "Key subjects are presented as guided domains rather than an overwhelming tag cloud.",
      featuredEyebrow: "Featured insights",
      featuredTitle: "Start with the signature viewpoints",
      featuredBody: "Representative articles establish the PingPongTech lens before visitors branch into the archive.",
      trustTitle: "Built to feel like a trusted cyber think tank",
      trustBody: "The structure, tone, and interaction model prioritize signal, clarity, and institutional credibility.",
      trustPoints: [
        "Threat analysis, architecture, and practical guidance",
        "Parallel EN / Traditional Chinese / Japanese experience",
        "Weekend resources stay visible without diluting the main story"
      ],
      resourcesEyebrow: "Weekend resources",
      resourcesTitle: "Secondary by design, useful by default",
      resourcesBody: "High-value B2B references are curated as a side stream, never as the homepage's dominant message.",
      aboutTitle: "Professional positioning",
      aboutBody: "About frames PingPongTech as a research and advisory brand with a point of view, not a personal notebook."
    },
    pages: {
      articles: {
        eyebrow: "Articles",
        title: "Editorial insights for modern security teams",
        body: "The main stream focuses on threat analysis, architecture viewpoints, and field-ready guidance.",
        panelTitle: "What belongs here",
        panelBody: "Articles are the flagship surface for positioning, depth, and practical authority.",
        panelPoints: ["Threat analysis", "Architecture viewpoints", "Operator-ready guidance"],
        image: "/img/articles-ribbon.svg",
        imageAlt: "Abstract editorial flow illustration"
      },
      topics: {
        eyebrow: "Topics",
        title: "A knowledge map, not a tag dump",
        body: "Each topic becomes a guided landing page that connects perspective, related content, and operational relevance.",
        panelTitle: "How to read this section",
        panelBody: "Visitors should understand where to start, how subjects connect, and why each area matters.",
        panelPoints: ["Mapped domains", "Clear relationships", "Strategic context"],
        image: "/img/topic-map.svg",
        imageAlt: "Abstract topic network illustration"
      },
      resources: {
        eyebrow: "Resources",
        title: "Useful, curated, and kept in a separate lane",
        body: "This section collects high-value references without diluting the strategic voice of the main editorial stream.",
        panelTitle: "Weekend mode",
        panelBody: "Resources support decision-makers with reports, events, and certification references while staying secondary.",
        panelPoints: ["B2B quality filter", "No low-value deals", "Distinct from hero content"],
        image: "/img/resource-beacon.svg",
        imageAlt: "Abstract resource beacon illustration"
      },
      about: {
        eyebrow: "About",
        title: "A cybersecurity research and advisory voice, not a personal log",
        body: "PingPongTech is positioned as a professional brand that turns systems thinking and field lessons into strategic guidance.",
        panelTitle: "Brand intent",
        panelBody: "This page explains the method, credibility signals, and the role the publication plays for readers.",
        panelPoints: ["Professional posture", "Method-driven", "Future consulting ready"],
        image: "/img/about-crest.svg",
        imageAlt: "Abstract brand crest illustration"
      }
    },
    aboutParagraphs: [
      "The site architecture emphasizes trust, multilingual consistency, and a clear distinction between flagship editorial analysis and weekend resource curation.",
      "As the project grows, this page can expand with methodology notes, editorial principles, credibility markers, and future consulting pathways."
    ]
  },
  "zh-tw": {
    brandDescriptor: "資安洞察期刊",
    nav: {
      articles: "文章",
      topics: "主題",
      resources: "資源",
      about: "關於"
    },
    common: {
      browseResources: "瀏覽資源",
      viewAbout: "查看關於",
      languageAvailability: "語言版本",
      relatedInsights: "相關洞察"
    },
    home: {
      heroEyebrow: "資安情報與策略研究",
      heroTitle: "為現代團隊提供可執行的資安洞察與架構判斷。",
      heroBody:
        "PingPongTech 將威脅訊號、架構決策與實務經驗整理成清楚可信的編輯觀點，幫助組織建立更有韌性的系統。",
      heroPrimary: "查看文章",
      heroSecondary: "瀏覽主題",
      heroPanelEyebrow: "三語出版系統",
      heroPanelTitle: "以多語研究型媒體的方式被設計。",
      heroPanelBody:
        "語言入口是明確的，文章與資源有清楚分流，整體體驗更像專業機構，而不是個人筆記。",
      heroPanelPills: ["English", "繁體中文", "日本語"],
      heroMetrics: [
        { label: "語言", value: "3" },
        { label: "內容軌道", value: "2" },
        { label: "主軸", value: "資安" }
      ],
      coreTopicsEyebrow: "核心主題",
      coreTopicsTitle: "讓讀者快速定位的知識地圖",
      coreTopicsBody: "重要主題以導覽式結構呈現，而不是讓人迷路的標籤雲。",
      featuredEyebrow: "精選洞察",
      featuredTitle: "先看最能代表品牌觀點的內容",
      featuredBody: "代表作先建立 PingPongTech 的視角，再帶讀者進入完整內容系統。",
      trustTitle: "整體氣質更像可信的資安智庫",
      trustBody: "架構、語氣與互動設計都優先服務清晰度、可信度與專業定位。",
      trustPoints: [
        "聚焦威脅分析、架構觀點與實務指南",
        "英文、繁中、日文一致導覽與體驗",
        "週末資源被看見，但不會稀釋主內容"
      ],
      resourcesEyebrow: "週末資源",
      resourcesTitle: "有價值，但刻意保持附屬角色",
      resourcesBody: "高價值 B2B 參考資料被整理成支線，不搶走首頁主訊息。",
      aboutTitle: "專業定位",
      aboutBody: "About 頁承接品牌定位、方法論與專業輪廓，讓整站更像機構品牌。"
    },
    pages: {
      articles: {
        eyebrow: "文章",
        title: "面向現代資安團隊的核心編輯內容",
        body: "主內容聚焦威脅分析、架構觀點與能落地的實務指南。",
        panelTitle: "這裡放什麼",
        panelBody: "文章頁是品牌深度、專業觀點與可信度最核心的呈現面。",
        panelPoints: ["威脅分析", "架構觀點", "可執行指南"],
        image: "/img/articles-ribbon.svg",
        imageAlt: "抽象文章流動插圖"
      },
      topics: {
        eyebrow: "主題",
        title: "這裡是知識地圖，不是標籤堆疊",
        body: "每個主題都是帶路頁，串起觀點、相關文章與實務意義。",
        panelTitle: "怎麼看這一區",
        panelBody: "讀者應該能快速理解從哪裡開始、各主題如何連動，以及它們的戰略價值。",
        panelPoints: ["主題導覽", "關聯清楚", "有脈絡的理解"],
        image: "/img/topic-map.svg",
        imageAlt: "抽象知識地圖插圖"
      },
      resources: {
        eyebrow: "資源",
        title: "實用、精選，而且明確與主內容分流",
        body: "這一區收納高價值參考資料，但不會稀釋主內容的策略敘事。",
        panelTitle: "週末模式",
        panelBody: "資源頁服務決策者與研究者，提供報告、活動與認證資訊，但保持次要地位。",
        panelPoints: ["B2B 價值篩選", "不放低質優惠", "不搶 Hero 焦點"],
        image: "/img/resource-beacon.svg",
        imageAlt: "抽象資源訊號插圖"
      },
      about: {
        eyebrow: "關於",
        title: "這是一個資安研究與顧問品牌，不是個人日誌",
        body: "PingPongTech 被定位為專業品牌，將系統思維與實務經驗轉化成可理解的策略觀點。",
        panelTitle: "品牌意圖",
        panelBody: "這頁說明方法論、信任訊號，以及這個出版品牌在讀者心中應扮演的角色。",
        panelPoints: ["專業姿態", "方法驅動", "可延伸諮詢服務"],
        image: "/img/about-crest.svg",
        imageAlt: "抽象品牌紋章插圖"
      }
    },
    aboutParagraphs: [
      "整個網站架構強調信任、三語一致性，以及主編輯內容和週末資源的清楚分流。",
      "隨著專案擴充，這一頁可以逐步加入方法論說明、編輯原則、可信度訊號與未來諮詢入口。"
    ]
  },
  ja: {
    brandDescriptor: "サイバー洞察ジャーナル",
    nav: {
      articles: "記事",
      topics: "トピック",
      resources: "リソース",
      about: "概要"
    },
    common: {
      browseResources: "リソースを見る",
      viewAbout: "概要を見る",
      languageAvailability: "対応言語",
      relatedInsights: "関連インサイト"
    },
    home: {
      heroEyebrow: "サイバーセキュリティ・インテリジェンス",
      heroTitle: "現代組織に向けた、実務に落ちる戦略的サイバー洞察。",
      heroBody:
        "PingPongTech は脅威の兆候、設計判断、現場の学びを整理し、組織が活用できる編集知として届けます。",
      heroPrimary: "記事を見る",
      heroSecondary: "トピックを見る",
      heroPanelEyebrow: "3言語パブリケーション",
      heroPanelTitle: "多言語の研究誌として設計されています。",
      heroPanelBody:
        "言語導線は明確で、記事とリソースは分離され、全体体験は個人ブログより専門機関に近い印象を目指します。",
      heroPanelPills: ["English", "繁體中文", "日本語"],
      heroMetrics: [
        { label: "言語", value: "3" },
        { label: "導線", value: "2" },
        { label: "主題", value: "Security" }
      ],
      coreTopicsEyebrow: "主要トピック",
      coreTopicsTitle: "素早く全体像を掴める知識マップ",
      coreTopicsBody: "重要なテーマを、タグの羅列ではなく導線付きの領域として見せます。",
      featuredEyebrow: "注目インサイト",
      featuredTitle: "まずはブランドを代表する視点から",
      featuredBody: "代表記事で PingPongTech の視座を伝えてから、より深いアーカイブへ案内します。",
      trustTitle: "信頼できるサイバー研究機関のような佇まい",
      trustBody: "構造、語り口、インタラクションのすべてが明快さと専門性を優先します。",
      trustPoints: [
        "脅威分析、アーキテクチャ視点、実務ガイドに集中",
        "英語、繁体字中国語、日本語で一貫した体験",
        "週末リソースは可視化しつつ主役にはしない"
      ],
      resourcesEyebrow: "週末リソース",
      resourcesTitle: "役に立つが、主役にはしない",
      resourcesBody: "高価値な B2B 向け資料は補助線として整理し、トップメッセージを奪わせません。",
      aboutTitle: "プロフェッショナルな立ち位置",
      aboutBody: "概要ページではブランドの立場、方法論、専門性を明確に伝えます。"
    },
    pages: {
      articles: {
        eyebrow: "記事",
        title: "現代のセキュリティチームに向けた主要コンテンツ",
        body: "中心となるのは、脅威分析、アーキテクチャ視点、実務に落ちるガイドです。",
        panelTitle: "ここに置くもの",
        panelBody: "記事ページはブランドの深さ、視点、信頼性を最も強く示す場所です。",
        panelPoints: ["脅威分析", "設計視点", "実務ガイド"],
        image: "/img/articles-ribbon.svg",
        imageAlt: "抽象的な編集フローのイラスト"
      },
      topics: {
        eyebrow: "トピック",
        title: "タグ一覧ではなく、読むための知識マップ",
        body: "各トピックは、視点、関連コンテンツ、実務的な意味をつなぐ案内ページです。",
        panelTitle: "この見方",
        panelBody: "読者がどこから始めるべきか、テーマ同士がどうつながるかをすぐ理解できる構成にします。",
        panelPoints: ["整理された領域", "明確な関係性", "戦略的な文脈"],
        image: "/img/topic-map.svg",
        imageAlt: "抽象的なトピックネットワークのイラスト"
      },
      resources: {
        eyebrow: "リソース",
        title: "実用的で厳選され、主導線とは分離された補助トラック",
        body: "このセクションは高価値な参照情報を扱いますが、メインの編集視点を薄めません。",
        panelTitle: "週末モード",
        panelBody: "レポート、イベント、認定情報などを意思決定者向けに整理しつつ、常に副次的な位置に保ちます。",
        panelPoints: ["B2B 品質重視", "低品質な割引は置かない", "Hero を奪わない"],
        image: "/img/resource-beacon.svg",
        imageAlt: "抽象的なリソース信号のイラスト"
      },
      about: {
        eyebrow: "概要",
        title: "個人メモではなく、サイバー研究と助言のブランド",
        body: "PingPongTech は、システム思考と現場の知見を戦略的なガイダンスに変換する専門ブランドとして設計されています。",
        panelTitle: "ブランドの意図",
        panelBody: "このページでは方法論、信頼の手がかり、そして読者に対する役割を明確にします。",
        panelPoints: ["専門的な姿勢", "方法論ベース", "将来の助言導線にも対応"],
        image: "/img/about-crest.svg",
        imageAlt: "抽象的なブランドエンブレムのイラスト"
      }
    },
    aboutParagraphs: [
      "サイト構造は、信頼性、多言語の一貫性、そして旗艦コンテンツと週末リソースの明確な分離を重視しています。",
      "今後はこのページに方法論、編集原則、信頼の印、将来的なコンサルティング導線を追加できます。"
    ]
  }
};
