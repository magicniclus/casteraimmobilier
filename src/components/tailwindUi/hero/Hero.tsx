"use client";

/* eslint-disable @next/next/no-img-element */
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  // Utilisation de useRef pour référencer les éléments
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animation GSAP pour l'apparition des h1 et h2
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: 50 }, // Point de départ : invisible et décalé vers le bas
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      h2Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 }
    );

    // Animation pour le bouton
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.6 }
    );

    // Animation pour les statistiques
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="w-full relative min-h-[500px] z-0 bg-white">
      <img
        src="https://files.oaiusercontent.com/file-FwXMalx9g1o34c6UStn0cZvc?se=2024-10-09T09%3A09%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daa9080a7-2297-4814-90ba-7daf2bf744fe.webp&sig=hbfNmok434Mqjm43rMB0/82SncFkDDj/pb0avWXm6pM%3D"
        alt="background"
        className="w-full h-full absolute top-0 right-0 object-cover rounded-b-[40px] z-0"
      />
      <div className="bg-slate-700/70 absolute top-0 right-0 w-full h-full rounded-b-[40px] z-0"></div>
      <div className="relative text-center h-full min-h-[500px] w-full flex justify-center flex-col items-center text-white text-3xl z-10">
        <div className="relative mt-10">
          <h1 ref={h1Ref} className="px-2">
            <span className="sm:hidden block text-white/60 text-xl font-light font-updock">
              Castera
            </span>
            Agence Immobilière <br /> Bordeaux et Bassin d&apos;Arcachon{" "}
          </h1>
          <h2
            ref={h2Ref}
            className="font-light font-updock text-white/60 absolute -right-0 sm:-right-10 -bottom-7 sm:block hidden"
          >
            Castera
          </h2>
        </div>
        <a
          ref={buttonRef}
          href="#"
          className="px-6 py-2 border border-white rounded-full text-white text-base mt-10 hover:border-[#947a2f] hover:bg-[#947a2f] hover:text-white transition duration-300 ease-in-out z-20"
        >
          Prendre rendez-vous
        </a>
        <div ref={statsRef} className="sm:flex hidden mt-7 text-sm z-10">
          <div className="flex items-center">
            <span className="text-[#947a2f] text-lg mr-1">&bull;</span> + de 110
            ventes réalisées
          </div>
          <div className="flex items-center ml-3">
            <span className="text-[#947a2f] text-lg mr-1">&bull;</span> Clients
            100% satisfaits
          </div>
          <div className="flex items-center ml-3">
            <span className="text-[#947a2f] text-lg mr-1">&bull;</span> 100%
            sur-mesure
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
