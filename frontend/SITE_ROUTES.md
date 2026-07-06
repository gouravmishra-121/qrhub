# QRPrintly Site Routes

## Core Pages

| Route        | Purpose            |
| ------------ | ------------------ |
| `/`          | Homepage           |
| `/qr-types`  | QR type catalog    |
| `/templates` | Template gallery   |
| `/privacy`   | Privacy policy     |
| `/terms`     | Terms of service   |
| `/contact`   | Contact page       |
| `*`          | 404 Not Found page |

## QR Generator Pages

| Route       | QR Type        |
| ----------- | -------------- |
| `/website`  | Website QR     |
| `/upi`      | UPI Payment QR |
| `/wifi`     | WiFi QR        |
| `/whatsapp` | WhatsApp QR    |
| `/email`    | Email QR       |
| `/vcard`    | vCard QR       |
| `/phone`    | Phone QR       |
| `/sms`      | SMS QR         |
| `/text`     | Text QR        |
| `/maps`     | Maps QR        |

## Template Builder Pages

| Route                         | Template                  |
| ----------------------------- | ------------------------- |
| `/templates/upi-payment`      | UPI Payment Template      |
| `/templates/restaurant-menu`  | Restaurant/Menu Template  |
| `/templates/business-website` | Business Website Template |

## Template Flow URLs

| Flow                              | URL Pattern                                     |
| --------------------------------- | ----------------------------------------------- |
| UPI template to QR generator      | `/upi?template=upi-payment`                     |
| Restaurant template to Website QR | `/website?template=restaurant-menu`             |
| Business template to Website QR   | `/website?template=business-website`            |
| Return to template with QR data   | `/templates/:templateId?qrType=...&qrValue=...` |

## SEO Notes

- Each QR generator page should work as a direct landing page.
- Navbar and footer should appear on every route.
- Each generator page should have title, description, use cases, FAQs, and related links.
- Sitemap should be added after final production domain is selected.
