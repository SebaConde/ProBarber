'use client'
import { motion } from "framer-motion";
import { Scissors, Sparkles, Droplets, Crown } from "lucide-react";

const services = [
  { icon: Scissors, title: "Corte Clásico", description: "Corte de cabello personalizado con técnicas tradicionales y modernas.", price: "$25" },
  { icon: Sparkles, title: "Afeitado Premium", description: "Afeitado con navaja, toalla caliente y productos de primera calidad.", price: "$20" },
  { icon: Droplets, title: "Barba & Bigote", description: "Diseño, perfilado y mantenimiento profesional de barba.", price: "$18" },
  { icon: Crown, title: "Paquete VIP", description: "Corte, afeitado, tratamiento capilar y masaje relajante.", price: "$55" },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.35em] uppercase text-red-light mb-4">Lo que ofrecemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-cream">
            Nuestros <span className="text-brand-gradient">Servicios</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gradient mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-sm p-8 hover:border-red/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(4_82%_27%/0.3)]">
              <div className="w-14 h-14 rounded-sm bg-muted flex items-center justify-center mb-6 group-hover:bg-red/10 transition-colors">
                <service.icon className="w-6 h-6 text-red" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <p className="font-display text-2xl font-bold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
