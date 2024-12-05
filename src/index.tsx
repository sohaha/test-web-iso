import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso'

import Home from './pages/home.jsx'
import { NotFound } from './pages/_404.jsx'
import './style.css'
import { ThemeProvider } from './context/theme-provider.js'
import { StateContextProvider } from './context/state-context.js'

export function App() {
  return (
    // <StateContextProvider>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <LocationProvider>
        <main>
          <Router>
            <Route path='/' component={Home} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </LocationProvider>
    </ThemeProvider>
    // </StateContextProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
