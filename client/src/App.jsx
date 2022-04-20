import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import MainWrap from './components/MainWrap';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error: ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainWrap />
    </ApolloProvider>
  );
}

export default App;
