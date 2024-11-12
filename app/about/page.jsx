"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Team Tech Janta Party is a forward-thinking and dynamic group of innovators united by a shared commitment to solving impactful real-world challenges. Our team has diverse expertise spans a wide array of cutting-edge technologies, including web development, mobile applications, artificial intelligence and machine learning, and the transformative realm of Web3. Driven by a deep sense of purpose, we work collaboratively to craft solutions that address pressing societal needs, empower individuals, and improve everyday life. Whether we are designing intuitive mobile apps, harnessing the potential of AI/ML, or pioneering in decentralized technologies, our mission is to create meaningful, lasting change in the world. Through dedication, creativity, and a relentless pursuit of excellence, we are focused on building solutions that truly matter
`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="flex flex-col text-center sm:px-36 items-center justify-center min-h-screen">
      <h1 class="mb-[-200px] text-4xl font-extrabold text-center leading-none tracking-tight bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent md:text-5xl lg:text-6xl dark:text-white">
        About Us
      </h1>
      <div className="flex items-center justify-center min-h-screen">
        <TextGenerateEffect
          filter="true"
          className="text-center capitalize px-2 sm:px-14"
          words={words}
        />
      </div>
    </div>
  );
}
