import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const allImages = [
  { src: '/hero-1.jpeg', title: 'Nowoczesny ośrodek' },
  { src: '/hero-2.jpeg', title: 'Strefa relaksu' },
  { src: '/hero-3.jpeg', title: 'Basen' },
  { src: '/hero-4.jpeg', title: 'Piękna okolica' },
  { src: '/hero-5.jpeg', title: 'Plac zabaw' },
  { src: '/all-6.jpeg', title: 'Jacuzzi' },
  { src: '/all-7.jpeg', title: 'Sauna' },
  { src: '/all-8.jpeg', title: 'Wyposażona kuchnia' },
  { src: '/all-9.jpeg', title: 'Świetna lokalizacja' },
  { src: '/all-10.jpeg', title: 'Przytulne wnętrze' },
  { src: '/all-11.jpeg', title: 'Nowoczesny apartament' },
  { src: '/all-12.jpeg', title: 'Taras z ogródkiem' },
  { src: '/all-13.jpeg', title: 'Komfortowa sypialnia' },
  { src: '/all-14.jpeg', title: 'Tutaj wypoczniesz' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-slate-900 mb-6"
          >
            Galeria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Zobacz jak wygląda Twój przyszły wypoczynek. Zdjęcia przedstawiają wnętrze apartamentu oraz udogodnienia dostępne na terenie obiektu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <Maximize2 className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-serif text-lg">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-full max-h-full flex flex-col items-center"
            >
              <img 
                src={allImages[selectedImage].src} 
                alt={allImages[selectedImage].title} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white font-serif text-xl mt-6 uppercase tracking-widest">
                {allImages[selectedImage].title}
              </p>
              <p className="text-white/40 text-sm mt-2">
                {selectedImage + 1} / {allImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
