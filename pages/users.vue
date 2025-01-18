<template>
  <div>
    <h1>User Data</h1>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.data.Firstname }}</p>
      <p><strong>Email:</strong> {{ user.data.email }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config, error }) {
    try {
      const baseUrl = $config.baseUrl || process.env.baseUrl; // Base URL fallback
      const endpoint = `${baseUrl}/api/users/user_m_01JHT2T222XM2SSRX1HMPDKCVT`;
      console.log(`Fetching data from: ${endpoint}`);

      const user = await $axios.$get(endpoint);
      console.log("Fetched user data:", user);

      return {
        user,
      };
    } catch (err) {
      console.error("Error fetching user data:", err);
      error({ statusCode: err.response?.status || 500, message: "Failed to fetch user data." });
    }
  },
};
</script>

