"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ComplaintCard from "@/components/ComplaintCard";
import { useEffect, useState } from "react";
import { getMyComplaints } from "@/lib/api";

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token") || ""
      : "";

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getMyComplaints(token);
    setData(res);
  };

  return (
    <div className="text-black">
      <DashboardLayout>
        <h2 className="text-2xl font-bold mb-6 text-black">My Complaints</h2>

        <div className="grid gap-4">
          {data.map((c) => (
            <ComplaintCard key={c._id} c={c} />
          ))}
        </div>
      </DashboardLayout>
    </div>
  );
}