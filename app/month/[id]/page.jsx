"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import PolaroidGallery from "@/components/PolaroidGallery";

export default function MonthPage() {
  const params = useParams();
  const id = Number(params.id);

  const router = useRouter();

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const isLocked = id > currentMonth;

  const [memories, setMemories] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = "https://server-amado.onrender.com";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const loadMemories = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`${API}/memories/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setMemories(data);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    loadMemories();
  }, [loadMemories]);

  async function sendMemory() {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você precisa estar logado.");
      return;
    }

    if (!text.trim() && !file) {
      alert("Escreva algo ou envie uma foto");
      return;
    }

    setLoading(true);

    const form = new FormData();
    form.append("text", text);
    form.append("month", id);

    if (file) {
      form.append("image", file);
    }

    try {
      const res = await fetch(`${API}/memories`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: form,
      });

      if (!res.ok) throw new Error();

      setText("");
      setFile(null);

      await loadMemories();
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar memória");
    }

    setLoading(false);
  }

  if (isLocked) {
    return (
      <div className="h-screen flex items-center justify-center bg-pink-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            🔒 Mês bloqueado
          </h1>
          <p className="text-gray-600">Esse mês ainda não chegou</p>
        </div>
      </div>
    );
  }

  // 🔥 SEPARAÇÃO INTELIGENTE
  const photos = memories
    .filter((m) => m.imageUrl)
    .map((m) => ({
      src: m.imageUrl,
      caption: m.message || "",
    }));

  const texts = memories.filter((m) => m.message && !m.imageUrl);

  return (
    <div className="min-h-screen bg-pink-50 p-4 sm:p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Memórias do mês {id}
      </h1>

      {/* FORM */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Nova memória</h2>

        <textarea
          className="w-full border rounded p-2 mb-4 resize-none"
          placeholder="Escreva algo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        <button
          onClick={sendMemory}
          disabled={loading}
          className="bg-pink-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Postar memória
        </button>
      </div>

      {/* 🖼️ GALERIA POLAROID */}
      {photos.length > 0 && <PolaroidGallery photos={photos} />}

      {/* 📝 TEXTOS */}
      {texts.length > 0 && (
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          {texts.map((m) => (
            <div
              key={m.id}
              className="bg-white p-4 rounded-xl shadow text-center"
            >
              <p className="text-gray-700">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}