# 🇪🇬 Egyptian CS Student Guide — Full Project Specification

> **This document is a complete, production-ready specification for the Egyptian CS Student Guide website.**
> It reflects what is actually built right now, not an original plan. Every page, component, feature, color, interaction, and data structure is defined here.

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project File Structure](#3-project-file-structure)
4. [Design System](#4-design-system)
5. [Global Features](#5-global-features)
6. [Pages — Full Specification](#6-pages--full-specification)
7. [Custom Components — Full Specification](#7-custom-components--full-specification)
8. [Data Files — Full Specification](#8-data-files--full-specification)
9. [Feature Deep Dives](#9-feature-deep-dives)
10. [Footer](#10-footer)
11. [Deployment](#11-deployment)
12. [Implementation Notes for Developers](#12-implementation-notes-for-developers)

---

## 1. Project Overview

**Name:** Egyptian CS Student Guide (Helm)
**Tagline:** "Everything Egyptian CS students need. In one place."
**Author:** .uwz — [github.com/u-wz](https://github.com/u-wz)
**Purpose:** A free, open-source, beautifully designed reference site for Egyptian Computer Science students covering learning roadmaps, career guidance, free courses, developer tools, and CV/project advice.
**Target Audience:** Egyptian CS students at any university, any year (فرقة أولى → رابعة)
**Primary sharing channel:** WhatsApp and Telegram links — mobile-first is non-negotiable

### Key Features Built

1. **Learning Roadmaps** (8 tracks, phased, with progress tracking)
2. **Courses Database** (200+ courses, filters, financial aid helper)
3. **Career OS** (Hiring process, companies, job boards, remote guide, internships)
4. **Toolbox** (100+ tools, category filters, student benefits)
5. **CV & Projects** (CV guide, templates, graduation project guide, project ideas)
6. **NeoBrutalist Design System** (bold borders, hard shadows)
7. **Dark/Light Mode** (fully implemented)
8. **Progress Tracking** (saved locally in browser for roadmaps)
9. **Feedback System** (form and modal)
10. **Responsive Design** (mobile, tablet, desktop)

### Pages

- `/` — Home page
- `/roadmaps` — Learning roadmaps (8 tracks)
- `/courses` — Free & paid courses (200+)
- `/careers` — Career guide, companies, job boards
- `/tools` — Developer tools & free perks
- `/cv-projects` — CV guide, templates, project ideas

---

## 2. Tech Stack

### Core Framework
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**

### Styling
- **Tailwind CSS v4** (utility-first)
- **Custom CSS** (design tokens, animations)
- **Framer Motion** (animations)

### UI Components
- **Radix UI** (@radix-ui/react-dialog) - Accessible primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **clsx + tailwind-merge** - Class name utilities

### Utilities & Security
- **XSS** - Input sanitization
- **Validator** - Input validation
- **Resend** - Email API (feedback form)

### Analytics
- **@vercel/analytics** - Web analytics
- **@vercel/speed-insights** - Core Web Vitals

### Development
- **pnpm** (recommended) or npm/yarn

---

## 3. Project File Structure

```
egyptian-cs-guide/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── careers/page.tsx          # Careers page
│   ├── courses/page.tsx          # Courses page
│   ├── cv-projects/page.tsx      # CV & Projects page
│   ├── roadmaps/page.tsx         # Roadmaps page
│   └── tools/page.tsx            # Tools page
├── components/
│   ├── home/                     # Home components
│   ├── feedback/                 # Feedback components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Navigation
│   │   ├── Footer.tsx            # Footer
│   │   └── ThemeProvider.tsx     # Theme provider
│   └── ui/                       # Reusable UI components
│       ├── NeoCard.tsx           # Card component
│       ├── NeoButton.tsx         # Button component
│       ├── NeoInput.tsx          # Input component
│       ├── NeoAccordion.tsx      # Accordion component
│       ├── NeoBadge.tsx          # Badge component
│       ├── NeoDialog.tsx         # Dialog component
│       ├── NeoToast.tsx          # Toast component
│       ├── NeoStar.tsx           # Decorative star
│       ├── ProgressBar.tsx       # Progress bar
│       └── StarRating.tsx        # Star rating
├── data/                         # Content data files
│   ├── courses.ts                # Course listings (1618 lines)
│   ├── tools.ts                  # Tool listings (2055 lines)
│   ├── roadmaps.ts               # Roadmaps (1539 lines)
│   ├── projects.ts               # Project ideas (364 lines)
│   ├── companies.ts              # Company listings
│   ├── jobBoards.ts              # Job board listings
│   ├── faqs.ts                   # FAQ items (209 lines)
│   └── reviews.ts                # Student reviews (5 reviews)
├── hooks/                        # Custom React hooks
│   ├── useProgress.ts            # Progress tracking
│   ├── useCopyLink.ts            # Copy to clipboard
│   ├── useScrollReveal.ts        # Scroll animations
│   └── useLocalStorage.ts        # Local storage utility
├── lib/                          # Utilities and constants
│   ├── utils.ts                  # Helper functions
│   └── constants.ts              # App constants
├── public/                       # Static assets
│   └── reviews/                  # Reviewer photos
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── next.config.ts                # Next.js config
```

---

## 4. Design System

### NeoBrutalist Design Principles

1. **Bold Borders**: Thick black/white borders on all elements
2. **Solid Shadows**: Hard offset shadows, no blur
3. **High Contrast**: Black on white, or white on black
4. **Sharp Elements**: No rounded corners (always 0 or `rounded-none`)
5. **Typography First**: Space Grotesk for headings, Inter for body
6. **Interactive**: Hover effects with slight offset + shadow
7. **Playful**: Animated stars, gradients, bright colors

### Design Tokens (globals.css)

```css
/* Colors - Light Mode */
--bg-primary: #FFFFF0;        /* Warm off-white */
--bg-secondary: #F5F5F0;
--text-primary: #0A0A0A;      /* Deep black */
--text-secondary: #3A3A3A;
--border: #0A0A0A;
--shadow: #0A0A0A;

/* Colors - Dark Mode */
--bg-primary: #0A0A0A;
--bg-secondary: #141414;
--text-primary: #FFFFFF;
--text-secondary: #A3A3A3;
--border: #FFFFFF;
--shadow: #FFFFFF;

/* Accent Colors */
--neo-blue: #4361EE;
--neo-green: #06D6A0;
--neo-yellow: #FFE500;
--neo-orange: #FF6B35;
--neo-purple: #9B5DE5;
--neo-pink: #FF0F80;
--neo-amber: #FFB300;

/* Typography */
--font-heading: 'Space Grotesk', sans-serif (500–800)
--font-body: 'Inter', sans-serif (400–600)

/* Shadows (hard edges, no blur) */
--shadow-neo: 4px 4px 0px 0px #0A0A0A;
--shadow-neo-white: 4px 4px 0px 0px #F5F5F0;
--shadow-neo-green: 4px 4px 0px 0px #06D6A0;
--shadow-neo-blue: 4px 4px 0px 0px #4361EE;
--shadow-neo-purple: 4px 4px 0px 0px #9B5DE5;
--shadow-neo-pink: 4px 4px 0px 0px #FF0F80;
--shadow-neo-orange: 4px 4px 0px 0px #FF6B35;
--shadow-neo-yellow: 4px 4px 0px 0px #FFE500;
--shadow-neo-amber: 4px 4px 0px 0px #FFB300;

/* Animations */
--animate-bounce-subtle: bounce-subtle 2s ease-in-out infinite;
--animate-slide-up: slide-up 200ms ease-out;
--animate-fade-in: fade-in 300ms ease-out;
--animate-slide-up-fade: slide-up-fade 600ms cubic-bezier(0.16, 1, 0.3, 1);
```

### Component Specs

#### NeoCard
- Border: 2px solid black (dark: white)
- Background: white (dark: #141414)
- Shadow: `shadow-neo` or `shadow-neo-white`
- Optional accent color on top border (4px width)
- Hover: `-translate-x-0.5 -translate-y-0.5 shadow-neo`
- Active: `translate-x-0.5 translate-y-0.5 shadow-none`

#### NeoButton
- Sizes: sm (px-3 py-1.5), md (px-4 py-2), lg (px-6 py-3)
- Variants:
  - `primary`: black bg, white text, black border
  - `secondary`: white bg, black text, black border
  - `ghost`: transparent bg, transparent border (hover border black)
- Hover: `-translate-x-0.5 -translate-y-0.5 shadow-neo`
- Active: `translate-x-0.5 translate-y-0.5 shadow-none`
- Optional accent color for bg and border

#### NeoBadge
- Sizes: sm
- Variants: beginner, intermediate, advanced, free, paid, audit_free, arabic, certificate, youtube, website

#### NeoAccordion
- Multiple or exclusive mode
- Bold black border
- Smooth transition

#### NeoInput
- Bold black border
- Input field styling
- Optional clear button
- Optional left icon

#### NeoToast
- Notification messages
- Success, error, info variants

#### NeoStar
- Decorative stars for headers
- Variants: sunburst, asterisk, sparkle, fat-star

### Typography

**Headings:**
```css
font-heading font-bold
font-size: text-xl (24px) to text-5xl (48px)
```

**Body:**
```css
font-body font-normal
font-size: text-xs to text-lg
line-height: 1.5
```

**Bold:**
```css
font-body font-semibold
```

### Colors (Badges)

```typescript
BADGE_COLORS = {
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
}
```

---

## 5. Global Features

### Dark/Light Mode
- **ThemeProvider**: Manages dark/light theme state
- **Persisted**: Theme preference saved in localStorage
- **Respects**: System preference initially
- **Toggle**: Available in Navbar

### Theme Colors (Page Specific)

```typescript
PAGE_ACCENTS = {
  home: "#FFE500",
  roadmaps: "#4361EE",
  courses: "#06D6A0",
  careers: "#FF6B35",
  tools: "#9B5DE5",
  cvProjects: "#FF0F80",
}
```

### Font Config (layout.tsx)

```typescript
fontFamily: "Inter, sans-serif" (body)
Space Grotesk (headings, via CSS)
```

### SEO & Meta

```typescript
metadata = {
  title: "Helm",
  description: "A free, open-source guide for Egyptian CS students...",
  openGraph: { title, description, images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title, description },
}
```

### Analytics

- **@vercel/analytics**: Web analytics
- **@vercel/speed-insights**: Core Web Vitals insights

### Cookie Consent

- **No cookie consent banner** (not implemented)
- **No tracking beyond analytics**

---

## 6. Pages — Full Specification

### Page 1: Home (`/`)

**Type:** Server Component with client interactions
**Location:** `app/page.tsx`

**Components:**
- `Hero` - Hero section with CTAs
- `QuickStats` - Statistics (courses, tools, reviews, companies)
- `YearFilter` - Filter reviews by year
- `SiteOverview` - Overview of all sections
- `ReviewsSection` - Student reviews carousel
- `FeelingLostModal` - Modal for users feeling lost

**Layout:**
- Top: Hero section
- Below: QuickStats with stagger animation
- Below: YearFilter (shows reviews for specific years)
- Below: SiteOverview (grid of cards explaining each section)
- Middle: FAQ section (home-specific FAQs)
- Bottom: ReviewsSection (student testimonials)

**Data Sources:**
- `faqs.filter(f => f.page === 'home')`
- `reviews`

**Features:**
- Scroll reveal animations (`useScrollReveal()`)
- No page reload (client-side interactions)
- Dark/light mode support
- Responsive design

**Size:** ~70 lines (simplified)

---

### Page 2: Roadmaps (`/roadmaps`)

**Type:** Client Component with complex state
**Location:** `app/roadmaps/page.tsx`

**Features:**
1. Track Selector - 6 track buttons (Web, AI, Cyber, Mobile, Cloud, Data)
2. Active Track Display - Shows description and icon
3. Progress Tracking - LocalStorage-based progress
4. Phase Flowchart - Visual progression
5. Phase Accordions - Detailed steps
6. Track FAQs - Track-specific questions

**Data:** `data/roadmaps.ts` (8 tracks)

**Tracks:**
1. **Frontend** (webdev) - Blue accent - React, TypeScript, Next.js
2. **AI/ML** (ai_ml) - Purple accent - Python, ML, Deep Learning
3. **Cybersecurity** (cybersecurity) - Yellow accent - Security fundamentals
4. **Mobile** (mobile) - Pink accent - Flutter, React Native
5. **Cloud/DevOps** (cloud_devops) - Orange accent - AWS, Docker, K8s
6. **Data** (data_engineering) - Green accent - SQL, Python, Big Data

**Progress Tracking:**
- `useProgress()` hook stores completion status in localStorage
- Each step has unique ID (`track-id-step-1`, etc.)
- Progress bar shows completion percentage
- Reset button to clear progress
- Share button to share progress with link

**Accordion Spec:**
- Multi-mode (exclusive)
- Phase number and name in trigger
- Content: Phase steps, build project, build project description
- FAQ section at bottom of each track

**Page Accent:** `#4361EE` (neo-blue)

**Lines:** ~380 lines

---

### Page 3: Courses (`/courses`)

**Type:** Client Component with filters
**Location:** `app/courses/page.tsx`

**Features:**
1. Search - Debounced search (300ms delay)
2. Filter by Track - Multiple selection
3. Filter by Type - Free, Paid, Audit Free
4. Filter by Format - YouTube, Website, Book
5. Filter by Language - English, Arabic, Bilingual
6. Filter by Certificate - Any, With, Without
7. Results Counter - Showing filtered count
8. Clear Filters Button
9. Course Cards - Display course info
10. Financial Aid Modal - For Coursera/edX courses
11. FAQ Section - Course-specific FAQs

**Data:** `data/courses.ts` (200+ courses, 1618 lines)

**Course Card Fields:**
- Badges (type, format, featured)
- Platform and instructor
- Title and description
- Badges (level, tracks, hasArabic, hasCertificate)
- Rating (stars) and duration
- CTA buttons (Visit, Financial Aid if available)

**Financial Aid Modal:**
- Form fields: Country (default: Egypt), Income, Why Course, Why Aid, How Use
- Generate application text for Coursera/edX
- Copy button
- Open Coursera/edX financial aid link button
- Edit answers button

**FAQ:**
- Course-specific FAQs
- Mixed with generic course FAQs

**Page Accent:** `#06D6A0` (neo-green)

**Filter Options:**
```typescript
TRACK_OPTIONS = [
  { value: "web", label: "Web Dev" },
  { value: "ai_ml", label: "AI/ML" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "mobile", label: "Mobile" },
  { value: "cloud", label: "Cloud/DevOps" },
  { value: "data", label: "Data" },
  { value: "cs_fundamentals", label: "CS Fundamentals" },
  { value: "math", label: "Math" },
]
```

**Lines:** ~765 lines

---

### Page 4: Careers (`/careers`)

**Type:** Client Component with state
**Location:** `app/careers/page.tsx`

**Features:**
1. Hiring Process Timeline - 7 steps with tips
2. Egyptian Companies Grid - Filterable
3. Job Boards Grid - Local and remote
4. Remote Work Guide - Accordion
5. Internship Guide - Accordion
6. FAQ Section - Career-specific FAQs

**Hiring Process Timeline:**
- Steps 1-7 with icons
- Visual timeline with numbers
- Each step has description and tip
- Steps:
  1. Build Skills & Portfolio
  2. Apply (LinkedIn, Wuzzuf, Referrals)
  3. Screening Call (15–30 min)
  4. Technical Assessment
  5. Technical Interview (1–2 rounds)
  6. HR/Culture Fit Round
  7. Offer 🎉

**Companies:**
- Filterable by: Type, Stack, Size
- Cards show: Type, Size, Tech Stack, Domains, Known For, Careers Link
- Hires interns/remote indicators

**Job Boards:**
- Cards show: Name, Type (local/remote/global), Description, Best For, Link
- Types: local, remote, global

**Remote Guide Accordion:**
- Why remote work
- Prerequisites
- Where to find jobs
- How to stand out
- Income expectations
- Payment methods

**Internship Guide Accordion:**
- Why internships matter
- Where to find internships
- Cold email template
- What to expect

**FAQ:**
- Career-specific FAQs
- Mix of general and track-specific

**Page Accent:** `#FF6B35` (neo-orange)

**Data:** `data/companies.ts`, `data/jobBoards.ts`, `faqs.filter(f => f.page === 'careers')`

**Lines:** ~660 lines

---

### Page 5: Tools (`/tools`)

**Type:** Client Component with filters
**Location:** `app/tools/page.tsx`

**Features:**
1. Category Filters - Filter tools by category
2. Tool Cards - Display tool info
3. ITI Highlight - Special section for ITI
4. VS Code Extensions - Grid of essential extensions
5. FAQ Section - Tool-specific FAQs

**Categories:**
```typescript
CATEGORY_ORDER = [
  "student_pack", "editor", "cloud", "design", "productivity",
  "vpn", "ai", "payment", "version_control", "api_testing",
  "database", "terminal", "devops_cicd", "security",
  "browser_devtools", "testing", "learning"
]
```

**Tool Card Fields:**
- Badges (Free, Student Free, Recommended)
- Copy link button
- Name and description
- Recommended for
- Platforms tags
- Visit button

**ITI Section:**
- Highlight card with accent #FF6B35
- Information about ITI free training program
- Apply link

**VS Code Extensions:**
- Grid of cards with name and description
- 9 essential extensions listed

**FAQ:**
- Tool-specific FAQs
- Mixed with generic tool FAQs

**Page Accent:** `#9B5DE5` (neo-purple)

**Data:** `data/tools.ts` (100+ tools, 2055 lines), `faqs.filter(f => f.page === 'tools')`

**Lines:** ~328 lines

---

### Page 6: CV & Projects (`/cv-projects`)

**Type:** Client Component with tabs
**Location:** `app/cv-projects/page.tsx`

**Features:**
1. Tab Switcher - CV Guide vs Project Ideas
2. CV Tips Card - Egyptian hiring manager insights
3. CV Section-by-Section - Detailed breakdown
4. CV Templates - 3 templates
5. Graduation Project Guide - Accordion
6. Project Ideas - Filterable
7. FAQ Section - CV-specific FAQs

**Tab 1: CV Guide**
- CV Tips Card (bulleted list of Egyptian hiring insights)
- CV Section-by-Section Accordion (7 sections)
  1. Contact & Links
  2. Summary / Objective
  3. Education
  4. Skills
  5. Projects (most important)
  6. Experience / Internships
  7. Certifications (optional)
- CV Templates (3 cards)
  - Jake's Resume (GitHub)
  - Overleaf Templates
  - Canva Templates
- Graduation Project Guide (4 FAQs)
  - Difference between forgettable and impressive projects
  - Professor vs industry wants
  - How to pick topic (3 questions)
  - How to put project on GitHub

**Tab 2: Project Ideas**
- Filters: Difficulty, Target Market, Stack
- Project Cards showing: difficulty, target, stack, why it impresses, key features, estimated time
- Clear filters button

**FAQ:**
- CV-specific FAQs
- Mixed with project FAQs

**Page Accent:** `#FF0F80` (neo-pink)

**Data:** `data/projects.ts` (100+ project ideas, 364 lines), `faqs.filter(f => f.page === 'cv_projects')`

**Lines:** ~662 lines

---

## 7. Custom Components — Full Specification

### Home Components

#### Hero
- Big heading: "The North Star for Computer Science Students"
- Subheading: "A premium, open-source guide for navigating the CS journey."
- CTA Buttons: "Start Learning", "Explore Roadmaps"
- Decorative stars with animation

#### QuickStats
- Stats grid: Courses, Tools, Reviews, Companies
- Each stat shows: number and label
- Animated on scroll

#### YearFilter
- Dropdown to select year (freshman → senior, etc.)
- Displays reviews for selected year
- Default: all years

#### SiteOverview
- Grid of cards for each section
- Icons, headings, brief descriptions
- Hover effects

#### ReviewsSection
- Carousel of student reviews
- Shows: name, role, year, quote, highlighted feature
- Stars display

#### FeelingLostModal
- Modal with options to get started
- Links to relevant sections

### Feedback Components

#### FeedbackForm
- Inline form in footer
- Fields: Name, Email, Rating, Message
- Validation required

#### FeedbackModal
- Modal form with same fields
- Can be triggered from feedback button

### Layout Components

#### Navbar
- Logo: "Helm" text
- Links: Home, Roadmaps, Courses, Careers, Tools, CV & Projects
- Theme toggle (dark/light)
- Mobile-responsive with hamburger menu

#### Footer
- Links to pages
- Social links
- Copyright notice
- Feedback button

#### ThemeProvider
- Manages dark/light theme state
- Persists in localStorage
- Applies to document.documentElement

### UI Components

#### NeoCard
**Props:**
- `children: React.ReactNode`
- `className?: string`
- `accent?: string` (optional accent color)
- `hover?: boolean` (default: true)
- `id?: string`
- `onClick?: () => void`

**Styling:**
- Border: 2px solid black (dark: white)
- Background: white (dark: #141414)
- Shadow: `shadow-neo` or `shadow-neo-white`
- Hover: `-translate-x-0.5 -translate-y-0.5 shadow-neo`
- Active: `translate-x-0.5 translate-y-0.5 shadow-none`
- Optional accent border (4px width)

**Usage:**
```jsx
<NeoCard accent="#06D6A0">
  Content
</NeoCard>
```

#### NeoButton
**Props:**
- `children: React.ReactNode`
- `variant?: 'primary' | 'secondary' | 'ghost'`
- `size?: 'sm' | 'md' | 'lg'`
- `accent?: string`
- `onClick?: () => void`
- `href?: string`
- `disabled?: boolean`
- `icon?: React.ReactNode`
- `iconPosition?: 'left' | 'right'`
- `className?: string`
- `type?: 'button' | 'submit' | 'reset'`
- `target?: string`
- `rel?: string`

**Styling:**
- Sizes: sm (px-3 py-1.5), md (px-4 py-2), lg (px-6 py-3)
- Variants:
  - `primary`: black bg, white text, black border
  - `secondary`: white bg, black text, black border
  - `ghost`: transparent bg, transparent border (hover border black)
- Hover: `-translate-x-0.5 -translate-y-0.5 shadow-neo`
- Active: `translate-x-0.5 translate-y-0.5 shadow-none`
- Optional accent color for bg and border

**Usage:**
```jsx
// Primary button
<NeoButton variant="primary">Click Me</NeoButton>

// Secondary button with icon
<NeoButton variant="secondary" href="https://example.com" icon={<ExternalLink size={14} />}>
  Visit Site
</NeoButton>

// Accent button
<NeoButton variant="primary" accent="#06D6A0">Green Button</NeoButton>
```

#### NeoInput
**Props:**
- `children?: React.ReactNode` (for icon)
- `type?: 'text' | 'password' | 'email' | 'textarea'`
- `value?: string`
- `onChange?: (value: string) => void`
- `placeholder?: string`
- `className?: string`
- `clearable?: boolean`
- `icon?: React.ReactNode`
- `rows?: number`

**Styling:**
- Border: 2px solid black (dark: white)
- Background: white (dark: #141414)
- Focus ring: 2px solid accent color (optional)

**Usage:**
```jsx
<NeoInput
  placeholder="Search courses..."
  value={search}
  onChange={setSearch}
  icon={<Search size={18} />}
/>
```

#### NeoAccordion
**Props:**
- `items: Array<{ id: string, trigger: React.ReactNode, content: React.ReactNode }>`
- `exclusive?: boolean` (default: false)
- `accent?: string`

**Styling:**
- Multiple or single open item
- Bold black border
- Smooth expand/collapse animation

**Usage:**
```jsx
<NeoAccordion
  exclusive
  accent="#06D6A0"
  items={[
    {
      id: "1",
      trigger: "What is this?",
      content: "This is a description."
    }
  ]}
/>
```

#### NeoBadge
**Props:**
- `label: string`
- `variant?: 'beginner' | 'intermediate' | 'advanced' | 'free' | 'paid' | 'audit_free' | 'arabic' | 'certificate' | 'youtube' | 'website' | 'custom'`
- `customColor?: { bg: string, border: string, text: string }`
- `size?: 'sm'`

**Styling:**
- Small badges with bold border
- Different colors for different variants
- Optional custom colors

**Usage:**
```jsx
<NeoBadge label="Free" variant="free" />
<NeoBadge label="Beginner" variant="beginner" />
<NeoBadge label="Custom" customColor={{ bg: "#FF0000", border: "#000000", text: "#FFFFFF" }} />
```

#### NeoDialog
**Props:**
- `open: boolean`
- `onOpenChange: (open: boolean) => void`
- `children: React.ReactNode`

**Styling:**
- Radix Dialog primitives
- NeoBrutalist styling
- Centered on screen
- Backdrop overlay

#### NeoToast
**Props:**
- `show(message: string, type: 'success' | 'error' | 'info', icon?: string): void`
- Auto-dismiss after 3 seconds

**Styling:**
- Fixed position (top-right or bottom-right)
- Bold border
- Success (green), error (red), info (blue)

#### NeoStar
**Props:**
- `variant?: 'sunburst' | 'asterisk' | 'sparkle' | 'fat-star'`
- `className?: string`

**Styling:**
- Decorative stars for headers
- Different shapes
- Drop shadow

**Usage:**
```jsx
<NeoStar variant="sunburst" className="text-neo-pink" />
<NeoStar variant="asterisk" className="text-neo-yellow" />
```

#### ProgressBar
**Props:**
- `value: number` (0–100)
- `accent?: string`
- `label?: string`
- `size?: 'sm' | 'md' | 'lg'`

**Styling:**
- Progress bar with accent color
- Label with completion count

#### StarRating
**Props:**
- `rating: number` (1–5)
- `accent?: string`
- `showNumber?: boolean`

**Styling:**
- 5 stars filled based on rating
- Accent color for stars
- Optional number display

---

## 8. Data Files — Full Specification

### courses.ts (1618 lines)

**Type:** `Course[]`
**Total Courses:** 200+

**Course Interface:**
```typescript
interface Course {
  id: string
  title: string
  platform: string
  instructor?: string
  url: string
  type: CourseType  // "free" | "paid" | "audit_free"
  format: CourseFormat  // "youtube" | "website" | "book"
  hasCertificate: boolean
  hasArabic: boolean
  arabicUrl?: string
  contentLanguage: ContentLanguage  // "english" | "arabic" | "bilingual"
  tracks: TrackName[]
  languages?: string[]
  level: CourseLevel  // "beginner" | "intermediate" | "advanced" | "all"
  durationHours?: number
  rating: number
  ratingCount?: number
  description: string
  tags: string[]
  isFeatured?: boolean
  price?: number
  financialAidAvailable?: boolean
  lastVerified: string
}
```

**Filtering:**
- Track (multiple)
- Type (free/paid/audit_free)
- Format (youtube/website/book)
- Language (english/arabic/bilingual)
- Certificate (any/with/without)

---

### tools.ts (2055 lines)

**Type:** `Tool[]`
**Total Tools:** 100+

**Tool Interface:**
```typescript
interface Tool {
  id: string
  name: string
  description: string
  url: string
  category: ToolCategory
  isFree: boolean
  hasFreeStudentPlan: boolean
  studentPlanUrl?: string
  tags: string[]
  platforms?: string[]
  recommendedFor?: string
  isHighlighted?: boolean
}
```

**Categories:**
- `student_pack`
- `editor`
- `cloud`
- `design`
- `productivity`
- `vpn`
- `ai`
- `payment`
- `version_control`
- `api_testing`
- `database`
- `terminal`
- `devops_cicd`
- `security`
- `browser_devtools`
- `testing`
- `learning`

---

### roadmaps.ts (1539 lines)

**Type:** `Track[]`
**Total Tracks:** 8

**Track Interface:**
```typescript
interface Track {
  id: TrackId  // "webdev" | "ai_ml" | "cybersecurity" | "mobile" | "cloud_devops" | "data_engineering"
  name: string
  icon: React.ReactNode
  description: string
  accentColor: string
  phases: RoadmapPhase[]
  faqs: FAQItem[]
  egyptianMarketNote: string
}

interface RoadmapPhase {
  id: string
  number: 1 | 2 | 3
  name: string
  durationEstimate: string
  description: string
  steps: RoadmapStep[]
  buildProject: string
  buildProjectDescription: string
}

interface RoadmapStep {
  id: string
  title: string
  description?: string
  resourceUrl?: string
  resourceName?: string
  estimatedDays?: number
}
```

---

### projects.ts (364 lines)

**Type:** `ProjectIdea[]`
**Total Projects:** 100+

**Project Interface:**
```typescript
interface ProjectIdea {
  id: string
  title: string
  description: string
  stack: string[]
  difficulty: "beginner" | "intermediate" | "advanced"
  targetMarket: "local" | "remote" | "both"
  type: string[]
  whyItImpress: string
  keyFeatures: string[]
  estimatedTime: string
}
```

**Filtering:**
- Difficulty
- Target Market
- Stack (partial match)

---

### companies.ts (100+ entries)

**Type:** `Company[]`
**Total Companies:** 30+

**Company Interface:**
```typescript
interface Company {
  id: string
  name: string
  description: string
  type: CompanyType  // "egyptian_startup" | "egyptian_corporate" | "multinational"
  size: CompanySize  // "startup" | "mid" | "large"
  techStack: string[]
  domains: string[]
  location?: string
  knownFor: string
  careersUrl: string
  hiresInterns: boolean
  hiresRemote: boolean
}
```

**Types:**
- `egyptian_startup`
- `egyptian_corporate`
- `multinational`

**Sizes:**
- `startup` (< 50 employees)
- `mid` (50–500 employees)
- `large` (500+ employees)

---

### jobBoards.ts (10+ entries)

**Type:** `JobBoard[]`
**Total Job Boards:** 10+

**JobBoard Interface:**
```typescript
interface JobBoard {
  id: string
  name: string
  description: string
  type: JobBoardType  // "local" | "remote" | "global"
  bestFor: string
  url: string
}
```

---

### faqs.ts (209 lines, 43 FAQs)

**Type:** `FAQItem[]`
**Total FAQs:** 43

**FAQ Interface:**
```typescript
interface FAQItem {
  id: string
  page: string  // "home" | "courses" | "careers" | "tools" | "cv_projects" | "roadmaps"
  track?: string  // optional track-specific FAQ
  question: string
  answer: string
}
```

**FAQ Categories:**
- **home**: 6 FAQs
- **courses**: 5 FAQs
- **careers**: 5 FAQs
- **tools**: 4 FAQs
- **cv_projects**: 5 FAQs
- **roadmaps**: 6 FAQs

---

### reviews.ts (5 reviews)

**Type:** `Review[]`
**Total Reviews:** 5

**Review Interface:**
```typescript
interface Review {
  id: string
  name: string
  role: ReviewerRole  // "student" | "developer" | "freelancer" | "graduate"
  roleLabel: string
  university?: string
  yearLabel?: string
  imageSrc: string  // Path to photo
  avatarFallback: string  // 2-letter initials
  rating: 5 | 4
  quote: string
  highlight: string  // Feature being praised
}
```

---

## 9. Feature Deep Dives

### Progress Tracking System

**Implementation:** `hooks/useProgress.ts`

**How it works:**
1. Uses `localStorage` to persist progress
2. Each step has unique ID (e.g., `webdev-step-1`, `webdev-step-2`)
3. Stores array of completed step IDs
4. Calculates percentage: `(completed.length / totalSteps) * 100`

**Usage:**
```typescript
const { isCompleted, toggle, reset, percentage } = useProgress('webdev')

// Check if step is completed
const done = isCompleted('webdev-step-1')

// Toggle completion status
toggle('webdev-step-1')

// Reset all progress
reset()

// Get percentage
const pct = percentage(totalSteps)
```

**Storage Format:**
```json
{
  "webdev": ["webdev-step-1", "webdev-step-2", "webdev-step-3"],
  "ai_ml": ["ai_ml-step-1"],
  ...
}
```

---

### Financial Aid Helper

**Implementation:** `app/courses/page.tsx` - `FinancialAidModal` component

**Features:**
1. Form with 5 fields:
   - Country (default: Egypt)
   - Monthly household income
   - Why do you want to take this course?
   - Why can't you afford it?
   - How will you use what you learn?
2. Generates personalized application text
3. Copies to clipboard
4. Opens Coursera/edX financial aid page
5. Allows editing answers

**Generated Text Format:**
```
Financial Aid Application for: Course Name

Country: Egypt
Monthly Household Income: $600

Why I want to take this course:
[User's answer]

Why I cannot afford it:
[User's answer]

How I will use what I learn:
[User's answer]

Note: I am a CS student in Egypt and this course is critical for my career development. Egypt's current economic situation and currency devaluation make international course fees a significant financial burden.
```

---

### Dark/Light Mode

**Implementation:**
1. `components/layout/ThemeProvider.tsx` - Manages theme state
2. `app/layout.tsx` - Applies theme to document
3. `app/globals.css` - Theme-specific variables

**How it works:**
1. `ThemeProvider` uses React Context
2. Initial theme from localStorage or system preference
3. Toggle button in Navbar
4. Persists in localStorage
5. Applies to `document.documentElement.classList.toggle('dark')`

**Theme Variables:**
```css
/* Light Mode */
--bg-primary: #FFFFF0;
--bg-secondary: #F5F5F0;
--text-primary: #0A0A0A;
--text-secondary: #3A3A3A;
--border: #0A0A0A;
--shadow: #0A0A0A;

/* Dark Mode */
--bg-primary: #0A0A0A;
--bg-secondary: #141414;
--text-primary: #FFFFFF;
--text-secondary: #A3A3A3;
--border: #FFFFFF;
--shadow: #FFFFFF;
```

---

### Copy Link Utility

**Implementation:** `hooks/useCopyLink.ts`

**Features:**
1. Copies link ID to clipboard
2. Toast notification confirms copy

**Usage:**
```typescript
const { copy } = useCopyLink()

// Copy link by ID (for SEO/Deep linking)
copy('course-cs50x')

// Toast shows "Link copied! 🔗"
```

---

### Scroll Reveal Animations

**Implementation:**
1. `hooks/useScrollReveal.ts` - Detects scroll position
2. `app/globals.css` - Animation keyframes
3. Classes like `.reveal`, `.stagger-1`, `.stagger-2`

**How it works:**
1. `useScrollReveal()` attaches IntersectionObserver
2. Elements with `.reveal` class animate in on scroll
3. Staggered animation for lists (`.stagger-1`, `.stagger-2`)

**Animations:**
```css
@keyframes slide-up {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

---

## 10. Footer

**Location:** `components/layout/Footer.tsx`

**Content:**
- Links to all pages
- Social links (GitHub, LinkedIn, etc.)
- Copyright notice
- Feedback button
- Analytics scripts

**Styling:**
- NeoBrutalist design
- Bold borders
- Dark/light mode support

---

## 11. Deployment

**Recommended Platform:** Vercel

**Steps:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js
4. Deploy on push to main

**Environment Variables:** None required

**Build Command:** `next build`

**Output Directory:** `.next`

**Deployment:**
- Automatic HTTPS
- CDN worldwide
- Preview deployments for PRs
- Analytics integration

---

## 12. Implementation Notes for Developers

### NeoBrutalist Design

**Rules:**
1. **Always use thick borders**: `border-2` or `border-4`
2. **Use solid shadows**: `shadow-neo` or manual `4px 4px 0px #0A0A0A`
3. **Hover effects**: `-translate-x-0.5 -translate-y-0.5 shadow-neo`
4. **Active effects**: `translate-x-0.5 translate-y-0.5 shadow-none`
5. **Contrast**: High contrast (black/white, or white/black)

### Code Style

**TypeScript:**
- Strict mode enabled
- Type all components and props
- Export all types
- Use `as const` for fixed arrays

**React:**
- Use `const` instead of `let`/`var`
- Use named imports from `@/lib/utils`
- Use default exports for main components

**Naming:**
- Components: PascalCase (`NeoCard.tsx`, `Hero.tsx`)
- Files: PascalCase (`Hero.tsx`, `NeoButton.tsx`)
- Variables: camelCase (`useProgress`, `filteredCourses`)
- Constants: UPPER_SNAKE_CASE (`PAGE_ACCENTS`)
- Data keys: kebab-case (`course-id`, `tool-name`)

### Data Structure

**Adding Data:**
1. Open appropriate data file
2. Follow existing structure exactly
3. Add to end of array
4. Use unique IDs
5. Verify all fields are present

**IDs:**
- Unique and descriptive
- Use kebab-case: `course-cs50x`, `tool-vscode`, `reviewer-john-doe`
- Consistent with naming conventions

### Performance

**Optimizations:**
1. Use `useMemo` for expensive calculations
2. Use `useCallback` for event handlers
3. Debounce search inputs
4. Lazy load images (if any)
5. Server components where possible

### Accessibility

**Requirements:**
1. Keyboard navigation works
2. ARIA labels for icons
3. Focus visible states
4. Color contrast AA compliant
5. Screen reader friendly (optional but recommended)

---

## Summary

This specification documents the current state of the Egyptian CS Student Guide project. All features listed are implemented and functional. When adding new features, follow this specification to maintain consistency.

**Key Points:**
- NeoBrutalist design with bold borders and hard shadows
- 6 pages with rich content
- 200+ courses, 100+ tools, 8 roadmaps, 100+ projects
- Dark/light mode fully implemented
- Progress tracking for roadmaps
- Financial aid helper for Coursera/edX
- SEO optimized with meta tags
- Fully responsive design

**Next Steps:**
- Add more courses (especially Arabic and beginner-level)
- Add more tools (AI coding assistants, databases)
- Add more Egyptian companies (actively hiring)
- Add more project ideas
- Verify and update existing ratings
- Add more student reviews
- Improve content quality

---

<div align="center">
  <p>Built for Egyptian CS students. Made with ❤️</p>
  <p>Contribute to make it better: <a href="https://github.com/u-wz/helm">github.com/u-wz/helm</a></p>
</div>
