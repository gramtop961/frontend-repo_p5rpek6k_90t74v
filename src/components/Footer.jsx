export default function Footer() {
  return (
    <footer id="tentang" className="mt-16 border-t border-slate-200/70 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">EduNusa</p>
            <p className="mt-2 text-sm text-slate-600">
              Platform belajar untuk semua. Materi ringkas, latihan terarah, progres nyata.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Navigasi</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#materi">Materi</a></li>
              <li><a className="hover:text-slate-900" href="#topik">Topik</a></li>
              <li><a className="hover:text-slate-900" href="#mulai">Mulai</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Dukungan</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><span className="select-none">FAQ</span></li>
              <li><span className="select-none">Kebijakan Privasi</span></li>
              <li><span className="select-none">Syarat Layanan</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} EduNusa. All rights reserved.</p>
          <p>Dibangun dengan cinta untuk pendidikan Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
