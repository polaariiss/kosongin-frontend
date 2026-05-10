import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-32 overflow-hidden">

      {/* BG DESKTOP */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url('/bck.png')" }}
      />

      {/* BG MOBILE */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      {/* CONTENT */}
      <div className="relative w-full px-8 md:px-16 lg:px-24 text-justify">

        {/* LOGO */}
        <Image
          src="/Logo1.svg"
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto mb-12"
        />

        {/* H2 DESKTOP */}
        <h2 className="hidden md:block text-center text-3xl md:text-4xl font-heading font-bold">
          Platform “rem digital”{" "}
          <span className="text-[#3D6660]">
            untuk Gen Z dan Millenial
          </span>
        </h2>

        {/* H2 MOBILE */}
        <h2 className="block md:hidden text-center text-2xl font-heading font-bold leading-tight">
          Platform “rem digital”
          <br />
          <span className="text-[#3D6660]">
            untuk Gen Z dan Millenial
          </span>
        </h2>

        {/* PARAGRAPH */}
        <div className="mt-60 w-full px-2 md:px-6 lg:px-10 text-xl leading-relaxed">

          {/* kiri */}
          <p className="max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* kanan */}
          <p className="max-w-2xl md:ml-auto md:mt-32 mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

        </div>

      </div>
    </section>
  );
}