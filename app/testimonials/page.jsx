"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export default function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[100vh] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            {/* Gradient Shiny Heading */}
            <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text animate-gradient-shine mb-8">
                Testimonials
            </h1>
            <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        quote: "The Android app development service was exceptional! The team delivered a user-friendly solution tailored perfectly to our needs.",
        name: "Rajesh Kumar",
        title: "Founder, TechVision India",
    },
    {
        quote: "Their Web3.0 expertise helped us transition smoothly into blockchain-based solutions, setting us apart in the industry.",
        name: "Priya Nair",
        title: "CEO, Digital Innovations",
    },
    {
        quote: "Outstanding AI tools that transformed our data analysis process. The team showed great dedication and professionalism.",
        name: "Anjali Mehta",
        title: "Data Scientist, NextGen Analytics",
    },
    {
        quote: "They developed a feature-rich Android app for our startup that exceeded our expectations. Highly recommended!",
        name: "Vikram Singh",
        title: "Co-Founder, QuickMart",
    },
    {
        quote: "The AI-powered chatbot they delivered has streamlined our customer support system tremendously.",
        name: "Sneha Verma",
        title: "Operations Head, Elite Retail",
    },
    {
        quote: "Their Web2.0 development expertise brought our e-commerce vision to life, complete with a sleek and modern design.",
        name: "Arun Rao",
        title: "Owner, Rao Retail Ventures",
    },
    {
        quote: "Our Android app now stands out in the market, thanks to their innovative approach and technical proficiency.",
        name: "Ramesh Gupta",
        title: "Product Manager, FitWell Apps",
    },
    {
        quote: "The Web3.0 platform they developed has revolutionized our business operations. Truly a game-changer!",
        name: "Divya Shah",
        title: "CTO, CryptoConnect",
    },
    {
        quote: "Impressed with the AI tool's accuracy and efficiency. It has significantly boosted our team's productivity.",
        name: "Nitin Joshi",
        title: "Lead Engineer, Smart Solutions Co.",
    },
    {
        quote: "Our Android app has received incredible feedback, all thanks to their expertise and attention to detail.",
        name: "Kavita Iyer",
        title: "Founder, GoGreen India",
    },
    {
        quote: "Their AI solutions have transformed how we analyze and predict market trends. Exceptional work!",
        name: "Manish Agarwal",
        title: "Analyst, MarketWatchers",
    },
    {
        quote: "The Web2.0 website they built for us is not only visually appealing but also extremely functional.",
        name: "Sonia Malhotra",
        title: "Managing Director, LuxuryCrafts",
    },
    {
        quote: "Their Web3.0 app development capabilities are unparalleled. The final product was beyond impressive.",
        name: "Abhinav Mishra",
        title: "Founder, BlockChainify",
    },
    {
        quote: "The Android app developed for us was smooth, intuitive, and exactly what we envisioned.",
        name: "Deepa Reddy",
        title: "Entrepreneur, EduTrack",
    },
    {
        quote: "Their AI-powered recommendation engine has improved our user engagement by leaps and bounds.",
        name: "Suresh Patil",
        title: "Head of Operations, ShopEase",
    },
    {
        quote: "The Web2.0 solution they delivered was on time and exceeded our expectations in every way.",
        name: "Neha Kapoor",
        title: "Founder, StyleCrafter",
    },
    {
        quote: "Our business has greatly benefited from the AI tools they developed. Highly efficient and reliable!",
        name: "Rahul Bhatia",
        title: "Co-Founder, AgroSmart",
    },
    {
        quote: "The Android app they created for our NGO is helping us reach more people and make a greater impact.",
        name: "Pooja Menon",
        title: "Program Manager, HelpHands India",
    },
    {
        quote: "Their AI expertise gave us the competitive edge we were looking for. A very satisfying experience.",
        name: "Vishal Desai",
        title: "CEO, InsightPredict",
    },
    {
        quote: "The Web2.0 platform they developed for our business is both elegant and user-friendly. Great work!",
        name: "Meera Sinha",
        title: "Owner, FreshFarm Organics",
    },
];
