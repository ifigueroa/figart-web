import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Order from "@/components/Order";
import Services from "@/components/Services";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Artman Entertainement</title>
        <meta
          name="description"
          content="Online music mixing, mastering and stem mastering services. Elevate your music with expert audio processing and polishing. Send your music now to achieve outstanding sound quality."
        />
      </Head>
      <header className="w-full z-20 h-24 flex absolute top-0 left-0 ">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <Order />
        <AboutUs />
        <Footer />
      </main>
    </>
  );
}
