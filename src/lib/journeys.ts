export const JOURNEYS = [
  {
    slug: "hospital-discharge-planning",
    number: "01",
    label: "Hospital to home",
    title: "My parent is coming home from hospital.",
    short: "A discharge, a fall, or a home that no longer feels safe.",
    description:
      "Get the right people involved, ask what needs to be in place, and make a plan for the first few days.",
    tag: "Start with the next 72 hours",
    className: "clay",
  },
  {
    slug: "staying-at-home",
    number: "02",
    label: "Help at home",
    title: "They need more help. What can we afford?",
    short: "Work out the support they need, and how to make it add up.",
    description:
      "Bring public support, family help and paid care into one clear picture. Start with what your parent wants to keep doing.",
    tag: "Understand your options",
    className: "sage",
  },
  {
    slug: "dementia-concerns",
    number: "03",
    label: "Memory changes",
    title: "I’m noticing changes in their memory.",
    short: "Prepare for the next conversation, without jumping to conclusions.",
    description:
      "Put your observations into words, prepare for a health appointment and find people who can help you navigate what comes next.",
    tag: "Prepare for a conversation",
    className: "sand",
  },
] as const;
export const REVIEWED = "25 September 2026";
export const SOURCES = {
  homecare: {
    name: "Ontario — home and community care",
    url: "https://www.ontario.ca/page/home-community-care",
  },
  athome: {
    name: "Ontario Health atHome",
    url: "https://ontariohealthathome.ca/home-care/",
  },
  discharge: {
    name: "Ontario Health atHome — going home checklist",
    url: "https://ontariohealthathome.ca/wp-content/uploads/2024/07/WW-Going-Home-Discharge-From-Hospital-EN.pdf",
  },
  memory: {
    name: "Alzheimer Society — First Link",
    url: "https://alzheimer.ca/en/help-support/im-healthcare-provider/making-referral-first-link",
  },
  community: { name: "211 Ontario", url: "https://211ontario.ca/" },
  communityServices: {
    name: "Ontario — community support services",
    url: "https://www.ontario.ca/page/community-support-services",
  },
  assessment: {
    name: "Alzheimer Society — preparing for a doctor’s visit",
    url: "https://alzheimer.ca/sites/default/files/documents/getting-a-diagnosis-toolkit.pdf",
  },
  sudden: {
    name: "NHS — sudden confusion (clinical background; UK service numbers)",
    url: "https://www.nhs.uk/symptoms/confusion/",
  },
  health811: {
    name: "Ontario — Health811",
    url: "https://www.ontario.ca/page/your-health",
  },
};
