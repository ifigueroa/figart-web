/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";

const Terms = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fr" ? fr : en;

  return (
    <>
      <Head>
        <title>{t.terms.metaTitle}</title>
      </Head>
      <header>
        <Link href="/">
          <Image
            src="https://figart-images.s3.ca-central-1.amazonaws.com/logo.png"
            width={200}
            height={100}
            alt="FigART logo"
            className=" w-24 sm:w-32 cursor-pointer ml-4 lg:ml-8 z-10 animate-logo "
          />
        </Link>
      </header>
      <main>
        <section className=" pt-24 sm:pt-32 max-w-4xl px-4 mx-auto font-light ">
          <h1 className=" font-extrabold">{t.terms.title}</h1>
          <h2 className=" font-bold mt-8">{t.terms.privTitle}</h2>
          <p className="mt-4 ">{t.terms.p1}</p>
          <p className="mt-4">{t.terms.p2}</p>
          <p className="mt-4">{t.terms.p3}</p>
          <p className="mt-4">{t.terms.p4}</p>
          <p className="mt-4">{t.terms.p5}</p>
          <p className="mt-4">{t.terms.p6}</p>
          <p className="mt-4 ">{t.terms.p7}</p>
          <p className="mt-4 ">{t.terms.p8}</p>
          <p className="mt-4 ">{t.terms.p9}</p>
          <h2 className=" font-bold mt-8">{t.terms.termsTitle}</h2>
          <p className="mt-4 ">{t.terms.p10}</p>
          <p className="mt-4 ">{t.terms.p11}</p>
          <p className="mt-4 ">{t.terms.p12}</p>
          <p className="mt-4 ">{t.terms.p13}</p>
          <p className="mt-4 ">{t.terms.p14}</p>
          <p className="mt-4 ">{t.terms.p15}</p>
          <p className="mt-4 ">{t.terms.p16}</p>
          <p className="mt-4 ">{t.terms.p17}</p>
          <p className="mt-4 ">{t.terms.p18}</p>
          <p className="mt-4"> {t.terms.p19}</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Terms;
