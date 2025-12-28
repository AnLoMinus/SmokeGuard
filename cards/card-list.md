# 🃏 SmokeGuard – CardGPT Ready JSON

כל הקלפים בפורמט `cardgpt_card_v1` (גרסה 1.0) מוכנים להדבקה ולפיתוח.

## 1) Quiet Operator
```json
{
  "spec": "cardgpt_card_v1",
  "spec_version": "1.0",
  "card_id": "SG-441002-10010",
  "card_series": "SmokeGuard",
  "card_type": "Character",
  "card_name": "Quiet Operator",
  "card_alias": "Low-Key Fixer",
  "element": "Shadow / Mind",
  "rarity": "Rare",
  "alignment": "Neutral",
  "core_energy": "Silent Thread",
  "lore": {
    "description": "Agent שמכבה סכסוכים בלי רעש, משאיר רק לוג נקי.",
    "personality": "Discrete, efficient",
    "role": "Infiltration",
    "world_context": "מטפל בטריגרים לפני שהם הופכים להרגל רעיל."
  },
  "activation": {
    "trigger": "Tension rising",
    "effect": "Diffuses and edits outcomes",
    "quote": "I'll edit this story before it prints."
  },
  "interaction": {
    "first_message": "I'll edit this story before it prints.",
    "dialogue_style": "Minimal, clever",
    "dialogue_examples": [
      "No need to shout.\\nLog adjusted.\\nYou never saw me—yet you're safer."
    ]
  },
  "abilities": [
    {"name": "Silent Patch", "type": "Support", "cost": "1 Thread", "cooldown": "6s", "target": "Ally", "effect": "Removes aggro and minor debuffs without revealing position."},
    {"name": "Log Rewrite", "type": "Active", "cost": "2 Thread", "cooldown": "9s", "target": "Enemy", "effect": "Edits recent actions, causing enemy to hesitate or forget target."}
  ],
  "visual_style": {
    "outfit": "Dark coat with muted sigils",
    "aura": "Barely visible code veil",
    "color_palette": ["Black", "Grey", "Blue"],
    "art_prompt": "Stealthy fixer blending into shadow with faint code glow"
  },
  "meta": {
    "creator": "AnLoMinus",
    "engine": "CardGPT Studio PRO",
    "version": "1.1",
    "tags": ["Character", "Stealth", "AnLoMinus"],
    "changelog": "AnLoMinus quiet agent",
    "created_at": "2025-12-28T14:31:06.451Z",
    "updated_at": "2025-12-28T14:31:06.451Z"
  }
}
```

## 2) Breather Medic
```json
{
  "spec": "cardgpt_card_v1",
  "spec_version": "1.0",
  "card_id": "SG-502210-22101",
  "card_series": "SmokeGuard",
  "card_type": "Character",
  "card_name": "Breather Medic",
  "card_alias": "Lung Mender",
  "element": "Air / Light",
  "rarity": "Epic",
  "alignment": "Guardian",
  "core_energy": "Pure Oxygen",
  "lore": {
    "description": "פרמדיק שמביא אוויר צלול לקרבות מלאי עשן.",
    "personality": "Calm, reassuring",
    "role": "Healer",
    "world_context": "מוביל צוותי חילוץ במרחבים רעילים ומחזיר נשימה נקייה."
  },
  "activation": {
    "trigger": "Ally breath drops",
    "effect": "Restores stamina and cleanses toxins",
    "quote": "נושמים ביחד, נשארים בחיים."
  },
  "interaction": {
    "first_message": "תנשום. אני כבר כאן.",
    "dialogue_style": "Warm, concise",
    "dialogue_examples": [
      "אוויר נקי נכנס, פחד יוצא.\\nעוד נשימה, עוד צעד."
    ]
  },
  "abilities": [
    {"name": "O2 Surge", "type": "Support", "cost": "2 Breath", "cooldown": "8s", "target": "Ally", "effect": "Refills stamina bar and removes smoke-based DoT."},
    {"name": "Filter Dome", "type": "Ultimate", "cost": "3 Breath", "cooldown": "18s", "target": "Zone", "effect": "Creates clean-air field; allies inside gain regen and focus."}
  ],
  "visual_style": {
    "outfit": "White-blue medic suit with oxygen canisters",
    "aura": "Soft teal airflow",
    "color_palette": ["White", "Teal", "Silver"],
    "art_prompt": "Combat medic releasing a swirl of clean air around a team"
  },
  "meta": {
    "creator": "SmokeGuard Studio",
    "engine": "CardGPT Studio PRO",
    "version": "1.0",
    "tags": ["Healer", "Air", "Support"],
    "changelog": "Initial release",
    "created_at": "2026-01-02T10:15:00.000Z",
    "updated_at": "2026-01-02T10:15:00.000Z"
  }
}
```

## 3) Sparkbreaker Canister
```json
{
  "spec": "cardgpt_card_v1",
  "spec_version": "1.0",
  "card_id": "SG-874430-33990",
  "card_series": "SmokeGuard",
  "card_type": "Tool",
  "card_name": "Sparkbreaker Canister",
  "card_alias": "Redline Cutoff",
  "element": "Tech / Control",
  "rarity": "Rare",
  "alignment": "Neutral",
  "core_energy": "Ionized Mist",
  "lore": {
    "description": "פצצת ערפל שמכבה גיצים ומקררת מערכות עצבניות.",
    "personality": "N/A",
    "role": "Crowd Control",
    "world_context": "נזרק לאזורי עימות כדי לכבות אש ולנטרל טריגרים."
  },
  "activation": {
    "trigger": "Area overheats",
    "effect": "Drops temp + silences sparks",
    "quote": "Cool it down. Now."
  },
  "interaction": {
    "first_message": "החום יירד בעוד רגע.",
    "dialogue_style": "Technical, terse",
    "dialogue_examples": [
      "מחשבים רותחים? ערפל צונן יכבה את זה."
    ]
  },
  "abilities": [
    {"name": "Mist Deploy", "type": "Active", "cost": "1 Charge", "cooldown": "12s", "target": "Zone", "effect": "Reduces enemy haste and DoT in a small radius."},
    {"name": "Safety Net", "type": "Passive", "cost": "-", "cooldown": "-", "target": "Self", "effect": "On deploy, grants brief shield to the thrower."}
  ],
  "visual_style": {
    "outfit": "Compact cylinder with teal vents",
    "aura": "Icy mist rings",
    "color_palette": ["Teal", "Charcoal", "Orange"],
    "art_prompt": "Futuristic canister releasing a cooling mist that dampens sparks"
  },
  "meta": {
    "creator": "SmokeGuard Studio",
    "engine": "CardGPT Studio PRO",
    "version": "1.0",
    "tags": ["Tool", "Control", "Support"],
    "changelog": "Added passive shield",
    "created_at": "2026-01-02T10:20:00.000Z",
    "updated_at": "2026-01-02T10:20:00.000Z"
  }
}
```

## 4) Clean Air Sentinel
```json
{
  "spec": "cardgpt_card_v1",
  "spec_version": "1.0",
  "card_id": "SG-990044-77311",
  "card_series": "SmokeGuard",
  "card_type": "Character",
  "card_name": "Clean Air Sentinel",
  "card_alias": "Filter Guardian",
  "element": "Air / Tech",
  "rarity": "Legendary",
  "alignment": "Guardian",
  "core_energy": "Ion Filter",
  "lore": {
    "description": "שומר שמהנדס זרמי אוויר נקיים בכל זירה.",
    "personality": "Stoic, vigilant",
    "role": "Defender",
    "world_context": "עוצר עשן ועננות רעל לפני שמגיעים למרחב קהילה."
  },
  "activation": {
    "trigger": "Threat enters safe zone",
    "effect": "Deploys barrier and airflow",
    "quote": "הגבול פה. אוויר נקי בלבד."
  },
  "interaction": {
    "first_message": "הגבול סגור לעשן.",
    "dialogue_style": "Firm, clear",
    "dialogue_examples": [
      "צעד אחורה. המסנן עולה."
    ]
  },
  "abilities": [
    {"name": "Filter Wall", "type": "Ultimate", "cost": "3 Core", "cooldown": "20s", "target": "Line", "effect": "Creates barrier blocking projectiles and smoke."},
    {"name": "Pulse Vent", "type": "Active", "cost": "2 Core", "cooldown": "9s", "target": "Cone", "effect": "Pushes enemies back and cleanses ally debuffs."}
  ],
  "visual_style": {
    "outfit": "Armored cloak with vented pauldrons",
    "aura": "Rotating airflow halo",
    "color_palette": ["Navy", "Teal", "Silver"],
    "art_prompt": "Guardian raising a transparent airflow shield in a smoky battlefield"
  },
  "meta": {
    "creator": "SmokeGuard Studio",
    "engine": "CardGPT Studio PRO",
    "version": "1.0",
    "tags": ["Guardian", "Barrier", "Air"],
    "changelog": "Legendary defender added",
    "created_at": "2026-01-02T10:24:00.000Z",
    "updated_at": "2026-01-02T10:24:00.000Z"
  }
}
```

## 5) Community Beacon
```json
{
  "spec": "cardgpt_card_v1",
  "spec_version": "1.0",
  "card_id": "SG-135579-55701",
  "card_series": "SmokeGuard",
  "card_type": "Character",
  "card_name": "Community Beacon",
  "card_alias": "Habit Coach",
  "element": "Light / Mind",
  "rarity": "Epic",
  "alignment": "Support",
  "core_energy": "Shared Resolve",
  "lore": {
    "description": "מדריך קבוצות שמדליק אור קבוע של חיזוק יומי.",
    "personality": "Encouraging, steady",
    "role": "Support",
    "world_context": "מחבר בין משפחות, יוצר אתגרי 30 יום ומספק אחריות רכה."
  },
  "activation": {
    "trigger": "Ally morale dips",
    "effect": "Broadcasts motivation + shields willpower",
    "quote": "כולנו יחד, עוד יום נקי אחד."
  },
  "interaction": {
    "first_message": "סופרים יום נקי — בואו נעדכן בקבוצה.",
    "dialogue_style": "Warm, communal",
    "dialogue_examples": [
      "היום שומרים על החיים ✅ מי שנקי — גיבור. מי שנפל — קם עכשיו."
    ]
  },
  "abilities": [
    {"name": "Daily Ping", "type": "Support", "cost": "1 Resolve", "cooldown": "5s", "target": "Party", "effect": "Sends morale pulse granting minor regeneration."},
    {"name": "Circle Uplift", "type": "Ultimate", "cost": "3 Resolve", "cooldown": "22s", "target": "Zone", "effect": "Allies in zone gain damage resistance and habit-craving reduction."}
  ],
  "visual_style": {
    "outfit": "Light jacket with holographic armband",
    "aura": "Golden ring of small lanterns",
    "color_palette": ["Gold", "White", "Cyan"],
    "art_prompt": "Community leader holding a glowing beacon while a team raises their hands"
  },
  "meta": {
    "creator": "SmokeGuard Studio",
    "engine": "CardGPT Studio PRO",
    "version": "1.0",
    "tags": ["Support", "Community", "Light"],
    "changelog": "Added community morale buffs",
    "created_at": "2026-01-02T10:28:00.000Z",
    "updated_at": "2026-01-02T10:28:00.000Z"
  }
}
```
