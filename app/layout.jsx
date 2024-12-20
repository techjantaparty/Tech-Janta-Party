import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbarDock";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Janta Party",
  description: "Generated by Team TJP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/djyk287ep/image/upload/v1731309202/TJP_dgmjtt.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/djyk287ep/image/upload/v1731309202/TJP_dgmjtt.png"
        />
      </head>
      <script
        src="//code.tidio.co/6vebborvew4zznihd0zc7bdurgnczikq.js"
        async
      ></script>
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
