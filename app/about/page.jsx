"use client";

import {
  HoverEffect,
  HoverEffectWithoutLink,
} from "@/components/ui/card-hover-effect";
import { Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const projects = [
  {
    title: "Med-o-Chat",
    description:
      "Real-time consultations, video calls, and secure document sharing with certified doctors.",
    link: "#",
  },
  {
    title: "Med-o-Shop",
    description:
      "Easily order genuine medications, with refill reminders, transparent pricing, and home delivery.",
    link: "#",
  },
  {
    title: "Med-o-Lens",
    description:
      "Digitize and store all medical records securely, with easy sharing for quick access during consultations.",
    link: "#",
  },
  {
    title: "Med-o-AI",
    description:
      "Get answers to medical questions instantly with our AI assistant, which provides personalized insights.",
    link: "#",
  },
  {
    title: "Med-o-Coach",
    description:
      "Personalized health coaching, reminders, and wellness tips tailored to your health profile.",
    link: "#",
  },
];

export default function TextGenerateEffectDemo() {
  return (
    <div className="flex flex-col text-center px-6 min-h-screen">
      <h1 class="mt-8 text-4xl font-extrabold text-center leading-none tracking-tight bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent md:text-5xl lg:text-6xl dark:text-white">
        About Us
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-col space-y-8 justify-center min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="flex lg:flex-row flex-col lg:gap-2 my-8 lg:my-12">
            <TextGenerateEffect
              filter="true"
              className="text-center text-3xl md:text-4xl lg:text-5xl text-white"
              words={"We are team "}
            />
            <TextGenerateEffect
              filter="true"
              duration={0.6}
              className="text-center text-3xl md:text-4xl lg:text-5xl text-blue-500"
              words={"Tech Janta Party"}
            />
          </div>
          <TextGenerateEffect
            filter="true"
            duration={0.9}
            className="text-center text-balance text-xl lg:text-2xl text-purple-300"
            words={
              "A dynamic team united by a passion for solving real-world problems that impact lives. With expertise spanning web, mobile, AI/ML, and Web3 technologies, we are committed to making a difference by building solutions that matter."
            }
          />
        </section>
        <section>
          <Highlight className="px-2 text-center font-bold text-2xl lg:text-3xl text-white">
            Our Projects
          </Highlight>
          <div className="w-full max-w-5xl mx-auto">
            <TextGenerateEffect
              filter="true"
              duration={0.9}
              className="mt-6 lg:mt-8 text-balance text-2xl lg:text-3xl text-green-400 flex justify-start"
              words={"Med-o-Next"}
            />
            <p className="my-4 text-white text-lg text-balance text-start font-medium">
              Our flagship project, Med-o-Next, is a pioneering all-in-one
              healthcare platform built to meet diverse medical needs in one
              accessible place. From booking doctor appointments to ordering
              medications, Med-o-Next is designed to make healthcare seamless.
              Here&apos;s how we&apos;re changing healthcare:
            </p>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffectWithoutLink items={projects} />
            </div>
          </div>
        </section>
        <section>
          <Highlight className="px-2 text-center font-bold text-2xl lg:text-3xl text-white">
            Our Achievements
          </Highlight>
          <div className="mb-20">
            <p className="my-6 text-white text-lg lg:text-xl text-center text-balance font-medium">
              We are proud to announce that Tech Janta Party was awarded First
              Place at Dev Nexus 1.0 hackathon, marking a milestone on our
              journey of making healthcare more accessible, organized, and
              efficient.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
