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
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Subham Mani",
      designation: "Web Developer @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/c_crop,ar_1:1/v1731437000/IMG_20241027_201713_aifgoh.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Ronit Bose",
      designation: "Blockchain Developer @ TJP",
      src: "https://res.cloudinary.com/djyk287ep/image/upload/v1731309202/TJP_dgmjtt.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
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
  ];
  return(
    <div>
        <h1 className="mt-8 text-3xl font-extrabold text-center leading-tight tracking-tight bg-gradient-to-r from-gray-400 to-yellow-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
        Our Team
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
