import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function FeatureSection() {
  const features = [
    { title: "Digitalisasi", desc: "Ubah dokumen fisik menjadi format digital." },
    { title: "Standarisasi", desc: "Alur dokumen yang seragam untuk semua." },
    { title: "Monitoring", desc: "Pantau status klaim secara real-time." },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Card key={i}>
            <CardHeader>
              <h3 className="text-xl font-bold">{f.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}