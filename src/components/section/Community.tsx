import Image from "next/image";

export default function Community() {
  return (
    <section id="komunitas" className="py-32 bg-[#f5f5f3]">

      {/* CONTAINER FULL WIDTH */}
      <div className="px-8 md:px-16 lg:px-24">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Community Preview
        </h2>

        {/* SCROLL HORIZONTAL */}
        <div className="flex gap-16 overflow-x-auto pb-4 scroll-smooth">

          {[
            {
              title: "Judul Challenge",
              image: "/coba.png",
              participants: 120,
              duration: "7 hari",
            },
            {
              title: "No Buy Challenge",
              image: "/coba.png",
              participants: 85,
              duration: "14 hari",
            },
            {
              title: "Minimalist Month",
              image: "/coba.png",
              participants: 200,
              duration: "30 hari",
            },
            {
              title: "Eco Living Challenge",
              image: "/coba.png",
              participants: 60,
              duration: "10 hari",
            },
          ].map((item, i) => (
            
            <div
              key={i}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition
              min-w-[750px] aspect-[2/3] flex flex-col"
            >

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={900}
                className="w-full aspect-[3/2] object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                {/* TAG */}
                <span className="inline-block border border-[#568F87] text-[#568F87] px-6 py-3 rounded-full text-2xl w-fit">
                  Zero Waste Week
                </span>

                {/* TITLE */}
                <h3 className="mt-6 text-4xl font-bold">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-3xl text-black mt-10">
                  Ikuti tantangan ini untuk hidup lebih mindful dan hemat.
                </p>

                {/* INFO */}
                <div className="flex items-center gap-2 text-3xl mt-10 text-gray-600">
                  <Image
                    src="/user.png"
                    alt="user"
                    width={0}
                    height={0}
                    className="h-[1em] w-auto"
                  />
                  <span>{item.participants}</span>
                  <span>•</span>
                  <span>{item.duration}</span>
                </div>

                {/* BUTTON */}
                <button className="mt-auto ml-auto w-1/2 bg-[#5c8f86] hover:bg-[#4a7a73] text-black font-bold py-6 rounded-xl text-3xl transition">
                  <div className="flex items-center justify-center gap-3">
                    <span>Ikuti Challenge</span>
                    <Image
                      src="/arrow.png"
                      alt="arrow"
                      width={0}
                      height={0}
                      className="h-[1em] w-auto"
                    />
                  </div>
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}