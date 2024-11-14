"use client";

// components/ContactForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import Image from "next/image";
import { submitEnquiry } from "@/lib/actions/submitEnquiry";

// Dynamically import MDEditor to handle SSR
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [markdown, setMarkdown] = useState("");

  const onSubmit = async (data) => {
    data = { ...data, markdown };

    if (data) {
      const res = await submitEnquiry(data);
      if (res) {
        reset();
        setMarkdown("");
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <Image
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                    src="https://res.cloudinary.com/djyk287ep/image/upload/v1731309202/TJP_dgmjtt.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p>Your enquiry has been submitted successfully</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      } else {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <Image
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                    src="https://res.cloudinary.com/djyk287ep/image/upload/v1731309202/TJP_dgmjtt.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p>Failed to submit enquiry</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      }
    } else {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Image
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                  src="https://res.cloudinary.com/djyk287ep/image/upload/v1731309202/TJP_dgmjtt.png"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p>All fields are mandatory</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="min-h-screen mt-[-130px] flex justify-center items-center bg-black text-white p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black p-8 rounded-lg shadow-2xl w-full h-[70vh] max-w-5xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Contact Us
        </h2>

        {/* Form Grid for Three Inputs per Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-white">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full p-2 rounded-md bg-black text-white border border-white focus:ring-white"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-white">Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/i,
              })}
              className="w-full p-2 rounded-md bg-black text-white border border-white focus:ring-white"
              placeholder="yourname@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500">Please enter a valid Gmail address</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium text-white">Phone Number</label>
            <input
              type="tel"
              {...register("phone", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              className="w-full p-2 rounded-md bg-black text-white border border-white focus:ring-white"
              placeholder="10 digit number"
            />
            {errors.phone && (
              <p className="text-red-500">
                Please enter a valid 10-digit phone number
              </p>
            )}
          </div>
        </div>

        {/* Additional Row for State and Pin Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* State */}
          <div>
            <label className="block font-medium text-white">State</label>
            <select
              {...register("state", { required: true })}
              className="w-full p-2 rounded-md bg-black text-white border border-white focus:ring-white"
            >
              <option value="">Select State</option>
              {statesOfIndia.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500">Please select a state</p>
            )}
          </div>

          {/* Pin Code */}
          <div>
            <label className="block font-medium text-white">Pin Code</label>
            <input
              type="text"
              {...register("pincode", {
                required: true,
                pattern: /^[0-9]{6}$/,
              })}
              className="w-full p-2 rounded-md bg-black text-white border border-white focus:ring-white"
              placeholder="6 digit pin code"
            />
            {errors.pincode && (
              <p className="text-red-500">
                Please enter a valid 6-digit pin code
              </p>
            )}
          </div>

          {/* Domain */}
          <div>
            <label className="block font-medium text-white">Domain</label>
            <select
              {...register("domain", { required: true })}
              className="w-full p-2 rounded-md bg-black text-white border border-white focus:ring-white"
            >
              <option value="">Select Domain</option>
              <option value="Web">Web</option>
              <option value="AI-ML">AI-ML</option>
              <option value="Android App">Android App</option>
              <option value="Blockchain">Blockchain</option>
            </select>
            {errors.domain && (
              <p className="text-red-500">Please select a domain</p>
            )}
          </div>
        </div>

        {/* Additional Comments (Markdown Editor) - Hidden on Small Screens */}
        <div className="hidden sm:block">
          <label className="block font-medium text-white mb-2">
            Additional Comments (Markdown Supported)
          </label>
          <MDEditor
            value={markdown}
            onChange={setMarkdown}
            className="bg-black text-white resize-none rounded-md border border-white"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
