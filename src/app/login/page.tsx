"use client";

import Navbar from "@/components/section/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { postAuthLogin } from "@/api";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear old session
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("user_name");
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;
    const newErrors = { identifier: "", password: "" };

    if (!identifier) {
      newErrors.identifier = "Email atau Nickname wajib diisi.";
      hasError = true;
    }

    if (!password) {
      newErrors.password = "Password wajib diisi.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const isEmail = identifier.includes("@");
      const payload = {
        password,
        [isEmail ? "email" : "nickname"]: identifier,
      };

      const response = await postAuthLogin({
        body: payload
      });

      if (response.data && response.data.success) {
        const { accessToken, refreshToken } = response.data.data || {};
        if (accessToken) {
          Cookies.set("accessToken", accessToken, { expires: 1/96 }); // 15 mins
          Cookies.set("refreshToken", refreshToken || "", { expires: 7 });
          
          // You might want to decode the token to get role, but for now redirect to dashboard
          router.push("/dashboard");
        }
      }
    } catch (error: any) {
      console.error("Login error:", error);
      const message = error.response?.data?.message || "Login gagal. Periksa kembali kredensial Anda.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 bg-white rounded-[32px] shadow-sm border-none">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-black">Log in</h1>
            <p className="text-gray-600 text-sm px-4 leading-relaxed">
              Please enter your email and password to log in to your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1 text-[#1A3C34]">Email/Nickname</label>
              <Input 
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="example@mail.com or nickname" 
                className={`rounded-xl py-6 ${errors.identifier ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.identifier && <p className="text-red-500 text-[10px] italic">{errors.identifier}</p>}
            </div>
            
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1 text-[#1A3C34]">Password</label>
              <div className="relative">
                <Input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className={`rounded-xl py-6 pr-12 ${errors.password ? "border-red-500" : "border-gray-300"}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-[10px] italic">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 accent-[#568F87]" />
                Remember me
              </label>
              <Link href="/forgot-password" title="Lupa password?" className="font-bold underline text-black hover:text-[#568F87]">
                Lupa password?
              </Link>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#9bbab1] hover:bg-[#8aa79e] text-white font-bold py-7 rounded-xl text-lg border-none shadow-sm"
            >
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </form>

          {/* FOOTER LOGIN (SESUAI FIGMA) */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link href="/register" className="font-bold underline text-[#568F87] hover:opacity-80">
                Daftar
              </Link>
            </p>
            
            <div className="mt-4">
              <Link href="/admin/login" title="Log in sebagai Admin" className="text-[11px] font-bold underline text-black hover:text-[#568F87] transition-colors">
                Log in sebagai Admin
              </Link>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}