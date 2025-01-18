import elementLocale from "element-ui/lib/locale/lang/fr";
import { countries } from "i18n-iso-countries/langs/fr.json";
console.log(elementLocale);
export default {
  ...elementLocale,
  welcome: "Bienvenue",
  goodbye: "Au revoir",
  switch: "Traduire en  anglais",
  price_message: "le prix est {price}",
  apple_count: "Vous avez {count} une pomme | Vous avez {count} des pommes",
  account: {
    label: "Compte",
    email: "Addresse email",
    selectCountry: "Sélectionnez votre pays"
  },
  countries
};
