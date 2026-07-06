# QRPrintly MVP QA Checklist

## Global Layout

- [ ] Navbar is visible on every page
- [ ] QRPrintly logo links to homepage
- [ ] Create QR button links to /qr-types
- [ ] Footer is visible only once on every page
- [ ] Footer QR links open correct generator pages
- [ ] Privacy, Terms, and Contact links work
- [ ] Page scroll resets to top after route change

## Homepage

- [ ] Hero does not show blank QR preview
- [ ] Create QR Code button opens /qr-types
- [ ] QR Types tab shows working QR generators
- [ ] Templates tab shows available templates
- [ ] Template cards link to template builder pages
- [ ] Homepage works on mobile and desktop

## QR Generator Pages

Test all pages:

- [ ] /website
- [ ] /upi
- [ ] /wifi
- [ ] /whatsapp
- [ ] /email
- [ ] /vcard
- [ ] /phone
- [ ] /sms
- [ ] /text
- [ ] /maps

For each generator:

- [ ] Page opens directly from URL
- [ ] Navbar and footer appear
- [ ] Form validation works
- [ ] QR preview appears only when valid
- [ ] PNG download works
- [ ] SVG download works
- [ ] Custom size works
- [ ] Color customization works
- [ ] Reset customization works
- [ ] SEO content section appears below generator

## Template Flow

Test templates:

- [ ] /templates
- [ ] /templates/upi-payment
- [ ] /templates/restaurant-menu
- [ ] /templates/business-website

Template flow:

- [ ] Select UPI template
- [ ] Create base QR first opens /upi?template=upi-payment
- [ ] Generate valid UPI QR
- [ ] Continue with selected template returns to builder
- [ ] Connected QR appears inside template
- [ ] Editable text updates preview
- [ ] Free PNG download works
- [ ] Premium export is visible as coming soon

Website template flow:

- [ ] Restaurant template opens Website QR flow
- [ ] Business template opens Website QR flow
- [ ] Website QR returns to selected template after valid URL

## SEO Basics

- [ ] Browser title updates for homepage
- [ ] Browser title updates for QR generator pages
- [ ] Browser title updates for template pages
- [ ] Browser title updates for Privacy, Terms, Contact
- [ ] /robots.txt opens
- [ ] /favicon.svg opens
- [ ] 404 page opens for invalid route

## Build Checks

Run before every push:

```bash
npm run lint
npm run check
npm run build
```
