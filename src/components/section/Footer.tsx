import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFFAF9] py-14 border-t">

      <div className="w-full px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-start justify-between gap-10">

        {/* LOGO */}
        <div>

          <Image
            src="/logo1.svg"
            alt="Logo"
            width={60}
            height={60}
            className="mb-6"
          />

          <h1 className="font-bold font-heading text-3xl md:text-4xl">
            Kosongin
          </h1>

        </div>

        {/* HOME */}
        <div>

          <p className="font-bold mb-6 text-lg md:text-xl">
            Home
          </p>

          <p className="text-black text-base md:text-lg mb-4">
            Fitur
          </p>

          <p className="text-black text-base md:text-lg mb-4">
            Cara Kerja
          </p>

          <p className="text-black text-base md:text-lg mb-4">
            Komunitas
          </p>

          <p className="text-black text-base md:text-lg">
            Daftar
          </p>

        </div>

        {/* CONTACT */}
        <div>

          <p className="font-bold mb-6 text-lg md:text-xl">
            Contact Us
          </p>

          <p className="text-black text-base md:text-lg mb-4">
            Email
          </p>

          <p className="text-black text-base md:text-lg mb-4">
            Instagram
          </p>

          <p className="text-black text-base md:text-lg">
            LinkedIn
          </p>

        </div>

        {/* LEGAL */}
        <div>

          <p className="font-bold mb-6 text-lg md:text-xl">
            Legal
          </p>

          <p className="text-black text-base md:text-lg mb-4">
            Privacy Policy
          </p>

          <p className="text-black text-base md:text-lg">
            Terms of Service
          </p>

        </div>

        {/* COPYRIGHT */}
        <div className="w-full md:w-auto pt-6 md:pt-0">

          <p className="text-left md:text-right text-sm md:text-base text-black">
            © 2026 Veteran Tech
          </p>

        </div>

      </div>

    </footer>
  );
}