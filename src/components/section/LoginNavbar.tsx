"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileDropdown from "./ProfileDropdown"; // Pastikan path filenya benar

export default function LoginNavbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Tracking", href: "/tracking" },
    { name: "Impulse Shield", href: "/shield" },
    { name: "Komunitas", href: "/komunitas" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-12 py-5 flex items-center justify-between sticky top-0 z-50">
      {/* KIRI: LOGO */}
      <Link href="/dashboard" className="text-2xl font-bold text-[#06322b] font-heading tracking-tight">
        Kosongin
      </Link>

      {/* KANAN: MENU NAVIGASI + FOTO PROFIL */}
      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-all duration-200 relative pb-1 ${
                  isActive 
                    ? "text-black font-bold border-b-2 border-[#568F87]" 
                    : "text-gray-400 font-medium hover:text-[#568F87]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* FOTO PROFIL DENGAN DROPDOWN */}
        <div className="relative ml-4">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all shadow-sm focus:outline-none ${
              isDropdownOpen ? "border-[#568F87]" : "border-transparent hover:border-[#568F87]"
            }`}
          >
            <Image 
              src="/profile.png" // Pastikan file profile.png ada di folder public
              alt="User Profile"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </button>
          
          {/* LOGIKA DROPDOWN */}
          {isDropdownOpen && (
            <>
              {/* Overlay transparan untuk menutup dropdown saat klik di luar */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsDropdownOpen(false)} 
              />
              
              {/* Komponen Dropdown yang kita buat tadi */}
              <div className="absolute right-0 top-12 z-50 animate-in fade-in zoom-in duration-200">
                <ProfileDropdown />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}