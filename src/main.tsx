import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Suspense} from 'react'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'

import routes from '~react-pages'
import {Providers} from './providers'
import {Layout} from './lib'

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </Providers>,
)
