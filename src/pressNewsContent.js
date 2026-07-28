// Content for the Press News page — sourced from pressnews.md.
// Images / logos / video are added later; placeholders reference these labels by id.

export const pressKicker =
  "Since 1998 · Founder of Virtualinfocom · Global Speaker · AI · Gaming · DeepTech";

// Masthead dateline strip (broadsheet front-page).
export const pressDateline = [
  { k: "Edition", v: "Global" },
  { k: "Desk", v: "Press & Media" },
  { k: "Bureau", v: "Kolkata · Worldwide" },
  { k: "Since", v: "1998" },
];

// Front-page counters that read like a newsroom masthead.
export const pressStats = [
  { n: "80+", l: "Press Features" },
  { n: "20+", l: "Media Houses" },
  { n: "15", l: "Broadcast Segments" },
  { n: "6", l: "Countries Covered" },
];

// Featured broadcast still for the hero "ON AIR" frame.
export const heroBroadcast = {
  channel: "CNBC AWAAZ",
  segment: "UDAAN · BUSINESS & FINANCE",
  timecode: "00:14:22",
  caption: "CNBC Awaaz Udaan television panel — Founder-Director, Virtualinfocom",
  id: "pn-hero-cnbc",
};

// Press wall — media houses that have covered the work (marquee nameplates).
export const mediaHouses = [
  "TEDx",
  "Startup India",
  "AWS",
  "Diplomatic World",
  "CNBC TV18",
  "The Economic Times",
  "Business Standard",
  "Times of India",
  "Hindustan Times",
  "The Statesman",
  "Kantipur Media",
  "Dainik Jagran",
  "Anandabazar Patrika",
  "TV9 Bangla",
  "ABP Ananda",
  "Dainik Bhaskar",
  "DD Bangla",
  "WASME",
  "The SME India",
  "MyFinB",
  "Bizventure",
];

// Featured Coverage — front-page: one lead story + stacked secondaries.
export const featuredLead = {
  id: "pn-feat-cnbc",
  source: "CNBC Awaaz",
  tag: "Business Television",
  title: "CNBC Awaaz Udaan Business Feature",
  dek: "Arijit Bhattacharyya appeared on CNBC Awaaz's Udaan platform in a business and finance discussion, shown as Founder-Director of Virtualinfocom and positioned within entrepreneurship, enterprise growth and market-facing conversations.",
};

export const featuredStories = [
  {
    id: "pn-feat-iit",
    source: "LegacyIndia",
    tag: "Institutional Collaboration",
    title: "IIT ISM CIIE Foundation MoU Coverage",
    dek: "Coverage of the collaboration between CIIE IIT ISM Foundation and Coinnovate Ventures — connected with startup mentoring, investor access, innovation culture and entrepreneurship support.",
  },
  {
    id: "pn-feat-showcase",
    source: "Newspaper",
    tag: "Investor Interest",
    title: "East India Startup Showcase: ₹4.6 Cr Investor Interest",
    dek: "Jamshedpur newspaper coverage reporting investor interest of ₹4.6 crore across promising startups at the East India Startup Showcase Day, linked with regional startup growth.",
  },
  {
    id: "pn-feat-japan",
    source: "International",
    tag: "Global Platform",
    title: "Japan Gaming Industry Connection",
    dek: "An archive image with Yasuhiro Fukushima, founder of Square Enix, connecting Arijit's gaming, IP and entertainment-technology journey with Japan's global game-development ecosystem.",
  },
];

// National & Business Media — a pinned "clippings board".
export const clippings = [
  {
    id: "pn-clip-et",
    source: "The Economic Times",
    title: "Economic Times Business Media Feature",
    dek: "A business-facing view of Arijit's work across entrepreneurship, technology leadership, startup mentoring, innovation and ecosystem building.",
    tilt: -3,
  },
  {
    id: "pn-clip-hindu",
    source: "The Hindu",
    title: "The Hindu Technology & Entrepreneurship Coverage",
    dek: "A national newspaper reference connecting Arijit's work with technology, entrepreneurship and public business discourse.",
    tilt: 2.5,
  },
  {
    id: "pn-clip-ht",
    source: "Hindustan Times",
    title: "Hindustan Times Startup & Business Feature",
    dek: "Mainstream newspaper coverage tied to startup conversations, entrepreneurship visibility and the wider business ecosystem.",
    tilt: 1.5,
  },
  {
    id: "pn-clip-toi",
    source: "Times of India",
    title: "Times of India Mainstream Media Mention",
    dek: "A mainstream media reference adding national press credibility across recognizable, public-facing coverage.",
    tilt: -2,
  },
  {
    id: "pn-clip-techsauce",
    source: "Techsauce",
    title: "Techsauce Global Startup Platform Coverage",
    dek: "An international startup and technology-platform reference connecting Arijit's public profile with cross-border ecosystem conversations.",
    tilt: 3,
  },
  {
    id: "pn-clip-telegraph",
    source: "The Telegraph",
    title: "The Telegraph Regional Business Coverage",
    dek: "Regional business-media coverage widening the archive beyond metro platforms across eastern India.",
    tilt: -1.5,
  },
  {
    id: "pn-clip-magazine",
    source: "Magazine Feature",
    title: "Global Speaking & Innovation Feature",
    dek: "A profile-style feature supporting the wider narrative: global speaking, entrepreneurship, technology, mentoring and innovation-led work.",
    tilt: 2,
  },
];

// Digital Features & Interviews — an "On the Record" index.
export const interviews = [
  {
    id: "pn-int-brilliantread",
    source: "BrilliantRead",
    kind: "Interview",
    title: "Angel Investor, Serial Entrepreneur, Mentor & TEDx Speaker",
    dek: "A long-form entrepreneurial interview covering Arijit's founder journey, startup work, mentoring and public leadership profile.",
    action: "Read",
    url: "https://www.brilliantread.com/interview-with-arijit-bhattacharyya-angel-investor-serial-entrepreneur-mentor-tedx-speaker/",
  },
  {
    id: "pn-int-thinkingaloud",
    source: "Thinking Aloud",
    kind: "Exclusive Interview",
    title: "Exclusive Interview with Founder & CEO, Virtualinfocom",
    dek: "A business-media interview positioning Arijit as Founder and CEO of Virtualinfocom within a startup and entrepreneurship context.",
    action: "Read",
    url: "https://stage.thinkingaloud.in/index.php?page=6",
  },
  {
    id: "pn-int-askaninvestor",
    source: "Ask An Investor",
    kind: "Podcast / Video",
    title: "Serial Entrepreneur, Technologist & Angel Investor",
    dek: "A video conversation focused on entrepreneurship, investing, technology, business building and startup ecosystem thinking.",
    action: "Watch",
    url: "https://www.youtube.com/watch?v=MsrJTktx7HA",
  },
  {
    id: "pn-int-successtales",
    source: "Success Tales",
    kind: "Founder Profile",
    title: "Founder & CEO, Virtualinfocom",
    dek: "A video-led founder profile presenting Arijit as a serial entrepreneur, angel investor, technologist and global business traveller.",
    action: "Watch",
    url: "https://www.youtube.com/watch?v=7q-4E_QpnVg",
  },
  {
    id: "pn-int-thinkers360",
    source: "Thinkers360",
    kind: "Thought Leader Profile",
    title: "Founder at Virtualinfocom",
    dek: "A thought-leader profile covering AI, AR, VR, blockchain, entrepreneurship, startups, innovation and media experience.",
    action: "Read",
    url: "https://www.thinkers360.com/tl/profiles/view/3513",
  },
  {
    id: "pn-int-digitalconfex",
    source: "DigitalConfex",
    kind: "Speaker Profile",
    title: "Next-Gen Gaming & New Technologies",
    dek: "A speaker profile connecting Arijit with gaming, deep technology, Startup India jury credibility and global innovation platforms.",
    action: "Read",
    url: "https://digitalconfex.com/speaker/arijit-bhattacharyya/",
  },
  {
    id: "pn-int-iimcip",
    source: "IIM Calcutta Innovation Park",
    kind: "Investor Profile",
    title: "Investor & Mentor Profile",
    dek: "An institutional profile connecting Arijit with startup mentoring, investment, VR, AR and technology advisory.",
    action: "Read",
    url: "https://www.iimcip.org/our-network/investor/profile?det=MjQ4",
  },
  {
    id: "pn-int-diplomaticclub",
    source: "The Diplomatic Club",
    kind: "Global Profile",
    title: "Entrepreneur Since 1998",
    dek: "A global profile across entrepreneurship, public speaking, TEDx, diplomacy, technology and international networks.",
    action: "Read",
    url: "https://www.thediplomaticclub.org/arijit-bhattacharyya/",
  },
];

// A pull-quote that anchors the interview index.
export const interviewQuote = {
  text: "A founder-focused archive — entrepreneurship, investment, mentoring, TEDx speaking and the journey behind building technology ventures.",
  by: "Across founder interviews & profiles",
};

// TV & Video Coverage — a broadcast video wall.
export const broadcasts = [
  {
    id: "pn-tv-nepal",
    label: "International TV",
    channel: "Kantipur TV",
    title: "Nepal Television Media Coverage",
    dek: "International television from Nepal — startup mentoring, entrepreneurship and regional innovation platforms.",
    live: false,
  },
  {
    id: "pn-tv-tedx",
    label: "Global Stage",
    channel: "TEDx",
    title: "TEDx Technology & Innovation Talk",
    dek: "A global-stage speaking reference connected to technology, startups, creative industries and future-facing innovation.",
    live: true,
  },
  {
    id: "pn-tv-ddbangla",
    label: "Public Television",
    channel: "DD Bangla",
    title: "DD Bangla VR Television Feature",
    dek: "Public television on the growth of virtual reality and Arijit's work in immersive technology education and communication.",
    live: false,
  },
  {
    id: "pn-tv-joshtalks",
    label: "Digital Video",
    channel: "Josh Talks",
    title: "Josh Talks Bengali Feature",
    dek: "A digital video feature presenting Arijit's entrepreneurial journey to a wider Bengali-speaking audience.",
    live: false,
  },
  {
    id: "pn-tv-tv9",
    label: "Television Feature",
    channel: "TV9 Bangla",
    title: "TV9 Bengali Game Development & VR Coverage",
    dek: "Coverage on game development, VR and technology-led entertainment from Bengal — games, IP, animation and interactive media.",
    live: false,
  },
  {
    id: "pn-tv-jharkhand",
    label: "Regional Broadcast",
    channel: "DD India",
    title: "Jharkhand Startup & Technology Interview",
    dek: "Broadcast-media coverage from Jharkhand — startup development, technology conversations and regional innovation visibility.",
    live: false,
  },
];

// International Coverage — a foreign-desk dateline board.
export const worldDesk = [
  {
    id: "pn-world-china-blockchain",
    country: "China",
    coord: "34.34° N, 108.94° E",
    kicker: "RAW 2018 · Blockchain Media",
    title: "China Blockchain Prediction & RAW 2018 Interview",
    dek: "International media coverage from China connected to Arijit's blockchain prediction work and technology commentary at RAW 2018.",
  },
  {
    id: "pn-world-china-film",
    country: "China",
    coord: "34.26° N, 108.95° E",
    kicker: "Xi'an Film Festival",
    title: "China Film Festival Creative Technology Coverage",
    dek: "International creative-industry coverage tied to Arijit's film, gaming, animation and entertainment-technology work in China.",
  },
  {
    id: "pn-world-finland",
    country: "Finland",
    coord: "60.19° N, 24.94° E",
    kicker: "Finland–India Ecosystem",
    title: "Finland India Innovation & Business Platform",
    dek: "Business and innovation coverage tied to Finland–India collaboration, entrepreneurship networks and cross-border technology work.",
  },
  {
    id: "pn-world-dubai",
    country: "UAE",
    coord: "25.20° N, 55.27° E",
    kicker: "Global Family Office Summit",
    title: "Dubai AI Startups & Family Office Panel",
    dek: "A Dubai investment-stage panel on AI startups and visionary entrepreneurs — family-office capital, emerging tech and global entrepreneurship.",
  },
];

// Archive Coverage — a filterable press ledger (15 records).
export const archiveFilters = [
  "All",
  "Business Chamber",
  "Startup",
  "Institution",
  "Corporate",
  "Gaming",
  "Creative Media",
  "Technology",
  "Mentoring",
];

export const archiveRecords = [
  {
    id: "pn-arc-axis",
    year: "Legacy",
    category: "Corporate",
    org: "Axis Bank Evolve",
    title: "Axis Bank Evolve SME Knowledge Series",
    dek: "Corporate business-ecosystem coverage on SME growth, entrepreneurship and mentoring founders and business communities.",
  },
  {
    id: "pn-arc-ccc",
    year: "Legacy",
    category: "Business Chamber",
    org: "Calcutta Chamber of Commerce",
    title: "Calcutta Chamber of Commerce Business Panel",
    dek: "Business chamber coverage on enterprise, sustainability, innovation and leadership conversations.",
  },
  {
    id: "pn-arc-assocham",
    year: "Legacy",
    category: "Business Chamber",
    org: "ASSOCHAM",
    title: "ASSOCHAM Business and Startup Panel",
    dek: "Industry-platform coverage on entrepreneurship, startup development and business community engagement.",
  },
  {
    id: "pn-arc-bengal",
    year: "Legacy",
    category: "Business Chamber",
    org: "Bengal Chamber",
    title: "Bengal Chamber of Commerce and Industry Session",
    dek: "A Bengal Chamber reference supporting the business, technology and industry leadership narrative.",
  },
  {
    id: "pn-arc-icc-patna",
    year: "2016",
    category: "Startup",
    org: "Indian Chamber of Commerce",
    title: "ICC StartUp Pad Patna 2016 Panel",
    dek: "Startup ecosystem coverage — founder mentoring, entrepreneurship development and early-stage conversations.",
  },
  {
    id: "pn-arc-icc-kolkata",
    year: "Legacy",
    category: "Startup",
    org: "Indian Chamber of Commerce",
    title: "ICC Startup Pad Kolkata",
    dek: "Kolkata startup-platform coverage on mentoring, pitching, investment conversations and community building.",
  },
  {
    id: "pn-arc-iift",
    year: "Legacy",
    category: "Institution",
    org: "IIFT Kolkata",
    title: "IIFT Kolkata Avaan Business Plan Session",
    dek: "Institutional entrepreneurship coverage on business-plan development and student founders.",
  },
  {
    id: "pn-arc-iim",
    year: "2020",
    category: "Institution",
    org: "IIM Bodh Gaya",
    title: "IIM Bodh Gaya YES 2020",
    dek: "Institutional coverage on entrepreneurship, youth enterprise and innovation-led learning.",
  },
  {
    id: "pn-arc-gato",
    year: "2017",
    category: "Gaming",
    org: "GATO",
    title: "GATO 2017 Gaming for Tomorrow Panel",
    dek: "Gaming and technology coverage on game development, IP, animation and interactive entertainment.",
  },
  {
    id: "pn-arc-ficci",
    year: "2017",
    category: "Creative Media",
    org: "FICCI FRAMES",
    title: "FICCI FRAMES 2017 Mumbai",
    dek: "Creative media and entertainment-industry coverage on gaming, animation, digital content and media technology.",
  },
  {
    id: "pn-arc-odisha",
    year: "2016",
    category: "Technology",
    org: "Odisha MSME Trade Fair",
    title: "Odisha MSME Trade Fair 2016",
    dek: "Technology and business ecosystem coverage on MSMEs, entrepreneurship and leading change through technology.",
  },
  {
    id: "pn-arc-nen",
    year: "Legacy",
    category: "Mentoring",
    org: "NEN Wadhwani Foundation",
    title: "NEN Wadhwani Foundation Entrepreneurship Workshop",
    dek: "Startup mentoring coverage on entrepreneurship education, founder development and ecosystem support.",
  },
  {
    id: "pn-arc-franchise",
    year: "2016",
    category: "Startup",
    org: "Franchise India",
    title: "Franchise India Summit 2016",
    dek: "Startup and business ecosystem coverage on entrepreneurship, franchise growth and business models.",
  },
  {
    id: "pn-arc-finance-clinic",
    year: "Legacy",
    category: "Startup",
    org: "Startup & MSME Ecosystem",
    title: "One Day Finance Clinic for Startups and MSMEs",
    dek: "Business-support coverage on startup finance, MSME development and practical entrepreneurship support.",
  },
  {
    id: "pn-arc-icc-funding",
    year: "Legacy",
    category: "Startup",
    org: "Indian Chamber of Commerce",
    title: "ICC Startup Funding Panel",
    dek: "Startup investment coverage on funding, founder readiness and investor conversations.",
  },
];

// Technology & Innovation Press Archive — AR/VR signal band.
export const techArchive = [
  {
    id: "pn-tech-arvr",
    tag: "AR • VR",
    title: "AR, VR & Immersive Technology",
    dek: "A technology reference across augmented reality, virtual reality, immersive experiences and future media.",
  },
  {
    id: "pn-tech-globalvr",
    tag: "Global VR",
    title: "Virtual Reality on International Platforms",
    dek: "International coverage on virtual reality, immersive innovation and global technology conversations.",
  },
  {
    id: "pn-tech-advisory",
    tag: "Tech Advisory",
    title: "Technology Advisory & Innovation",
    dek: "A founder-led reference on innovation strategy, emerging technology, startup guidance and digital transformation.",
  },
  {
    id: "pn-tech-summit",
    tag: "Tech Summit",
    title: "Technology & Industry Summit Coverage",
    dek: "Regional technology-industry coverage on speaking, innovation, startup ecosystems and business transformation.",
  },
];

// Connect / newsroom desk directory.
export const connectDesks = [
  {
    id: "desk-media",
    t: "Media & Press",
    d: "Founder interviews, business features, technology opinions and public media conversations.",
  },
  {
    id: "desk-mentoring",
    t: "Mentoring & Advisory",
    d: "Startup guidance, founder mentoring, innovation advisory and institutional programs.",
  },
  {
    id: "desk-ecosystem",
    t: "Ecosystem Building",
    d: "Accelerators, chambers, universities, investor networks and entrepreneurship platforms.",
  },
  {
    id: "desk-global",
    t: "Global Platforms",
    d: "International forums, diplomatic networks and cross-border innovation ecosystems.",
  },
];

export const connectChips = [
  "Founder since 1998",
  "Mentor & investor",
  "VR · AR · AI",
  "Global platforms",
];
