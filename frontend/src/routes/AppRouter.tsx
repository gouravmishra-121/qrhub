import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import { AppLayout } from '@/components/layout/AppLayout'
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
import TemplatesPage from '@/pages/TemplatesPage'
import TemplateBuilderPage from '@/pages/TemplateBuilderPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ContactPage from '@/pages/ContactPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import LongTailSeoPage from '@/pages/seo/LongTailSeoPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/qr-types" element={<QRTypesPage />} />

          <Route path="/website" element={<WebsiteQR />} />

          <Route path="/upi" element={<UPIQR />} />

          <Route path="/wifi" element={<WiFiQR />} />

          <Route path="/email" element={<EmailQR />} />

          <Route path="/whatsapp" element={<WhatsAppQR />} />

          <Route
            path="/upi-qr-code-generator-for-shops"
            element={<LongTailSeoPage pageId="upi-shops" />}
          />

          <Route
            path="/whatsapp-qr-code-for-business"
            element={<LongTailSeoPage pageId="whatsapp-business" />}
          />

          <Route path="/vcard" element={<VCardQR />} />

          <Route path="/phone" element={<PhoneQR />} />

          <Route path="/sms" element={<SMSQR />} />

          <Route path="/maps" element={<MapsQR />} />

          <Route path="/text" element={<TextQR />} />

          <Route path="/templates" element={<TemplatesPage />} />

          <Route path="/templates/:templateId" element={<TemplateBuilderPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/privacy" element={<PrivacyPage />} />

          <Route path="/terms" element={<TermsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
