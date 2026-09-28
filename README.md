# ChatPlace Design System

A reference design system for **ChatPlace** (chatplace.io) — a social-media
automation SaaS that gives creators and small businesses AI Agents,
chatbots, gamification, and referral tools for **Instagram, Telegram, and
TikTok**.

This system is reverse-engineered from the production marketing site
codebase (Nuxt 3 + Vue 3 + SCSS). It is intended to power on-brand
prototypes, marketing assets, decks, and one-off product mocks.

---

## Sources

- **Codebase** — `app-landing/` (mounted, read-only)
  - Tokens: `app-landing/assets/scss/variables.scss`
  - Fonts:  `app-landing/assets/scss/fonts.scss` + `app-landing/public/fonts/`
  - Common UI: `app-landing/components/common/` (`CButton`, `CTitle`,
    `HighlightText`, `Tabs`, `CToggle`, `Icon`, `Modal`, `Tooltip`, …)
  - Shared sections: `app-landing/components/shared/{Header,Footer,Map,Questions,Features,Articles,Results,Users}/`
  - Page-specific: `app-landing/components/index/{Hero,Actions,Platforms}/`,
    `components/{plans, partners, virale, gamification, ...}`
  - Copy: `app-landing/locales/en.json` (and 6 other locales)
- No Figma was attached.

---

## Product map

ChatPlace is a marketing site for one product with several **named
sub-products / surfaces**:

| Surface | Page | What it is |
| --- | --- | --- |
| **Main** | `/` | Headline pitch + the three Action sections (attract / automate / sell) |
| **Instagram** | `/instagram` | Instagram-specific automation pitch (dark theme header) |
| **Telegram** | `/telegram` | Telegram channel / bot growth (dark theme header) |
| **TikTok** | `/tiktok` | TikTok chatbot + AI Agent (dark theme header) |
| **AI Agent** | `/ai-agent` | Standalone product page for the LLM-powered DM responder |
| **Virale** | `/virale` | Sub-brand. AI tool for viral Reels research. Black + neon-yellow theme |
| **Creator League** | `/creator-league` | Reels-payout program (dark theme) |
| **Gamification** | `/gamification-instagram`, `/gamification-telegram` | Points / leaderboards |
| **Pricing** | `/pricing` | Three tiers: Free → Pro → Premium |
| **Club** | `/club` | Paid community / education |
| **Mini-course / Hack / Workshop** | `/mini-course`, `/hack`, `/workshop` | Lead-gen content |
| **Partners / Affiliate** | `/partners`, `/ambassadors` | Affiliate program |

The platform is **i18n-first**: 7 locales (`en`, `ru`, `pt`, `es`, `kz`,
`uz`, `tr`) with `prefix_except_default`. Russian is a primary market —
several pages exist in Russian-only variants (`/intensive`, `/oasis`,
`/hack`, `/opt-in_ru`, etc.) and many image assets ship per-locale.

---

## Index — what's in this folder

- **`README.md`** — this file. Brand snapshot.
- **`SKILL.md`** — Agent Skill front-matter so this system can be loaded
  as a Claude Code skill.
- **`colors_and_type.css`** — single import that gives you the CSS
  variables, font faces, and base type classes (`.cp-h1`, `.cp-body`,
  `.cp-highlight`, …).
- **`fonts/`** — TTF files: PragmaticaExtended (Bold/Black) and
  Roboto (Regular / Medium / Bold / Black).
- **`assets/`** — extracted from the codebase
  - `logo.svg`, `favicon.svg`, `favicon.png`
  - `icons/` — UI icons (custom SVGs, including platform marks, AI bot,
    arrows, megaphone, etc.)
  - `patterns/` — the "polymorph" wave SVGs that ChatPlace uses to
    transition between colored sections; platform-card patterns; footer
    pattern
  - `images/` — phone mockups (Instagram / Telegram / TikTok),
    `users.webp`
- **`preview/`** — design-system preview cards (typography, colors,
  components) shown in the Design System tab.
- **`ui_kits/landing/`** — high-fidelity recreation of the marketing
  site (Hero, Actions, Platforms, Header, Footer, components).

---

## Content fundamentals

ChatPlace's marketing voice is **direct, benefit-led, and fluent in
creator-speak**. It is written for an audience of creators, small
business owners, and SMM agency people who already know what "DM",
"Reel" and "lead magnet" mean.

**Voice & tone**
- Confident, optimistic, action-oriented. Short clauses. Frequent
  imperatives ("Set up", "Launch", "Grow", "Stop").
- Slightly playful but never silly — punchy hooks, not jokes. Punctuation
  is restrained: rarely an exclamation point, almost never an emoji.
- Direct address. Heavy use of **"you / your"**; never "we" in body
  copy. Where "we" appears it is in legal/footer contexts.
- Numbers and outcomes are central — "163%", "+213K followers", "50M
  active followers". Stats are displayed as pill-shaped highlights inside
  headlines (the green `cp-highlight` pattern).

**Casing**
- Headlines: Sentence case, with the *first word capitalized* and product
  names capitalized ("AI Agent", "ChatPlace", "Reels", "Instagram"). Not
  Title Case.
- Buttons / nav: Title-ish but mostly Sentence case ("Try it for free",
  "Sign in", "Become a Partner", "Learn more").
- All-caps reserved for tiny meta labels (the `🚀 New` badge, "FAQ").

**Sentence shape**
- Headlines wrap mid-thought with hard `<br/>` to control rhythm
  ("Unlock the power **/** of your content and chats").
- Body copy is one or two sentences max per paragraph. Lists do most of
  the work — three bullets per "Action" feature is the canonical pattern.
- The product name is **ChatPlace** — single word, capital "C" and "P".

**Vocabulary**
- "AI Agent" (capital A, capital A — proper noun).
- "Chatbot" (one word).
- "Reels", "Stories", "DMs", "comments", "tags", "broadcasts",
  "funnels", "leads", "active contacts", "AI credits".
- Never "users" — say "audience", "followers", "subscribers".

**Emoji & symbols**
- Almost no emoji. The single recurring exception is **🚀** in the top
  announcement strip ("🚀 New — Virale: AI Agent for viral content →").
- Trailing **`→`** is the secondary convention for inline calls-to-action
  inside running text.
- `&nbsp;` and `<nobr>` are sprinkled through copy to control orphans —
  designs should respect them.

**Examples** (from `locales/en.json`)
- Hero: *"Unlock the power of your content and chats"* / *"AI Agents
  and chatbots to help you grow followers, engage and sell on Instagram
  & TikTok. Set up from your phone in minutes."*
- Action title: *"Let AI handle your messages"*
- Stat: *"Over 50M active followers gained by ChatPlace"*
- Pricing tier blurb: *"Try the core features for free with up to 200
  contacts per month"*
- FAQ answer: *"AI credits are messages and comments from your AI
  Agent, plus Virale usage for content generation and chat."*

---

## Visual foundations

### Type
- **Display: PragmaticaExtended** (Bold 600, Black 800). Used for *every*
  headline, button, badge, and stat. Tracks tight (`letter-spacing
  -0.42px` on buttons, ~−0.5px on display) and lines are `line-height: 1`
  for compact, billboard-style stacks.
- **Body: Roboto** (Regular 400, Medium 500, Bold 600, Black 800). Used
  for everything else — paragraphs, FAQ answers, nav.
- Display font is *italic-free* in production. Black 800 is the dominant
  headline weight; 600 only on smaller titles and buttons.

### Color
The palette is **white / off-white default, deep purple-black for "dark
mode" surfaces, with one neon green CTA and three section accents
(pink / dark-pink / blue)**.
- **Primary CTA:** lime/neon **green `#BEFF53`** on black text. This is
  the load-bearing brand color.
- **Dark surfaces:** dark purple `#261930` (header on platform pages,
  footer, mobile menu, AnnouncementBadge). Pure `#0C0C0C` is reserved for
  Virale and full-bleed black sections.
- **Section accents** for the three Action blocks: pink `#E3248B`, deep
  pink `#5F0C43`, blue `#008CE1`. Each section has a polymorph wavy
  divider in the same color above and below it.
- **Off-brand surface:** very light gray `#F6F5F8` for card backgrounds
  inside the white page (Platform cards, Articles).
- **Sub-brand: Virale** swaps the system to neon yellow `#FFFF5A` on
  pure black with white type — a deliberate, bolder identity.
- **Sub-brand: Creator League** uses gold/silver/bronze (`#FFD700` /
  `#C0C0C0` / `#CD7F32`) for ranking states.

### Backgrounds & imagery
- The page is mostly white/light. Visual interest comes from full-width
  **colored "polymorph" sections** that blend into each other through
  hand-drawn wavy SVG dividers (`assets/patterns/polymorph-*`). Two
  colored sections never sit flush — there's always a wave in between.
- Hero imagery is **photo-realistic phone mockups** (`platform-instagram.png`,
  etc) shipped per-locale, often pinned to the bottom of a colored card
  with a pattern silhouette behind them.
- No stock-photo collages, no glassmorphism, no gradient meshes.
- The footer is a giant SVG pattern in dark-purple with the brand
  wordmark embedded (`assets/patterns/footer-dark-desktop.svg`).
- Lottie animations (`lottie-web-vue`) drive Action illustrations.
- Vimeo for hero video on some pages.

### Animation
- Restrained and short. Standard Vue transition durations: **0.2s**
  (color/background hover), **0.3s** (fade, slide-down nav,
  transform-scale icon press), **0.5s** (accordion).
- Easing is `ease-in-out` or `ease-out`. Almost no spring or bounce.
- Hover on icon-arrow buttons: the inner icon `scale: 0.9` while the
  button's background darkens — small, satisfying, never extravagant.
- Color hover on solid CTAs: `color.adjust($color, $lightness: -8%
  to -15%)` (i.e. simple darkening).
- Press states: no explicit shrink in source — only the hover scale on
  ButtonArrow's icon. Don't add tap-highlight or shadow drops.

### Borders, radii, and elevation
- Pill is the dominant shape: **`border-radius: 200px`** for buttons and
  toggles; `100px` for the burger. Almost every CTA is a capsule.
- Cards are **`24px`** radius (`PlatformCard`); chunky and friendly.
  Articles and Result cards use the same family.
- Tabs use **`8px`** outer / `6px` inner.
- Highlight pill (the green inline number badge) uses `35px`.
- **Shadow is rare.** The header drops a fixed-state shadow (`17px 14px
  44px rgba(153,153,153,0.15)`), and the nav-menu dropdown has a
  matching one. Nothing else floats; the design relies on color blocks
  and rhythm, not depth.
- Borders: a single `1px solid #ECEBED` separator below the light header.
  Otherwise borders are essentially absent — sections are separated by
  color and shape.

### Layout rules
- Container is `max-width: 1440px` with side padding `16 / 32 / 80px`
  across `sm / md / lg`. Content never goes edge-to-edge except for the
  full-bleed polymorph color blocks and the footer pattern.
- Header is **fixed**, height `60 / 78 / 86px`, drops shadow on
  scroll, can be `light`, `dark`, or `virale` themed. Dark theme
  applies on Instagram/Telegram/TikTok/Creator-League pages.
- Breakpoints (mobile-first, `min-width`): `sm: 575px`, `md: 768px`,
  `lg: 1200px`, `xl: 1440px`. The codebase uses `respond-to(md)` etc.
- A `zoom: 80%` trick is used on Actions for narrow desktops
  (`<1400px`) — design accepts that compromise rather than reflowing.

### Transparency, blur, gradients
- Body text uses `rgba(12,12,12, 0.80)` (`--fg-2`) instead of a flat
  gray — that's the only transparency in use.
- **No backdrop-blur, no glass surfaces.**
- Only one real gradient in the system: the **favicon gradient**
  (`#F33D5E → #EF6DFF → #009BDD → #6978DB`, top-down). It's the secret
  hint that ChatPlace's "neutral" identity has more color than the marks
  in regular use let on. Use sparingly — never as a background fill of
  large areas.
- A vertical fade-to-blue is layered over the third Action's
  illustration (`linear-gradient(180deg, transparent → #008CE1)`) — a
  one-off "protection gradient" used to make a phone mockup blend into a
  colored background. Reuse this pattern only when blending an asset
  into a colored section, not as a generic decoration.

### Imagery vibe
- **Bright, screen-tonality, slight pop.** Phone mockups are crisp
  product screenshots, not lifestyle photos. No grain, no B&W, no
  duotone. Articles use real photography (people, screens) at `1:1` /
  `4:3` ratios with rounded crops.

### Cards
A canonical ChatPlace card:
- Rounded corners `24px`.
- Background `#F6F5F8` (light variant) or `#261930` / `#0C0C0C` (dark).
- A pattern SVG occupies the bottom 40-50% of the card, with the foreground
  asset (phone, illustration) layered on top.
- A title in PragmaticaExtended Black, then a balanced-wrap paragraph
  in Roboto, then a single pill CTA. No icon-bullets, no shadows.

---

## Iconography

ChatPlace uses **custom-drawn SVGs** shipped from the codebase
(`app-landing/assets/icons/`). They are **not** from a generic icon
library — they're hand-styled to match the brand and often carry color
inside the SVG (the platform marks, AI bot, gradient Instagram glyph
etc).

- **Source**: `assets/icons/` in this folder mirrors the codebase's
  `assets/icons/`. Patterns ("polymorph wave" dividers, footer pattern,
  per-platform card patterns) live in `assets/patterns/`.
- **Loading style** in source: each `.svg` is loaded as a Vue
  component via `vite-svg-loader` and rendered with `<Icon name="…">`.
  Most icons accept `currentColor` so they inherit text color.
- **Icon families seen**
  - **UI primitives** — `arrow-right`, `arrow-top`, `chevron-down`,
    `chevron-left`, `cross`, `cross-in-ellipse`, `plus`, `minus`,
    `check`, `burger`, `user`, `info`, `gear`, `clock`, `play`, `phone`.
  - **Platform marks** — `instagram`, `instagram-gradient`,
    `instagram-v2/v3/v4`, `telegram`, `telegram-v2/v3/v4`, `tiktok`,
    `tiktok-colored`, `youtube`, `twitter`.
  - **Brand illustrations** — `ai-bot`, `ai-helper`, `ai-stars`,
    `megaphone`, `mailings`, `notes`, `support`, `integrations`,
    `course-hat`, `creators-league`, `cup`, `gift`, `heart`,
    `iphone-16-pro`.
  - **Locale-tailored** — many overlay graphics are localized
    (`comments-blue-en/ru/es/pt/uz`, `tags-pink-*`, `reactions-*`).
    Pick the one matching the active locale.
  - **Section "polymorph" patterns** — `polymorph-pattern-top-*`,
    `polymorph-pattern-bottom-*`, with desktop/tablet/mobile variants.
- **Stroke / fill style**: solid-fill, no outlines, slightly chunky,
  often rounded terminals. Around 2–3px effective stroke width when
  outlined. They feel like brand stickers more than tool-tray glyphs.
- **Sizing**: rendered at 16–24px in inline UI; 40–80px in feature lists;
  300px+ in hero illustrations.
- **Emoji**: not used in the UI, except `🚀` in the top announcement bar.
- **Unicode characters as icons**: occasional `→` (right arrow) inline
  inside running text on banners and small CTAs; otherwise SVGs are
  preferred.
- **No** Heroicons / Lucide / FontAwesome / Material — do not introduce
  them. If you need an icon that doesn't exist in the set, sketch one
  in the same chunky-fill style or flag it and ask.

---

## Font substitution flag

> **PragmaticaExtended is a licensed display face.** The TTFs are
> committed to the public Nuxt repo (`public/fonts/`) and we've copied
> them into `fonts/`. They render fine in HTML artifacts. Black (800)
> and Bold (600) are the only weights provided. If a 400/Regular display
> weight is needed, the closest no-cost match on Google Fonts is
> **"Archivo"** or **"Big Shoulders Display"**, but no substitution has
> been made — flag this and ask if regular-weight display copy is needed.
> Roboto is shipped from Google as the de-facto body face.

---

## Iterating

This system is intentionally pragmatic — it captures what the production
site actually does, not an aspirational version. Open `preview/` cards
in the Design System tab to spot anything that feels off, and tell me
what to refine.

---

## Quick start for designers

1. `<link rel="stylesheet" href="colors_and_type.css">` — gives you fonts,
   palette tokens (`--c-green`, `--bg-dark`, …) and base type classes.
2. Use `.cp-display`, `.cp-h1`, `.cp-h2`, `.cp-h3`, `.cp-lead`,
   `.cp-body`, `.cp-eyebrow`, `.cp-highlight` for typography.
3. Pull SVGs from `assets/icons/` and `assets/patterns/` directly.
4. For full layouts, copy or import from `ui_kits/landing/` — the JSX
   components and `landing.css` are the canonical, on-brand
   implementations.

## Manifest

- `README.md`           — this file
- `SKILL.md`            — Agent Skill front-matter
- `colors_and_type.css` — single-import token + type stylesheet
- `fonts/`              — PragmaticaExtended + Roboto TTFs
- `assets/`
  - `logo.svg`, `favicon.svg`, `favicon.png`
  - `icons/`            — UI + brand SVGs (40+)
  - `patterns/`         — polymorph wave dividers, platform card
    patterns, footer pattern
  - `images/`           — phone mockups + users.webp
- `preview/`            — design-system cards (registered to the
  Design System tab; grouped Type / Colors / Spacing / Components /
  Brand)
- `ui_kits/landing/`    — homepage recreation (Header, Hero, Platforms,
  Actions, UsersStat, FAQ, Footer + `index.html` showcase)
