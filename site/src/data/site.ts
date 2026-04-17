export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const site = {
  name: 'ONFIT',
  phone: '+251 91 234 5678',
  email: 'hello@onfit.club',
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
  },
};

export const navHrefs = [
  { key: 'about' as const, href: '#about' },
  { key: 'programs' as const, href: '#programs' },
  { key: 'equipment' as const, href: '#equipment' },
  { key: 'gallery' as const, href: '#gallery' },
  { key: 'pricing' as const, href: '#pricing' },
  { key: 'contact' as const, href: '#contact' },
];

export const programImages = [
  asset('images/IMG_1252.jpg'),
  asset('images/IMG_1253.jpg'),
  asset('images/IMG_1259.jpg'),
  asset('images/IMG_1233.jpg'),
  asset('images/IMG_1240.jpg'),
  asset('images/IMG_1243.jpg'),
];

export const equipmentImages = [
  asset('images/IMG_1233.jpg'),
  asset('images/IMG_1252.jpg'),
  asset('images/IMG_1236.jpg'),
  asset('images/IMG_1243.jpg'),
];

export const galleryImages = [
  asset('images/IMG_1456.jpg'),
  asset('images/IMG_1233.jpg'),
  asset('images/IMG_1234.jpg'),
  asset('images/IMG_1236.jpg'),
  asset('images/IMG_1237.jpg'),
  asset('images/IMG_1238.jpg'),
  asset('images/IMG_1245.jpg'),
  asset('images/IMG_1252.jpg'),
];

export const pricingTierPrices = [49, 99, 199];
export const pricingFeatured = [false, true, false];

export const testimonials = [
  {
    quote:
      'The branded ONFIT machines feel different — smoother, more honest. You can\'t cheat the rep. I love it.',
    name: 'Alex M.',
    role: 'Member · 2 years',
  },
  {
    quote:
      'Lost 24 lbs and finally hit a 300 lb deadlift. The space, the dumbbell wall, the energy — it all just works.',
    name: 'Priya S.',
    role: 'Member · 1 year',
  },
  {
    quote:
      'Best floor I\'ve trained on. Clean, branded, organized, and full of every machine I actually want.',
    name: 'Marcus T.',
    role: 'Member · 3 years',
  },
  {
    quote:
      'Walked in nervous, walked out a regular. The "ONE MORE." mural says it all — this place pushes you.',
    name: 'Eliza K.',
    role: 'Member · 6 months',
  },
];
