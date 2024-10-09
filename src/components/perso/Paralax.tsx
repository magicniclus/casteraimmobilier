"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

const Paralax = () => {
  const parallaxRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY;
        const windowHeight = window.innerHeight;
        // Ajuster le déplacement de l'image en fonction de la hauteur de la fenêtre
        parallaxRef.current.style.transform = `translateY(${
          offset * 0.2 - windowHeight * 0.15
        }px)`;
      }
    };

    const handleResize = () => {
      // Ajuster la position initiale lors du redimensionnement de la fenêtre
      if (parallaxRef.current) {
        const windowHeight = window.innerHeight;
        parallaxRef.current.style.transform = `translateY(${
          -windowHeight * 0.15
        }px)`;
      }
    };

    // Initialiser la position de l'image en fonction de la taille de l'écran
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full">
      <div className="relative w-full mx-auto h-[400px] overflow-hidden">
        <img
          ref={parallaxRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="quartier Bordeaux"
        />
        <div className="bg-slate-900/70 absolute top-0 left-0 w-full h-full z-10"></div>
      </div>
    </section>
  );
};

export default Paralax;
