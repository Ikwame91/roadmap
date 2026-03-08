/* ══════════════════════════════════
   KWAME — BACKEND ROADMAP
   Application Logic
══════════════════════════════════ */

// ── STORAGE (progress persists across page reloads) ──

const STORAGE_KEY = "kwame_roadmap_progress";

function saveState() {
  const state = { milestones: [], checks: [] };
  document.querySelectorAll(".milestone").forEach((m) => {
    state.milestones.push(m.classList.contains("done"));
  });
  document.querySelectorAll(".panel-check").forEach((c) => {
    state.checks.push(c.classList.contains("checked"));
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const state = JSON.parse(raw);
    if (state.milestones) {
      document.querySelectorAll(".milestone").forEach((m, i) => {
        if (state.milestones[i]) m.classList.add("done");
      });
    }
    if (state.checks) {
      document.querySelectorAll(".panel-check").forEach((c, i) => {
        if (state.checks[i]) {
          c.classList.add("checked");
          const node = c.closest(".node");
          if (node) {
            node.classList.add("done");
            node.classList.remove("active-node", "p2", "p3", "p4");
          }
        }
      });
    }
  } catch (e) {
    /* corrupted state, ignore */
  }
}

// ── VIEW SWITCHING ──

function switchView(name, btn) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  document
    .querySelectorAll(".nav-tab")
    .forEach((t) => t.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  btn.classList.add("active");
}

// ── NODE TOGGLE (graph view) ──

function toggleNode(node) {
  const panel = node.querySelector(".node-panel");
  if (!panel) return;
  const isOpen = panel.classList.contains("open");
  node
    .closest(".node-grid")
    .querySelectorAll(".node-panel")
    .forEach((p) => p.classList.remove("open"));
  if (!isOpen) panel.classList.add("open");
}

// ── SYNC: Skill Map checks ↔ Tracker milestones ──

function syncCheckToMilestone(checkEl) {
  const checks = Array.from(document.querySelectorAll(".panel-check"));
  const idx = checks.indexOf(checkEl);
  if (idx === -1) return;
  const milestones = document.querySelectorAll(".milestone");
  if (idx < milestones.length) {
    milestones[idx].classList.toggle(
      "done",
      checkEl.classList.contains("checked"),
    );
  }
}

function syncMilestoneToCheck(milestoneEl) {
  const milestones = Array.from(document.querySelectorAll(".milestone"));
  const idx = milestones.indexOf(milestoneEl);
  if (idx === -1) return;
  const checks = document.querySelectorAll(".panel-check");
  if (idx < checks.length) {
    const check = checks[idx];
    const node = check.closest(".node");
    const isDone = milestoneEl.classList.contains("done");
    check.classList.toggle("checked", isDone);
    if (node) {
      if (isDone) {
        node.classList.add("done");
        node.classList.remove("active-node", "p2", "p3", "p4");
      } else {
        node.classList.remove("done");
        const phase = node.closest(".phase-content");
        const label = phase ? phase.querySelector(".phase-label") : null;
        if (label) {
          if (label.classList.contains("p2"))
            node.classList.add("active-node", "p2");
          else if (label.classList.contains("p3"))
            node.classList.add("active-node", "p3");
          else if (label.classList.contains("p4"))
            node.classList.add("active-node", "p4");
          else node.classList.add("active-node");
        }
      }
    }
  }
}

// ── CHECK in node panel ──

function toggleCheck(e, el) {
  e.stopPropagation();
  el.classList.toggle("checked");
  if (el.classList.contains("checked")) {
    el.closest(".node").classList.add("done");
    el.closest(".node").classList.remove("active-node", "p2", "p3", "p4");
  } else {
    const phase = el.closest(".phase-content");
    const label = phase ? phase.querySelector(".phase-label") : null;
    el.closest(".node").classList.remove("done");
    if (label) {
      if (label.classList.contains("p2"))
        el.closest(".node").classList.add("active-node", "p2");
      else if (label.classList.contains("p3"))
        el.closest(".node").classList.add("active-node", "p3");
      else if (label.classList.contains("p4"))
        el.closest(".node").classList.add("active-node", "p4");
      else el.closest(".node").classList.add("active-node");
    }
  }
  syncCheckToMilestone(el);
  updateGlobalProgress();
  saveState();
}

// ── SCHEDULE CARD TOGGLE ──

function toggleCard(header) {
  const body = header.nextElementSibling;
  body.classList.toggle("open");
}

// ── MILESTONE TOGGLE (tracker view) ──

function toggleMilestone(el) {
  el.classList.toggle("done");
  syncMilestoneToCheck(el);
  updateGlobalProgress();
  saveState();
}

// ── PROGRESS ──

function updateGlobalProgress() {
  const phases = [1, 2, 3, 4];
  const totals = {};
  phases.forEach((p) => {
    totals[p] = document.querySelectorAll(
      `.milestone[data-phase="${p}"]`,
    ).length;
  });

  let totalDone = 0;
  let totalAll = 0;

  phases.forEach((p) => {
    const done = document.querySelectorAll(
      `.milestone[data-phase="${p}"].done`,
    ).length;
    const total = totals[p];
    totalDone += done;
    totalAll += total;
    const pct = total > 0 ? done / total : 0;
    const bar = document.getElementById(`p${p}-bar`);
    const count = document.getElementById(`p${p}-count`);
    if (bar) bar.style.opacity = 0.3 + pct * 0.7;
    if (count) count.textContent = `${done}/${total}`;
  });

  const overall = totalAll > 0 ? Math.round((totalDone / totalAll) * 100) : 0;
  document.getElementById("op-pct").textContent = overall + "%";
  document.getElementById("op-fill").style.width = overall + "%";
  document.getElementById("nav-pct").textContent = overall + "%";
  document.getElementById("nav-fill").style.width = overall + "%";
}

// ── INIT ──

loadState();
updateGlobalProgress();
