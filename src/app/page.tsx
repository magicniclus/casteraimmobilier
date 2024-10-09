import Qui from "@/components/perso/Qui";
import Selection from "@/components/perso/Selection";
import Footer from "@/components/tailwindUi/footer/Footer";
import Header from "@/components/tailwindUi/header/Header";
import Hero from "@/components/tailwindUi/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center -z-10 bg-[#fbf9f7]">
        <Hero />
        <Selection />
        {/* <Paralax /> */}
        <Qui />
      </main>
      <Footer />
    </>
  );
}
