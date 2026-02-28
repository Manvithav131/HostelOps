export default function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        <span>User</span>
      </div>
    </div>
  );
}