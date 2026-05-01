"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LoginNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Tracking", href: "/tracking" },
    { name: "Impulse Shield", href: "/shield" },
    { name: "Komunitas", href: "/komunitas" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-12 py-5 flex items-center justify-between sticky top-0 z-50">
      {/* KIRI: HANYA LOGO */}
      <Link href="/dashboard" className="text-2xl font-bold text-[#06322b] font-heading tracking-tight">
        Kosongin
      </Link>

      {/* KANAN: MENU NAVIGASI + FOTO PROFIL */}
      <div className="flex items-center gap-10">
        {/* Navigasi Menu bergeser ke kanan */}
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

        {/* FOTO PROFIL */}
        <div className="group relative cursor-pointer ml-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#568F87] transition-all shadow-sm">
            <Image 
              src="/profile.png"
              alt="User Profile"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          
          <div className="absolute top-12 right-0 bg-white shadow-xl border border-gray-100 rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 min-w-[120px]">
            <p className="text-xs font-bold text-[#06322b]">Profil Saya</p>
          </div>
        </div>
      </div>
    </nav>
  );
}