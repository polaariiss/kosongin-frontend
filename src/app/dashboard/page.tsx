"use client";

import React, { useState, useEffect } from "react";
import LoginNavbar from "@/components/section/LoginNavbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Plus, ShieldCheck, Users, ArrowRight, ClipboardList, ImageIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [data, setData] = useState<any[]>([]);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const savedData = localStorage.getItem("consumption_data");
    if (savedData) setData(JSON.parse(savedData));

    const storedName = localStorage.getItem("user_name");
    if (storedName) setUserName(storedName);
  }, []);

  // --- VIEW 1: EMPTY STATE ---
  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-[#fefefe] flex flex-col font-sans overflow-hidden">
        <LoginNavbar />
        <main className="flex-1 flex items-center justify-center p-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-50/40 blur-[100px] rounded-full -z-10" />
          <Card className="w-full max-w-xl p-10 md:p-16 bg-white rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="text-7xl md:text-8xl mb-8">🌱</div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#06322b]">Belum ada catatan konsumsi</h1>
            <p className="text-gray-500 text-sm md:text-base mb-10 max-w-[320px] leading-relaxed">Yuk, mulai catat konsumsi pertamamu hari ini — nggak harus sempurna, yang penting mulai!</p>
            <Button asChild className="bg-[#5E8B7E] hover:bg-[#4d7268] text-[#032119] font-bold px-12 py-7 rounded-[18px] text-lg border-none">
              <Link href="/tracking">Catat Konsumsi Pertama</Link>
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  // --- VIEW 2: FULL DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#FEFEFE] flex flex-col font-sans pb-20">
      <LoginNavbar />
      <main className="px-6 md:px-12 lg:px-20 mt-10 space-y-10 animate-in fade-in duration-700">
        
        {/* HEADER */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-heading font-bold text-[#06322b]">Hi, {userName}! 👋</h1>
            <p className="text-gray-500 mt-1">Hari ini kamu konsumsi apa saja?</p>
          </div>
          <Button asChild className="bg-[#5E8B7E] text-[#032119] font-bold rounded-xl hidden md:flex">
            <Link href="/tracking"><Plus className="w-4 h-4 mr-2" /> Tambah Catatan</Link>
          </Button>
        </div>

        {/* SUMMARY CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Item Tercatat" value={data.length.toString()} sub="Update terbaru" />
          <StatCard title="Kategori Terbanyak" value="Lainnya" sub="Berdasarkan data" />
          <StatCard title="Streak" value="1 🔥" sub="Ayo pertahankan!" isStreak />
          <StatCard title="Total" value="Rp 0" sub="Minggu ini" />
        </section>

        {/* GRAFIK UTAMA */}
        <Card className="p-6 rounded-[24px] border-gray-100 shadow-sm bg-white">
          <h3 className="font-bold text-[#06322b] mb-6 text-lg">Grafik konsumsi harian (Rp)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="date" hide />
                <Tooltip cursor={{fill: '#f9f9f9'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="amount" fill="#F7C8C9" radius={[6, 6, 6, 6]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* LOWER SECTION: TRACKER & SHIELD (Image 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Consumption Tracker Mini Form */}
          <Card className="p-8 rounded-[24px] border-gray-100 shadow-sm bg-white">
            <div className="flex items-center gap-2 mb-6">
              <ClipboardList className="w-5 h-5 text-[#06322b]" />
              <h3 className="font-bold text-[#06322b] text-lg">Consumption Tracker</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#06322b]">Nama Item</label>
                <Input placeholder="Contoh: Adidas Cheongsam, Hirono..." className="rounded-xl border-gray-200" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#06322b]">Harga (Rp)</label>
                  <Input type="number" placeholder="0" className="rounded-xl border-gray-200" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#06322b]">Tanggal</label>
                  <Input type="date" className="rounded-xl border-gray-200" />
                </div>
              </div>
              <Button asChild className="w-full bg-[#5E8B7E] hover:bg-[#4d7268] text-[#032119] font-bold py-6 rounded-xl border-none mt-2">
                <Link href="/tracking">Simpan</Link>
              </Button>
            </div>
          </Card>

          {/* Impulse Shield Preview */}
          <Card className="p-8 rounded-[24px] border-gray-100 shadow-sm bg-white relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#06322b]" />
                <h3 className="font-bold text-[#06322b] text-lg">Impulse Shield</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 cursor-pointer" />
            </div>
            
            {/* List Item Dummy */}
            <div className="space-y-3">
              <ShieldItem name="Hijack Sandals" category="Fashion" price="Rp 553.520" days="2 hari lagi" />
              <ShieldItem name="Mortosia SAFF & Co." category="Perawatan Diri" price="Rp 225.980" days="5 hari lagi" />
            </div>
          </Card>
        </div>

        {/* COMMUNITY CHALLENGE SECTION (Image 6) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#06322b]" />
            <h3 className="text-xl font-bold text-[#06322b]">Community Challenge yang Kamu Ikuti</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChallengeCard title="Zero Plastic Weekend" tag="Zero Waste" />
            <ChallengeCard title="Belanja Sadar" tag="No Impulse" />
            <ChallengeCard title="Selasa Kendalikan Emisi" tag="Zero Waste" />
          </div>
        </section>
      </main>
    </div>
  );
}

// --- SUB-KOMPONEN ---

function StatCard({ title, value, sub, isStreak }: any) {
  return (
    <Card className="p-5 rounded-[20px] border-gray-50 shadow-sm bg-white">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-bold text-[#06322b] my-1">{value}</p>
      <p className={`text-[10px] font-medium ${isStreak ? 'text-orange-500' : 'text-[#568F87]'}`}>{sub}</p>
    </Card>
  );
}

function ShieldItem({ name, category, price, days }: any) {
  return (
    <div className="flex justify-between items-center p-4 bg-[#F8FAFA] rounded-2xl border border-gray-100">
      <div>
        <p className="text-sm font-bold text-[#06322b]">{name}</p>
        <p className="text-[10px] text-gray-500">{category} - {price}</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-bold text-red-400 mb-2">{days}</p>
        <div className="flex gap-2">
          <button className="text-[9px] font-bold px-2 py-1 border border-gray-300 rounded-md bg-white">Batalkan</button>
          <button className="text-[9px] font-bold px-2 py-1 bg-white border border-gray-300 rounded-md">Tetap Beli</button>
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({ title, tag }: any) {
  return (
    <Card className="p-4 rounded-[24px] border-gray-100 shadow-sm bg-white">
      <div className="aspect-video bg-gray-50 rounded-[18px] mb-4 flex items-center justify-center text-gray-300 border border-dashed border-gray-200">
        <ImageIcon className="w-8 h-8" />
      </div>
      <span className={`text-[9px] font-bold px-2 py-1 rounded-full border ${tag === 'Zero Waste' ? 'text-green-600 border-green-100 bg-green-50' : 'text-red-600 border-red-100 bg-red-50'}`}>
        {tag}
      </span>
      <h4 className="font-bold text-[#06322b] mt-3 mb-1">{title}</h4>
      <p className="text-[10px] text-gray-400 mb-4 font-medium">Deskripsi tantangan...</p>
      <Button className="w-full bg-[#5E8B7E] text-[#032119] font-bold py-5 rounded-xl text-xs hover:bg-[#4d7268]">
        Lihat Detail <ArrowRight className="w-3 h-3 ml-2" />
      </Button>
    </Card>
  );
}