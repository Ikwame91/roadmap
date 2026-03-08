# Kwame's Engineering Journey — Full Context Document

> This document captures the full arc of a strategic conversation about career direction, learning decisions, and the roadmap that came out of it. It exists so that any future conversation — with an AI, a mentor, or yourself — can pick up exactly where this one left off.

---

## Who Kwame Is

**Name:** Kwame
**Location:** Accra, Ghana
**Education:** Computer Science, KNUST
**Current Role:** MIS Department, Bank of Africa — data validation and technical systems support
**Current Environment:** Described as the wrong environment — does not align with his true goals. He stays because it pays, but it drains him.

**Background as a developer:**
- Flutter (mobile) — primary and most experienced stack
- Node.js + TypeScript — learned the basics, built real projects, not yet at a level he'd call himself a backend developer
- Built a Contact Management API and a Product API with a connected blog web app
- Python — first language he ever learned, but learned it without knowing why, which created a psychological resistance to it
- Some exposure to TensorFlow (via CropScan project — see below)

**Work schedule reality:**
- Leaves home at 5:50am due to traffic and troski commute
- At work by 7–7:20am, work starts immediately
- Officially 7–5 but realistically leaves with his boss, often at 6:30–7pm
- Gets home around 8pm, sleeps around 10pm
- Realistic weekday learning window: 30 minutes maximum — review only, no new concepts
- Friday nights: 2–3 hours (decompression energy available)
- Saturday mornings: 3–4 hours — primary learning session (must happen before phone/scrolling)
- Sunday afternoons: 2–3 hours after church (church runs 7am–12pm)
- Last Saturday of every month: DevCongress meetup — developer community event focused on AI and security
- **Total realistic learning time: 8–10 hours per week**

---

## The Project That Revealed His True Level

### CropScan

A mobile application helping farmers detect crop diseases by photographing crop leaves. Built with Flutter and TensorFlow.

**Why it matters:**
- Designed for **offline use** — intentional constraint because rural farmers in Ghana lack reliable internet access. This was not a tutorial decision. This was systems thinking applied to a real user constraint.
- **Trained his own model** using Jupyter Notebook on a GPU machine (Nvidia). Used Adam optimization — and when asked why Adam over SGD, he explained it correctly: Adam adapts the learning rate per parameter individually.
- **Converted the trained model to TFLite** via a conversion script and integrated it into Flutter as a separate service layer.
- **Consciously applied separation of concerns** in the Flutter architecture — not because a tutorial told him to, but because that is how he has always built Flutter apps.

**Assessment:** CropScan is not the work of a vibe coder. It demonstrates real product thinking, systems constraint awareness, OOP/architecture instincts, and genuine ML pipeline understanding. Kwame underestimates himself.

**The real problem identified:** His current environment is slowly eroding the quality of his thinking. The vibecoding tendency is not who he is — it is what happens when a serious engineer is tired, isolated, and unsupported. He needs an environment that forces him to think, not just produce.

---

## The Goal

**Primary goal:** Become an engineer who understands systems deeply — backend plus infrastructure, not just framework-dependent. Someone who knows *why* systems are designed certain ways, not just how to use the tools.

**Turntabl Ghana** is the dream workplace. It runs a graduate/trainee programme (TLC) annually. However Turntabl is a destination on the journey, not the only destination. The goal is the engineer, not just the job.

**What Turntabl's hiring actually requires (from a current employee):**
- Java + React
- OOP knowledge
- Design pattern knowledge
- Light DSA
- Process: 2 online assessments + 1 interview (live coding for DSA + behavioral + OOP questions)
- Note: Turntabl is currently going through financial difficulty (lost biggest client, layoffs) so the 2026 TLC cohort is uncertain

---

## The Dilemma That Started This Conversation

### Slightly Techie School (run by Kwesi Dadson, active on X)

A programme in Ghana with a few offerings:

1. **Fundamentals of Backend** — Python, starts from scratch
2. **DevOps** — intermediate to advanced, requires catching up before cohort starts

**The cohort start date** was approximately March 24, 2026 — roughly 2.5 weeks from when this conversation happened.

**Kwame's initial lean:** DevOps, because he has longed to understand infrastructure and how systems work. Not for salary — for genuine curiosity and career trajectory. He wants to combine backend and DevOps.

**Developer friend's advice:** Don't pay for a from-scratch course. Reasoning: in the AI era, aggressive upskilling matters more than slow, foundational courses below your current level.

### Questions Asked to Dadson (and answers received)

Kwame sent Dadson a well-constructed message explaining his background (Flutter, Node.js, no DevOps), his willingness to give everything, and asked for honest feedback.

**Dadson's response:**
- "Honestly I would say go into the backend more"
- "People hire fullstack devs the most"
- "Mobile + backend / Frontend + backend — especially startups"
- "DevOps is a sort after skill but you can't really get a job easily if you're not seasoned"
- "Most DevOps engineers have proper backend experience anyway"

**Kwame's reaction to the Python backend course:** If it were Node.js, Java, or intermediate-to-advanced level, he wouldn't hesitate. The resistance is not laziness — it is a legitimate fit problem. Python from scratch does not meet him where he is.

### The Real Need Identified

Kwame is not buying a course. He is buying an **environment**: structure, accountability, community, and mentorship. His current workplace drains him and he needs an external environment to counteract it.

**Conclusion on Slightly Techie:** Neither current offering fits his level and goal cleanly. The Python course is too basic. The DevOps course is too advanced without backend depth. The vehicle is wrong even if the destination is right.

---

## The Decision Made

**Don't pay for the Python backend course.**
**Don't rush into DevOps in 2.5 weeks.**
**Solve the accountability and community problem through the right vehicle.**

**The path forward:**
1. Go deeper on Node.js/TypeScript backend — not new things, but genuine depth
2. Add PostgreSQL alongside existing MongoDB knowledge
3. Pick up Java — not to become a Java developer, but because Java forces OOP discipline that JavaScript never will
4. Build toward system design and architecture understanding
5. DevOps comes naturally after this as Phase 5 — Dadson himself confirmed this is the correct order

**DevCongress** (last Saturday monthly) is already an existing community resource. It should be used intentionally — show up with something to share every time, not just attend.

---

## The Accountability Framework

Four non-negotiable rules:

1. **The Explain Test** — before moving to the next topic, explain the current one out loud without AI. If you can't explain it, you don't know it yet.
2. **The Saturday Lock** — laptop before phone, every Saturday morning. This single habit determines whether the roadmap works.
3. **The DevCongress Rule** — every last Saturday, go with something to share. Even something small.
4. **Sunday 3 Sentences** — what you built, what you understood, what confused you. Written down. Publicly if possible.

---

## The Roadmap (4 Phases, ~9 Months, 8–10 hrs/week)

### Phase 1 — Solidify the Foundation (8 weeks)
**Stack:** Node.js · TypeScript (strict) · Auth · Testing

| Topic | Depth Required |
|-------|---------------|
| TypeScript strict mode | Rebuild Contact API entirely. Explain every annotation. |
| Auth done right | Refresh tokens, rotation, revocation. Whiteboard full flow. |
| Input validation | Zod, Helmet, rate limiting on all endpoints |
| Testing | Jest, unit + integration tests. Understand what each test proves. |
| Task API project | Build from scratch with everything applied. Pagination, filtering, sorting. Architecture whiteboard from memory. |

**Milestones:**
- TypeScript strict — Contact API rebuilt, every annotation explainable
- Refresh token strategy implemented and fully understood
- All endpoints validated, rate limited, secured
- First tests written — controllers and middleware covered
- Task API on GitHub — architecture whiteboard passed

---

### Phase 2 — Backend Architecture & Systems (10 weeks)
**Stack:** PostgreSQL · Redis · BullMQ · System Design

| Topic | Depth Required |
|-------|---------------|
| PostgreSQL | SQL deeply, indexing, ACID, transactions. Know when NOT to use relational DB. |
| Redis | Cache strategies, invalidation, sessions, token blacklisting. What breaks if Redis goes down? |
| Message queues | BullMQ, job lifecycle, failure/retry/dead letter queues |
| System design | CAP theorem, scalability, load balancing. Design 3 systems on paper. Read DDIA ch. 1–3. |

**Key reading:** Designing Data-Intensive Applications (chapters 1–3)

**Milestones:**
- Task API migrated to PostgreSQL. SQL decisions explainable.
- Redis caching + invalidation strategy implemented
- Background job queue built and job lifecycle understood
- 3 systems designed on paper. CAP theorem explained with real examples.

---

### Phase 3 — Java & OOP Discipline (8 weeks)
**Stack:** Java · Spring Boot · SOLID · Design Patterns · DSA basics

| Topic | Depth Required |
|-------|---------------|
| Java fundamentals | Syntax, strong typing vs TypeScript, Collections framework, basic Spring Boot API |
| SOLID principles | All 5 explained with examples from your own code — not theoretical definitions |
| Design patterns | Repository, Factory, Singleton, Observer, Strategy — understand the problem each solves |
| DSA basics | Arrays, hashmaps, linked lists, basic recursion. 2–3 LeetCode easy per week. Explain solution aloud every time. |

**Milestones:**
- Basic Spring Boot API built. Comfortable with Java.
- All 5 SOLID principles explained with own code examples.
- 3 design patterns implemented in code. Know why each exists.
- 20+ LeetCode easy problems solved with explanations including time/space complexity.

---

### Phase 4 — Build Something Real (6 weeks)
**Goal:** One substantial capstone project using everything from phases 1–3

| Task | Requirement |
|------|------------|
| System design document | Written before any code. Architecture diagram, data models, API contracts, documented tradeoffs. |
| Capstone build | Node.js + TypeScript + PostgreSQL + Redis + BullMQ. Tests written alongside code. Every decision documented with a reason. README reads like a design document. |
| Interview prep | 5+ mock interviews. Live coding practice. OOP and design pattern questions answered with own code examples. Story: CropScan → Bank of Africa → why Turntabl. |

**Project ideas:** Fintech-adjacent (fits Bank of Africa context) or agri-tech (fits CropScan history)

**Phase 5 (future):** DevOps — Docker, CI/CD, cloud infrastructure. By this point Kwame will understand what he is deploying and why it is designed that way. Slightly Techie DevOps cohort becomes relevant here.

---

## Weekly Schedule

| Day | Time | Activity |
|-----|------|----------|
| Mon–Thu | ~30 min | Review and reinforce only. No new concepts. Re-read notes, draw architecture from memory, 1 LeetCode easy (Phase 3+). |
| Friday evening | 2–3 hrs | New concept session. Read, understand, write down what confused you. Don't build yet. |
| Saturday morning | 3–4 hrs | **PRIMARY SESSION — SACRED. Laptop before phone.** Build what you learned Friday. Apply the explain test. |
| Sunday afternoon | 2–3 hrs | Apply and consolidate. Extend Saturday's work. Write the 3 sentences. |
| Last Saturday | — | DevCongress. Go with something to share. |

---

## Deliverables Created

1. **`kwame_roadmap_v2.html`** — Interactive roadmap with three views:
   - Skill Map (node-graph style, click to expand each topic)
   - Weekly Plan (schedule with expandable daily sessions)
   - Tracker (all milestones with live progress bar)
   - Hosted locally. Recommended deployment: GitHub Pages for access from anywhere.

2. **`context.md`** (this file) — Full capture of the conversation, decisions, reasoning, and roadmap for continuity.

---

## Key Insights From This Conversation

1. **Kwame is not a beginner.** CropScan proved this. The vibecoding tendency is environmental, not fundamental.

2. **He was trying to solve four problems with one decision** — wrong workplace, Turntabl as target, DevOps as passion, community as need. Separating these was the first clarifying move.

3. **The real purchase is environment, not knowledge.** He said it clearly: structure, accountability, community, mentorship. Any learning vehicle that provides this is the right one — not necessarily Slightly Techie.

4. **Dadson gave honest advice that actually aligned with the analysis** — backend depth before DevOps. Most DevOps engineers come from solid backend backgrounds. The order matters.

5. **Turntabl requires Java/React/OOP/DSA** — neither Slightly Techie course addressed this directly. The roadmap does.

6. **"Repetition is the mother of skills. Little actions done every day accumulate over time."** — Kwame's own words. The entire accountability system is built around this belief.

---

## Open Threads (Things Not Yet Resolved)

- Kwame has not yet explored other community/accountability options beyond Slightly Techie in Ghana or online
- The conversation about his current workplace and what the right exit strategy looks like was flagged as a separate topic for another time
- GitHub Pages setup for the roadmap HTML file was mentioned but not walked through

---

*Last updated: March 2026. This document should be updated as phases are completed and goals evolve.*
