"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col items-center p-6 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-50/60 blur-[100px] rounded-full -z-10"></div>

      <Card className="w-full max-w-md p-8 md:p-12 bg-white rounded-[32px] shadow-sm border border-gray-50 mt-10">
        <h1 className="font-heading text-4xl font-bold text-center text-[#06322b] mb-4">Sign Up</h1>
        <p className="text-gray-500 text-xs text-center mb-8 leading-relaxed px-4">
          Please enter your name, username, email, and password to register an account.
        </p>

        <form className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#06322b]">Nama Lengkap</label>
            <Input type="text" placeholder="Your Name" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#06322b]">Email</label>
            <Input type="email" placeholder="example@gmail.com" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#06322b]">Password</label>
            <Input type="password" placeholder="••••••" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-[#06322b]">Konfirmasi Password</label>
            <Input type="password" placeholder="••••••" />
          </div>

          <div className="flex items-start gap-2 py-2">
            <input type="checkbox" className="mt-1 rounded border-gray-300 text-[#5E8B7E] focus:ring-[#5E8B7E]" />
            <span className="text-[10px] leading-tight text-gray-600 font-medium">
              Saya bersedia menerima email pengingat harian untuk mencatat konsumsi.
            </span>
          </div>

          <Button className="w-full bg-[#5E8B7E] hover:bg-[#4d7268] text-[#032119] font-bold py-7 rounded-2xl border-none mt-2">
            Register
          </Button>
        </form>
      </Card>

      <p className="mt-6 text-sm text-gray-500 mb-10">
        Sudah punya akun? <Link href="/login" className="font-bold text-[#06322b] hover:underline">Log in</Link>
      </p>
    </div>
  );
}