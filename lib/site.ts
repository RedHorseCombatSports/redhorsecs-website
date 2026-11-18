/**
 * All Red Horse content in one place, taken from redhorsecs.com.
 * Edit text here; pages read from this file.
 */

export const site = {
  name: "Red Horse Combat Training",
  shortName: "Red Horse",
  tagline: "Unleash your potential",
  description:
    "Oklahoma City’s premier gym dedicated solely to kickboxing, offering elite-level training in a supportive, inclusive, and ego-free environment you won’t find anywhere else.",
  address: {
    street: "3718 NW 50th St",
    city: "Oklahoma City",
    region: "OK",
    postal: "73112",
    full: "3718 NW 50th St, Oklahoma City, OK 73112",
  },
  email: "cody@redhorsecs.com",
  phone: "(405) 361-5815",
  phoneHref: "tel:+14053615815",
  facebook: "https://www.facebook.com/profile.php?id=100067196684265",
  mapsEmbed:
    "https://maps.google.com/maps?q=3718%20NW%2050th%20St%2C%20Oklahoma%20City%2C%20OK%2073112&t=m&z=14&output=embed&iwloc=near",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=3718+NW+50th+St+Oklahoma+City+OK+73112",
}

/** Same URLs as the current site, so links and search rankings carry over. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/why-red-horse", label: "Why Red Horse" },
  { href: "/coachs-corner", label: "Schedule" },
  { href: "/in-action", label: "In Action" },
  { href: "/faq", label: "FAQ" },
  { href: "/location", label: "Find Us" },
  { href: "/hit-us-up", label: "Hit Us Up" },
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
    q: "Do I need any experience to join?",
    a: "No experience is needed! Our classes are beginner-friendly, and our coaches will guide you every step of the way.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Just bring water, workout clothes, 16oz. boxing gloves, shinguards, and a positive attitude. If you need gear, no sweat! We’ve got gear you can borrow or purchase.",
  },
  {
    q: "Is kickboxing a good workout for weight loss or fitness?",
    a: "Absolutely, kickboxing is a full-body workout that improves cardio, burns calories, builds strength, and increases flexibility.",
  },
  {
    q: "Will I be sparring?",
    a: "We focus on low-speed sparring to get you used to applying offensive and defensive techniques in an engaged setting.",
  },
  {
    q: "Do you offer classes for kids or teens?",
    a: "Yes! We have youth programs designed to teach discipline, fitness, and self-defense in a fun, safe environment.",
  },
  {
    q: "How often should I train?",
    a: "We recommend 2-3 times a week to start. You’ll build skills and stamina gradually without feeling overwhelmed.",
  },
  {
    q: "How much does it cost?",
    a: "We offer several membership options and class packs. Your first week is free – come try it out and we’ll go over pricing with you in person.",
  },
]

/** Photos from the "In Action" page (public/images/gallery). */
export const gallery = [
  31, 22, 13, 50, 49, 48, 42, 43, 44, 45, 46, 47, 40, 30, 21, 12, 39, 38, 32, 33, 34, 35,
  36, 37, 29, 20, 26, 27, 25, 11, 28, 24, 23, 19, 10, 53, 15, 16, 51, 17, 52, 18, 14, 41,
].map((n) => ({ src: `/images/gallery/${n}.jpg`, alt: `Red Horse training and fight photo ${n}` }))
