"use client";

import { useState } from "react";

export default function EngineerForm() {
  const [tag, setTag] = useState("");
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  async function sendData() {
    const res = await fetch("/api/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tag, value, status })
    });

    const result = await res.json();
    alert(result.success ? "Амжилттай!" : "Алдаа!");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Engineer Input</h1>

      <input placeholder="Tag" className="border p-2 mb-2" onChange={(e) => setTag(e.target.value)} />
      <input placeholder="Value" className="border p-2 mb-2" onChange={(e) => setValue(e.target.value)} />
      <input placeholder="Status" className="border p-2 mb-2" onChange={(e) => setStatus(e.target.value)} />

      <button className="bg-blue-600 text-white p-2" onClick={sendData}>
        Submit
      </button>
    </div>
  );
}
