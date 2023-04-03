import React from 'react'
import ReactDOM from 'react-dom/client'
import {Suspense} from 'react'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import routes from '~react-pages'

const queryClient = new QueryClient()

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
)
