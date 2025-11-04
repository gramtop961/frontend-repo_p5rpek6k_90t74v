import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Star className="h-4 w-4" />
              Belajar Seru & Interaktif
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Jadikan Belajar Lebih Mudah, Menyenangkan, dan Bermakna
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              EduNusa adalah platform edukatif berbahasa Indonesia yang membantu kamu memahami konsep penting melalui materi ringkas, kuis interaktif, dan latihan soal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#mulai" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition-colors">
                <Rocket className="h-5 w-5" />
                Mulai Belajar
              </a>
              <a href="#materi" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                Lihat Materi
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-indigo-50 p-3">
                  <div className="text-2xl font-bold text-indigo-700">+500</div>
                  <div className="text-xs text-indigo-700/80">Latihan</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-3">
                  <div className="text-2xl font-bold text-purple-700">+120</div>
                  <div className="text-xs text-purple-700/80">Materi</div>
                </div>
                <div className="rounded-lg bg-pink-50 p-3">
                  <div className="text-2xl font-bold text-pink-700">+40</div>
                  <div className="text-xs text-pink-700/80">Kuis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
