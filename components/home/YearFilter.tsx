"use client";
import { useState, useEffect } from "react";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { ArrowRight, CheckSquare, Square, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const yearData = [
  {
    year: 0,
    arabicLabel: "ثانوي عام / مبتدئ",
    accent: "#FFB300",
    focus: [
      "Don't worry about picking a specific track yet",
      "Learn the basics of coding with Python or Scratch",
      "Watch CS50x (Harvard's intro to CS) online for free",
      "Focus on your school grades, especially math",
      "Build simple, fun projects (calculators, text games)",
      "Join tech communities or clubs if your school has them",
    ],
    nextStep: "Watch CS50 Week 0 and see if you enjoy it.",
    nextStepHref: "/courses",
  },
  {
    year: 1,
    arabicLabel: "الفرقة الأولى",
    accent: "#4361EE",
    focus: [
      "Learn the basics of one language — Python or JavaScript",
      "Take CS50x (Harvard, free, absolutely worth it)",
      "Make a GitHub account TODAY and push code every week",
      "Understand what track interests you (web, AI, security, mobile)",
      "Don't stress about GPA too much in year 1 — build habits",
      "Join your university tech community or club",
    ],
    nextStep: "Take CS50x and pick a programming language to focus on.",
    nextStepHref: "/courses",
  },
  {
    year: 2,
    arabicLabel: "الفرقة التانية",
    accent: "#06D6A0",
    focus: [
      "Pick your main track and follow the roadmap seriously",
      "Build your first complete project (not a tutorial clone)",
      "Learn Git properly — branches, pull requests, code reviews",
      "Start using VS Code or JetBrains like a professional",
      "Apply for the GitHub Student Developer Pack",
      "Attend at least one hackathon or tech event",
      "Get comfortable with data structures and algorithms basics",
    ],
    nextStep: "Pick your track on the Roadmaps page and complete Phase 1.",
    nextStepHref: "/roadmaps",
  },
  {
    year: 3,
    arabicLabel: "الفرقة التالتة",
    accent: "#FF6B35",
    focus: [
      "Have 2 solid projects on GitHub with live demos",
      "Start applying for summer internships (apply early — Jan/Feb)",
      "Build your LinkedIn profile professionally",
      "Know your tech stack inside out (not just surface level)",
      "Start reading job descriptions to calibrate your skills",
      "Consider contributing to open source",
      "Complete at least Phase 2 of your chosen roadmap",
    ],
    nextStep: "Polish your GitHub profile and apply for summer internships.",
    nextStepHref: "/careers",
  },
  {
    year: 4,
    arabicLabel: "الفرقة الرابعة",
    accent: "#FF0F80",
    focus: [
      "Your graduation project should be deployable and impressive",
      "Prepare your CV — max 1 page, projects front and center",
      "Start applying to jobs in semester 1, don't wait until you graduate",
      "Practice technical interviews: LeetCode easy/medium",
      "Have at least 3 portfolio projects with GitHub + live demo",
      "Consider remote jobs — they pay significantly more in USD",
      "Network: reach out to professionals on LinkedIn for advice",
    ],
    nextStep: "Polish your CV and start applying. Don't wait until graduation.",
    nextStepHref: "/cv-projects",
  },
];

export function YearFilter() {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const savedYear = localStorage.getItem("selected_year");
    if (savedYear) setSelected(parseInt(savedYear));
  }, []);

  const handleSelect = (year: number) => {
    setSelected(year);
    localStorage.setItem("selected_year", year.toString());
  };

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedData = yearData.find((y) => y.year === selected);

  return (
    <section id="year-filter" className="py-16 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-3xl md:text-4xl mb-2">
            What year are you in?
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400">
            Pick your year and we&apos;ll show you exactly what matters right
            now
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {yearData.map((item) => (
            <button
              key={item.year}
              onClick={() => handleSelect(item.year)}
              className={cn(
                "border-2 border-black dark:border-white p-4 font-heading font-bold cursor-pointer",
                "transition-all duration-150",
                selected === item.year
                  ? "translate-x-0.5 translate-y-0.5 shadow-none"
                  : "shadow-neo dark:shadow-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-white-hover",
              )}
              style={
                selected === item.year
                  ? { backgroundColor: item.accent, color: "#0A0A0A" }
                  : {}
              }
            >
              <div className="text-xl md:text-2xl mb-1">
                {item.year === 0 ? "High School" : `Year ${item.year}`}
              </div>
              <div className="text-xs md:text-sm" dir="rtl">
                {item.arabicLabel}
              </div>
            </button>
          ))}
        </div>

        {selectedData && (
          <div className="animate-fade-in">
            <NeoCard className="p-6 md:p-8" accent={selectedData.accent}>
              <h3 className="font-heading font-bold text-xl mb-4">
                Right now, you should focus on:
              </h3>
              <ul className="space-y-3 mb-6">
                {selectedData.focus.map((item, i) => {
                  const key = `year${selectedData.year}-${i}`;
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-3 cursor-pointer"
                      onClick={() => toggle(key)}
                    >
                      <span
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: selectedData.accent }}
                      >
                        {checked[key] ? (
                          <CheckSquare size={20} />
                        ) : (
                          <Square size={20} />
                        )}
                      </span>
                      <span
                        className={cn(
                          "font-body text-base",
                          checked[key] && "line-through text-gray-400",
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div
                className="border-2 border-black dark:border-white p-4 mb-4"
                style={{ backgroundColor: selectedData.accent + "20" }}
              >
                <p className="font-body font-semibold text-sm uppercase tracking-wide mb-1">
                  Your most important next step:
                </p>
                <p className="font-heading font-bold text-base">
                  {selectedData.nextStep}
                </p>
              </div>

              <NeoButton
                href={selectedData.nextStepHref}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Go to{" "}
                {selectedData.nextStepHref === "/roadmaps"
                  ? "Roadmaps"
                  : selectedData.nextStepHref === "/careers"
                    ? "Careers"
                    : selectedData.nextStepHref === "/cv-projects"
                      ? "CV & Projects"
                      : "Courses"}{" "}
                →
              </NeoButton>
            </NeoCard>
          </div>
        )}
      </div>
    </section>
  );
}
