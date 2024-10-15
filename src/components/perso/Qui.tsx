/* eslint-disable @next/next/no-img-element */
const Qui = () => {
  return (
    <section className="w-full" id="who">
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="relative flex items-center lg:w-5/12 w-full">
            <img
              src="/moi.jpg"
              alt="Nicolas CASTERA"
              className="h-[400px] lg:h-[650px] object-cover w-full lg:w-full rounded-t-[50px] lg:rounded-l-[100px] lg:rounded-r-lg rounded-b-none"
              style={{ filter: "grayscale(100%) brightness(70%)" }}
            />
          </div>

          <div className="w-full lg:w-7/12 bg-[#0f1618] text-white py-10 px-6 lg:py-20 lg:px-10 h-max rounded-b-[50px] lg:rounded-r-[100px] lg:rounded-l-none">
            <h2 className="text-2xl lg:text-4xl">Rencontrez Nicolas Castera</h2>
            <p className="mt-6 lg:mt-10 text-sm lg:text-base">
              Avec plus de 10 ans d&apos;expérience dans l&apos;immobilier
              bordelais, j&apos;ai commencé dans le conseil en investissement
              avant de me spécialiser dans l&apos;immobilier ancien. Chaque
              projet est traité avec attention et rigueur pour répondre aux
              attentes de mes clients.
            </p>
            <p className="mt-4 lg:mt-8 text-sm lg:text-base">
              Que vous cherchiez a vendre ou acheter une maison, un appartement,
              un terrain ou un logement neuf, je vous accompagne à chaque étape
              pour réaliser votre projet immobilier avec expertise et
              transparence.
            </p>
            <h3 className="text-3xl lg:text-4xl text-[#947a2f] mt-8 lg:mt-10 font-light font-updock">
              Nicolas Castera
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qui;
