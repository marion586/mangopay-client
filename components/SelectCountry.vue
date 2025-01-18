<template>
  <div>
    <h3>{{ $t("account.label") }}</h3>
    <label for="country">{{ $t("account.selectCountry") }}</label>
    <select v-model="selectedCountry" id="country">
      <option disabled value="">{{ $t("account.selectCountry") }}</option>
      <option v-for="(name, code) in $t('countries')" :key="code" :value="code">
        {{ name }}
      </option>
    </select>
    <p v-if="selectedCountry">
      {{ $t("account.label") }}: {{ $t("countries")[selectedCountry] }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: "" // Stores the selected country's code
    };
  }
};
</script>

<style>
label {
  display: block;
  margin-bottom: 0.5rem;
}
select {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
