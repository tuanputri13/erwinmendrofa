"use client";

import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Network,
  Radio,
  Terminal,
  X,
} from "lucide-react";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs font-bold text-cyan-400">
        {number}
      </span>

      <span className="h-px w-8 bg-cyan-500/40" />

      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
        {children}
      </span>
    </div>
  );
}

/*
 * GitHub icon dibuat dengan SVG sendiri.
 *
 * Jangan menggunakan:
 * import { Github } from "lucide-react";
 *
 * karena pada versi lucide-react yang digunakan project ini,
 * export Github tidak tersedia.
 */
function GithubIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .7C5.73.7.7 5.73.7 12c0 4.99 3.24 9.23 7.74 10.72.57.1.78-.25.78-.55v-2.05c-3.15.69-3.81-1.34-3.81-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.44.11-3 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.34-2.65 5.3-5.17 5.58.41.36.77 1.07.77 2.16v3.2c0 .3.21.65.79.54A11.31 11.31 0 0 0 23.3 12C23.3 5.73 18.27.7 12 .7Z" />
    </svg>
  );
}

const skillGroups = [
  {
    icon: Network,
    title: "Network & Infrastructure",
    description:
      "Routing & switching, network troubleshooting, infrastruktur lapangan, serta lingkungan VSAT.",
    items: ["VSAT", "Routing", "Switching", "Troubleshooting"],
  },
  {
    icon: Terminal,
    title: "Software Development",
    description:
      "Pengembangan aplikasi web dan sistem dengan pendekatan yang praktis, terstruktur, dan mudah dikembangkan.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    icon: Cpu,
    title: "Electronics & IoT",
    description:
      "Eksplorasi mikrokontroler, sensor, aktuator, simulasi hardware, dan integrasi sistem.",
    items: ["Arduino", "Microcontroller", "Sensors", "Actuators"],
  },
  {
    icon: GraduationCap,
    title: "Education & Curriculum",
    description:
      "Pendidikan vokasi TKJ, dokumentasi digital, modul pembelajaran, dan pembimbingan proyek siswa.",
    items: ["TKJ", "Learning Module", "Documentation", "Project Mentoring"],
  },
];

const capabilityCards = [
  {
    number: "01",
    title: "Network",
    subtitle: "Connect & Maintain",
    description:
      "Membangun pemahaman dan solusi untuk kebutuhan jaringan, konektivitas, troubleshooting, dan infrastruktur lapangan.",
    icon: Network,
  },
  {
    number: "02",
    title: "Software",
    subtitle: "Build & Automate",
    description:
      "Mengembangkan sistem dan aplikasi yang membantu pekerjaan menjadi lebih terstruktur, terdokumentasi, dan efisien.",
    icon: Terminal,
  },
  {
    number: "03",
    title: "Education",
    subtitle: "Teach & Develop",
    description:
      "Mengubah konsep teknologi menjadi pembelajaran vokasi yang lebih praktis, relevan, dan mudah diterapkan.",
    icon: GraduationCap,
  },
];

const focusAreas = [
  "Network & VSAT",
  "Web & System Development",
  "Electronics & IoT",
  "Vocational Technology Education",
];

const workingProcess = [
  [
    "01",
    "Understand",
    "Memahami kebutuhan, kondisi lapangan, dan masalah yang sebenarnya.",
  ],
  [
    "02",
    "Design",
    "Menentukan pendekatan, arsitektur, tools, dan alur kerja yang sesuai.",
  ],
  [
    "03",
    "Build",
    "Membangun, menguji, dan melakukan troubleshooting secara bertahap.",
  ],
  [
    "04",
    "Document",
    "Menyimpan pengetahuan dan hasil kerja agar dapat dipelajari serta dikembangkan.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-x-hidden bg-[#020617] text-slate-200"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_78%)]" />

        <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-3xl" />

        <div className="absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-3xl" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#020617]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 font-mono text-sm text-cyan-400 transition group-hover:border-cyan-400/60 group-hover:bg-cyan-500/15">
              &gt;_
            </span>

            <div className="hidden sm:block">
              <div className="font-mono text-xs font-bold tracking-[0.18em] text-slate-200">
                ERWIN.MENDROFA
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Technology Portfolio
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {[
              ["#peran", "Peran"],
              ["#keahlian", "Keahlian"],
              ["#proyek", "Cara Kerja"],
              ["#tentang", "Tentang"],
              ["#kontak", "Kontak"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-wider text-slate-500 transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}

            <a
              href="#kontak"
              className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              Hubungi Saya
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 md:hidden"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800/70 bg-[#020617] px-5 py-5 md:hidden">
            <nav className="mx-auto flex max-w-[1600px] flex-col gap-1">
              {[
                ["#home", "Home"],
                ["#peran", "Peran"],
                ["#keahlian", "Keahlian"],
                ["#proyek", "Cara Kerja"],
                ["#tentang", "Tentang"],
                ["#kontak", "Kontak"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 font-mono text-xs uppercase tracking-wider text-slate-400 transition hover:bg-slate-900 hover:text-cyan-400"
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

      <section className="relative flex min-h-[calc(100svh-4rem)] items-center">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12 xl:px-16 xl:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Tech & Field Infrastructure Enthusiast
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-600">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-6xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl xl:text-[6.3rem]">
              Erwin Setiawan{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mendrofa.
              </span>
            </h1>

            <div className="mt-8 max-w-4xl">
              <h2 className="text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
                Network & Infrastructure
                <span className="text-cyan-400"> · </span>
                Software
                <span className="text-cyan-400"> · </span>
                Technology Education
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                Teknisi VSAT & jaringan lapangan, pendidik vokasi TKJ,
                pengembang sistem, serta penggemar eksplorasi elektronika,
                IoT, dan teknologi off-road.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontak"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail className="h-4 w-4" />
                Mari Terhubung

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/tuanputri13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <GithubIcon />
                GitHub
                <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
              </a>
            </div>

            <div className="mt-12 grid max-w-4xl grid-cols-2 border-y border-slate-800/80 sm:grid-cols-4">
              {[
                ["01", "Network"],
                ["02", "Software"],
                ["03", "Education"],
                ["04", "IoT"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-r border-slate-800/80 px-4 py-5 first:pl-0 last:border-r-0"
                >
                  <div className="font-mono text-xs text-cyan-400">
                    {number}
                  </div>

                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}

          <div className="relative flex items-center justify-center lg:min-h-[560px]">
            <div className="relative w-full max-w-[620px]">
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.08]" />

              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.05]" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-[0_0_80px_rgba(6,182,212,0.08)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  </div>

                  <span className="font-mono text-[9px] text-slate-600">
                    erwin@portfolio:~
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
                      <Radio className="h-6 w-6 text-cyan-400" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400">
                        Current Profile
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-white">
                        Technology Professional
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-5 font-mono text-xs">
                    <div>
                      <div className="mb-2 text-slate-600">
                        <span className="text-cyan-400">$</span> whoami
                      </div>

                      <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-slate-300">
                        engineer + educator + developer
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 text-slate-600">
                        <span className="text-cyan-400">$</span> focus --list
                      </div>

                      <div className="space-y-2">
                        {focusAreas.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-md border border-slate-900 bg-slate-900/50 px-3 py-2"
                          >
                            <span className="text-slate-400">{item}</span>

                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 text-slate-600">
                        <span className="text-cyan-400">$</span> status
                      </div>

                      <div className="flex items-center gap-2 text-cyan-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                        Exploring & Building
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-5 rounded-xl border border-slate-700 bg-slate-950/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-auto sm:right-5">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-widest text-slate-600">
                      STATUS
                    </div>

                    <div className="mt-0.5 text-xs font-semibold text-slate-200">
                      Learning · Building · Sharing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#peran"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400 sm:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
            Explore
          </span>

          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* =========================================================
          ROLE / CAPABILITY
      ========================================================= */}

      <section
        id="peran"
        className="border-y border-slate-800/70 bg-slate-950/40"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel number="01">
                Peran & Kapabilitas
              </SectionLabel>

              <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Teknologi yang dipahami dari{" "}
                <span className="text-cyan-400">sisi lapangan.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Saya tertarik pada teknologi bukan hanya sebagai tools,
                tetapi sebagai sesuatu yang harus dapat digunakan untuk
                menyelesaikan masalah nyata.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilityCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.number}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/60"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-cyan-400 transition group-hover:border-cyan-500/30">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-mono text-[10px] text-slate-700">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-cyan-500">
                      {card.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-6 text-slate-500">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section id="keahlian" className="relative">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
          <SectionLabel number="02">Keahlian</SectionLabel>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                A technical stack built around{" "}
                <span className="text-cyan-400">
                  real-world problems.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Area di bawah ini menggambarkan bidang teknologi yang
              menjadi bagian dari eksplorasi dan pekerjaan saya.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {skillGroups.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-slate-700 sm:p-8"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-100">
                        {skill.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                        {skill.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-[10px] text-slate-400 transition group-hover:border-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKING PROCESS
      ========================================================= */}

      <section
        id="proyek"
        className="border-y border-slate-800/70 bg-slate-950/50"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <SectionLabel number="03">
                Cara Saya Bekerja
              </SectionLabel>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Bukan hanya{" "}
                <span className="text-cyan-400">
                  menggunakan teknologi.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                Pendekatan saya berangkat dari kebutuhan atau masalah,
                kemudian memilih teknologi yang masuk akal untuk
                menyelesaikan masalah tersebut.
              </p>
            </div>

            <div className="grid gap-3">
              {workingProcess.map(([number, title, description]) => (
                <div
                  key={number}
                  className="group flex gap-5 rounded-xl border border-slate-800 bg-slate-900/20 p-5 transition hover:border-cyan-500/20 hover:bg-slate-900/40 sm:p-6"
                >
                  <span className="font-mono text-xs text-cyan-500">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-slate-200">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>

                  <ArrowUpRight className="ml-auto hidden h-4 w-4 text-slate-700 transition group-hover:text-cyan-400 sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section id="tentang">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionLabel number="04">Tentang</SectionLabel>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Engineering, education,
                <br />
                <span className="text-cyan-400">
                  and curiosity.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                Saya memiliki ketertarikan pada bagaimana teknologi
                bekerja dari berbagai sisi: mulai dari konektivitas dan
                infrastruktur, perangkat keras dan elektronika, sampai
                software yang digunakan untuk membangun sistem.
              </p>

              <p>
                Di sisi lain, pendidikan vokasi memberi saya perspektif
                berbeda: teknologi bukan hanya perlu dibuat, tetapi juga
                perlu dipahami dan dapat dibagikan kepada orang lain.
              </p>

              <p>
                Karena itu saya menikmati proses{" "}
                <span className="text-slate-200">
                  build, troubleshoot, learn, document, and share
                </span>
                .
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Build",
                  "Learn",
                  "Troubleshoot",
                  "Document",
                  "Share",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="kontak"
        className="border-t border-slate-800/70 bg-slate-950/70"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/60 to-blue-500/[0.05] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionLabel number="05">
                  Let&apos;s Connect
                </SectionLabel>

                <h2 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Punya project, ide, atau masalah teknis yang ingin
                  dibahas?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Saya terbuka untuk diskusi mengenai infrastruktur
                  jaringan, pengembangan sistem, teknologi pendidikan,
                  elektronika, dan kolaborasi teknologi.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Network / VSAT",
                    "Software",
                    "IoT / Electronics",
                    "Technology Education",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 font-mono text-[10px] text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="mailto:erwinsetiawanmendrofa@gmail.com"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  <Mail className="h-4 w-4" />
                  Kirim Email

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://github.com/tuanputri13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-950/60 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-900"
                >
                  <GithubIcon />
                  Lihat GitHub

                  <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <div>
            <div className="font-mono text-xs font-bold tracking-[0.18em] text-slate-300">
              ERWIN.MENDROFA
            </div>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-slate-600">
              Technology · Infrastructure · Education
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tuanputri13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition hover:text-cyan-400"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href="mailto:erwinsetiawanmendrofa@gmail.com"
              className="text-slate-600 transition hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <span className="font-mono text-[9px] text-slate-700">
              © {new Date().getFullYear()} Erwin Setiawan Mendrofa
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}