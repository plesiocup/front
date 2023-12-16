import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { setupMsw } from './mock/browser'
import About from './pages/About'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'

function App() {
  const isDark = true
  const body = document.querySelector('body')
  if (isDark) {
    body?.classList.add('dark')
  } else {
    body?.classList.remove('dark')
  }
  const queryClient = new QueryClient()

  setupMsw()

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/'>
            <Route path=':movie_id' element={<About />} />
          </Route>
          <Route path='/search/'>
            <Route path=':value' element={<SearchResult />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
