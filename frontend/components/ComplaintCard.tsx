import Card from "./ui/Card";
import Badge from "./ui/Badge";

export default function ComplaintCard({ c }: any) {
  return (
    <Card>
      <div className="flex justify-between">
        <h3 className="font-bold">{c.category}</h3>
        <Badge status={c.status} />
      </div>

      <p className="text-gray-600 mt-2">{c.description}</p>

      <p className="text-sm mt-2">
        Priority: <b>{c.priority}</b>
      </p>
    </Card>
  );
}