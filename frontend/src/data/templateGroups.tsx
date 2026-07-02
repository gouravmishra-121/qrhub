import { BadgeIndianRupee, MessageCircle, Store, User, Utensils, Wifi } from 'lucide-react'

export const templateGroups = [
  {
    icon: <BadgeIndianRupee className="h-7 w-7" />,
    title: 'UPI Payment Templates',
    description:
      'Print-ready payment QR layouts for shops, stalls, freelancers and small businesses.',
    examples: ['Shop counter QR', 'Payment standee', 'Small business payment card'],
    primaryAction: '/upi',
  },
  {
    icon: <Store className="h-7 w-7" />,
    title: 'Business QR Templates',
    description:
      'Professional QR layouts for stores, offices, service providers and local businesses.',
    examples: ['Storefront QR', 'Service inquiry QR', 'Business contact QR'],
    primaryAction: '/website',
  },
  {
    icon: <Utensils className="h-7 w-7" />,
    title: 'Restaurant QR Templates',
    description:
      'Menu, table, feedback and payment QR layouts for restaurants, cafes and food counters.',
    examples: ['Menu QR', 'Table QR', 'Feedback QR'],
    primaryAction: '/website',
  },
  {
    icon: <User className="h-7 w-7" />,
    title: 'vCard Contact Templates',
    description:
      'Modern contact-card QR layouts for business cards, networking and personal branding.',
    examples: ['Business card QR', 'Portfolio contact QR', 'Sales contact QR'],
    primaryAction: '/vcard',
  },
  {
    icon: <Wifi className="h-7 w-7" />,
    title: 'WiFi Templates',
    description: 'Clean WiFi QR layouts for hotels, homes, cafes, offices and guest areas.',
    examples: ['Guest WiFi card', 'Hotel WiFi QR', 'Cafe WiFi QR'],
    primaryAction: '/wifi',
  },
  {
    icon: <MessageCircle className="h-7 w-7" />,
    title: 'WhatsApp Templates',
    description: 'Customer inquiry and support QR layouts that open WhatsApp chats quickly.',
    examples: ['Support QR', 'Sales inquiry QR', 'Order on WhatsApp QR'],
    primaryAction: '/whatsapp',
  },
]
