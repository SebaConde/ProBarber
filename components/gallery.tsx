/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: '/assets/carousel-1.jpg', alt: "Corte de precisión" },
  { src: '/assets/carousel-2.jpg', alt: "Afeitado clásico" },
  { src: '/assets/carousel-3.jpg', alt: "Perfilado de barba" },
];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.35em] uppercase text-red-light mb-4">Nuestro trabajo</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-cream">
            <span className="text-brand-gradient">Galería</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gradient mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-sm" ref={emblaRef}>
            <div className="flex">
              {images.map((img, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_70%] min-w-0 px-2">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                    <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={768} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-cream hover:text-red hover:border-red transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-cream hover:text-red hover:border-red transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
