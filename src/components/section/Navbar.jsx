export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Kosongin</h1>
      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
      </div>
    </nav>
  );
}