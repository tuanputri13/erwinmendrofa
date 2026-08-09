export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Erwin Setiawan Mendrofa</h1>
        <p className="text-slate-400">
          Teknisi VSAT & Jaringan Lapangan | Pendidik Vokasi
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:emailanda@domain.com"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg"
          >
            Kirim Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Erwin Setiawan Mendrofa. All rights reserved.</p>
      </footer>
    </main>
  );
}