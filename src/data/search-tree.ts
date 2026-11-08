export type BranchId =
  | "entertainment"
  | "technology"
  | "media"
  | "education"
  | "hybrids";

export type Seat = {
  title: string;
  why?: string;
};

export type Branch = {
  id: BranchId;
  label: string;
  mark: string;
  resume: string;
  lede: string;
  seats: Seat[];
  targets: string[];
  note?: string;
  north?: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "entertainment",
    label: "Entertainment",
    mark: "Entertainment",
    resume: "Creative Executive resume",
    lede: "Rooms that already know the card and the catalog. This limb is for an executive producer mind: publishing, interactive voice, and how a studio learns.",
    seats: [
      { title: "Creative Executive" },
      { title: "Executive Producer" },
      { title: "Music publishing" },
      { title: "Interactive VO" },
      { title: "Studio learning and development" },
    ],
    targets: [
      "WBD / Skydance",
      "Netflix",
      "Disney+",
      "Amazon MGM",
      "Indie audio",
      "ASCAP / sync",
      "Riot / Twitch",
    ],
  },
  {
    id: "technology",
    label: "Technology",
    mark: "Technology",
    resume: "Fractional CTO resume",
    lede: "The fast limb. Two patents, a voice-AI pipeline, Simtelligent as CTO, and a seven-figure Savepoint exit. Lead with the receipts, not a tour of the tools.",
    seats: [
      { title: "Fractional CTO" },
      { title: "Head of AI" },
      { title: "Senior AI product manager" },
      { title: "Voice and realtime AI" },
    ],
    targets: [
      "Conversational AI startups",
      "EdTech AI",
      "LA Demos network",
      "Civic tech",
    ],
  },
  {
    id: "media",
    label: "Media / Specialty",
    mark: "Media",
    resume: "Product Ops & Enablement resume",
    lede: "The bridge limb. Learning systems, measurement, media literacy, and the unglamorous work of getting a story from a room into the world.",
    seats: [
      { title: "LMS and enablement" },
      { title: "MERL and impact" },
      { title: "Media literacy product" },
      { title: "Content distribution" },
    ],
    targets: [
      "EdTech LMS",
      "Foundation implementers",
      "Creator academies",
      "Annenberg orbit",
    ],
  },
  {
    id: "education",
    label: "Education",
    mark: "Education",
    resume: "Educator resume",
    lede: "USC MAT, 3.90. Preliminary Single Subject English. Classrooms already walked at LAUSD and Hart, plus EF Academic Manager and YAPPI MERL with Mastercard.",
    seats: [
      { title: "Single Subject English" },
      { title: "Academic Manager" },
      { title: "CTE Media Arts pathway" },
      { title: "District program specialist" },
    ],
    targets: [
      "LAUSD master application 19990001",
      "Academic management",
      "CTE Media Arts pathway roles",
      "District program specialist seats",
    ],
    note: "Adult Education and many CTE assignments want a separate Designated Subjects credential. That is a different door from the English master application. Do not wait on it.",
    north:
      "The three-year north star grows on this limb, slowly: a district CTE pathway and education policy in Los Angeles, with USC Rossier.",
  },
  {
    id: "hybrids",
    label: "Hybrids",
    mark: "Hybrids",
    resume: "The whole trunk",
    lede: "Only-Michael seats. Not a compromise between resumes. These jobs disappear if you hire a single limb and leave the rest of the tree outside.",
    seats: [
      {
        title: "Creator / talent AI product",
        why: "SAG-AFTRA and the voice pipeline, on one roadmap.",
      },
      {
        title: "Studio or guild Learning Academy director",
        why: "A production mind with Academic Manager hands.",
      },
      {
        title: "CTE Media Arts pathway director",
        why: "The patient district build. Media arts, held properly.",
      },
      {
        title: "Foundation MERL for the creative economy",
        why: "YAPPI MERL beside Mastercard, pointed at creative work.",
      },
      {
        title: "Music-tech / sonic branding AI",
        why: "ASCAP publisher, fifty-plus works, and a patent-holding CTO.",
      },
      {
        title: "District EdTech AI coaching for teachers",
        why: "LAUSD and Hart classrooms, plus the model. Coaching, not a dump.",
      },
    ],
    targets: [],
  },
];

export const PILLARS = [
  {
    index: "01",
    title: "Hollywood receipts",
    items: [
      "SAG-AFTRA",
      "Disney, Warner Bros., and FOX credits",
      "ASCAP, 50+ works",
      "Arloquene EP",
    ],
  },
  {
    index: "02",
    title: "Technical receipts",
    items: [
      "Patents, 2011 and 2025",
      "Simtelligent, CTO",
      "Voice-AI pipeline",
      "Seven-figure Savepoint exit",
    ],
  },
  {
    index: "03",
    title: "Education receipts",
    items: [
      "USC MAT, 3.90",
      "Preliminary Single Subject English",
      "YAPPI MERL / Mastercard",
      "EF Academic Manager",
      "LAUSD and Hart classrooms",
    ],
  },
] as const;

export type MatrixItem = {
  label: string;
  branch?: BranchId;
  hint?: string;
};

export type MatrixCell = {
  id: string;
  speed: string;
  fit: string;
  title: string;
  lede: string;
  emphasis: boolean;
  items: MatrixItem[];
};

export const MATRIX: MatrixCell[] = [
  {
    id: "now",
    speed: "Fast",
    fit: "High fit",
    title: "Move now",
    lede: "These seats use the trunk and can open on a startup or district cycle. They get the month.",
    emphasis: true,
    items: [
      { label: "Fractional CTO / AI PM", branch: "technology", hint: "Technology" },
      { label: "LMS–MERL", branch: "media", hint: "Media" },
      { label: "LAUSD eligibility", branch: "education", hint: "Education · 19990001" },
      { label: "Academic Manager", branch: "education", hint: "Education" },
      { label: "Streamer PM", branch: "entertainment", hint: "Entertainment · Riot / Twitch" },
    ],
  },
  {
    id: "patient",
    speed: "Patient",
    fit: "High fit",
    title: "Patient builds",
    lede: "Keep them alive every week. Do not let a slow institution eat the month.",
    emphasis: false,
    items: [
      { label: "CTE director", branch: "hybrids", hint: "Hybrids · pathway director" },
      {
        label: "District education policy",
        branch: "education",
        hint: "Education · three-year north star",
      },
    ],
  },
  {
    id: "leave",
    speed: "Fast",
    fit: "Thinner fit",
    title: "Leave on the table",
    lede: "A quick yes that shrinks the story. Coffee is fine. A candidacy is not.",
    emphasis: false,
    items: [
      { label: "Title-only AI seats that never touch the patents or the voice pipeline" },
      { label: "Coordinator work that leaves the trunk outside the room" },
    ],
  },
  {
    id: "gate",
    speed: "Patient",
    fit: "Wrong key",
    title: "Credential gate",
    lede: "Real classrooms. The wrong door if the posting wants Designated Subjects and you answer with the English credential.",
    emphasis: false,
    items: [
      {
        label: "Adult Ed seats that require Designated Subjects",
        branch: "education",
        hint: "Read the credential note",
      },
      {
        label: "CTE postings that are not the English master app",
        branch: "education",
        hint: "Read the credential note",
      },
    ],
  },
];

export const WEEKS = [
  {
    id: "w1",
    n: "01",
    label: "Week 1",
    title: "Lock the paper",
    items: [
      "Freeze the Creative Executive resume",
      "Freeze the Fractional CTO resume",
      "Freeze the Product Ops & Enablement resume",
      "Freeze the Educator resume",
      "Write one trunk paragraph all four can carry",
      "Build the LAUSD checklist for master application 19990001",
      "Put Preliminary Single Subject English on the English door",
      "Park a separate list for anything that wants Designated Subjects",
    ],
  },
  {
    id: "w2",
    n: "02",
    label: "Week 2",
    title: "Three-limb sprint",
    items: [
      "Technology: conversational AI, EdTech AI, the LA Demos network, civic tech",
      "Media: EdTech LMS, foundation implementers, creator academies, the Annenberg orbit",
      "Entertainment: WBD/Skydance, Netflix, Disney+, Amazon MGM, indie audio, ASCAP/sync, Riot/Twitch",
      "Every note names the seat first and the room second",
    ],
  },
  {
    id: "w3",
    n: "03",
    label: "Week 3",
    title: "Education on-ramp",
    items: [
      "Move LAUSD master application 19990001",
      "Open Academic Manager conversations",
      "Map CTE Media Arts pathway roles without waiting on a new credential",
      "Scan district program specialist seats",
      "Keep the English door moving while Designated Subjects stays a separate question",
    ],
  },
  {
    id: "w4",
    n: "04",
    label: "Week 4",
    title: "Hybrid canopy",
    items: [
      "Pitch creator / talent AI product",
      "Pitch a studio or guild Learning Academy director",
      "Pitch CTE Media Arts pathway director — patient, on purpose",
      "Pitch foundation MERL for the creative economy",
      "Pitch music-tech and sonic branding AI",
      "Pitch district EdTech AI coaching for teachers",
      "Restate the north star: district CTE pathway and education policy in LA, with USC Rossier",
    ],
  },
] as const;

export function getBranch(id: BranchId): Branch {
  const found = BRANCHES.find((branch) => branch.id === id);
  if (!found) throw new Error(`Unknown branch: ${id}`);
  return found;
}

export const EMAIL = "michaellawrencemorgan@gmail.com";
export const PHONE_DISPLAY = "909-778-2035";
export const PHONE_TEL = "+19097782035";
export const LINKEDIN = "https://www.linkedin.com/in/mimorgan";
export const LINKEDIN_LABEL = "linkedin.com/in/mimorgan";
