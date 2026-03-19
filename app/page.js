"use client"

import Navbar from "../components/Navbar";
import MonthCard from "../components/MonthCard";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import RomanticGlow from "@/components/RomanticGlow";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-pink-100 to-white">
      <FloatingHearts />

      <Navbar />

      <Hero />

      <RomanticGlow />

      <Timeline />

      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600">
          Nossos meses
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {months.map((m, i) => (
            <MonthCard key={i} month={m} id={i + 1} />
          ))}
        </div>
      </section>
    </main>
  );
}
