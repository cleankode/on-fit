export type Lang = 'en' | 'ti';

export type Dict = {
  nav: {
    about: string;
    programs: string;
    equipment: string;
    gallery: string;
    pricing: string;
    contact: string;
    signIn: string;
    joinNow: string;
  };
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
  };
  stats: { value: string; label: string }[];
  marquee: string[];
  about: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    body: string;
    pillars: { title: string; desc: string }[];
  };
  programs: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    items: { title: string; subtitle: string; desc: string; tag: string }[];
  };
  equipment: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    signature: string;
    tagline: string;
    items: { title: string; desc: string }[];
  };
  gallery: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    alt: string;
  };
  pricing: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    mostPopular: string;
    per: string;
    footnote: string;
    tiers: { name: string; desc: string; features: string[]; cta: string }[];
  };
  testimonials: {
    eyebrow: string;
    titleA: string;
    titleB: string;
  };
  cta: {
    headlineA: string;
    headlineB: string;
    highlight: string;
    body: string;
    tagline: string;
    primary: string;
    secondary: string;
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    thanks: { title: string; body: string; again: string };
    fields: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      goal: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      terms: string;
    };
    goals: string[];
    visitLabel: string;
    callLabel: string;
    emailLabel: string;
    hoursLabel: string;
  };
  footer: {
    tagline: string;
    explore: string;
    visit: string;
    rights: string;
    terms: string;
    privacy: string;
    cookies: string;
    oneMore: string;
  };
  faqs: { q: string; a: string }[];
  hours: { day: string; hours: string }[];
  address: string;
};

const en: Dict = {
  nav: {
    about: 'About',
    programs: 'Programs',
    equipment: 'Equipment',
    gallery: 'Gallery',
    pricing: 'Pricing',
    contact: 'Contact',
    signIn: 'Sign in',
    joinNow: 'Join Now',
  },
  hero: {
    eyebrow: 'Mekelle, Ethiopia · A Training Club',
    headline1: 'One',
    headline2: 'More.',
    body: '12,000 m² of branded plate-loaded machines, full dumbbell walls, and a floor built for people who take training seriously. No fluff. No half-reps.',
    ctaPrimary: 'Start your 7-day trial',
    ctaSecondary: 'Explore programs',
    chips: ['Branded ONFIT machines', 'Full dumbbell wall', 'Open 5 AM — 11 PM'],
  },
  stats: [
    { value: '12K', label: 'm² Floor' },
    { value: '120+', label: 'Branded Machines' },
    { value: '5—11', label: 'Daily Hours' },
    { value: '7', label: 'Days a Week' },
  ],
  marquee: [
    'Strength',
    'Conditioning',
    'Mobility',
    'Olympic Lifting',
    'HIIT',
    'Recovery',
    'Performance',
    'Community',
  ],
  about: {
    eyebrow: 'Why ONFIT',
    titleA: 'Not another',
    titleB: 'big box',
    titleC: 'gym.',
    body: 'We built ONFIT for people who want more than mirrors and machines. You bring the drive — we bring the science, the space, and the squad.',
    pillars: [
      {
        title: 'Branded ONFIT machines',
        desc: 'Our entire plate-loaded line is custom-built and branded. Honest mechanics, no excuses.',
      },
      {
        title: 'A floor built to deliver',
        desc: '12,000 m² of branded equipment, full dumbbell racks, cable jungles, and dedicated cardio decks.',
      },
      {
        title: '"ONE MORE." mentality',
        desc: "It's painted on the wall and lived on the floor. We're here to push, not posture.",
      },
      {
        title: 'No half-empty racks',
        desc: "Every rack full. Every machine working. Every rep counted. That's the promise.",
      },
    ],
  },
  programs: {
    eyebrow: 'Programs',
    titleA: 'Programs built for',
    titleB: 'every level.',
    body: "Whether you're just starting or chasing a new PR, we have a track for you. Explore six pillars designed by coaches who compete.",
    items: [
      {
        title: 'Strength',
        subtitle: 'Build the foundation',
        desc: 'Free weights, branded ONFIT plate-loaded machines, and progressive overload that actually moves the needle.',
        tag: '01',
      },
      {
        title: 'Hypertrophy',
        subtitle: 'Train the body you want',
        desc: 'Full racks of dumbbells, cables, and isolation machines built for serious volume and time-under-tension.',
        tag: '02',
      },
      {
        title: 'Push & Press',
        subtitle: 'Upper body power',
        desc: 'Chest press, shoulder press, incline and decline — all the angles you need for complete upper-body development.',
        tag: '03',
      },
      {
        title: 'Power & Plate-Loaded',
        subtitle: 'Move heavy iron',
        desc: 'Our signature ONFIT plate-loaded machines deliver pure, biomechanically-tuned strength training.',
        tag: '04',
      },
      {
        title: 'Conditioning',
        subtitle: 'Build the engine',
        desc: 'Cardio decks, dip stations, and dedicated zones for steady-state and interval work — engine on demand.',
        tag: '05',
      },
      {
        title: 'Functional & Cable',
        subtitle: 'Move with purpose',
        desc: 'Cable jungles and functional rigs for athletic, multi-planar training that translates outside the gym.',
        tag: '06',
      },
    ],
  },
  equipment: {
    eyebrow: 'The Floor',
    titleA: 'Branded.',
    titleB: 'Built different.',
    body: 'Our entire strength line is custom-built and branded ONFIT. Honest mechanics, commercial-grade construction, and zero compromises.',
    signature: 'ONFIT signature',
    tagline: 'Commercial-grade · Branded · Built to last',
    items: [
      {
        title: 'Signature ONFIT plate-loaded line',
        desc: 'Custom plate-loaded machines designed in-house — pure mechanical feedback, zero cable slop.',
      },
      {
        title: 'Full-rack dumbbell wall',
        desc: 'Branded ONFIT dumbbells from 5 lb to 150 lb. No waiting. No half-empty racks.',
      },
      {
        title: 'The "ONE MORE." floor',
        desc: 'Our flagship strength room — every machine, every plate, branded and ready when you are.',
      },
      {
        title: 'Cable & functional jungle',
        desc: 'Multi-station cable towers for unilateral work, mobility, and pre-hab.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Inside ONFIT',
    titleA: 'The space',
    titleB: 'built for you.',
    body: '12,000 m² of premium equipment, recovery tools, and design that makes you want to show up — every single day.',
    alt: 'ONFIT facility',
  },
  pricing: {
    eyebrow: 'Membership',
    titleA: 'Flexible plans.',
    titleB: 'No contracts.',
    body: 'Month-to-month. Cancel or pause anytime. Every plan includes access to our members-only app, programming library, and events.',
    mostPopular: 'Most popular',
    per: 'mo',
    footnote: 'All plans start with a free consultation and intro session. No joining fee.',
    tiers: [
      {
        name: 'Starter',
        desc: 'Perfect for getting started. Off-peak access, full equipment.',
        features: [
          'Off-peak access (10am–4pm)',
          'Full equipment access',
          'Standard locker',
          'Mobile app & programming',
        ],
        cta: 'Start now',
      },
      {
        name: 'Unlimited',
        desc: 'Our most popular plan. All-day access, every machine.',
        features: [
          'Unlimited all-hours access',
          'Branded ONFIT equipment line',
          'Bring a friend (2/mo)',
          'Recovery zone access',
          'Programming library',
        ],
        cta: 'Most popular',
      },
      {
        name: 'Coached',
        desc: 'Add 1-on-1 coaching, programming, and accountability.',
        features: [
          'Everything in Unlimited',
          '4 coaching sessions / month',
          'Custom training plan',
          'Form review & feedback',
          'Priority booking',
        ],
        cta: 'Get coached',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Members',
    titleA: 'Real people.',
    titleB: 'Real results.',
  },
  cta: {
    headlineA: 'Walk the floor.',
    headlineB: 'On',
    highlight: 'us.',
    body: 'Stop by for a free guided tour. See the branded floor, every machine, and the wall that says it all —',
    tagline: 'ONE MORE.',
    primary: 'Book a tour',
    secondary: 'See pricing',
  },
  contact: {
    eyebrow: 'Join ONFIT',
    titleA: "Let's get you",
    titleB: 'started.',
    body: 'Fill out the form below and a coach will reach out within 24 hours to schedule your free intro and facility tour.',
    thanks: {
      title: 'Welcome to ONFIT.',
      body: 'We got your info. A coach will reach out within 24 hours to schedule your free intro.',
      again: 'Send another',
    },
    fields: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      goal: 'Goal',
      message: 'Message (optional)',
      messagePlaceholder: "Tell us what you're working toward...",
      submit: 'Claim my free intro',
      terms: 'By submitting you agree to our terms and privacy policy.',
    },
    goals: ['Lose fat', 'Build muscle', 'Get strong', 'Feel better'],
    visitLabel: 'Visit us',
    callLabel: 'Call',
    emailLabel: 'Email',
    hoursLabel: 'Hours',
  },
  footer: {
    tagline: 'A training club built around branded equipment, an honest floor, and a wall that says it all —',
    explore: 'Explore',
    visit: 'Visit',
    rights: 'ONFIT Athletic Club. All rights reserved.',
    terms: 'Terms',
    privacy: 'Privacy',
    cookies: 'Cookies',
    oneMore: 'One More.',
  },
  faqs: [
    {
      q: 'Do I need experience to join?',
      a: 'Not at all. Every new member gets a free orientation walkthrough so you know how to use every piece of equipment safely and effectively.',
    },
    {
      q: 'Can I tour the gym before signing up?',
      a: 'Yes — drop in any time during staffed hours, or book a guided tour through the contact form below.',
    },
    {
      q: 'Are there contracts?',
      a: 'All memberships are month-to-month. Cancel or pause anytime — no lock-in, no hidden fees.',
    },
    {
      q: "What's special about your equipment?",
      a: 'Our plate-loaded line is custom — designed and branded ONFIT — built for biomechanically-correct strength training. Plus a full dumbbell wall, cable jungles, and dedicated cardio decks.',
    },
  ],
  hours: [
    { day: 'Mon — Fri', hours: '5:00 AM — 11:00 PM' },
    { day: 'Saturday', hours: '6:00 AM — 10:00 PM' },
    { day: 'Sunday', hours: '7:00 AM — 9:00 PM' },
  ],
  address: 'Hawelti Sub-City, Mekelle, Tigray, Ethiopia',
};

const ti: Dict = {
  nav: {
    about: 'ብዛዕባና',
    programs: 'መደባት',
    equipment: 'መሳርሒታት',
    gallery: 'ስእልታት',
    pricing: 'ዋጋ',
    contact: 'ርክብ',
    signIn: 'እተው',
    joinNow: 'ሕጂ ተጸምበር',
  },
  hero: {
    eyebrow: 'መቐለ፣ ኢትዮጵያ · ናይ ስፖርት ክለብ',
    headline1: 'One',
    headline2: 'More.',
    body: '12,000 ካሬ ሜትር ብራንድ ኦንፊት መሳርሒታት፣ ምሉእ ናይ ዳምበል ግድግዳ፣ ንስፖርት ብሕልና ንዝተሃተቱ ዝተዳለወ መድረኽ። ዘይጠቅም ዝርርብ የለን። ፍርቂ ዝተደቑ ራውንዳት የለውን።',
    ctaPrimary: 'ናይ 7 መዓልቲ ናጻ ፈተነ ጀምር',
    ctaSecondary: 'መደባት ርአ',
    chips: ['ብራንድ ኦንፊት መሳርሒታት', 'ምሉእ ናይ ዳምበል ግድግዳ', 'ካብ 5:00 ንግሆ ክሳብ 11:00 ለይቲ ክፉት'],
  },
  stats: [
    { value: '12K', label: 'ካሬ ሜትር መድረኽ' },
    { value: '120+', label: 'ብራንድ መሳርሒታት' },
    { value: '5—11', label: 'መዓልታዊ ስዓታት' },
    { value: '7', label: 'መዓልታት ኣብ ሰሙን' },
  ],
  marquee: [
    'ሓይሊ',
    'ኩነታዊ ልምምድ',
    'ምንቅስቓስ',
    'ኦሊምፒክ ምልዓል',
    'HIIT',
    'ምርግጋእ',
    'ኣፈጻጽማ',
    'ማሕበረሰብ',
  ],
  about: {
    eyebrow: 'ስለምንታይ ኦንፊት',
    titleA: 'ካልእ',
    titleB: 'ዓብዪ',
    titleC: 'ጂም ኣይኮነን።',
    body: 'ኦንፊት ካብ መስትያትን መሳርሒታትን ንላዕሊ ንዝደልዩ ሰባት ተሃኒጹ። ንስኻ ድልየት ኣምጽእ — ንሕና ድማ ሳይንሳዊ ፍልጠት፣ ቦታን ጋንታን ነቕርብ።',
    pillars: [
      {
        title: 'ብራንድ ኦንፊት መሳርሒታት',
        desc: 'ብሙሉኡ ናይ ፕሌት-ሎድ መስመርና ብሕጊ ዝተሠርሐን ብራንድ ዝሓለወን እዩ። ሓቀኛ ሜካኒክስ፣ ዘይዛረብ ይምጻእ።',
      },
      {
        title: 'ዝዓየየ መድረኽ',
        desc: '12,000 ካሬ ሜትር ብራንድ መሳርሒታት፣ ምሉእ ናይ ዳምበል መደርደርታት፣ ኬብል ጁንግሎታትን፣ ፍሉይ ናይ ካርዲዮ መድረኻትን።',
      },
      {
        title: 'ናይ "ONE MORE." መንፈስ',
        desc: 'ኣብ ግድግዳ ተሰኒቱ፣ ኣብ መድረኽ ድማ ይነብር። ንሕና ክንደፍእ ኢና ዘለና፣ ክንዕውት ኣይኮነን።',
      },
      {
        title: 'ፍርቂ ባዶ መደርደር የለን',
        desc: 'ኩሉ መደርደር ምሉእ። ኩሉ መሳርሒ ዝሰርሕ። ኩሉ ራውንዳት ዝቑፀር። እዚ እዩ መብጽዓና።',
      },
    ],
  },
  programs: {
    eyebrow: 'መደባት',
    titleA: 'ንኩሉ ደረጃ',
    titleB: 'ዝተዳለወ መደባት።',
    body: 'ሕጂ ዘጀመርካ ይኹን ሓድሽ ሪከርድ ዝሓዝካ፣ ንዓኻ ዝምጥን ኣለና። ብዝወዳደሩ ኣሰልጠንቲ ዝተዳለወ ሽዱሽተ ኣዕኑድ ርአ።',
    items: [
      {
        title: 'ሓይሊ',
        subtitle: 'መሰረት ሃነጽ',
        desc: 'ናጻ ሚዛናት፣ ብራንድ ኦንፊት ፕሌት-ሎድ መሳርሒታት፣ ብሓቂ ውጽኢት ዘምጽእ ዘሎ ምዕባለ።',
        tag: '01',
      },
      {
        title: 'ሀይፐርትሮፊ',
        subtitle: 'ዝደለኻዮ ኣካል ኣምሪ',
        desc: 'ምሉእ መደርደር ዳምበል፣ ኬብል፣ ከምኡ\'ውን ንብዙሕ መጠን ልምምድን ነዊሕ እዋን ውጥረትን ዝተሠርሑ መሳርሒታት።',
        tag: '02',
      },
      {
        title: 'ደፋእቲ መሳርሒታት',
        subtitle: 'ናይ ላዕሊ ኣካል ሓይሊ',
        desc: 'ናይ ኣፍልቢ ፕረስ፣ ናይ ክሳድ ፕረስ፣ ናይ ኢንክላይንን ዲክላይንን — ንምሉእ ዕብየት ላዕለዋይ ኣካል ኩሎም ኣንጉዓት።',
        tag: '03',
      },
      {
        title: 'ሓይልን ፕሌት-ሎድን',
        subtitle: 'ከቢድ ሓጺን ኣውርድ',
        desc: 'ፊርማ ኦንፊት ፕሌት-ሎድ መሳርሒታትና ንጹህ፣ ብባዮሜካኒክ ዝተስተኻኸለ ናይ ሓይሊ ልምምድ የቕርቡ።',
        tag: '04',
      },
      {
        title: 'ኩነታዊ ልምምድ',
        subtitle: 'ሞተር ሃንጽ',
        desc: 'ናይ ካርዲዮ መድረኻት፣ ናይ ዲፕ ጣብያታት፣ ንቐጻልን ኢንተርቫልን ስራሕ ዝተዳለወ ቦታታት።',
        tag: '05',
      },
      {
        title: 'ፍንክሽናልን ኬብልን',
        subtitle: 'ብዕላማ ተንቀሳቐስ',
        desc: 'ኬብል ጁንግሎታትን ፍንክሽናል ሪጋታትን ንስፖርታዊ፣ ብብዙሕ ኣንፈት ልምምድ። ካብ ጂም ወጺእካ\'ውን ዝጠቕም።',
        tag: '06',
      },
    ],
  },
  equipment: {
    eyebrow: 'እቲ መድረኽ',
    titleA: 'ብራንድ።',
    titleB: 'ፍሉይ ዝተሰርሐ።',
    body: 'ብሙሉኡ ናይ ሓይሊ መስመርና ብሕጊ ዝተሰርሐን ብኦንፊት ዝተበራንደን እዩ። ሓቀኛ ሜካኒክስ፣ ንግዳዊ ደረጃ ህንጸት፣ ምንም ዘይስማምዕ።',
    signature: 'ፊርማ ኦንፊት',
    tagline: 'ንግዳዊ ደረጃ · ብራንድ · ነዊሕ ዝጸንሕ',
    items: [
      {
        title: 'ፊርማ ኦንፊት ፕሌት-ሎድ መስመር',
        desc: 'ብውሽጢ ዝተዳለወ ፕሌት-ሎድ መሳርሒታት — ንጹህ ሜካኒካዊ መልሲ፣ ዘይተመጠጠ ኬብል።',
      },
      {
        title: 'ምሉእ መደርደር ናይ ዳምበል ግድግዳ',
        desc: 'ብራንድ ኦንፊት ዳምበል ካብ 5 ፓውንድ ክሳብ 150 ፓውንድ። ምጽባይ የለን። ፍርቂ ባዶ መደርደር የለን።',
      },
      {
        title: 'ናይ "ONE MORE." መድረኽ',
        desc: 'ፍሉይ ናይ ሓይሊ ክፍልና — ነፍሲ ወከፍ መሳርሒ፣ ነፍሲ ወከፍ ፕሌት፣ ብራንድ ተሓልዩ ንዓኻ ዝጽበ።',
      },
      {
        title: 'ኬብልን ፍንክሽናል ጁንግልን',
        desc: 'ብዙሕ ጣብያታት ዘለውዎም ኬብል ግምባታት ንሓደ-ጎኒ ስራሕ፣ ምንቅስቓስ፣ ከምኡ\'ውን ቅድመ-ምክልኻል።',
      },
    ],
  },
  gallery: {
    eyebrow: 'ውሽጢ ኦንፊት',
    titleA: 'እቲ ቦታ',
    titleB: 'ንዓኻ ዝተዳለወ።',
    body: '12,000 ካሬ ሜትር ናይ ቀዳማይ ደረጃ መሳርሒታት፣ ናይ ምርግጋእ መሳርሒታት፣ ነፍሲ ወከፍ መዓልቲ ክትመጽእ ዝብህግ ዲዛይን።',
    alt: 'ናይ ኦንፊት መደበር',
  },
  pricing: {
    eyebrow: 'ኣባልነት',
    titleA: 'ተለዋዋጢ መደባት።',
    titleB: 'ውዕል የለን።',
    body: 'ወርሓዊ። ኣብ ዝኾነ እዋን ሰርዝ ወይ ኣቋርጽ። ኩሉ መደብ ናብ ኣባልነት ጥራይ ዝዕደል ኣፕ፣ ቤተ-መጻሕፍቲ መደባትን፣ ፍጻመታትን የአትው።',
    mostPopular: 'ኣዝዩ ተፈታዊ',
    per: 'ወርሒ',
    footnote: 'ኩሎም መደባት ብናጻ ምኽርን መእተዊ ክፍለ-ጊዜን ይጅምሩ። ናይ ምጽንባር ክፍሊት የለን።',
    tiers: [
      {
        name: 'መጀመርታ',
        desc: 'ንምጅማር ፍጹም። ናይ ዘይጸቢብ እዋን እቶት፣ ምሉእ መሳርሒታት።',
        features: [
          'ዘይጸቢብ እዋን እቶት (10am–4pm)',
          'ምሉእ ናይ መሳርሒ እቶት',
          'ስታንዳርድ ሎከር',
          'ሞባይል ኣፕን መደባትን',
        ],
        cta: 'ሕጂ ጀምር',
      },
      {
        name: 'ዘይተወሰነ',
        desc: 'ኣዝዩ ተፈታዊ መደብና። ምሉእ መዓልቲ እቶት፣ ኩሉ መሳርሒ።',
        features: [
          'ዘይተወሰነ ኩሉ ስዓታት እቶት',
          'ብራንድ ኦንፊት መስመር መሳርሒታት',
          'ዓርኪ ኣምጽእ (2 ኣብ ወርሒ)',
          'ናይ ምርግጋእ ቦታ እቶት',
          'ቤተ-መጻሕፍቲ መደባት',
        ],
        cta: 'ኣዝዩ ተፈታዊ',
      },
      {
        name: 'ምስ ኣሰልጣኒ',
        desc: 'ሓደ-ብ-ሓደ ኣሰልጣኒ፣ መደብ፣ ከምኡ\'ውን ተሓታትነት ወስኽ።',
        features: [
          'ኩሉ ኣብ "ዘይተወሰነ" ዘሎ',
          '4 ክፍለ-ጊዜያት ኣሰልጣኒ / ወርሒ',
          'ብውልቃዊ ዝተዳለወ መደብ ልምምድ',
          'ናይ ፎርም ግምገማን ሓሳብን',
          'ቀዳምነት ዘለዎ ቆጸራ',
        ],
        cta: 'ኣሰልጣኒ ርከብ',
      },
    ],
  },
  testimonials: {
    eyebrow: 'ኣባላት',
    titleA: 'ሓቀኛታት ሰባት።',
    titleB: 'ሓቀኛ ውጽኢታት።',
  },
  cta: {
    headlineA: 'መድረኽ ረአ።',
    headlineB: 'ብ',
    highlight: 'ናጻ።',
    body: 'ብናጻ ዝተመርሐ ዙረት ንምርኣይ ብጽሓና። ብራንድ መድረኽ፣ ነፍሲ ወከፍ መሳርሒ፣ ኩሉ ዝነግር ግድግዳ ርአ —',
    tagline: 'ONE MORE.',
    primary: 'ዙረት ሓዝ',
    secondary: 'ዋጋ ርአ',
  },
  contact: {
    eyebrow: 'ተጸምበር ኦንፊት',
    titleA: 'ንጀምሮ',
    titleB: 'እምበኣር።',
    body: 'ኣብ ታሕቲ ዘሎ ቅጥዒ ምላእ፣ ኣሰልጣኒ ኣብ ውሽጢ 24 ስዓታት ነጻ መእተዊን ናይ ቦታ ዙረትን ክቖጽረልካ ክረኽበካ እዩ።',
    thanks: {
      title: 'እንቋዕ ናብ ኦንፊት መጻእኻ።',
      body: 'ሓበሬታኻ ተቐቢልና ኢና። ኣሰልጣኒ ኣብ ውሽጢ 24 ስዓታት ነጻ መእተዊ ንምቛጽር ክረኽበካ እዩ።',
      again: 'ካልእ ላኣኽ',
    },
    fields: {
      firstName: 'ስም',
      lastName: 'ስም ኣቦ',
      email: 'ኢመይል',
      phone: 'ተሌፎን',
      goal: 'ዕላማ',
      message: 'መልእኽቲ (ኣማራጺ)',
      messagePlaceholder: 'እንታይ ክትሰርሕ ትደሊ ከም ዘለኻ ንገረና...',
      submit: 'ነጻ መእተዊ ይዕደለኒ',
      terms: 'ብምልኣኽኻ ናይ ደንብታትናን ናይ ዕቱብነት ፖሊሲናን ትቕበል።',
    },
    goals: ['ስብሒ ኣጉዲል', 'ጡንቸ ሃንጽ', 'ሓያል ኩን', 'ብሉጽ ተሰምዓኒ'],
    visitLabel: 'ብጽሓና',
    callLabel: 'ደውል',
    emailLabel: 'ኢመይል',
    hoursLabel: 'ስዓታት',
  },
  footer: {
    tagline: 'ብብራንድ መሳርሒታት፣ ሓቀኛ መድረኽን ኩሉ ዝነግር ግድግዳን ዝተሃነጸ ናይ ስፖርት ክለብ —',
    explore: 'ርአ',
    visit: 'ብጽሓና',
    rights: 'ኦንፊት ናይ ስፖርት ክለብ። ኩሉ መሰል ዝተሓለወ እዩ።',
    terms: 'ደንብታት',
    privacy: 'ዕቱብነት',
    cookies: 'ኩኪስ',
    oneMore: 'One More.',
  },
  faqs: [
    {
      q: 'ንምጽንባር ተሞክሮ የድልየኒ ድዩ?',
      a: 'ፈጺሙ ኣየድልን። ነፍሲ ወከፍ ሓድሽ ኣባል ነፍሲ ወከፍ መሳርሒ ብዝግባእን ብውሕስነትን ክትጥቀመሉ ዘኽእለካ ናጻ መእተዊ ዙረት ይወሃቦ።',
    },
    {
      q: 'ቅድሚ ምጽንባር ጂም ክጎብኞ እኽእል ድየ?',
      a: 'እወ — ኣብ ስራሕ ስዓታት ኣብ ዝኾነ እዋን ብጽሓና፣ ወይ ኣብ ታሕቲ ብዘሎ ናይ ርክብ ቅጥዒ ዝተመርሐ ዙረት ሓዝ።',
    },
    {
      q: 'ውዕል ኣሎ ድዩ?',
      a: 'ኩሉ ኣባልነት ወርሓዊ እዩ። ኣብ ዝኾነ እዋን ሰርዝ ወይ ኣቋርጽ — መቐየዲ የለን፣ ዝተሓብአ ክፍሊት የለን።',
    },
    {
      q: 'መሳርሒኹም እንታይ ፍሉይ እዩ?',
      a: 'ናትና ፕሌት-ሎድ መስመር ብውሽጢ ዝተዳለወ — ዝተነድፈን ብኦንፊት ዝተበራንደን — ብባዮሜካኒክ ልክዕ ናይ ሓይሊ ልምምድ ዝተሠርሐ። ምስ ምሉእ ናይ ዳምበል ግድግዳ፣ ኬብል ጁንግሎታት፣ ፍሉይ ናይ ካርዲዮ መድረኻት።',
    },
  ],
  hours: [
    { day: 'ሰኑይ — ዓርቢ', hours: '5:00 ንግሆ — 11:00 ለይቲ' },
    { day: 'ቀዳም', hours: '6:00 ንግሆ — 10:00 ለይቲ' },
    { day: 'ሰንበት', hours: '7:00 ንግሆ — 9:00 ለይቲ' },
  ],
  address: 'ሃወልቲ ክ/ከተማ፣ መቐለ፣ ትግራይ፣ ኢትዮጵያ',
};

export const dict: Record<Lang, Dict> = { en, ti };
