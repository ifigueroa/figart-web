import { useRouter } from "next/router";
import React from "react";

export default function LanguageSelect({styles}) {

    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
      };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      className={`${styles} bg-transparent tracking-wide outline-none focus:outline-none cursor-pointer `}
    >
      <option className="bg-transparent " value="en">
        EN
      </option>
      <option className="bg-transparent " value="fr">
        FR
      </option>
    </select>
  );
}
