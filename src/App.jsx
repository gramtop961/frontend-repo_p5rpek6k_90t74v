import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="materi" className="py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Materi Populer</h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">Kumpulan materi yang banyak dipelajari minggu ini.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Aljabar Dasar", "Struktur Atom", "Dasar HTML & CSS"].map((item) => (
                  <article key={item} className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow">
                    <h3 className="font-semibold group-hover:text-indigo-700">{item}</h3>
                    <p className="mt-1 text-sm text-slate-600">Ringkasan konsep, contoh soal, dan latihan mandiri.</p>
                    <div className="mt-4 inline-flex text-sm font-medium text-indigo-700">Buka Materi →</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Topics />
        <section id="mulai" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold">Belajar Dengan Jalur Terarah</h3>
                <p className="mt-2 text-slate-600">Ikuti kurikulum yang disusun berjenjang agar progresmu terukur dan konsisten.</p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
                  <li>Materi ringkas dan fokus pada konsep inti</li>
                  <li>Kuis interaktif untuk menguji pemahaman</li>
                  <li>Latihan soal dengan pembahasan</li>
                </ul>
                <a href="#" className="mt-6 inline-flex rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Coba Gratis</a>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6 min-h-[220px]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
