'use client'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src='/assets/hero-barbershop.jpg' alt="Interior de barbería premium" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.35em] uppercase text-red-light mb-6">
          Experiencia Premium en Barbería
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-cream">
          Donde el Estilo{" "}
          <span className="text-brand-gradient">se Encuentra</span>{" "}
          con la Tradición
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg text-cream-dark max-w-xl mx-auto mb-10">
          Cortes de precisión, afeitados clásicos y un ambiente exclusivo. Tu mejor versión comienza aquí.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="bg-brand-gradient text-cream font-body text-sm font-semibold tracking-widest uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity">
            Reservar Cita
          </a>
          <a href="#servicios" className="border border-cream/30 text-cream font-body text-sm font-semibold tracking-widest uppercase px-10 py-4 rounded-sm hover:border-cream hover:text-cream transition-colors">
            Ver Servicios
          </a>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-red/0 via-red to-red/0" />
      </motion.div>
    </section>
  );
};

export default Hero;
