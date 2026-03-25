import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>hola
      <Hero />
      <Gallery />
      <Services />
    </div>
  );
}
