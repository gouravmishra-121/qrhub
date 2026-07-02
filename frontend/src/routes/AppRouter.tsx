import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import QRTypesPage from '@/pages/generators/QRTypesPage'
import WebsiteQR from '@/pages/generators/WebsiteQR'
import UPIQR from '@/pages/generators/UPIQR'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/qr-types" element={<QRTypesPage />} />

        <Route path="/website" element={<WebsiteQR />} />

        <Route path="/upi" element={<UPIQR />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
