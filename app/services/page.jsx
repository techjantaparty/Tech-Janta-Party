import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

export default function EvervaultCardDemo() {
  const cardData = [
    {
      text: "We build both Web2.0 and Web3.0 websites with proficiency using top graded frameworks",
      cardContent: "Web Dev",
    },
    {
      text: "We develop Android apps with top-rated tools, delivering high-quality and user-friendly solutions",
      cardContent: "Android",
    },
    {
      text: "We develop AI tools using top-rated technologies to deliver efficient and innovative solutions",
      cardContent: "AI-ML",
    },
  ];

  return (
    <div className="px-4">
      <h1 className="mt-8 text-3xl font-extrabold text-center leading-tight tracking-tight bg-gradient-to-r from-gray-400 to-yellow-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
        Our Services
      </h1>

      <div className="grid grid-cols-1 gap-2 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="border border-white/40 dark:border-gray-700 rounded-lg flex flex-col items-center w-full max-w-xs mx-auto p-6 relative h-auto"
          >
            <Icon className="absolute h-8 w-8 -top-4 -left-4 dark:text-white text-gray-200 sm:h-8 sm:w-8" />
            <Icon className="absolute h-8 w-8 -bottom-4 -left-4 dark:text-white text-gray-200 sm:h-8 sm:w-8" />
            <Icon className="absolute h-8 w-8 -top-4 -right-4 dark:text-white text-gray-200 sm:h-8 sm:w-8" />
            <Icon className="absolute h-8 w-8 -bottom-4 -right-4 dark:text-white text-gray-200 sm:h-8 sm:w-8" />

            <EvervaultCard
              className="text-center w-full mt-4"
              text={data.cardContent}
            />

            <h2 className="text-base font-semibold text-center mt-4 text-gray-100 dark:text-white sm:text-lg md:text-base lg:text-lg">
              {data.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
