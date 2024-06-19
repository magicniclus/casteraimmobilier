import Footer from "@/components/tailwindUi/footer/Footer";
import Header from "@/components/tailwindUi/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      <Footer />
    </>
  );
}
