## 🚭 SmokeGuard — אתר מלא ומעוצב | ✨ BreatherShield (BrSh)

להלן **מעטפת אתר סטטי מלאה** (Multi-Page) מותאמת ל-GitHub Pages עבור הפרויקט שלך **SmokeGuard** — עם עיצוב מודרני, ניווט, דפי תוכן רפואי+הלכתי, תוכנית גמילה, רכיב “התחייבות”, ומד-התקדמות יומי.
תדביק את הקבצים בדיוק במבנה הבא בריפו: `AnLoMinus/SmokeGuard` ואז Pages יעלה אוטומטית.

---

## 🧱 מבנה תיקיות מומלץ 📁

```
/
├─ index.html
├─ pages/
│  ├─ medical.html
│  ├─ halacha.html
│  ├─ quit-plan.html
│  ├─ community.html
│  └─ about.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  └─ img/ (אופציונלי)
└─ README.md (אופציונלי)
```

---

## 🧩 1) `index.html` 🏠

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#0b1220" />
  <title>SmokeGuard | שומרים על החיים</title>
  <meta name="description" content="SmokeGuard — אתר חיזוק רפואי והלכתי להפסקת עישון, הגנה על המשפחה, ותוכנית מעשית ליציאה לחירות." />

  <!-- Open Graph -->
  <meta property="og:title" content="SmokeGuard | שומרים על החיים" />
  <meta property="og:description" content="חיזוק רפואי + הלכתי + תוכנית גמילה מעשית. מתחילים היום." />
  <meta property="og:type" content="website" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="assets/css/style.css" />
</head>

<body>
  <a class="skip" href="#main">דלג לתוכן</a>

  <header class="topbar">
    <div class="container topbar__inner">
      <div class="brand">
        <div class="brand__mark" aria-hidden="true">🛡️</div>
        <div class="brand__text">
          <div class="brand__name">SmokeGuard</div>
          <div class="brand__tag">שומרים על החיים • שומרים על הבית</div>
        </div>
      </div>

      <button class="navbtn" aria-label="פתח תפריט" data-nav-toggle>
        <span></span><span></span><span></span>
      </button>

      <nav class="nav" data-nav>
        <a class="nav__link active" href="./index.html">בית</a>
        <a class="nav__link" href="./pages/medical.html">רפואה</a>
        <a class="nav__link" href="./pages/halacha.html">הלכה</a>
        <a class="nav__link" href="./pages/quit-plan.html">תוכנית גמילה</a>
        <a class="nav__link" href="./pages/community.html">קהילה</a>
        <a class="nav__link" href="./pages/about.html">אודות</a>
      </nav>
    </div>
  </header>

  <main id="main">
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <div class="pill">🚭 יציאה לחירות • 💙 שמירה על הנשמה והגוף</div>
          <h1>העישון הוא לא “הרגל” — זה <span class="grad">סיכון חיים</span>.</h1>
          <p class="lead">
            כאן מקבלים חיזוק ברור: מה קורה לגוף, מה קורה לבית (עישון פסיבי),
            ומהי הדרך המעשית לעצור — עם מסגרת הלכתית ומסלול יומי.
          </p>

          <div class="cta">
            <a class="btn btn--primary" href="./pages/quit-plan.html">🚀 מתחילים תוכנית גמילה</a>
            <a class="btn btn--ghost" href="./pages/medical.html">🩺 להבין את הנזק</a>
          </div>

          <div class="mini">
            <div class="mini__card">
              <div class="mini__title">🛡️ מטרה</div>
              <div class="mini__text">להגן על החיים — שלך ושל מי שסביבך.</div>
            </div>
            <div class="mini__card">
              <div class="mini__title">⚖️ הלכה למעשה</div>
              <div class="mini__text">“ונשמרתם מאוד לנפשותיכם” → החלטה מעשית.</div>
            </div>
            <div class="mini__card">
              <div class="mini__title">📈 מסלול</div>
              <div class="mini__text">יום-יום: פעולה קטנה שמנצחת התמכרות גדולה.</div>
            </div>
          </div>
        </div>

        <div class="hero__panel">
          <div class="panel">
            <div class="panel__top">
              <div class="panel__title">🎯 דופק החלטה</div>
              <div class="panel__hint">סמן התחייבות, וקבל מד-התקדמות יומי.</div>
            </div>

            <div class="panel__body">
              <div class="switch">
                <input id="pledge" type="checkbox" />
                <label for="pledge">
                  ✅ אני מתחייב/ת: לא מעשן/ת היום — שומר/ת על הנשמה והגוף
                </label>
              </div>

              <div class="meter">
                <div class="meter__row">
                  <span>📅 רצף נקי</span>
                  <strong id="streak">0</strong>
                </div>
                <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="30" aria-valuenow="0">
                  <div class="bar__fill" id="barFill"></div>
                </div>
                <div class="meter__sub">יעד ראשון: 30 יום (בונים יסוד חדש) 🔥</div>
              </div>

              <div class="panel__actions">
                <button class="btn btn--soft" id="btnDayDone">🌟 עברתי יום נקי</button>
                <button class="btn btn--danger" id="btnReset">🧯 איפוס (בלי אשמה — ממשיכים)</button>
              </div>

              <div class="notice">
                <strong>💡 טיפ מהיר:</strong>
                כשעולה חשק — 10 נשימות, כוס מים, והחלפה לפעולה (הליכה 3 דקות).
              </div>
            </div>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="stat__k">🫁</div>
              <div class="stat__t">רווח גופני</div>
              <div class="stat__d">נשימה, סיבולת, אנרגיה</div>
            </div>
            <div class="stat">
              <div class="stat__k">👨‍👩‍👧‍👦</div>
              <div class="stat__t">רווח לבית</div>
              <div class="stat__d">הפחתת עישון פסיבי</div>
            </div>
            <div class="stat">
              <div class="stat__k">🕯️</div>
              <div class="stat__t">רווח רוחני</div>
              <div class="stat__d">כבוד לחיים ומתנת הבורא</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__head">
          <h2>🧭 מסלול האתר — בקצרה</h2>
          <p>נכנסים לפי הסדר, ומתקדמים צעד-צעד.</p>
        </div>

        <div class="grid3">
          <a class="card" href="./pages/medical.html">
            <div class="card__icon">🩺</div>
            <div class="card__title">רפואה</div>
            <div class="card__text">מה העישון עושה לגוף ולעישון פסיבי — בשפה ברורה.</div>
            <div class="card__go">לקריאה →</div>
          </a>

          <a class="card" href="./pages/halacha.html">
            <div class="card__icon">⚖️</div>
            <div class="card__title">הלכה</div>
            <div class="card__text">שמירת החיים, אחריות חברתית, והכרעה למעשה.</div>
            <div class="card__go">לקריאה →</div>
          </a>

          <a class="card" href="./pages/quit-plan.html">
            <div class="card__icon">🚀</div>
            <div class="card__title">תוכנית גמילה</div>
            <div class="card__text">שגרה יומית + כלים לניהול חשקים + תחליפים מעשיים.</div>
            <div class="card__go">להתחיל →</div>
          </a>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container split">
        <div>
          <h3>🧠 “התמכרות” = מנגנון</h3>
          <p>
            לא נלחמים באופי — נלחמים במערכת: טריגרים, הרגלים, תחליפים, חיזוק.
            כשבונים מסלול ברור, היצר מאבד את הכוח.
          </p>
          <ul class="bullets">
            <li>💧 החלפה מיידית: מים / מסטיק / נשימות</li>
            <li>🚶 תנועה קצרה שוברת חשק</li>
            <li>🧱 חוק 24 שעות: רק היום</li>
            <li>🤝 שותף אחריות מחזק התמדה</li>
          </ul>
        </div>

        <div class="callout">
          <div class="callout__title">🎁 “רווח מול הפסד”</div>
          <div class="callout__text">
            כל יום נקי הוא חיסכון בכסף, שקט בבית, וחוזק פנימי.
            תן לעצמך הוכחה אחת ביום — ואז עוד אחת.
          </div>
          <a class="btn btn--primary" href="./pages/community.html">👥 בונים קהילה תומכת</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <div class="footer__brand">🛡️ SmokeGuard</div>
        <div class="footer__muted">סטטי • מהיר • מתאים ל-GitHub Pages</div>
      </div>

      <div class="footer__links">
        <a href="./pages/medical.html">🩺 רפואה</a>
        <a href="./pages/halacha.html">⚖️ הלכה</a>
        <a href="./pages/quit-plan.html">🚀 תוכנית</a>
        <a href="./pages/about.html">ℹ️ אודות</a>
      </div>

      <div class="footer__note">
        <div>📅 עודכן: <span id="updatedAt">—</span></div>
        <div class="tiny">© SmokeGuard • AnLoMinus</div>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>
```

---

## 🎨 2) `assets/css/style.css` ✍️

```css
:root{
  --bg:#070b14;
  --panel:#0b1220;
  --card:#0e1930;
  --text:#eaf0ff;
  --muted:#a8b3d6;
  --line:rgba(255,255,255,.08);
  --good:#3bf0b8;
  --warn:#ffcf5a;
  --bad:#ff4d6d;
  --glow: 0 0 40px rgba(59,240,184,.18);
  --radius:18px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:"Heebo",system-ui,-apple-system,Segoe UI,Roboto,Arial;
  background:
    radial-gradient(1200px 500px at 85% 15%, rgba(59,240,184,.14), transparent 60%),
    radial-gradient(900px 500px at 15% 25%, rgba(140,110,255,.18), transparent 55%),
    radial-gradient(1100px 700px at 50% 120%, rgba(255,77,109,.08), transparent 60%),
    var(--bg);
  color:var(--text);
  line-height:1.65;
}

a{color:inherit;text-decoration:none}
.container{width:min(1100px, 92%); margin-inline:auto}
.skip{
  position:absolute; inset:auto auto auto -999px;
  background:#fff; color:#000; padding:10px 14px; border-radius:10px;
}
.skip:focus{inset:12px auto auto 12px; z-index:99}

.topbar{
  position:sticky; top:0; z-index:50;
  background:rgba(7,11,20,.72);
  backdrop-filter: blur(14px);
  border-bottom:1px solid var(--line);
}
.topbar__inner{
  display:flex; align-items:center; justify-content:space-between;
  gap:14px; padding:14px 0;
}
.brand{display:flex; align-items:center; gap:12px}
.brand__mark{
  width:44px; height:44px; border-radius:14px;
  display:grid; place-items:center;
  background:linear-gradient(135deg, rgba(59,240,184,.22), rgba(140,110,255,.18));
  border:1px solid var(--line);
  box-shadow: var(--glow);
  font-size:22px;
}
.brand__name{font-weight:800; letter-spacing:.3px}
.brand__tag{font-size:.92rem; color:var(--muted)}

.nav{display:flex; gap:8px; align-items:center; flex-wrap:wrap}
.nav__link{
  padding:10px 12px;
  border-radius:12px;
  color:var(--muted);
  border:1px solid transparent;
}
.nav__link:hover{color:var(--text); border-color:var(--line); background:rgba(255,255,255,.03)}
.nav__link.active{color:var(--text); border-color:rgba(59,240,184,.22); background:rgba(59,240,184,.06)}

.navbtn{
  display:none;
  width:44px; height:44px;
  border-radius:14px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.03);
  cursor:pointer;
}
.navbtn span{display:block; height:2px; margin:7px 10px; background:rgba(234,240,255,.85); border-radius:2px}

.hero{padding:44px 0 10px}
.hero__grid{
  display:grid;
  grid-template-columns: 1.2fr .9fr;
  gap:22px;
  align-items:start;
}
.pill{
  display:inline-flex; gap:8px; align-items:center;
  padding:8px 12px; border-radius:999px;
  background:rgba(255,255,255,.04);
  border:1px solid var(--line);
  color:var(--muted);
  margin-bottom:14px;
}
h1{margin:0 0 10px; font-size: clamp(2rem, 3.4vw, 3.1rem); line-height:1.15}
.grad{
  background:linear-gradient(90deg, #3bf0b8, #8c6eff, #ff4d6d);
  -webkit-background-clip:text; background-clip:text;
  color:transparent;
}
.lead{color:var(--muted); font-size:1.08rem; margin:0 0 18px}

.cta{display:flex; gap:10px; flex-wrap:wrap; margin:16px 0 18px}

.btn{
  border:1px solid var(--line);
  background:rgba(255,255,255,.03);
  color:var(--text);
  padding:11px 14px;
  border-radius:14px;
  cursor:pointer;
  display:inline-flex; align-items:center; justify-content:center;
  gap:10px;
  transition: transform .12s ease, background .12s ease, border-color .12s ease;
}
.btn:hover{transform: translateY(-1px); background:rgba(255,255,255,.05)}
.btn--primary{
  background:linear-gradient(135deg, rgba(59,240,184,.22), rgba(140,110,255,.18));
  border-color: rgba(59,240,184,.25);
  box-shadow: var(--glow);
}
.btn--ghost{background:transparent}
.btn--soft{background:rgba(59,240,184,.08); border-color: rgba(59,240,184,.20)}
.btn--danger{background:rgba(255,77,109,.10); border-color: rgba(255,77,109,.26)}

.mini{
  display:grid; gap:10px;
  grid-template-columns: repeat(3, 1fr);
}
.mini__card{
  background:rgba(255,255,255,.03);
  border:1px solid var(--line);
  border-radius: var(--radius);
  padding:12px;
}
.mini__title{font-weight:700; margin-bottom:4px}
.mini__text{color:var(--muted); font-size:.95rem}

.hero__panel{display:grid; gap:12px}
.panel{
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  border:1px solid var(--line);
  border-radius: 22px;
  overflow:hidden;
}
.panel__top{padding:16px 16px 10px; border-bottom:1px solid var(--line)}
.panel__title{font-weight:800; font-size:1.05rem}
.panel__hint{color:var(--muted); font-size:.95rem}
.panel__body{padding:16px}

.switch{
  display:flex; gap:10px;
  background:rgba(255,255,255,.03);
  border:1px dashed rgba(59,240,184,.25);
  padding:12px;
  border-radius: var(--radius);
  margin-bottom:12px;
}
.switch input{transform: scale(1.2); margin-top:4px}

.meter{margin:12px 0}
.meter__row{display:flex; justify-content:space-between; align-items:center; margin-bottom:10px}
.bar{
  height:12px;
  background:rgba(255,255,255,.05);
  border:1px solid var(--line);
  border-radius:999px;
  overflow:hidden;
}
.bar__fill{
  height:100%;
  width:0%;
  background:linear-gradient(90deg, rgba(59,240,184,.9), rgba(140,110,255,.85));
  box-shadow: var(--glow);
}
.meter__sub{color:var(--muted); font-size:.92rem; margin-top:8px}

.panel__actions{display:flex; gap:10px; flex-wrap:wrap; margin-top:10px}

.notice{
  margin-top:12px;
  padding:12px;
  border-radius: var(--radius);
  background:rgba(140,110,255,.10);
  border:1px solid rgba(140,110,255,.22);
  color:rgba(234,240,255,.92);
}

.stats{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:10px;
}
.stat{
  background:rgba(255,255,255,.03);
  border:1px solid var(--line);
  border-radius: var(--radius);
  padding:12px;
}
.stat__k{font-size:20px}
.stat__t{font-weight:800; margin:6px 0 2px}
.stat__d{color:var(--muted); font-size:.95rem}

.section{padding:28px 0}
.section__head h2{margin:0 0 6px}
.section__head p{margin:0; color:var(--muted)}

.grid3{
  margin-top:14px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
}
.card{
  background:rgba(255,255,255,.03);
  border:1px solid var(--line);
  border-radius: 22px;
  padding:16px;
  transition: transform .12s ease, border-color .12s ease, background .12s ease;
}
.card:hover{
  transform: translateY(-2px);
  border-color: rgba(59,240,184,.22);
  background:rgba(255,255,255,.04);
}
.card__icon{font-size:22px}
.card__title{font-weight:900; margin:8px 0 4px}
.card__text{color:var(--muted); margin:0 0 10px}
.card__go{color:rgba(59,240,184,.92); font-weight:700}

.section--dark{
  background:rgba(255,255,255,.02);
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.split{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap:14px;
  align-items:start;
}
.bullets{margin:10px 0 0; padding:0 18px; color:var(--muted)}
.bullets li{margin:6px 0}

.callout{
  background:linear-gradient(135deg, rgba(255,77,109,.10), rgba(59,240,184,.10));
  border:1px solid rgba(255,255,255,.10);
  border-radius: 22px;
  padding:16px;
}
.callout__title{font-weight:900; margin-bottom:6px}
.callout__text{color:var(--muted); margin-bottom:10px}

.footer{
  padding:22px 0 26px;
  color:var(--muted);
}
.footer__grid{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:12px;
  align-items:start;
  border-top:1px solid var(--line);
  padding-top:18px;
}
.footer__brand{color:var(--text); font-weight:900}
.footer__links{display:flex; flex-direction:column; gap:8px}
.footer__links a:hover{color:var(--text)}
.footer__note{justify-self:end; text-align:left}
.tiny{font-size:.86rem; opacity:.85}

.page{
  padding:24px 0 36px;
}
.page h1{font-size:2.2rem}
.page p{color:var(--muted)}
.kit{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
  margin-top:14px;
}
.box{
  background:rgba(255,255,255,.03);
  border:1px solid var(--line);
  border-radius: 22px;
  padding:16px;
}
.box h3{margin:0 0 8px}
.badge{
  display:inline-flex;
  gap:8px;
  align-items:center;
  padding:6px 10px;
  border-radius:999px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.03);
  color:var(--muted);
  font-size:.92rem;
}

@media (max-width: 980px){
  .hero__grid, .split{grid-template-columns: 1fr}
  .mini, .stats, .grid3, .kit{grid-template-columns: 1fr}
  .footer__grid{grid-template-columns: 1fr}
  .footer__note{justify-self:start; text-align:right}
}
@media (max-width: 860px){
  .navbtn{display:block}
  .nav{
    display:none;
    width:100%;
    padding:10px;
    border-radius: 18px;
    border:1px solid var(--line);
    background:rgba(7,11,20,.92);
    position:absolute;
    top:68px;
    inset-inline:4%;
  }
  .nav[data-open="true"]{display:flex; flex-direction:column; align-items:stretch}
}
```

---

## ⚙️ 3) `assets/js/main.js` 🧠

```js
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
```

---

## 📄 4) דפי תוכן (`pages/*.html`) 📚

### ✅ תבנית עליונה זהה לכל הדפים

העתק כל קובץ בדיוק:

#### `pages/medical.html` 🩺

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>SmokeGuard | רפואה</title>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
<header class="topbar">
  <div class="container topbar__inner">
    <div class="brand">
      <div class="brand__mark" aria-hidden="true">🛡️</div>
      <div class="brand__text">
        <div class="brand__name">SmokeGuard</div>
        <div class="brand__tag">רפואה • הבנת הנזק • בניית החלטה</div>
      </div>
    </div>
    <a class="btn btn--ghost" href="../index.html">🏠 חזרה לבית</a>
  </div>
</header>

<main class="page">
  <div class="container">
    <span class="badge">🩺 רפואה</span>
    <h1>מה העישון עושה לגוף — ברור, חד, ומניע לפעולה</h1>
    <p>
      עישון פוגע במערכות מרכזיות: נשימה, לב וכלי דם, חיסון, שמיעה, אנרגיה יומית ועוד.
      בנוסף — עישון פסיבי מעביר את הנזק הלאה לבית ולסביבה.
    </p>

    <div class="kit">
      <section class="box">
        <h3>🫁 מערכת הנשימה</h3>
        <ul class="bullets">
          <li>😮‍💨 ירידה בנפח נשימה וסיבולת</li>
          <li>🧪 גירוי כרוני של דרכי הנשימה</li>
          <li>🧱 סיכון גבוה למחלות ריאה קשות</li>
        </ul>
      </section>

      <section class="box">
        <h3>❤️ לב וכלי דם</h3>
        <ul class="bullets">
          <li>⚡ עומס על הלב</li>
          <li>🩸 פגיעה בכלי דם</li>
          <li>⛔ סיכון לאירועים מסוכנים</li>
        </ul>
      </section>

      <section class="box">
        <h3>👂 שמיעה ועצבים</h3>
        <ul class="bullets">
          <li>🔊 פגיעה הדרגתית בתפקוד</li>
          <li>🧠 עייפות מוחית ודריכות יתר</li>
          <li>🌫️ ירידה בחדות</li>
        </ul>
      </section>

      <section class="box">
        <h3>👨‍👩‍👧‍👦 עישון פסיבי</h3>
        <ul class="bullets">
          <li>🏠 הבית הופך “ענן” מסוכן</li>
          <li>👶 ילדים רגישים יותר</li>
          <li>🤍 אחריות על הקרובים</li>
        </ul>
      </section>
    </div>

    <section class="box" style="margin-top:12px">
      <h3>🧭 המסקנה המעשית</h3>
      <p>
        לא “להפחית” — אלא לבנות תהליך יציאה. באתר תמצא מסלול: כלים, תחליפים, והרגלים שמייצרים ניצחון.
      </p>
      <a class="btn btn--primary" href="./quit-plan.html">🚀 מעבר לתוכנית גמילה</a>
    </section>
  </div>
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div>
      <div class="footer__brand">🛡️ SmokeGuard</div>
      <div class="footer__muted">רפואה → הבנה → החלטה</div>
    </div>
    <div class="footer__links">
      <a href="./halacha.html">⚖️ הלכה</a>
      <a href="./quit-plan.html">🚀 תוכנית</a>
      <a href="./community.html">👥 קהילה</a>
    </div>
    <div class="footer__note">
      <div>📅 עודכן: <span id="updatedAt">—</span></div>
      <div class="tiny">© SmokeGuard • AnLoMinus</div>
    </div>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

#### `pages/halacha.html` ⚖️

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>SmokeGuard | הלכה</title>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
<header class="topbar">
  <div class="container topbar__inner">
    <div class="brand">
      <div class="brand__mark" aria-hidden="true">🛡️</div>
      <div class="brand__text">
        <div class="brand__name">SmokeGuard</div>
        <div class="brand__tag">הלכה • שמירת הנפש • אחריות ציבורית</div>
      </div>
    </div>
    <a class="btn btn--ghost" href="../index.html">🏠 חזרה לבית</a>
  </div>
</header>

<main class="page">
  <div class="container">
    <span class="badge">⚖️ הלכה</span>
    <h1>שמירת החיים: הלכה למעשה</h1>
    <p>
      כשיש נזק מוכר ומוכח לחיים — האחריות היא לא “דיון” אלא “מעשה”.
      זה כולל גם שמירה על הסביבה והימנעות מפגיעה בזולת.
    </p>

    <div class="kit">
      <section class="box">
        <h3>🛡️ ונשמרתם מאוד</h3>
        <p>
          המסגרת: שמירה על הגוף והנפש כפיקדון. החלטה מעשית להתרחק מסיכון.
        </p>
        <ul class="bullets">
          <li>✅ בניית גדרים</li>
          <li>✅ הרחקת טריגרים</li>
          <li>✅ התקדמות יומית</li>
        </ul>
      </section>

      <section class="box">
        <h3>👨‍👩‍👧‍👦 אחריות כלפי הזולת</h3>
        <p>
          עישון פסיבי הופך את הנושא לחברתי: לא פוגעים בבית, בילדים, ובסביבה.
        </p>
        <ul class="bullets">
          <li>🏠 שמירה על מרחב נקי</li>
          <li>🤝 דוגמה אישית</li>
          <li>🧱 חיזוק קהילתי למניעה</li>
        </ul>
      </section>

      <section class="box">
        <h3>🔥 מלחמה ביצר</h3>
        <p>
          התמכרות היא מלחמה חכמה: לא כוח-על, אלא אסטרטגיה, שגרה ותמיכה.
        </p>
        <ul class="bullets">
          <li>🧠 ניהול חשק בזמן אמת</li>
          <li>⏱️ “רק היום”</li>
          <li>🪜 מדרגות קטנות</li>
        </ul>
      </section>

      <section class="box">
        <h3>🧭 הכרעה</h3>
        <p>
          המטרה: גמילה מוחלטת במסלול ברור — בלי בושה, בלי קריסה, עם התקדמות.
        </p>
        <a class="btn btn--primary" href="./quit-plan.html">🚀 לתוכנית גמילה</a>
      </section>
    </div>
  </div>
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div>
      <div class="footer__brand">🛡️ SmokeGuard</div>
      <div class="footer__muted">הלכה → אחריות → מעשה</div>
    </div>
    <div class="footer__links">
      <a href="./medical.html">🩺 רפואה</a>
      <a href="./quit-plan.html">🚀 תוכנית</a>
      <a href="./community.html">👥 קהילה</a>
    </div>
    <div class="footer__note">
      <div>📅 עודכן: <span id="updatedAt">—</span></div>
      <div class="tiny">© SmokeGuard • AnLoMinus</div>
    </div>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

#### `pages/quit-plan.html` 🚀

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>SmokeGuard | תוכנית גמילה</title>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
<header class="topbar">
  <div class="container topbar__inner">
    <div class="brand">
      <div class="brand__mark" aria-hidden="true">🛡️</div>
      <div class="brand__text">
        <div class="brand__name">SmokeGuard</div>
        <div class="brand__tag">תוכנית • כלים • רצף</div>
      </div>
    </div>
    <a class="btn btn--ghost" href="../index.html">🏠 חזרה לבית</a>
  </div>
</header>

<main class="page">
  <div class="container">
    <span class="badge">🚀 תוכנית גמילה</span>
    <h1>30 יום — מסלול לבניית חירות</h1>
    <p>
      לא מחכים ל“מוטיבציה”. בונים מערכת: פעולה קצרה, תחליף, ומעקב.
      המטרה: יום נקי אחד — ואז עוד אחד.
    </p>

    <div class="kit">
      <section class="box">
        <h3>⏱️ פרוטוקול 3 דקות (כשעולה חשק)</h3>
        <ol class="bullets">
          <li>💨 10 נשימות איטיות</li>
          <li>💧 כוס מים מלאה</li>
          <li>🚶 הליכה/מתיחות 180 שניות</li>
        </ol>
        <div class="notice"><strong>חוק זהב:</strong> החשק נחלש כשלא “מזינים” אותו מיד.</div>
      </section>

      <section class="box">
        <h3>🧱 החלפות במקום סיגריה</h3>
        <ul class="bullets">
          <li>🍬 מסטיק / סוכריה ללא סוכר</li>
          <li>🍏 פרי / ירק פריך</li>
          <li>🧊 מקל קינמון / תה חם</li>
          <li>🎧 מוזיקה + תנועה</li>
        </ul>
      </section>

      <section class="box">
        <h3>📅 שבועות התקדמות</h3>
        <ul class="bullets">
          <li>🟢 שבוע 1: ניקוי טריגרים + “רק היום”</li>
          <li>🔵 שבוע 2: קבע רוטינת בוקר/לילה</li>
          <li>🟣 שבוע 3: חיזוק שינה/כושר</li>
          <li>🟡 שבוע 4: ביסוס זהות “אדם נקי”</li>
        </ul>
      </section>

      <section class="box">
        <h3>🤝 שותף אחריות</h3>
        <p>
          תבחר אדם אחד: הודעה קצרה כל ערב: “היום נקי ✅”.
          זה מכפיל התמדה.
        </p>
        <a class="btn btn--soft" href="./community.html">👥 כלים לקהילה תומכת</a>
      </section>
    </div>

    <section class="box" style="margin-top:12px">
      <h3>🛡️ טיפ טקטי: ניקוי סביבתי</h3>
      <ul class="bullets">
        <li>🧺 זרוק/הוצא מצתים, מאפרות, חפיסות</li>
        <li>🧼 אוורור וחיטוי ריחות</li>
        <li>🗓️ קבע יעד: “30 יום ואז החלטה קבועה”</li>
      </ul>
    </section>
  </div>
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div>
      <div class="footer__brand">🛡️ SmokeGuard</div>
      <div class="footer__muted">תוכנית → מעשה → חירות</div>
    </div>
    <div class="footer__links">
      <a href="./medical.html">🩺 רפואה</a>
      <a href="./halacha.html">⚖️ הלכה</a>
      <a href="./community.html">👥 קהילה</a>
    </div>
    <div class="footer__note">
      <div>📅 עודכן: <span id="updatedAt">—</span></div>
      <div class="tiny">© SmokeGuard • AnLoMinus</div>
    </div>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

#### `pages/community.html` 👥

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>SmokeGuard | קהילה</title>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
<header class="topbar">
  <div class="container topbar__inner">
    <div class="brand">
      <div class="brand__mark" aria-hidden="true">🛡️</div>
      <div class="brand__text">
        <div class="brand__name">SmokeGuard</div>
        <div class="brand__tag">קהילה • מניעה • אחריות</div>
      </div>
    </div>
    <a class="btn btn--ghost" href="../index.html">🏠 חזרה לבית</a>
  </div>
</header>

<main class="page">
  <div class="container">
    <span class="badge">👥 קהילה</span>
    <h1>בונים לחץ חיובי — שלא יתחילו, ושמי שמפסיק לא ייפול</h1>
    <p>
      קהילה חזקה יוצרת סטנדרט: לא מעשנים ליד ילדים, לא מציעים סיגריות,
      מחזקים מי שבדרך, ומדברים אמת בלי בושה.
    </p>

    <div class="kit">
      <section class="box">
        <h3>🧱 כללי בית נקי</h3>
        <ul class="bullets">
          <li>🚫 אין עישון בתוך הבית</li>
          <li>🚫 אין עישון ברכב משפחתי</li>
          <li>✅ אוויר נקי לילדים</li>
        </ul>
      </section>

      <section class="box">
        <h3>💬 הודעת חיזוק יומית</h3>
        <p>העתק/י ושלח/י בקבוצה:</p>
        <div class="notice">“היום שומרים על החיים ✅ מי שנקי — גיבור. מי שנפל — קם עכשיו.”</div>
      </section>

      <section class="box">
        <h3>🧒 מניעה לנוער</h3>
        <ul class="bullets">
          <li>🛡️ אמת ברורה: זה לא “קול”, זה שרשרת</li>
          <li>🎯 תחליפים: ספורט, יצירה, מוזיקה</li>
          <li>🤝 מנטור אחד משנה מסלול</li>
        </ul>
      </section>

      <section class="box">
        <h3>🏆 אתגר 30 יום</h3>
        <p>
          מפעילים אתגר קבוצתי: כל ערב “דיווח נקי”.
          מי שמחזיק 30 יום — מקבל תפקיד: לחזק אחרים.
        </p>
        <a class="btn btn--primary" href="../index.html">🎯 חזרה למד ההתקדמות</a>
      </section>
    </div>
  </div>
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div>
      <div class="footer__brand">🛡️ SmokeGuard</div>
      <div class="footer__muted">קהילה → מניעה → חוסן</div>
    </div>
    <div class="footer__links">
      <a href="./medical.html">🩺 רפואה</a>
      <a href="./halacha.html">⚖️ הלכה</a>
      <a href="./quit-plan.html">🚀 תוכנית</a>
    </div>
    <div class="footer__note">
      <div>📅 עודכן: <span id="updatedAt">—</span></div>
      <div class="tiny">© SmokeGuard • AnLoMinus</div>
    </div>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

#### `pages/about.html` ℹ️

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>SmokeGuard | אודות</title>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
<header class="topbar">
  <div class="container topbar__inner">
    <div class="brand">
      <div class="brand__mark" aria-hidden="true">🛡️</div>
      <div class="brand__text">
        <div class="brand__name">SmokeGuard</div>
        <div class="brand__tag">אודות • חזון • קרדיטים</div>
      </div>
    </div>
    <a class="btn btn--ghost" href="../index.html">🏠 חזרה לבית</a>
  </div>
</header>

<main class="page">
  <div class="container">
    <span class="badge">ℹ️ אודות</span>
    <h1>SmokeGuard — שמירה על החיים מתוך אמת, אחריות ומעשה</h1>
    <p>
      האתר נועד להיות “שער”: מי שרוצה להפסיק — יקבל מסלול ברור.
      מי שרוצה לחזק אחרים — יקבל כלים. מי שרוצה למנוע התחלה — יקבל שפה נקייה וחזקה.
    </p>

    <div class="kit">
      <section class="box">
        <h3>🎯 המטרה</h3>
        <ul class="bullets">
          <li>🛡️ להפוך החלטה לפעולה</li>
          <li>🏠 להגן על הבית מעישון פסיבי</li>
          <li>🧱 לבנות רצף של ימים נקיים</li>
        </ul>
      </section>

      <section class="box">
        <h3>🧾 קרדיטים</h3>
        <p>יוצר/מנהל פרויקט: <strong>AnLoMinus</strong></p>
        <p>ריפו: <a class="btn btn--ghost" href="https://github.com/AnLoMinus/SmokeGuard/">GitHub Repo</a></p>
        <p>אתר: <a class="btn btn--ghost" href="https://anlominus.github.io/SmokeGuard/">GitHub Pages</a></p>
      </section>
    </div>
  </div>
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div>
      <div class="footer__brand">🛡️ SmokeGuard</div>
      <div class="footer__muted">אודות → חזון → קהילה</div>
    </div>
    <div class="footer__links">
      <a href="./medical.html">🩺 רפואה</a>
      <a href="./halacha.html">⚖️ הלכה</a>
      <a href="./quit-plan.html">🚀 תוכנית</a>
    </div>
    <div class="footer__note">
      <div>📅 עודכן: <span id="updatedAt">—</span></div>
      <div class="tiny">© SmokeGuard • AnLoMinus</div>
    </div>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

---

## 🚀 פריסה ב-GitHub Pages 🧷

1. ודא שבתוך הריפו יש `index.html` בשורש (Root).
2. GitHub → Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: `main` + Folder: `/ (root)`
5. Save → האתר יופיע ב: `https://anlominus.github.io/SmokeGuard/`

---

## 🧾 נתוני תשובה (תאריך+שעה) ⏰

* 📅 תאריך לועזי: **28/12/2025**
* 📅 תאריך עברי: **ח׳ בטבת תשפ״ו**
* 🕓 שעה (Asia/Jerusalem): **16:23**

---

## 🏷️ האשטאגים להפצה 🔥

#SmokeGuard #QuitSmoking #BreathFreedom #HealthyHome #NoSecondhandSmoke #LifeFirst #JewishHealth #Vnishmartem #Habits #DailyStreak

---

## 🎤 פזמון ראפ (4 שורות) 🎧

לא עוד עשן שמסתיר לי את האור 🔥
אני בוחר חיים — זה לא דיבור, זה דרור 🛡️
יום נקי אחד, עוד יום — אני עולה מדרגה 🚀
SmokeGuard על הלב, והבית חוזר לנשמה 💙

---

## 📌 משפט קודש לסיום ✨

**“וְנִשְׁמַרְתֶּם מְאֹד לְנַפְשֹׁתֵיכֶם”** (דברים ד׳, ט״ו)

---

## 🧠 מספר המידות

**10**
