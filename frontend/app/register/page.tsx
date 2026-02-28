"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    await registerUser(form);
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500 text-black">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Register
        </h2>

        <input
          className="w-full border p-2 mb-4 rounded placeholder:text-gray-400"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

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
          className="w-full bg-green-600 text-black py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}