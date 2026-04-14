import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">Kosongin</Link>
      </div>
      <div className="space-x-6 font-medium">
        <Link href="/" className="hover:text-blue-500">Beranda</Link>
        <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        <Link href="/login" className="px-4 py-2 border rounded-md">Masuk</Link>
      </div>
    </nav>
  );
}