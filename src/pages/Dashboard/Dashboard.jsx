import logo from "@/assets/images/logo.png";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center justify h-screen animate-float-bob-y">
      <img src={logo} alt="Logo" className="w-36" />
      <h1 className="text-3xl text-primary font-bold animate-ripple">{t("app.name")}</h1>
      <p className="text-lg">{t("app.description")}</p>
    </div>
  );
};

export default NotFound;
