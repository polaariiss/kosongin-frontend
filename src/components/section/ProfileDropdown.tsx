"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Key } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProfileDropdown() {
  const router = useRouter();
  
  // State untuk data user dinamis
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("user@gmail.com");
  const [isReminderActive, setIsReminderActive] = useState(false);

  useEffect(() => {
    // Ambil data asli dari localStorage yang disimpan saat Register/Login
    const savedName = localStorage.getItem("user_name");
    const savedEmail = localStorage.getItem("user_email");
    
    if (savedName) setUserName(savedName);
    if (savedEmail) setUserEmail(savedEmail);
  }, []);

  const handleLogout = () => {
    // Hapus sesi tapi biarkan data profil tetap ada di storage (opsional)
    localStorage.removeItem("user_session");
    router.push("/login");
  };

  // Generate username otomatis dari Nama Lengkap (Andika Pratama -> @andikapratama)
  const displayUsername = userName.toLowerCase().replace(/\s/g, "");

  return (
    <Card className="w-[320px] p-5 bg-[#FFFCF9] rounded-[24px] shadow-2xl border-none absolute right-0 mt-3 z-50 animate-in fade-in zoom-in duration-200">
      {/* Profil Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col overflow-hidden">
          <h4 className="font-bold text-[#1A3C34] text-lg leading-tight truncate">
            {userName}
          </h4>
          <p className="text-[10px] text-gray-500 truncate">
            @{displayUsername} · {userEmail}
          </p>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#D4E4BC] flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm ml-3">
           <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} 
            alt="avatar" 
            className="w-full h-full object-cover"
           />
        </div>
      </div>

      <hr className="border-pink-100/50 mb-4" />

      {/* Email Reminder Section */}
      <div className="space-y-4 mb-6">
        <h5 className="text-[10px] font-bold text-[#5E8B7E] tracking-[0.15em] uppercase">Email Reminder</h5>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#1A3C34] font-semibold">Terima email reminder</span>
          {/* Custom Switch Toggle */}
          <button 
            onClick={() => setIsReminderActive(!isReminderActive)}
            className={`w-10 h-5 rounded-full transition-all duration-300 relative focus:outline-none ${
              isReminderActive ? 'bg-[#5E8B7E]' : 'bg-gray-300'
            }`}
          >
            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300 ${
              isReminderActive ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#1A3C34] font-semibold">Jam pengiriman reminder</span>
          <span className="text-[12px] font-bold bg-[#FFE4E6] text-[#1A3C34] px-3 py-1 rounded-lg">
            20 : 00
          </span>
        </div>
      </div>

      <hr className="border-pink-100/50 mb-4" />

      {/* Action Buttons */}
      <div className="space-y-2">
        <button className="flex items-center gap-3 w-full text-[#1A3C34] hover:bg-gray-50 p-2.5 rounded-xl transition-all group">
          <div className="w-6 flex justify-center text-gray-400 group-hover:text-[#1A3C34]">
             <Key size={18} />
          </div>
          <span className="text-sm font-bold">Ganti password</span>
        </button>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-[#9B2C2C] hover:bg-red-50 p-2.5 rounded-xl transition-all"
        >
          <div className="w-6 flex justify-center">
            <LogOut size={18} />
          </div>
          <span className="text-sm font-bold">Logout</span>
        </button>
      </div>
    </Card>
  );
}