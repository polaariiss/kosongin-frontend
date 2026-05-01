export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FFFAF9] flex items-center overflow-hidden">

      {/* Pink atas */}
      <div className="absolute top-[-100px] right-[-40px] w-[1000px] h-[600px]
      bg-gradient-to-br from-[#FFFAF9] via-[#F5BABB] to-transparent
      blur-[140px] opacity-60 rounded-full"></div>

      {/* Pink bawah */}
      <div className="absolute bottom-[-10px] left-[-60px] w-[500px] h-[500px]
      bg-gradient-to-tr from-[#FFFAF9] via-[#F5BABB] to-transparent
      blur-[140px] opacity-50 rounded-full"></div>

      <div className="relative w-full px-8 md:px-16 lg:px-24">

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-24">

          <div className="max-w-[1100px] flex flex-col justify-center min-h-[50vh]">

            <h1 className="font-heading tracking-tight font-semibold text-[clamp(48px,8vw,170px)] leading-[1.05] text-[#000]">
              Headline utama
            </h1>

            <p className="font-bold mt-4 ml-20 md:text-[50px] text-black">
              Sub headline
            </p>

            <button className="mt-10 bg-[#568F87] px-[80px] py-8 rounded-2xl font-bold text-black text-3xl">
              Mulai Kosongin
            </button>
          </div>

          <div className="flex justify-end">
            <div className="w-full aspect-square bg-gray-300 rounded-md max-h-[70vh]"></div>
          </div>
        </div>
      </div>

    </section>
  );
}