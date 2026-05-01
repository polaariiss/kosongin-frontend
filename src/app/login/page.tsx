"use client";

import Navbar from "@/components/section/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email.includes("@")) {
      newErrors.email = "Format email tidak valid. Coba periksa kembali.";
      hasError = true;
    }

    if (password.length < 1) {
      newErrors.password = "Format password tidak valid. Coba periksa kembali.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
    } else {
      setErrors({ email: "", password: "" });
      localStorage.setItem("user_session", "true");
      // Navigasi ke dashboard folder
      router.push("/dashboard"); 
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 bg-white rounded-[32px] shadow-sm border-none">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl font-bold mb-2 text-black">Log in</h1>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              Please enter your email and password to log in to your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1">Email</label>
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
              <label className="text-sm font-bold ml-1">Password</label>
              <Input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="••••••••" 
                className={`rounded-xl py-6 transition-all ${
                  errors.password 
                    ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" 
                    : "border-gray-300 focus:border-[#568F87]"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1 ml-1 font-medium italic">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>Remember me</span>
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
              Daftar
            </Link>
          </p>
        </Card>
      </main>
    </div>
  );
}