import { useState } from "react";
import { X } from "lucide-react";
import Masonry from "react-responsive-masonry";
import { motion, AnimatePresence } from "motion/react";
import newEuropeImg1 from "figma:asset/27c5e67e8f390577633ffa416fc0d9a5a02340d4.png";
import newEuropeImg2 from "figma:asset/2b44f0d021bf55e9ed2d4740bfbec8c347a1d24d.png";

// Europe Images
const europeImg1 = "https://i.imgur.com/tYj9Yfq.jpg";
const europeImg2 = "https://i.imgur.com/HwSKpaI.jpg";
const europeImg3 = "https://i.imgur.com/K3NyaNZ.jpg";
const europeImg4 = "https://i.imgur.com/o8uXqZx.jpg";
const europeImg5 = "https://i.imgur.com/Wdu18N8.jpg";
const europeImg6 = "https://i.imgur.com/xOLypBX.jpg";
const europeImg7 = "https://i.imgur.com/fFToPh6.jpg";
const europeImg8 = "https://i.imgur.com/K8DDJou.jpg";
const europeImg9 = "https://i.imgur.com/heOdT4s.jpg";
const europeImg10 = "https://i.imgur.com/ZPl4YsB.jpg";
const europeImg11 = "https://i.imgur.com/asjY4Kz.jpg";
const europeImg12 = "https://i.imgur.com/2G2G5Jw.jpg";
const europeImg13 = "https://i.imgur.com/3p0si3l.jpg";
const europeImg14 = "https://i.imgur.com/AVWKDpK.jpg";
const europeImg15 = newEuropeImg1;
const europeImg16 = newEuropeImg2;

// Asia America Images
const asiaImg1 = "https://i.imgur.com/CwfMesu.jpg";
const asiaImg2 = "https://i.imgur.com/DRwQn8U.jpg";
const asiaImg3 = "https://i.imgur.com/mel9gUX.jpg";
const asiaImg4 = "https://i.imgur.com/PwSMZeW.jpg";
const asiaImg5 = "https://i.imgur.com/Ib0P8EL.jpg";
const asiaImg6 = "https://i.imgur.com/9894wQU.jpg";
const asiaImg7 = "https://i.imgur.com/QQCR2r0.jpg";
const asiaImg8 = "https://i.imgur.com/lAvTlsZ.jpg";
const asiaImg9 = "https://i.imgur.com/r4jVC1W.jpg";
const asiaImg10 = "https://i.imgur.com/XBDrVGC.jpg";
const asiaImg11 = "https://i.imgur.com/0IWpkg4.jpg";
const asiaImg12 = "https://i.imgur.com/yytWnLk.jpg";
const asiaImg13 = "https://i.imgur.com/YGFdXjJ.jpg";
const asiaImg14 = "https://i.imgur.com/iWycDcJ.jpg";
const asiaImg15 = "https://i.imgur.com/xj8YIo0.jpg";

const categories = ["All", "Europe", "Asia - America"];

// Mixed order for "All" view - alternating Europe and Asia America
const images = [
  {
    id: 1,
    src: europeImg1,
    category: "Europe",
    title: "Parisian Garden",
    location: "Paris, France"
  },
  {
    id: 16,
    src: asiaImg1,
    category: "Asia - America",
    title: "Tokyo Street",
    location: "Tokyo, Japan"
  },
  {
    id: 2,
    src: europeImg15,
    category: "Europe",
    title: "Paris Street Scene",
    location: "Paris, France"
  },
  {
    id: 17,
    src: asiaImg2,
    category: "Asia - America",
    title: "Storefront Scene",
    location: "Asia America"
  },
  {
    id: 3,
    src: europeImg16,
    category: "Europe",
    title: "Family Portrait",
    location: "Paris, France"
  },
  {
    id: 18,
    src: asiaImg3,
    category: "Asia - America",
    title: "Coastal Village",
    location: "Central America"
  },
  {
    id: 4,
    src: europeImg5,
    category: "Europe",
    title: "Museum Gallery",
    location: "Belgium"
  },
  {
    id: 19,
    src: asiaImg4,
    category: "Asia - America",
    title: "Traditional Festival",
    location: "Tokyo, Japan"
  },
  {
    id: 5,
    src: europeImg6,
    category: "Europe",
    title: "Moment in the Park",
    location: "Paris, France"
  },
  {
    id: 20,
    src: asiaImg5,
    category: "Asia - America",
    title: "Temple Pathway",
    location: "Tokyo, Japan"
  },
  {
    id: 6,
    src: europeImg12,
    category: "Europe",
    title: "Mother and Child",
    location: "Paris, France"
  },
  {
    id: 21,
    src: asiaImg6,
    category: "Asia - America",
    title: "Harbor View",
    location: "Central America"
  },
  {
    id: 7,
    src: europeImg7,
    category: "Europe",
    title: "Classical Colonnade",
    location: "Europe"
  },
  {
    id: 22,
    src: asiaImg7,
    category: "Asia - America",
    title: "Temple Gardens",
    location: "Tokyo, Japan"
  },
  {
    id: 8,
    src: europeImg3,
    category: "Europe",
    title: "Paris Streets",
    location: "Paris, France"
  },
  {
    id: 23,
    src: asiaImg9,
    category: "Asia - America",
    title: "Traditional Street",
    location: "Tokyo, Japan"
  },
  {
    id: 9,
    src: europeImg2,
    category: "Europe",
    title: "Classical Interior",
    location: "Europe"
  },
  {
    id: 24,
    src: asiaImg8,
    category: "Asia - America",
    title: "Senso-ji at Night",
    location: "Tokyo, Japan"
  },
  {
    id: 11,
    src: europeImg4,
    category: "Europe",
    title: "Brussels Skyline",
    location: "Brussels, Belgium"
  },
  {
    id: 25,
    src: asiaImg11,
    category: "Asia - America",
    title: "Bridge Crossing",
    location: "Tokyo, Japan"
  },
  {
    id: 12,
    src: europeImg9,
    category: "Europe",
    title: "Eiffel Tower View",
    location: "Paris, France"
  },
  {
    id: 26,
    src: asiaImg12,
    category: "Asia - America",
    title: "Waterside Village",
    location: "Central America"
  },
  {
    id: 13,
    src: europeImg10,
    category: "Europe",
    title: "Park Landscape",
    location: "Belgium"
  },
  {
    id: 27,
    src: asiaImg13,
    category: "Asia - America",
    title: "Bridge Under Construction",
    location: "Asia America"
  },
  {
    id: 14,
    src: europeImg11,
    category: "Europe",
    title: "Modern Brussels",
    location: "Brussels, Belgium"
  },
  {
    id: 28,
    src: asiaImg14,
    category: "Asia - America",
    title: "Garden Pavilion",
    location: "Tokyo, Japan"
  },
  {
    id: 15,
    src: europeImg13,
    category: "Europe",
    title: "Metro Life",
    location: "Paris, France"
  },
  {
    id: 29,
    src: asiaImg15,
    category: "Asia - America",
    title: "Sunset Highway",
    location: "Asia America"
  },
  {
    id: 17,
    src: europeImg14,
    category: "Europe",
    title: "Street Portraits",
    location: "Europe"
  },
  {
    id: 30,
    src: asiaImg3,
    category: "Asia - America",
    title: "Coastal Village",
    location: "Central America"
  },
  {
    id: 18,
    src: europeImg8,
    category: "Europe",
    title: "Children at Play",
    location: "Paris, France"
  },
  {
    id: 31,
    src: asiaImg4,
    category: "Asia - America",
    title: "Traditional Festival",
    location: "Tokyo, Japan"
  }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-[rgb(18,18,18)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-white tracking-[0.2em] uppercase mb-8 font-bold">Gallery</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-transparent text-gray-400 border border-white/20 hover:text-white hover:border-white/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Masonry columnsCount={3} gutter="16px">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group cursor-pointer bg-[#1a1a1a]"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:opacity-80"
                      style={{ filter: 'contrast(1.08) saturate(1.1)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain mx-auto"
                style={{ filter: 'contrast(1.08) saturate(1.1)' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
