export default function HowItWorksSection() {
  const steps = ["Upload Dokumen", "Verifikasi Sistem", "Persetujuan", "Selesai"];

  return (
    <section className="py-16 bg-blue-600 text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Cara Kerja</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center max-w-[150px]">
              <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <p className="font-medium text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}