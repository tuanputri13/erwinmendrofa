"use client";

import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cpu,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Network,
  Radio,
  Terminal,
  X,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| DATA
|--------------------------------------------------------------------------
| Untuk sementara gambar menggunakan Unsplash.
| Nanti cukup ganti image dengan foto pekerjaan asli Anda.
|--------------------------------------------------------------------------
*/

const workItems = [
  {
    number: "01",
    category: "NETWORK / VSAT",
    title: "Field Network & VSAT Infrastructure",
    description:
      "Dokumentasi pekerjaan lapangan, instalasi, troubleshooting, konfigurasi jaringan, serta aktivitas yang berkaitan dengan konektivitas dan infrastruktur.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    tags: ["VSAT", "Network", "Infrastructure"],
    status: "FIELD WORK",
  },
  {
    number: "02",
    category: "SOFTWARE DEVELOPMENT",
    title: "Web & System Development",
    description:
      "Pengembangan aplikasi dan sistem untuk membantu pekerjaan menjadi lebih terstruktur, terdokumentasi, dan mudah digunakan.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=85",
    tags: ["Next.js", "React", "TypeScript"],
    status: "DEVELOPMENT",
  },
  {
    number: "03",
    category: "ELECTRONICS / IoT",
    title: "Electronics, Sensors & IoT",
    description:
      "Eksperimen dan implementasi mikrokontroler, sensor, aktuator, simulasi hardware, serta integrasi perangkat dengan sistem.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Arduino", "IoT", "Electronics"],
    status: "EXPERIMENT",
  },
  {
    number: "04",
    category: "TECHNOLOGY EDUCATION",
    title: "Vocational Technology Education",
    description:
      "Dokumentasi kegiatan pembelajaran, praktik TKJ, pembuatan modul, project siswa, dan penerapan teknologi dalam pendidikan vokasi.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85",
    tags: ["TKJ", "Education", "Mentoring"],
    status: "EDUCATION",
  },
];

const skillGroups = [
  {
    icon: Network,
    title: "Network & Infrastructure",
    description:
      "Konektivitas, troubleshooting, routing, switching, infrastructure lapangan, dan lingkungan VSAT.",
    items: ["VSAT", "Routing", "Switching", "Troubleshooting"],
  },
  {
    icon: Terminal,
    title: "Software Development",
    description:
      "Membangun aplikasi web dan sistem dengan pendekatan yang praktis, terstruktur, dan mudah dikembangkan.",
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
    items: ["TKJ", "Learning Module", "Documentation", "Mentoring"],
  },
];

const capabilities = [
  {
    number: "01",
    icon: Network,
    title: "NETWORK",
    subtitle: "Connect & Maintain",
    description:
      "Memahami kebutuhan konektivitas dan membantu menjaga infrastruktur agar tetap berjalan dengan baik.",
  },
  {
    number: "02",
    icon: Terminal,
    title: "SOFTWARE",
    subtitle: "Build & Automate",
    description:
      "Mengubah kebutuhan menjadi aplikasi atau sistem yang dapat digunakan dan dikembangkan.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "EDUCATION",
    subtitle: "Teach & Develop",
    description:
      "Membawa teknologi ke dalam pembelajaran vokasi melalui praktik dan project nyata.",
  },
];

const processItems = [
  {
    number: "01",
    title: "Understand",
    description:
      "Memahami kebutuhan, kondisi lapangan, tujuan, dan masalah yang sebenarnya.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Menentukan pendekatan, perangkat, teknologi, arsitektur, dan alur kerja.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Membangun, memasang, mengonfigurasi, menguji, dan melakukan troubleshooting.",
  },
  {
    number: "04",
    title: "Document",
    description:
      "Mendokumentasikan proses dan hasil agar pekerjaan dapat dipahami serta dikembangkan kembali.",
  },
];

/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
      <span className="text-slate-600">{number}</span>
      <span className="h-px w-8 bg-cyan-500/40" />
      <span>{children}</span>
    </div>
  );
}

function GitHubMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.78.5 12.29c0 5.2 3.44 9.61 8.21 11.17.6.11.82-.27.82-.59v-2.08c-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.27 1.84 1.27 1.07 1.89 2.81 1.34 3.5 1.02.11-.8.42-1.34.76-1.65-2.67-.31-5.47-1.37-5.47-6.09 0-1.35.47-2.45 1.24-3.31-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.26a11.1 11.1 0 0 1 6 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.7.24 2.96.12 3.27.77.86 1.24 1.96 1.24 3.31 0 4.73-2.81 5.77-5.49 6.08.43.38.81 1.14.81 2.3v3.41c0 .33.22.71.83.59 4.77-1.56 8.2-5.97 8.2-11.17C23.5 5.78 18.35.5 12 .5Z" />
    </svg>
  );
}

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-200">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-3xl" />

        <div className="absolute right-[-15%] top-[45%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_82%)]" />
      </div>

      {/* ============================================================
          NAVIGATION
      ============================================================ */}

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#020617]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1700px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 font-mono text-xs text-cyan-400 transition group-hover:border-cyan-400/60">
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
              ["#home", "Home"],
              ["#work", "Work"],
              ["#keahlian", "Keahlian"],
              ["#tentang", "Tentang"],
              ["#kontak", "Kontak"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[10px] uppercase tracking-wider text-slate-500 transition hover:text-cyan-400"
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
            <nav className="mx-auto flex max-w-[1700px] flex-col gap-1">
              {[
                ["#home", "Home"],
                ["#work", "Work"],
                ["#keahlian", "Keahlian"],
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

      {/* ============================================================
          HERO
      ============================================================ */}

      <section
        id="home"
        className="relative flex min-h-[calc(100svh-4rem)] items-center"
      >
        <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-12 xl:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Technology · Infrastructure · Education
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-600">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl xl:text-[6.4rem]">
              Erwin Setiawan{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mendrofa.
              </span>
            </h1>

            <h2 className="mt-8 max-w-4xl text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
              Network & Infrastructure
              <span className="text-cyan-400"> · </span>
              Software
              <span className="text-cyan-400"> · </span>
              Technology Education
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Teknisi VSAT & jaringan lapangan, pendidik vokasi TKJ,
              pengembang sistem, serta penggemar elektronika, IoT, dan
              eksplorasi teknologi.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Lihat Pekerjaan
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <a
                href="https://github.com/tuanputri13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <GitHubMark className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 border-y border-slate-800/80 sm:grid-cols-4">
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

          {/* HERO VISUAL */}

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.08]" />

              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.05]" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/90 shadow-[0_0_100px_rgba(6,182,212,0.08)] backdrop-blur-xl">
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

                <div className="p-6 sm:p-9">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
                      <Radio className="h-6 w-6 text-cyan-400" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400">
                        Professional Profile
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
                        {[
                          "Network & VSAT",
                          "Web & System Development",
                          "Electronics & IoT",
                          "Technology Education",
                        ].map((item) => (
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
                        Building & Documenting
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-5 rounded-xl border border-slate-700 bg-slate-950/95 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-widest text-slate-600">
                      WORK PHILOSOPHY
                    </div>

                    <div className="mt-0.5 text-xs font-semibold text-slate-200">
                      Build · Document · Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#work"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400 sm:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
            Explore Work
          </span>

          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* ============================================================
          WORK / EVIDENCE
      ============================================================ */}

      <section
        id="work"
        className="border-y border-slate-800/70 bg-slate-950/40"
      >
        <div className="mx-auto w-full max-w-[1700px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionLabel number="01">Work & Evidence</SectionLabel>

              <h2 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Jangan hanya percaya pada{" "}
                <span className="text-cyan-400">kata-kata.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Bagian ini adalah tempat untuk menunjukkan pekerjaan nyata:
                dokumentasi lapangan, foto instalasi, screenshot aplikasi,
                diagram, project siswa, eksperimen hardware, maupun hasil
                troubleshooting.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-5">
                <div className="flex gap-3">
                  <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

                  <div>
                    <h3 className="text-sm font-bold text-slate-200">
                      Evidence-first portfolio
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      Foto dan dokumentasi asli nantinya akan membuat
                      portfolio ini jauh lebih meyakinkan daripada sekadar
                      daftar skill.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {workItems.map((work) => (
                <article
                  key={work.number}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 transition duration-500 hover:border-cyan-500/30"
                >
                  <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[260px] overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] tracking-widest text-cyan-300 backdrop-blur-md">
                        {work.status}
                      </div>

                      <span className="absolute bottom-5 left-5 font-mono text-3xl font-bold text-white/80">
                        {work.number}
                      </span>
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400">
                        {work.category}
                      </div>

                      <h3 className="mt-3 text-2xl font-bold text-white">
                        {work.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-500">
                        {work.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-[9px] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-600 transition group-hover:text-cyan-400">
                        Documentation will be added
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CAPABILITIES
      ============================================================ */}

      <section id="peran">
        <div className="mx-auto w-full max-w-[1700px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionLabel number="02">Peran & Kapabilitas</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Teknologi yang dipahami dari{" "}
                <span className="text-cyan-400">sisi lapangan.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Pengalaman teknis tidak berdiri sendiri. Network,
                software, hardware, dan pendidikan saling terhubung dalam
                cara saya memahami teknologi.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/60"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-mono text-[10px] text-slate-700">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-cyan-500">
                      {item.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SKILLS
      ============================================================ */}

      <section
        id="keahlian"
        className="border-y border-slate-800/70 bg-slate-950/50"
      >
        <div className="mx-auto w-full max-w-[1700px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionLabel number="03">Technical Skills</SectionLabel>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-bold text-white sm:text-5xl">
              A technical stack built around{" "}
              <span className="text-cyan-400">real-world problems.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Skill di sini bukan sekadar daftar teknologi, tetapi
              representasi area yang digunakan, dipelajari, dan terus
              dikembangkan.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillGroups.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition hover:border-slate-700 sm:p-8"
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
                            className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 font-mono text-[10px] text-slate-400"
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

      {/* ============================================================
          PROCESS
      ============================================================ */}

      <section id="cara-kerja">
        <div className="mx-auto w-full max-w-[1700px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionLabel number="04">Cara Saya Bekerja</SectionLabel>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                From problem
                <br />
                to <span className="text-cyan-400">solution.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Saya mencoba menyelesaikan masalah secara sistematis:
                memahami kondisi, menentukan pendekatan, membangun solusi,
                kemudian mendokumentasikan hasilnya.
              </p>
            </div>

            <div className="grid gap-3">
              {processItems.map((item) => (
                <div
                  key={item.number}
                  className="group flex gap-5 rounded-xl border border-slate-800 bg-slate-900/20 p-5 transition hover:border-cyan-500/20 hover:bg-slate-900/40 sm:p-6"
                >
                  <span className="font-mono text-xs text-cyan-500">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-slate-200">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight className="ml-auto hidden h-4 w-4 text-slate-700 transition group-hover:text-cyan-400 sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT
      ============================================================ */}

      <section
        id="tentang"
        className="border-t border-slate-800/70 bg-slate-950/40"
      >
        <div className="mx-auto w-full max-w-[1700px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <SectionLabel number="05">Tentang</SectionLabel>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Engineering,
                <br />
                education,
                <br />
                <span className="text-cyan-400">and curiosity.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                Saya memiliki ketertarikan pada bagaimana teknologi bekerja
                dari berbagai sisi: konektivitas dan infrastruktur,
                perangkat keras dan elektronika, sampai software yang
                digunakan untuk membangun sistem.
              </p>

              <p>
                Pendidikan vokasi juga memberikan perspektif bahwa teknologi
                bukan hanya perlu dibuat, tetapi harus dapat dipahami dan
                dibagikan kepada orang lain.
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

      {/* ============================================================
          CONTACT
      ============================================================ */}

      <section id="kontak" className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-[1700px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/60 to-blue-500/[0.05] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionLabel number="06">Let&apos;s Connect</SectionLabel>

                <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Punya project, ide, atau masalah teknis?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Terbuka untuk diskusi mengenai network, infrastructure,
                  software development, electronics, IoT, technology
                  education, dan kolaborasi.
                </p>
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
                  <GitHubMark className="h-4 w-4" />
                  Lihat GitHub
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
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
              <GitHubMark className="h-4 w-4" />
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