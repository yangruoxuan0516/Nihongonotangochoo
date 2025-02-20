"use client";

import { useState } from "react";

interface FlipCardProps {
  word: string;
  meaning: string;
}

export default function FlipCard({ word, meaning }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-40 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Show Front when not flipped */}
      {!flipped && <div className="absolute w-full h-full flex items-center justify-center"> {word} </div>}

      {/* Show Back when flipped */}
      {flipped && <div className="absolute w-full h-full flex items-center justify-center bg-gray-200 text-black text-xl font-semibold rounded-lg"> {meaning} </div>}
    </div>
  );
}
