"use client";
import { useState, useMemo, useEffect } from "react";
import { projects, ProjectIdea } from "@/data/projects";
import { faqs } from "@/data/faqs";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoBadge } from "@/components/ui/NeoBadge";
import { NeoAccordion } from "@/components/ui/NeoAccordion";
import { NeoStar } from "@/components/ui/NeoStar";
import { useCopyLink } from "@/hooks/useCopyLink";
import { useToast } from "@/components/ui/NeoToast";
import {
  ExternalLink,
  Link,
  Check,
  X as XIcon,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const ACCENT = "#FF0F80";

// CV tips data
const cvSections = [
  {
    id: "cv-contact",
    title: "1. Contact & Links",
    content: (
      <div className="space-y-2 font-body text-sm">
        <p className="font-semibold text-green-700 dark:text-green-400">
          ✅ Include:
        </p>
        <p>
          Name, email, phone (WhatsApp number), GitHub URL, LinkedIn URL,
          portfolio website if you have one
        </p>
        <p className="font-semibold text-red-600 dark:text-red-400 mt-2">
          ❌ Skip:
        </p>
        <p>Address (unnecessary), photo (optional and risky), age/birthdate</p>
      </div>
    ),
  },
  {
    id: "cv-summary",
    title: "2. Summary / Objective",
    content: (
      <div className="space-y-2 font-body text-sm">
        <p>
          2–3 lines: who you are, main skills, what you&apos;re looking for.
          Optional but powerful if done right.
        </p>
        <p className="font-semibold text-green-700 dark:text-green-400">
          ✅ Good:
        </p>
        <p className="italic">
          &quot;CS student at Cairo University specializing in backend
          development with Python and Django. Built 3 production apps. Looking
          for a backend internship where I can solve real problems.&quot;
        </p>
        <p className="font-semibold text-red-600 dark:text-red-400 mt-2">
          ❌ Bad:
        </p>
        <p className="italic">
          &quot;Hardworking team player passionate about technology&quot;
        </p>
      </div>
    ),
  },
  {
    id: "cv-education",
    title: "3. Education",
    content: (
      <div className="font-body text-sm">
        <p>
          University name, faculty, expected graduation year, GPA (only if &gt;
          3.5/4 or equivalent).
        </p>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Drop high school info after year 2.
        </p>
      </div>
    ),
  },
  {
    id: "cv-skills",
    title: "4. Skills",
    content: (
      <div className="font-body text-sm">
        <p className="font-semibold text-green-700 dark:text-green-400">
          ✅ Categorize them:
        </p>
        <p>
          Languages (Python, JS) • Frameworks (React, Django) • Tools (Git,
          Docker) • Databases (PostgreSQL, MongoDB)
        </p>
        <p className="font-semibold text-red-600 dark:text-red-400 mt-2">
          ❌ Skip:
        </p>
        <p>
          Soft skills list (communication, teamwork) — everyone says this and it
          adds nothing.
        </p>
      </div>
    ),
  },
  {
    id: "cv-projects",
    title: "5. Projects (MOST IMPORTANT)",
    content: (
      <div className="font-body text-sm">
        <p className="font-semibold text-green-700 dark:text-green-400">
          ✅ Each project needs:
        </p>
        <p>
          Project name + 1-line description + tech stack + GitHub link + live
          demo link
        </p>
        <p className="mt-1">
          Mention impact: &quot;Reduced loading time by 60%&quot;, &quot;500+
          users&quot;
        </p>
        <p className="font-semibold text-red-600 dark:text-red-400 mt-2">
          ❌ Avoid:
        </p>
        <p>Tutorial copies, university homework assignments</p>
      </div>
    ),
  },
  {
    id: "cv-experience",
    title: "6. Experience / Internships",
    content: (
      <div className="font-body text-sm">
        <p>Company, role, dates, 2–3 bullet points of what you did + impact.</p>
        <p className="mt-1">
          Even unpaid internships count — mention them. Skip unrelated work
          experience unless you have nothing else.
        </p>
      </div>
    ),
  },
  {
    id: "cv-certs",
    title: "7. Certifications (Optional)",
    content: (
      <div className="font-body text-sm">
        <p className="font-semibold text-green-700 dark:text-green-400">
          ✅ Worth listing:
        </p>
        <p>Google, AWS, Meta, Harvard CS50, IBM certifications</p>
        <p className="font-semibold text-red-600 dark:text-red-400 mt-2">
          ❌ Skip:
        </p>
        <p>Udemy certificates (everyone has them — they don&apos;t impress)</p>
      </div>
    ),
  },
];

const gradGuide = [
  {
    id: "grad-1",
    title:
      "The difference between a forgettable and impressive graduation project",
    content:
      "A forgettable project: generic topic, barely works on demo day, no GitHub repo. An impressive project: solves a real problem, works live, has clean code on GitHub, built with a modern stack. The difference is not talent — it's preparation.",
  },
  {
    id: "grad-2",
    title: "The professor vs the industry — what each wants",
    content:
      "Professors care about: documentation, research methodology, theoretical depth. Industry cares about: does it work? Is the code clean? Would a user actually use this? Balance both: satisfy the academic requirements AND make something that works in the real world.",
  },
  {
    id: "grad-3",
    title: "How to pick your topic in 3 questions",
    content:
      "Q1: Does a real person need this? (If only your professor will ever see it, rethink.) Q2: Can you demo it live on presentation day? (If it's just a paper, it won't help your career.) Q3: Does it involve tech you want to put on your CV? (Pick a stack companies actually use.)",
  },
  {
    id: "grad-4",
    title: "How to put your graduation project on GitHub properly",
    content:
      "Clean README with: project description, screenshots, tech stack, how to run it, architecture overview. Add a .env.example file. Deploy it (Vercel, Railway, etc.). Add the live link to the README. This single repo can be the most important thing on your CV.",
  },
];

// Project filters
interface ProjectFilters {
  stack: string;
  difficulty: string;
  target: string;
  type: string;
}

function FilterBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 border-2 border-black dark:border-white font-body font-semibold text-xs uppercase tracking-wide transition-all duration-100 cursor-pointer",
        active
          ? "translate-x-0.5 translate-y-0.5 shadow-none"
          : "shadow-neo dark:shadow-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5",
      )}
      style={active ? { backgroundColor: ACCENT, color: "#fff" } : {}}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: ProjectIdea }) {
  const { copy } = useCopyLink();
  const { show } = useToast();
  const diffColor =
    project.difficulty === "beginner"
      ? "beginner"
      : project.difficulty === "intermediate"
        ? "intermediate"
        : "advanced";
  const targetColor =
    project.targetMarket === "local"
      ? { bg: "#DCFCE7", border: "#16A34A", text: "#14532D" }
      : project.targetMarket === "remote"
        ? { bg: "#F3E8FF", border: "#9333EA", text: "#581C87" }
        : { bg: "#EFF6FF", border: "#2563EB", text: "#1E3A8A" };

  return (
    <NeoCard
      id={`project-${project.id}`}
      className="p-5 flex flex-col"
      accent={ACCENT}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex gap-2 flex-wrap">
          <NeoBadge
            label={project.difficulty}
            variant={diffColor as any}
            size="sm"
          />
          <NeoBadge
            label={
              project.targetMarket === "local"
                ? "🇪🇬 Local"
                : project.targetMarket === "remote"
                  ? "🌍 Remote"
                  : "🌐 Both"
            }
            customColor={targetColor}
            size="sm"
          />
        </div>
        <button
          onClick={() => {
            copy(`project-${project.id}`);
            show("Link copied! 🔗", "success");
          }}
          className="flex-shrink-0 p-1.5 border-2 border-black dark:border-white opacity-60 hover:opacity-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          title="Copy link"
        >
          <Link size={14} />
        </button>
      </div>
      <h3 className="font-heading font-bold text-base mb-1">{project.title}</h3>
      <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-2">
        {project.stack.map((s) => (
          <NeoBadge
            key={s}
            label={s}
            customColor={{ bg: "#F3E8FF", border: "#9333EA", text: "#581C87" }}
            size="sm"
          />
        ))}
      </div>
      <p className="font-body text-xs italic mb-3" style={{ color: ACCENT }}>
        💡 {project.whyItImpress}
      </p>
      <div className="mb-3">
        <p className="font-body text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
          Key Features:
        </p>
        <ul className="space-y-0.5">
          {project.keyFeatures.slice(0, 4).map((f, i) => (
            <li
              key={i}
              className="font-body text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1"
            >
              <span className="text-neo-pink mt-0.5">▸</span> {f}
            </li>
          ))}
          {project.keyFeatures.length > 4 && (
            <li className="font-body text-xs text-gray-500 dark:text-gray-400">
              +{project.keyFeatures.length - 4} more
            </li>
          )}
        </ul>
      </div>
      <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-auto">
        ⏱ {project.estimatedTime}
      </p>
    </NeoCard>
  );
}

export default function CVProjectsPage() {
  const [tab, setTab] = useState<"cv" | "projects">("cv");
  const [filters, setFilters] = useState<ProjectFilters>({
    stack: "all",
    difficulty: "all",
    target: "all",
    type: "all",
  });
  const cvFaqs = faqs.filter((f) => f.page === "cv_projects");
  const { reinit } = useScrollReveal();

  useEffect(() => {
    reinit();
  }, [tab, filters, reinit]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.difficulty !== "all" && p.difficulty !== filters.difficulty)
        return false;
      if (filters.target !== "all" && p.targetMarket !== filters.target)
        return false;
      if (
        filters.stack !== "all" &&
        !p.stack.some((s) =>
          s.toLowerCase().includes(filters.stack.toLowerCase()),
        )
      )
        return false;
      if (
        filters.type !== "all" &&
        !p.type.some((t) =>
          t.toLowerCase().includes(filters.type.toLowerCase()),
        )
      )
        return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="bg-neo-pink border-b-2 border-black overflow-hidden relative">
        <NeoStar
          variant="sparkle"
          className="absolute top-6 right-16 w-14 h-14 text-neo-blue drop-shadow-[4px_4px_0px_#0A0A0A] rotate-12"
        />
        <NeoStar
          variant="fat-star"
          className="absolute bottom-4 left-1/4 w-12 h-12 text-neo-yellow drop-shadow-[4px_4px_0px_#0A0A0A] -rotate-6"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 relative z-10">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-2 text-white">
            CV &amp; Project Ideas
          </h1>
          <p className="font-body text-lg text-white">
            Build a CV that gets responses. Build projects that get interviews.
          </p>
          <div className="mt-4 w-24 h-1 bg-neo-yellow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 space-y-10">
        {/* Tab Switcher */}
        <div className="flex gap-0 border-2 border-black dark:border-white inline-flex">
          {(["cv", "projects"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-6 py-3 font-heading font-bold text-base transition-all cursor-pointer",
                tab === t
                  ? "text-white"
                  : "hover:bg-black/5 dark:hover:bg-white/5",
                t === "cv" && "border-black dark:border-white",
              )}
              style={tab === t ? { backgroundColor: ACCENT } : {}}
            >
              {t === "cv" ? "CV Guide" : "Project Ideas"}
            </button>
          ))}
        </div>

        {tab === "cv" && (
          <div className="space-y-10">
            {/* CV Tips */}
            <section className="reveal">
              <h2 className="font-heading font-black text-2xl mb-4">
                What Egyptian Hiring Managers Actually Look For
              </h2>
              <NeoCard className="p-6" accent={ACCENT}>
                <ul className="space-y-2">
                  {[
                    "Your GitHub link is more important than your GPA",
                    "1 page max for less than 3 years of experience",
                    "List projects with links to GitHub AND live demo",
                    "Include your tech stack clearly",
                    "Don't lie about skills — you will be tested",
                    "English CV for most companies (even local ones)",
                  ].map((tip, i) => (
                    <li
                      key={i}
                      className="font-body text-sm flex items-start gap-2"
                    >
                      <span style={{ color: ACCENT }} className="font-bold">
                        ▸
                      </span>{" "}
                      {tip}
                    </li>
                  ))}
                </ul>
              </NeoCard>
            </section>

            {/* Section by Section */}
            <section className="reveal">
              <h2 className="font-heading font-black text-2xl mb-4">
                What to Include — Section by Section
              </h2>
              <NeoAccordion
                accent={ACCENT}
                exclusive={false}
                items={cvSections.map((s) => ({
                  id: s.id,
                  trigger: (
                    <span className="font-heading font-bold text-sm">
                      {s.title}
                    </span>
                  ),
                  content: s.content,
                }))}
              />
            </section>

            {/* CV Templates */}
            <section className="reveal">
              <h2 className="font-heading font-black text-2xl mb-4">
                CV Templates
              </h2>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4">
                Keep it clean, black and white, ATS-friendly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    name: "Jake's Resume (GitHub)",
                    url: "https://github.com/jakegut/resume",
                    desc: "The most popular CS resume LaTeX template on GitHub",
                  },
                  {
                    name: "Overleaf Templates",
                    url: "https://www.overleaf.com/latex/templates/tagged/cv",
                    desc: "Free LaTeX CV templates — professional and ATS-friendly",
                  },
                  {
                    name: "Canva CS Resume",
                    url: "https://www.canva.com/resumes/templates/",
                    desc: "Free drag-and-drop CV templates (easier than LaTeX)",
                  },
                ].map((tmpl) => (
                  <NeoCard key={tmpl.name} className="p-4" accent={ACCENT}>
                    <h3 className="font-heading font-bold text-sm mb-1">
                      {tmpl.name}
                    </h3>
                    <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {tmpl.desc}
                    </p>
                    <NeoButton
                      href={tmpl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      variant="secondary"
                      icon={<ExternalLink size={12} />}
                      iconPosition="right"
                    >
                      Open
                    </NeoButton>
                  </NeoCard>
                ))}
              </div>
            </section>

            <section className="reveal">
              <h2 className="font-heading font-black text-2xl mb-4 flex items-center gap-2">
                <GraduationCap
                  className="text-[var(--text-primary)]"
                  size={28}
                />{" "}
                Graduation Project Guide
              </h2>
              <NeoAccordion
                exclusive
                accent={ACCENT}
                items={gradGuide.map((g) => ({
                  id: g.id,
                  trigger: (
                    <span className="font-heading font-bold text-sm">
                      {g.title}
                    </span>
                  ),
                  content: (
                    <p className="font-body text-sm leading-relaxed">
                      {g.content}
                    </p>
                  ),
                }))}
              />
            </section>
          </div>
        )}

        {tab === "projects" && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="space-y-3">
              <div>
                <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Difficulty
                </p>
                <div className="flex flex-wrap gap-2">
                  {["all", "beginner", "intermediate", "advanced"].map((d) => (
                    <FilterBtn
                      key={d}
                      label={
                        d === "all"
                          ? "All"
                          : d.charAt(0).toUpperCase() + d.slice(1)
                      }
                      active={filters.difficulty === d}
                      onClick={() =>
                        setFilters((p) => ({ ...p, difficulty: d }))
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Target Market
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ["all", "All"],
                      ["local", "🇪🇬 Local"],
                      ["remote", "🌍 Remote"],
                      ["both", "Both"],
                    ].map(([v, l]) => (
                      <FilterBtn
                        key={v}
                        label={l}
                        active={filters.target === v}
                        onClick={() => setFilters((p) => ({ ...p, target: v }))}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "all",
                      "React",
                      "Python",
                      "Flutter",
                      "Next.js",
                      "Node.js",
                    ].map((s) => (
                      <FilterBtn
                        key={s}
                        label={s === "all" ? "All" : s}
                        active={filters.stack === s}
                        onClick={() => setFilters((p) => ({ ...p, stack: s }))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-gray-600 dark:text-gray-400">
              Showing <strong>{filtered.length}</strong> of{" "}
              <strong>{projects.length}</strong> project ideas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <NeoCard className="p-10 text-center">
                <p className="font-heading font-bold text-xl mb-2">
                  No projects match
                </p>
                <NeoButton
                  onClick={() =>
                    setFilters({
                      stack: "all",
                      difficulty: "all",
                      target: "all",
                      type: "all",
                    })
                  }
                  variant="secondary"
                  className="mt-4"
                >
                  Clear filters
                </NeoButton>
              </NeoCard>
            )}
          </div>
        )}

        {/* FAQ */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl mb-4">FAQ</h2>
          <NeoAccordion
            exclusive
            accent={ACCENT}
            items={cvFaqs.map((faq) => ({
              id: faq.id,
              trigger: (
                <span className="font-heading font-bold text-sm">
                  {faq.question}
                </span>
              ),
              content: (
                <p className="font-body text-sm leading-relaxed">
                  {faq.answer}
                </p>
              ),
            }))}
          />
        </section>
      </div>
    </div>
  );
}
