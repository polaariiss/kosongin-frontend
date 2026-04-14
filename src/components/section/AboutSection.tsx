export default function AboutSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Kosongin</h2>
          <p className="text-gray-600 leading-relaxed">
            Kosongin hadir untuk mendigitalisasi alur kerja dan standarisasi dokumen 
            agar setiap proses menjadi lebih transparan dan efisien bagi semua pihak.
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 font-medium">Illustrasi About</span>
        </div>
      </div>
    </section>
  );
}