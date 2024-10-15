"use client";

import Footer from "@/components/tailwindUi/footer/Footer";
import Header from "@/components/tailwindUi/header/Header";
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
      <main className="flex min-h-screen flex-col items-center -z-20 bg-[#fbf9f7] w-full flex justify-center items-center">
        <h1 className="text-2xl lg:text-4xl">Merci,</h1>
        <h2 className="mt-6 lg:mt-10 text-sm lg:text-base">
          Nous vous recontacterons dans les 24h.
        </h2>
      </main>
      <Footer />
    </>
  );
}
