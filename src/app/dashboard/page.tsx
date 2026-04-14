export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard Kosongin</h1>
      <p className="text-gray-600 mt-2">Selamat datang! Ini adalah protected route.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-700">Total Project</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl border border-green-100">
          <h3 className="font-bold text-green-700">Status Konsistensi</h3>
          <p className="text-2xl font-bold">85%</p>
        </div>
      </div>
    </div>
  );
}