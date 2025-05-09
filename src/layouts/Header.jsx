import logo from "@/assets/images/logo.png";

import moment from "moment";
import momentKh from "@thyrith/momentkh";
import { isTMA } from "@telegram-apps/sdk";
import { useTranslation } from "react-i18next";

// Add the Khmer localization to moment
momentKh(moment);

const Header = () => {
  const { t } = useTranslation();
  return (
    <header
      className={`h-24 via-fuchsia-600 w-full flex flex-col md:flex-row items-center justify-center md:justify-between left-0 z-50 top-0 ${
        isTMA() && "top-28 md:top-0"
      }`}
    >
      <div className="flex items-center justify-center md:justify-start h-full w-full md:w-[50%]">
        <img src={logo} alt="Logo" className="h-full w-auto p-3 pl-5" />
        <div className="pl-1 flex flex-col justify-center">
          <h1 className="text-xl font-heading">{t("app.name")}</h1>
          <p className="text-md">{t("app.description")}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
