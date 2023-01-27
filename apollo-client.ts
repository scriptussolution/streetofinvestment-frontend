import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_URL || "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client