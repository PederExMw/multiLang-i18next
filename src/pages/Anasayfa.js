import React from "react";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../baseUrl";

const Anasayfa = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h2> {t("hello")} </h2>
        <a href={baseUrl + "/Anasayfa"}> {t("Anasayfa")}</a>
      </div>
    </div>
  );
};

export default Anasayfa;
