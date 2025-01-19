import { getUersQuery } from "../graphql/user";
export const getUsersApi = (apolloClient) => ({
  getUsers: () =>
    apolloClient
      .query({
        query: getUersQuery,
       
      })
      .then(({ data }) => data)})


export default {
  beforeCreate() {
    this.api = {
      ...this.api,
      users: getUsersApi(this.$apollo),
    };
  },
};
