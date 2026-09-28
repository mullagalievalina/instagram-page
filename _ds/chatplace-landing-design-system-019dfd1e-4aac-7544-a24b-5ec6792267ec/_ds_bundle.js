/* @ds-bundle: {"format":4,"namespace":"ChatPlaceLandingDesignSystem_019dfd","components":[],"sourceHashes":{"ui_kits/landing/ActionSection.jsx":"68922e36ab2e","ui_kits/landing/AnnouncementBar.jsx":"12d9e4bc9405","ui_kits/landing/Buttons.jsx":"69478564783d","ui_kits/landing/FAQ.jsx":"a6e207a66434","ui_kits/landing/Footer.jsx":"b2bdbe378041","ui_kits/landing/Header.jsx":"68d4a04745cc","ui_kits/landing/Hero.jsx":"45831e2e6341","ui_kits/landing/Platforms.jsx":"3bda0e2fda53","ui_kits/landing/UsersStat.jsx":"3952d899d8c7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChatPlaceLandingDesignSystem_019dfd = window.ChatPlaceLandingDesignSystem_019dfd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing/ActionSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, CButton, Highlight */
const {
  useState,
  useEffect
} = React;

// Inline-load the SVG so `fill="currentColor"` inherits from the section.
function InlineSvg({
  src,
  className,
  style
}) {
  const [markup, setMarkup] = useState(null);
  useEffect(() => {
    let alive = true;
    fetch(src).then(r => r.text()).then(t => {
      if (alive) setMarkup(t);
    });
    return () => {
      alive = false;
    };
  }, [src]);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style,
    dangerouslySetInnerHTML: {
      __html: markup || ""
    }
  });
}
const ACTIONS = [{
  id: "attract",
  color: "pink",
  // section background
  title: "Attract more followers",
  list: [{
    title: "Chatbots with follower check",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, "Get ", /*#__PURE__*/React.createElement(Highlight, null, "163%"), " more reach and turn content views into followers")
  }, {
    title: "Referral System",
    body: "Bring in new audience through user and partner referrals"
  }],
  // top pattern fills with section color → merges from previous (white) section into pink
  topPattern: "../../assets/patterns/polymorph-top-v2-desktop.svg",
  // background behind the top pattern is the previous section's color
  topPrevColor: "#FFFFFF"
}, {
  id: "automate",
  color: "dark-pink",
  title: "Let AI handle your messages",
  list: [{
    title: "AI Agent chats like you",
    body: "Understands context, replies your DMs, comments and tags. Keeps your audience engaged and sells 24/7"
  }, {
    title: "Turns chats chaos into a system",
    body: "AI Agent saves client data, tracks common and missed questions, notifies you when to step in the conversation"
  }],
  cta: "Learn more",
  topPattern: "../../assets/patterns/polymorph-top-v3-desktop.svg",
  topPrevColor: "#E3248B" // pink (previous Action)
}, {
  id: "sales",
  color: "blue",
  title: "Engage and drive sales effortlessly",
  list: [{
    title: "Gamification and loyalty programs",
    body: "Use our automated gamification system to reward your audience with points every time they engage with your content"
  }, {
    title: "Sales funnels and broadcasts",
    body: "Maintain sales flow and re-engage customers with tailored broadcasts"
  }, {
    title: "CRM and integrations",
    body: "Easily segment audiences, export data to payment systems, Google sheets, and other services"
  }],
  topPattern: "../../assets/patterns/polymorph-top-desktop.svg",
  topPrevColor: "#5F0C43",
  // dark-pink
  bottomPattern: "../../assets/patterns/polymorph-bottom-desktop.svg",
  bottomNextColor: "#FFFFFF" // returns to white page
}];
function ActionItem({
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: "cp-action__item"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "cp-action__item-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "cp-action__item-body"
  }, body));
}
function ActionSection({
  id,
  color,
  title,
  list,
  cta,
  topPattern,
  topPrevColor,
  bottomPattern,
  bottomNextColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `cp-action cp-action--${color}`,
    "data-screen-label": `Action ${id}`
  }, topPattern && /*#__PURE__*/React.createElement(InlineSvg, {
    src: topPattern,
    className: "cp-action__pattern cp-action__pattern--top",
    style: {
      background: topPrevColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cp-action__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cp-action__title"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "cp-action__list"
  }, list.map((it, i) => /*#__PURE__*/React.createElement(ActionItem, _extends({
    key: i
  }, it)))), cta && /*#__PURE__*/React.createElement(CButton, {
    color: "green"
  }, cta)), bottomPattern && /*#__PURE__*/React.createElement(InlineSvg, {
    src: bottomPattern,
    className: "cp-action__pattern cp-action__pattern--bottom",
    style: {
      background: bottomNextColor
    }
  }));
}
function Actions() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cp-actions"
  }, ACTIONS.map(a => /*#__PURE__*/React.createElement(ActionSection, _extends({
    key: a.id
  }, a))));
}
Object.assign(window, {
  ActionSection,
  Actions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ActionSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/AnnouncementBar.jsx
try { (() => {
/* global React */
function AnnouncementBar({
  badge = "🚀 New",
  text = "Virale — AI Agent for viral content",
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "cp-ann",
    href: href
  }, /*#__PURE__*/React.createElement("span", {
    className: "cp-ann__badge"
  }, badge), /*#__PURE__*/React.createElement("span", {
    className: "cp-ann__text"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "cp-ann__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
window.AnnouncementBar = AnnouncementBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Buttons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState
} = React;
function Highlight({
  children,
  color = "green",
  style
}) {
  const palette = {
    green: {
      bg: "#BEFF53",
      fg: "#0C0C0C"
    },
    pink: {
      bg: "#FB4685",
      fg: "#FFFFFF"
    },
    yellow: {
      bg: "#FFFF5A",
      fg: "#0C0C0C"
    }
  }[color] || {
    bg: "#BEFF53",
    fg: "#0C0C0C"
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "cp-highlight",
    style: {
      background: palette.bg,
      color: palette.fg,
      ...style
    }
  }, children);
}
function CButton({
  children,
  color = "green",
  as: As = "button",
  ...rest
}) {
  return /*#__PURE__*/React.createElement(As, _extends({
    className: `cp-btn cp-btn--${color}`
  }, rest), children);
}
function ButtonArrow({
  children = "Try it for free",
  color = "green",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `cp-btn cp-btn--arrow cp-btn--${color}`
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cp-btn__label"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "cp-btn__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 19 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 1l7 7-7 7M1 8h17",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(window, {
  Highlight,
  CButton,
  ButtonArrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Buttons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/FAQ.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
const QUESTIONS = [{
  q: "Is there a free plan or a trial period on ChatPlace?",
  a: "Yes. The Free plan lets you use the basic features without payment — up to 200 active contacts per month. You can also activate a 7-day trial of the Pro plan to test all features with no limits and no credit card required."
}, {
  q: "What is the ChatPlace AI Agent?",
  a: "An LLM-powered assistant that replies to your DMs, comments and tags in your own tone of voice. It answers FAQs, qualifies leads, and notifies you when to step in."
}, {
  q: "What are AI credits?",
  a: "AI credits are messages and comments from your AI Agent, plus Virale usage for content generation and chat."
}, {
  q: "Which platforms does ChatPlace support?",
  a: "Instagram, Telegram and TikTok. The same automation tools — chatbots, AI Agent, gamification and broadcasts — work across all three."
}];
function FAQ() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "cp-faq",
    "data-screen-label": "FAQ"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cp-section__title"
  }, "FAQ"), /*#__PURE__*/React.createElement("ul", {
    className: "cp-faq__list"
  }, QUESTIONS.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: `cp-faq__row ${open === i ? "is-open" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "cp-faq__q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
    className: "cp-faq__icon"
  }, open === i ? "−" : "+")), open === i && /*#__PURE__*/React.createElement("div", {
    className: "cp-faq__a"
  }, item.a)))));
}
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
/* global React */

const MAP_COLS = [{
  title: "Продукты",
  items: ["Instagram", "Telegram", "TikTok", "Virale", "ИИ-агент", "MCP Server", "Геймификация в Instagram", "Геймификация в Telegram"]
}, {
  title: "Ресурсы",
  items: ["Цены", "Партнёры", "Лига креаторов", "Блог", "Мини-курс", "База знаний", "Стратегия Instagram", "Карьера"]
}, {
  title: "Документы",
  items: ["Политика конфиденциальности", "Пользовательское соглашение", "Согласие на получение рекламы", "Согласие на обработку персональных данных", "Партнёрская оферта"]
}];
function FooterMap() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cp-map",
    "data-screen-label": "Footer Sitemap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-map__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-map__section cp-map__section--1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cp-map__title"
  }, "\xA9 2026. ChatPlace\xAE"), /*#__PURE__*/React.createElement("div", {
    className: "cp-map__note"
  }, /*#__PURE__*/React.createElement("p", null, "*Meta Platforms Inc. \u0438 Instagram \u043F\u0440\u0438\u0437\u043D\u0430\u043D\u044B \u044D\u043A\u0441\u0442\u0440\u0435\u043C\u0438\u0441\u0442\u0441\u043A\u0438\u043C\u0438 \u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u044B \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F ChatGPT \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 OpenAI"))), /*#__PURE__*/React.createElement("div", {
    className: "cp-map__section cp-map__section--2"
  }, MAP_COLS.map(col => /*#__PURE__*/React.createElement("div", {
    className: "cp-map__col",
    key: col.title
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cp-map__col-title"
  }, col.title), col.items.map(it => /*#__PURE__*/React.createElement("a", {
    className: "cp-map__link",
    key: it
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    className: "cp-map__bottom-line"
  }));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "cp-footer-wrap",
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement(FooterMap, null), /*#__PURE__*/React.createElement("div", {
    className: "cp-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cp-footer__icon",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "28",
    height: "28",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 9.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 10.56a4.16 4.16 0 1 1 0-8.32 4.16 4.16 0 0 1 0 8.32zM24.16 9.328a1.504 1.504 0 1 1-3.008 0 1.504 1.504 0 0 1 3.008 0zM28.432 10.864c-.096-2.016-.56-3.808-2.064-5.296S22.928 3.648 20.912 3.552c-2.08-.112-8.32-.112-10.4 0-2.016.096-3.808.56-5.296 2.064s-1.92 3.296-2.016 5.312c-.112 2.08-.112 8.32 0 10.4.096 2.016.56 3.808 2.016 5.296s3.296 1.92 5.312 2.016c2.08.112 8.32.112 10.4 0 2.016-.096 3.808-.56 5.296-2.064s1.92-3.296 2.016-5.296c.112-2.08.112-8.32 0-10.4z"
  }))), /*#__PURE__*/React.createElement("a", {
    className: "cp-footer__icon",
    "aria-label": "Telegram"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "28",
    height: "28",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26.832 5.008 4.064 13.792c-1.552.624-1.544 1.488-.288 1.872l5.84 1.824 13.52-8.528c.64-.392 1.224-.184.744.248L12.928 19.104h-.008l.008.008-.4 5.984c.592 0 .848-.272 1.176-.592l2.84-2.76 5.904 4.36c1.088.6 1.872.288 2.144-1.008l3.88-18.288c.392-1.592-.616-2.32-1.64-1.8z"
  }))), /*#__PURE__*/React.createElement("a", {
    className: "cp-footer__icon",
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "28",
    height: "28",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28.96 9.84a3.36 3.36 0 0 0-2.368-2.376C24.512 6.88 16 6.88 16 6.88s-8.512 0-10.592.584A3.36 3.36 0 0 0 3.04 9.84C2.464 11.92 2.464 16 2.464 16s0 4.08.576 6.16a3.36 3.36 0 0 0 2.368 2.376C7.488 25.12 16 25.12 16 25.12s8.512 0 10.592-.584a3.36 3.36 0 0 0 2.368-2.376c.576-2.08.576-6.16.576-6.16s0-4.08-.576-6.16zM13.28 20V12l7.04 4-7.04 4z"
  })))), /*#__PURE__*/React.createElement("button", {
    className: "cp-footer__top-btn",
    "aria-label": "Back to top"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "32",
    height: "32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 25V8M9 15l7-7 7 7"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cp-footer__pattern-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cp-footer__pattern",
    src: "../../assets/patterns/footer-dark-desktop.svg",
    alt: ""
  }))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
/* global React */
const NAV = [{
  id: "solutions",
  title: "Solutions",
  caret: true
}, {
  id: "pricing",
  title: "Pricing"
}, {
  id: "club",
  title: "Club"
}, {
  id: "partners",
  title: "Partners"
}, {
  id: "resources",
  title: "Resources",
  caret: true
}];
function Header({
  theme = "light"
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: `cp-header cp-header--${theme}`,
    "data-screen-label": `Header (${theme})`
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cp-header__brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "ChatPlace"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "cp-header__nav"
  }, NAV.map(item => /*#__PURE__*/React.createElement("span", {
    key: item.id,
    className: "cp-nav__item"
  }, item.title, item.caret && /*#__PURE__*/React.createElement("svg", {
    className: "cp-nav__caret",
    viewBox: "0 0 12 8",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l5 5 5-5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "cp-header__controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cp-lang"
  }, "EN", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 8",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l5 5 5-5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "cp-iconbtn",
    "aria-label": "Sign in"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "cp-btn cp-btn--sm cp-header__cta"
  }, "Try it for free"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* global React, ButtonArrow */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cp-hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "cp-hero__title"
  }, "Unlock the power", /*#__PURE__*/React.createElement("br", null), "of your content and chats"), /*#__PURE__*/React.createElement("p", {
    className: "cp-hero__lead"
  }, "AI Agents and chatbots to help you grow followers, engage and sell", /*#__PURE__*/React.createElement("br", null), "on Instagram & TikTok. Set up from your phone in minutes"), /*#__PURE__*/React.createElement(ButtonArrow, null, "Try it for Free"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Platforms.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, CButton */
const PLATFORMS = [{
  id: "instagram",
  title: "Instagram",
  description: "ChatPlace offers tools to enhance your growth strategy for both business and blogging, along with fresh content inspirations",
  image: "../../assets/images/platform-instagram.png",
  pattern: "../../assets/patterns/platform-instagram-pattern.svg"
}, {
  id: "telegram",
  title: "Telegram",
  description: "Drive organic traffic, promote your channel without ads, and tackle other tasks to bring new followers and clients to your channel",
  image: "../../assets/images/platform-telegram.png",
  pattern: "../../assets/patterns/platform-telegram-pattern.svg"
}, {
  id: "tiktok",
  title: "TikTok",
  description: "Use powerful automation tools to boost engagement, attract followers, and increase sales through viral content and interactive features",
  image: "../../assets/images/platform-tiktok.png",
  pattern: "../../assets/patterns/platform-tiktok-pattern.svg"
}];
function PlatformCard({
  id,
  title,
  description,
  image,
  pattern
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cp-pcard cp-pcard--${id}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-pcard__content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cp-pcard__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "cp-pcard__desc"
  }, description), /*#__PURE__*/React.createElement(CButton, null, "Learn more")), /*#__PURE__*/React.createElement("div", {
    className: "cp-pcard__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-pcard__pattern",
    style: {
      backgroundImage: `url(${pattern})`
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "cp-pcard__image",
    src: image,
    alt: ""
  })));
}
function Platforms() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cp-section",
    "data-screen-label": "Platforms"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cp-section__title"
  }, "Grow everywhere", /*#__PURE__*/React.createElement("br", null), "you create"), /*#__PURE__*/React.createElement("div", {
    className: "cp-pcard__grid"
  }, PLATFORMS.map(p => /*#__PURE__*/React.createElement(PlatformCard, _extends({
    key: p.id
  }, p)))));
}
Object.assign(window, {
  Platforms,
  PlatformCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Platforms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/UsersStat.jsx
try { (() => {
/* global React, Highlight */
function UsersStat() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cp-users",
    "data-screen-label": "Users"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-users__num"
  }, /*#__PURE__*/React.createElement(Highlight, null, "Over 50M")), /*#__PURE__*/React.createElement("p", {
    className: "cp-users__desc"
  }, "active followers gained by ChatPlace"));
}
window.UsersStat = UsersStat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/UsersStat.jsx", error: String((e && e.message) || e) }); }

})();
