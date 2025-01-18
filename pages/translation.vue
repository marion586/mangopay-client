<template>
  <div>
    <div>
      <!-- Global translation -->
      <select v-model="selectedLocale" @change="changeLocale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="locale"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
      <select-country />
      <p>{{ $t("welcome") }}</p>
      <p>{{ $t("goodbye") }}</p>
      <p>{{ $d(new Date(), "dateLong") }}</p>
      <p>{{ $d(new Date(), "dateShort") }}</p>
      <p>{{ $d(new Date().getTime(), "time") }}</p>
      <!-- Component-specific translation -->
      <p>{{ $t("componentSpecific.greeting") }}</p>
    </div>
    <!-- Testing currency -->
    <div>
      <h2>Currency Formatting</h2>
      <p>
        Standard Currency ({{ $i18n.locale }}): {{ $n(1234.56, "currency") }}
      </p>
      <p>No Cents ({{ $i18n.locale }}): {{ $n(1234.56, "currencyNoCents") }}</p>
    </div>

    <!-- Testing translation -->
    <div>
      <h2>Translations</h2>
      <p>{{ $t("welcome") }}</p>
      <p>{{ $t("goodbye") }}</p>
    </div>

    <!--  Testing Combined Features -->
    <div>
      <h2>Combined Example</h2>
      <p>{{ $t("welcome") }}, {{ $d(new Date(), "dateLong") }}</p>
      <p>Total: {{ $n(4500.78, "currency") }}</p>
      <p>{{ $t("goodbye") }}</p>
    </div>

    <!-- Dynamic Locale Switching -->
    <div>
      <h2>Dynamic Locale Switching</h2>
      <p>Current Locale: {{ $i18n.locale }}</p>
      <p>{{ $t("welcome") }}</p>
      <p>Long Date: {{ $d(new Date(), "dateLong") }}</p>
      <p>Currency: {{ $n(1000, "currency") }}</p>

      <button @click="setLocale($i18n.locale)">{{ $t("switch") }}</button>
    </div>
    <!-- Testing Custom Formats (Edge Cases) -->
    <div>
      <h2>Custom Formatting</h2>
      <p>
        Custom Date Format:
        {{ $d(new Date(), { weekday: "long", month: "long" }) }}
      </p>
      <p>
        Custom Number Format:
        {{ $n(987654321, { style: "decimal", minimumFractionDigits: 2 }) }}
      </p>
      <p>{{ $t("price_message", { price: $n(199.99, "currency") }) }}</p>
      <p>{{ $tc("apple_count", 1) }}</p>
      <p>{{ $tc("apple_count", 5) }}</p>
    </div>
  </div>
</template>

<script>
import SelectCountry from "../components/SelectCountry.vue";
export default {
  components: { SelectCountry },
  data() {
    return { selectedLocale: this.$i18n.locale };
  },
  i18n: {
    messages: {
      en: { componentSpecific: { greeting: "Hello from the component!" } },
      fr: { componentSpecific: { greeting: "Bonjour du composant!" } }
    }
  },
  methods: {
    setLocale(locale) {
      const transletedLang = locale === "fr" ? "en" : "fr";
      this.$i18n.setLocale(transletedLang);
    },
    changeLocale() {
      console.log(this.selectedLocale);
      this.$i18n.setLocale(this.selectedLocale);
    }
  },
  beforeMount() {
    console.log(this.$i18n.locale);
  }
};
</script>
