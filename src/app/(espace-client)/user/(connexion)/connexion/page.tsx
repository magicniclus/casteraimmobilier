/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/tailwindUi/footer/Footer";
import ConnexionForm from "@/components/tailwindUi/form/Connexion";
import Header from "@/components/tailwindUi/header/Header";

const ConnexionPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ConnexionForm />
      </main>
      <Footer />
    </>
  );
};

export default ConnexionPage;
