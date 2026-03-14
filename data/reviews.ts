export type ReviewerRole = "student" | "developer" | "freelancer" | "graduate";

export interface Review {
  id: string;
  name: string;
  role: ReviewerRole;
  roleLabel: string;
  university?: string;
  yearLabel?: string;
  /** Place photos in /public/reviews/r1.jpg, r2.jpg … */
  imageSrc: string;
  avatarFallback: string;
  rating: 5 | 4;
  quote: string;
  highlight: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Antoine",
    role: "student",
    roleLabel: "Highschool Student",
    yearLabel: "10th Grade",
    imageSrc: "/reviews/r1.png",
    avatarFallback: "AT",
    rating: 5,
    quote:
      "I'm not even in university yet — I just love coding. Helm gave me a real roadmap instead of random YouTube rabbit holes. I started the Web Dev track as a hobby and now I'm building actual projects. Didn't expect a site this good to exist for free.",
    highlight: "Web Dev Track",
  },
  {
    id: "r2",
    name: "Arshodyk",
    role: "student",
    roleLabel: "CS Student",
    yearLabel: "1st year",
    imageSrc: "/reviews/r2.png",
    avatarFallback: "AR",
    rating: 5,
    quote:
      "First week of university and I had no idea what I was supposed to be doing outside of lectures. A friend sent me Helm and it completely changed how I approached my studies. The year filter showing exactly what matters for first years is something I didn't know I needed.",
    highlight: "Year Filter",
  },
  {
    id: "r3",
    name: "Leen",
    role: "student",
    roleLabel: "CS Student",
    yearLabel: "1st year",
    imageSrc: "/reviews/r4.jpg",
    avatarFallback: "LE",
    rating: 5,
    quote:
      "I was overwhelmed by how much there is to learn in CS. Helm broke it down in a way that actually made sense to me. I used the Financial Aid helper to get into an Andrew Ng course for free — got approved in 8 days. As a first year that felt like a huge win.",
    highlight: "Financial Aid",
  },
  {
    id: "r4",
    name: "Lara",
    role: "student",
    roleLabel: "CS Student",
    yearLabel: "3rd year",
    imageSrc: "/reviews/r5.jpg",
    avatarFallback: "LA",
    rating: 5,
    quote:
      "Third year is when things get real — internships, specializations, figuring out what you actually want to do. Helm's career section explained the Egyptian hiring timeline better than anyone in my university ever did. Applied to two companies and knew exactly what to expect.",
    highlight: "Career Section",
  },
  {
    id: "r5",
    name: "Khalid",
    role: "graduate",
    roleLabel: "Recent Graduate",
    imageSrc: "/reviews/r3.jpg",
    avatarFallback: "KH",
    rating: 5,
    quote:
      "I wish this existed when I was in second year. The CV guide alone would have saved me months of applying with a terrible resume. Even now as a graduate I come back to the tools page whenever I'm setting up a new environment. It's just the most honest Egyptian dev resource out there.",
    highlight: "CV Guide",
  },
];
