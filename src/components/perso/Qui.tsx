/* eslint-disable @next/next/no-img-element */
const Qui = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="relative flex items-center lg:w-5/12 w-full">
            <img
              src="/agent.jpg"
              alt="Nicolas CASTERA"
              className="h-[400px] lg:h-[700px] object-cover w-full lg:w-full rounded-t-[50px] lg:rounded-l-[100px] lg:rounded-r-lg rounded-b-none"
            />
          </div>
          <div className="w-full lg:w-7/12 bg-[#0f1618] text-white py-10 px-6 lg:py-20 lg:px-10 h-max rounded-b-[50px] lg:rounded-r-[100px] lg:rounded-l-none">
            <h2 className="text-2xl lg:text-4xl">Rencontrez Nicolas Castera</h2>
            <p className="mt-6 lg:mt-10 text-sm lg:text-base">
              Avec plus de 2 milliards de dollars de ventes, notre agence est le
              premier producteur de luxe du secteur avec plus de 27 ans
              d&apos;expérience dans la commercialisation des propriétés
              riveraines les plus prestigieuses de Seattle.
            </p>
            <p className="mt-4 lg:mt-8 text-sm lg:text-base">
              Avec plus de 2 milliards de dollars de ventes, notre agence est le
              premier producteur de luxe du secteur avec plus de 27 ans
              d&apos;expérience dans la commercialisation des propriétés
              riveraines les plus prestigieuses de Seattle.
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
