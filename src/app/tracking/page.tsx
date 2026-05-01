"use client";

import { useState } from "react";
import LoginNavbar from "@/components/section/LoginNavbar";
import ConsumptionForm from "@/components/tracking/ConsumptionForm";
import ConsumptionList from "@/components/tracking/ConsumptionList";
import EmptyState from "@/components/tracking/EmptyState";
import { Consumption } from "@/types/consumption";

export default function TrackingPage() {
  const [data, setData] = useState<Consumption[]>([]);

  const handleAdd = (item: Consumption) => {
    setData((prev) => [item, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF9] flex flex-col font-sans overflow-hidden">

      <LoginNavbar />

      <div className="px-6 md:px-12 lg:px-20 mt-10">
        <h1 className="text-4xl font-heading font-bold text-[#06322b]">
          Consumption Tracking
        </h1>
        <p className="text-black mt-2">
          Catat dan lihat ringkasan konsumsi harianmu secara visual.
        </p>
      </div>

      <main className="px-6 md:px-12 lg:px-20 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ConsumptionForm onAdd={handleAdd} />

        <div>
          {data.length === 0 ? (
            <EmptyState />
          ) : (
            <ConsumptionList data={data} />
          )}
        </div>

      </main>
    </div>
  );
}