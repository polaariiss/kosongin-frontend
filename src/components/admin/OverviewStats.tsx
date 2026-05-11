"use client";

import Image from "next/image";

export default function OverviewStats() {

  const stats = [
    {
      title: "Total pengguna",
      value: 587,
      icon: "/Pengguna.png",
    },
    {
      title: "Item tercatat",
      value: 834,
      icon: "/Item.png",
    },
    {
      title:
        "Impulse berhasil dibatalkan",
      value: 281,
      icon: "/impulse.png",
    },
    {
      title: "Challenge Aktif",
      value: 5,
      icon: "/target.png",
    },
  ];

  return (
    <div className="bg-[#FFFAF9] rounded-2xl border shadow-lg p-6 mb-8">

      {/* TITLE */}
      <div className="mb-6">

        <h2 className="text-3xl font-bold text-[#1F3A37]">
          Overview Stats
        </h2>

        <p className="text-black font-medium text-sm mt-1">
          Ringkasan kondisi platform Kosongin secara keseluruhan hari ini
        </p>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-[#F1F6F6] p-6 rounded-2xl border"
          >

            {/* TOP */}
            <div className="flex items-start justify-between">

              {/* VALUE */}
              <h2 className="text-5xl font-bold font-heading text-[#032119] leading-none">
                {item.value}
              </h2>

              {/* ICON */}
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="object-contain"
              />

            </div>

            {/* TITLE */}
            <p className="text-[#032119] font-medium mt-4">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}