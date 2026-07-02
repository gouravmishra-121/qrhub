import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import QRTypesPage from '@/pages/generators/QRTypesPage'
import WebsiteQR from '@/pages/generators/WebsiteQR'
import UPIQR from '@/pages/generators/UPIQR'
import WiFiQR from '@/pages/generators/WiFiQR'
import EmailQR from '@/pages/generators/EmailQR'
import WhatsAppQR from '@/pages/generators/WhatsAppQR'
import VCardQR from '@/pages/generators/VCardQR'
import PhoneQR from '@/pages/generators/PhoneQR'
import SMSQR from '@/pages/generators/SMSQR'
import MapsQR from '@/pages/generators/MapsQR'
import TextQR from '@/pages/generators/TextQR'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/qr-types" element={<QRTypesPage />} />

        <Route path="/website" element={<WebsiteQR />} />

        <Route path="/upi" element={<UPIQR />} />

        <Route path="/wifi" element={<WiFiQR />} />

        <Route path="/email" element={<EmailQR />} />

        <Route path="/whatsapp" element={<WhatsAppQR />} />

        <Route path="/vcard" element={<VCardQR />} />

        <Route path="/phone" element={<PhoneQR />} />

        <Route path="/sms" element={<SMSQR />} />

        <Route path="/maps" element={<MapsQR />} />

        <Route path="/text" element={<TextQR />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
