// ~/plugins/my-alternative-apollo-config.js

export default context => {
  return {
    httpEndpoint: "http://localhost:3005/graphql",

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    getAuth: () => "Bearer my-static-token"
  };
};
