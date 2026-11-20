/**
 * All Red Horse content in one place, taken from redhorsecs.com.
 * Edit text here; pages read from this file.
 */

export const site = {
  name: "Red Horse Combat Sports",
  shortName: "Red Horse",
  legalName: "Red Horse Combat Sports LLC",
  descriptor: "Kickboxing gym in Oklahoma City",
  url: "https://redhorsecs.com",
  description:
    "Kickboxing for every level in Oklahoma City. Beginner-friendly classes, real coaching and no egos. Your first class is free. 3718 NW 50th St.",
  address: {
    street: "3718 NW 50th St",
    city: "Oklahoma City",
    region: "OK",
    postal: "73112",
    full: "3718 NW 50th St, Oklahoma City, OK 73112",
  },
  geo: { lat: 35.521991, lng: -97.5848676 },
  email: "cody@redhorsecs.com",
  phone: "(405) 361-5815",
  phoneHref: "tel:+14053615815",
  /** Class times, short form for headers, footers and info lines. */
  hours: "Mon–Fri 3–7 PM · Sat 10–11 AM",
  facebook: "https://www.facebook.com/profile.php?id=100067196684265",
  instagram: "https://www.instagram.com/red.horsecs/",
  reviews: "https://www.google.com/maps/search/?api=1&query=Red+Horse+Combat+Sports+3718+NW+50th+St+Oklahoma+City",
  mapsEmbed:
    "https://maps.google.com/maps?q=3718%20NW%2050th%20St%2C%20Oklahoma%20City%2C%20OK%2073112&t=m&z=14&output=embed&iwloc=near",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=3718+NW+50th+St+Oklahoma+City+OK+73112",
}

/** One CTA vocabulary, used everywhere (copy spec). */
export const cta = {
  primary: "Claim your free class",
  nav: "Free class",
  submit: "Book my free class",
  call: `Call ${site.phone}`,
  directions: "Get directions",
}

/** Prices from the conversion plan. */
export const pricing = {
  dropIn: 20,
  monthly: 125,
}

/** Header nav (labels 10 chars max). The "Free class" button sits beside it. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/schedule/", label: "Schedule" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/location/", label: "Visit" },
]

/** Footer links: everything, including FAQ (footer only) and the secondary pages. */
export const footerNav = [
  { href: "/free-class/", label: "Free class" },
  { href: "/schedule/", label: "Schedule" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/faq/", label: "FAQ" },
  { href: "/why-red-horse/", label: "Why Red Horse" },
  { href: "/in-action/", label: "In Action" },
  { href: "/location/", label: "Visit" },
]

export const offerings = [
  { title: "Group Kickboxing Classes", description: "High-energy classes in small groups, coached every round." },
  { title: "Private Training", description: "One-on-one coaching built around your goals." },
  { title: "Community Engagement", description: "Events and opportunities to train and connect with the team." },
  { title: "Self-Defense Workshops", description: "Practical skills to protect yourself with confidence." },
]

export const learnings = [
  "How to strike with accuracy, speed, and power",
  "Defensive skills like blocking, slipping, and smart footwork",
  "Ways to build strength, endurance, and overall conditioning",
  "Techniques to increase flexibility and prevent injury",
  "Mental focus, discipline, and confidence inside and outside the gym",
]

export const difference = [
  { title: "Oklahoma’s only", description: "Kickboxing-focused gym in the state." },
  { title: "Intimate classes", description: "Small class sizes, so coaches see every rep." },
  { title: "Superior conditioning", description: "A training focus that builds real fitness." },
  { title: "World-class coaching", description: "Experience from the gym to the cage." },
]

export const faqs = [
  {
    q: "Can I start kickboxing with no experience?",
    a: "Yes. No experience is needed. Our classes are beginner-friendly, and our coaches teach you every move from the ground up.",
  },
  {
    q: "Am I too old or out of shape to start?",
    a: "No. Most of our members walked in as beginners. Go at your own pace; your coach will help you build fitness and skills a little more each class.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Water and workout clothes. If you have them, 16 oz boxing gloves and shinguards. If you don’t, no sweat: borrow ours.",
  },
  {
    q: "Is kickboxing a good workout for weight loss or fitness?",
    a: "Absolutely. Kickboxing is a full-body workout that improves cardio, burns calories, builds strength and increases flexibility.",
  },
  {
    q: "Will I have to spar?",
    a: "Sparring stays low-speed, so you learn to apply offense and defense without getting rattled.",
  },
  {
    q: "Do you offer classes for kids or teens?",
    a: "Yes. Our youth programs teach discipline, fitness and self-defense in a fun, safe setting.",
  },
  {
    q: "How often should I train?",
    a: "We recommend 2–3 classes a week to start. You’ll build skills and stamina gradually without feeling overwhelmed.",
  },
  {
    q: "How much does kickboxing cost at Red Horse?",
    a: `Your first class is free. After that, drop in for $${pricing.dropIn} a class or join for $${pricing.monthly} a month.`,
  },
]

/** Photos from the "In Action" page (public/images/gallery). */
export const gallery = [
  31, 22, 13, 50, 49, 48, 42, 43, 44, 45, 46, 47, 40, 30, 21, 12, 39, 38, 32, 33, 34, 35,
  36, 37, 29, 20, 26, 27, 25, 11, 28, 24, 23, 19, 10, 53, 15, 16, 51, 17, 52, 18, 14, 41,
].map((n) => ({ src: `/images/gallery/${n}.jpg`, alt: `Kickboxing training at Red Horse Combat Sports, Oklahoma City (photo ${n})` }))

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

/** Weekly classes, one tab each on /schedule. Order here is the tab order. */
export const classes: {
  id: string
  name: string
  level: string
  description: string
  days: string[]
  time: string
}[] = [
  {
    id: "youth",
    name: "Youth",
    level: "Kids and teens",
    description: "Discipline, fitness and self-defense for kids and teens, in a fun, safe setting.",
    days: weekdays,
    time: "3–4 PM",
  },
  {
    id: "beginner",
    name: "Beginner",
    level: "New to kickboxing",
    description: "Every move taught from the ground up. The best place to start.",
    days: weekdays,
    time: "6–7 PM",
  },
  {
    id: "advanced",
    name: "Advanced",
    level: "Experienced",
    description: "A faster pace for members with experience.",
    days: weekdays,
    time: "5–6 PM",
  },
  {
    id: "conditioning",
    name: "Conditioning",
    level: "Everyone",
    description: "A hard, fun hour of conditioning for every level.",
    days: weekdays,
    time: "4–5 PM",
  },
  {
    id: "open-training",
    name: "Open training",
    level: "Everyone",
    description: "Saturday training, open to every level.",
    days: ["Saturday"],
    time: "10–11 AM",
  },
]

/** Who it's for (homepage cards). */
export const audiences = [
  { title: "Total beginners", line: "Never thrown a punch? Most of our members started exactly there." },
  { title: "Fitness", line: "A hard, fun hour of conditioning that doesn’t feel like a treadmill." },
  { title: "Fighters", line: "Sparring and fight prep when you’re ready to compete." },
  { title: "Youth", line: "Classes for kids and teens, focused on discipline and confidence." },
]
