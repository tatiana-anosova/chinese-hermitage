import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import RoomPage from './pages/RoomPage.tsx'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms/:slug" element={<RoomPage />} />
    </Routes>
  )
}

export default App
