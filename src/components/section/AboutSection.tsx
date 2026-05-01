import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-32 overflow-hidden">

      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      {/* OVERLAY (lebih soft) */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* CONTENT */}
      <div className="relative w-full px-8 md:px-16 lg:px-24 text-justify">

        <Image
          src="/Logo1.svg"
          alt="Logo"
          width={130}
          height={130}
          className="mx-auto mb-20"
        />

        <h2 className="text-center text-3xl md:text-6xl font-heading font-bold">
          Platform “rem digital” untuk{" "}
          <span className="text-gray-500">Gen Z dan Millenial</span>
        </h2>

<div className="mt-60 w-full px-8 md:px-16 lg:px-24 text-4xl leading-relaxed">

  {/* kiri banget */}
  <p className="max-w-6xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  {/* kanan banget */}
  <p className="max-w-6xl md:ml-auto md:mt-32 mt-12">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</div>

      </div>
    </section>
  );
}