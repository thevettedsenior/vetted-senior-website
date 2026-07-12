import type { ReactNode } from "react";

// Instructional diagrams for the how-to guides. All drawn inline so they
// inherit site colors, scale to any screen, print cleanly, and cost no
// network requests. Figures are deliberately schematic: stick people with
// generous labels beat anatomical drawings for clarity at every text size.

const NAVY = "var(--color-primary)";
const GOLD = "var(--color-gold-deep)";
const MUTED = "var(--color-muted-foreground)";
const BAD = "var(--color-destructive)";

const LABEL = {
  fill: NAVY,
  fontSize: 15,
  fontWeight: 600,
} as const;

const SMALL_LABEL = {
  fill: MUTED,
  fontSize: 13.5,
  fontWeight: 500,
} as const;

/** Card wrapper: consistent frame + visible caption under every diagram. */
export function Diagram({
  label,
  caption,
  viewBox,
  children,
}: {
  label: string; // screen-reader description of the drawing
  caption: string; // visible one-line explanation under the drawing
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <figure className="rounded-2xl border-2 border-border bg-card p-4 md:p-6">
      <svg
        role="img"
        aria-label={label}
        viewBox={viewBox}
        className="h-auto w-full"
      >
        {children}
      </svg>
      <figcaption className="mt-3 border-t border-border/60 pt-3 text-base leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

/* Shared drawing bits ------------------------------------------------------ */

function Ground({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={MUTED}
      strokeWidth={2}
      strokeDasharray="1 6"
      strokeLinecap="round"
    />
  );
}

/** Simple side-view standing person. Returns limbs as separate elements so
 * callers can highlight a leg or arm. */
function Person({
  x,
  y,
  color = NAVY,
}: {
  x: number; // hip x
  y: number; // ground y
  color?: string;
}) {
  const hipY = y - 78;
  const shoulderY = y - 128;
  return (
    <g stroke={color} strokeWidth={5} strokeLinecap="round" fill="none">
      <circle cx={x} cy={y - 152} r={11} fill={color} stroke="none" />
      <path d={`M${x} ${y - 138} L${x} ${hipY}`} />
      <path d={`M${x} ${hipY} L${x - 12} ${y}`} />
      <path d={`M${x} ${hipY} L${x + 12} ${y}`} />
      <path d={`M${x} ${shoulderY} L${x - 8} ${y - 82}`} />
      <path d={`M${x} ${shoulderY} L${x + 8} ${y - 82}`} />
    </g>
  );
}

function Check({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={16} fill={GOLD} opacity={0.18} />
      <path
        d={`M${x - 7} ${y} l5 6 l10 -12`}
        stroke={GOLD}
        strokeWidth={4.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Cross({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={16} fill={BAD} opacity={0.12} />
      <path
        d={`M${x - 7} ${y - 7} l14 14 M${x + 7} ${y - 7} l-14 14`}
        stroke={BAD}
        strokeWidth={4.5}
        strokeLinecap="round"
      />
    </g>
  );
}

/* Cane --------------------------------------------------------------------- */

export function CaneHeightDiagram() {
  const groundY = 220;
  const wristY = groundY - 82;
  return (
    <Diagram
      label="A person standing upright with arms relaxed. A dashed line runs from the wrist crease to the top of the cane handle, showing they are at the same height."
      caption="The fit test: stand tall, arms relaxed at your sides. The top of the handle should line up with the crease of your wrist."
      viewBox="0 0 640 260"
    >
      <Ground x1={60} x2={580} y={groundY} />
      <Person x={170} y={groundY} />
      {/* cane standing beside the person */}
      <path
        d={`M258 ${wristY} L262 ${groundY}`}
        stroke={GOLD}
        strokeWidth={6}
        strokeLinecap="round"
      />
      <path
        d={`M258 ${wristY} q0 -12 14 -12`}
        stroke={GOLD}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
      />
      {/* wrist-to-handle alignment line */}
      <line
        x1={162}
        y1={wristY}
        x2={330}
        y2={wristY}
        stroke={NAVY}
        strokeWidth={2.5}
        strokeDasharray="7 6"
      />
      <text x={344} y={wristY - 14} {...LABEL}>
        Handle lines up with
      </text>
      <text x={344} y={wristY + 8} {...LABEL}>
        the wrist crease
      </text>
      <text x={344} y={wristY + 36} {...SMALL_LABEL}>
        Elbow bends slightly (15 to 20 degrees)
      </text>
      <text x={344} y={wristY + 58} {...SMALL_LABEL}>
        when you grip the handle
      </text>
    </Diagram>
  );
}

export function CaneSideDiagram() {
  const groundY = 230;
  return (
    <Diagram
      label="Two figures. On the left, marked wrong, the cane is held on the same side as the weaker leg. On the right, marked right, the cane is held on the side opposite the weaker leg."
      caption="The cane goes in the hand OPPOSITE the weaker leg, and moves forward together with the weaker leg."
      viewBox="0 0 640 300"
    >
      <Ground x1={40} x2={600} y={groundY} />

      {/* WRONG: cane on same side as weak leg */}
      <g>
        <Person x={140} y={groundY} />
        {/* weak right leg highlighted */}
        <path
          d={`M140 ${groundY - 78} L152 ${groundY}`}
          stroke={GOLD}
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M148 ${groundY - 108} L168 ${groundY}`}
          stroke={BAD}
          strokeWidth={5.5}
          strokeLinecap="round"
        />
        <Cross x={140} y={40} />
        <text x={68} y={278} {...SMALL_LABEL}>
          Cane on the same side
        </text>
      </g>

      {/* RIGHT: cane opposite weak leg */}
      <g>
        <Person x={430} y={groundY} />
        <path
          d={`M430 ${groundY - 78} L442 ${groundY}`}
          stroke={GOLD}
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M422 ${groundY - 108} L404 ${groundY}`}
          stroke={NAVY}
          strokeWidth={5.5}
          strokeLinecap="round"
        />
        <Check x={430} y={40} />
        <text x={352} y={278} {...SMALL_LABEL}>
          Cane in the opposite hand
        </text>
      </g>

      <text x={508} y={groundY - 60} {...LABEL}>
        Weaker leg
      </text>
      <path
        d={`M502 ${groundY - 54} L446 ${groundY - 36}`}
        stroke={GOLD}
        strokeWidth={2.5}
        markerEnd="none"
      />
    </Diagram>
  );
}

/* Walker ------------------------------------------------------------------- */

export function WalkerPositionDiagram() {
  const groundY = 230;
  return (
    <Diagram
      label="Two figures with walkers. On the left, marked wrong, the walker is pushed far ahead and the person leans forward chasing it. On the right, marked right, the person stands upright inside the walker frame."
      caption="Stand tall INSIDE the frame. Pushing the walker out ahead and chasing it is the most common walker mistake."
      viewBox="0 0 640 300"
    >
      <Ground x1={40} x2={600} y={groundY} />

      {/* WRONG: walker far ahead, person stooped */}
      <g>
        {/* stooped person */}
        <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
          <circle cx={118} cy={100} r={11} fill={NAVY} stroke="none" />
          <path d={`M112 112 L96 158`} />
          <path d={`M96 158 L84 ${groundY}`} />
          <path d={`M96 158 L108 ${groundY}`} />
          <path d={`M108 122 L168 138`} />
        </g>
        {/* walker frame far ahead */}
        <g stroke={GOLD} strokeWidth={5} strokeLinecap="round" fill="none">
          <path d={`M190 132 L196 ${groundY}`} />
          <path d={`M222 132 L228 ${groundY}`} />
          <path d={`M190 132 L222 132`} />
        </g>
        <Cross x={150} y={40} />
        <text x={58} y={278} {...SMALL_LABEL}>
          Walker too far ahead, back bent
        </text>
      </g>

      {/* RIGHT: person inside frame */}
      <g>
        <Person x={450} y={groundY} />
        <g stroke={GOLD} strokeWidth={5} strokeLinecap="round" fill="none">
          <path d={`M412 128 L406 ${groundY}`} />
          <path d={`M492 128 L498 ${groundY}`} />
          <path d={`M412 128 L492 128`} />
        </g>
        <Check x={450} y={40} />
        <text x={368} y={278} {...SMALL_LABEL}>
          Upright, between the back legs
        </text>
      </g>
    </Diagram>
  );
}

/* Stairs ------------------------------------------------------------------- */

export function StairsDiagram() {
  return (
    <Diagram
      label="A staircase shown from the side. An arrow going up is labelled: strong leg steps up first. An arrow going down is labelled: cane and weaker leg go down first."
      caption='"Up with the good, down with the bad." The strong leg always does the lifting and lowering.'
      viewBox="0 0 640 325"
    >
      {/* staircase */}
      <path
        d="M80 260 L200 260 L200 220 L290 220 L290 180 L380 180 L380 140 L470 140 L470 100 L560 100"
        stroke={NAVY}
        strokeWidth={5}
        fill="none"
        strokeLinejoin="round"
      />
      {/* handrail */}
      <line
        x1={120}
        y1={196}
        x2={540}
        y2={44}
        stroke={GOLD}
        strokeWidth={5}
        strokeLinecap="round"
      />
      {/* UP arrow */}
      <g>
        <path
          d="M150 236 L260 196"
          stroke={GOLD}
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M248 190 L262 195 L254 208"
          stroke={GOLD}
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x={84} y={292} {...LABEL}>
          UP: strong leg steps up first,
        </text>
        <text x={84} y={314} {...SMALL_LABEL}>
          cane and weaker leg follow
        </text>
      </g>
      {/* DOWN arrow */}
      <g>
        <path
          d="M470 78 L368 118"
          stroke={NAVY}
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M380 124 L366 119 L373 106"
          stroke={NAVY}
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x={330} y={48} {...LABEL}>
          DOWN: cane and weaker leg first,
        </text>
        <text x={330} y={70} {...SMALL_LABEL}>
          strong leg comes down last
        </text>
      </g>
    </Diagram>
  );
}

/* Getting up after a fall --------------------------------------------------- */

export function GetUpSequenceDiagram() {
  const y = 150; // ground line within each panel
  return (
    <Diagram
      label="Four numbered panels. One: person lying on their side. Two: person on hands and knees. Three: person kneeling with hands on a chair seat and one foot forward. Four: person sitting in the chair."
      caption="The chair method: roll to your side, get to hands and knees, crawl to a sturdy chair, bring your stronger foot forward, and push up to sit. Rest at every stage."
      viewBox="0 0 640 200"
    >
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Ground x1={20 + i * 155} x2={155 + i * 155} y={y} />
          <circle cx={38 + i * 155} cy={30} r={13} fill={GOLD} opacity={0.22} />
          <text x={33 + i * 155} y={35} {...LABEL}>
            {i + 1}
          </text>
        </g>
      ))}

      {/* 1: lying on side */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={45} cy={y - 16} r={10} fill={NAVY} stroke="none" />
        <path d={`M58 ${y - 14} L104 ${y - 12}`} />
        <path d={`M104 ${y - 12} L132 ${y - 26}`} />
        <path d={`M70 ${y - 14} L86 ${y - 30}`} />
      </g>

      {/* 2: hands and knees */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={196} cy={y - 62} r={10} fill={NAVY} stroke="none" />
        <path d={`M204 ${y - 52} L248 ${y - 44}`} />
        <path d={`M204 ${y - 50} L200 ${y}`} />
        <path d={`M248 ${y - 44} L252 ${y}`} />
        <path d={`M248 ${y - 44} L268 ${y}`} />
      </g>

      {/* 3: kneeling at chair, strong foot forward */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        {/* chair */}
        <g stroke={GOLD}>
          <path d={`M330 ${y - 58} L330 ${y}`} />
          <path d={`M330 ${y - 58} L368 ${y - 58}`} />
          <path d={`M368 ${y - 58} L368 ${y}`} />
          <path d={`M330 ${y - 58} L330 ${y - 96}`} />
        </g>
        <circle cx={412} cy={y - 84} r={10} fill={NAVY} stroke="none" />
        <path d={`M410 ${y - 72} L398 ${y - 34}`} />
        <path d={`M404 ${y - 64} L372 ${y - 54}`} />
        {/* kneeling leg */}
        <path d={`M398 ${y - 34} L418 ${y}`} />
        {/* strong foot forward, flat */}
        <path d={`M398 ${y - 34} L378 ${y - 16} L378 ${y}`} />
      </g>

      {/* 4: seated in chair */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <g stroke={GOLD}>
          <path d={`M500 ${y - 58} L500 ${y}`} />
          <path d={`M500 ${y - 58} L546 ${y - 58}`} />
          <path d={`M546 ${y - 58} L546 ${y}`} />
          <path d={`M500 ${y - 58} L500 ${y - 100}`} />
        </g>
        <circle cx={528} cy={y - 96} r={10} fill={NAVY} stroke="none" />
        <path d={`M528 ${y - 84} L528 ${y - 58}`} />
        <path d={`M528 ${y - 58} L552 ${y - 58}`} />
        <path d={`M552 ${y - 58} L552 ${y}`} />
      </g>
    </Diagram>
  );
}

/* Car transfer --------------------------------------------------------------- */

export function CarTransferDiagram() {
  const y = 160;
  return (
    <Diagram
      label="Three numbered panels showing getting into a car. One: person standing with their back to the car seat. Two: person sitting on the seat with feet still outside on the ground. Three: person seated with both legs swivelled inside the car."
      caption="Back up until the seat touches your legs, sit down first, then swivel both legs in together. Reverse the order to get out."
      viewBox="0 0 640 210"
    >
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Ground x1={20 + i * 210} x2={200 + i * 210} y={y} />
          <circle cx={40 + i * 210} cy={30} r={13} fill={GOLD} opacity={0.22} />
          <text x={35 + i * 210} y={35} {...LABEL}>
            {i + 1}
          </text>
        </g>
      ))}

      {/* car seat glyph, repeated */}
      {[0, 1, 2].map((i) => (
        <g
          key={i}
          stroke={GOLD}
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
        >
          <path
            d={`M${58 + i * 210} ${y} L${58 + i * 210} ${y - 56} L${64 + i * 210} ${y - 92}`}
          />
          <path d={`M${58 + i * 210} ${y - 56} L${104 + i * 210} ${y - 56}`} />
        </g>
      ))}

      {/* 1: standing, back to seat */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={142} cy={y - 128} r={10} fill={NAVY} stroke="none" />
        <path d={`M142 ${y - 116} L142 ${y - 62}`} />
        <path d={`M142 ${y - 62} L132 ${y}`} />
        <path d={`M142 ${y - 62} L152 ${y}`} />
        <path d={`M142 ${y - 104} L124 ${y - 66}`} />
      </g>

      {/* 2: seated, feet outside */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={296} cy={y - 104} r={10} fill={NAVY} stroke="none" />
        <path d={`M296 ${y - 92} L294 ${y - 54}`} />
        <path d={`M294 ${y - 54} L330 ${y - 50}`} />
        <path d={`M330 ${y - 50} L334 ${y}`} />
        <path d={`M330 ${y - 50} L346 ${y}`} />
      </g>

      {/* 3: seated, legs in (knees bent forward inside car) */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={506} cy={y - 104} r={10} fill={NAVY} stroke="none" />
        <path d={`M506 ${y - 92} L506 ${y - 54}`} />
        <path d={`M506 ${y - 54} L470 ${y - 50}`} />
        <path d={`M470 ${y - 50} L470 ${y - 12}`} />
        <Check x={560} y={y - 100} />
      </g>
    </Diagram>
  );
}

/* Winter walking ------------------------------------------------------------- */

export function PenguinWalkDiagram() {
  const y = 230;
  return (
    <Diagram
      label="A person walking with short flat steps, leaning slightly forward, arms held slightly out from the body. Labels point to each part of the posture."
      caption="The penguin walk: short flat steps, toes slightly out, knees soft, a slight forward lean, arms out for balance."
      viewBox="0 0 640 300"
    >
      <Ground x1={40} x2={600} y={y} />
      {/* leaning figure with short step */}
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={268} cy={78} r={11} fill={NAVY} stroke="none" />
        <path d={`M264 90 L246 152`} />
        {/* legs: short stance */}
        <path d={`M246 152 L236 ${y}`} />
        <path d={`M246 152 L266 ${y}`} />
        {/* flat feet */}
        <path d={`M228 ${y} L246 ${y}`} strokeWidth={6} />
        <path d={`M258 ${y} L276 ${y}`} strokeWidth={6} />
        {/* arms out */}
        <path d={`M258 104 L206 128`} />
        <path d={`M258 104 L308 122`} />
      </g>

      <text x={340} y={70} {...LABEL}>
        Lean slightly forward
      </text>
      <text x={340} y={92} {...SMALL_LABEL}>
        weight over the front foot
      </text>
      <text x={340} y={136} {...LABEL}>
        Arms out, hands free
      </text>
      <text x={340} y={158} {...SMALL_LABEL}>
        never in your pockets
      </text>
      <text x={340} y={202} {...LABEL}>
        Short, flat-footed steps
      </text>
      <text x={340} y={224} {...SMALL_LABEL}>
        toes turned slightly outward
      </text>
      <line x1={332} y1={64} x2={282} y2={84} stroke={GOLD} strokeWidth={2.5} />
      <line
        x1={332}
        y1={130}
        x2={312}
        y2={122}
        stroke={GOLD}
        strokeWidth={2.5}
      />
      <line
        x1={332}
        y1={196}
        x2={280}
        y2={224}
        stroke={GOLD}
        strokeWidth={2.5}
      />
    </Diagram>
  );
}

/* Grab bars ------------------------------------------------------------------ */

export function GrabBarHeightsDiagram() {
  const floorY = 250;
  const barY = floorY - 120; // 33-36" band
  return (
    <Diagram
      label="A bathroom wall shown from the front with a bathtub and toilet. A vertical grab bar sits at the tub entry, a horizontal bar runs along the wall above the tub, and another horizontal bar is beside the toilet. A measurement line shows the horizontal bars are 33 to 36 inches above the floor."
      caption="The three-bar bathroom: vertical bar at the tub entry, horizontal bar on the long wall, horizontal bar beside the toilet, all anchored into studs."
      viewBox="0 0 640 300"
    >
      {/* floor */}
      <line
        x1={30}
        y1={floorY}
        x2={610}
        y2={floorY}
        stroke={NAVY}
        strokeWidth={4}
        strokeLinecap="round"
      />

      {/* tub */}
      <path
        d={`M60 ${floorY} L60 ${floorY - 55} Q60 ${floorY - 62} 68 ${floorY - 62} L300 ${floorY - 62} Q308 ${floorY - 62} 308 ${floorY - 55} L308 ${floorY}`}
        stroke={NAVY}
        strokeWidth={4}
        fill="none"
      />
      {/* vertical entry bar */}
      <line
        x1={318}
        y1={floorY - 150}
        x2={318}
        y2={floorY - 82}
        stroke={GOLD}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <text x={240} y={floorY - 180} {...LABEL}>
        Vertical bar at the entry
      </text>
      <text x={240} y={floorY - 160} {...SMALL_LABEL}>
        where you step over the edge
      </text>

      {/* horizontal bar over tub */}
      <line
        x1={90}
        y1={barY}
        x2={250}
        y2={barY}
        stroke={GOLD}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <text x={60} y={barY - 20} {...LABEL}>
        Horizontal bar on the long wall
      </text>

      {/* toilet */}
      <path
        d={`M470 ${floorY} L470 ${floorY - 40} L510 ${floorY - 40} L510 ${floorY} M474 ${floorY - 40} L474 ${floorY - 74} L506 ${floorY - 74} L506 ${floorY - 40}`}
        stroke={NAVY}
        strokeWidth={4}
        fill="none"
        strokeLinejoin="round"
      />
      {/* bar beside toilet */}
      <line
        x1={528}
        y1={barY}
        x2={606}
        y2={barY}
        stroke={GOLD}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <text x={478} y={barY - 42} {...LABEL}>
        Bar beside the toilet
      </text>

      {/* height dimension */}
      <g stroke={MUTED} strokeWidth={2}>
        <line x1={430} y1={barY} x2={430} y2={floorY} strokeDasharray="5 5" />
        <line x1={422} y1={barY} x2={438} y2={barY} />
        <line x1={422} y1={floorY} x2={438} y2={floorY} />
      </g>
      <text x={338} y={floorY - 52} {...LABEL}>
        33 to 36 in
      </text>
      <text x={334} y={floorY - 30} {...SMALL_LABEL}>
        (84 to 91 cm)
      </text>
    </Diagram>
  );
}

/* Balance exercises ------------------------------------------------------------ */

export function BalanceExercisesDiagram() {
  const y = 190;
  return (
    <Diagram
      label="Three panels. One: a person rising from a chair. Two: a person at a kitchen counter rising onto their toes. Three: a person standing with one foot directly in front of the other, one hand on the counter."
      caption="The core three: sit-to-stands, heel raises at the counter, and tandem stance. Always keep the counter within reach."
      viewBox="0 0 640 250"
    >
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Ground x1={20 + i * 210} x2={200 + i * 210} y={y} />
        </g>
      ))}

      {/* 1: sit-to-stand: chair + person mid-rise, leaning forward */}
      <g stroke={GOLD} strokeWidth={5} strokeLinecap="round" fill="none">
        <path d={`M60 ${y - 56} L60 ${y}`} />
        <path d={`M60 ${y - 56} L104 ${y - 56}`} />
        <path d={`M104 ${y - 56} L104 ${y}`} />
        <path d={`M60 ${y - 56} L60 ${y - 96}`} />
      </g>
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={158} cy={y - 118} r={10} fill={NAVY} stroke="none" />
        <path d={`M154 ${y - 106} L136 ${y - 58}`} />
        <path d={`M136 ${y - 58} L128 ${y}`} />
        <path d={`M136 ${y - 58} L148 ${y}`} />
        <path d={`M148 ${y - 96} L172 ${y - 66}`} />
      </g>
      <text x={52} y={y + 42} {...LABEL}>
        Sit-to-stand, x10
      </text>

      {/* 2: heel raise at counter */}
      <g stroke={GOLD} strokeWidth={5} strokeLinecap="round" fill="none">
        <path d={`M262 ${y - 92} L262 ${y}`} />
        <path d={`M262 ${y - 92} L318 ${y - 92}`} />
      </g>
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={352} cy={y - 148} r={10} fill={NAVY} stroke="none" />
        <path d={`M352 ${y - 136} L352 ${y - 74}`} />
        <path d={`M352 ${y - 120} L316 ${y - 94}`} />
        {/* on toes: heels lifted */}
        <path d={`M352 ${y - 74} L346 ${y - 12}`} />
        <path d={`M352 ${y - 74} L360 ${y - 12}`} />
        <path d={`M342 ${y - 12} L350 ${y - 12}`} strokeWidth={6} />
        <path d={`M356 ${y - 12} L364 ${y - 12}`} strokeWidth={6} />
      </g>
      <text x={268} y={y + 42} {...LABEL}>
        Heel raises, x10
      </text>

      {/* 3: tandem stance at counter */}
      <g stroke={GOLD} strokeWidth={5} strokeLinecap="round" fill="none">
        <path d={`M472 ${y - 92} L472 ${y}`} />
        <path d={`M472 ${y - 92} L528 ${y - 92}`} />
      </g>
      <g stroke={NAVY} strokeWidth={5} strokeLinecap="round" fill="none">
        <circle cx={562} cy={y - 152} r={10} fill={NAVY} stroke="none" />
        <path d={`M562 ${y - 140} L562 ${y - 78}`} />
        <path d={`M562 ${y - 124} L526 ${y - 94}`} />
        {/* heel-to-toe feet */}
        <path d={`M562 ${y - 78} L556 ${y}`} />
        <path d={`M562 ${y - 78} L568 ${y}`} />
        <path d={`M548 ${y} L560 ${y}`} strokeWidth={6} />
        <path d={`M562 ${y} L574 ${y}`} strokeWidth={6} />
      </g>
      <text x={478} y={y + 42} {...LABEL}>
        Tandem stance, 30s
      </text>
    </Diagram>
  );
}
