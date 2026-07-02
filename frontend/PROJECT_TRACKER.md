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

## Sprint 6 — WiFi QR

Status: Next

Planned:

- Network name input
- Password input
- Security type selection
- Hidden network option
- WiFi QR string generation
- Reuse QRPreview
- Reuse QRDownload
- Reuse QRSizeSelector
- Reuse QRColorPicker

## Sprint 7 — WhatsApp QR

Status: Pending

## Sprint 8 — More QR Types

Status: Pending
