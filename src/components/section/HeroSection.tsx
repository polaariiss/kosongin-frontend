import { Button } from "@/components/ui/button"; 

export default function HeroSection() {
  return (
    <section className="py-20 text-center bg-gray-50">
      <h1 className="text-5xl font-extrabold text-gray-900">
        Selamat Datang di Kosongin
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Platform untuk membantu kamu mengelola aset digital dengan lebih konsisten.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        {/* GUNAKAN HURUF BESAR SESUAI IMPORT */}
        <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
          Mulai Sekarang
        </Button>
      </div>
    </section>
  );
}