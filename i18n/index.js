module.exports = {
  vueI18n: {
    silentTranslationWarn: true,
    fallbackLocale: "fr",
    dateTimeFormats: {
      fr: require("./fr-FR/dateTimeFormats"), // Load French date formats
      en: require("./en-US/dateTimeFormats") // Load English date formats
    },
    numberFormats: {
      fr: {
        currency: {
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol"
        },
        currencyNoCents: {
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol",
          minimumFractionDigits: 0, // No decimal places
          maximumFractionDigits: 0
        }
      },
      en: {
        currency: {
          style: "currency",
          currency: "USD",
          currencyDisplay: "symbol"
        },
        currencyNoCents: {
          style: "currency",
          currency: "USD",
          currencyDisplay: "symbol",
          minimumFractionDigits: 0, // No decimal places
          maximumFractionDigits: 0
        }
      }
    }
  },
  locales: [
    { code: "en", iso: "en-US", name: "English", file: "en-US/index.js" },
    { code: "fr", iso: "fr-FR", name: "Français", file: "fr-FR/index.js" }
  ],
  defaultLocale: "fr",
  lazy: true,
  langDir: "i18n/",
  detectBrowserLanguage: false,
  parsePages: false,
  strategy: "no_prefix"
};
