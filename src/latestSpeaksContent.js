export const speakerRoles = [
  "Keynote Speaker",
  "Moderator",
  "Resource Person",
  "Global Panelist",
];

export const speakerStats = [
  { n: "2,100+", l: "Events" },
  { n: "102+", l: "Countries Connected" },
  { n: "7,000+", l: "Startups Mentored" },
  { n: "6,000+", l: "Students Personally Trained" },
];

export const globalPlatforms = [
  {
    i: 1,
    t: "Academic Platforms",
    d: "Speaking, mentoring and resource person engagements across management schools, engineering campuses and institutional innovation forums.",
    tags: ["Universities", "Innovation", "Future Skills"],
  },
  {
    i: 2,
    t: "Global Forums",
    d: "International presence across AI, blockchain, investment, smart cities, gaming, entrepreneurship and future-technology platforms.",
    tags: ["AI", "Investment", "Global"],
  },
  {
    i: 3,
    t: "Industry & Chambers",
    d: "Business-facing conversations across chambers, startup ecosystems, investor communities and industry-led innovation programs.",
    tags: ["Chambers", "Startups", "Investors"],
  },
];

const thoughtLeadershipAll = [
  { cat: "Artificial Intelligence", t: "AI & GenAI", d: "How artificial intelligence and generative systems are reshaping entrepreneurship, education, governance, creativity and business strategy.", img: "AI & generative intelligence" },
  { cat: "Digital Economy", t: "Blockchain & Digital Economies", d: "Digital economies, decentralized systems, tokenization, blockchain adoption and the future of financial ecosystems.", img: "Blockchain & digital economies" },
  { cat: "Startup Ecosystems", t: "Startup & Founder Ecosystems", d: "Founder communities, innovation networks, accelerators, startup growth pathways and ecosystem-building for early-stage ventures.", img: "Startup ecosystems" },
  { cat: "Gaming & IP", t: "Gaming, IP & Storytelling", d: "Interactive entertainment, intellectual property, digital humans, virtual characters and next-generation storytelling experiences.", img: "Gaming, IP & storytelling" },
  { cat: "Immersive Tech", t: "Metaverse & VR", d: "Virtual reality, XR, metaverse platforms and immersive technologies transforming learning, collaboration and future experiences.", img: "Metaverse & VR" },
  { cat: "Global Business", t: "Global Business & Scaling", d: "Cross-border growth, international partnerships, business expansion and global innovation strategies for emerging ventures.", img: "Global business scaling" },
  { cat: "Community Impact", t: "Community & Diplomacy", d: "Technology-enabled communities, inclusion, education, diplomacy and long-term ecosystem development across markets.", img: "Community & diplomacy" },
  { cat: "Capital Networks", t: "Investment & Innovation Ecosystems", d: "Connecting founders, capital, institutions and innovation platforms into stronger startup and business-growth ecosystems.", img: "Investment & innovation" },
];

export const thoughtLeadershipFeatured = thoughtLeadershipAll[0];
export const thoughtLeadershipRest = thoughtLeadershipAll.slice(1);

export const latestSpeaks = [
  { loc: "International Speaker · Kazakhstan · Central Asia", t: "Digital Bridge Kazakhstan", sub: "AI Monetization • Physical-Digital Assets • India-MENA Access", d: "A high-value international technology platform connected with artificial intelligence, digital economies, physical-digital assets and cross-border innovation access.", tags: ["Highlight"], img: "Digital Bridge Kazakhstan" },
  { loc: "Pune • India", t: "Axis Bank Evolve Pune", sub: "MSME Digitization • Business Growth • Digital Economy", d: "A business-facing platform focused on MSME transformation, digital adoption, entrepreneurship and growth.", tags: [], img: "Axis Bank Pune" },
  { loc: "Bhubaneswar • India", t: "Axis Bank Evolve Bhubaneswar", sub: "Import Export • MSME Growth • Digital Business", d: "A regional business forum connected with MSME growth, import-export opportunities and digital business transformation.", tags: [], img: "Axis Bank Bhubaneswar" },
  { loc: "XLRI • India", t: "XLRI InGenium", sub: "Startup Ecosystem • Founder Competition • Innovation", d: "An academic entrepreneurship platform connected with startup thinking, founder evaluation and student innovation.", tags: [], img: "XLRI" },
  { loc: "USA • Global Business Platform", t: "Vyapaar Jagat USA", sub: "Venture Capital • Startup Growth • Global Innovation", d: "A venture-capital and global-business platform discussing founder growth, startup investment and international opportunity.", tags: [], img: "Vyapaar Jagat USA" },
];

export const institutionalHighlights = [
  { tag: "Management School Platform", sub: "Technology Application • Startup Ecosystem", t: "IIM Bodh Gaya", d: "A management-institution platform where technology application, entrepreneurship and India's startup ecosystem were brought into a leadership-learning context.", img: "IIM Bodh Gaya" },
  { tag: "Engineering & Entrepreneurship", sub: "Startup Funding • Founder Readiness", t: "IIT Kharagpur GES", d: "An engineering and entrepreneurship platform connecting founder readiness, startup funding conversations and innovation-led business thinking.", img: "IIT Kharagpur GES" },
  { tag: "Student Innovation Platform", sub: "Investor • Judge • Founder Evaluation", t: "NIT Durgapur Arohan", d: "A student innovation platform where emerging ideas were reviewed through the lens of founder evaluation, investor thinking and market readiness.", img: "NIT Durgapur" },
  { tag: "Hackathon & Jury Platform", sub: "Chief Guest • Jury • Student Innovation", t: "UPES Hackathon", d: "A hackathon and innovation forum focused on student-led problem solving, technology ideas and jury-led evaluation of future-ready concepts.", img: "UPES Hackathon" },
  { tag: "Future Technology Forum", sub: "VR • AR • Metaverse • Future Skills", t: "SNU VR/AR/Metaverse", d: "A future-technology academic forum focused on immersive media, VR, AR, metaverse thinking and the skills needed for the next digital economy.", img: "SNU VR/AR/Metaverse" },
];

export const advisoryChips = ["Jury", "Evaluator", "Mentor", "Advisor", "Investor Forum", "Founder Evaluation"];

export const advisoryRoles = [
  { cat: "Government Startup Evaluation", t: "National Startup India Award Jury", d: "National-level jury credibility connected with startup evaluation, public innovation and India's founder ecosystem.", tags: ["Government", "Jury", "Startups"], img: "National Startup Award" },
  { cat: "Defence • Technology • National Innovation", t: "Defence Panel & Innovation Evaluation", d: "Panel and evaluator presence connected with technology problem-solving, student innovation and national transformation conversations.", tags: ["Defence", "Panel", "Technology"], img: "Defence Panel" },
  { cat: "Accelerators • Founders • Startup Growth", t: "Techstars / Seedstars Mentoring", d: "Mentoring across accelerator ecosystems and founder-support platforms, with focus on readiness, clarity, scale and market direction.", tags: ["Techstars", "Seedstars", "Mentor"], img: "Techstars" },
  { cat: "Investment • Capital • Global Networks", t: "Family Office Investment Forum", d: "Investor-facing presence across family office, capital, funding and global business-networking platforms.", tags: ["Capital", "Family Office", "Investors"], img: "Family Office Forum" },
  { cat: "Industry Bodies • Business Leadership", t: "CII / ICC Chamber Platforms", d: "Industry-facing visibility across chambers, business forums, entrepreneurship platforms and innovation-led leadership conversations.", tags: ["CII", "ICC", "Chambers"], img: "CII" },
  { cat: "Investors • Founders • Early Stage", t: "Pre-Seed Founder Evaluation", d: "Early-stage founder evaluation, investment-readiness mentoring and venture conversations across startup ecosystems.", tags: ["Pre-Seed", "Founders", "Evaluation"], img: "Angel Investment" },
];

export const founderStats = [
  { n: "7,000+", l: "Startups Mentored", d: "Founder support across ideation, validation, pitch direction, growth strategy and investment readiness." },
  { n: "1998", l: "Founder Since", d: "A long founder journey across technology, gaming, animation, creative IP and entrepreneurship." },
  { n: "200+", l: "Founder Conversations", d: "Long-form ecosystem conversations through founder stories, podcast formats and entrepreneurship learning." },
];

export const founderRoles = [
  { cat: "Founder Readiness", t: "Startup Mentoring", d: "Guidance across business models, pitch clarity, product direction, market positioning and early-stage execution." },
  { cat: "Techstars • Seedstars", t: "Accelerator Ecosystems", d: "Mentoring exposure across startup and accelerator ecosystems supporting founders, SMEs and innovation teams." },
  { cat: "Startup Awards • Hackathons", t: "Jury & Evaluation", d: "Founder evaluation credibility across innovation competitions, government-linked startup platforms and institutional jury rooms." },
  { cat: "Capital • Pitch • Growth", t: "Investment Readiness", d: "Helping founders shape fundraising narratives, business traction, venture positioning and investor communication." },
  { cat: "ADB • Global Platforms", t: "Institutional Advisory", d: "Advisory and resource person credibility across development, innovation, entrepreneurship and future-skills conversations." },
  { cat: "Podcast • Community • Learning", t: "Founder Conversations", d: "Long-form founder storytelling, ecosystem conversations and practical learning around entrepreneurship and technology." },
];

export const speakingJourney = [
  { loc: "India", sub: "SME Knowledge • Business Growth", t: "Axis Bank Evolve", d: "A business and knowledge platform focused on entrepreneurship, growth strategy and practical innovation for India's SME ecosystem.", img: "Axis Bank" },
  { loc: "Ahmedabad", sub: "Entrepreneurship • Founder Network", t: "TiE Ahmedabad", d: "A founder-focused platform connecting entrepreneurship, startup growth and business ecosystem conversations.", img: "TiE Ahmedabad" },
  { loc: "Global Platform", sub: "Leadership • Innovation • Global Business", t: "World Leadership Conference", d: "A global leadership platform bringing together innovation, entrepreneurship, future business thinking and cross-border collaboration.", img: "World Leadership Conference" },
  { loc: "Singapore", sub: "Artificial Intelligence • Enterprise Innovation", t: "AI World Summit — Singapore", d: "A global AI platform focused on enterprise innovation, practical AI adoption and the future direction of intelligent systems.", img: "AI World Summit — Singapore" },
  { loc: "Ghana", sub: "Venture Capital • Africa • Innovation", t: "Ghana Business Summit & Awards", d: "An international summit appearance connected with venture capital, startup growth, technology innovation and investment ecosystem development.", img: "Ghana Business Summit & Awards" },
  { loc: "International Platform", sub: "Education • Innovation • Future Skills", t: "WISE Forum", d: "A future-facing platform connecting education, innovation, entrepreneurship and skills for the next generation of founders and professionals.", img: "WISE Forum" },
  { loc: "Dubai", sub: "Investors • Startups • Global Capital", t: "Dubai Investor Round Table", d: "An investor-founder conversation connecting startup opportunities, cross-border funding networks and innovation communities.", img: "Dubai Investor Round Table" },
  { loc: "Lebanon", sub: "Global Business • Technology • Ecosystems", t: "Lebanon Innovation Dialogue", d: "A cross-border innovation conversation focused on entrepreneurship, technology adoption and business ecosystem development.", img: "Lebanon Innovation Dialogue" },
  { loc: "Africa", sub: "Blockchain • Digital Economy • Emerging Tech", t: "Blockchain Africa", d: "A blockchain and digital-economy platform focused on emerging technology, innovation ecosystems and future-ready business models.", img: "Blockchain Africa" },
];
