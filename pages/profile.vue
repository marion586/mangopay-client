<template lang="pug">
  div.container
    step-comp
    div(v-if="!users" class="loading-container")
      div.spinner-wrapper
        div.spinner
        p Loading... Please wait
    div(v-else class="users-list")
      div(v-for="user in users.getUsers" :key="user.id" class="user-card")
        div.user-info
          span(class="user-id") ID: {{ user.id }}
          span(class="user-name") Name: {{ user.name }}
          span(class="user-email") Email: {{ user.email }}
</template>

<script>
import StepComp from "../components/StepComp.vue";
import { getUsersApi } from '@/mixins/api.user';

export default {
  components: { StepComp },


  async asyncData({ app }) {
    const userApi = getUsersApi(app.apolloProvider.defaultClient);
    try {
      const users = await userApi.getUsers();

      return { users }; // Return the users data
    } catch (error) {
      console.error('Error fetching users:', error);
      return { users: [] }; // Return an empty array in case of an error
    }
  },

  
};
</script>

<style  lang="css">
.container {
  padding: 2rem;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.users-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.user-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  
}


.user-card::hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
.user-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.user-id, .user-name, .user-email {
  font-size: 1.1rem;
  color: #333;
}

.user-id {
  font-weight: bold;
}

.user-name {
  color: #3498db;
}

.user-email {
  color: #555;
}
</style>
