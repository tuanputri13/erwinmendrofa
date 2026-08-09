import React from "react";
import {
  Radio,
  GraduationCap,
  Cpu,
  Mail,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const roles = [
  {
    icon: Radio,
    number: "01",
    title: "VSAT & Network Field Engineer",
    description:
      "Penanganan teknis infrastruktur jaringan satelit, instalasi perangkat komunikasi, troubleshooting konektivitas lapangan, dan pemeliharaan sistem jaringan.",
    tags: ["VSAT", "Networking", "Field Support"],
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Pendidik Vokasi TKJ",
    description:
      "Mendidik siswa di bidang Teknik Komputer & Jaringan dengan pendekatan praktik, dokumentasi, project-based learning, dan kebutuhan dunia kerja.",
    tags: ["TKJ", "Teaching", "Curriculum"],
  },
  {
    icon: Cpu,
    number: "03",
    title: "System & Electronics Developer",
    description:
      "Membangun aplikasi web, mengeksplorasi mikrokontroler, IoT, otomasi, simulasi hardware, serta teknologi kecerdasan buatan.",
    tags: ["Web", "IoT", "Electronics"],
  },
];

const skills = [
  {
    icon: Radio,
    title: "Komunikasi Satelit & Jaringan",
    description:
      "Pointing VSAT, routing & switching, network troubleshooting, instalasi dan infrastruktur lapangan.",
    stack: "NETWORK / VSAT",
  },
  {
    icon: Terminal,
    title: "Pengembangan Software",
    description:
      "Next.js, React, TypeScript, Tailwind CSS, Git, GitHub, Linux environment dan pengembangan sistem.",
    stack: "SOFTWARE / WEB",
  },
  {
    icon: Layers,
    title: "Elektronika & IoT",
    description:
      "Arduino, mikrokontroler, sensor, aktuator, simulasi hardware dan integrasi perangkat.",
    stack: "HARDWARE / IOT",
  },
  {
    icon: Sparkles,
    title: "Pendidikan & Kurikulum",
    description:
      "Modul pembelajaran kejuruan, dokumentasi digital, pembimbingan proyek dan eksplorasi teknologi.",
    stack: "EDUCATION",
  },
];

const stats = [
  {
    value: "03",
    label: "Fokus Utama",
  },
  {
    value: "12+",
    label: "Tech & Tools",
  },
  {
    value: "01",
    label: "Mindset",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(37,99,235,0.08),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(14,116,144,0.06),transparent_35%)]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute left-[5%] top-[18%] h-80 w-80 rounded-full bg-cyan-500/[0.045] blur-[130px]" />
        <div className="absolute right-[4%] top-[42%] h-96 w-96 rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-10 2xl:px-14">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Kembali ke beranda"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs text-cyan-300 transition group-hover:border-cyan-400/60 group-hover:bg-cyan-400/15">
              &gt;_
            </span>

            <span className="font-mono text-xs font-bold tracking-[0.16em] text-slate-200 sm:text-sm">
              ERWIN<span className="text-cyan-400">.</span>MENDROFA
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="font-mono text-xs text-slate-400 transition hover:text-cyan-400"
            >
              Home
            </a>
            <a
              href="#peran"
              className="font-mono text-xs text-slate-400 transition hover:text-cyan-400"
            >
              Peran
            </a>
            <a
              href="#keahlian"
              className="font-mono text-xs text-slate-400 transition hover:text-cyan-400"
            >
              Keahlian
            </a>
            <a
              href="#tentang"
              className="font-mono text-xs text-slate-400 transition hover:text-cyan-400"
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 font-mono text-xs text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Hubungi Saya
            </a>
          </nav>

          <a
            href="#kontak"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 font-mono text-[10px] text-cyan-300 md:hidden"
          >
            CONTACT
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section id="home" className="relative">
        <div className="mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-[1800px] items-center px-5 py-14 sm:px-8 md:py-20 lg:px-10 xl:py-24 2xl:px-14">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20 2xl:gap-28">
            {/* HERO COPY */}

            <div className="relative">
              <div className="absolute -left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 xl:block" />

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300 sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Tech & Field Infrastructure Enthusiast
              </div>

              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-600 sm:text-xs">
                HELLO, I&apos;M
              </div>

              <h1 className="max-w-5xl text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.92] tracking-[-0.055em] text-slate-50">
                Erwin Setiawan{" "}
                <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Mendrofa
                </span>
              </h1>

              <div className="mt-8 max-w-3xl">
                <p className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl">
                  Teknisi VSAT & jaringan lapangan, pendidik vokasi TKJ,
                  pengembang sistem, dan penggemar eksplorasi elektronik,
                  IoT, serta teknologi off-road.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#kontak"
                  className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.16)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  <Mail className="h-4 w-4" />
                  Mari Terhubung
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/tuanputri13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                </a>
              </div>

              {/* STATS */}

              <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-slate-800/80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-slate-800/80 py-5 first:pl-0 last:border-r-0 sm:px-6"
                  >
                    <div className="font-mono text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600 sm:text-[10px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SYSTEM PANEL */}

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -inset-10 rounded-full bg-cyan-500/[0.035] blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-[#050b18]/90 shadow-2xl shadow-black/40">
                {/* TERMINAL BAR */}

                <div className="flex h-11 items-center justify-between border-b border-slate-800/80 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                  </div>

                  <div className="font-mono text-[9px] tracking-wider text-slate-600">
                    erwin@portfolio:~
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  {/* PROFILE HEADER */}

                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                        <Radio className="h-6 w-6 text-cyan-400" />
                      </div>

                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-wider text-cyan-400">
                          Current Profile
                        </div>
                        <div className="mt-1 text-sm font-bold text-slate-100">
                          Multi-Domain Technologist
                        </div>
                      </div>
                    </div>

                    <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 font-mono text-[8px] text-emerald-400 sm:block">
                      ONLINE
                    </div>
                  </div>

                  {/* TERMINAL CONTENT */}

                  <div className="mt-7 space-y-5 font-mono">
                    <div>
                      <div className="mb-2 text-[10px] text-slate-600">
                        <span className="text-cyan-500">&gt;</span> whoami
                      </div>

                      <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
                        engineer + educator + developer
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 text-[10px] text-slate-600">
                        <span className="text-cyan-500">$</span> system --status
                      </div>

                      <div className="space-y-2">
                        {[
                          ["network", "active"],
                          ["development", "active"],
                          ["learning", "always_on"],
                        ].map(([name, status]) => (
                          <div
                            key={name}
                            className="flex items-center justify-between rounded-md border border-slate-900 bg-slate-950/60 px-3 py-2 text-[9px]"
                          >
                            <span className="text-slate-600">{name}</span>
                            <span className="flex items-center gap-2 text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 text-[10px] text-slate-600">
                        <span className="text-cyan-500">$</span> current_focus
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {["Network", "IoT", "Software", "Education"].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-md border border-cyan-400/15 bg-cyan-400/[0.04] px-2.5 py-1.5 text-[9px] text-cyan-300"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* STATUS BADGE */}

                <div className="absolute -bottom-1 left-4 rounded-lg border border-slate-700 bg-[#07101f] px-4 py-2 shadow-xl sm:left-auto sm:right-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="font-mono text-[9px] text-slate-400">
                      STATUS
                    </span>
                  </div>
                  <div className="mt-0.5 text-[10px] font-semibold text-slate-200">
                    Exploring & Building
                  </div>
                </div>
              </div>

              {/* DECORATIVE LABELS */}

              <div className="pointer-events-none absolute -right-5 top-10 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-slate-700 xl:block [writing-mode:vertical-rl]">
                NETWORK / SOFTWARE / EDUCATION
              </div>

              <div className="pointer-events-none absolute -left-12 bottom-10 hidden font-mono text-[9px] tracking-[0.25em] text-slate-700 xl:block [writing-mode:vertical-rl]">
                BUILD • LEARN • SHARE
              </div>
            </div>
          </div>
        </div>

        {/* HERO BOTTOM MARKER */}

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-700">
            Explore
          </span>
          <span className="text-slate-600">↓</span>
        </div>
      </section>

      {/* =========================================================
          ROLES
      ========================================================== */}

      <section
        id="peran"
        className="border-t border-slate-800/70 bg-slate-950/40"
      >
        <div className="mx-auto w-full max-w-[1800px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 2xl:px-14">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
                01 / Peran
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
                Fokus & Peran Utama
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500 lg:text-right">
              Tiga area utama yang membentuk cara saya bekerja, belajar,
              membangun sistem, dan menyelesaikan masalah teknis.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#050b18]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#07101f]"
                >
                  <div className="absolute right-5 top-4 font-mono text-5xl font-bold text-slate-900 transition group-hover:text-cyan-400/[0.06]">
                    {role.number}
                  </div>

                  <div className="relative">
                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="max-w-sm text-xl font-bold text-slate-100">
                      {role.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {role.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-800 bg-slate-950/70 px-2.5 py-1 font-mono text-[9px] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================== */}

      <section id="keahlian" className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-[1800px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 2xl:px-14">
          <div className="grid gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:gap-20">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
                02 / Keahlian
              </div>

              <h2 className="max-w-xl text-3xl font-black tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
                Domain Teknis & Alat Kerja
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
                Kombinasi antara infrastruktur lapangan, software, elektronika,
                dan pendidikan membuat pendekatan saya bersifat lintas-domain.
              </p>

              <div className="mt-8 hidden border-l border-cyan-400/20 pl-5 font-mono text-[10px] leading-6 text-slate-600 xl:block">
                <div className="text-cyan-500">SYSTEM APPROACH</div>
                <div>OBSERVE → ANALYZE → BUILD → TEST → IMPROVE</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article
                    key={skill.title}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/20 p-6 transition hover:border-cyan-400/25 hover:bg-slate-900/40"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/[0.06] text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-mono text-[8px] tracking-[0.2em] text-slate-700 transition group-hover:text-cyan-500/50">
                        {skill.stack}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-200">
                      {skill.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {skill.description}
                    </p>

                    <div className="mt-6 h-px w-full bg-slate-800">
                      <div className="h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-1/3" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT / PHILOSOPHY
      ========================================================== */}

      <section
        id="tentang"
        className="border-y border-slate-800/70 bg-[#030914]"
      >
        <div className="mx-auto grid w-full max-w-[1800px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-28 2xl:px-14">
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
              03 / Tentang
            </div>

            <h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Teknologi bukan sekadar alat.
              <span className="text-cyan-400"> Ia adalah cara berpikir.</span>
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-7 text-slate-500 lg:pt-8">
            <p>
              Saya menikmati pekerjaan yang berada di antara dunia lapangan
              dan dunia digital. Mulai dari memastikan konektivitas bekerja,
              membangun sistem, menguji perangkat, sampai menerjemahkan
              teknologi menjadi sesuatu yang dapat dipelajari orang lain.
            </p>

            <p>
              Karena itu, saya tidak melihat network, software, electronics,
              dan education sebagai bidang yang berdiri sendiri. Semuanya
              saling terhubung melalui satu proses: memahami masalah,
              membangun solusi, menguji, lalu terus memperbaikinya.
            </p>

            <div className="grid gap-3 pt-3 sm:grid-cols-3">
              {["FIELD", "SYSTEM", "LEARNING"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-4 font-mono text-[10px] tracking-[0.18em] text-slate-500"
                >
                  <CheckCircle2 className="mb-2 h-4 w-4 text-cyan-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}

      <section id="kontak">
        <div className="mx-auto w-full max-w-[1800px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32 2xl:px-14">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] via-slate-900/70 to-blue-500/[0.05] p-7 sm:p-10 lg:p-14 xl:p-20">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                  04 / Contact
                </div>

                <h2 className="max-w-4xl text-4xl font-black tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                  Mari membangun sesuatu yang{" "}
                  <span className="text-cyan-400">berguna.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Terbuka untuk diskusi seputar infrastruktur jaringan satelit,
                  proyek edukasi vokasi, pengembangan perangkat lunak,
                  elektronika, maupun kolaborasi teknologi.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="mailto:erwinmendrofa@domain.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  <Mail className="h-4 w-4" />
                  Kirim Email
                </a>

                <a
                  href="https://github.com/tuanputri13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 2xl:px-14">
          <div className="font-mono text-[10px] tracking-[0.15em] text-slate-600">
            © {new Date().getFullYear()} ERWIN SETIAWAN MENDROFA
          </div>

          <div className="font-mono text-[10px] tracking-[0.12em] text-slate-700">
            NEXT.JS / TAILWIND CSS / BUILT WITH CURIOSITY
          </div>
        </div>
      </footer>
    </main>
  );
}