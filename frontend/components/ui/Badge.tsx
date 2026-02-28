export default function Badge({ status }: { status: string }) {
  const colors: any = {
    pending: "bg-yellow-100 text-yellow-700",
    "in-progress": "bg-blue-100 text-blue-700",
    resolved: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-sm ${colors[status]}`}
    >
      {status}
    </span>
  );
}