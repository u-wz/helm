import Image from "next/image";

export const SITE_NAME = "Helm";
export const SITE_TAGLINE =
  "Everything Computer Science students need. In one place.";
export const AUTHOR_NAME = ".uwz";
export const AUTHOR_GITHUB = "https://github.com/u-wz";
export const GITHUB_REPO = "https://github.com/u-wz/helm";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Courses", href: "/courses" },
  { label: "Careers", href: "/careers" },
  { label: "Tools", href: "/tools" },
  { label: "CV & Projects", href: "/cv-projects" },
] as const;

export const PAGE_ACCENTS = {
  home: "#FFE500",
  roadmaps: "#4361EE",
  courses: "#06D6A0",
  careers: "#FF6B35",
  tools: "#9B5DE5",
  cvProjects: "#FF0F80",
} as const;

export const BADGE_COLORS = {
  beginner: { bg: "#D1FAE5", border: "#059669", text: "#065F46" },
  intermediate: { bg: "#FEF3C7", border: "#D97706", text: "#92400E" },
  advanced: { bg: "#FEE2E2", border: "#DC2626", text: "#991B1B" },
  free: { bg: "#DCFCE7", border: "#16A34A", text: "#14532D" },
  paid: { bg: "#F3E8FF", border: "#9333EA", text: "#581C87" },
  audit_free: { bg: "#FFF7ED", border: "#EA580C", text: "#7C2D12" },
  arabic: { bg: "#FFF7ED", border: "#EA580C", text: "#7C2D12" },
  certificate: { bg: "#EFF6FF", border: "#2563EB", text: "#1E3A8A" },
  youtube: { bg: "#FEE2E2", border: "#DC2626", text: "#991B1B" },
  website: { bg: "#F0FDF4", border: "#15803D", text: "#14532D" },
} as const;
