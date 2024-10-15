/* eslint-disable @next/next/no-img-element */
"use client";

import {
  HomeIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { CSSProperties } from "react";

const Paralax = () => {
  const containerStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    minHeight: "600px",
    backgroundImage: "url('bg-house.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Fixe l'image par rapport au viewport
  };

  return (
    <section className="w-full">
      <div
        style={containerStyle}
        className="flex flex-col items-center justify-center w-full py-10 px-4"
      >
        <div className="bg-slate-900/70 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative max-w-max mx-auto text-3xl text-center sm:text-3xl z-60 p-4">
          <span className="sm:hidden block text-white/60 text-xl font-light font-updock">
            Experience
          </span>
          <h2 className="text-white text-center">
            Inspirez par les différences
          </h2>
          <h3 className="font-light font-updock text-[#947a2f]/60 md:text-white/60 absolute -right-10 -bottom-3 sm:block hidden">
            Experience
          </h3>
        </div>
        <div className="relative mx-auto text-3xl z-60 mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 w-full">
          <div className="h-auto p-4 w-full sm:w-[90%] md:max-w-[250px] h-[250px] bg-white rounded-lg flex justify-center items-center flex-col">
            <div className="p-3 bg-[#947a2f] rounded-full">
              <HomeIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-gray-700 text-lg mt-5">Vente immobilière</h2>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Nous utilisons une stratégie unique pour la vente de votre bien.
            </p>
            <a href="#contact" className="text-sm mt-3">
              En savoir plus &rarr;
            </a>
          </div>
          <div className="h-auto p-4 w-full sm:w-[90%] md:max-w-[250px] h-[250px] bg-white rounded-lg flex justify-center items-center flex-col">
            <div className="p-3 bg-[#947a2f] rounded-full">
              <PresentationChartLineIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-gray-700 text-lg mt-5">
              Estimation immobilière
            </h2>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Nous estimons votre bien au prix le plus juste pour la vente.
            </p>
            <a href="#contact" className="text-sm mt-3">
              En savoir plus &rarr;
            </a>
          </div>
          <div className="h-auto p-4 w-full sm:w-[90%] md:max-w-[250px] h-[250px] bg-white rounded-lg flex justify-center items-center flex-col">
            <div className="p-3 bg-[#947a2f] rounded-full">
              <HomeModernIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-gray-700 text-lg mt-5">
              Conseil investissement
            </h2>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Optimisation fiscale et patrimoniale, nous vous conseillons.
            </p>
            <a href="#contact" className="text-sm mt-3">
              En savoir plus &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paralax;
