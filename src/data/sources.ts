/**
 * Fuentes citadas en el sitio. Cada cifra externa se verificó con búsqueda web en noviembre de 2026.
 * El número que ve el visitante es el orden en esta lista.
 */
export interface Source {
  id: string;
  title: string;
  outlet: string;
  year: string;
  url: string;
}

export const sources: readonly Source[] = [
  // Regla 01 · IA generativa
  { id: "arup", title: "Arup employee falls victim to US$25 million deepfake video call scam", outlet: "Construction Briefing (con declaraciones de Arup y de la policía de Hong Kong)", year: "2024", url: "https://www.constructionbriefing.com/news/arup-employee-falls-victim-to-us-25-million-deepfake-video-call-scam/8037338.article" },
  { id: "google-gemini", title: "Measuring the environmental impact of delivering AI at Google scale", outlet: "Google Cloud", year: "2025", url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference" },
  { id: "luccioni", title: "Power Hungry Processing: Watts Driving the Cost of AI Deployment?", outlet: "Luccioni, Jernite y Strubell · ACM FAccT", year: "2024", url: "https://arxiv.org/abs/2311.16863" },
  { id: "mittr", title: "We did the math on AI’s energy footprint", outlet: "MIT Technology Review", year: "2025", url: "https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/" },
  { id: "oviedo", title: "Energy use of AI inference, efficiency pathways, and test-time scaling", outlet: "Oviedo et al., Microsoft Research · Joule", year: "2026", url: "https://www.microsoft.com/en-us/research/?p=1170806" },
  { id: "li-water", title: "Making AI Less “Thirsty”", outlet: "Li, Yang, Islam y Ren · UC Riverside", year: "2023–2025", url: "https://arxiv.org/abs/2304.03271" },
  { id: "iea", title: "Energy and AI — Executive summary", outlet: "Agencia Internacional de Energía (IEA)", year: "2025", url: "https://www.iea.org/reports/energy-and-ai/executive-summary" },
  { id: "iea-supply", title: "Energy and AI — Energy supply for AI", outlet: "Agencia Internacional de Energía (IEA)", year: "2025", url: "https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai" },

  // Regla 02 · patrones oscuros y diseño adictivo
  { id: "ftc-amazon", title: "FTC Secures Historic $2.5 Billion Settlement Against Amazon", outlet: "Comisión Federal de Comercio de EE. UU. (FTC)", year: "2025", url: "https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon" },
  { id: "meta-states", title: "41 states sue Meta for harming the mental health of its youngest users", outlet: "Engadget", year: "2023", url: "https://www.engadget.com/forty-one-states-sue-meta-for-harming-the-mental-health-of-its-youngest-users-162521184.html" },

  // Regla 03 · impacto ambiental
  { id: "batterygate-fr", title: "Apple Has Been Fined €25 Million for Deliberately Slowing Down iPhones in 2017", outlet: "iFixit", year: "2020", url: "https://www.ifixit.com/News/35519/apple-has-been-fined-e25-million-for-deliberately-slowing-down-iphones-in-2017" },
  { id: "batterygate-us", title: "Apple to settle iPhone slowdown lawsuit for up to $500m", outlet: "Silicon UK", year: "2020", url: "https://www.silicon.co.uk/mobility/5g/apple-settle-iphone-slowdown-lawsuit-334130" },
  { id: "ewaste", title: "Global E-waste Monitor 2024", outlet: "UNITAR / UIT", year: "2024", url: "https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling" },
  { id: "eu-ecodesign", title: "Reglamento (UE) 2023/1670 — diseño ecológico de teléfonos y tabletas", outlet: "Diario Oficial de la UE", year: "2023", url: "https://eur-lex.europa.eu/eli/reg/2023/1670/oj" },
  { id: "eu-batteries", title: "Reglamento (UE) 2023/1542 — pilas y baterías", outlet: "Diario Oficial de la UE", year: "2023", url: "https://eur-lex.europa.eu/eli/reg/2023/1542/oj" },
  { id: "apple-per", title: "iPhone 13 Product Environmental Report (81% de emisiones en producción)", outlet: "Apple", year: "2021", url: "https://www.apple.com/environment/" },

  // Monopolios · tienda de apps y buscador
  { id: "epic", title: "Epic v. Apple: the Ninth Circuit weighs in", outlet: "Ashurst Perkins Coie", year: "2025", url: "https://www.ashurstperkinscoie.com/en/insights/epic-v-apple-the-ninth-circuit-weighs-in/" },
  { id: "dma", title: "Commission finds Apple and Meta in breach of the Digital Markets Act", outlet: "Comisión Europea", year: "2025", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_25_1085" },
  { id: "google-doj", title: "Judge bars Google from exclusive search deals but says it can keep Chrome", outlet: "ABA Journal", year: "2025", url: "https://www.abajournal.com/syndicated/article/judge-bars-google-from-exclusive-search-deals-but-says-it-can-keep-chrome" },

  // Bossware
  { id: "lft", title: "Ley Federal del Trabajo, art. 330-I (teletrabajo)", outlet: "Cámara de Diputados", year: "texto vigente", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf" },
  { id: "lfpdppp", title: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (DOF 20/03/2025)", outlet: "Cámara de Diputados", year: "2025", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" },
  { id: "hm", title: "Hamburg Commissioner fines H&M 35.3 million euro for data protection violations in service centre", outlet: "Comité Europeo de Protección de Datos", year: "2020", url: "https://www.edpb.europa.eu/news/national-news/2020/hamburg-commissioner-fines-hm-353-million-euro-data-protection-violations_en" },
  { id: "cnil-amazon", title: "Employee monitoring: CNIL fined Amazon France Logistique €32 million", outlet: "CNIL", year: "2024", url: "https://cnil.fr/en/employee-monitoring-cnil-fined-amazon-france-logistique-eu32-million" },
  { id: "ce-amazon", title: "Décision n.º 492830 (multa reducida a €15 M)", outlet: "Conseil d’État de Francia", year: "2025", url: "https://www.conseil-etat.fr/fr/arianeweb/CE/decision/2025-12-23/492830" },
  { id: "chetu", title: "Dutch employee fired by U.S. firm for shutting off webcam awarded €75,000 in court", outlet: "NL Times", year: "2022", url: "https://nltimes.nl/2022/10/09/dutch-employee-fired-us-firm-shutting-webcam-awarded-eu75000-court" },
  { id: "apa", title: "2023 Work in America Survey: AI and monitoring at work", outlet: "American Psychological Association", year: "2023", url: "https://www.apa.org/pubs/reports/work-in-america/2023-work-america-ai-monitoring" },
  { id: "ai-act", title: "Reglamento (UE) 2024/1689 de Inteligencia Artificial, art. 5", outlet: "Diario Oficial de la UE", year: "2024", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },

  // Marco deontológico
  { id: "acm", title: "ACM Code of Ethics and Professional Conduct", outlet: "ACM", year: "2018", url: "https://www.acm.org/code-of-ethics" },
  { id: "se-code", title: "Software Engineering Code of Ethics and Professional Practice", outlet: "ACM / IEEE-CS", year: "1999", url: "https://ethics.acm.org/code-of-ethics/software-engineering-code/" },
];

export const sourceNumber = (id: string): number => {
  const i = sources.findIndex((s) => s.id === id);
  if (i < 0) throw new Error(`Fuente desconocida: ${id}`);
  return i + 1;
};

export interface PhotoCredit {
  file: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  url: string;
}

export const photoCredits: readonly PhotoCredit[] = [
  { file: "metro-kuala-lumpur.jpg", title: "KL subway commuters", author: "Franck Michel", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:KL_subway_commuters_-_Flickr_-_Franck_Michel.jpg" },
  { file: "centro-datos-cern.jpg", title: "CERN Computer Center 03", author: "SimonWaldherr", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:CERN_Computer_Center_03.jpg" },
  { file: "pantalla-frustracion.jpg", title: "Tired business woman working on laptop at home", author: "Shixart1985", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Tired_business_woman_working_on_laptop_at_home.jpg" },
  { file: "agbogbloshie.jpg", title: "Agbogbloshie, Ghana — September 2019", author: "Muntaka Chasant", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Agbogbloshie,_Ghana_-_September_2019.jpg" },
  { file: "centro-operaciones.jpg", title: "NOC-IUPUI", author: "Alan Levine", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:NOC-IUPUI.jpg" },
];
