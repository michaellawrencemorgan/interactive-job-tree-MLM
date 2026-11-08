import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Copy, i as Linkedin, n as Phone, o as Compass, r as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-unojAn-H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BRANCHES = [
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
			{ title: "Studio learning and development" }
		],
		targets: [
			"WBD / Skydance",
			"Netflix",
			"Disney+",
			"Amazon MGM",
			"Indie audio",
			"ASCAP / sync",
			"Riot / Twitch"
		]
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
			{ title: "Voice and realtime AI" }
		],
		targets: [
			"Conversational AI startups",
			"EdTech AI",
			"LA Demos network",
			"Civic tech"
		]
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
			{ title: "Content distribution" }
		],
		targets: [
			"EdTech LMS",
			"Foundation implementers",
			"Creator academies",
			"Annenberg orbit"
		]
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
			{ title: "District program specialist" }
		],
		targets: [
			"LAUSD master application 19990001",
			"Academic management",
			"CTE Media Arts pathway roles",
			"District program specialist seats"
		],
		note: "Adult Education and many CTE assignments want a separate Designated Subjects credential. That is a different door from the English master application. Do not wait on it.",
		north: "The three-year north star grows on this limb, slowly: a district CTE pathway and education policy in Los Angeles, with USC Rossier."
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
				why: "SAG-AFTRA and the voice pipeline, on one roadmap."
			},
			{
				title: "Studio or guild Learning Academy director",
				why: "A production mind with Academic Manager hands."
			},
			{
				title: "CTE Media Arts pathway director",
				why: "The patient district build. Media arts, held properly."
			},
			{
				title: "Foundation MERL for the creative economy",
				why: "YAPPI MERL beside Mastercard, pointed at creative work."
			},
			{
				title: "Music-tech / sonic branding AI",
				why: "ASCAP publisher, fifty-plus works, and a patent-holding CTO."
			},
			{
				title: "District EdTech AI coaching for teachers",
				why: "LAUSD and Hart classrooms, plus the model. Coaching, not a dump."
			}
		],
		targets: []
	}
];
var PILLARS = [
	{
		index: "01",
		title: "Hollywood receipts",
		items: [
			"SAG-AFTRA",
			"Disney, Warner Bros., and FOX credits",
			"ASCAP, 50+ works",
			"Arloquene EP"
		]
	},
	{
		index: "02",
		title: "Technical receipts",
		items: [
			"Patents, 2011 and 2025",
			"Simtelligent, CTO",
			"Voice-AI pipeline",
			"Seven-figure Savepoint exit"
		]
	},
	{
		index: "03",
		title: "Education receipts",
		items: [
			"USC MAT, 3.90",
			"Preliminary Single Subject English",
			"YAPPI MERL / Mastercard",
			"EF Academic Manager",
			"LAUSD and Hart classrooms"
		]
	}
];
var MATRIX = [
	{
		id: "now",
		speed: "Fast",
		fit: "High fit",
		title: "Move now",
		lede: "These seats use the trunk and can open on a startup or district cycle. They get the month.",
		emphasis: true,
		items: [
			{
				label: "Fractional CTO / AI PM",
				branch: "technology",
				hint: "Technology"
			},
			{
				label: "LMS–MERL",
				branch: "media",
				hint: "Media"
			},
			{
				label: "LAUSD eligibility",
				branch: "education",
				hint: "Education · 19990001"
			},
			{
				label: "Academic Manager",
				branch: "education",
				hint: "Education"
			},
			{
				label: "Streamer PM",
				branch: "entertainment",
				hint: "Entertainment · Riot / Twitch"
			}
		]
	},
	{
		id: "patient",
		speed: "Patient",
		fit: "High fit",
		title: "Patient builds",
		lede: "Keep them alive every week. Do not let a slow institution eat the month.",
		emphasis: false,
		items: [{
			label: "CTE director",
			branch: "hybrids",
			hint: "Hybrids · pathway director"
		}, {
			label: "District education policy",
			branch: "education",
			hint: "Education · three-year north star"
		}]
	},
	{
		id: "leave",
		speed: "Fast",
		fit: "Thinner fit",
		title: "Leave on the table",
		lede: "A quick yes that shrinks the story. Coffee is fine. A candidacy is not.",
		emphasis: false,
		items: [{ label: "Title-only AI seats that never touch the patents or the voice pipeline" }, { label: "Coordinator work that leaves the trunk outside the room" }]
	},
	{
		id: "gate",
		speed: "Patient",
		fit: "Wrong key",
		title: "Credential gate",
		lede: "Real classrooms. The wrong door if the posting wants Designated Subjects and you answer with the English credential.",
		emphasis: false,
		items: [{
			label: "Adult Ed seats that require Designated Subjects",
			branch: "education",
			hint: "Read the credential note"
		}, {
			label: "CTE postings that are not the English master app",
			branch: "education",
			hint: "Read the credential note"
		}]
	}
];
var WEEKS = [
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
			"Park a separate list for anything that wants Designated Subjects"
		]
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
			"Every note names the seat first and the room second"
		]
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
			"Keep the English door moving while Designated Subjects stays a separate question"
		]
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
			"Restate the north star: district CTE pathway and education policy in LA, with USC Rossier"
		]
	}
];
function getBranch(id) {
	const found = BRANCHES.find((branch) => branch.id === id);
	if (!found) throw new Error(`Unknown branch: ${id}`);
	return found;
}
var EMAIL = "michaellawrencemorgan@gmail.com";
var PHONE_DISPLAY = "909-778-2035";
var PHONE_TEL = "+19097782035";
var LINKEDIN = "https://www.linkedin.com/in/mimorgan";
var LINKEDIN_LABEL = "linkedin.com/in/mimorgan";
var TX = 520;
var TY = 356;
var MARKS = [
	{
		id: "entertainment",
		x: 156,
		y: 300,
		lx: 156,
		ly: 350,
		anchor: "middle"
	},
	{
		id: "technology",
		x: 292,
		y: 176,
		lx: 250,
		ly: 182,
		anchor: "end"
	},
	{
		id: "hybrids",
		x: 520,
		y: 86,
		lx: 520,
		ly: 56,
		anchor: "middle"
	},
	{
		id: "media",
		x: 748,
		y: 176,
		lx: 792,
		ly: 182,
		anchor: "start"
	},
	{
		id: "education",
		x: 884,
		y: 300,
		lx: 884,
		ly: 350,
		anchor: "middle"
	}
];
var PATHS = {
	entertainment: "M 520 356 C 340 356 220 330 156 300",
	technology: "M 520 356 C 430 270 350 200 292 176",
	hybrids: "M 520 356 C 520 260 520 160 520 86",
	media: "M 520 356 C 610 270 690 200 748 176",
	education: "M 520 356 C 700 356 820 330 884 300"
};
var MOBILE = [
	"hybrids",
	"entertainment",
	"technology",
	"media",
	"education"
];
function onKey(event, run) {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		run();
	}
}
function TreeMark({ active, onSelect }) {
	const idle = MARKS.filter((mark) => mark.id !== active);
	const chosen = MARKS.find((mark) => mark.id === active) ?? MARKS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileTree, {
				active,
				onSelect
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 1040 620",
				className: "h-auto w-full",
				role: "group",
				"aria-label": "Job search tree",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Job search tree" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 520 446 C 400 486 310 516 240 534",
						fill: "none",
						className: "stroke-ivory/40",
						strokeWidth: 1.5,
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 520 446 L 520 556",
						fill: "none",
						className: "stroke-ivory/40",
						strokeWidth: 1.5,
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 520 446 C 640 486 730 516 800 534",
						fill: "none",
						className: "stroke-ivory/40",
						strokeWidth: 1.5,
						strokeLinecap: "round"
					}),
					idle.map((mark) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: PATHS[mark.id],
						fill: "none",
						className: "stroke-ivory/40",
						strokeWidth: 1.5,
						strokeLinecap: "round"
					}, mark.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: PATHS[chosen.id],
						fill: "none",
						className: "stroke-brass",
						strokeWidth: 3,
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: TX,
						y1: TY,
						x2: TX,
						y2: 446,
						className: "stroke-ivory/70",
						strokeWidth: 3,
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: 540,
						y: 404,
						className: "fill-brass",
						fontSize: 16,
						children: "Trunk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootLabel, {
						x: 240,
						y: 556,
						title: "Hollywood"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootLabel, {
						x: 520,
						y: 578,
						title: "Technical"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootLabel, {
						x: 800,
						y: 556,
						title: "Education"
					}),
					MARKS.map((mark) => {
						const branch = BRANCHES.find((item) => item.id === mark.id);
						const on = mark.id === active;
						if (!branch) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							role: "button",
							tabIndex: 0,
							"aria-pressed": on,
							"aria-label": branch.label,
							className: "cursor-pointer",
							onClick: () => onSelect(mark.id),
							onKeyDown: (event) => onKey(event, () => onSelect(mark.id)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: mark.x,
									cy: mark.y,
									r: 28,
									className: "fill-transparent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: mark.x,
									cy: mark.y,
									r: 16,
									fill: "none",
									className: on ? "stroke-brass" : "stroke-transparent",
									strokeWidth: 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: mark.x,
									cy: mark.y,
									r: 7,
									className: on ? "fill-brass" : "fill-ink stroke-mist",
									strokeWidth: 1.5
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: mark.lx,
									y: mark.ly,
									textAnchor: mark.anchor,
									fontSize: 18,
									className: on ? "fill-ivory" : "fill-mist",
									children: branch.mark
								})
							]
						}, mark.id);
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-mist",
			children: "Brass is the limb you are reading. The trunk does not change. Roots are the receipts."
		})
	] });
}
function RootLabel({ x, y, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#trunk",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x,
			y,
			textAnchor: "middle",
			fontSize: 16,
			className: "fill-ivory",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x,
			y: y + 18,
			textAnchor: "middle",
			fontSize: 13,
			className: "fill-mist",
			children: "receipts"
		})]
	});
}
function MobileTree({ active, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass uppercase",
				children: "Canopy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
				id: "hybrids",
				active,
				onSelect,
				label: "Hybrids"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-mist uppercase",
				children: "Limbs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1",
				children: MOBILE.filter((id) => id !== "hybrids").map((id) => {
					const branch = BRANCHES.find((item) => item.id === id);
					if (!branch) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
						id,
						active,
						onSelect,
						label: branch.label
					}, id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: "Trunk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl",
					children: "One person. Three receipts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						"Hollywood",
						"Technical",
						"Education"
					].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#trunk",
						className: "inline-flex min-h-11 items-center border border-ivory/15 px-3 text-sm text-ivory",
						children: [name, " receipts"]
					}, name))
				})
			] })
		]
	});
}
function NodeButton({ id, label, active, onSelect }) {
	const on = id === active;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": on,
		onClick: () => onSelect(id),
		className: "flex min-h-11 w-full items-center gap-3 text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2.5 shrink-0 ${on ? "bg-brass" : "border border-mist"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-5 ${on ? "bg-brass" : "bg-ivory/20"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: on ? "text-ivory" : "text-mist",
				children: label
			})
		]
	});
}
var NAV = [
	["#trunk", "Trunk"],
	["#limbs", "Limbs"],
	["#fit", "Fit"],
	["#rhythm", "30 days"],
	["#contact", "Contact"]
];
function Home() {
	const [branch, setBranch] = (0, import_react.useState)("entertainment");
	function openBranch(id) {
		setBranch(id);
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		document.getElementById("limbs")?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-brass focus:px-3 focus:py-2 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trunk, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Limbs, {
						active: branch,
						onSelect: setBranch
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Matrix, { onOpen: openBranch }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rhythm, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			})
		]
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-ivory/10 bg-ink/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-4 px-5 py-2 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "inline-flex min-h-11 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center border border-brass/70 font-display text-lg text-brass",
					children: "M"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hidden text-sm sm:block",
					children: ["Michael Lawrence Morgan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-mist",
						children: "LA Job Search Tree"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "ml-auto flex gap-1 overflow-x-auto",
				"aria-label": "Page",
				children: NAV.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					className: "inline-flex min-h-11 shrink-0 items-center px-2 text-sm text-mist hover:text-ivory",
					children: label
				}, href))
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "LA Job Search Tree"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 font-display text-5xl leading-none sm:text-7xl md:text-8xl",
					children: [
						"Michael",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Lawrence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Morgan"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl font-display text-2xl leading-snug text-ivory italic md:text-3xl",
					children: "SAG-AFTRA creator · patent-holding AI CTO · USC Rossier educator · ASCAP publisher."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-mist",
					children: "One trunk. Four limbs. A canopy of seats that only make sense if the whole tree is hired."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid max-w-md grid-cols-2 gap-4 border-t border-ivory/10 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-widest text-mist uppercase",
						children: "Base"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-3xl",
						children: "Los Angeles"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-widest text-mist uppercase",
						children: "Floor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-3xl",
						children: "$100k+"
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border border-ivory/15 bg-panel p-6 md:col-span-5 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: "Held in one line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 divide-y divide-ivory/10",
					children: [
						"SAG-AFTRA creator",
						"Patent-holding AI CTO",
						"USC Rossier educator",
						"ASCAP publisher"
					].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-4 font-display text-2xl leading-tight",
						children: line
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-mist",
					children: "Los Angeles · $100k+ floor"
				})
			]
		})]
	});
}
function Trunk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trunk",
		className: "scroll-mt-20 border-t border-ivory/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "01 — Trunk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "Talent DNA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-mist",
					children: "Three receipts, already overlapping. The search does not pick a personality. It picks a door."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3 md:pt-6",
					children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `border border-ivory/10 bg-panel p-6 md:p-8 ${pillar.index === "02" ? "md:-translate-y-6" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-brass uppercase",
								children: pillar.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: pillar.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 size-1.5 shrink-0 bg-brass",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						]
					}, pillar.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-mist md:text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ivory",
							children: "Spanish"
						}),
						" fluent",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 text-brass",
							"aria-hidden": true,
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ivory",
							children: "Mandarin"
						}),
						" conversant"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex gap-4 border border-brass/40 bg-brass/10 p-5 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
						className: "mt-1 size-5 shrink-0 text-brass",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-brass uppercase",
						children: "Three-year north star"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl leading-snug md:text-3xl",
						children: "District CTE pathway and education policy in Los Angeles, with USC Rossier."
					})] })]
				})
			]
		})
	});
}
function Limbs({ active, onSelect }) {
	const branch = getBranch(active);
	function onTabsKeyDown(event) {
		const ids = BRANCHES.map((item) => item.id);
		const index = ids.indexOf(active);
		let next = index;
		if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % ids.length;
		else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + ids.length) % ids.length;
		else return;
		event.preventDefault();
		const id = ids[next];
		onSelect(id);
		document.getElementById(`tab-${id}`)?.focus();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "limbs",
		className: "scroll-mt-20 border-t border-ivory/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "02 — Limbs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "Choose a branch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-mist",
					children: "Four branches, plus the hybrids that only exist because the trunk is one person."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeMark, {
						active,
						onSelect
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 -mx-5 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "tablist",
						"aria-label": "Job search branches",
						"aria-orientation": "horizontal",
						onKeyDown: onTabsKeyDown,
						className: "flex min-w-max gap-1 md:min-w-0",
						children: BRANCHES.map((item) => {
							const on = item.id === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: `tab-${item.id}`,
								type: "button",
								role: "tab",
								"aria-selected": on,
								"aria-controls": "limb-panel",
								tabIndex: on ? 0 : -1,
								onClick: () => onSelect(item.id),
								className: `min-h-11 shrink-0 border-b-2 px-4 py-3 text-left md:min-w-0 md:flex-1 ${on ? "border-brass text-ivory" : "border-transparent text-mist hover:text-ivory"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 hidden text-xs text-mist md:block",
									children: item.resume
								})]
							}, item.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "limb-panel",
					role: "tabpanel",
					"aria-labelledby": `tab-${branch.id}`,
					className: "rise mt-8 border border-ivory/10 bg-panel p-6 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: branch.resume
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-4xl md:text-5xl",
							children: branch.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-mist",
							children: branch.lede
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mt-8 grid gap-10 ${branch.targets.length > 0 ? "md:grid-cols-2" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs tracking-widest text-mist uppercase",
								children: branch.id === "hybrids" ? "Only-Michael seats" : "Seats"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-4",
								children: branch.seats.map((seat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: seat.title }), seat.why ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-mist",
									children: seat.why
								}) : null] }, seat.title))
							})] }), branch.targets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs tracking-widest text-mist uppercase",
									children: "Targets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-2",
									children: branch.targets.map((target) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "inline-flex min-h-11 items-center border border-ivory/15 px-3 text-sm",
										children: target
									}, target))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-mist",
									children: "Named rooms. No borrowed marks."
								})
							] }) : null]
						}),
						branch.north ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-3xl border-t border-ivory/10 pt-6 text-ivory",
							children: branch.north
						}) : null,
						branch.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "mt-6 border-l-2 border-brass pl-4 text-sm text-mist",
							role: "note",
							children: branch.note
						}) : null
					]
				}, branch.id)
			]
		})
	});
}
function Matrix({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "fit",
		className: "scroll-mt-20 border-t border-ivory/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "03 — Fit against speed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "What gets the month"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-mist",
					children: "High fit and a fast cycle get this month. High fit and a slow institution get a patient build. The other two squares are how the search stays honest."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 hidden grid-cols-2 gap-4 text-xs tracking-widest text-mist uppercase md:grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fast cycle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-right",
						children: "Patient cycle"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: MATRIX.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `p-5 md:p-6 ${cell.emphasis ? "border border-brass bg-panel" : "border border-ivory/10 bg-panel"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-widest text-brass uppercase",
								children: [
									cell.fit,
									" · ",
									cell.speed
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-3xl",
								children: cell.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-mist",
								children: cell.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: cell.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.branch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onOpen(item.branch),
									className: "flex min-h-11 w-full items-center justify-between gap-3 border border-ivory/10 px-3 py-2 text-left hover:border-brass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm",
										children: item.label
									}), item.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-mist",
										children: item.hint
									}) : null] })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "border border-ivory/10 px-3 py-3 text-sm text-mist",
									children: item.label
								}) }, item.label))
							})
						]
					}, cell.id))
				})
			]
		})
	});
}
function Rhythm() {
	const [week, setWeek] = (0, import_react.useState)(0);
	const current = WEEKS[week];
	function onKeyDown(event) {
		let next = week;
		if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (week + 1) % WEEKS.length;
		else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (week - 1 + WEEKS.length) % WEEKS.length;
		else return;
		event.preventDefault();
		setWeek(next);
		document.getElementById(`week-${WEEKS[next].id}`)?.focus();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rhythm",
		className: "scroll-mt-20 border-t border-ivory/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "04 — Thirty days"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "The rhythm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-mist",
					children: "Paper, then three limbs, then the classroom door, then the canopy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto md:col-span-4 md:flex-col md:overflow-visible",
						role: "tablist",
						"aria-label": "Thirty-day weeks",
						"aria-orientation": "vertical",
						onKeyDown,
						children: WEEKS.map((item, index) => {
							const on = index === week;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: `week-${item.id}`,
								type: "button",
								role: "tab",
								"aria-selected": on,
								"aria-controls": "week-panel",
								tabIndex: on ? 0 : -1,
								onClick: () => setWeek(index),
								className: `flex min-h-14 w-44 shrink-0 items-center gap-3 border px-3 text-left md:w-full ${on ? "border-brass bg-panel" : "border-ivory/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-brass",
									children: item.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs tracking-widest text-mist uppercase",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm",
									children: item.title
								})] })]
							}, item.id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "week-panel",
						role: "tabpanel",
						"aria-labelledby": `week-${current.id}`,
						className: "rise border border-ivory/10 bg-panel p-6 md:col-span-8 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-brass uppercase",
								children: current.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-4xl",
								children: current.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-6 space-y-4",
								children: current.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 shrink-0 text-sm text-brass tabular-nums",
										children: String(index + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						]
					}, current.id)]
				})
			]
		})
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(EMAIL);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20 border-t border-ivory/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "05 — Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "Open a door"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-mist",
					children: "Los Angeles. The floor is one hundred thousand. The tree is the offer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col border border-ivory/10 bg-panel p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-5 text-brass",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs tracking-widest text-mist uppercase",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl leading-tight break-all",
									children: EMAIL
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${EMAIL}`,
										className: "inline-flex min-h-11 items-center bg-brass px-4 text-sm text-ink",
										children: "Write"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: copyEmail,
										className: "inline-flex min-h-11 items-center gap-2 border border-ivory/15 px-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
											className: "size-4",
											"aria-hidden": true
										}), copied ? "Copied" : "Copy"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col border border-ivory/10 bg-panel p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
									className: "size-5 text-brass",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs tracking-widest text-mist uppercase",
									children: "LinkedIn"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl leading-tight break-all",
									children: LINKEDIN_LABEL
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LINKEDIN,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-5 inline-flex min-h-11 items-center self-start border border-ivory/15 px-4 text-sm",
									children: "Open profile"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col border border-ivory/10 bg-panel p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-5 text-brass",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs tracking-widest text-mist uppercase",
									children: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl tabular-nums",
									children: PHONE_DISPLAY
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "mt-5 inline-flex min-h-11 items-center self-start border border-ivory/15 px-4 text-sm",
									children: "Call"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-sm text-mist",
					children: "Michael Lawrence Morgan · Los Angeles · SAG-AFTRA · ASCAP · USC"
				})
			]
		})
	});
}
//#endregion
export { Home as component };
