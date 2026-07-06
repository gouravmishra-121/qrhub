# QRPrintly Security Baseline

## Current Architecture

QRPrintly is currently a frontend-only static web application.

- React + Vite frontend
- Hosted on Cloudflare Pages
- Domain managed through Cloudflare
- No backend
- No database
- No login
- No user account system
- No payment system
- No file upload
- No admin panel

QR code generation happens in the user's browser.

## Current Risk Level

Low.

Reason:

- No server-side application logic
- No database storing user data
- No authentication system
- No payment endpoint
- No uploaded files
- QR data is not stored by QRPrintly

## Important Privacy Rule

QRPrintly must not send sensitive QR input data to analytics.

Do not send these values to GA4 or any external analytics tool:

- UPI ID
- Phone number
- Email address
- WiFi password
- vCard personal details
- Full QR value
- Address or map location entered by user

Allowed analytics data:

- QR type
- Download format
- Template ID
- Export type
- Page path
- Generic event names

## Account Security Checklist

- [ ] Cloudflare account has 2FA enabled
- [ ] GitHub account has 2FA enabled
- [ ] Cloudflare password is strong and unique
- [ ] GitHub password is strong and unique
- [ ] Backup codes are saved safely
- [ ] No unknown users are invited to Cloudflare
- [ ] No unknown users are added to GitHub repository

## Secrets Checklist

- [ ] `.env.local` is not committed
- [ ] No private keys are committed
- [ ] No API secrets are committed
- [ ] No payment keys are committed
- [ ] No Cloudflare tokens are committed
- [ ] No Google verification secrets are committed except allowed public DNS verification

## Cloudflare Baseline

Recommended settings:

- Security Level: Medium
- Bot Fight Mode: Enabled
- Browser Integrity Check: Enabled
- DNS web records proxied where applicable
- No country blocking unless there is confirmed abuse
- No aggressive rate limiting until backend/API is added

## Suspicious Traffic Patterns to Watch

Watch Cloudflare analytics for:

- Very high request spikes
- Repeated requests to `/.env`
- Repeated requests to `/wp-admin`
- Repeated requests to `/wp-login.php`
- Repeated requests to `/phpmyadmin`
- Repeated requests to `/admin`
- High 4xx or 5xx response rate
- Thousands of requests from one IP or country in a short time

## Monitoring Plan

Check weekly:

- Cloudflare traffic analytics
- Cloudflare security events
- GA4 active users and events
- Google Search Console indexing
- Google Search Console queries and impressions

## Current Security Decision

Do not over-engineer security now.

QRPrintly is static and low risk today. The main priority is to protect:

1. Cloudflare account
2. GitHub account
3. DNS records
4. Public contact email
5. Analytics privacy