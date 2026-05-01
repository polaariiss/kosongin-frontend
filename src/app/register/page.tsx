import Navbar from "@/components/section/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 my-10">
        <Card className="w-full max-w-lg p-10 bg-white rounded-[32px] shadow-sm border-none">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl font-bold mb-2 text-black">Sign Up</h1>
            <p className="text-gray-600 text-sm">
              Please enter your name, username, email, and password to register an account.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold">Nama Lengkap</label>
              <Input placeholder="Your Name" className="rounded-xl py-6" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold">Email</label>
              <Input type="email" placeholder="example@gmail.com" className="rounded-xl py-6" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold">Password</label>
              <Input type="password" placeholder="••••••••" className="rounded-xl py-6" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold">Konfirmasi Password</label>
              <Input type="password" placeholder="••••••••" className="rounded-xl py-6" />
            </div>

            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-2 cursor-pointer text-sm">
                <input type="checkbox" className="mt-1 rounded border-gray-300" />
                <span>Remember me</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer text-sm leading-tight">
                <input type="checkbox" className="mt-1 rounded border-gray-300" />
                <span>Saya bersedia menerima email pengingat harian untuk mencatat konsumsi.</span>
              </label>
            </div>

            <Button className="w-full bg-[#568F87] hover:bg-[#4a7a73] text-white font-bold py-7 rounded-xl text-lg mt-4">
              Register
            </Button>
          </form>

          <p className="text-center mt-8 text-sm">
            Sudah punya akun? <Link href="/login" className="font-bold underline">Log in</Link>
          </p>
        </Card>
      </main>
    </div>
  );
}