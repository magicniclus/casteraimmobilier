import Footer from "@/components/tailwindUi/footer/Footer";
import ChangePasseword from "@/components/tailwindUi/form/ChangePasseword";
import Header from "@/components/tailwindUi/header/Header";

const Page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ChangePasseword />
      </main>
      <Footer />
    </>
  );
};

export default Page;
