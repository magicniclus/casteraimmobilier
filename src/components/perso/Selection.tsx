/* eslint-disable @next/next/no-img-element */
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contain = [
  {
    image:
      "https://media.apimo.pro/picture/84698/84697187/19866501006638a6d944f091.77671138_1616.webp-original.webp?1714988761",
    prix: "3 657 000",
    title: "Villa Lège-Cap-Ferret ",
    pieces: "6",
    taille: "165",
    link: "https://www.expfrance.fr/fr/propriete/vente+maison+cap-ferret+sublime-villa-avec-acces-direct-a-l-ocean+84697187",
  },
  {
    image:
      "https://media.apimo.pro/picture/84050/84049242/170972514065b1549d390cd4.54407175_1920.webp-original.webp?1706120350",
    prix: "1 050 000",
    title: "Appartement Bordeaux • Gambetta",
    pieces: "3",
    taille: "123",
    link: "https://www.expfrance.fr/fr/propriete/vente+appartement+bordeaux+t3-de-tres-grand-standing+84049242",
  },
  {
    image:
      "https://media.apimo.pro/picture/85134/85133064/196209091666f4071e1b8728.01897188_1616.webp-original.webp?1727268638",
    prix: "3 657 000",
    title: "Maison Gujan-Mestras",
    pieces: "6",
    taille: "165",
    link: "https://www.expfrance.fr/fr/propriete/vente+maison+gujan-mestras+85133064",
  },
  {
    image:
      "https://d36vnx92dgl2c5.cloudfront.net/prod/Marui/3311/media/6b80adb41987bb9e132919293a1004f3.webp",
    prix: "275 000",
    title: "Appartement Bordeaux",
    pieces: "3",
    taille: "55",
    link: "https://www.expfrance.fr/fr/propriete/vente+appartement+bordeaux+appartement-t3-55-m-nansouty+84323118",
  },
  {
    image:
      "https://d36vnx92dgl2c5.cloudfront.net/prod/Marui/3311/media/22af83d33bff6cdb3333002a953bd9de.webp",
    prix: "465 000",
    title: "Echoppe Bordelaisex",
    pieces: "4",
    taille: "114",
    link: "https://www.expfrance.fr/fr/propriete/vente+maison+bordeaux+echoppe-bordelaise-t4-114-m-+82435409",
  },
  {
    image:
      "https://d36vnx92dgl2c5.cloudfront.net/prod/Marui/3311/media/d8fffe9a3f8bb00c1d33da626c0cefce.webp",
    prix: "583 000",
    title: "Maison Biscarrosse",
    pieces: "4",
    taille: "90",
    link: "https://www.expfrance.fr/fr/propriete/vente+maison+biscarrosse+maison-90m2-avec-garage-biscarrosse-plage+84560119",
  },
];

const Selection = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto w-full py-32">
        <div className="relative max-w-max mx-auto text-3xl">
          <h2 className="text-gray-700 text-center">
            <span className="sm:hidden block text-gray-700/60 text-xl font-light font-updock ">
              le meilleur
            </span>
            Selection d&apos;annonce
          </h2>
          <h3 className="font-light font-updock text-[#947a2f]/60 absolute -right-10 -bottom-7 sm:block hidden">
            Le meilleur
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {contain.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className=" rounded-lg overflow-hidden transition-shadow duration-300 relative group"
            >
              <div className="absolute top-2 left-2 rounded-full p-1 bg-gray-700 text-white text-xs px-2">
                Nouveauté
              </div>
              <div className="absolute top-2 right-2 rounded-full p-1 bg-[#947a2f] text-white text-xs px-2">
                A vendre
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] rounded-lg object-cover group-hover:scale-2"
              />
              <div className="py-4">
                <p className="text-[#947a2f] mt-2">{item.prix} €</p>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <div className="flex text-sm">
                  <p className="text-gray-600 mt-1">Pièces: {item.pieces}</p>
                  <p className="text-gray-600 mt-1 ml-4">
                    Surface: {item.taille} m²
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <a
            href="#"
            className="p-4 px-4 text-white text-sm rounded-lg bg-[#947a2f] mx-auto mt-12 hover:text-[#947a2f] hover:bg-white hover:border hover:border-[#947a2f] transition duration-300 ease-in-out"
          >
            Vous souhaitez obtenir une estimation ?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Selection;
