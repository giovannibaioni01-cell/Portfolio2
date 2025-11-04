import { motion } from "motion/react";

export function Videos() {
  return (
    <section id="videos" className="py-32 px-6 bg-[rgb(18,18,18)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-white" />
              <h2 className="text-4xl text-white">Video Work</h2>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="relative bg-black overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/srp08zlBy7M?modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            More content available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
