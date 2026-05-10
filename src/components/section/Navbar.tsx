"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileDropdown from "@/components/ui/profile-dropdown";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">

      {/* CONTAINER */}
      <div className="w-full px-6 md:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#06322b] font-heading tracking-tight hover:opacity-80 transition-opacity"
        >
          Kosongin
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 md:gap-10">

          {/* NAVIGATION */}
          <nav className="flex items-center gap-8">

            <Link
              href="#fitur"
              className="text-sm text-gray-400 font-medium hover:text-[#568F87] transition-colors"
            >
              Fitur
            </Link>

            <Link
              href="#cara-kerja"
              className="text-sm text-gray-400 font-medium hover:text-[#568F87] transition-colors"
            >
              Cara Kerja
            </Link>

            <Link
              href="#komunitas"
              className="text-sm text-gray-400 font-medium hover:text-[#568F87] transition-colors"
            >
              Komunitas
            </Link>

            {!isLoggedIn && (
              <Link
                href="/register"
                className="text-sm text-gray-400 font-medium hover:text-[#568F87] transition-colors"
              >
                Daftar
              </Link>
            )}
          </nav>

          {/* BUTTON / PROFILE */}
          {isLoggedIn ? (
            <ProfileDropdown />
          ) : (
            <Link href="/login">
              <button className="bg-[#568F87] hover:bg-[#4a7a73] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all active:scale-95">
                Mulai Sekarang
              </button>
            </Link>
          )}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-gray-100 bg-white px-6 py-6 shadow-lg z-50">

          <nav className="flex flex-col gap-6">

            <Link
              href="#fitur"
              className="text-base font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fitur
            </Link>

            <Link
              href="#cara-kerja"
              className="text-base font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cara Kerja
            </Link>

            <Link
              href="#komunitas"
              className="text-base font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Komunitas
            </Link>

            {!isLoggedIn && (
              <Link
                href="/register"
                className="text-base font-medium text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Daftar
              </Link>
            )}

            {!isLoggedIn && (
              <Link href="/login">
                <button className="w-full bg-[#568F87] text-white py-4 rounded-xl font-semibold">
                  Mulai Sekarang
                </button>
              </Link>
            )}

          </nav>

        </div>
      )}

    </header>
  );
}