import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import setDefaultOptions from 'date-fns/setDefaultOptions'
import 'react-datepicker/dist/react-datepicker.css'
import router from './router'
import './index.css'

// Default locale
import { enGB } from 'date-fns/locale'
setDefaultOptions({ locale: enGB })
registerLocale('enGB', enGB)
setDefaultLocale('enGB')

const client = new ApolloClient({
  uri: 'https://api.staging.ruuby.com/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
)
