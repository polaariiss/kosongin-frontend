import Image from "next/image";

export default function Features() {
  return (
    <section className="py-32 bg-[#f5f5f3]">

      <div className="px-8 md:px-16 lg:px-24">

        <h2 className="text-4xl md:text-8xl font-heading font-bold mb-20">
          Fitur <span className="text-[#568F87]">Utama</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-32">

          {[
            {
              title: "Consumption Tracking",
              icon: "/tracking.png",
              desc: "Catat dan lihat ringkasan konsumsi harianmu secara visual.",
            },
            {
              title: "Impulse Shield",
              icon: "/shield.png",
              desc: "Rem digitalmu sebelum checkout. Tunda, pikir dua kali, hemat lebih banyak.",
            },
            {
              title: "Community Challenges",
              icon: "/community.png",
              desc: "Tantangan kolektif untuk konsumsi yang lebih bertanggung jawab.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#A7C4C1] via-[#8FAFAD] to-[#6F9F98]
              p-10 rounded-3xl shadow-sm hover:shadow-lg transition duration-300
              flex flex-col items-center text-center aspect-[4/3] w-full"
            >

              {/* ICON */}
              <Image
                src={item.icon}
                alt={item.title}
                width={90}
                height={90}
                className="mt-10 mb-6"
              />

              <div className="w-full max-w-full text-left">
                {/* TITLE */}
                <h3 className="text-5xl text-center font-bold text-black">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-black/70 mt-12 text-4xl text-left">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}