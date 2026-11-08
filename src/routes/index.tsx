import { createFileRoute } from "@tanstack/react-router";
import { useState, type KeyboardEvent } from "react";
import { Compass, Copy, Linkedin, Mail, Phone } from "lucide-react";
import { TreeMark } from "@/components/tree-mark";
import {
  BRANCHES,
  EMAIL,
  LINKEDIN,
  LINKEDIN_LABEL,
  MATRIX,
  PHONE_DISPLAY,
  PHONE_TEL,
  PILLARS,
  WEEKS,
  getBranch,
  type BranchId,
} from "@/data/search-tree";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  ["#trunk", "Trunk"],
  ["#limbs", "Limbs"],
  ["#fit", "Fit"],
  ["#rhythm", "30 days"],
  ["#contact", "Contact"],
] as const;

function Home() {
  const [branch, setBranch] = useState<BranchId>("entertainment");

  function openBranch(id: BranchId) {
    setBranch(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("limbs")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <div id="top" className="min-h-screen bg-ink text-ivory">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-brass focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Trunk />
        <Limbs active={branch} onSelect={setBranch} />
        <Matrix onOpen={openBranch} />
        <Rhythm />
        <Contact />
      </main>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ivory/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-2 md:px-8">
        <a href="#top" className="inline-flex min-h-11 items-center gap-3">
          <span className="grid size-9 place-items-center border border-brass/70 font-display text-lg text-brass">
            M
          </span>
          <span className="hidden text-sm sm:block">
            Michael Lawrence Morgan
            <span className="block text-mist">LA Job Search Tree</span>
          </span>
        </a>
        <nav className="ml-auto flex gap-1 overflow-x-auto" aria-label="Page">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 shrink-0 items-center px-2 text-sm text-mist hover:text-ivory"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
      <div className="md:col-span-7">
        <p className="text-xs tracking-widest text-brass uppercase">LA Job Search Tree</p>
        <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl md:text-8xl">
          Michael
          <span className="block">Lawrence</span>
          <span className="block">Morgan</span>
        </h1>
        <p className="mt-8 max-w-xl font-display text-2xl leading-snug text-ivory italic md:text-3xl">
          SAG-AFTRA creator · patent-holding AI CTO · USC Rossier educator · ASCAP publisher.
        </p>
        <p className="mt-5 max-w-xl text-mist">
          One trunk. Four limbs. A canopy of seats that only make sense if the whole tree is hired.
        </p>
        <dl className="mt-8 grid max-w-md grid-cols-2 gap-4 border-t border-ivory/10 pt-6">
          <div>
            <dt className="text-xs tracking-widest text-mist uppercase">Base</dt>
            <dd className="mt-1 font-display text-3xl">Los Angeles</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-mist uppercase">Floor</dt>
            <dd className="mt-1 font-display text-3xl">$100k+</dd>
          </div>
        </dl>
      </div>
      <aside className="border border-ivory/15 bg-panel p-6 md:col-span-5 md:p-8">
        <p className="text-xs tracking-widest text-mist uppercase">Held in one line</p>
        <ul className="mt-6 divide-y divide-ivory/10">
          {[
            "SAG-AFTRA creator",
            "Patent-holding AI CTO",
            "USC Rossier educator",
            "ASCAP publisher",
          ].map((line) => (
            <li key={line} className="py-4 font-display text-2xl leading-tight">
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-mist">Los Angeles · $100k+ floor</p>
      </aside>
    </section>
  );
}

function Trunk() {
  return (
    <section id="trunk" className="scroll-mt-20 border-t border-ivory/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs tracking-widest text-brass uppercase">01 — Trunk</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">Talent DNA</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Three receipts, already overlapping. The search does not pick a personality. It picks a door.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:pt-6">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className={`border border-ivory/10 bg-panel p-6 md:p-8 ${
                pillar.index === "02" ? "md:-translate-y-6" : ""
              }`}
            >
              <p className="text-xs tracking-widest text-brass uppercase">{pillar.index}</p>
              <h3 className="mt-3 font-display text-3xl">{pillar.title}</h3>
              <ul className="mt-5 space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="mt-2 size-1.5 shrink-0 bg-brass" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-mist md:text-center">
          <span className="text-ivory">Spanish</span> fluent
          <span className="px-3 text-brass" aria-hidden>
            ·
          </span>
          <span className="text-ivory">Mandarin</span> conversant
        </p>
        <div className="mt-8 flex gap-4 border border-brass/40 bg-brass/10 p-5 md:p-8">
          <Compass className="mt-1 size-5 shrink-0 text-brass" aria-hidden />
          <div>
            <p className="text-xs tracking-widest text-brass uppercase">Three-year north star</p>
            <p className="mt-2 font-display text-2xl leading-snug md:text-3xl">
              District CTE pathway and education policy in Los Angeles, with USC Rossier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Limbs({
  active,
  onSelect,
}: {
  active: BranchId;
  onSelect: (id: BranchId) => void;
}) {
  const branch = getBranch(active);

  function onTabsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const ids = BRANCHES.map((item) => item.id);
    const index = ids.indexOf(active);
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % ids.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + ids.length) % ids.length;
    } else return;
    event.preventDefault();
    const id = ids[next];
    onSelect(id);
    document.getElementById(`tab-${id}`)?.focus();
  }

  return (
    <section id="limbs" className="scroll-mt-20 border-t border-ivory/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs tracking-widest text-brass uppercase">02 — Limbs</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">Choose a branch</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Four branches, plus the hybrids that only exist because the trunk is one person.
        </p>
        <div className="mt-10">
          <TreeMark active={active} onSelect={onSelect} />
        </div>
        <div className="mt-8 -mx-5 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0">
          <div
            role="tablist"
            aria-label="Job search branches"
            aria-orientation="horizontal"
            onKeyDown={onTabsKeyDown}
            className="flex min-w-max gap-1 md:min-w-0"
          >
            {BRANCHES.map((item) => {
              const on = item.id === active;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="limb-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => onSelect(item.id)}
                  className={`min-h-11 shrink-0 border-b-2 px-4 py-3 text-left md:min-w-0 md:flex-1 ${
                    on ? "border-brass text-ivory" : "border-transparent text-mist hover:text-ivory"
                  }`}
                >
                  <span className="block text-sm">{item.label}</span>
                  <span className="mt-1 hidden text-xs text-mist md:block">{item.resume}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          key={branch.id}
          id="limb-panel"
          role="tabpanel"
          aria-labelledby={`tab-${branch.id}`}
          className="rise mt-8 border border-ivory/10 bg-panel p-6 md:p-10"
        >
          <p className="text-xs tracking-widest text-brass uppercase">{branch.resume}</p>
          <h3 className="mt-3 font-display text-4xl md:text-5xl">{branch.label}</h3>
          <p className="mt-4 max-w-3xl text-mist">{branch.lede}</p>
          <div className={`mt-8 grid gap-10 ${branch.targets.length > 0 ? "md:grid-cols-2" : ""}`}>
            <div>
              <h4 className="text-xs tracking-widest text-mist uppercase">
                {branch.id === "hybrids" ? "Only-Michael seats" : "Seats"}
              </h4>
              <ul className="mt-4 space-y-4">
                {branch.seats.map((seat) => (
                  <li key={seat.title}>
                    <p>{seat.title}</p>
                    {seat.why ? <p className="mt-1 text-sm text-mist">{seat.why}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
            {branch.targets.length > 0 ? (
              <div>
                <h4 className="text-xs tracking-widest text-mist uppercase">Targets</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {branch.targets.map((target) => (
                    <li
                      key={target}
                      className="inline-flex min-h-11 items-center border border-ivory/15 px-3 text-sm"
                    >
                      {target}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-mist">Named rooms. No borrowed marks.</p>
              </div>
            ) : null}
          </div>
          {branch.north ? (
            <p className="mt-8 max-w-3xl border-t border-ivory/10 pt-6 text-ivory">{branch.north}</p>
          ) : null}
          {branch.note ? (
            <aside className="mt-6 border-l-2 border-brass pl-4 text-sm text-mist" role="note">
              {branch.note}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Matrix({ onOpen }: { onOpen: (id: BranchId) => void }) {
  return (
    <section id="fit" className="scroll-mt-20 border-t border-ivory/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs tracking-widest text-brass uppercase">03 — Fit against speed</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">What gets the month</h2>
        <p className="mt-4 max-w-2xl text-mist">
          High fit and a fast cycle get this month. High fit and a slow institution get a patient build.
          The other two squares are how the search stays honest.
        </p>
        <div className="mt-6 hidden grid-cols-2 gap-4 text-xs tracking-widest text-mist uppercase md:grid">
          <p>Fast cycle</p>
          <p className="text-right">Patient cycle</p>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {MATRIX.map((cell) => (
            <article
              key={cell.id}
              className={`p-5 md:p-6 ${
                cell.emphasis
                  ? "border border-brass bg-panel"
                  : "border border-ivory/10 bg-panel"
              }`}
            >
              <p className="text-xs tracking-widest text-brass uppercase">
                {cell.fit} · {cell.speed}
              </p>
              <h3 className="mt-2 font-display text-3xl">{cell.title}</h3>
              <p className="mt-2 text-sm text-mist">{cell.lede}</p>
              <ul className="mt-5 space-y-2">
                {cell.items.map((item) => (
                  <li key={item.label}>
                    {item.branch ? (
                      <button
                        type="button"
                        onClick={() => onOpen(item.branch as BranchId)}
                        className="flex min-h-11 w-full items-center justify-between gap-3 border border-ivory/10 px-3 py-2 text-left hover:border-brass"
                      >
                        <span>
                          <span className="block text-sm">{item.label}</span>
                          {item.hint ? (
                            <span className="block text-xs text-mist">{item.hint}</span>
                          ) : null}
                        </span>
                      </button>
                    ) : (
                      <p className="border border-ivory/10 px-3 py-3 text-sm text-mist">{item.label}</p>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rhythm() {
  const [week, setWeek] = useState(0);
  const current = WEEKS[week];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    let next = week;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (week + 1) % WEEKS.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = (week - 1 + WEEKS.length) % WEEKS.length;
    } else return;
    event.preventDefault();
    setWeek(next);
    document.getElementById(`week-${WEEKS[next].id}`)?.focus();
  }

  return (
    <section id="rhythm" className="scroll-mt-20 border-t border-ivory/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs tracking-widest text-brass uppercase">04 — Thirty days</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">The rhythm</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Paper, then three limbs, then the classroom door, then the canopy.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <div
            className="flex gap-2 overflow-x-auto md:col-span-4 md:flex-col md:overflow-visible"
            role="tablist"
            aria-label="Thirty-day weeks"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
          >
            {WEEKS.map((item, index) => {
              const on = index === week;
              return (
                <button
                  key={item.id}
                  id={`week-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="week-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setWeek(index)}
                  className={`flex min-h-14 w-44 shrink-0 items-center gap-3 border px-3 text-left md:w-full ${
                    on ? "border-brass bg-panel" : "border-ivory/10"
                  }`}
                >
                  <span className="font-display text-2xl text-brass">{item.n}</span>
                  <span>
                    <span className="block text-xs tracking-widest text-mist uppercase">{item.label}</span>
                    <span className="block text-sm">{item.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div
            key={current.id}
            id="week-panel"
            role="tabpanel"
            aria-labelledby={`week-${current.id}`}
            className="rise border border-ivory/10 bg-panel p-6 md:col-span-8 md:p-8"
          >
            <p className="text-xs tracking-widest text-brass uppercase">{current.label}</p>
            <h3 className="mt-2 font-display text-4xl">{current.title}</h3>
            <ol className="mt-6 space-y-4">
              {current.items.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="w-6 shrink-0 text-sm text-brass tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-ivory/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs tracking-widest text-brass uppercase">05 — Contact</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">Open a door</h2>
        <p className="mt-4 max-w-2xl text-mist">
          Los Angeles. The floor is one hundred thousand. The tree is the offer.
        </p>
        <address className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="flex flex-col border border-ivory/10 bg-panel p-5">
            <Mail className="size-5 text-brass" aria-hidden />
            <p className="mt-4 text-xs tracking-widest text-mist uppercase">Email</p>
            <p className="mt-2 font-display text-2xl leading-tight break-all">{EMAIL}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center bg-brass px-4 text-sm text-ink"
              >
                Write
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center gap-2 border border-ivory/15 px-4 text-sm"
              >
                <Copy className="size-4" aria-hidden />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </article>
          <article className="flex flex-col border border-ivory/10 bg-panel p-5">
            <Linkedin className="size-5 text-brass" aria-hidden />
            <p className="mt-4 text-xs tracking-widest text-mist uppercase">LinkedIn</p>
            <p className="mt-2 font-display text-2xl leading-tight break-all">{LINKEDIN_LABEL}</p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center self-start border border-ivory/15 px-4 text-sm"
            >
              Open profile
            </a>
          </article>
          <article className="flex flex-col border border-ivory/10 bg-panel p-5">
            <Phone className="size-5 text-brass" aria-hidden />
            <p className="mt-4 text-xs tracking-widest text-mist uppercase">Phone</p>
            <p className="mt-2 font-display text-2xl tabular-nums">{PHONE_DISPLAY}</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-5 inline-flex min-h-11 items-center self-start border border-ivory/15 px-4 text-sm"
            >
              Call
            </a>
          </article>
        </address>
        <p className="mt-12 text-sm text-mist">
          Michael Lawrence Morgan · Los Angeles · SAG-AFTRA · ASCAP · USC
        </p>
      </div>
    </section>
  );
}
