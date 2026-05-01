export default function HowItWorks() {
  return (
    <section id="cara" className="py-32 bg-[#f5f5f3]">

      <div className="w-full px-8 md:px-16 lg:px-24">

        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-20">
          Cara Kerja
        </h2>

        <div className="grid md:grid-cols-2 gap-20">

          {[
            { no: "01", title: "Daftar & Buat Akun", desc: "Gratis, cukup nama + email." },
            { no: "02", title: "Catat Konsumsi Harianmu", desc: "Pilih kategori, isi harga, selesai" },
            { no: "03", title: "Aktifkan Impulse Shield", desc: "Sebelum belanja, tunda dulu beberapa hari." },
            { no: "04", title: "Ikuti Challenge & Lihat Progres", desc: "Gabung komunitas. Kebiasaan terbentuk." },
          ].map((item, i) => (
            <div key={i}>

              <div className="flex items-center gap-6">
                <span className="text-6xl font-bold">
                  {item.no}
                </span>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>
              </div>

              <div className="border-b-2 border-black mt-3 mb-4"></div>

              <p className="ml-24 text-black font-sm text-xl">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}