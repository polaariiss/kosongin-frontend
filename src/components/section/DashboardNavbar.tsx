"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "@/components/ui/profile-dropdown";

export default function DashboardNavbar() {
  return (
    <header className="bg-[#f5f5f3] border-b border-gray-200">
      <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center py-6">
        {/* LOGO */}
        <Link href="/dashboard">
          <Image
            src="/Kosongin.svg"
            alt="Kosongin Logo"
            width={180}
            height={60}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* NAVIGASI DASHBOARD */}
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-600">
            <div className="relative">
              <Link href="/dashboard" className="text-black font-bold">Dashboard</Link>
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#568F87]"></div>
            </div>
            <Link href="/tracking" className="hover:text-[#568F87] transition-colors">Tracking</Link>
            <Link href="/impulse-shield" className="hover:text-[#568F87] transition-colors">Impulse Shield</Link>
            <Link href="/komunitas" className="hover:text-[#568F87] transition-colors">Komunitas</Link>
          </nav>

          {/* FOTO PROFIL (profile.png) */}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}