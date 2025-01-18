import elementLocale from "element-ui/lib/locale/lang/fr";
import { countries } from "i18n-iso-countries/langs/en.json";
export default {
  ...elementLocale,
  welcome: "Welcome",
  goodbye: "Goodbye",
  switch: "Translate to French",
  price_message: "The price is {price}",
  apple_count: "You have {count} apple | You have {count} apples",
  account: {
    label: "Account",
    email: "Email address",
    selectCountry: "Select your country"
  },
  countries
};
