import DisplayCard from "@/components/Cards";
import Header from "@/components/Header";
import Banner from "@/components/homepage/banner";
import PayAnyhow from "@/components/PayAnyhow";
import Image from "next/image";
import union from "../../public/images/young-man.png";
import Entertainer from "@/components/Entertainer";
import Faq from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <DisplayCard />
      <PayAnyhow />
      <Entertainer />
      <Faq />
      <Footer />
    </main>
  );
}
