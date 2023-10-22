import React from "react";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center text-xs font-light ">
      <p>
        &copy; Artman Entertainment {currentYear} {`${props.createdBy}`}{" "}
        <a
          className=" font-medium "
          href="https://jean-chane-to.com/"
          target="_blank"
        >
          WebDeveLap
        </a>
      </p>
    </footer>
  );
};

export default Footer;
