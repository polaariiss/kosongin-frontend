import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/section/Navbar";

export const metadata: Metadata = {
  title: "Kosongin - Digital Transformation",
  description: "Digitalisasi dan standarisasi aset digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-10 text-center border-t">
          <p>© 2026 Kosongin. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}