(function () {
  // Mobile nav
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!isOpen));
    });
  }

  // Footer updated time (client)
  const updatedAt = document.getElementById("updatedAt");
  if (updatedAt) {
    const d = new Date();
    updatedAt.textContent = d.toLocaleString("he-IL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  // Streak tracker (localStorage)
  const pledge = document.getElementById("pledge");
  const streakEl = document.getElementById("streak");
  const barFill = document.getElementById("barFill");
  const btnDayDone = document.getElementById("btnDayDone");
  const btnReset = document.getElementById("btnReset");

  function getState() {
    return {
      pledged: localStorage.getItem("sg_pledge") === "1",
      streak: Number(localStorage.getItem("sg_streak") || "0"),
      lastDay: localStorage.getItem("sg_last_day") || ""
    };
  }

  function setState(next) {
    localStorage.setItem("sg_pledge", next.pledged ? "1" : "0");
    localStorage.setItem("sg_streak", String(next.streak));
    localStorage.setItem("sg_last_day", next.lastDay);
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

  function render() {
    if (!streakEl || !barFill) return;
    const st = getState();
    if (pledge) pledge.checked = st.pledged;

    streakEl.textContent = String(st.streak);
    const pct = clamp((st.streak / 30) * 100, 0, 100);
    barFill.style.width = pct.toFixed(1) + "%";

    const bar = document.querySelector(".bar[role='progressbar']");
    if (bar) bar.setAttribute("aria-valuenow", String(clamp(st.streak, 0, 30)));
  }

  // Auto daily logic: if new day and pledged, allow counting again
  function ensureDayBoundary() {
    const st = getState();
    const t = todayKey();
    // no action, just keep; logic uses lastDay check
    if (!st.lastDay) {
      st.lastDay = "";
      setState(st);
    }
  }

  if (pledge) {
    pledge.addEventListener("change", (e) => {
      const st = getState();
      st.pledged = e.target.checked;
      setState(st);
      render();
    });
  }

  if (btnDayDone) {
    btnDayDone.addEventListener("click", () => {
      const st = getState();
      const t = todayKey();

      if (!st.pledged) {
        alert("כדי לסמן יום נקי — קודם סמן/י התחייבות ✅");
        return;
      }

      if (st.lastDay === t) {
        alert("כבר סימנת היום 🌟 מחר ממשיכים!");
        return;
      }

      st.streak = st.streak + 1;
      st.lastDay = t;
      setState(st);
      render();
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      const ok = confirm("איפוס רצף? בלי אשמה — רק כדי לחזור למסלול. לאפס?");
      if (!ok) return;
      setState({ pledged: false, streak: 0, lastDay: "" });
      render();
    });
  }

  ensureDayBoundary();
  render();
})();
