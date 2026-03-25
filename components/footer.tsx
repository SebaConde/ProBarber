import { APP_NAME } from "@/lib/constants";
import { MapPin, Phone, Clock, } from "lucide-react";
import logo from "@/assets/logo-barbershop.png";


const Footer = () => {
    return ( 
          <footer id="contacto" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src='/favicon.ico' alt="Logo" className="h-10 w-10 object-contain" loading="lazy" width={512} height={512} />
              <span className="font-display text-xl font-bold text-cream tracking-wider">{APP_NAME}</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Tu barbería de confianza. Estilo, tradición y experiencia premium en cada visita.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-red mb-4">Contacto</h3>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-red shrink-0" /><span>Calle Principal 123, Ciudad</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-red shrink-0" /><span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock size={16} className="text-red shrink-0" /><span>Lun - Sáb: 9:00 AM - 8:00 PM</span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-red mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-red hover:border-red transition-colors">
                {/* <Instagram size={18} /> */}
              </a>
              <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-red hover:border-red transition-colors">
                {/* <Facebook size={18} /> */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground tracking-wider">© 2026 {APP_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;