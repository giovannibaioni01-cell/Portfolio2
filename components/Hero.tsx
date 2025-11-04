import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImage from "figma:asset/9c2e9e32b2dd270aa3645d4603150e7539ccded8.png";

export function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-white"
            />
            <h1 className="text-5xl md:text-7xl text-white tracking-tight">
              Giovanni<br />Baioni
            </h1>
          </div>
          <p className="text-lg text-gray-300 max-w-md">
            Exploring the interplay of light, form, and human experience through fine art photography.
          </p>
          <button
            onClick={scrollToGallery}
            className="group flex items-center gap-2 text-white hover:text-gray-300 transition-colors pt-4"
          >
            <span className="text-sm tracking-wider uppercase">Explore Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
