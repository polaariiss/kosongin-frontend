"use client";

import DashboardNavbar from "@/components/section/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col font-sans overflow-hidden">
      <DashboardNavbar />
      
      {/* Konten Dashboard tetap sama seperti revisi sebelumnya */}
      <main className="flex-1 flex items-center justify-center p-6 relative">
         {/* ... (Isi Card dan Glow Background) ... */}
      </main>
    </div>
  );
}