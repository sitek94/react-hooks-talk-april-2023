import './global.css'

import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {Suspense} from 'react'
import {BrowserRouter as Router, useRoutes, useLocation} from 'react-router-dom'

import routes from '~react-pages'
import {Providers} from './providers'
import {Layout} from './lib'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const slideNumber = location.pathname.split('/')[1]
    document.title = slideNumber
  }, [location])

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
