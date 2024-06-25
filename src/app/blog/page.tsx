/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/tailwindUi/footer/Footer";
import Header from "@/components/tailwindUi/header/Header";
import { PhoneIcon } from "@heroicons/react/20/solid";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col justify-between px-4 pt-10 mx-auto max-w-6xl md:flex-row">
          <nav className="block w-full p-5 bg-slate-100 h-max text-slate-700 md:hidden">
            <h3 className="mb-4 text-xl font-semibold">Sommaire</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>
                <a href="#presentation">Présentation</a>
              </li>
              <li>
                <a href="#services">Services Offerts</a>
              </li>
              <li>
                <a href="#testimonials">Témoignages de Clients</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <p className="mb-4 text-sm">
              Temps de lecture estimé:{" "}
              <span className="font-semibold">5 minutes</span>
            </p>
            <p className="mb-4 text-sm">
              Auteur: <span className="font-semibold">Pauline Massé</span>
            </p>
          </nav>
          <article className="w-full mt-10 md:w-7/12 text-slate-700 md:mt-0">
            <h1 className="mb-8 text-3xl font-bold text-center">
              Les Meilleures Agences Immobilières à Bergerac - Nicolas Castera
            </h1>
            <section id="presentation" className="mb-8">
              <img
                src="/houses/one.png"
                alt="Agence immobilière Bergerac"
                className="w-full h-[150px] object-cover"
              />
              <h2 className="mt-8 mb-4 text-2xl font-semibold">
                Présentation de Nicolas Castera - Human Immobilier Bergerac
              </h2>
              <p className="mb-4">
                Nicolas Castera est un représentant de Human Immobilier à
                Bergerac, offrant des services professionnels et personnalisés
                pour répondre à tous vos besoins immobiliers. Avec une expertise
                locale approfondie et un engagement envers l&apos;excellence,
                Nicolas est le choix idéal pour acheter, vendre ou gérer vos
                propriétés à Bergerac.
              </p>
            </section>
            <section id="services" className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Services Offerts</h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Estimation Immobilière :</strong> Obtenez une
                  estimation précise et gratuite de votre bien immobilier.
                  Nicolas utilise une analyse approfondie du marché local pour
                  fournir des évaluations fiables.
                </li>
                <li>
                  <strong>Achat et Vente de Propriétés :</strong> Que vous
                  cherchiez à acheter ou vendre une maison, Nicolas vous
                  accompagne à chaque étape pour garantir une transaction
                  réussie.
                </li>
                <li>
                  <strong>Gestion Locative :</strong> Confiez la gestion de vos
                  biens à Nicolas pour une tranquillité d&apos;esprit complète.
                  Il s&apos;occupe de tout, de la sélection des locataires à la
                  maintenance régulière des propriétés.
                </li>
              </ul>
            </section>
            <section id="testimonials" className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Témoignages de Clients Satisfaits
              </h2>
              <p className="mb-4">
                &quot;Grâce à Nicolas Castera, nous avons vendu notre maison
                rapidement et au meilleur prix. Son expertise et son
                professionnalisme sont incomparables.&quot; - Famille Martin
              </p>
              <p className="mb-4">
                &quot;Nicolas nous a aidés à trouver la maison parfaite à
                Bergerac. Sa connaissance du marché et son dévouement ont fait
                toute la différence.&quot; - Mme Durand
              </p>
              <div>
                <p className="mb-4 text-2xl font-semibold">
                  Pour plus d&apos;informations, contactez <br />
                  Nicolas Castera :
                </p>
                <a
                  className="flex items-center p-3 text-white bg-yellow-500 rounded-md w-max"
                  href="tel:0631420045"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  06 31 42 00 45
                </a>
              </div>
            </section>
          </article>
          <aside className="hidden w-4/12 p-5 bg-slate-100 h-max text-slate-700 md:block">
            <h3 className="mb-4 text-xl font-semibold">Sommaire</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>
                <a href="#presentation">Présentation</a>
              </li>
              <li>
                <a href="#services">Services Offerts</a>
              </li>
              <li>
                <a href="#testimonials">Témoignages de Clients</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <p className="mb-4 text-sm">
              Temps de lecture estimé:{" "}
              <span className="font-semibold">5 minutes</span>
            </p>
            <p className="mb-4 text-sm">
              Auteur: <span className="font-semibold">Pauline Massé</span>
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
