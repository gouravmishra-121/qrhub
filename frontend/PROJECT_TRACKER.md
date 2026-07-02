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

Status: Next

Planned:

- Phone QR
- SMS QR
- Maps QR
- Text QR

## Sprint 8 — More QR Types

Status: Pending
