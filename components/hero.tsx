// components/hero.tsx  ← sin 'use client'
import { auth } from "@/auth";
import { HeroClient } from "./ui/hero-client";

const Hero = async () => {
  const session = await auth();

  return (
    <HeroClient userRole={session?.user?.role} />
  );
};

export default Hero;