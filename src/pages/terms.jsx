/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy and Terms of Use | Artman Studio",
};

const Terms = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy and Terms of Use | Artman Studio</title>
      </Head>
      <section className=" pt-48 max-w-4xl px-4 mx-auto font-light ">
        <h1 className=" font-extrabold">Privacy Policy and Terms of Use</h1>
        <h2 className=" font-bold mt-8">Privacy Policy</h2>
        <p className="mt-4 ">
          This Privacy Policy outlines how Artman Studio collects, uses, and
          safeguards the personal information provided by our website visitors,
          clients, and collaborators. We are committed to ensuring your privacy
          and the security of your information. By accessing or using our
          services, you consent to the practices outlined in this policy.
        </p>
        <p className="mt-4">
          Information Collection: We may collect personal information, such as
          names, email addresses, and contact details, when you interact with
          our website, submit inquiries, or engage in our services. This
          information is used solely for communication and service purposes.
        </p>
        <p className="mt-4">
          Information Usage: Personal information collected is used to respond
          to inquiries, provide services, and improve our offerings. We do not
          share, sell, or rent your personal information to third parties
          without your consent, except as required by law.
        </p>
        <p className="mt-4">
          Data Security: We implement industry-standard security measures to
          protect your personal information from unauthorized access,
          disclosure, or misuse. However, please note that no data transmission
          over the internet is completely secure.
        </p>
        <p className="mt-4">
          Cookies: Our website may use cookies to enhance user experience and
          collect data about site usage. Cookies can be disabled in your browser
          settings, but this might impact certain features of the website.
        </p>
        <p className="mt-4">
          Third-Party Links: Our website may contain links to third-party
          websites or services. We are not responsible for the privacy practices
          or content of these external sites.
        </p>
        <p className="mt-4 ">
          Children's Privacy: Our services are not intended for individuals
          under the age of 13. We do not knowingly collect personal information
          from children without parental consent.
        </p>
        <p className="mt-4 ">
          Changes to Privacy Policy: We may update this Privacy Policy from time
          to time. Any modifications will be reflected on this page. By
          continuing to use our services after changes are made, you acknowledge
          your acceptance of the updated policy.
        </p>
        <p className="mt-4 ">
          Contact Us: If you have any questions or concerns about our Privacy
          Policy, please contact us at [contact email]. Your privacy is
          important to us, and we are committed to addressing any inquiries
          promptly.
        </p>
        <p className="mt-4 ">Effective Date: August 2023</p>
        <h2 className=" font-bold mt-8">Terms of Use</h2>
        <p className="mt-4 ">
          By accessing or using our website and services, you agree to comply
          with the following Terms of Use. Please read these terms carefully
          before using our services.
        </p>
        <p className="mt-4 ">
          Content Usage: All content provided on our website, including text,
          images, and audio samples, is the property of Artman Studio and is
          protected by copyright laws. You may not use, reproduce, or distribute
          our content without our explicit permission.
        </p>
        <p className="mt-4 ">
          User Conduct: When using our services, you agree not to engage in any
          activities that are unlawful, harmful, or disruptive. This includes
          not uploading malicious software, spam, or content that violates the
          rights of others.
        </p>
        <p className="mt-4 ">
          Disclaimer: Our website and services are provided "as is" without any
          warranties. While we strive to provide accurate and reliable
          information, we cannot guarantee the accuracy, completeness, or
          reliability of the content.
        </p>
        <p className="mt-4 ">
          Limitation of Liability: Artman Studio shall not be liable for any
          damages, whether direct or indirect, arising from the use or inability
          to use our website or services. This includes any loss of data,
          profits, or business opportunities.
        </p>
        <p className="mt-4 ">
          Third-Party Links: Our website may contain links to third-party
          websites. We are not responsible for the content or practices of these
          external sites.
        </p>
        <p className="mt-4 ">
          Changes to Terms: We may update these Terms of Use from time to time.
          Any modifications will be posted on this page. By continuing to use
          our services after changes are made, you agree to the updated terms.
        </p>
        <p className="mt-4 ">
          Governing Law: These Terms of Use are governed by the laws of France.
          Any disputes arising from or relating to these terms shall be subject
          to the exclusive jurisdiction of the courts in France.
        </p>
        <p className="mt-4 ">
          Contact Us: If you have any questions or concerns about these Terms of
          Use, please contact us at paulartman.music@gmail.com.
        </p>
        <p className="mt-4 mb- ">Effective Date: August 2023</p>
      </section>

      <Footer />
    </>
  );
};

export default Terms;
