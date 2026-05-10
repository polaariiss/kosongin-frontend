import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FFFAF9] flex items-center overflow-hidden">

      {/* PINK ATAS */}
      <div className="absolute top-[-80px] right-[-120px] w-[450px] md:w-[1000px] h-[300px] md:h-[600px] bg-gradient-to-br from-[#FFFAF9] via-[#F5BABB] to-transparent blur-[140px] opacity-60 rounded-full" />

      {/* PINK BAWAH */}
      <div className="absolute bottom-[-80px] left-[-120px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-[#FFFAF9] via-[#F5BABB] to-transparent blur-[140px] opacity-50 rounded-full" />

      {/* CONTENT */}
      <div className="relative w-full px-6 md:px-16 lg:px-24">

        {/* GRID */}
        <div className="grid grid-cols-[1.2fr_0.8fr] md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-[800px] flex flex-col justify-center">

            <h1 className="font-heading tracking-tight font-bold text-[clamp(40px,7vw,100px)] leading-[1] text-black whitespace-normal md:whitespace-nowrap">
              Headline utama
            </h1>

            <p className="font-bold mt-3 ml-1 md:ml-4 text-lg md:text-4xl text-black">
              Sub headline
            </p>

            {/* BUTTON DESKTOP */}
            <Link href="/login" className="hidden md:flex md:justify-start">

              <button className="mt-8 w-fit bg-[#568F87] px-20 py-5 rounded-2xl font-bold text-xl text-white hover:bg-[#4a7a73] transition-all active:scale-95">
                Mulai Kosongin
              </button>

            </Link>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">

            <div className="w-full max-w-[160px] md:max-w-[400px] aspect-square bg-gray-300 rounded-3xl" />

          </div>

        </div>

        {/* BUTTON MOBILE */}
        <Link href="/login" className="flex justify-center md:hidden">

          <button className="mt-10 w-fit bg-[#568F87] px-10 py-4 rounded-2xl font-bold text-lg text-white hover:bg-[#4a7a73] transition-all active:scale-95">
            Mulai Kosongin
          </button>

        </Link>

      </div>

    </section>
  );
}