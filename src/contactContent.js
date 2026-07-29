// Single source of truth for every way to reach Arijit.
// Keep this in sync with the socials list in components/Footer.jsx.

export const EMAIL_GENERAL = "arijit79in@gmail.com";
export const EMAIL_BUSINESS = "arijit@virtualinfocom.net";

export const contactChannels = [
  {
    k: "business",
    label: "Business & Advisory",
    value: EMAIL_BUSINESS,
    href: `mailto:${EMAIL_BUSINESS}`,
    note: "Mentoring, investments, partnerships, corporate advisory.",
  },
  {
    k: "general",
    label: "General & Speaking",
    value: EMAIL_GENERAL,
    href: `mailto:${EMAIL_GENERAL}`,
    note: "Speaking invitations, press, collaborations, everything else.",
  },
  {
    k: "based",
    label: "Based In",
    value: "Kolkata, India",
    note: "Virtualinfocom — operating globally since 1998.",
  },
  {
    k: "response",
    label: "Response Time",
    value: "2–4 working days",
    note: "Every message is read personally. Detailed notes get replies first.",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    handle: "/in/arijitbhattacharyya",
    href: "https://www.linkedin.com/in/arijitbhattacharyya/",
  },
  { label: "X", handle: "@arijitgames", href: "https://x.com/arijitgames" },
  {
    label: "Instagram",
    handle: "@arijitin",
    href: "https://www.instagram.com/arijitin/",
  },
  {
    label: "YouTube",
    handle: "@ArijitBhattacharyya",
    href: "https://www.youtube.com/@ArijitBhattacharyya",
  },
  {
    label: "Facebook",
    handle: "/arijit.bhattacharyya",
    href: "https://www.facebook.com/arijit.bhattacharyya",
  },
];

// Routes the enquiry to the right inbox and pre-frames the subject line.
export const inquiryTypes = [
  { v: "speaking", label: "Speaking Invitation", to: EMAIL_GENERAL },
  { v: "mentoring", label: "Mentoring & Advisory", to: EMAIL_BUSINESS },
  { v: "investment", label: "Investment / Startup Pitch", to: EMAIL_BUSINESS },
  { v: "media", label: "Media, Press & Interviews", to: EMAIL_GENERAL },
  { v: "collaboration", label: "Collaboration & Partnership", to: EMAIL_BUSINESS },
  { v: "other", label: "Something Else", to: EMAIL_GENERAL },
];

export const responseNotes = [
  {
    t: "Be specific",
    d: "Company, stage, timeline and the actual decision you're stuck on. Vague notes get vague answers.",
  },
  {
    t: "Speaking briefs",
    d: "Include date, city, audience size, format and whether travel is covered.",
  },
  {
    t: "Startup pitches",
    d: "One paragraph on the problem, traction so far, and what you're raising. Decks welcome after the first reply.",
  },
];
