import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import QRTypesPage from '@/pages/generators/QRTypesPage'
import WebsiteQR from '@/pages/generators/WebsiteQR'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/qr-types" element={<QRTypesPage />} />

        <Route path="/website" element={<WebsiteQR />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
