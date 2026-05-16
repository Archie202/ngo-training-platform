export type UserRole = "admin" | "student" | "volunteer";

export type Program = {
  slug: string;
  title: string;
  category: "Technology Training" | "Community Outreach" | "Sponsored Programs" | "School Projects";
  description: string;
  duration: string;
  instructor: string;
  image: string;
  tags: string[];
};

export type Cohort = {
  slug: string;
  title: string;
  course: string;
  startDate: string;
  seats: number;
  availableSeats: number;
  price: "Free" | string;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: "Online" | "Hybrid" | "In-person";
};

export type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  status: "Upcoming" | "Past";
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
};
