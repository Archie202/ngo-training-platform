import type { BlogPost, Cohort, Event, Program } from "@/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/cohorts", label: "Cohorts" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partnership", label: "Partnership" },
  { href: "/donate", label: "Donate" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  { label: "Students trained", value: "12,400+" },
  { label: "Communities reached", value: "86" },
  { label: "Events hosted", value: "210+" },
  { label: "Scholarships provided", value: "3,800+" },
];

export const programs: Program[] = [
  {
    slug: "ai-prompt-engineering",
    title: "AI & Prompt Engineering",
    category: "Technology Training",
    description: "Practical AI fluency, prompt systems, responsible AI use, and productivity workflows.",
    duration: "6 weeks",
    instructor: "AI Education Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    tags: ["AI", "No-code", "Productivity"],
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    category: "Technology Training",
    description: "Spreadsheets, SQL, dashboards, storytelling, and community data projects.",
    duration: "8 weeks",
    instructor: "Data Fellows",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tags: ["Excel", "SQL", "BI"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Technology Training",
    description: "Frontend foundations, accessibility, deployment, and portfolio-ready projects.",
    duration: "12 weeks",
    instructor: "Engineering Mentors",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    tags: ["HTML", "React", "Next.js"],
  },
  {
    slug: "digital-literacy",
    title: "Digital Literacy",
    category: "Community Outreach",
    description: "Foundational digital skills for teachers, market women, youth groups, and local leaders.",
    duration: "4 weeks",
    instructor: "Community Trainers",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tags: ["Access", "Safety", "Productivity"],
  },
  {
    slug: "girls-in-tech",
    title: "Girls in Tech",
    category: "Sponsored Programs",
    description: "Mentorship, hands-on labs, leadership circles, and sponsored learning pathways for girls.",
    duration: "10 weeks",
    instructor: "Women in Tech Council",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    tags: ["Mentorship", "STEM", "Scholarship"],
  },
  {
    slug: "school-innovation-labs",
    title: "School Innovation Labs",
    category: "School Projects",
    description: "Deployable school clubs, teacher enablement, and practical project kits.",
    duration: "Term-based",
    instructor: "School Programs Team",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    tags: ["Schools", "Clubs", "Projects"],
  },
];

export const cohorts: Cohort[] = [
  {
    slug: "ai-foundations-may-2026",
    title: "AI Foundations Cohort",
    course: "AI & Prompt Engineering",
    startDate: "2026-06-15",
    seats: 80,
    availableSeats: 24,
    price: "Free",
    level: "Beginner",
    format: "Online",
  },
  {
    slug: "data-analysis-july-2026",
    title: "Community Data Fellowship",
    course: "Data Analysis",
    startDate: "2026-07-08",
    seats: 50,
    availableSeats: 11,
    price: "Sponsored",
    level: "Intermediate",
    format: "Hybrid",
  },
  {
    slug: "web-dev-bootcamp-august-2026",
    title: "Youth Web Dev Bootcamp",
    course: "Web Development",
    startDate: "2026-08-03",
    seats: 60,
    availableSeats: 18,
    price: "Free",
    level: "Beginner",
    format: "In-person",
  },
];

export const events: Event[] = [
  {
    slug: "ai-for-impact-summit-2026",
    title: "AI for Impact Summit",
    date: "2026-07-21",
    location: "Lagos + livestream",
    type: "Conference",
    description: "A convening for educators, funders, builders, and community leaders applying AI for social good.",
    status: "Upcoming",
  },
  {
    slug: "school-tech-lab-launch",
    title: "School Tech Lab Launch",
    date: "2026-06-08",
    location: "Abeokuta",
    type: "Outreach",
    description: "Hands-on launch of a partner school innovation lab with teacher orientation and student demos.",
    status: "Upcoming",
  },
  {
    slug: "women-in-data-day",
    title: "Women in Data Day",
    date: "2026-03-12",
    location: "Abuja",
    type: "Workshop",
    description: "A practical workshop introducing data storytelling and dashboarding to women-led organizations.",
    status: "Past",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-confidence-in-schools",
    title: "Building AI Confidence in Schools",
    excerpt: "How structured teacher support helps schools adopt AI tools responsibly.",
    category: "AI Education",
    author: "Editorial Team",
    date: "2026-05-01",
    readTime: "5 min read",
  },
  {
    slug: "sponsor-a-student-impact",
    title: "What It Means to Sponsor a Student",
    excerpt: "A transparent look at mentorship, data, laptops, stipends, and program outcomes.",
    category: "Impact",
    author: "Programs Team",
    date: "2026-04-18",
    readTime: "4 min read",
  },
  {
    slug: "community-first-digital-literacy",
    title: "Community-first Digital Literacy",
    excerpt: "Designing learning experiences around local needs, language, trust, and access.",
    category: "Community",
    author: "Outreach Team",
    date: "2026-04-04",
    readTime: "6 min read",
  },
];

export const partners = ["Tech4Good Africa", "Future Schools Network", "Women Build Fund", "Open Learning Lab"];
