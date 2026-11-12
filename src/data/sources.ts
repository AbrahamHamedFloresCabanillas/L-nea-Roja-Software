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

  // Regla 02 · patrones oscuros y diseño adictivo
  { id: "ftc-amazon", title: "FTC Secures Historic $2.5 Billion Settlement Against Amazon", outlet: "Comisión Federal de Comercio de EE. UU. (FTC)", year: "2025", url: "https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon" },

  // Regla 03 · impacto ambiental
  { id: "batterygate-fr", title: "Apple Has Been Fined €25 Million for Deliberately Slowing Down iPhones in 2017", outlet: "iFixit", year: "2020", url: "https://www.ifixit.com/News/35519/apple-has-been-fined-e25-million-for-deliberately-slowing-down-iphones-in-2017" },
  { id: "batterygate-us", title: "Apple to settle iPhone slowdown lawsuit for up to $500m", outlet: "Silicon UK", year: "2020", url: "https://www.silicon.co.uk/mobility/5g/apple-settle-iphone-slowdown-lawsuit-334130" },
  { id: "apple-per", title: "iPhone 13 Product Environmental Report (81% de emisiones en producción)", outlet: "Apple", year: "2021", url: "https://www.apple.com/environment/" },

  // Monopolios · tienda de apps y buscador
  { id: "epic", title: "Epic v. Apple: the Ninth Circuit weighs in", outlet: "Ashurst Perkins Coie", year: "2025", url: "https://www.ashurstperkinscoie.com/en/insights/epic-v-apple-the-ninth-circuit-weighs-in/" },
  { id: "dma", title: "Commission finds Apple and Meta in breach of the Digital Markets Act", outlet: "Comisión Europea", year: "2025", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_25_1085" },
  { id: "google-doj", title: "Judge bars Google from exclusive search deals but says it can keep Chrome", outlet: "ABA Journal", year: "2025", url: "https://www.abajournal.com/syndicated/article/judge-bars-google-from-exclusive-search-deals-but-says-it-can-keep-chrome" },

  // Bossware
  { id: "lft", title: "Ley Federal del Trabajo, art. 330-I (teletrabajo)", outlet: "Cámara de Diputados", year: "texto vigente", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf" },
  { id: "lfpdppp", title: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (DOF 20/03/2025)", outlet: "Cámara de Diputados", year: "2025", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" },
  { id: "hm", title: "Hamburg Commissioner fines H&M 35.3 million euro for data protection violations in service centre", outlet: "Comité Europeo de Protección de Datos", year: "2020", url: "https://www.edpb.europa.eu/news/national-news/2020/hamburg-commissioner-fines-hm-353-million-euro-data-protection-violations_en" },

  // Marco deontológico
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
  { file: "centro-datos-cern.jpg", title: "CERN Computer Center 03", author: "SimonWaldherr", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:CERN_Computer_Center_03.jpg" },
  { file: "pantalla-frustracion.jpg", title: "Tired business woman working on laptop at home", author: "Shixart1985", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Tired_business_woman_working_on_laptop_at_home.jpg" },
  { file: "agbogbloshie.jpg", title: "Agbogbloshie, Ghana — September 2019", author: "Muntaka Chasant", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Agbogbloshie,_Ghana_-_September_2019.jpg" },
  { file: "centro-operaciones.jpg", title: "NOC-IUPUI", author: "Alan Levine", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:NOC-IUPUI.jpg" },
];
