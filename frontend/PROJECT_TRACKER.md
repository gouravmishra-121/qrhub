# QRHub Project Tracker

## Sprint 0 — Project Planning

Status: Complete

## Sprint 1 — Development Foundation

Status: Complete

## Sprint 2 — Homepage

Status: Complete for MVP

Completed:

- Navbar
- Hero section
- QR Types preview
- FAQ
- Footer
- Removed homepage live QR generator
- Hero CTA routes to QR Types page

## Sprint 3 — QR Engine Foundation

Status: Complete

Completed:

- Task 3.1 — Reusable QRPreview component
- Task 3.2 — Reusable QRDownload component
- Task 3.3 — PNG download
- Task 3.4 — SVG download
- Task 3.5 — QR size selector
- Task 3.6 — QR color customization
- Task 3.7 — Reusable QR exports
- Task 3.8 — Sprint checkpoint

Decision:

- QR engine lives in src/components/qr
- Website QR uses the shared QR engine first
- URL validation remains strict
- google.com is invalid unless user enters http:// or https://

## Sprint 4 — Website QR Generator Polish

Status: Complete

Completed:

- Task 4.1 — Polish Website QR layout and controls
- Task 4.2 — Improve QR file naming
- Task 4.3 — Mobile polish
- Task 4.4 — Final Website QR review and commit

Final Website QR features:

- Strict URL validation
- Live QR preview
- PNG download
- SVG download
- Size selector: 256px, 512px, 1024px
- Foreground color customization
- Background color customization
- Reset customization
- Safe file naming based on website domain
- Mobile responsive layout

Decision:

- Website QR remains strict.
- google.com is invalid.
- User must enter http:// or https://.

---

## Sprint 5 — UPI QR

Status: Complete

Completed:

- Task 5.1 — Build UPI QR page
- Task 5.2 — Add /upi route
- Task 5.3 — Connect UPI card on QR Types page
- Task 5.4 — UPI QR review and commit

Final UPI QR features:

- UPI ID input
- Payee name input
- Optional amount
- Optional note
- UPI payment QR generation
- Strict UPI ID validation
- Amount validation
- Live QR preview
- PNG download
- SVG download
- Size selector
- Foreground color customization
- Background color customization
- Reset customization
- Safe file naming

Decision:

- UPI ID and payee name are required.
- Amount and note are optional.
- UPI QR uses shared QR engine components.

---

## Sprint 6 — Communication QR Pack

Status: Complete

Completed:

- Task 6.1 — Build WiFi QR page
- Task 6.2 — Add /wifi route
- Task 6.3 — Connect WiFi card on QR Types page
- Task 6.4 — Build WhatsApp QR page
- Task 6.5 — Build Email QR page
- Task 6.6 — Build vCard QR page
- Task 6.7 — Sprint 6 review and commit

Final WiFi QR features:

- Network name input
- Security type selection
- Password input
- Hidden network option
- WiFi QR string generation
- PNG download
- SVG download
- Size selector
- Color customization

Final WhatsApp QR features:

- WhatsApp number input
- Optional pre-filled message
- WhatsApp link QR generation
- PNG download
- SVG download
- Size selector
- Color customization

Final Email QR features:

- Email address input
- Optional subject
- Optional message body
- mailto QR generation
- PNG download
- SVG download
- Size selector
- Color customization

Final vCard QR features:

- Full name input
- Phone input
- Email input
- Company input
- Job title input
- Website input
- Address input
- vCard 3.0 QR generation
- PNG download
- SVG download
- Size selector
- Color customization

Decision:

- WiFi, WhatsApp, Email, and vCard all reuse the shared QR engine.
- vCard QR stores contact data directly inside the QR.
- User must save the contact manually after scanning.

---

## Sprint 7 — Utility QR Pack

Status: Complete

Completed:

- Task 7.1 — Build Phone QR page
- Task 7.2 — Build SMS QR page
- Task 7.3 — Build Text QR page
- Task 7.4 — Build Maps QR page
- Task 7.5 — Sprint 7 review and commit

Final Phone QR features:

- Phone number input
- tel QR generation
- Strict phone validation
- PNG download
- SVG download
- Size selector
- Color customization

Final SMS QR features:

- Phone number input
- Optional pre-filled message
- sms QR generation
- PNG download
- SVG download
- Size selector
- Color customization

Final Text QR features:

- Plain text input
- Text stored directly inside QR
- Character count
- PNG download
- SVG download
- Size selector
- Color customization

Final Maps QR features:

- Location input
- Address/place/coordinates support
- Full maps URL support
- Google Maps search link generation
- PNG download
- SVG download
- Size selector
- Color customization

Decision:

- Phone, SMS, Text, and Maps reuse the shared QR engine.
- Maps QR accepts either a full URL or a location query.
- Text QR stores text directly inside the QR code.

---

## Sprint 8 — Product Cleanup and Reusable Form Improvements

Status: Complete

Completed:

- Task 8.1 — Created reusable QRCustomizationPanel
- Task 8.2 — Applied QRCustomizationPanel to all QR pages
- Task 8.3 — Created shared QR constants
- Task 8.4 — Sprint 8 review and commit

Reusable QR components:

- QRPreview
- QRDownload
- QRSizeSelector
- QRColorPicker
- QRCustomizationPanel

Shared QR constants:

- DEFAULT_QR_SIZE
- DEFAULT_FOREGROUND_COLOR
- DEFAULT_BACKGROUND_COLOR

Updated pages:

- Website QR
- UPI QR
- WiFi QR
- WhatsApp QR
- Email QR
- vCard QR
- Phone QR
- SMS QR
- Text QR
- Maps QR

Decision:

- QR engine remains in src/components/qr
- Shared QR UI should be reused by all current and future QR pages
- Generator pages should focus only on form inputs, validation, and QR value generation

---

## Sprint 9 — QR Types Page and Navigation Polish

Status: Complete

Completed:

- Task 9.1 — Audited QR Types and navigation
- Task 9.2 — Improved QR Types page structure
- Task 9.3 — Fixed footer QR links
- Task 9.4 — Restored Templates as future monetization layer
- Task 9.5 — Final navigation review and commit

Final navigation updates:

- Navbar links to QR Types, Templates, How It Works, and FAQ
- Homepage QR section now supports QR Types and Templates tabs
- QR Types tab links to working QR generators
- Templates tab shows future monetization categories
- Footer QR links point to real generator pages
- QR Types page groups QR tools by category
- Coming Soon QR types are shown as disabled cards

Decision:

- Basic QR generation remains free.
- Templates remain part of future monetization.
- Templates are shown as a homepage tab, not a separate low-priority section.
- QR Types page is the main catalog for all QR generators.

---

## Sprint 10 — Template Gallery MVP

Status: Complete

Completed:

- Task 10.1 — Created Templates page
- Task 10.2 — Added /templates route
- Task 10.3 — Connected navbar and footer Templates links
- Task 10.4 — Connected homepage Templates tab to gallery
- Task 10.5 — Reused shared template data
- Task 10.6 — Final review and commit

Final updates:

- Created /templates page
- Added template categories for UPI, Business, Restaurant, vCard, WiFi, and WhatsApp
- Homepage Templates tab now links to full template gallery
- Navbar and footer now link to /templates
- Template data is centralized in src/data/templateGroups.tsx

Decision:

- Basic QR generation remains free.
- Templates are the future monetization layer.
- Current template gallery is informational only.
- Payment/premium logic will not be added yet.

---

## Sprint 11 — Template Builder MVP

Status: Complete

Completed:

- Task 11.1 — Created visual template preview component
- Task 11.2 — Added visual previews to Templates page
- Task 11.3 — Made template previews data-driven
- Task 11.4 — Added selectable template builder route
- Task 11.5 — Connected template flow with UPI QR generator
- Task 11.6 — Connected Website QR flow for Restaurant and Business templates
- Task 11.7 — Added template PNG download
- Task 11.8 — Added free and premium export states
- Task 11.9 — Added editable template text
- Task 11.10 — Fixed homepage clarity

Final outcome:

- Users can select a template.
- Users can create a base QR from the selected template flow.
- UPI, Restaurant, and Business templates can connect QR data.
- Connected QR appears inside the template preview.
- Users can customize template text.
- Users can download a free PNG with QRHub watermark.
- Premium export is visible as a future monetization path.
- Homepage no longer shows blank QR preview.
- Homepage Templates tab now shows usable templates as Available.

Decision:

- Basic QR generation remains free.
- Templates are the future monetization layer.
- No backend, database, login, or payment is needed for current MVP.
- Payment should be considered only after template interest is validated.

---

## Sprint 12 — MVP Quality, Navigation, and SEO Foundation

Status: Complete

Completed:

- Task 12.1 — Added 404 Not Found page
- Task 12.2 — Added global site navigation through AppLayout
- Task 12.3 — Added route-based page titles and meta descriptions
- Task 12.4 — Added global footer on every page
- Task 12.5 — Added Privacy, Terms, and Contact pages
- Task 12.6 — Improved footer internal QR links
- Task 12.7 — Added ScrollToTop on route change
- Task 12.8 — Added SEO content component for generator pages
- Task 12.9 — Added SEO content for UPI and WhatsApp pages
- Task 12.10 — Added SEO content for Website and WiFi pages
- Task 12.11 — Added SEO content for Email and vCard pages
- Task 12.12 — Added SEO content for Phone and SMS pages
- Task 12.13 — Added SEO content for Text and Maps pages
- Task 12.14 — Added QRHub favicon
- Task 12.15 — Added robots.txt
- Task 12.16 — Added MVP QA checklist

Final outcome:

- Navbar appears globally across all routes.
- Footer appears globally across all routes.
- Direct SEO landing pages now show QRHub branding.
- All QR generator pages have SEO/use-case/FAQ sections.
- Page titles and meta descriptions are route-aware.
- Privacy, Terms, Contact, and 404 pages exist.
- Favicon and robots.txt are added.
- MVP QA checklist exists for manual validation.

Decision:

- QRHub remains frontend-only for current MVP.
- No backend, database, login, or payment is needed yet.
- Basic QR generation remains free.
- Templates remain the future monetization layer.
- SEO pages are important because users may land directly on generator pages.

---

## Sprint 13 — Final MVP QA and Launch Preparation

Status: Next

Planned:

- Run full MVP QA checklist
- Fix any broken route, layout, or download issue
- Review mobile responsiveness
- Review template flow end-to-end
- Prepare deployment checklist
- Decide hosting option
- Prepare production domain/sitemap later
