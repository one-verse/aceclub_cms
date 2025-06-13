import AuthLogo from "./extensions/logo.png";
import MenuLogo from "./extensions/partial.png";
import FaviconLogo from "./extensions/icon.png";

const config = {
  auth: {
    logo: AuthLogo,
  },
  menu: {
    logo: AuthLogo,
  },
  head: {
    favicon: FaviconLogo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "ACE CLUB POKER",
      "Auth.form.welcome.subtitle": "ACE CLUB POKER",
      "Auth.form.welcome.title": "Admin Access",
    },
  },
  tutorials: false,
  notifications: { releases: false },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
