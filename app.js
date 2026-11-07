/* ============================================================
   APP — renders the site from window.SITE (content.js)
   ============================================================ */

(function () {
  "use strict";

  var SITE = window.SITE;
  if (!SITE) return;

  /* ---------- helpers ---------- */

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[c];
    });
  }

  var ICONS = {
    download:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>',
    arrowRight:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    arrowUpRight:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    medium:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>',
    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>',
    menu:
      '<svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    close:
      '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
  };

  function ic(name, cls) {
    var svg = ICONS[name] || ICONS.arrowUpRight;
    if (cls) svg = svg.replace("<svg ", '<svg class="' + cls + '" ');
    return svg;
  }

  function external(url) {
    return /^https?:/i.test(url || "");
  }

  function linkAttrs(url) {
    return external(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function downloadName(url) {
    return String(url || "").split("/").pop() || "resume.pdf";
  }

  /* ---------- navigation ---------- */

  function renderNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    var n = SITE.nav;

    var links = (n.links || [])
      .map(function (l) {
        return '<li><a href="' + esc(l.href) + '">' + esc(l.label) + "</a></li>";
      })
      .join("");

    nav.innerHTML =
      '<div class="nav__inner">' +
      '<a class="nav__brand" href="#main">' + esc(n.brand) + "</a>" +
      '<ul class="nav__links">' + links + "</ul>" +
      '<div class="nav__actions">' +
      (n.cv
        ? '<a class="btn btn--ghost btn--sm" href="' +
          esc(n.cv.url) +
          '"' +
          (n.cv.download ? ' download="' + esc(downloadName(n.cv.url)) + '"' : "") +
          ">" +
          esc(n.cv.label) +
          "</a>"
        : "") +
      (n.linkedin
        ? '<a class="btn btn--primary btn--sm" href="' +
          esc(n.linkedin.url) +
          '"' +
          linkAttrs(n.linkedin.url) +
          ">" +
          esc(n.linkedin.label) +
          "</a>"
        : "") +
      '<button class="nav__toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">' +
      ICONS.menu +
      ICONS.close +
      "</button>" +
      "</div>" +
      "</div>";

    nav.setAttribute("data-rendered", "true");

    var toggle = nav.querySelector(".nav__toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- hero ---------- */

  function renderHero() {
    var root = document.getElementById("hero");
    if (!root) return;
    var h = SITE.hero;

    var chips = (h.credits || [])
      .map(function (c) {
        var label = typeof c === "string" ? c : c && c.label;
        var target = typeof c === "string" ? "" : c && c.target;
        if (!label) return "";
        if (!target) {
          return '<li><span class="hero__chip hero__chip--static">' + esc(label) + "</span></li>";
        }
        return (
          '<li><a class="hero__chip" href="#' +
          esc(target) +
          '" data-scroll-target="' +
          esc(target) +
          '">' +
          esc(label) +
          "</a></li>"
        );
      })
      .join("");

    var photo = h.photo
      ? '<img src="' + esc(h.photo) + '" alt="' + esc(h.photoAlt || h.badgeName) + '" />'
      : "";

    var logo = h.logo
      ? '<img src="' + esc(h.logo) + '" alt="' + esc(h.badgeRole || "") + '" />'
      : '<span class="hero__logo-text">' + esc(initials(h.badgeName)) + "</span>";

    root.innerHTML =
      '<section class="hero" id="top">' +
      '<div class="hero__bg" aria-hidden="true"></div>' +
      '<div class="hero__inner container">' +
      '<div class="hero__grid">' +
      '<div class="hero__copy reveal">' +
      '<div class="eyebrow"><span class="eyebrow__line"></span><p class="eyebrow__text">' +
      esc(h.eyebrow) +
      "</p></div>" +
      '<h1 class="hero__title">' +
      esc(h.titleLine1) +
      "<br>" +
      esc(h.titleLine2Prefix || "") +
      "<span>" +
      esc(h.titleLine2Accent) +
      "</span></h1>" +
      '<p class="hero__bio">' +
      esc(h.bio) +
      "</p>" +
      '<div class="hero__credits">' +
      '<span class="hero__credits-label">' +
      esc(h.creditsLabel || "Credits include") +
      "</span>" +
      '<ul class="hero__chips">' +
      chips +
      "</ul>" +
      "</div>" +
      '<div class="hero__actions">' +
      (h.primaryCta
        ? '<a class="btn btn--primary btn--lg" href="' +
          esc(h.primaryCta.url) +
          '"' +
          (h.primaryCta.download ? ' download="' + esc(downloadName(h.primaryCta.url)) + '"' : "") +
          ">" +
          ic("download", "btn__icon") +
          esc(h.primaryCta.label) +
          "</a>"
        : "") +
      (h.secondaryCta
        ? '<a class="btn btn--outline btn--lg" href="' +
          esc(h.secondaryCta.url) +
          '"' +
          linkAttrs(h.secondaryCta.url) +
          ">" +
          esc(h.secondaryCta.label) +
          "</a>"
        : "") +
      "</div>" +
      "</div>" +
      '<div class="hero__media reveal">' +
      '<div class="hero__card">' +
      '<div class="hero__photo">' +
      photo +
      "</div>" +
      '<div class="hero__badge">' +
      '<span class="hero__badge-name">' +
      esc(h.badgeName) +
      "</span>" +
      '<span class="hero__badge-role">' +
      esc(h.badgeRole) +
      "</span>" +
      "</div>" +
      '<div class="hero__logo" aria-hidden="true">' +
      logo +
      "</div>" +
      '<div class="hero__code">' +
      esc(h.code || "") +
      "</div>" +
      "</div>" +
      '<div class="hero__offset" aria-hidden="true"></div>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>";
  }

  function initials(name) {
    return String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) {
        return w.charAt(0).toUpperCase();
      })
      .join("");
  }

  /* ---------- approach ---------- */

  function renderApproach() {
    var root = document.getElementById("approach");
    if (!root) return;
    var a = SITE.approach;

    var items = (a.items || [])
      .map(function (item, i) {
        return (
          '<article class="approach__item reveal" style="transition-delay:' +
          i * 70 +
          'ms">' +
          '<span class="approach__num">' +
          esc(item.number) +
          "</span>" +
          '<h3 class="approach__title">' +
          esc(item.title) +
          "</h3>" +
          '<p class="approach__desc">' +
          esc(item.description) +
          "</p>" +
          '<span class="approach__tag">' +
          esc(item.tag) +
          "</span>" +
          "</article>"
        );
      })
      .join("");

    root.innerHTML =
      '<div class="container">' +
      '<div class="approach__head">' +
      '<div class="reveal">' +
      '<div class="eyebrow"><span class="eyebrow__line"></span><h2 class="eyebrow__text">' +
      esc(a.eyebrow) +
      "</h2></div>" +
      '<h3 class="section-title" id="approach-title">' +
      esc(a.titleLine1) +
      ' <span style="color:var(--primary)">' +
      esc(a.titleAccent) +
      "</span><br>" +
      esc(a.titleLine2) +
      "</h3>" +
      "</div>" +
      '<p class="approach__intro reveal">' +
      esc(a.intro) +
      "</p>" +
      "</div>" +
      '<div class="approach__grid">' +
      items +
      "</div>" +
      "</div>";
  }

  /* ---------- projects ---------- */

  function projectButton(link) {
    var cls = link.style === "white" ? "btn--white" : "btn--on-dark";
    var iconName = link.icon === "github" ? "github" : link.icon === "arrow" ? "arrowRight" : "arrowUpRight";
    var isInternal = !external(link.url);
    return (
      '<a class="btn ' +
      cls +
      ' btn--md" href="' +
      esc(link.url) +
      '"' +
      (isInternal ? "" : ' target="_blank" rel="noopener noreferrer"') +
      ">" +
      esc(link.label) +
      ic(iconName, "btn__icon") +
      "</a>"
    );
  }

  function metricHtml(metric) {
    if (!metric || !metric.value) return "";
    var inner =
      '<span class="project-feature__metric-label">' +
      esc(metric.label) +
      "</span>" +
      '<span class="project-feature__metric-value">' +
      esc(metric.value) +
      "</span>";
    if (metric.url) {
      return (
        '<a class="project-feature__metric" href="' +
        esc(metric.url) +
        '" target="_blank" rel="noopener noreferrer">' +
        inner +
        "</a>"
      );
    }
    return '<div class="project-feature__metric">' + inner + "</div>";
  }

  function producerMarkup(p, prefix) {
    return (
      '<div class="' +
      prefix +
      '__producer">' +
      '<span class="' +
      prefix +
      '__producer-label">' +
      esc(SITE.projects.label || "Built At") +
      "</span>" +
      (p.producerLogo
        ? '<img class="' +
          prefix +
          '__producer-logo' +
          (p.producerLogoRound ? " is-round" : "") +
          '" src="' +
          esc(p.producerLogo) +
          '" alt="' +
          esc(p.producer || "") +
          ' logo" loading="lazy" />'
        : '<span class="' +
          prefix +
          '__producer-text">' +
          esc(p.producer || "") +
          "</span>") +
      "</div>"
    );
  }

  function renderProjects() {
    var root = document.getElementById("projects");
    if (!root) return;
    var p = SITE.projects;

    var features = (p.features || [])
      .map(function (proj) {
        var color = proj.color || "#151927";
        var bgImage = proj.image
          ? '<img src="' + esc(proj.image) + '" alt="" loading="lazy" />'
          : '<span class="project-feature__watermark">' + esc(proj.logoText || proj.title) + "</span>";

        var platforms = (proj.platforms || [])
          .map(function (pl) {
            return '<span class="project-feature__platform">' + esc(pl) + "</span>";
          })
          .join("");

        var actions = (proj.links || []).map(projectButton).join("");
        if (proj.video) {
          actions +=
            '<button class="btn btn--on-dark btn--md" type="button" data-video="' +
            esc(proj.video) +
            '">' +
            ic("play", "btn__icon") +
            "Watch Preview</button>";
        }
        actions += metricHtml(proj.metric);

        return (
          '<article class="project-feature"' +
          (proj.id ? ' id="' + esc(proj.id) + '"' : "") +
          ' style="--project-color:' +
          esc(color) +
          '">' +
          producerMarkup(proj, "project-feature") +
          '<div class="project-feature__bg" aria-hidden="true">' +
          bgImage +
          '<div class="project-feature__tint"></div>' +
          '<div class="project-feature__gradient"></div>' +
          "</div>" +
          '<div class="project-feature__inner">' +
          '<div class="project-feature__content reveal">' +
          '<div class="project-feature__title-wrap">' +
          (proj.status
            ? '<span class="project-feature__status">' + esc(proj.status) + "</span>"
            : "") +
          '<h2 class="project-feature__title">' +
          esc(proj.title) +
          "</h2>" +
          "</div>" +
          '<div class="project-feature__meta">' +
          '<div class="project-feature__role">' +
          esc(proj.role) +
          (proj.focus ? ' <span>&middot; ' + esc(proj.focus) + "</span>" : "") +
          "</div>" +
          (platforms ? '<div class="project-feature__platforms">' + platforms + "</div>" : "") +
          "</div>" +
          (proj.outcome
            ? '<div class="project-feature__outcome">' +
              '<div class="project-feature__outcome-label">Outcome</div>' +
              '<p class="project-feature__outcome-text">' +
              esc(proj.outcome) +
              "</p></div>"
            : "") +
          '<p class="project-feature__desc">' +
          esc(proj.description) +
          "</p>" +
          (actions ? '<div class="project-feature__actions">' + actions + "</div>" : "") +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    var more = (p.more || [])
      .map(function (proj) {
        var color = proj.color || "#151927";
        var bgImage = proj.image
          ? '<img src="' + esc(proj.image) + '" alt="" loading="lazy" />'
          : '<span class="more-card__watermark">' + esc(proj.logoText || proj.title) + "</span>";

        var actions = (proj.links || []).map(projectButton).join("");

        return (
          '<article class="more-card"' +
          (proj.id ? ' id="' + esc(proj.id) + '"' : "") +
          ' style="--project-color:' +
          esc(color) +
          '">' +
          producerMarkup(proj, "more-card") +
          '<div class="more-card__bg" aria-hidden="true">' +
          bgImage +
          '<div class="more-card__tint"></div>' +
          '<div class="more-card__gradient"></div>' +
          "</div>" +
          '<div class="more-card__content reveal">' +
          (proj.status ? '<span class="more-card__badge">' + esc(proj.status) + "</span>" : "") +
          '<h3 class="more-card__title">' +
          esc(proj.title) +
          "</h3>" +
          '<div class="more-card__meta">' +
          esc(proj.role) +
          (proj.focus ? ' <span>&middot; ' + esc(proj.focus) + "</span>" : "") +
          "</div>" +
          (proj.outcome
            ? '<div class="more-card__outcome">' +
              '<div class="more-card__outcome-label">Outcome</div>' +
              '<p class="more-card__outcome-text">' +
              esc(proj.outcome) +
              "</p></div>"
            : "") +
          '<p class="more-card__desc">' +
          esc(proj.description) +
          "</p>" +
          (actions ? '<div class="more-card__actions">' + actions + "</div>" : "") +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    root.innerHTML =
      features +
      '<div class="projects__more">' +
      '<div class="projects__more-head">' +
      '<span class="eyebrow__line"></span>' +
      '<h2 class="eyebrow__text">' +
      esc(p.moreLabel || "More Projects") +
      "</h2>" +
      "</div>" +
      '<div class="projects__more-grid">' +
      more +
      "</div>" +
      "</div>";
  }

  /* ---------- experience ---------- */

  function renderExperience() {
    var root = document.getElementById("experience");
    if (!root) return;
    var e = SITE.experience;

    var items = (e.items || [])
      .map(function (item, i) {
        var mark = item.logo
          ? '<img class="timeline-item__logo" src="' + esc(item.logo) + '" alt="' + esc(item.company) + ' logo" loading="lazy" />'
          : '<span class="timeline-item__monogram" aria-hidden="true">' + esc(item.monogram || initials(item.company)) + "</span>";

        var bullets = (item.bullets || [])
          .map(function (b) {
            return "<li>" + esc(b) + "</li>";
          })
          .join("");

        var link =
          i === (e.items || []).length - 1 && e.link
            ? '<a class="timeline-item__link" href="' +
              esc(e.link.url) +
              '"' +
              linkAttrs(e.link.url) +
              ">" +
              esc(e.link.label) +
              ic("arrowRight", "btn__icon") +
              "</a>"
            : "";

        return (
          '<article class="timeline-item reveal">' +
          '<span class="timeline-item__dot" aria-hidden="true"></span>' +
          '<div class="timeline-item__head">' +
          '<div class="timeline-item__company">' +
          mark +
          "<div>" +
          '<h3 class="timeline-item__company-name">' +
          esc(item.company) +
          "</h3>" +
          '<div class="timeline-item__role">' +
          esc(item.role) +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="timeline-item__dates">' +
          esc(item.dates) +
          "</div>" +
          "</div>" +
          '<p class="timeline-item__desc">' +
          esc(item.description) +
          "</p>" +
          (bullets
            ? "<details>" +
              "<summary>Key contributions " +
              ic("chevron") +
              "</summary>" +
              '<ul class="timeline-item__bullets">' +
              bullets +
              "</ul>" +
              "</details>"
            : "") +
          link +
          "</article>"
        );
      })
      .join("");

    root.innerHTML =
      '<div class="container">' +
      '<div class="experience__grid">' +
      '<aside class="experience__aside">' +
      '<div class="experience__aside-inner reveal">' +
      '<div class="eyebrow eyebrow--accent"><span class="eyebrow__line"></span><h2 class="eyebrow__text">' +
      esc(e.eyebrow) +
      "</h2></div>" +
      '<h3 class="experience__title" id="experience-title">' +
      esc(e.titleLine1) +
      "<br>" +
      esc(e.titleLine2) +
      "</h3>" +
      '<p class="experience__intro">' +
      esc(e.intro) +
      "</p>" +
      (e.skills
        ? '<div class="experience__skills">' +
          '<span class="experience__skills-label">' +
          esc(e.skills.label) +
          "</span>" +
          (e.skills.groups || [])
            .map(function (g) {
              return (
                '<div class="experience__skill-group">' +
                '<span class="experience__skill-group-label">' +
                esc(g.label) +
                "</span>" +
                '<ul class="experience__skill-tags">' +
                (g.items || [])
                  .map(function (item) {
                    return "<li>" + esc(item) + "</li>";
                  })
                  .join("") +
                "</ul></div>"
              );
            })
            .join("") +
          "</div>"
        : "") +
      "</div>" +
      "</aside>" +
      '<div class="experience__timeline">' +
      items +
      "</div>" +
      "</div>" +
      "</div>";
  }

  /* ---------- writing ---------- */

  function renderWriting() {
    var root = document.getElementById("writing");
    if (!root) return;
    var w = SITE.writing;
    if (!w || w.show === false) {
      root.remove();
      return;
    }

    var cards = (w.items || [])
      .map(function (item, i) {
        var bg = item.image
          ? '<div class="article-card__bg" aria-hidden="true"><img src="' +
            esc(item.image) +
            '" alt="" loading="lazy" /></div>'
          : "";

        return (
          '<a class="article-card reveal" href="' +
          esc(item.url) +
          '"' +
          linkAttrs(item.url) +
          ' style="transition-delay:' +
          i * 80 +
          'ms">' +
          bg +
          '<div class="article-card__content">' +
          '<span class="article-card__category">' +
          esc(item.category) +
          "</span>" +
          '<h4 class="article-card__title">' +
          esc(item.title) +
          "</h4>" +
          '<div class="article-card__meta">' +
          '<span class="article-card__publication">' +
          esc(item.publication) +
          (item.date ? " &middot; " + esc(item.date) : "") +
          "</span>" +
          ic("arrowUpRight", "article-card__arrow") +
          "</div>" +
          "</div>" +
          "</a>"
        );
      })
      .join("");

    var archive = w.archive
      ? '<a class="btn btn--primary btn--lg" href="' +
        esc(w.archive.url) +
        '"' +
        linkAttrs(w.archive.url) +
        ">" +
        esc(w.archive.label) +
        ic("arrowUpRight", "btn__icon") +
        "</a>"
      : "";

    root.innerHTML =
      '<div class="container">' +
      '<div class="writing__head">' +
      '<div class="reveal">' +
      '<div class="eyebrow"><span class="eyebrow__line"></span><h2 class="eyebrow__text">' +
      esc(w.eyebrow) +
      "</h2></div>" +
      '<h3 class="writing__title" id="writing-title">' +
      esc(w.title) +
      "</h3>" +
      "</div>" +
      '<div class="writing__archive-desktop reveal">' +
      archive +
      "</div>" +
      "</div>" +
      '<div class="writing__grid">' +
      cards +
      "</div>" +
      '<div class="writing__mobile-archive">' +
      archive +
      "</div>" +
      "</div>";
  }

  /* ---------- contact ---------- */

  function renderContact() {
    var root = document.getElementById("contact");
    if (!root) return;
    var c = SITE.contact;

    var socials = (c.social || [])
      .map(function (s) {
        return (
          '<a class="social-link" href="' +
          esc(s.url) +
          '" aria-label="' +
          esc(s.label) +
          '"' +
          linkAttrs(s.url) +
          ">" +
          (ICONS[s.icon] || ICONS.mail) +
          "</a>"
        );
      })
      .join("");

    var action = c.formAction || "";
    var usesFormSubmit = /formsubmit\.co/i.test(action);
    var nextUrl =
      (typeof window !== "undefined" ? window.location.origin + window.location.pathname : "") +
      "?sent=1#contact";

    var hidden = usesFormSubmit
      ? '<input type="hidden" name="_next" value="' +
        esc(nextUrl) +
        '" />' +
        '<input type="hidden" name="_subject" value="New Portfolio Message" />' +
        '<input type="hidden" name="_captcha" value="false" />' +
        '<input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true" />'
      : "";

    var formAction = action || "mailto:" + c.email;

    root.innerHTML =
      '<div class="contact__bg" aria-hidden="true"></div>' +
      '<div class="contact__inner">' +
      '<div class="contact__grid">' +
      '<div class="reveal">' +
      '<h2 class="contact__eyebrow" id="contact-title">' +
      esc(c.eyebrow) +
      "</h2>" +
      '<h3 class="contact__title">' +
      esc(c.titleLine1) +
      " <br>" +
      esc(c.titleLine2Prefix || "") +
      "<span>" +
      esc(c.titleAccent) +
      "</span>" +
      esc(c.titleSuffix || "") +
      "</h3>" +
      '<p class="contact__text">' +
      esc(c.text) +
      "</p>" +
      '<div class="contact__socials">' +
      socials +
      "</div>" +
      "</div>" +
      '<div class="contact__card reveal">' +
      '<form class="contact__form" action="' +
      esc(formAction) +
      '" method="POST" novalidate>' +
      hidden +
      '<div class="form-row">' +
      '<div class="field">' +
      '<label for="name">Your Name</label>' +
      '<input id="name" name="name" type="text" placeholder="Enter your name" required autocomplete="name" />' +
      "</div>" +
      '<div class="field">' +
      '<label for="email">Email Address</label>' +
      '<input id="email" name="email" type="email" placeholder="name@example.com" required autocomplete="email" />' +
      "</div>" +
      "</div>" +
      '<div class="field">' +
      '<label for="message">Your Message</label>' +
      '<textarea id="message" name="message" placeholder="Tell me about the role or opportunity..." required></textarea>' +
      "</div>" +
      '<p class="form-status" id="form-status" role="status" aria-live="polite"></p>' +
      '<button class="contact__submit" type="submit">' +
      "<span>Send Message " +
      ic("send") +
      "</span>" +
      "</button>" +
      '<p class="form-note">Your details are only used to reply to your message. ' +
      (c.privacy ? '<a href="' + esc(c.privacy.url) + '">' + esc(c.privacy.label) + "</a>" : "") +
      "</p>" +
      "</form>" +
      "</div>" +
      "</div>" +
      "</div>";

    setupForm(usesFormSubmit, c);
  }

  function setupForm(usesFormSubmit, contact) {
    var form = document.querySelector(".contact__form");
    var status = document.getElementById("form-status");
    if (!form) return;

    var params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1" && status) {
      status.textContent = "Thanks — your message has been sent. I'll get back to you soon.";
      status.classList.add("is-visible");
    }

    form.addEventListener("submit", function (event) {
      if (usesFormSubmit) {
        if (!form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
          return;
        }
        if (status) {
          status.textContent = "Sending your message…";
          status.classList.add("is-visible");
        }
        return;
      }

      // No form endpoint configured: fall back to a mailto draft.
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var subject = "Portfolio message from " + (data.get("name") || "website visitor");
      var body =
        "Name: " + (data.get("name") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n\n" +
        (data.get("message") || "");

      window.location.href =
        "mailto:" + contact.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- footer ---------- */

  function renderFooter() {
    var root = document.getElementById("site-footer");
    if (!root) return;
    var f = SITE.footer;

    var links = (f.links || [])
      .map(function (l) {
        return '<a href="' + esc(l.href) + '">' + esc(l.label) + "</a>";
      })
      .join("");

    root.innerHTML =
      '<div class="footer__inner">' +
      '<a class="footer__brand" href="#main">' +
      esc(f.brand) +
      "</a>" +
      '<nav class="footer__links" aria-label="Footer">' +
      links +
      "</nav>" +
      '<div class="footer__copyright">' +
      esc(f.copyright) +
      "</div>" +
      "</div>" +
      (f.disclaimer
        ? '<p class="footer__disclaimer">' + esc(f.disclaimer) + "</p>"
        : "");
  }

  /* ---------- reveal on scroll ---------- */

  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    els.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- video modal ---------- */

  function youtubeId(url) {
    if (!url) return "";
    var patterns = [
      /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
      /^([A-Za-z0-9_-]{11})$/
    ];
    for (var i = 0; i < patterns.length; i++) {
      var m = String(url).match(patterns[i]);
      if (m) return m[1];
    }
    return "";
  }

  function setupVideoModal() {
    var modal = document.getElementById("video-modal");
    var frame = document.getElementById("video-frame");
    if (!modal || !frame) return;
    var lastFocused = null;

    function open(url) {
      var id = youtubeId(url);
      if (!id) return;
      lastFocused = document.activeElement;
      frame.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' +
        encodeURIComponent(id) +
        '?autoplay=1&rel=0" title="Video preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      modal.hidden = false;
      document.body.classList.add("modal-open");
      var close = modal.querySelector(".modal__close");
      if (close) close.focus();
    }

    function close() {
      modal.hidden = true;
      frame.innerHTML = "";
      document.body.classList.remove("modal-open");
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    document.querySelectorAll("[data-video]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        open(btn.getAttribute("data-video"));
      });
    });

    modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (!modal.hidden) close();
        var nav = document.getElementById("site-nav");
        if (nav) nav.classList.remove("is-open");
      }
    });
  }

  /* ---------- scroll spy ---------- */

  function setupScrollSpy() {
    var links = document.querySelectorAll(".nav__links a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) map[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && map[entry.target.id]) {
            links.forEach(function (l) {
              l.removeAttribute("aria-current");
            });
            map[entry.target.id].setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(map).forEach(function (id) {
      observer.observe(document.getElementById(id));
    });
  }

  /* ---------- selected work -> project links ---------- */

  function flashProject(el) {
    el.classList.remove("is-flash");
    // Force a reflow so clicking the same chip again restarts the animation.
    void el.offsetWidth;
    el.classList.add("is-flash");
    window.setTimeout(function () {
      el.classList.remove("is-flash");
    }, 1800);
  }

  function setupCreditLinks() {
    var links = document.querySelectorAll("[data-scroll-target]");
    if (!links.length) return;

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("data-scroll-target");
        var target = id ? document.getElementById(id) : null;
        if (!target) return;

        event.preventDefault();
        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", "#" + id);
        }
        flashProject(target);
      });
    });
  }

  /* ---------- boot ---------- */

  renderNav();
  renderHero();
  renderApproach();
  renderProjects();
  renderExperience();
  renderWriting();
  renderContact();
  renderFooter();
  setupVideoModal();
  setupReveal();
  setupScrollSpy();
  setupCreditLinks();
})();
