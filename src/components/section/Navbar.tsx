"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileDropdown from "@/components/ui/profile-dropdown";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f3] border-b">
      <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center py-10">

        {/* LOGO (KIRI) */}
        <Link href="/">
          <Image
            src="/Kosongin.svg"
            alt="Kosongin Logo"
            width={240}
            height={80}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* MENU + BUTTON */}
        <div className="flex items-center gap-10">

          <nav className="hidden md:flex gap-12 text-2xl">
            <Link href="#fitur" className="hover:text-[#568F87] transition-colors">Fitur</Link>
            <Link href="#cara-kerja" className="hover:text-[#568F87] transition-colors">Cara Kerja</Link>
            <Link href="#komunitas" className="hover:text-[#568F87] transition-colors">Komunitas</Link>
            
            {/* Link Daftar hanya muncul jika BELUM login */}
            {!isLoggedIn && (
              <Link href="/register" className="hover:text-[#568F87] transition-colors">Daftar</Link>
            )}
          </nav>

          {/* KONDISIONAL RENDER: FOTO PROFIL VS TOMBOL DAFTAR */}
          {isLoggedIn ? (
            <ProfileDropdown />
          ) : (
            <Link href="/login">
              <button className="bg-[#568F87] text-white font-bold px-6 py-4 rounded-lg text-xl hover:bg-[#4a7a73] transition-all active:scale-95">
                Mulai Sekarang ⮕
              </button>
            </Link>
          )}

        </div>
      </div>
    </header>
  );
}