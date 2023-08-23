import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Order from "@/components/Order";
import Services from "@/components/Services";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from 'next/router';
import en from '../locales/en';
import fr from '../locales/fr';
import OurWork from "@/components/OurWork";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'fr' ? fr : en;

  return (
    <>
      <Head>
        <title>Artman Entertainement</title>
        <meta
          name="description"
          content={`${translation.metaData.content}`}
        />
      </Head>
      <header className="w-full z-20 h-24 flex absolute top-0 left-0 ">
        <Navbar { ...translation.nav } />
      </header>
      <main>
        <Hero { ...translation.hero } />
        <Services { ...translation.services } />
        <OurWork { ...translation.portfolio }/>
        <Order { ...translation.order }/>
        <AboutUs { ...translation.aboutUs }/>
        <Footer { ...translation.footer }/>
      </main>
    </>
  );
}
