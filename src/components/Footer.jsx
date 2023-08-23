import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center text-xs font-light ">
      <p>
        &copy; Artman Studio {currentYear} created by{" "}
        <a
          className=" font-medium "
          href="https://webdevelap.com/"
          target="_blank"
        >
          WebDeveLap
        </a>
      </p>
    </footer>
  );
};

export default Footer;
