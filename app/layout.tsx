import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erwin Setiawan Mendrofa | Portofolio",
  description: "Teknisi VSAT, Jaringan, dan Pendidik Vokasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}