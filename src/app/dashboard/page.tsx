"use client";

import React, { useState, useEffect } from "react";
import LoginNavbar from "@/components/section/LoginNavbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Plus, ShieldCheck, Users, ArrowRight, ClipboardList, ImageIcon, Target } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [consumptionData, setConsumptionData] = useState<any[]>([]);
  const [shieldData, setShieldData] = useState<any[]>([]);
  const [joinedChallenges, setJoinedChallenges] = useState<number[]>([]);
  const [userName, setUserName] = useState("User");

  // Data Referensi Tantangan (Harus sama dengan di Page Komunitas)
  const ALL_CHALLENGES = [
    { id: 1, title: "Zero Plastic Weekend", tag: "Zero Waste" },
    { id: 2, title: "Belanja Sadar", tag: "No Impulse" },
    { id: 3, title: "Selasa Kendalikan Emisi", tag: "Zero Waste" },
  ];

  useEffect(() => {
    const userSession = localStorage.getItem("user_session");
    if (!userSession) {
      router.replace("/login");
      return;
    }

    setUserName(localStorage.getItem("user_name") || "User");
    
    // Load Data Tracking
    const savedCons = localStorage.getItem("consumption_data");
    if (savedCons) setConsumptionData(JSON.parse(savedCons));

    // Load Data Shield (Hanya yang statusnya Waiting)
    const savedShield = localStorage.getItem("shield_data");
    if (savedShield) {
      const parsed = JSON.parse(savedShield);
      setShieldData(parsed.filter((item: any) => item.status === "Waiting"));
    }

    // Load Data Challenges
    const savedChall = localStorage.getItem("joined_challenges");
    if (savedChall) setJoinedChallenges(JSON.parse(savedChall));
  }, [router]);

  const totalExpense = consumptionData.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  return (
    <div className="min-h-screen bg-[#FEFEFE] flex flex-col font-sans pb-20">
      <LoginNavbar />
      
      <main className="px-6 md:px-12 lg:px-20 mt-10 space-y-10 animate-in fade-in duration-700">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-4xl font-heading font-bold text-[#06322b]">Hi, {userName}! 👋</h1>
            <p className="text-gray-400 mt-1">Ini ringkasan perjalanan hematmu hari ini.</p>
          </div>
          <Button asChild className="bg-[#5E8B7E] hover:bg-[#4d7268] text-[#032119] font-bold rounded-2xl px-6 py-6 shadow-sm border-none">
            <Link href="/tracking"><Plus className="w-5 h-5 mr-2" /> Catat Pengeluaran</Link>
          </Button>
        </div>

        {/* STATS SUMMARY */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Belanja" value={`Rp ${totalExpense.toLocaleString('id-ID')}`} sub="Periode ini" color="bg-pink-50" />
          <StatCard title="Impulse Shield" value={shieldData.length.toString()} sub="Item ditunda" color="bg-teal-50" />
          <StatCard title="Challenge" value={joinedChallenges.length.toString()} sub="Sedang diikuti" color="bg-blue-50" />
          <StatCard title="Daily Tracking" value={consumptionData.length.toString()} sub="Catatan aktif" color="bg-orange-50" />
        </section>

        {/* MIDDLE SECTION: CHART & SHIELD PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grafik Harian */}
          <Card className="lg:col-span-2 p-8 rounded-[32px] border-gray-100 shadow-sm bg-white">
            <h3 className="font-bold text-[#06322b] mb-8 flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-[#5E8B7E]" /> Tren Konsumsi
            </h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={consumptionData}>
                  <XAxis dataKey="date" hide />
                  <Tooltip cursor={{fill: '#f9f9f9'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                  <Bar dataKey="amount" fill="#9bbab1" radius={[8, 8, 8, 8]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Impulse Shield Mini List */}
          <Card className="p-8 rounded-[32px] border-gray-100 shadow-sm bg-white border-t-4 border-t-[#5E8B7E]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#06322b] text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Waiting List
              </h3>
              <Link href="/shield" className="text-[10px] font-bold text-[#5E8B7E] uppercase hover:underline">Lihat Semua</Link>
            </div>
            
            <div className="space-y-4">
              {shieldData.length > 0 ? (
                shieldData.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#F8FAFA] rounded-[20px] border border-gray-50 group hover:border-[#5E8B7E] transition-all">
                    <p className="text-sm font-bold text-[#06322b] truncate">{item.itemName}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-[10px] text-gray-400">Rp {Number(item.price).toLocaleString('id-ID')}</p>
                      <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{item.duration}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-10 text-center space-y-3">
                  <ClipboardList className="w-8 h-8 text-gray-200 mx-auto" />
                  <p className="text-xs text-gray-400 italic">Belum ada barang ditunda.</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* BOTTOM SECTION: COMMUNITY CHALLENGES */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#06322b] flex items-center gap-2">
              <Users className="w-6 h-6" /> Tantangan Aktifmu
            </h3>
            <Button variant="ghost" asChild className="text-[#5E8B7E] font-bold text-sm">
              <Link href="/komunitas">Cari Tantangan Baru <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {joinedChallenges.length > 0 ? (
              ALL_CHALLENGES.filter(c => joinedChallenges.includes(c.id)).map((item) => (
                <ChallengePreviewCard key={item.id} title={item.title} tag={item.tag} />
              ))
            ) : (
              <Card className="col-span-full p-10 rounded-[32px] border-dashed border-2 border-gray-100 flex flex-col items-center bg-gray-50/20">
                <p className="text-gray-400 text-sm mb-4 italic">Kamu belum mengikuti tantangan komunitas apapun.</p>
                <Button asChild variant="outline" className="rounded-xl border-gray-200 text-xs font-bold">
                  <Link href="/komunitas">Lihat Semua Challenge</Link>
                </Button>
              </Card>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

// --- SUB-KOMPONEN ---

function StatCard({ title, value, sub, color }: any) {
  return (
    <Card className={`p-6 rounded-[28px] border-none shadow-sm ${color} transition-transform hover:scale-[1.02]`}>
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{title}</p>
      <p className="text-2xl font-bold text-[#06322b] mt-2 mb-1">{value}</p>
      <p className="text-[10px] font-medium text-gray-400">{sub}</p>
    </Card>
  );
}

function ChallengePreviewCard({ title, tag }: any) {
  return (
    <Card className="p-6 rounded-[32px] border-gray-100 shadow-sm bg-white group">
      <div className="aspect-[16/9] bg-[#F8FAFA] rounded-[24px] mb-5 flex items-center justify-center text-gray-200 border border-gray-50 group-hover:bg-[#f2f6f5] transition-colors">
        <ImageIcon className="w-10 h-10" />
      </div>
      <div className="space-y-3">
        <span className={`text-[9px] font-bold px-3 py-1 rounded-full border ${tag === 'Zero Waste' ? 'text-green-600 border-green-100 bg-green-50' : 'text-red-600 border-red-100 bg-red-50'}`}>
          {tag}
        </span>
        <h4 className="font-bold text-[#06322b] text-md line-clamp-1">{title}</h4>
        <Button asChild className="w-full bg-[#EDEAE8] hover:bg-[#e0ddd9] text-gray-700 font-bold py-5 rounded-xl text-[10px] border-none">
          <Link href="/komunitas">Detail Progress</Link>
        </Button>
      </div>
    </Card>
  );
}