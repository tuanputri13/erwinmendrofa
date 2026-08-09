import React from 'react';
import { 
  Radio, 
  GraduationCap, 
  Cpu, 
  Mail, 
  ExternalLink, 
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';

// SVG Ikon GitHub Kustom (Solusi aman dari error lucide-react)
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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Accent Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-wider text-cyan-400 font-mono text-sm sm:text-base">
            ERWIN.MENDROFA
          </span>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#peran" className="hover:text-cyan-400 transition-colors">Peran</a>
            <a href="#keahlian" className="hover:text-cyan-400 transition-colors">Keahlian</a>
            <a href="#kontak" className="hover:text-cyan-400 transition-colors">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tech & Field Infrastructure Enthusiast</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-tight">
          Erwin Setiawan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mendrofa</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Teknisi VSAT & Jaringan Lapangan, Pendidik Vokasi TKJ, Pengembang Sistem, serta Penggemar Eksplorasi Off-road.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a 
            href="#kontak"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Mail className="w-4 h-4" />
            Hubungi Saya
          </a>
          <a 
            href="https://github.com/tuanputri13" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Profile
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </section>

      {/* Peran Utama Section */}
      <section id="peran" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <h2 className="text-2xl font-bold mb-8 text-center sm:text-left text-slate-200">
          Fokus & Peran Utama
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">VSAT & Network Field Engineer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Penanganan teknis infrastruktur jaringan satelit (VSAT), instalasi perangkat komunikasi, troubleshooting konektivitas lapangan, dan pemeliharaan sistem jaringan.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Pendidik Vokasi (TKJ)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mendidik siswa Sekolah Menengah Kejuruan di bidang Teknik Komputer & Jaringan, menjembatani teori akademis dengan praktik dunia kerja riil.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">System & Electronics Developer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pengembangan aplikasi web modern, pemrogram mikrokontroler (Arduino/IoT), serta eksplorasi teknologi kecerdasan buatan (AI).
            </p>
          </div>
        </div>
      </section>

      {/* Keahlian & Tools */}
      <section id="keahlian" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <h2 className="text-2xl font-bold mb-8 text-center sm:text-left text-slate-200">
          Domain Teknis & Alat Kerja
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/20 flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-200">Komunikasi Satelit & Jaringan</h4>
              <p className="text-xs text-slate-400 mt-1">Pointing VSAT, Routing & Switching, Network Troubleshooting, Infrastruktur Lapangan.</p>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/20 flex items-start gap-4">
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-200">Pengembangan Software</h4>
              <p className="text-xs text-slate-400 mt-1">Next.js, React, TypeScript, Tailwind CSS, Git & GitHub, Linux Environment.</p>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/20 flex items-start gap-4">
            <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-200">Elektronika & IoT</h4>
              <p className="text-xs text-slate-400 mt-1">Pemrograman Mikrokontroler (Arduino), Simulasi Hardware, Sensor & Aktuator.</p>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/20 flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-200">Pendidikan & Kurikulum</h4>
              <p className="text-xs text-slate-400 mt-1">Modul Pembelajaran Kejuruan, Dokumentasi Digital, Pembimbingan Proyek Siswa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/60 text-center">
        <div className="p-8 sm:p-12 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 relative overflow-hidden">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Mari Terhubung</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base mb-8">
            Terbuka untuk diskusi seputar infrastruktur jaringan satelit, proyek edukasi vokasi, maupun kolaborasi pengembangan perangkat lunak.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:erwinmendrofa@domain.com"
              className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Kirim Email
            </a>
            <a 
              href="https://github.com/tuanputri13"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 text-center text-slate-500 text-xs font-mono">
        <p>&copy; {new Date().getFullYear()} Erwin Setiawan Mendrofa. Built with Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}