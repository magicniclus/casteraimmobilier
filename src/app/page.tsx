"use client";

import Paralax from "@/components/perso/Paralax";
import Qui from "@/components/perso/Qui";
import Selection from "@/components/perso/Selection";
import Footer from "@/components/tailwindUi/footer/Footer";
import Header from "@/components/tailwindUi/header/Header";
import Hero from "@/components/tailwindUi/hero/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches("a[href^='#']")) {
        event.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center -z-10 bg-[#fbf9f7]">
        <Hero />
        <Selection />
        <Paralax />
        <Qui />
      </main>
      <Footer />
    </>
  );
}
