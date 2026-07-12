// ─── HOW-TO GUIDES ──────────────────────────────────────────────────────────
// Step-by-step skills guides: how to actually use the cane, get up from the
// fall, place the grab bar. Articles (directory-data.ts) answer "what should
// I buy and who do I call"; how-tos answer "I'm standing here, what do I do
// with my hands." Each how-to attaches to a help category for cross-linking.
//
// steps[] and faqs[] are written twice on purpose: once here as plain text
// (emitted as schema.org HowTo + FAQPage JSON-LD, which is what search
// engines and AI assistants quote), and once as the fuller JSX narrative in
// src/content/howtos/. Keep the two in agreement when editing either.

export type HowToStep = {
  name: string; // short imperative label, e.g. "Stand tall in your shoes"
  text: string; // one- or two-sentence plain-text instruction for JSON-LD
};

export type HowToFaq = {
  question: string;
  answer: string; // plain text; also rendered on the page for GEO snippets
};

export type HowToGroup =
  | "Getting around safely"
  | "If a fall happens"
  | "Around the home"
  | "Out and about"
  | "Money and safety";

export const HOWTO_GROUPS: HowToGroup[] = [
  "Getting around safely",
  "If a fall happens",
  "Around the home",
  "Out and about",
  "Money and safety",
];

export type HowTo = {
  slug: string;
  categorySlug: string; // help category this how-to belongs with
  group: HowToGroup; // visual grouping on the /how-to hub page
  title: string;
  shortTitle: string; // for cards and related-guide links
  description: string; // one-sentence summary; also the meta description
  image: string;
  minutes: number; // honest read time, shown on cards
  takeaways: string[]; // 3 plain-language bullets for "The short version"
  steps: HowToStep[]; // emitted as schema.org HowTo steps
  faqs: HowToFaq[]; // emitted as schema.org FAQPage and rendered on-page
  related: string[]; // slugs of related how-tos, shown at the bottom
};

export const HOW_TOS: HowTo[] = [
  // ── Getting around safely ─────────────────────────────────────────────────
  {
    slug: "how-to-use-a-cane",
    categorySlug: "mobility-equipment",
    group: "Getting around safely",
    title: "How to Use a Cane the Right Way: Height, Which Side, and Walking",
    shortTitle: "How to use a cane",
    description:
      "Most people hold the cane on the wrong side or at the wrong height. The correct fit, the correct side, and the walking pattern, with diagrams.",
    image: "/images/howto/cane-hero.svg",
    minutes: 7,
    takeaways: [
      "Hold the cane in the hand OPPOSITE your weaker or painful leg, and move it forward together with the weaker leg.",
      "With your arm hanging relaxed at your side, the handle should line up with the crease of your wrist, leaving a slight bend in the elbow.",
      "A cane used wrong increases fall risk instead of lowering it, so a five-minute check by a physiotherapist is worth arranging.",
    ],
    steps: [
      {
        name: "Set the height",
        text: "Stand tall in your everyday shoes with arms relaxed at your sides. Adjust the cane so the handle lines up with the crease of your wrist. When you hold it, your elbow should bend slightly, about 15 to 20 degrees.",
      },
      {
        name: "Choose the correct side",
        text: "Hold the cane in the hand opposite your weaker or painful leg. If your right knee is the bad one, the cane goes in your left hand.",
      },
      {
        name: "Move the cane with the weaker leg",
        text: "Move the cane forward at the same time as your weaker leg, then step past both with your stronger leg. The cane and the weak leg share the load together.",
      },
      {
        name: "Keep the cane close",
        text: "Plant the tip about 5 centimetres to the side of your foot, not far out in front. Reaching ahead with the cane pulls you off balance.",
      },
      {
        name: "Check the rubber tip monthly",
        text: "A worn, smooth, or cracked rubber tip slips. Replacement tips cost a few dollars at any pharmacy. Check it the way you would check tires.",
      },
    ],
    faqs: [
      {
        question: "Which side do you hold a cane on?",
        answer:
          "The side opposite the weaker or painful leg. If your left hip or knee is the problem, hold the cane in your right hand. The cane moves forward together with the weaker leg, so the cane and the good arm share the work of the weak side. Holding it on the same side as the injury is the most common mistake and it actually makes walking less stable.",
      },
      {
        question: "How tall should a cane be?",
        answer:
          "Stand upright in your usual shoes with your arms relaxed at your sides. The top of the handle should reach the crease on the inside of your wrist. When you grip the handle, your elbow should have a slight bend of about 15 to 20 degrees. A cane that is too tall pushes your shoulder up and strains the wrist; one that is too short makes you lean and stoop.",
      },
      {
        question: "Does using a cane prevent falls?",
        answer:
          "A properly fitted cane used correctly reduces fall risk by adding a third point of contact and offloading a painful joint. But a cane at the wrong height, on the wrong side, or with a worn tip can increase fall risk. And a cane cannot fix a true balance disorder; if balance is the main problem, ask a doctor or physiotherapist whether a walker is the safer tool.",
      },
      {
        question: "When should someone switch from a cane to a walker?",
        answer:
          "Warning signs include gripping furniture or walls even while using the cane, near-falls or falls with the cane in hand, needing two hands to feel steady, or fear of walking in open spaces. Any of these is a sign to ask for a mobility assessment. In Ontario, a physiotherapist or occupational therapist assessment can be arranged through your doctor or Ontario Health atHome at 310-2222, and it also unlocks Assistive Devices Program funding for a walker.",
      },
    ],
    related: [
      "how-to-climb-stairs-safely",
      "how-to-walk-on-ice-and-snow",
      "how-to-do-balance-exercises-at-home",
    ],
  },
  {
    slug: "how-to-use-a-walker-safely",
    categorySlug: "mobility-equipment",
    group: "Getting around safely",
    title:
      "How to Use a Walker or Rollator Safely: Fit, Posture, and the Sitting-Down Rule",
    shortTitle: "How to use a walker or rollator",
    description:
      "Walking inside the frame, setting the handle height, locking the brakes before sitting, and the turning technique that prevents tips.",
    image: "/images/howto/walker-hero.svg",
    minutes: 7,
    takeaways: [
      "Walk INSIDE the frame, standing tall between the back legs or wheels. Pushing the walker out ahead of you and chasing it is the number one cause of walker falls.",
      "Handle height follows the same rule as a cane: handles at the wrist crease when your arms hang relaxed, elbows slightly bent.",
      "With a rollator, squeeze and lock both brakes every single time before you sit on the seat or lean on the frame.",
    ],
    steps: [
      {
        name: "Set the handle height",
        text: "Stand tall in your shoes with arms relaxed. The handles should line up with the creases of your wrists so your elbows bend slightly when you grip them.",
      },
      {
        name: "Stand inside the frame",
        text: "Position yourself between the rear legs or rear wheels, standing upright. Look ahead, not down at your feet.",
      },
      {
        name: "Move the walker a step's length, then step to it",
        text: "With a standard walker, place all four tips down flat before stepping. With a rollator, push it smoothly at your own walking pace, keeping it close.",
      },
      {
        name: "Lock the brakes before sitting or standing",
        text: "On a rollator, squeeze and lock both hand brakes before sitting on the seat, and keep them locked while getting up. Never sit on a rollator seat and scoot with your feet.",
      },
      {
        name: "Turn in a wide arc",
        text: "Take small steps and turn the walker in a wide circle with you. Pivoting sharply while the frame keeps moving is how walkers tip.",
      },
      {
        name: "Stand up from a chair without pulling on the walker",
        text: "Push up from the chair's armrests to standing first, find your balance, then take hold of the walker. A walker pulled toward you can tip backward onto you.",
      },
    ],
    faqs: [
      {
        question: "How high should walker handles be?",
        answer:
          "The same rule as a cane: standing tall in your usual shoes with arms relaxed at your sides, the handles should reach the crease of your wrist, leaving a 15 to 20 degree bend in your elbows when you grip. Most walkers adjust in one-inch steps; set both sides to the same number and check that the locks click fully closed.",
      },
      {
        question:
          "Can you sit on a rollator seat and push yourself with your feet?",
        answer:
          "No. Rollator seats are for resting in place with the brakes locked, and rolling while seated is a documented cause of serious falls, since the rollator can shoot out from under you or roll away on any slope. If someone needs to be pushed while seated, they need a transport chair or wheelchair, not a rollator.",
      },
      {
        question: "Why does my walker feel like it is running away from me?",
        answer:
          "Almost always because it is too far ahead. The frame should stay close enough that you stand upright inside it. Two other causes: handles set too low, which forces a stooped chase posture, and on rollators, loose brake cables that no longer slow the wheels. Handles and brakes can both be adjusted in minutes at any home health store.",
      },
      {
        question: "Is a walker or a rollator safer?",
        answer:
          "It depends on the person, which is exactly why an assessment matters. A standard walker holds more body weight and cannot roll away, so it is safer for someone who leans heavily. A rollator moves at natural walking speed and has a seat, so it is safer for someone who tires or freezes in open spaces but has the hand strength and memory to use brakes. A physiotherapist sorts this out in one visit, and in Ontario that assessment also unlocks 75 percent Assistive Devices Program funding.",
      },
    ],
    related: [
      "how-to-use-a-cane",
      "how-to-get-up-after-a-fall",
      "how-to-get-in-and-out-of-a-car",
    ],
  },
  {
    slug: "how-to-climb-stairs-safely",
    categorySlug: "mobility-equipment",
    group: "Getting around safely",
    title:
      "How to Go Up and Down Stairs Safely: Up With the Good, Down With the Bad",
    shortTitle: "How to use stairs safely",
    description:
      "The stair rule every physiotherapist teaches, how it works with a cane, and how a helper should stand.",
    image: "/images/howto/stairs-hero.svg",
    minutes: 6,
    takeaways: [
      "Going UP: strong leg steps up first, then the weaker leg and cane join it. Going DOWN: cane and weaker leg go down first, then the strong leg follows.",
      "One step at a time, both feet on each step, is not a failure. It is the recommended technique.",
      "A helper always stands on the downhill side: below you going up, in front of you going down.",
    ],
    steps: [
      {
        name: "Take the handrail first",
        text: "Grip the handrail before your first step, every time, even for two steps. If there is no rail, adding one is one of the cheapest safety upgrades a home can get.",
      },
      {
        name: "Going up, lead with the strong leg",
        text: "Step up with your stronger leg first, then bring the cane and the weaker leg up to the same step. Remember it as up with the good.",
      },
      {
        name: "Going down, lead with the cane and weak leg",
        text: "Place the cane on the lower step, step down with the weaker leg, then bring the stronger leg down to join. Remember it as down with the bad.",
      },
      {
        name: "One step at a time",
        text: "Bring both feet together on each step before taking the next. Speed is not the goal; arriving is.",
      },
      {
        name: "Keep one hand free",
        text: "Never climb stairs with both hands full. Use a shoulder bag or crossbody bag, or keep a basket at the top and bottom of the stairs and move things in trips.",
      },
      {
        name: "Position a helper on the downhill side",
        text: "A helper stands one or two steps below when you go up, and in front facing you when you come down, one hand hovering near the hip or gait belt, never pulling an arm.",
      },
    ],
    faqs: [
      {
        question: "Which foot goes first on stairs with a cane?",
        answer:
          "Going up: the strong leg steps up first, then the cane and the weaker leg follow onto the same step. Going down: the cane goes to the lower step first, the weaker leg steps down to it, and the strong leg comes last. The strong leg always does the lifting and lowering while the cane supports the weak side. Physiotherapists teach it as up with the good, down with the bad.",
      },
      {
        question: "How do you help an elderly person up the stairs?",
        answer:
          "Stay on the downhill side, which means below them going up and in front of them coming down, so you can block a fall rather than be pulled into one. Let them grip the rail and do the work; your hand rests lightly at their waist, hip, or gait belt. Never pull on an arm or hand, which can injure a shoulder and topple you both. If they cannot manage stairs without real lifting, it is time for an occupational therapy assessment and a conversation about a stairlift or main-floor living.",
      },
      {
        question: "Can you use a walker on stairs?",
        answer:
          "No. Standard walkers and rollators are not made for stairs, and carrying one while climbing is a common cause of serious falls. The usual solution is a second, inexpensive walker kept on the other floor, plus a cane or rail technique for the stairs themselves. If the stairs themselves are becoming unsafe, an occupational therapist can assess whether rails, a stairlift, or moving the bedroom downstairs is the right answer.",
      },
    ],
    related: [
      "how-to-use-a-cane",
      "how-to-help-someone-stand-up",
      "how-to-get-up-after-a-fall",
    ],
  },
  {
    slug: "how-to-do-balance-exercises-at-home",
    categorySlug: "mobility-equipment",
    group: "Getting around safely",
    title:
      "How to Do Balance Exercises at Home: The Five That Actually Prevent Falls",
    shortTitle: "Balance exercises at home",
    description:
      "Sit-to-stands, heel raises, tandem stance, and the counter-top routine, based on the exercises proven to cut falls by about a third.",
    image: "/images/howto/balance-hero.svg",
    minutes: 8,
    takeaways: [
      "Balance and strength exercise is the single best-proven way to prevent falls, cutting fall risk by roughly a quarter to a third when done two or three times a week.",
      "The starter routine is five exercises done at a kitchen counter: sit-to-stands, heel raises, toe raises, tandem stance, and side leg raises.",
      "Always have a counter, sturdy chair, or rail within reach, and stop if anything causes pain or dizziness.",
    ],
    steps: [
      {
        name: "Set up a safe spot",
        text: "Stand at a kitchen counter or behind a heavy chair, wearing supportive shoes or bare feet, never socks on smooth floors. Have someone nearby the first few sessions.",
      },
      {
        name: "Sit-to-stands, 10 repetitions",
        text: "From a firm chair, cross your arms or reach forward, lean nose over toes, and stand up without using your hands if you can. Sit back down slowly. This is the single most useful strength exercise for staying independent.",
      },
      {
        name: "Heel raises and toe raises, 10 each",
        text: "Holding the counter lightly, rise up onto your toes, lower with control, then rock back onto your heels lifting your toes. Calf and shin strength is what catches a stumble.",
      },
      {
        name: "Tandem stance, 10 to 30 seconds per side",
        text: "Place one foot directly in front of the other, heel to toe, holding the counter as needed. When 30 seconds gets easy, lighten your grip to fingertips, then hover.",
      },
      {
        name: "Side leg raises, 10 per side",
        text: "Holding the counter, lift one leg straight out to the side keeping your body upright, then lower with control. Hip strength keeps your pelvis level when you step.",
      },
      {
        name: "Repeat three times a week and progress slowly",
        text: "Do the routine at least twice, ideally three times a week. Progress by adding repetitions, lightening your handhold, or standing on a firm cushion, one change at a time.",
      },
    ],
    faqs: [
      {
        question: "What are the best balance exercises for seniors?",
        answer:
          "The exercises with the strongest evidence are functional strength and balance moves done consistently: sit-to-stands from a chair, heel and toe raises, tandem (heel-to-toe) standing and walking, single-leg stands with support, and side leg raises. These are the core of programs like Otago, which reduced falls by around 35 percent in trials. Tai chi also has strong evidence. The key is doing them two to three times a week, and progressing difficulty gradually.",
      },
      {
        question: "Is walking enough to prevent falls?",
        answer:
          "No. Walking is excellent for heart health, mood, and endurance, and it is worth doing, but it does not challenge balance enough to train it. Fall prevention needs exercises that specifically work standing balance and leg strength, like sit-to-stands and tandem stance. The ideal week has both: walks for fitness, plus a short balance routine two or three times.",
      },
      {
        question: "How long before balance exercises make a difference?",
        answer:
          "Most people notice steadier walking and easier chair rises within 6 to 8 weeks of consistent practice, and the fall-reduction evidence is based on programs of 12 weeks or more. It keeps working only as long as you keep doing it, which is why a short routine you actually enjoy beats a perfect one you quit.",
      },
      {
        question:
          "Are there free falls-prevention classes for seniors in Canada?",
        answer:
          "Yes. Most Ontario communities have publicly funded falls-prevention or exercise classes for older adults, run through community health centres, seniors' active living centres, and programs like SMART exercises. Call 211 and ask for falls-prevention classes near you, or ask your doctor or Ontario Health atHome at 310-2222 for a referral. A physiotherapist can also build a personal program, which is worth it after any fall.",
      },
    ],
    related: [
      "how-to-use-a-cane",
      "how-to-get-up-after-a-fall",
      "how-to-walk-on-ice-and-snow",
    ],
  },

  // ── If a fall happens ─────────────────────────────────────────────────────
  {
    slug: "how-to-get-up-after-a-fall",
    categorySlug: "medical-alert-safety",
    group: "If a fall happens",
    title: "How to Get Up After a Fall: The Chair Method, Step by Step",
    shortTitle: "How to get up after a fall",
    description:
      "The safe sequence for getting off the floor, what to do if you cannot get up, and why practising this before a fall matters.",
    image: "/images/howto/after-fall-hero.svg",
    minutes: 8,
    takeaways: [
      "Do not rush up. Lie still, breathe, and check for pain first. If anything might be broken, stay down, stay warm, and call for help instead.",
      "The safe sequence: roll to your side, get onto hands and knees, crawl to a sturdy chair, bring your stronger leg forward, and push up into the seat.",
      "About half of seniors who fall cannot get up without help, which is the real argument for a medical alert button. Practise this method once while someone is with you.",
    ],
    steps: [
      {
        name: "Stay still and check yourself",
        text: "Take several slow breaths where you are. Check for sharp pain, especially hip, wrist, and head. If anything might be injured, do not try to get up; move to step 6.",
      },
      {
        name: "Roll onto your side",
        text: "Bend your knees, turn your head in the direction you want to roll, and roll your whole body to that side in one piece.",
      },
      {
        name: "Get onto hands and knees",
        text: "Push your upper body up with your arms until you are on all fours. Rest here as long as you need.",
      },
      {
        name: "Crawl to a sturdy chair, couch, or bed",
        text: "Crawl to the nearest solid piece of furniture and place both hands flat on the seat.",
      },
      {
        name: "Bring your stronger foot forward and push up",
        text: "From kneeling, bring your stronger leg forward so that foot is flat on the floor, then push down through your hands and that leg, and turn to sit in the chair. Sit and rest for a few minutes before standing, and tell your doctor about the fall.",
      },
      {
        name: "If you cannot get up, protect yourself while you wait",
        text: "Press your medical alert button or reach a phone if you can. Pull a blanket, coat, or cushion over yourself for warmth, pad bony spots, and shift your weight every 20 to 30 minutes. Make noise at intervals rather than continuously.",
      },
    ],
    faqs: [
      {
        question: "What should you do immediately after falling?",
        answer:
          "Nothing, for a minute. The instinct is to scramble up quickly, often out of embarrassment, and that is how a bruise becomes a second, worse fall. Lie still, take a few slow breaths, and check yourself: head, wrists, hips. Sharp pain, a leg that will not take weight, or hitting your head means stay down and call for help. If you feel unhurt, use the chair method to get up slowly, and still mention the fall to your doctor, because falls are often the first sign of something treatable.",
      },
      {
        question: "What if an elderly person falls and cannot get up?",
        answer:
          "This is common, not rare: roughly half of older adults who fall cannot get up without help. If you are with them, do not pull them up by the arms. Help them through the chair method, supporting at the trunk or hips, and only if they are uninjured. If they are hurt, keep them still and warm and call 911. If they live alone, this scenario is the strongest case for an automatic fall-detection pendant, because the damage from a fall is often done by the hours spent on the floor afterward, not the fall itself.",
      },
      {
        question: "Should you see a doctor after a fall even if you feel fine?",
        answer:
          "Yes, mention every fall to your doctor even when nothing hurts. Falls in older adults are frequently a symptom, not just an accident: new medication side effects, blood pressure drops, an infection, vision changes, or early balance decline can all announce themselves as a fall first. A doctor can also check for slow-developing injuries, and a fall on a blood thinner with any head contact deserves same-day medical attention, full stop.",
      },
      {
        question: "Why practise getting up from the floor?",
        answer:
          "Because the first time you try the chair method should not be the day you are shaken, sore, and alone. Practising once or twice, with a family member or physiotherapist in the room, builds the muscle memory and, just as important, the confidence. Fear of falling makes people move less, which weakens legs, which causes falls. Knowing you can get yourself up breaks that spiral.",
      },
    ],
    related: [
      "how-to-help-someone-stand-up",
      "how-to-do-balance-exercises-at-home",
      "how-to-place-grab-bars",
    ],
  },
  {
    slug: "how-to-help-someone-stand-up",
    categorySlug: "home-care",
    group: "If a fall happens",
    title: "How to Help Someone Stand Up Without Hurting Them or Your Back",
    shortTitle: "How to help someone stand up",
    description:
      "Never pull by the arms. The setup, the stance, and the cues that let them do the work while you steady, from chair, bed, or floor.",
    image: "/images/howto/helping-up-hero.svg",
    minutes: 7,
    takeaways: [
      "Never pull someone up by the hands or arms. It injures shoulders, and if they slip you both go down. Your job is to steady, not to lift.",
      "Set them up to succeed: bottom to the edge of the seat, feet back under the knees, lean nose over toes, push from the armrests, rock on a count of three.",
      "If you are regularly lifting their body weight, the situation has outgrown hands-on help. Ask for an occupational therapy assessment and the right equipment.",
    ],
    steps: [
      {
        name: "Set up the seat and their feet",
        text: "Have them scoot their bottom to the front edge of the chair and pull both feet back so they are under the knees, slightly apart, flat on the floor.",
      },
      {
        name: "Stand at their side, not in front",
        text: "Stand slightly to their weaker side, one foot forward, knees bent, back straight. Standing directly in front blocks the forward lean they need.",
      },
      {
        name: "Place your hands at the trunk, never the arms",
        text: "Rest one hand flat at their lower back or hip, or grip a gait belt if they wear one. Let them push from the armrests with their own arms.",
      },
      {
        name: "Cue the lean: nose over toes",
        text: "Ask them to lean forward until their nose is over their toes. It feels like falling forward but it is what makes standing physically possible.",
      },
      {
        name: "Rock and rise on three",
        text: "Count one, two, three. On three they push from the armrests and legs while you steady at the hip and follow them up. Pause standing until they feel settled.",
      },
      {
        name: "If they start to go down, guide, do not catch",
        text: "Do not try to hold their full weight. Pull them close, bend your knees, and slide them down your body slowly to the floor. A controlled lowering is a success, not a failure.",
      },
    ],
    faqs: [
      {
        question: "How do you lift an elderly person off the floor?",
        answer:
          "You mostly don't, and that is the point. If they are uninjured, coach them through the chair method: roll to the side, hands and knees, crawl to a sturdy chair, strong foot forward, push up while you steady at the hips. If they cannot do most of the work themselves, or they are injured, call for help rather than lifting; in many regions paramedics attend lift-assist calls, and a human back is not built to deadlift a loved one safely. Repeated floor rescues are a signal to get an occupational therapy assessment.",
      },
      {
        question: "What is a gait belt and do we need one?",
        answer:
          "A gait belt is a wide, sturdy belt fastened around the waist that gives a helper something safe to hold, so assistance goes through the trunk instead of yanking on arms. They cost about 20 to 40 dollars at home health stores and pharmacies. If you steady someone daily, a gait belt plus ten minutes of instruction from a physiotherapist or home care nurse is one of the best investments in both your backs.",
      },
      {
        question: "Why should you never pull someone up by the arms?",
        answer:
          "Older shoulders dislocate and tear easily, and arm-pulling is a classic cause of caregiver back injuries and double falls, where the helper is pulled down too. Pulling on arms also puts the person in a position where they physically cannot help themselves. Support at the trunk, hips, or gait belt keeps their arms free to push, which is the strongest and safest movement they have.",
      },
      {
        question: "When does someone need more than hands-on help to stand?",
        answer:
          "When you are lifting rather than steadying: if they cannot get most of the way up with their own arms and legs, if transfers happen many times a day, or if either of you has been hurt or nearly hurt. That is the point for an occupational therapy assessment, arranged in Ontario through the doctor or Ontario Health atHome at 310-2222, which can recommend equipment like raised seats, transfer poles, or a mechanical lift, and often unlocks funded home care support.",
      },
    ],
    related: [
      "how-to-get-up-after-a-fall",
      "how-to-climb-stairs-safely",
      "how-to-get-in-and-out-of-a-car",
    ],
  },

  // ── Around the home ───────────────────────────────────────────────────────
  {
    slug: "how-to-place-grab-bars",
    categorySlug: "medical-alert-safety",
    group: "Around the home",
    title:
      "How to Place Grab Bars: Exact Heights and Positions That Actually Help",
    shortTitle: "Where to place grab bars",
    description:
      "The three bars every bathroom needs, the 33-to-36-inch rule, why towel bars and suction cups fail, and what installation costs.",
    image: "/images/howto/grab-bars-hero.svg",
    minutes: 7,
    takeaways: [
      "Three bars cover most bathrooms: a vertical bar at the tub or shower entry, a horizontal bar on the long inside wall, and a bar beside the toilet.",
      "Horizontal bars go 33 to 36 inches (84 to 91 cm) above the floor, anchored into studs or with proper hollow-wall anchors rated for at least 250 pounds.",
      "Towel bars and suction-cup bars are not grab bars. Both let go under real body weight, exactly when you need them most.",
    ],
    steps: [
      {
        name: "Start with the tub or shower entry",
        text: "Mount a vertical bar 18 to 24 inches long at the entry edge of the tub or shower, where a hand naturally reaches while stepping over. Its lower end starts about 32 to 36 inches above the floor.",
      },
      {
        name: "Add a horizontal bar inside the shower",
        text: "On the long wall of the tub or shower, mount a horizontal bar 33 to 36 inches above the floor of the tub or shower base. On a tub's faucet wall, a diagonal bar angled up away from the taps also works well.",
      },
      {
        name: "Put a bar beside the toilet",
        text: "Mount a horizontal bar on the nearest side wall, 33 to 36 inches above the floor. If no wall is close enough, a floor-mounted or bolt-through toilet safety frame is the honest alternative.",
      },
      {
        name: "Anchor into studs or rated anchors",
        text: "Every bar must be screwed into wall studs or installed with hollow-wall anchors rated for 250 to 300 pounds. A bar in drywall alone will rip out under a falling body.",
      },
      {
        name: "Test each bar hard before trusting it",
        text: "Grip each installed bar and pull with real force in several directions. It should feel like part of the building.",
      },
      {
        name: "Think beyond the bathroom",
        text: "A vertical bar at the front door where shoes go on, a rail on both sides of the stairs, and a bedside pole or rail solve the other three places falls cluster at home.",
      },
    ],
    faqs: [
      {
        question: "How high should grab bars be installed?",
        answer:
          "The standard for horizontal grab bars is 33 to 36 inches (84 to 91 centimetres) from the floor to the centre of the bar, which matches Canadian accessibility guidance. Inside a tub, measure from the tub floor. Vertical entry bars start around 32 to 36 inches from the floor. That said, the best height is the one matched to the person: have them mime the movement, stepping in, sitting, standing, and mark where their hand naturally lands.",
      },
      {
        question: "Are suction cup grab bars safe?",
        answer:
          "Not for body weight. Suction bars can be a light touch point for balance on smooth tile, but they detach without warning, especially on grout lines, textured tile, or when the seal ages, and the failure happens exactly when someone is falling and grabs hard. Any bar expected to catch a person must be mechanically fastened to studs or rated anchors. If a rental or travel situation truly rules out drilling, treat a suction bar as a reminder, never as a rescue.",
      },
      {
        question: "What does it cost to install grab bars?",
        answer:
          "The bars themselves run about 20 to 60 dollars each for solid stainless models. Professional installation in Ontario typically lands between 100 and 200 dollars per bar including the hardware, less per bar when several go in at once. A full three-bar bathroom is usually a few hundred dollars total, which is roughly one percent of the cost of the average fall-related hospital stay. Handy family can install them, but only if they can find studs and use rated anchors properly.",
      },
      {
        question: "Can a towel bar work as a grab bar?",
        answer:
          "No, and this one hurts people every year. Towel bars are decorative hardware attached with small screws or adhesive, rated to hold a towel, not the 200-plus pounds of force of a falling adult. If a towel bar is where a hand naturally goes, that is valuable information: replace it with a real grab bar in the same spot. Several manufacturers make grab bars with integrated towel rails so the bathroom does not have to look institutional.",
      },
    ],
    related: [
      "how-to-get-up-after-a-fall",
      "how-to-help-someone-stand-up",
      "how-to-do-balance-exercises-at-home",
    ],
  },

  // ── Out and about ─────────────────────────────────────────────────────────
  {
    slug: "how-to-get-in-and-out-of-a-car",
    categorySlug: "transportation",
    group: "Out and about",
    title: "How to Get In and Out of a Car Safely: Sit First, Swivel Second",
    shortTitle: "How to get in and out of a car",
    description:
      "The backwards-in method, the nose-over-toes exit, how a helper should help, and the two cheap gadgets that make it easier.",
    image: "/images/howto/car-transfer-hero.svg",
    minutes: 6,
    takeaways: [
      "Getting in: back up to the seat until you feel it behind your legs, sit down first, then swivel both legs in together. Never lead with one leg.",
      "Getting out: swivel both feet to the pavement first, scoot forward, feet flat, lean nose over toes, and push up from the seat or door frame.",
      "Prepare the seat before the person: slide it back, recline slightly, and park away from curbs and slopes with room for the door to open fully.",
    ],
    steps: [
      {
        name: "Prepare the car first",
        text: "Slide the front passenger seat back and recline it slightly, and park on flat ground with space for the door to open fully. Getting in is easier when the seat is low-effort to reach.",
      },
      {
        name: "Back up to the seat",
        text: "Walk to the open door, turn around, and back up until you feel the seat edge against the backs of both legs. Do not duck your head in first.",
      },
      {
        name: "Sit down, then swivel",
        text: "Lower yourself onto the seat, keeping feet on the pavement, using the seat or door frame for support. Then lean back slightly and swivel both legs into the car together.",
      },
      {
        name: "To get out, swivel both feet to the ground first",
        text: "Turn your whole body until both feet are flat on the pavement, then scoot forward to the seat edge.",
      },
      {
        name: "Nose over toes and push up",
        text: "Lean forward until your nose is over your toes, then push up from the seat frame or the car body, taking a moment to find your balance before walking.",
      },
      {
        name: "Helpers offer a forearm, never pull a hand",
        text: "A helper stands by the open door, braces the door itself, and offers a bent forearm to grip. Pulling by the hand or under the arm hurts shoulders and unbalances everyone.",
      },
    ],
    faqs: [
      {
        question: "What is the easiest way for a senior to get into a car?",
        answer:
          "Backwards. Approach the open door, turn around, back up until the seat touches the backs of the legs, sit down while the feet stay on the pavement, then swivel both legs in together. The common instinct, ducking the head in and leading with one leg, twists the spine and leaves the person off balance on one foot. The front passenger seat with the seat slid back is almost always the easiest position: higher than the rear bench in most sedans, more legroom, and a stable door to hold.",
      },
      {
        question: "What gadgets help with car transfers?",
        answer:
          "Two cheap ones do most of the work. A swivel cushion, around 30 to 50 dollars, is a rotating disc on the seat that turns the sit-then-swivel move into one smooth motion. A portable support handle, often called a car cane, slots into the door latch and gives a solid vertical grip for pushing up, around 20 to 40 dollars. A leg lifter strap helps a weak leg in after hip surgery. For anyone in a wheelchair, transfers deserve a proper occupational therapy consult rather than gadgets.",
      },
      {
        question: "How do you help someone out of a car without hurting them?",
        answer:
          "Open the door fully and brace it with your body so it cannot swing. Let them swivel both feet to the ground and scoot to the seat edge themselves, then offer your forearm, held vertically, for them to grip while they push up from the seat with the other hand. Cue them to lean nose over toes before rising. Never pull on a hand, wrist, or armpit; older shoulders are fragile, and a pull that slips takes you both down.",
      },
    ],
    related: [
      "how-to-help-someone-stand-up",
      "how-to-use-a-walker-safely",
      "how-to-walk-on-ice-and-snow",
    ],
  },
  {
    slug: "how-to-walk-on-ice-and-snow",
    categorySlug: "mobility-equipment",
    group: "Out and about",
    title: "How to Walk on Ice and Snow: The Penguin Walk and the Right Boots",
    shortTitle: "How to walk on ice and snow",
    description:
      "The penguin walk explained properly, how to pick boots that actually grip, ice cleats and their one dangerous habit, and when not to go out at all.",
    image: "/images/howto/winter-walking-hero.svg",
    minutes: 7,
    takeaways: [
      "Walk like a penguin on ice: short flat-footed steps, feet slightly turned out, knees soft, lean a little forward, arms out of your pockets and slightly raised.",
      "Boot treads matter more than boot price. Canadian researchers at KITE rate real winter boots for ice grip at ratemytreads.com; look for their snowflake rating before buying.",
      "Ice cleats grip well outdoors but are dangerously slippery on indoor tile and stone. Take them off at the door, every time.",
    ],
    steps: [
      {
        name: "Decide if the trip is worth it",
        text: "On freezing-rain and freeze-thaw days, the safest technique is postponement. Groceries can be delivered; a hip fracture cannot be undone. Aim for midday, after sun and salt have worked.",
      },
      {
        name: "Wear boots with real ice grip",
        text: "Choose winter boots with soft rubber soles and deep treads, ideally models rated for ice at ratemytreads.com, the independent Canadian lab that tests boots on real ice.",
      },
      {
        name: "Do the penguin walk on any icy patch",
        text: "Shorten your steps, keep your whole foot flat as it lands, turn your toes slightly outward, bend your knees a little, and lean slightly forward so your weight stays over your front foot.",
      },
      {
        name: "Keep hands free and arms out",
        text: "Hands out of pockets, arms slightly away from your body for balance. Carry things in a backpack or crossbody bag, and wear mittens so cold hands do not tempt you into pockets.",
      },
      {
        name: "Add traction to your gear",
        text: "Slip-on ice cleats give real grip on packed snow and ice, and a flip-down ice pick attachment turns a cane into a winter cane. Remove cleats before stepping onto indoor floors, where they skate.",
      },
      {
        name: "Use every rail, and assume every surface is ice",
        text: "Treat painted lines, metal plates, wooden porches, and smooth stone as ice when temperatures are near freezing. Step down from curbs and vehicles onto a flat foot, holding something solid.",
      },
    ],
    faqs: [
      {
        question: "What is the penguin walk?",
        answer:
          "It is the technique of walking the way penguins do on ice: short, shuffling steps with the whole foot landing flat, toes pointed slightly outward, knees relaxed, body leaning a little forward so your centre of gravity stays over your front foot, and arms slightly out for balance. Normal walking lands on the heel with your weight split between feet, which is exactly how slips start. The penguin walk looks unhurried because it is; on ice, dignity is arriving upright.",
      },
      {
        question: "What are the best winter boots for seniors on ice?",
        answer:
          "The honest answer is: the ones with independently tested grip. KITE, the rehabilitation research arm of Toronto's University Health Network, tests winter boots on real ice ramps and publishes ratings at ratemytreads.com, and their snowflake-rated boots dramatically outperform most footwear regardless of price. Beyond the rating, look for soft rubber that stays flexible in the cold, deep multi-directional treads, low wide heels, and easy fastening, because a boot that is a struggle to put on ends up replaced by slippery shoes.",
      },
      {
        question: "Are ice cleats safe for elderly people?",
        answer:
          "Outdoors on ice and packed snow, yes, slip-on cleats or crampons grip far better than any boot sole and are worth having. They carry two real risks to manage. First, they are genuinely slippery on hard indoor floors like tile, terrazzo, and polished concrete, so they must come off at every doorway, which takes balance to do standing; choose easy on-off styles and sit down to remove them. Second, anyone unsteady enough that bending to fit cleats is risky should ask a physiotherapist whether a cane ice pick or simply winter-rated boots is the better plan.",
      },
      {
        question: "Should seniors use walking poles in winter?",
        answer:
          "Used properly, yes. A pair of walking poles with carbide ice tips adds two extra contact points and has good evidence for stability and confidence on winter ground. A single cane also works when fitted with a flip-down ice pick attachment. The caution is the same as any equipment: poles help balance but do not create it, so someone having near-falls indoors needs an assessment, not just gear.",
      },
    ],
    related: [
      "how-to-use-a-cane",
      "how-to-do-balance-exercises-at-home",
      "how-to-get-up-after-a-fall",
    ],
  },

  // ── Money and safety ──────────────────────────────────────────────────────
  {
    slug: "how-to-spot-a-scam",
    categorySlug: "legal-financial",
    group: "Money and safety",
    title:
      "How to Spot a Scam Aimed at Seniors: The Five Red Flags and the One Rule",
    shortTitle: "How to spot a scam",
    description:
      "The grandparent scam, fake CRA calls, bank impostors, and AI voice cloning, plus the hang-up-and-call-back rule that defeats nearly all of them.",
    image: "/images/howto/spot-scam-hero.svg",
    minutes: 9,
    takeaways: [
      "Every scam runs on the same fuel: urgency, secrecy, and an unusual way to pay. Any one of those three is a stop sign.",
      "The one rule that defeats almost every scam: hang up, look up the real number yourself, and call back. No legitimate caller minds.",
      "No bank, police force, or the CRA will ever ask for gift cards, bitcoin, or secrecy. Ever. That request is the scam announcing itself.",
    ],
    steps: [
      {
        name: "Learn the three-part signature",
        text: "Urgency (act right now), secrecy (do not tell your family or the bank), and strange payment (gift cards, bitcoin, wire transfer, a courier picking up cash). Any one of these means scam until proven otherwise.",
      },
      {
        name: "Apply the one rule: hang up and call back",
        text: "Whoever the caller claims to be, your grandchild, your bank, the CRA, the police, hang up, find the real number yourself on your card or bill, and call back. Scammers can fake caller ID, but they cannot answer the real number.",
      },
      {
        name: "Set a family password",
        text: "Agree on a family code word for real emergencies. AI can now clone a grandchild's voice from a short online clip, so a familiar voice on a distressed call is no longer proof of anything. No password, no money, no exceptions.",
      },
      {
        name: "Never act on a pop-up or unsolicited tech call",
        text: "A computer warning with a phone number is always fake. Microsoft, Apple, Amazon, and your bank do not call about viruses or refunds. Turn the machine off and ask a trusted person to look.",
      },
      {
        name: "If money or information already went out, act fast and without shame",
        text: "Call the bank immediately to freeze and trace, then report to the Canadian Anti-Fraud Centre at 1-888-495-8501 and local police. If a Social Insurance Number leaked, notify Service Canada and the credit bureaus, Equifax and TransUnion.",
      },
      {
        name: "Harden the phone and the mailbox",
        text: "Let unknown callers go to voicemail; real callers leave messages. Register with the National Do Not Call List so remaining telemarketing calls are more obviously suspect, and be cautious with contest entries and surveys that harvest phone numbers.",
      },
    ],
    faqs: [
      {
        question: "What are the most common scams targeting seniors in Canada?",
        answer:
          "The current heavy hitters are the grandparent or emergency scam (a fake grandchild in trouble needing quiet, urgent money, now often boosted by AI voice cloning), fake CRA or Service Canada calls threatening arrest, bank investigator scams asking for help catching a teller by withdrawing cash, tech support pop-ups with phone numbers, romance scams on dating and social sites, and prize scams that need a fee to release winnings. The Canadian Anti-Fraud Centre tracks these, and seniors lose hundreds of millions of dollars a year in reported cases alone, with most losses never reported.",
      },
      {
        question: "Does the CRA ever call people?",
        answer:
          "Yes, the real CRA does phone people sometimes, which is exactly what makes the scam version work. The difference is in what happens next. The real CRA will never demand payment by gift card, bitcoin, or e-transfer, never threaten immediate arrest or deportation, never take payment over the phone right then, and never object to you hanging up and calling back on the official number, 1-800-959-8281. When in doubt, hang up and check your account at canada.ca or call that number yourself.",
      },
      {
        question:
          "What should I do if my parent already sent money to a scammer?",
        answer:
          "Move fast and skip the blame entirely. Call their bank's fraud line immediately; transfers can sometimes be frozen or traced in the first hours. Report it to the Canadian Anti-Fraud Centre at 1-888-495-8501 and to local police, and keep every text, email, and receipt as evidence. If personal information leaked, add fraud alerts with Equifax and TransUnion. Then treat your parent gently: these are professional operations that fool lawyers and accountants too, and shame is what stops victims from reporting and lets scammers return for a second round. Repeat targeting is common, so expect follow-up calls and plan for them together.",
      },
      {
        question:
          "How do I talk to my parents about scams without scaring them?",
        answer:
          "Make it about the scammers' skill, not your parents' vulnerability. Share a news story and ask what they think, rather than delivering a lecture. Agree together on two simple house rules: we hang up and call back on a number we find ourselves, and we never buy gift cards for anyone over the phone. Set up the family password for emergencies at the same time, framed as protecting the grandchildren too, since the scam impersonates them. One calm conversation and two rules beat a hundred warnings.",
      },
    ],
    related: [
      "how-to-get-up-after-a-fall",
      "how-to-place-grab-bars",
      "how-to-help-someone-stand-up",
    ],
  },
];

export function findHowTo(slug: string): HowTo | undefined {
  return HOW_TOS.find((h) => h.slug === slug);
}

export function howTosForCategory(categorySlug: string): HowTo[] {
  return HOW_TOS.filter((h) => h.categorySlug === categorySlug);
}
