"use client";

import { useState } from "react";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    const res = await loginUser(form);

    if (!res?.token) return alert("Login failed");

    localStorage.setItem("token", res.token);
    localStorage.setItem("token", res.token);
  localStorage.setItem("user", JSON.stringify(res.user));

    if (res?.user?.role === "admin") {
      router.push("/dashboard");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-black">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          HostelOps Login
        </h2>

        <input
          className="w-full border p-2 mb-4 rounded placeholder:text-gray-400"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="w-full border p-2 mb-6 rounded placeholder:text-gray-400"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={submit}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}