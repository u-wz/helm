# 🤝 Contributing to Helm

Thank you for considering contributing to Helm! This document will guide you through the process of contributing.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Adding New Content](#adding-new-content)
4. [Code Style Rules](#code-style-rules)
5. [Opening a Pull Request](#opening-a-pull-request)
6. [Code Review Checklist](#code-review-checklist)
7. [What We Need Most](#what-we-need-most)
8. [Getting Help](#getting-help)

---

## Getting Started

### Prerequisites

- **Node.js**: 18.x or later
- **pnpm** (recommended) or npm/yarn
- **Git** for version control
- Basic understanding of TypeScript and React

### First Steps

1. **Fork the repository**
   - Go to [github.com/u-wz/helm](https://github.com/u-wz/helm)
   - Click the "Fork" button in the top right

2. **Clone your fork**
   ```bash
   git clone https://github.com/[your-username]/helm.git
   cd helm
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Start contributing!** 🚀

---

## 📚 Project Documentation

### specs.md — Deep Technical Documentation
If you want a **comprehensive understanding** of the entire codebase including:
- Every page, component, and feature specification
- Design system tokens and implementation details
- All data structures and interfaces
- Feature deep dives and code logic

Read **[specs.md](./specs.md)**. It contains a complete reference of what's built and how everything works.

### ✅ Start Here — You Don't Need to Read Everything

**Everything you need to start contributing is in this file:**
- ✅ How to add new courses, tools, projects, reviews
- ✅ Code style rules
- ✅ How to open a PR

**You don't need to:**
- ❌ Read the entire codebase
- ❌ Understand every component in depth
- ❌ Learn all the design patterns

Just follow the instructions in this file, and you're ready to contribute!

---

## Project Structure

```
egyptian-cs-guide/
├── app/                          # Next.js pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── careers/page.tsx          # Careers page
│   ├── courses/page.tsx          # Courses page
│   ├── cv-projects/page.tsx      # CV & Projects page
│   ├── roadmaps/page.tsx         # Roadmaps page
│   └── tools/page.tsx            # Tools page
├── components/
│   ├── home/                     # Home components
│   ├── layout/                   # Layout components
│   └── ui/                       # UI components
├── data/                         # Content data files
│   ├── courses.ts                # Course listings
│   ├── tools.ts                  # Tool listings
│   ├── roadmaps.ts               # Learning roadmaps
│   ├── projects.ts               # Project ideas
│   ├── companies.ts              # Company listings
│   ├── jobBoards.ts              # Job board listings
│   ├── faqs.ts                   # FAQ items
│   └── reviews.ts                # Student reviews
├── hooks/                        # Custom React hooks
├── lib/                          # Utilities and constants
└── public/                       # Static assets
```

---

## Adding New Content

### 📚 Adding a New Course

**File**: `data/courses.ts`

Add a new course object to the `courses` array:

```typescript
{
  id: "your-course-id",                          // Unique slug
  title: "Course Title",                           // Display name
  platform: "Platform Name",                      // Where it's hosted
  instructor: "Instructor Name",                   // Optional
  url: "https://course-url.com",                   // Course link
  type: "free" | "paid" | "audit_free",           // Course type
  format: "youtube" | "website" | "book",         // Format
  hasCertificate: boolean,                        // Has certificate?
  hasArabic: boolean,                             // Has Arabic?
  arabicUrl?: string,                             // Arabic version link
  contentLanguage: "english" | "arabic" | "bilingual", // Language
  tracks: ["webdev"],                             // Which tracks does it belong to?
  languages?: string[],                           // Language tags
  level: "beginner" | "intermediate" | "advanced" | "all", // Level
  durationHours?: number,                         // Duration in hours
  rating: number,                                  // 5-star rating
  ratingCount?: number,                           // Number of ratings (optional)
  description: "Course description...",            // Brief description
  tags: ["react", "typescript"],                  // Search tags
  isFeatured?: boolean,                            // Show as featured?
  price?: number,                                 // Price in USD
  financialAidAvailable?: boolean,                 // Has financial aid?
  lastVerified: "2024-01-01",                      // Last verified date
}
```

**Do's:**
- ✅ Verify the link works
- ✅ Check course quality (check reviews if available)
- ✅ Rate the course accurately (5 is best)
- ✅ Add to the correct track(s)
- ✅ Include Arabic content if applicable
- ✅ Add to relevant search tags

**Don'ts:**
- ❌ Don't add duplicate courses
- ❌ Don't include courses with broken links
- ❌ Don't give low ratings to good courses
- ❌ Don't forget to update `lastVerified` date

#### Course Types

- **free**: Complete course with certificate (100% free)
- **paid**: Paid course with financial aid available
- **audit_free**: Full access for free, certificate costs money

#### Track Types

Add courses to relevant tracks:
- `webdev`: Frontend, React, Next.js, TypeScript, etc.
- `ai_ml`: Machine learning, deep learning, Python
- `cybersecurity`: Security fundamentals, penetration testing
- `mobile`: Flutter, React Native, mobile development
- `cloud_devops`: AWS, Docker, Kubernetes, CI/CD
- `data_engineering`: SQL, Python, data pipelines, big data
- `cs_fundamentals`: Algorithms, data structures, system design
- `math`: Linear algebra, calculus, statistics for ML

---

### 🛠️ Adding a New Tool

**File**: `data/tools.ts`

Add a new tool to the `tools` array:

```typescript
{
  id: "tool-id",                          // Unique slug
  name: "Tool Name",                      // Display name
  description: "Tool description...",     // What it does
  url: "https://tool-url.com",            // Link
  category: "editor" | "cloud" | ...    // Category
  isFree: boolean,                       // Free or paid?
  hasFreeStudentPlan: boolean,           // Has student free plan?
  studentPlanUrl?: string,               // Link to student plan
  tags: ["tag1", "tag2"],                // Search tags
  platforms?: ["Web", "Desktop"],        // Supported platforms
  recommendedFor: "Who this is for",     // Best use case
  isHighlighted?: boolean,               // Show as highlighted?
}
```

#### Available Categories

- `student_pack`: GitHub Student Developer Pack, JetBrains IDEs
- `editor`: VS Code, JetBrains, Cursor
- `cloud`: Railway, Render, Fly.io, Vercel
- `design`: Figma, Canva, Adobe XD
- `productivity`: Notion, Obsidian, etc.
- `vpn`: ProtonVPN, Mullvad
- `ai`: GitHub Copilot, Cursor, Claude, etc.
- `payment`: Fawry, Orange Money, etc.
- `version_control`: Git, GitHub
- `api_testing`: Postman, Thunder Client
- `database`: Supabase, MongoDB Atlas, PostgreSQL
- `terminal`: Terminal, iTerm2
- `devops_cicd`: GitHub Actions, CircleCI
- `security`: Burp Suite, OWASP ZAP
- `browser_devtools`: DevTools, React DevTools
- `testing`: Jest, Playwright, Selenium
- `learning`: Khan Academy, freeCodeCamp

---

### 📄 Adding a New Project Idea

**File**: `data/projects.ts`

Add a new project object:

```typescript
{
  id: "project-id",                    // Unique slug
  title: "Project Name",               // Display name
  description: "Brief description...", // 1-2 sentences
  stack: ["React", "Node.js"],         // Tech stack
  difficulty: "beginner" | "intermediate" | "advanced",
  targetMarket: "local" | "remote" | "both",
  type: ["portfolio", "practice", "open-source"],
  whyItImpress: "Why this impresses employers", // 1 sentence
  keyFeatures: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  estimatedTime: "5-10 hours"          // Time estimate
}
```

#### Difficulty Levels

- **beginner**: Easy projects for learners (10–20 hours)
- **intermediate**: Moderate projects (20–50 hours)
- **advanced**: Complex projects (50+ hours)

#### Target Markets

- **local**: Companies in Egypt
- **remote**: International companies
- **both**: Works for both local and remote

---

### 💼 Adding a New Company

**File**: `data/companies.ts`

Add a new company to the `companies` array:

```typescript
{
  id: "company-id",                    // Unique slug
  name: "Company Name",                // Display name
  description: "Company description...", // 1-2 sentences
  type: "egyptian_startup" | "egyptian_corporate" | "multinational",
  size: "startup" | "mid" | "large",
  techStack: ["React", "Python"],       // Tech stack
  domains: ["fintech", "healthcare"],  // Business domains
  location?: "Cairo, Egypt",            // Optional
  knownFor: "What they're known for",   // What they're known for
  careersUrl: "https://careers.example.com", // Careers page
  hiresInterns: true,                  // Hires interns?
  hiresRemote: true,                   // Remote work?
}
```

#### Company Types

- `egyptian_startup`: Egyptian startup company
- `egyptian_corporate`: Egyptian corporate company
- `multinational`: Multinational company with Egyptian office

#### Company Sizes

- `startup`: < 50 employees
- `mid`: 50–500 employees
- `large`: 500+ employees

---

### 📝 Adding a New FAQ

**File**: `data/faqs.ts`

Add a new FAQ item:

```typescript
{
  id: 'page-id-1',
  page: 'page-name',                   // Which page does this belong to?
  track?: 'track-name',                // Optional: for track-specific FAQs
  question: 'Question here?',          // FAQ question
  answer: 'Answer here...'             // FAQ answer
}
```

#### Page Names

- `home`
- `courses`
- `careers`
- `tools`
- `cv_projects`
- `roadmaps`

#### Track Names

Use track names from roadmaps.ts:
- `webdev`
- `ai_ml`
- `cybersecurity`
- `mobile`
- `cloud_devops`
- `data_engineering`
- `cs_fundamentals`
- `math`

---

### 🎤 Adding a New Review

**File**: `data/reviews.ts`

Add a new review:

```typescript
{
  id: "r6",                             // Unique ID
  name: "Reviewer Name",                // Display name
  role: "student" | "developer" | "freelancer" | "graduate",
  roleLabel: "CS Student",              // Display role
  university?: "Cairo University",      // Optional
  yearLabel?: "3rd year",               // Optional
  imageSrc: "/reviews/r6.jpg",          // Photo path
  avatarFallback: "RA",                 // 2-letter initials
  rating: 5 | 4,                        // Rating (5 is best)
  quote: "Quote here...",               // Full review text
  highlight: "Featured feature"        // What they're praising
}
```

#### Reviewer Roles

- `student`: Current university student
- `developer`: Working developer
- `freelancer`: Freelance developer
- `graduate`: Recent graduate (no longer student)

---

## Code Style Rules

### NeoBrutalist Design System

**Bold Borders**
```jsx
// Always use border-2 or border-4
<div className="border-2 border-black">Content</div>
```

**Solid Shadows**
```jsx
// Use custom shadow or utility
<div className="shadow-neo">Content</div>

// Or manual shadow
<div style={{ boxShadow: "4px 4px 0px 0px #0A0A0A" }}>Content</div>
```

**Hover Effects**
```jsx
// Hover offset + shadow
<div className="transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo">
  Content
</div>

// Active offset + no shadow
<div className="transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
  Content
</div>
```

**Colors**
```jsx
// Use design tokens from lib/constants.ts
<NeoButton variant="primary">Click Me</NeoButton>

// Or custom accent color
<NeoButton variant="primary" style={{ backgroundColor: "#06D6A0", borderColor: "#06D6A0" }}>
  Green Button
</NeoButton>
```

**Typography**
```jsx
// Headings: Space Grotesk, 500-800
<h1 className="font-heading font-bold text-4xl">Title</h1>

// Body: Inter, 400-600
<p className="font-body text-base">Content here</p>

// All text should have proper contrast
<p className="text-gray-700 dark:text-gray-300">Good contrast text</p>
```

### TypeScript

```typescript
// ✅ Use TypeScript strict mode
interface ComponentProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

// ✅ Export types
export type ReviewerRole = "student" | "developer" | "freelancer" | "graduate"

// ✅ Use as const for fixed arrays
const ACCENT = "#06D6A0" as const

// ✅ Type all data
const courses: Course[] = [...]
```

### React

```jsx
// ✅ Use const instead of let/var
const handleClick = () => { ... }

// ✅ Use named exports
import { NeoButton } from "@/components/ui/NeoButton"

// ✅ Use default export for main components
export default function HomePage() { ... }

// ✅ Use cn() utility for class names
<div className={cn("base-class", active && "active-class")}>Content</div>
```

### Naming Conventions

- **Components**: PascalCase (`NeoCard.tsx`, `HeroSection.tsx`)
- **Files**: PascalCase (`Hero.tsx`, `NeoButton.tsx`)
- **Variables**: camelCase (`useProgress`, `filteredCourses`)
- **Constants**: UPPER_SNAKE_CASE (`PAGE_ACCENTS`, `BADGE_COLORS`)
- **Data keys**: kebab-case (`course-id`, `tool-name`, `reviewer-name`)

---

## Opening a Pull Request

### Step 1: Create a Branch

```bash
# Checkout the main branch
git checkout main

# Pull latest changes
git pull origin main

# Create your feature branch
git checkout -b feature/add-courses
# or
git checkout -b fix/typo-in-header
```

**Branch naming conventions:**
- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation changes
- `refactor/` for code refactoring
- `style/` for styling changes
- `test/` for test additions

### Step 2: Make Your Changes

1. Edit files in the appropriate directories
2. Follow code style rules (see above)
3. Test your changes locally
4. Run TypeScript compiler to check for errors:
   ```bash
   pnpm tsc --noEmit
   ```

### Step 3: Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add 5 new Python courses to courses.ts"
git commit -m "fix: correct typo in roadmaps page header"
```

**Commit message format:**
```
type: description

[Optional detailed description]
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Styling changes (no code changes)
- `refactor:` Code refactoring
- `test:` Test additions
- `chore:` Maintenance tasks

### Step 4: Push to GitHub

```bash
git push origin feature/add-courses
```

### Step 5: Open a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR description

**PR Description Template:**

```markdown
## What this PR does
[Brief description of changes]

## What I verified
- [ ] All links work
- [ ] TypeScript compiles without errors
- [ ] Dark mode styling is correct
- [ ] Content is accurate
- [ ] No console errors in browser
- [ ] Responsive design works on all screen sizes
- [ ] Code follows project style guidelines

## Changes made
- Added [X] new courses to courses.ts
- Updated [Y] section in [page name]
- Fixed [Z] bug in [component]

## Screenshots (if UI changes)
[Optional: Add before/after screenshots]

## How to test
1. [Step 1 to test new content]
2. [Step 2 to test functionality]
```

---

## Code Review Checklist

Before submitting, ensure your PR passes this checklist:

### Content Quality
- [ ] All content is accurate and up-to-date
- [ ] Links work and open in new tab
- [ ] Rating values are accurate (5 = best)
- [ ] Categories are correct
- [ ] Content is in English (unless for Arabic section)
- [ ] No duplicate content

### Code Quality
- [ ] TypeScript types are correct
- [ ] No TypeScript compilation errors
- [ ] Code follows NeoBrutalist design system
  - [ ] Border width is 2px or 4px
  - [ ] Shadow-neo or manual 4px 4px 0px shadow
  - [ ] Hover effects match design system
- [ ] Dark mode styling is correct
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Consistent with existing code style
- [ ] Appropriate comments for complex logic

### Accessibility
- [ ] Keyboard navigation works
- [ ] ARIA labels are present where needed
- [ ] Screen reader friendly (optional but recommended)
- [ ] Sufficient color contrast

### Performance
- [ ] No console errors in browser
- [ ] Images load correctly (if any)
- [ ] No unnecessary re-renders (if making changes to components)

---

## What We Need Most

### High Priority
1. 📚 **More courses** (especially Arabic and beginner-level)
2. 🛠️ **More tools** (AI coding assistants, databases, payment solutions)
3. 💼 **More Egyptian companies** (actively hiring)
4. 📄 **More project ideas** (different stacks, difficulty levels)

### Medium Priority
1. 📖 **More FAQs** (by track, by company)
2. 🗺️ **More roadmaps** (DevOps, Blockchain, AR/VR)
3. 💼 **More remote job boards** and resources
4. 🎓 **More internship opportunities**

### Content Quality
1. ✅ **Verify and update** existing course ratings
2. ✅ **Add more student reviews**
3. ✅ **Improve project descriptions** and examples
4. ✅ **Add case studies** from successful Egyptian developers

---

## Getting Help

If you have questions or need help:

1. **Read the specs.md**: Detailed technical specifications
2. **Read the README.md**: Overall project understanding
3. **Check existing code**: Look at similar components/data for examples
4. **Open an Issue**: Ask a question or report a bug
5. **Start a Discussion**: Ask for advice on contributions

### Useful Resources

- **NeoBrutalism.dev**: https://neobrutalism.dev (Official NeoBrutalist design system)
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **Radix UI Docs**: https://www.radix-ui.com/docs

---

## Thank You!

Thank you for contributing to Helm! Your help makes this project better for all Egyptian CS students.

Every contribution, no matter how small, matters. 🚀

---

<div align="center">
  <p>Built with ❤️ by the Egyptian CS community</p>
  <a href="https://github.com/u-wz/helm">github.com/u-wz/helm</a>
</div>
