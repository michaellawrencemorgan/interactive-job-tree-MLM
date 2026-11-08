import type { KeyboardEvent } from "react";
import { BRANCHES, type BranchId } from "@/data/search-tree";

type Props = {
  active: BranchId;
  onSelect: (id: BranchId) => void;
};

const TX = 520;
const TY = 356;

const MARKS: {
  id: BranchId;
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: "start" | "middle" | "end";
}[] = [
  { id: "entertainment", x: 156, y: 300, lx: 156, ly: 350, anchor: "middle" },
  { id: "technology", x: 292, y: 176, lx: 250, ly: 182, anchor: "end" },
  { id: "hybrids", x: 520, y: 86, lx: 520, ly: 56, anchor: "middle" },
  { id: "media", x: 748, y: 176, lx: 792, ly: 182, anchor: "start" },
  { id: "education", x: 884, y: 300, lx: 884, ly: 350, anchor: "middle" },
];

const PATHS: Record<BranchId, string> = {
  entertainment: "M 520 356 C 340 356 220 330 156 300",
  technology: "M 520 356 C 430 270 350 200 292 176",
  hybrids: "M 520 356 C 520 260 520 160 520 86",
  media: "M 520 356 C 610 270 690 200 748 176",
  education: "M 520 356 C 700 356 820 330 884 300",
};

const MOBILE: BranchId[] = [
  "hybrids",
  "entertainment",
  "technology",
  "media",
  "education",
];

function onKey(event: KeyboardEvent, run: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    run();
  }
}

export function TreeMark({ active, onSelect }: Props) {
  const idle = MARKS.filter((mark) => mark.id !== active);
  const chosen = MARKS.find((mark) => mark.id === active) ?? MARKS[0];

  return (
    <figure>
      <div className="md:hidden">
        <MobileTree active={active} onSelect={onSelect} />
      </div>
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1040 620"
          className="h-auto w-full"
          role="group"
          aria-label="Job search tree"
        >
          <title>Job search tree</title>
          <path
            d="M 520 446 C 400 486 310 516 240 534"
            fill="none"
            className="stroke-ivory/40"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M 520 446 L 520 556"
            fill="none"
            className="stroke-ivory/40"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M 520 446 C 640 486 730 516 800 534"
            fill="none"
            className="stroke-ivory/40"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          {idle.map((mark) => (
            <path
              key={mark.id}
              d={PATHS[mark.id]}
              fill="none"
              className="stroke-ivory/40"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          ))}
          <path
            d={PATHS[chosen.id]}
            fill="none"
            className="stroke-brass"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <line
            x1={TX}
            y1={TY}
            x2={TX}
            y2={446}
            className="stroke-ivory/70"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <text x={540} y={404} className="fill-brass" fontSize={16}>
            Trunk
          </text>
          <RootLabel x={240} y={556} title="Hollywood" />
          <RootLabel x={520} y={578} title="Technical" />
          <RootLabel x={800} y={556} title="Education" />
          {MARKS.map((mark) => {
            const branch = BRANCHES.find((item) => item.id === mark.id);
            const on = mark.id === active;
            if (!branch) return null;
            return (
              <g
                key={mark.id}
                role="button"
                tabIndex={0}
                aria-pressed={on}
                aria-label={branch.label}
                className="cursor-pointer"
                onClick={() => onSelect(mark.id)}
                onKeyDown={(event) => onKey(event, () => onSelect(mark.id))}
              >
                <circle cx={mark.x} cy={mark.y} r={28} className="fill-transparent" />
                <circle
                  cx={mark.x}
                  cy={mark.y}
                  r={16}
                  fill="none"
                  className={on ? "stroke-brass" : "stroke-transparent"}
                  strokeWidth={1}
                />
                <circle
                  cx={mark.x}
                  cy={mark.y}
                  r={7}
                  className={on ? "fill-brass" : "fill-ink stroke-mist"}
                  strokeWidth={1.5}
                />
                <text
                  x={mark.lx}
                  y={mark.ly}
                  textAnchor={mark.anchor}
                  fontSize={18}
                  className={on ? "fill-ivory" : "fill-mist"}
                >
                  {branch.mark}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-mist">
        Brass is the limb you are reading. The trunk does not change. Roots are the receipts.
      </figcaption>
    </figure>
  );
}

function RootLabel({ x, y, title }: { x: number; y: number; title: string }) {
  return (
    <a href="#trunk">
      <text x={x} y={y} textAnchor="middle" fontSize={16} className="fill-ivory">
        {title}
      </text>
      <text x={x} y={y + 18} textAnchor="middle" fontSize={13} className="fill-mist">
        receipts
      </text>
    </a>
  );
}

function MobileTree({ active, onSelect }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs tracking-widest text-brass uppercase">Canopy</p>
        <NodeButton id="hybrids" active={active} onSelect={onSelect} label="Hybrids" />
      </div>
      <div>
        <p className="text-xs tracking-widest text-mist uppercase">Limbs</p>
        <div className="mt-1">
          {MOBILE.filter((id) => id !== "hybrids").map((id) => {
            const branch = BRANCHES.find((item) => item.id === id);
            if (!branch) return null;
            return (
              <NodeButton
                key={id}
                id={id}
                active={active}
                onSelect={onSelect}
                label={branch.label}
              />
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-xs tracking-widest text-mist uppercase">Trunk</p>
        <p className="mt-2 font-display text-2xl">One person. Three receipts.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Hollywood", "Technical", "Education"].map((name) => (
            <a
              key={name}
              href="#trunk"
              className="inline-flex min-h-11 items-center border border-ivory/15 px-3 text-sm text-ivory"
            >
              {name} receipts
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function NodeButton({
  id,
  label,
  active,
  onSelect,
}: {
  id: BranchId;
  label: string;
  active: BranchId;
  onSelect: (id: BranchId) => void;
}) {
  const on = id === active;
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => onSelect(id)}
      className="flex min-h-11 w-full items-center gap-3 text-left"
    >
      <span className={`size-2.5 shrink-0 ${on ? "bg-brass" : "border border-mist"}`} />
      <span className={`h-px w-5 ${on ? "bg-brass" : "bg-ivory/20"}`} />
      <span className={on ? "text-ivory" : "text-mist"}>{label}</span>
    </button>
  );
}
