"use client";

import React, { useState } from "react";
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
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Github,
  Network,
  Code2,
  CircuitBoard,
  Wifi,
  MapPin,
  Zap,
  Send,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
    title: "VSAT & Network",
    subtitle: "Field Engineer",
    description:
      "Menangani infrastruktur jaringan satelit, instalasi perangkat komunikasi, troubleshooting konektivitas, serta pemeliharaan sistem jaringan di lapangan.",
    tags: ["VSAT", "Routing", "Switching"],
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Pendidik",
    subtitle: "Vokasi TKJ",
    description:
      "Menghubungkan teori Teknik Komputer & Jaringan dengan praktik nyata agar pembelajaran lebih relevan dengan kebutuhan dunia kerja.",
    tags: ["TKJ", "Teaching", "Project"],
  },
  {
    icon: Cpu,
    number: "03",
    title: "System & Electronics",
    subtitle: "Developer",
    description:
      "Membangun aplikasi web, bereksperimen dengan mikrokontroler dan IoT, serta mengeksplorasi teknologi kecerdasan buatan.",
    tags: ["Web", "IoT", "AI"],
  },
];

const skills = [
  {
    icon: Network,
    title: "Network & VSAT",
    description:
      "Pointing VSAT, routing, switching, troubleshooting, dan infrastruktur jaringan lapangan.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Next.js, React, TypeScript, Tailwind CSS, Git, GitHub, dan Linux environment.",
  },
  {
    icon: CircuitBoard,
    title: "Electronics & IoT",
    description:
      "Arduino, mikrokontroler, sensor, aktuator, simulasi hardware, dan eksperimen IoT.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Modul pembelajaran kejuruan, dokumentasi digital, dan pembimbingan proyek siswa.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Linux",
  "Arduino",
  "VSAT",
  "Networking",
  "IoT",
  "AI",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_35%)]" />

        <div className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[-10%] top-[50%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
              <Terminal className="h-4 w-4 text-cyan-400" />
            </div>

            <span className="font-mono text-sm font-bold tracking-wider text-slate-200">
              ERWIN<span className="text-cyan-400">.</span>MENDROFA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              Home
            </a>
            <a
              href="#peran"
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              Peran
            </a>
            <a
              href="#keahlian"
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              Keahlian
            </a>
            <a
              href="#tentang"
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              Tentang
            </a>

            <a
              href="#kontak"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/20"
            >
              Hubungi Saya
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/[0.06] bg-[#020617]/95 px-5 py-5 backdrop-blur-xl md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1">
              {[
                ["Home", "#home"],
                ["Peran", "#peran"],
                ["Keahlian", "#keahlian"],
                ["Tentang", "#tentang"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl items-center px-5 py-20 sm:px-6 lg:py-24"
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Hero Text */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 font-mono text-[11px] text-cyan-300 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              TECH & FIELD INFRASTRUCTURE ENTHUSIAST
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Erwin Setiawan{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mendrofa
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Teknisi <span className="text-slate-200">VSAT & jaringan lapangan</span>,
              pendidik vokasi <span className="text-slate-200">TKJ</span>, pengembang
              sistem, dan penggemar <span className="text-slate-200">elektronika,
              IoT, serta eksplorasi off-road.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontak"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20"
              >
                <Mail className="h-4 w-4" />
                Mari Terhubung
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://github.com/tuanputri13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
              </a>
            </div>

            {/* Mini Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-slate-800/70 py-5">
              <div>
                <p className="text-xl font-bold text-slate-100 sm:text-2xl">
                  03
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                  Fokus Utama
                </p>
              </div>

              <div className="border-l border-slate-800/70 pl-5">
                <p className="text-xl font-bold text-slate-100 sm:text-2xl">
                  12+
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                  Tech & Tools
                </p>
              </div>

              <div className="border-l border-slate-800/70 pl-5">
                <p className="text-xl font-bold text-slate-100 sm:text-2xl">
                  01
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                  Mindset
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-cyan-950/20">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                </div>

                <span className="font-mono text-[10px] text-slate-600">
                  erwin@portfolio:~
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Wifi className="h-7 w-7 text-cyan-400" />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-cyan-400">
                      CURRENT_PROFILE
                    </p>
                    <h2 className="mt-1 font-bold text-slate-100">
                      Multi-Domain Technologist
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="flex gap-3">
                    <span className="text-cyan-500">$</span>
                    <span className="text-slate-400">
                      whoami
                    </span>
                  </div>

                  <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 leading-6 text-slate-400">
                    <span className="text-cyan-400">engineer</span>{" "}
                    +{" "}
                    <span className="text-blue-400">educator</span>{" "}
                    +{" "}
                    <span className="text-indigo-400">developer</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <span className="text-cyan-500">$</span>
                    <span className="text-slate-400">
                      system --status
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
                      <span className="text-slate-500">network</span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        active
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
                      <span className="text-slate-500">development</span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        active
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
                      <span className="text-slate-500">learning</span>
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Zap className="h-3.5 w-3.5" />
                        always_on
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-800 bg-slate-900/95 px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Status
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    Exploring & Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#peran"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400 lg:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
            Explore
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* =========================================================
          ROLE SECTION
      ========================================================= */}
      <section
        id="peran"
        className="relative z-10 border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                01 / What I Do
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                Fokus & Peran Utama
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Menggabungkan pengalaman lapangan, pendidikan vokasi, dan
              pengembangan teknologi dalam satu ekosistem kerja.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/60"
                >
                  <div className="absolute right-5 top-5 font-mono text-xs text-slate-700">
                    {role.number}
                  </div>

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-100">
                    {role.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-cyan-400">
                    {role.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {role.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-[10px] text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/10" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT / STORY
      ========================================================= */}
      <section
        id="tentang"
        className="relative z-10 border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                02 / About
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                Teknologi bukan hanya tentang kode.
              </h2>

              <div className="mt-6 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
              <p>
                Saya tertarik pada bagaimana teknologi dapat bekerja di dunia
                nyata—mulai dari konektivitas jaringan di lapangan, perangkat
                elektronik, hingga aplikasi yang membantu menyelesaikan
                masalah.
              </p>

              <p>
                Di sisi lain, pengalaman di dunia pendidikan membuat saya
                percaya bahwa teknologi akan menjadi lebih bermakna ketika
                pengetahuan tersebut dapat dibagikan dan diterapkan secara
                langsung.
              </p>

              <p className="text-slate-300">
                <span className="text-cyan-400">Build.</span>{" "}
                <span className="text-blue-400">Learn.</span>{" "}
                <span className="text-indigo-400">Share.</span>{" "}
                Tiga hal yang menjadi bagian dari cara saya mengeksplorasi
                teknologi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section
        id="keahlian"
        className="relative z-10 border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              03 / Technical Domain
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Keahlian & Tools
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Beberapa bidang teknologi yang saya gunakan, pelajari, dan
              eksplorasi dalam pekerjaan maupun proyek pribadi.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group flex gap-5 rounded-2xl border border-slate-800 bg-slate-900/20 p-5 transition-all hover:border-cyan-400/20 hover:bg-slate-900/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-200">
                      {skill.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technology Pills */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/20 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Technology Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 font-mono text-xs text-slate-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="kontak"
        className="relative z-10 border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] via-slate-900/60 to-blue-500/[0.05] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <Send className="h-5 w-5" />
              </div>

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                04 / Contact
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight text-slate-100 sm:text-5xl">
                Ada ide, proyek, atau peluang kolaborasi?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Terbuka untuk berdiskusi tentang jaringan satelit, pendidikan
                vokasi, software development, IoT, maupun eksplorasi teknologi
                lainnya.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:erwinmendrofa@domain.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  <Mail className="h-4 w-4" />
                  Kirim Email
                </a>

                <a
                  href="https://github.com/tuanputri13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" />
                  Lihat GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-600">
                <MapPin className="h-3.5 w-3.5" />
                <span>Technology • Education • Field Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="relative z-10 border-t border-slate-900 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-mono text-xs text-slate-500">
              ERWIN<span className="text-cyan-400">.</span>MENDROFA
            </p>

            <p className="mt-1 text-[11px] text-slate-700">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-slate-600 transition hover:text-cyan-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="mx-auto mt-7 max-w-6xl text-center font-mono text-[10px] text-slate-700">
          © {new Date().getFullYear()} Erwin Setiawan Mendrofa. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}