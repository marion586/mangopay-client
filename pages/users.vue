<template>
  <div>
    <h1>User Data</h1>
    <div v-if="user">
        
      <p><strong>Name:</strong> {{ user.data.FirstName }}</p>
      <p><strong>Email:</strong> {{ user.data.Email}}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    try {
      const baseUrl = $config.baseUrl || process.env.baseUrl; // Fallback to process.env.baseUrl
      const endpoint = `${baseUrl}/api/users/user_m_01JHT2T222XM2SSRX1HMPDKCVT`;
      console.log(`Fetching data from: ${endpoint}`);

      // Fetch data using $axios
      const user = await $axios.$get(endpoint);
      console.log("Fetched user data:", user);

      return { user };
    } catch (err) {
      console.error("Error fetching user data:", err);
      return { user: null }; // Return null if an error occurs
    }
  },
};
</script>

