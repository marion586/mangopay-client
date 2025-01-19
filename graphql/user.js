import gql from 'graphql-tag';
export const getUersQuery = gql`
  query GetUsers {
  getUsers {
    id
    email
    name
  }
}`