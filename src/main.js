import "./styles.css";

const skills = [
  { name: "HTML", level: 88, detail: "Semantic structure, accessible sections, clean document flow." },
  { name: "CSS", level: 82, detail: "Responsive layouts, motion, glass surfaces, component polish." },
  { name: "JavaScript", level: 74, detail: "Interactive UI, DOM state, filters, small app behavior." },
  { name: "Web Basics", level: 78, detail: "Git, Vite, deployment flow, browser debugging foundations." },
];

const projects = [
  {
    title: "Campus Event Hub",
    type: "frontend",
    stack: "HTML · CSS · JS",
    summary: "A responsive event board concept for students to scan talks, clubs, and deadline reminders.",
  },
  {
    title: "Study Orbit",
    type: "interactive",
    stack: "Vanilla JS · Local State",
    summary: "A playful timer dashboard that turns study sessions into glowing orbital checkpoints.",
  },
  {
    title: "Portfolio System",
    type: "frontend",
    stack: "Vite · GitHub Pages",
    summary: "This site: a fast, animated personal identity layer with reusable sections and deploy automation.",
  },
];

const timeline = [
  ["2024", "Started the CS journey at National Tsing Hua University."],
  ["2025", "Built fundamentals in programming, web layout, and collaborative Git workflow."],
  ["Now", "Exploring frontend craft, interactive interfaces, and practical software projects."],
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="background-grid" aria-hidden="true"></div>
  <header class="topbar" data-nav>
    <a class="brand" href="#home" aria-label="Will Cheng home">
      <span class="brand-mark">W</span>
      <span>Will Cheng</span>
    </a>
    <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <span></span>
      <span></span>
    </button>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero section" id="home" aria-labelledby="hero-title">
      <div class="hero-copy reveal">
        <p class="hero-line">NTHU Computer Science · Sophomore</p>
        <h1 id="hero-title">Will Cheng</h1>
        <p class="hero-text">
          I am a CS sophomore at National Tsing Hua University, building web experiences from clear HTML foundations into sharper, more interactive interfaces.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#projects">View Projects</a>
          <a class="button secondary" href="#contact">Contact Me</a>
        </div>
      </div>

      <div class="orbit-stage reveal" data-tilt aria-label="Interactive developer orbit visual">
        <div class="orbital-card">
          <div class="code-window">
            <div class="window-dots" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <pre><code>const will = {
  school: "NTHU CS",
  year: "Sophomore",
  focus: "Web Dev",
  mode: "learning++"
};</code></pre>
          </div>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <button class="node node-html" type="button" data-node="Semantic HTML">HTML</button>
          <button class="node node-css" type="button" data-node="Responsive CSS">CSS</button>
          <button class="node node-js" type="button" data-node="Interactive JS">JS</button>
          <div class="node-readout" data-node-readout>Hover a node</div>
        </div>
      </div>
    </section>

    <section class="section about-band" id="about" aria-labelledby="about-title">
      <div class="section-heading reveal">
        <p class="section-index">01</p>
        <h2 id="about-title">About</h2>
        <p>I like turning small ideas into clean interfaces: readable first, then a little electric.</p>
      </div>
      <div class="timeline reveal">
        ${timeline
          .map(
            ([year, text]) => `
              <article class="timeline-item">
                <span>${year}</span>
                <p>${text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="section skills-band" id="skills" aria-labelledby="skills-title">
      <div class="section-heading reveal">
        <p class="section-index">02</p>
        <h2 id="skills-title">Skills</h2>
        <p>Foundations I am actively sharpening through classwork and personal projects.</p>
      </div>
      <div class="terminal reveal" data-terminal>
        <div class="terminal-top">
          <span>will@portfolio</span>
          <div class="window-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        </div>
        <div class="skill-grid">
          ${skills
            .map(
              (skill, index) => `
                <button class="skill-card ${index === 0 ? "is-active" : ""}" type="button" data-skill="${skill.name}">
                  <span class="skill-name">${skill.name}</span>
                  <span class="skill-meter" style="--level: ${skill.level}%"><i></i></span>
                  <span class="skill-level">${skill.level}%</span>
                </button>
              `,
            )
            .join("")}
        </div>
        <p class="terminal-output" data-skill-output>${skills[0].detail}</p>
      </div>
    </section>

    <section class="section projects-band" id="projects" aria-labelledby="projects-title">
      <div class="section-heading reveal">
        <p class="section-index">03</p>
        <h2 id="projects-title">Projects</h2>
        <p>Small but practical builds that show interface thinking and implementation habits.</p>
      </div>
      <div class="project-controls reveal" aria-label="Project filters">
        <button class="filter is-active" type="button" data-filter="all">All</button>
        <button class="filter" type="button" data-filter="frontend">Frontend</button>
        <button class="filter" type="button" data-filter="interactive">Interactive</button>
      </div>
      <div class="project-grid reveal" data-project-grid>
        ${projects
          .map(
            (project) => `
              <article class="project-card" data-type="${project.type}">
                <div class="project-glow" aria-hidden="true"></div>
                <span class="project-type">${project.stack}</span>
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="section contact-band" id="contact" aria-labelledby="contact-title">
      <div class="section-heading reveal">
        <p class="section-index">04</p>
        <h2 id="contact-title">Contact</h2>
        <p>Open to learning, collaboration, and project ideas with people who enjoy building things.</p>
      </div>
      <div class="contact-panel reveal">
        <div>
          <h3>Let's build the next version.</h3>
          <p>Send a quick note, or find me through GitHub. This form gives an instant local response for now.</p>
          <a class="text-link" href="https://github.com/weifish0" target="_blank" rel="noreferrer">github.com/weifish0</a>
        </div>
        <form class="contact-form" data-contact-form>
          <label>
            Name
            <input name="name" type="text" autocomplete="name" placeholder="Your name" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Tell me what you are building" required></textarea>
          </label>
          <button class="button primary" type="submit">Send Signal</button>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>

  <button class="scroll-top" type="button" data-scroll-top aria-label="Scroll to top">↑</button>
`;

const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const scrollTop = document.querySelector("[data-scroll-top]");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".node").forEach((node) => {
  node.addEventListener("mouseenter", () => {
    document.querySelector("[data-node-readout]").textContent = node.dataset.node;
  });
  node.addEventListener("focus", () => {
    document.querySelector("[data-node-readout]").textContent = node.dataset.node;
  });
});

document.querySelector("[data-terminal]").addEventListener("click", (event) => {
  const card = event.target.closest(".skill-card");
  if (!card) return;

  document.querySelectorAll(".skill-card").forEach((item) => item.classList.remove("is-active"));
  card.classList.add("is-active");

  const selected = skills.find((skill) => skill.name === card.dataset.skill);
  document.querySelector("[data-skill-output]").textContent = selected.detail;
});

document.querySelector(".project-controls").addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (!filter) return;

  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
  filter.classList.add("is-active");

  document.querySelectorAll(".project-card").forEach((card) => {
    const shouldShow = filter.dataset.filter === "all" || card.dataset.type === filter.dataset.filter;
    card.toggleAttribute("hidden", !shouldShow);
  });
});

document.querySelector("[data-contact-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name").toString().trim() || "friend";
  document.querySelector("[data-form-status]").textContent = `Signal received, ${name}. I will wire this to a real inbox next.`;
  event.currentTarget.reset();
});

document.querySelector("[data-tilt]").addEventListener("pointermove", (event) => {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--tilt-x", `${y * -8}deg`);
  event.currentTarget.style.setProperty("--tilt-y", `${x * 10}deg`);
});

document.querySelector("[data-tilt]").addEventListener("pointerleave", (event) => {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
});

scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("scroll", () => {
  const showControls = window.scrollY > 120;
  nav.classList.toggle("is-scrolled", showControls);
  scrollTop.classList.toggle("is-visible", window.scrollY > 520);
});
