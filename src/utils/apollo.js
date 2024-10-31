import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URL || "http://localhost:4000/graphql",
    credentials: "same-origin",
    fetch,
  }),
  cache: new InMemoryCache().restore({}),
});

export default client;
