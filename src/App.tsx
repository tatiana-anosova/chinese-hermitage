import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import DemoRoomPage from './pages/DemoRoomPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms/demo" element={<DemoRoomPage />} />
    </Routes>
  )
}

export default App
