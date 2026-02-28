"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Admin() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token") || ""
      : "";

  useEffect(() => {
    checkAccess();
    load();
  }, []);

  const checkAccess = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
      return;
    }

    const parsed = JSON.parse(user);

    if (parsed.role !== "admin") {
      router.push("/dashboard");
    }
  };

  const load = async () => {
    const res = await fetch(`${API}/admin/complaints`, {
      headers: { Authorization: token },
    });

    const d = await res.json();
    setData(d);
  };

  return (
    <div className="text-black">
      <DashboardLayout>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        {data.map((c) => (
          <div key={c._id} className="bg-white p-4 rounded shadow mb-3">
            <p className="font-bold">{c.category}</p>
            <p>{c.description}</p>
            <p>Status: {c.status}</p>
          </div>
        ))}
      </DashboardLayout>
    </div>
  );
}