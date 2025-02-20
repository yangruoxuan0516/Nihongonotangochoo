"use client";  // Required to use React state/hooks in Next.js App Router

import { useState } from "react";
import FlipCard from "@/components/FlipCard";
import { words } from "../data/words";

export default function Home() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % words.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + words.length) % words.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <FlipCard word={words[index].word} meaning={words[index].meaning} />

      <div className="flex gap-4 mt-4">
        <button onClick={prevCard} className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md">&lt;=</button>
        <button onClick={nextCard} className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md">=&gt;</button>
      </div>
    </div>
  );
}


