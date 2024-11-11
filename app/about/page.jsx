"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didnot listen. She packed her seven but they failed to capture it by now
`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="flex flex-col text-center px-36 items-center justify-center min-h-screen">
      <h1 class="mb-[-200px] text-4xl font-extrabold text-center leading-none tracking-tight bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent md:text-5xl lg:text-6xl dark:text-white">
        About Us
      </h1>
      <div className="flex items-center justify-center min-h-screen">
        <TextGenerateEffect
          filter="true"
          className="text-center px-14"
          words={words}
        />
      </div>
    </div>
  );
}
