import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-between gap-16 px-6 pt-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-blue-400 font-medium">
            Welcome to Lexo Studios
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Building scalable systems,
            <br />
            bots and digital worlds.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Backend developer focused on building reliable APIs,
            automation tools and large-scale digital experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
              View Projects
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-blue-500">
              About Me
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-3xl" />

            <img
              src="/profile.png"
              alt="Alex"
              className="relative h-80 w-80 rounded-full border border-slate-700 object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}