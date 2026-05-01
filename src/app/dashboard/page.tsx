"use client";

import DashboardNavbar from "@/components/section/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col font-sans">
      <DashboardNavbar />
      <main className="flex-1 flex items-center justify-center p-6 relative">
        <Card className="w-full max-w-xl p-16 bg-white rounded-[32px] shadow-sm border-none flex flex-col items-center text-center">
          <div className="mb-8">
            {/* Pakai profile.png yang ada di folder assets kamu */}
            <Image src="/assets/profile.png" alt="Plant" width={100} height={100} />
          </div>
          <h1 className="font-heading text-3xl font-bold mb-4 text-[#06322b]">Belum ada catatan konsumsi</h1>
          <p className="text-gray-500 text-sm mb-10">Yuk, mulai catat konsumsi pertamamu hari ini!</p>
          <Button className="bg-[#568F87] text-white font-bold px-10 py-7 rounded-xl">
            Catat Konsumsi Pertama
          </Button>
        </Card>
      </main>
    </div>
  );
}