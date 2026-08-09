import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Languages,
  ArrowUpRight,
} from "lucide-react";
import portrait from "@/assets/lindah-portrait.jpg.asset.json";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lindah S. Siyendi — Psychology Graduate & Youth Leader" },
      {
        name: "description",
        content:
          "Portfolio of Lindah S. Siyendi, Advanced Diploma in Psychology graduate in Windhoek, Namibia — youth development, mentoring and community programs.",
      },
      { property: "og:title", content: "Lindah S. Siyendi — Psychology Portfolio" },
      {
        property: "og:description",
        content:
          "Psychology graduate specialising in youth development, mentoring and community program coordination in Namibia.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  "Communication & Interpersonal Skills",
  "Leadership & Team Management",
  "Youth Development & Mentoring",
  "Counseling & Support Skills",
  "Program Planning & Coordination",
  "Research & Data Collection",
  "Report Writing & Documentation",
  "Computer Literacy (MS Office Suite)",
  "Problem-Solving & Critical Thinking",
  "Time Management & Organisation",
];

const experience = [
  {
    role: "Youth Leader",
    org: "Namibia South Conference, Windhoek",
    period: "2023 — 2025",
    points: [
      "Supported youth development through teaching, mentoring and leadership activities.",
      "Assisted in organising church events, camps and educational programs.",
      "Encouraged active participation and engagement among young members.",
      "Collaborated with church leaders and parents to create a supportive environment for youth growth.",
    ],
  },
  {
    role: "Adventurer Director",
    org: "Namibia South Conference, Windhoek",
    period: "2017 — 2025",
    points: [
      "Guided and mentored young church members, supporting personal and spiritual development.",
      "Planned and coordinated educational programs, camps and youth activities.",
      "Facilitated Sabbath School classes and Vacation Bible School programs.",
      "Worked closely with parents and leadership to ensure holistic care for children.",
      "Promoted positive values, teamwork, leadership and community participation.",
    ],
  },
];

const education = [
  {
    title: "Advanced Diploma in Psychology",
    place: "Triumphant College, Namibia",
    year: "2025",
  },
  {
    title: "Namibia Senior Secondary Certificate (NSSCO)",
    place: "Highline Secondary School",
    year: "2012",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ambient aurora */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="animate-aurora absolute -left-40 top-[-10rem] h-[42rem] w-[42rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          className="animate-float-slow absolute -right-32 top-[45%] h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>

      <Navbar />

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-36 md:grid-cols-2 md:pt-44"
        >
          <Reveal>
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-lavender">
              <Sparkles size={13} /> Windhoek, Namibia
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Lindah S. <span className="text-gradient">Siyendi</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Advanced Diploma in Psychology graduate — passionate about youth development,
              mentoring and building people-centered communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#experience"
                className="glass-panel inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105"
              >
                View experience
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="animate-float-slow absolute inset-6 rounded-full opacity-40 blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="portrait-mask relative">
                <img
                  src={portrait.url}
                  alt="Lindah S. Siyendi in graduation regalia"
                  className="w-full select-none object-cover contrast-110 saturate-[0.25]"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-45 mix-blend-color"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 45%, oklch(0.13 0.018 300) 100%)",
                  }}
                />
              </div>
            </div>
          </Reveal>

        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Personal <span className="text-gradient">Profile</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Passionate and dedicated Advanced Diploma in Psychology graduate with strong
              leadership, communication and interpersonal skills. Experienced in youth development,
              mentoring, program coordination and community engagement through church leadership
              roles. Eager to apply psychological knowledge and people-centered skills in
              entry-level opportunities within psychology, research, counseling support,
              administration or community development.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "8+", v: "Years mentoring youth" },
                { k: "2025", v: "Psychology graduate" },
                { k: "3", v: "Languages spoken" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="glass-panel rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <p className="text-gradient font-display text-3xl font-extrabold">{s.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="flex items-center gap-3 text-3xl font-bold sm:text-4xl">
              <Briefcase className="text-lavender" size={28} /> Working{" "}
              <span className="text-gradient">Experience</span>
            </h2>
          </Reveal>
          <div className="relative mt-12 space-y-8 border-l border-border pl-8">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 120}>
                <div className="glass-panel relative rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:glow-ring">
                  <span
                    className="absolute -left-[2.6rem] top-9 h-3 w-3 rounded-full"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold">{e.role}</h3>
                    <span className="text-sm text-lavender">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Core <span className="text-gradient">Skills</span>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <Reveal key={s} delay={i * 50}>
                <span className="glass-panel inline-block rounded-full px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-1 hover:text-lavender">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="glass-panel mt-10 flex items-center gap-4 rounded-2xl p-6">
              <Languages className="text-lavender" size={22} />
              <p className="text-sm text-muted-foreground">
                Fluent in <span className="text-foreground">English</span>,{" "}
                <span className="text-foreground">Afrikaans</span> and{" "}
                <span className="text-foreground">Silozi</span>.
              </p>
            </div>
          </Reveal>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="flex items-center gap-3 text-3xl font-bold sm:text-4xl">
              <GraduationCap className="text-lavender" size={30} />{" "}
              <span className="text-gradient">Education</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <div className="glass-panel h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:glow-ring">
                  <span className="text-sm text-lavender">{e.year}</span>
                  <h3 className="mt-2 text-lg font-bold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <div className="glass-panel glow-ring rounded-[2rem] p-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Let&apos;s <span className="text-gradient">work together</span>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                Open to opportunities in psychology, research, counseling support, administration
                and community development.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Mail,
                    label: "lindahmulisa@gmail.com",
                    href: "mailto:lindahmulisa@gmail.com",
                  },
                  { icon: Phone, label: "085 706 4129", href: "tel:+264857064129" },
                  { icon: MapPin, label: "Wanaheda, Windhoek", href: undefined },
                ].map(({ icon: Icon, label, href }) => {
                  const inner = (
                    <>
                      <Icon className="mx-auto text-lavender" size={20} />
                      <p className="mt-3 break-words text-sm text-muted-foreground">{label}</p>
                    </>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="glass-panel rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className="glass-panel rounded-2xl p-6">
                      {inner}
                    </div>
                  );
                })}
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                References available on request
              </p>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lindah S. Siyendi
        </footer>
      </main>
    </div>
  );
}
