import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f3] border-b">
      <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center py-10">

        {/* LOGO (KIRI) */}
        <Image
          src="/Kosongin.svg"
          alt="Kosongin Logo"
          width={240}
          height={80}
          className="object-contain"
        />

        {/* MENU + BUTTON */}
        <div className="flex items-center gap-10">

          <nav className="hidden md:flex gap-12 text-2xl">
            <a href="#">Fitur</a>
            <a href="#">Cara Kerja</a>
            <a href="#">Komunitas</a>
            <a href="#">Daftar</a>
          </nav>

          <button className="bg-[#568F87] text-black font-bold px-6 py-4 rounded-lg text-xl">
            Mulai Sekarang ⮕
          </button>

        </div>

      </div>
    </header>
  );
}