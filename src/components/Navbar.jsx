import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">EduNusa</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#materi" className="hover:text-slate-900 transition-colors">Materi</a>
          <a href="#topik" className="hover:text-slate-900 transition-colors">Topik</a>
          <a href="#tentang" className="hover:text-slate-900 transition-colors">Tentang</a>
          <a href="#mulai" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">Mulai</a>
        </nav>
      </div>
    </header>
  );
}
