"use client";

import LoginNavbar from "@/components/section/LoginNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col font-sans overflow-hidden">
      <LoginNavbar />

      <main className="flex-1 flex items-center justify-center p-6 relative">
        {/* Efek Cahaya/Glow Lembut di Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-50/40 blur-[100px] rounded-full -z-10"></div>

        {/* Kartu Utama (Empty State) */}
        <Card className="w-full max-w-xl p-10 md:p-16 bg-white rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
          
          {/* 1. Emoji Plant Icon */}
          <div className="text-7xl md:text-8xl mb-8 animate-bounce-slow">
            🌱
          </div>

          {/* Judul dengan Font Fraunces */}
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#06322b]">
            Belum ada catatan konsumsi
          </h1>
          
          {/* Deskripsi */}
          <p className="text-gray-500 text-sm md:text-base mb-10 max-w-[320px] leading-relaxed">
            Yuk, mulai catat konsumsi pertamamu hari ini — nggak harus sempurna, yang penting mulai!
          </p>

          <Button 
           className="bg-[#5E8B7E] hover:bg-[#4d7268] text-[#032119] font-bold px-12 py-7 rounded-[18px] text-lg transition-all active:scale-95 border-none shadow-none"
          >
            Catat Konsumsi Pertama
          </Button>
        </Card>
      </main>
    </div>
  );
}