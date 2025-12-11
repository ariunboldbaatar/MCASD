"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [tags, setTags] = useState([]);

  async function load() {
    const { data } = await supabase.from("tags").select("*").order("updated_at");
    setTags(data || []);
  }

  useEffect(() => {
    load();

    const channel = supabase
      .channel("tags-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tags" },
        (payload) => {
          console.log("REALTIME EVENT:", payload);

          if (payload.eventType === "INSERT") {
            setTags((prev) => [...prev, payload.new]);
          }

          if (payload.eventType === "UPDATE") {
            setTags((prev) =>
              prev.map((row) => (row.id === payload.new.id ? payload.new : row))
            );
          }

          if (payload.eventType === "DELETE") {
            setTags((prev) => prev.filter((row) => row.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Realtime Dashboard</h1>

      <table className="min-w-full">
        <thead>
          <tr><th>Tag</th><th>Value</th><th>Status</th></tr>
        </thead>
        <tbody>
          {tags.map((t) => (
            <tr key={t.id}>
              <td>{t.tag}</td>
              <td>{t.value}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
