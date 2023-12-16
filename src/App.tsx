import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { setupMsw } from './mock/browser'
import About from './pages/About'
import Home from './pages/Home'
import { Login } from './pages/Login'
import Notfound from './pages/Notfound'
import SearchResult from './pages/SearchResult'
import { Signup } from './pages/Signup'

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
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/404' element={<Notfound />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
          <Route path='/' element={<Home />} />
          <Route path='/about/:movie_id' element={<About />} />
          <Route path='/search/:value' element={<SearchResult />} />
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
