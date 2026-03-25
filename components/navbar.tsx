'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img src='/favicon.ico' alt="Logo Barbería" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-bold text-cream tracking-wider">
            ProBarber
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium tracking-widest uppercase text-cream/70 hover:text-cream transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link href='/sign-in' className="bg-brand-gradient text-cream font-body text-sm font-semibold tracking-widest uppercase px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity">
              Reservar
            </Link>
          </li>
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="font-body text-sm font-medium tracking-widest uppercase text-cream/70 hover:text-cream transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" onClick={() => setOpen(false)} className="inline-block bg-brand-gradient text-cream font-body text-sm font-semibold tracking-widest uppercase px-6 py-2.5 rounded-sm">
                Reservar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
