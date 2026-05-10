import Image from "next/image";

export default function Community() {
  return (
    <section id="komunitas" className="py-24 bg-[#f5f5f3]">

      {/* CONTAINER */}
      <div className="px-6 md:px-16 lg:px-24">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Community Preview
        </h2>

        {/* SCROLL */}
        <div className="flex gap-8 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden">

          {[
            {
              title: "Judul Challenge",
              image: "/coba.png",
              desc: "Ikuti tantangan ini untuk hidup lebih mindful dan hemat.",
              participants: 120,
              duration: "7 hari",
            },
            {
              title: "No Buy Challenge",
              image: "/coba.png",
              desc: "Ikuti tantangan ini untuk hidup lebih mindful dan hemat.",
              participants: 85,
              duration: "14 hari",
            },
            {
              title: "Minimalist Month",
              image: "/coba.png",
              desc: "Ikuti tantangan ini untuk hidup lebih mindful dan hemat.",
              participants: 200,
              duration: "30 hari",
            },
            {
              title: "Eco Living Challenge",
              image: "/coba.png",
              desc: "Ikuti tantangan ini untuk hidup lebih mindful dan hemat.",
              participants: 60,
              duration: "10 hari",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition min-w-[320px] md:min-w-[280px] flex flex-col"
            >

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="w-full aspect-square object-cover"
              />

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">

                {/* TAG */}
                <span className="inline-block border border-[#568F87] text-[#568F87] px-4 py-2 rounded-full text-sm md:text-base w-fit">
                  Zero Waste
                </span>

                {/* TITLE */}
                <h3 className="mt-5 text-2xl md:text-2xl font-bold">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-base md:text-lg text-black mt-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* BOTTOM */}
                <div className="mt-auto pt-8">

                  {/* INFO */}
                  <div className="flex items-center gap-2 text-base md:text-lg text-gray-600 mb-4">

                    <Image
                      src="/user.png"
                      alt="user"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />

                    <span>{item.participants}</span>

                    <span>•</span>

                    <span>{item.duration}</span>

                  </div>

                  {/* BUTTON */}
                  <button className="ml-auto w-fit bg-[#5c8f86] hover:bg-[#4a7a73] text-white font-semibold px-6 py-3 rounded-xl text-sm md:text-base transition">

                    <div className="flex items-center justify-center gap-2">

                      <span>Ikuti Challenge</span>

                      <Image
                        src="/arrow.png"
                        alt="arrow"
                        width={14}
                        height={14}
                      />

                    </div>

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}