"use client";

/* eslint-disable @next/next/no-img-element */
import { gsap } from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Animation GSAP pour l'apparition des h1 et h2
    gsap.fromTo(
      "h1",
      { opacity: 0, y: 50 }, // Point de départ : invisible et décalé vers le bas
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      "h2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  return (
    <section className="w-full relative min-h-[500px] -z-10 bg-white">
      <img
        src="https://files.oaiusercontent.com/file-FwXMalx9g1o34c6UStn0cZvc?se=2024-10-09T09%3A09%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daa9080a7-2297-4814-90ba-7daf2bf744fe.webp&sig=hbfNmok434Mqjm43rMB0/82SncFkDDj/pb0avWXm6pM%3D"
        alt="background"
        className="w-full h-full absolute top-0 right-0 object-cover rounded-b-[40px]"
      />
      <div className="bg-slate-700/70 absolute top-0 right-0 w-full h-full rounded-b-[40px]"></div>
      <div className="relative text-center h-full min-h-[500px] w-full flex justify-center items-center text-white text-3xl">
        <div className="relative">
          <h1 className="px-2 opacity-0 translate-y-12">
            <span className="sm:hidden block text-white/60 text-xl font-light font-updock ">
              Castera
            </span>
            Agence Immobilière <br /> Bordeaux et Bassin d&apos;Arcachon{" "}
          </h1>
          <h2 className="font-light font-updock text-white/60 absolute -right-0 sm:-right-10 -bottom-7 sm:block hidden opacity-0 translate-y-12">
            Castera
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
