"use client";

import Navbar from "@/components/section/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Reset session saat masuk ke halaman login
  useEffect(() => {
    localStorage.removeItem("user_session");
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;
    const newErrors = { email: "", password: "" };

    // Ambil data yang tersimpan dari pendaftaran
    const registeredEmail = localStorage.getItem("user_email");
    const registeredPassword = localStorage.getItem("user_password");

    // 1. Validasi Keberadaan Akun
    if (!email) {
      newErrors.email = "Email wajib diisi.";
      hasError = true;
    } else if (!email.includes("@")) {
      newErrors.email = "Format email tidak valid.";
      hasError = true;
    } else if (registeredEmail && email !== registeredEmail) {
      // Feedback jika email tidak ditemukan di data pendaftaran
      newErrors.email = "Akun tidak ditemukan. Silakan daftar terlebih dahulu.";
      hasError = true;
    }

    // 2. Validasi Password
    if (!password) {
      newErrors.password = "Password wajib diisi.";
      hasError = true;
    } else if (registeredPassword && password !== registeredPassword) {
      // Feedback jika password tidak cocok dengan yang didaftarkan
      newErrors.password = "Password salah. Coba periksa kembali.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
    } else {
      // Login Berhasil
      setErrors({ email: "", password: "" });
      localStorage.setItem("user_session", "true");
      router.push("/dashboard"); 
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 bg-white rounded-[32px] shadow-sm border-none">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-black">Log in</h1>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              Silakan masukkan email dan password akun terdaftar Anda.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1 text-[#1A3C34]">Email</label>
              <Input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="example@gmail.com" 
                className={`rounded-xl py-6 transition-all ${
                  errors.email 
                    ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" 
                    : "border-gray-300 focus:border-[#568F87]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-1 ml-1 font-medium italic">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1 text-[#1A3C34]">Password</label>
              <div className="relative">
                <Input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className={`rounded-xl py-6 pr-12 transition-all ${
                    errors.password 
                      ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" 
                      : "border-gray-300 focus:border-[#568F87]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#568F87] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1 ml-1 font-medium italic">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 accent-[#568F87]" />
                <span className="text-xs">Remember me</span>
              </label>
              <Link 
                href="/forgot-password" 
                className="font-bold underline text-xs text-black hover:text-[#568F87]"
              >
                Lupa password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#568F87] hover:bg-[#4a7a73] text-white font-bold py-7 rounded-xl text-lg transition-all active:scale-95 shadow-md border-none"
            >
              Log in
            </Button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link href="/register" className="font-bold underline text-[#568F87] hover:opacity-80">
              Daftar di sini
            </Link>
          </p>
        </Card>
      </main>
    </div>
  );
}