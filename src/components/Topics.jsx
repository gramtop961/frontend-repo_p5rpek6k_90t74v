import { Atom, Globe, Code, Calculator, Palette, BookOpen } from "lucide-react";

const topics = [
  {
    title: "Sains",
    desc: "Fisika, Kimia, Biologi untuk membangun dasar pengetahuan ilmiah.",
    Icon: Atom,
    color: "from-indigo-500/10 to-indigo-500/5 text-indigo-700 border-indigo-200",
  },
  {
    title: "Matematika",
    desc: "Aljabar, geometri, dan statistika dengan contoh yang mudah dipahami.",
    Icon: Calculator,
    color: "from-emerald-500/10 to-emerald-500/5 text-emerald-700 border-emerald-200",
  },
  {
    title: "Pemrograman",
    desc: "Belajar logika dan bahasa pemrograman modern dari dasar.",
    Icon: Code,
    color: "from-purple-500/10 to-purple-500/5 text-purple-700 border-purple-200",
  },
  {
    title: "Bahasa",
    desc: "Tingkatkan kemampuan literasi dan komunikasi.",
    Icon: BookOpen,
    color: "from-rose-500/10 to-rose-500/5 text-rose-700 border-rose-200",
  },
  {
    title: "Sosial & Global",
    desc: "Geografi, sejarah, dan isu global untuk memahami dunia.",
    Icon: Globe,
    color: "from-amber-500/10 to-amber-500/5 text-amber-700 border-amber-200",
  },
  {
    title: "Seni & Desain",
    desc: "Ekspresikan kreativitas melalui seni rupa dan desain.",
    Icon: Palette,
    color: "from-pink-500/10 to-pink-500/5 text-pink-700 border-pink-200",
  },
];

function TopicCard({ title, desc, Icon, color }) {
  return (
    <div className={`group rounded-2xl border bg-gradient-to-br ${color} p-6 transition-shadow hover:shadow-md`}> 
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 backdrop-blur border border-white/60 shadow-sm">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Topics() {
  return (
    <section id="topik" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Jelajahi Topik</h2>
            <p className="mt-2 text-slate-600">Pilih bidang yang ingin kamu kuasai. Semua materi disusun bertahap.</p>
          </div>
          <a href="#materi" className="hidden sm:inline-flex text-sm font-medium text-indigo-700 hover:text-indigo-800">Lihat semua</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t) => (
            <TopicCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
