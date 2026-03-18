"use client";
import { useState, useEffect } from "react";
import { tools, ToolCategory } from "@/data/tools";
import { faqs } from "@/data/faqs";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoBadge } from "@/components/ui/NeoBadge";
import { NeoAccordion } from "@/components/ui/NeoAccordion";
import { NeoStar } from "@/components/ui/NeoStar";
import { useCopyLink } from "@/hooks/useCopyLink";
import { useToast } from "@/components/ui/NeoToast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import itiLogo from "@/public/iti.svg";
const ACCENT = "#9B5DE5";
const CATEGORY_ORDER: ToolCategory[] = [
  "student_pack",
  "editor",
  "cloud",
  "design",
  "productivity",
  "vpn",
  "ai",
  "payment",
  "version_control",
  "api_testing",
  "database",
  "terminal",
  "devops_cicd",
  "security",
  "browser_devtools",
  "testing", // ← Add this
  "learning", // ← Add this
];

const CATEGORY_LABELS: Record<ToolCategory, string> = {
  student_pack: "Student Pack",
  editor: "Code Editors & IDEs",
  cloud: "Free Cloud & Hosting",
  design: "Design Tools",
  productivity: "Learning & Productivity",
  vpn: "VPN & Internet",
  ai: "AI & Developer Tools",
  payment: "Egyptian Payment Tools",
  version_control: "Version Control",
  api_testing: "API Testing",
  database: "Database",
  terminal: "Terminals",
  devops_cicd: "CI/CD",
  security: "Security",
  browser_devtools: "DevTools",
  testing: "Testing Tools", // ← Add this
  learning: "Learning Platforms", // ← Add this
};

function ToolCard({ tool }: { tool: (typeof tools)[0] }) {
  const { copy } = useCopyLink();
  const { show } = useToast();
  return (
    <NeoCard
      id={`tool-${tool.id}`}
      className="p-5 flex flex-col"
      accent={ACCENT}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          {tool.isFree && <NeoBadge label="Free" variant="free" size="sm" />}
          {tool.hasFreeStudentPlan && (
            <NeoBadge
              label="Student Free"
              customColor={{
                bg: "#EFF6FF",
                border: "#2563EB",
                text: "#1E3A8A",
              }}
              size="sm"
            />
          )}
          {tool.isHighlighted && (
            <NeoBadge
              label="★ Recommended"
              customColor={{
                bg: "#FEF3C7",
                border: "#D97706",
                text: "#92400E",
              }}
              size="sm"
            />
          )}
        </div>
        <button
          onClick={() => {
            copy(`tool-${tool.id}`);
            show("Link copied! 🔗", "success");
          }}
          className="flex-shrink-0 p-1.5 border-2 border-black dark:border-white opacity-60 hover:opacity-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          title="Copy link"
        >
          <Link size={14} />
        </button>
      </div>
      <h3 className="font-heading font-bold text-base mb-1">{tool.name}</h3>
      <p className="font-body text-sm text-gray-600 dark:text-gray-400 flex-1 mb-3">
        {tool.description}
      </p>
      {tool.recommendedFor && (
        <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-2">
          <strong>Best for:</strong> {tool.recommendedFor}
        </p>
      )}
      {tool.platforms && tool.platforms.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {tool.platforms.map((p) => (
            <NeoBadge
              key={p}
              label={p}
              customColor={{ bg: "#F0F0F0", border: "#999", text: "#555" }}
              size="sm"
            />
          ))}
        </div>
      )}
      <NeoButton
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        variant="secondary"
        icon={<ExternalLink size={12} />}
        iconPosition="right"
      >
        Visit
      </NeoButton>
    </NeoCard>
  );
}

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">(
    "all",
  );
  const toolFaqs = faqs.filter((f) => f.page === "tools");
  const categoriesToShow =
    activeCategory === "all" ? CATEGORY_ORDER : [activeCategory];
  const { reinit } = useScrollReveal();

  useEffect(() => {
    reinit();
  }, [activeCategory, reinit]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="bg-neo-purple border-b-2 border-black overflow-hidden relative">
        <NeoStar
          variant="fat-star"
          className="absolute top-4 right-10 w-16 h-16 text-neo-yellow drop-shadow-[4px_4px_0px_#0A0A0A] rotate-12"
        />
        <NeoStar
          variant="sparkle"
          className="absolute bottom-4 right-1/4 w-10 h-10 text-white drop-shadow-[4px_4px_0px_#0A0A0A] -rotate-12 text-black"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 relative z-10">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-2 text-white">
            Developer Tools &amp; Free Perks
          </h1>
          <p className="font-body text-lg text-white">
            Everything you need as a developer. Most of it free. All of it
            useful.
          </p>
          <div className="mt-4 w-24 h-1 bg-neo-yellow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 space-y-12">
        {/* Category Filter */}
        <div>
          <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-3">
            Filter by Category
          </p>
          <div className="flex flex-wrap gap-2">
            {(["all", ...CATEGORY_ORDER] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 border-2 border-black dark:border-white font-body font-semibold text-xs uppercase tracking-wide transition-all duration-100 cursor-pointer",
                  activeCategory === cat
                    ? "translate-x-0.5 translate-y-0.5 shadow-none"
                    : "shadow-neo dark:shadow-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5",
                )}
                style={
                  activeCategory === cat
                    ? { backgroundColor: ACCENT, color: "#fff" }
                    : {}
                }
              >
                {cat === "all" ? "All" : CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Tool Sections */}
        {categoriesToShow.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat);
          if (catTools.length === 0) return null;
          return (
            <section key={cat} id={`category-${cat}`} className="reveal">
              <h2 className="font-heading font-bold text-xl md:text-2xl mb-4">
                {CATEGORY_LABELS[cat]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}

        {/* ITI Highlight */}
        <section className="reveal">
          <NeoCard className="p-6 md:p-8" accent="#FF6B35">
            <h2 className="font-heading font-black text-xl md:text-2xl mb-3 flex items-center gap-2">
              <Image
                src={itiLogo}
                alt="ITI"
                className="text-[var(--text-primary)]"
                width={90}
                height={90}
              />{" "}
              ITI — The Most Valuable Free Program in Egypt
            </h2>
            <p className="font-body text-base mb-4">
              The Information Technology Institute (ITI) offers free/subsidized
              9-month intensive training across web, AI, cloud, embedded,
              security tracks. Graduates are highly sought after.
            </p>
            <div className="space-y-1 mb-4 font-body text-sm">
              <p>
                <strong>Apply:</strong> Usually April–May at iti.gov.eg
              </p>
              <p>
                <strong>Cost:</strong> Some tracks fully free, others
                subsidized.
              </p>
            </div>
            <NeoButton
              href="https://iti.gov.eg/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<ExternalLink size={14} />}
              iconPosition="right"
            >
              Visit ITI
            </NeoButton>
          </NeoCard>
        </section>

        {/* VS Code Extensions */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl mb-4">
            Must-Have VS Code Extensions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Prettier", desc: "Auto-format code on save" },
              { name: "ESLint", desc: "Catch JS errors early" },
              { name: "GitLens", desc: "Git blame & history" },
              {
                name: "GitHub Copilot",
                desc: "AI completion (free for students)",
              },
              {
                name: "Tailwind IntelliSense",
                desc: "Tailwind class autocomplete",
              },
              { name: "Thunder Client", desc: "REST API tester" },
              { name: "Error Lens", desc: "Inline error display" },
              { name: "Auto Rename Tag", desc: "Rename paired tags" },
              { name: "Material Icon Theme", desc: "Beautiful file icons" },
            ].map((ext) => (
              <div
                key={ext.name}
                className="border-2 border-black dark:border-white p-3"
              >
                <p className="font-heading font-bold text-sm">{ext.name}</p>
                <p className="font-body text-xs text-gray-500 dark:text-gray-400">
                  {ext.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl mb-4">FAQ</h2>
          <NeoAccordion
            exclusive
            accent={ACCENT}
            items={toolFaqs.map((faq) => ({
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
