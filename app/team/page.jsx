import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Leading a team like TJP makes me feel fortunate. The team is highly skilled and motivated to deliver the best results. The team's dedication is commendable.",
      name: "Megh Deb",
      designation: "Android Developer @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/v1731178410/IMG-20240317-WA0013-1_s1a2ts.jpg",
    },
    {
      quote:
        "As someone who has been in the team from the very first day, i feel proud of how far we have come",
      name: "Subham Mani",
      designation: "Web Developer @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/c_crop,ar_1:1/v1731437000/IMG_20241027_201713_aifgoh.jpg",
    },
    {
      quote:
        "It's an honor to be among one of the best tech geeks and always looking forward to more growth and learning opportunities.",
      name: "Ronit Bose",
      designation: "Blockchain Developer @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/v1731483900/WhatsApp_Image_2024-11-13_at_13.11.42_24400ab9_xqheys.jpg",
    },
    {
      quote:
        "Being part of a dynamic team as well as a cake lover it is always a rollercoaster ride. I'm very excited to see how far we go",
      name: "Sayambar Roy Chowdhury",
      designation: "ML Engineer @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/v1731438036/161194965_g0ryoz.jpg",
    },
    {
      quote:
        "Being a member of TJP has not only helped me gain experience as a coder but also helped me gain knowledge from my highly skilled teammates",
      name: "Dipannita Das",
      designation: "Junior Dev @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/v1731432883/WhatsApp_Image_2024-11-12_at_23.01.36_e8919d76_neylqa.jpg",
    },
    {
      quote:
        "Being a part of TJP has helped me gain knowledge as a coder from my fellow teammates as well as help me gain experience for my future endeavours",
      name: "Kaustavi Mullick",
      designation: "PR & Design @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/v1731641970/WhatsApp_Image_2024-11-14_at_18.56.20_2ac9cee5_hsgdmw.jpg",
    },
  ];
  return (
    <div>
      <h1 className="mt-8 text-3xl font-extrabold text-center leading-tight tracking-tight bg-gradient-to-r from-gray-400 to-yellow-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
        Our Team
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
