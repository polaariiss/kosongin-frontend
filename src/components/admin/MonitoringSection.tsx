"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonitoringSection() {

  /* USER AKTIF 7 HARI */
  const activeUserData = [
    {
      day: "05",
      total: 120,
    },
    {
      day: "06",
      total: 140,
    },
    {
      day: "07",
      total: 135,
    },
    {
      day: "08",
      total: 165,
    },
    {
      day: "09",
      total: 180,
    },
    {
      day: "10",
      total: 175,
    },
    {
      day: "11",
      total: 190,
    },
  ];

  /* KONSUMSI ITEM 7 HARI */
  const consumptionData = [
    {
      day: "05",
      total: 55,
    },
    {
      day: "06",
      total: 40,
    },
    {
      day: "07",
      total: 68,
    },
    {
      day: "08",
      total: 72,
    },
    {
      day: "09",
      total: 70,
    },
    {
      day: "10",
      total: 78,
    },
    {
      day: "11",
      total: 65,
    },
  ];

  return (
    <div className="bg-[#FFFAF9] rounded-2xl border shadow-lg p-6 mb-8">

      {/* TITLE */}
      <div className="mb-6">

        <h2 className="text-3xl font-bold text-[#1F3A37]">
          Monitoring Aktivitas
        </h2>

        <p className="text-[#032119] text-sm mt-1">
          Pantau aktivitas platform Kosongin secara real-time.
        </p>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* USER AKTIF */}
        <div className="bg-[#F1F6F6] rounded-2xl border-2 border-[#D7E5E3] p-5">

          <h3 className="font-bold text-[#032119]">
            Pengguna aktif harian — 7 Hari Terakhir
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Pengguna aktif per hari
          </p>

          <div className="h-[250px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={activeUserData}
              >

                <XAxis
                  dataKey="day"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#568F87"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* KONSUMSI */}
        <div className="bg-[#FFF1F1] rounded-2xl border-2 border-[#F0D0D0] p-5">

          <h3 className="font-bold text-[#032119]">
            Catatan konsumsi item masuk per hari — 7 Hari Terakhir
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Consumption log yang masuk per hari
          </p>

          <div className="h-[250px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={consumptionData}
              >

                <XAxis
                  dataKey="day"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#E8A5A5"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* TOP CHALLENGES */}
      <div className="mt-10 ml-10">

        <h3 className="text-2xl font-bold text-[#032119] mb-5">
          Top Challenges
        </h3>

        <div className="space-y-4">

          {/* ITEM */}
          <div className="bg-[#EEF4F3] rounded-2xl px-6 py-5 flex items-center justify-between">

            <h4 className="text-2xl font-bold text-[#032119]">
              1. 30 Hari Tanpa Fast Fashion
            </h4>

            <p className="text-[#032119] font-medium">
              312 peserta • Zero Waste • 30 hari
            </p>

          </div>

          {/* ITEM */}
          <div className="bg-[#EEF4F3] rounded-2xl px-6 py-5 flex items-center justify-between">

            <h4 className="text-2xl font-bold text-[#032119]">
              2. Zero Plastic Weekend
            </h4>

            <p className="text-[#032119] font-medium">
              234 peserta • Zero Waste • 2 hari
            </p>

          </div>

          {/* ITEM */}
          <div className="bg-[#EEF4F3] rounded-2xl px-6 py-5 flex items-center justify-between">

            <h4 className="text-2xl font-bold text-[#032119]">
              3. No Impulse Buy Week
            </h4>

            <p className="text-[#032119] font-medium">
              198 peserta • No Impulse • 7 hari
            </p>

          </div>

          {/* ITEM */}
          <div className="bg-[#EEF4F3] rounded-2xl px-6 py-5 flex items-center justify-between">

            <h4 className="text-2xl font-bold text-[#032119]">
              4. Makan Lokal Seminggu
            </h4>

            <p className="text-[#032119] font-medium">
              145 peserta • Makanan • 7 hari
            </p>

          </div>

          {/* ITEM */}
          <div className="bg-[#EEF4F3] rounded-2xl px-6 py-5 flex items-center justify-between">

            <h4 className="text-2xl font-bold text-[#032119]">
              5. Beli Secondhand Bulan Ini
            </h4>

            <p className="text-[#032119] font-medium">
              87 peserta • Secondhand • 14 hari
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}