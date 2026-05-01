"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import LoginNavbar from "@/components/section/LoginNavbar";
import ConsumptionForm from "@/components/tracking/ConsumptionForm";
import ConsumptionList from "@/components/tracking/ConsumptionList";
import EmptyState from "@/components/tracking/EmptyState";
import { Consumption } from "@/types/consumption";

export default function TrackingPage() {
  const [data, setData] = useState<Consumption[]>([]);
  const [filter, setFilter] = useState<"weekly" | "monthly">("weekly");

  // 🔥 FILTER DATA
  const now = new Date();

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);

    if (filter === "weekly") {
      const startOfWeek = new Date(now);
      
      const day = now.getDay(); // 0=Min, 1=Sen...
      const diff = day === 0 ? 6 : day - 1;

      startOfWeek.setDate(now.getDate() - diff);
      startOfWeek.setHours(0, 0, 0, 0);

      return itemDate >= startOfWeek && itemDate <= now;
    }

    if (filter === "monthly") {
      return (
        itemDate.getMonth() === now.getMonth() &&
        itemDate.getFullYear() === now.getFullYear()
      );
    }

    return true;
  });

  // 🔥 TOTAL
  const total = filteredData.reduce((sum, item) => sum + item.amount, 0);

  // 🔥 KATEGORI
  const categorySummary = filteredData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = 0;
    acc[item.category] += item.amount;
    return acc;
  }, {} as Record<string, number>);

  // 🔥 CHART HARIAN
  const dailySummary = filteredData.reduce((acc, item) => {
    const day = new Date(item.date).toLocaleDateString("id-ID", {
      weekday: "short",
    });

    if (!acc[day]) acc[day] = 0;
    acc[day] += item.amount;
    return acc;
  }, {} as Record<string, number>);

  const daysOrder = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const chartData = Object.entries(dailySummary)
    .map(([day, amount]) => ({ day, amount }))
    .sort(
      (a, b) => daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day)
    );

  // 🔥 HANDLE ADD
  const handleAdd = (item: Consumption) => {
    setData((prev) => [item, ...prev]);
  };

  const previousData = data.filter((item) => {
  const itemDate = new Date(item.date);

    if (filter === "weekly") {
      const now = new Date();

      const day = now.getDay() || 7;
      const startThisWeek = new Date(now);
      startThisWeek.setDate(now.getDate() - day + 1);
      startThisWeek.setHours(0, 0, 0, 0);

      const startLastWeek = new Date(startThisWeek);
      startLastWeek.setDate(startThisWeek.getDate() - 7);

      const endLastWeek = new Date(startThisWeek);
      endLastWeek.setMilliseconds(-1);

      return itemDate >= startLastWeek && itemDate <= endLastWeek;
    }

    if (filter === "monthly") {
      const now = new Date();

      const startThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const endLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

      return itemDate >= startLastMonth && itemDate <= endLastMonth;
    }

    return false;
  });

  const currentTotal = filteredData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const previousTotal = previousData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="min-h-screen bg-[#FFFAF9] flex flex-col font-sans">

      {/* NAVBAR */}
      <LoginNavbar />

      {/* HEADER */}
      <div className="px-6 md:px-12 lg:px-20 mt-10">
        <h1 className="text-4xl font-heading font-bold text-[#06322b]">
          Consumption Tracking
        </h1>
        <p className="text-black mt-2">
          Catat dan lihat ringkasan konsumsi harianmu secara visual.
        </p>
      </div>

      {/* MAIN */}
      <main className="px-6 md:px-12 lg:px-20 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          <ConsumptionForm onAdd={handleAdd} />

          <div>
            <h3 className="font-semibold mb-2 text-[#06322b]">
              Riwayat Konsumsi
            </h3>

            {data.length === 0 ? (
              <EmptyState />
            ) : (
              <ConsumptionList data={data} />
            )}
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* INSIGHT */}
          <div className="bg-white p-6 rounded-xl shadow-sm">

            {/* HEADER + FILTER */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#06322b]">
                Insight Visual
              </h3>

              <div className="bg-[#EDEAE8] p-1 rounded-xl flex text-sm font-medium">
  
                <button
                  onClick={() => setFilter("weekly")}
                  className={`px-4 py-1 rounded-lg transition ${
                    filter === "weekly"
                      ? "bg-white shadow text-black"
                      : "text-gray-500"
                  }`}
                >
                  Mingguan
                </button>

                <button
                  onClick={() => setFilter("monthly")}
                  className={`px-4 py-1 rounded-lg transition ${
                    filter === "monthly"
                      ? "bg-white shadow text-black"
                      : "text-gray-500"
                  }`}
                >
                  Bulanan
                </button>

              </div>
            </div>

            {/* TOTAL */}
            <div className="grid grid-cols-2 gap-3 mb-4">

              {/* PERIODE INI */}
              <div className="bg-[#FCEAEA] p-4 rounded-lg">
                <p className="text-xs font-bold text-[#568F87]">PERIODE INI</p>
                <p className="text-xl font-bold">
                  Rp {currentTotal.toLocaleString()}
                </p>
              </div>

              {/* PERIODE SEBELUMNYA */}
              <div className="bg-[#FCEAEA] p-4 rounded-lg">
                <p className="text-xs font-bold text-[#568F87]">PERIODE LALU</p>
                <p className="text-xl font-bold">
                  Rp {previousTotal.toLocaleString()}
                </p>
              </div>

            </div>

            {/* PER KATEGORI */}
            <div className="space-y-3">
              {Object.entries(categorySummary).map(([category, amount]) => (
                
                <div
                  key={category}
                  className="bg-[#EEF4F3] p-4 rounded-xl border border-gray-200 shadow-sm"
                >
                  
                  {/* HEADER */}
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold">{category}</span>
                    <span className="font-bold text-[#4E827B]">
                      Rp {amount.toLocaleString()}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-[#06322b] rounded transition-all duration-300"
                      style={{
                        width:
                          total > 0
                            ? `${(amount / total) * 100}%`
                            : "0%",
                      }}
                    />
                  </div>

                </div>

              ))}
            </div>
          </div>

          {/* CHART */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4 text-[#06322b]">
              Grafik Konsumsi Harian
            </h3>

            {chartData.length === 0 ? (
              <p className="text-sm text-gray-400">
                Belum ada data
              </p>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="amount"
                    fill="#F7C8C9"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}