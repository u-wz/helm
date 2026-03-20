"use client";
import { useState, useMemo, useEffect } from "react";
import { companies, Company, CompanyType, CompanySize } from "@/data/companies";
import { jobBoards } from "@/data/jobBoards";
import { faqs } from "@/data/faqs";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoBadge } from "@/components/ui/NeoBadge";
import { NeoAccordion } from "@/components/ui/NeoAccordion";
import { NeoStar } from "@/components/ui/NeoStar";
import { useCopyLink } from "@/hooks/useCopyLink";
import { useToast } from "@/components/ui/NeoToast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ExternalLink,
  Link,
  Briefcase,
  Globe,
  MapPin,
  Users,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ACCENT = "#FFBBA2";

const hiringSteps = [
  {
    step: 1,
    title: "Build Skills & Portfolio",
    desc: "CV, GitHub, LinkedIn — your foundation.",
    tip: "Start building projects early. Employers check GitHub before anything else.",
  },
  {
    step: 2,
    title: "Apply (LinkedIn, Wuzzuf, Referrals)",
    desc: "Referrals fill most positions before posting.",
    tip: "Ask friends working at companies to refer you. Internal referrals skip the screening queue.",
  },
  {
    step: 3,
    title: "Screening Call (15–30 min)",
    desc: "HR checks English level, general fit, salary.",
    tip: "Know your salary expectation in advance. Research what the role pays on Glassdoor.",
  },
  {
    step: 4,
    title: "Technical Assessment",
    desc: "Take-home task OR online coding test.",
    tip: "Practice on LeetCode Easy/Medium. Many companies use HackerRank or custom take-home tasks.",
  },
  {
    step: 5,
    title: "Technical Interview (1–2 rounds)",
    desc: "Problem solving, system design, past projects.",
    tip: "Be ready to talk about your projects in depth — what you built, why, and what you'd improve.",
  },
  {
    step: 6,
    title: "HR/Culture Fit Round",
    desc: "Behavioral questions and team fit assessment.",
    tip: "Prepare 2–3 stories about teamwork, conflict resolution, and learning from mistakes.",
  },
  {
    step: 7,
    title: "Offer 🎉",
    desc: "Negotiation, contract, and start date.",
    tip: "Always negotiate. Even 10–20% more adds up. Ask about benefits, remote days, and growth path.",
  },
];

const remoteGuide = [
  {
    id: "remote-why",
    title: "Why remote work is the biggest opportunity for Egyptian devs",
    content:
      "Currency math: $1,500/month ≈ 75,000 EGP vs a typical local salary of 15,000–25,000 EGP. Remote work from Egypt pays 3–5x more. Companies in the US, EU, and UK actively hire remote developers. This is the biggest financial lever available to Egyptian developers.",
  },
  {
    id: "remote-prereqs",
    title: "Prerequisites before applying for remote work",
    content:
      "Strong English (written communication is critical for async work), experience with async tools (Slack, Notion, Loom, GitHub), a solid portfolio with deployed projects, and at least 1–2 years of work experience. Remote companies hire for self-management ability.",
  },
  {
    id: "remote-where",
    title: "Where to find remote jobs",
    content:
      'We Work Remotely, Remote.co, Remote OK, Wellfound (AngelList), LinkedIn with "Remote" filter, Toptal (for experienced devs), and Arc.dev. Apply to 10+ per week consistently.',
  },
  {
    id: "remote-stand-out",
    title: "How to stand out as an Egyptian remote candidate",
    content:
      "Build a portfolio website in English, write clear GitHub READMEs, create a professional LinkedIn with recommendations, record Loom videos explaining your projects, and contribute to open source. Showing async communication skills is crucial.",
  },
  {
    id: "remote-income",
    title: "Realistic remote income expectations (USD/month)",
    content:
      "Junior (1–2 years): $800–$2,000. Mid (3–5 years): $2,000–$5,000. Senior (5+ years): $5,000–$10,000+. These are rough ranges and vary by role, company size, and your negotiation skills.",
  },
  {
    id: "remote-payment",
    title: "How to receive international payments",
    content:
      "Payoneer is the most popular option for Egyptian freelancers — links directly to Egyptian bank accounts. Wise offers lower fees for transfers. Some companies pay via direct USD bank transfer. Set up a USD-denominated account at CIB or NBE. Avoid PayPal — limited withdrawals in Egypt.",
  },
];

const internshipGuide = [
  {
    id: "intern-why",
    title: "Why your first internship is your most important career move",
    content:
      'Your first internship transforms your CV from "student" to "professional." It gives you real project experience, professional references, and often leads to a full-time offer. Companies strongly prefer candidates with internship experience.',
  },
  {
    id: "intern-where",
    title: "Where to find internships in Egypt",
    content:
      "LinkedIn (filter Egypt + Internship), Wuzzuf (internship filter), company websites directly (Instabug, Paymob, Microsoft Egypt all have internship programs), university career fairs, and tech community groups on Facebook and Telegram.",
  },
  {
    id: "intern-cold-email",
    title: "The cold email strategy that works",
    content:
      "Subject: \"CS Student — Summer Internship Interest [Your Track]\"\n\nTemplate: \"Hi [Name], I'm a [year] CS student at [University] interested in [track]. I've built [project] using [tech stack] — [link]. I'd love to intern at [Company] this summer. I'm available [dates]. Here's my GitHub: [link]. Would you be open to a quick chat? Thanks, [Your Name]\"\n\nSend to engineering managers, not HR. Personalize each email. Follow up once after 1 week.",
  },
  {
    id: "intern-expect",
    title: "What to expect from Egyptian internships",
    content:
      "Timeline: Most summer internships recruit January–April. Duration: 2–3 months. Paid vs unpaid: Startups often pay 3,000–6,000 EGP/month. MNCs pay 8,000–15,000 EGP/month. Some are unpaid but offer strong learning. Remote options exist but on-site is more common.",
  },
];

interface CompanyFilters {
  type: CompanyType | "all";
  stack: string;
  size: CompanySize | "all";
}

function FilterButton({
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
        "px-3 py-1.5 border-2 border-black dark:border-white font-body font-semibold text-xs uppercase tracking-wide cursor-pointer",
        "transition-all duration-100",
        active
          ? "translate-x-0.5 translate-y-0.5 shadow-none"
          : "shadow-neo dark:shadow-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5",
      )}
      style={active ? { backgroundColor: ACCENT, color: "#0A0A0A" } : {}}
    >
      {label}
    </button>
  );
}

function CompanyCard({ company }: { company: Company }) {
  const { copy } = useCopyLink();
  const { show } = useToast();

  const typeLabel =
    company.type === "egyptian_startup"
      ? "Egyptian Startup"
      : company.type === "egyptian_corporate"
        ? "Egyptian Corporate"
        : "Multinational";
  const typeColor =
    company.type === "egyptian_startup"
      ? { bg: "#DCFCE7", border: "#16A34A", text: "#14532D" }
      : company.type === "multinational"
        ? { bg: "#EFF6FF", border: "#2563EB", text: "#1E3A8A" }
        : { bg: "#FEF3C7", border: "#D97706", text: "#92400E" };

  return (
    <NeoCard
      id={`company-${company.id}`}
      className="p-5 flex flex-col"
      accent={ACCENT}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <NeoBadge label={typeLabel} customColor={typeColor} size="sm" />
            <NeoBadge
              label={company.size}
              customColor={{ bg: "#F0F0F0", border: "#999", text: "#555" }}
              size="sm"
            />
          </div>
        </div>
        <button
          onClick={() => {
            copy(`company-${company.id}`);
            show("Link copied! 🔗", "success");
          }}
          className="flex-shrink-0 p-1.5 border-2 border-black dark:border-white opacity-60 hover:opacity-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
          title="Copy link"
        >
          <Link size={14} />
        </button>
      </div>

      <h3 className="font-heading font-bold text-lg mb-1">{company.name}</h3>
      <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-3 flex-1">
        {company.description}
      </p>

      {company.location && (
        <p className="font-body text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-2">
          <MapPin size={12} /> {company.location}
        </p>
      )}

      <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-2 italic">
        {company.knownFor}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {company.techStack.slice(0, 5).map((tech) => (
          <NeoBadge
            key={tech}
            label={tech}
            customColor={{ bg: "#F3E8FF", border: "#9333EA", text: "#581C87" }}
            size="sm"
          />
        ))}
        {company.techStack.length > 5 && (
          <NeoBadge
            label={`+${company.techStack.length - 5}`}
            customColor={{ bg: "#F0F0F0", border: "#999", text: "#555" }}
            size="sm"
          />
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {company.domains.map((d) => (
          <NeoBadge
            key={d}
            label={d}
            customColor={{ bg: "#FFF7ED", border: "#EA580C", text: "#7C2D12" }}
            size="sm"
          />
        ))}
      </div>

      <div className="flex items-center gap-3 text-xs font-body text-gray-500 dark:text-gray-400 mb-3">
        {company.hiresInterns && (
          <span className="flex items-center gap-1">
            <Users size={12} /> Hires interns
          </span>
        )}
        {company.hiresRemote && (
          <span className="flex items-center gap-1">
            <Globe size={12} /> Remote OK
          </span>
        )}
      </div>

      <NeoButton
        href={company.careersUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        variant="secondary"
        icon={<ExternalLink size={12} />}
        iconPosition="right"
      >
        View Careers
      </NeoButton>
    </NeoCard>
  );
}

export default function CareersPage() {
  const [filters, setFilters] = useState<CompanyFilters>({
    type: "all",
    stack: "all",
    size: "all",
  });
  const careerFaqs = faqs.filter((f) => f.page === "careers");
  const { reinit } = useScrollReveal();

  // Re-initialize reveal after filter changes
  useEffect(() => {
    reinit();
  }, [filters, reinit]);

  const allStacks = useMemo(() => {
    const stacks = new Set<string>();
    companies.forEach((c) => c.techStack.forEach((t) => stacks.add(t)));
    return Array.from(stacks).sort();
  }, []);

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      if (filters.type !== "all" && c.type !== filters.type) return false;
      if (filters.size !== "all" && c.size !== filters.size) return false;
      if (filters.stack !== "all" && !c.techStack.includes(filters.stack))
        return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="bg-neo-orange border-b-2 border-black overflow-hidden relative">
        <NeoStar
          variant="fat-star"
          className="absolute top-2 right-12 w-16 h-16 text-white drop-shadow-[4px_4px_0px_#0A0A0A] rotate-12"
        />
        <NeoStar
          variant="sparkle"
          className="absolute bottom-2 left-1/4 w-12 h-12 text-neo-purple drop-shadow-[4px_4px_0px_#0A0A0A] -rotate-6"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 relative z-10">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-2 text-black dark:text-white">
            Careers in Egyptian Tech
          </h1>
          <p className="font-body text-lg text-black/80 dark:text-white/80">
            From your first internship to remote work — the honest guide.
          </p>
          <div className="mt-4 w-24 h-1 bg-black" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 space-y-16">
        {/* Hiring Timeline */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-2">
            How Egyptian Hiring Actually Works
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 mb-6">
            A realistic step-by-step of what to expect.
          </p>

          <div className="space-y-0">
            {hiringSteps.map((item, index) => (
              <div
                key={item.step}
                className={`flex gap-4 reveal stagger-${item.step}`}
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 border-2 border-black dark:border-white flex items-center justify-center font-heading font-black text-sm flex-shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {item.step}
                  </div>
                  {index < hiringSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-black dark:bg-white min-h-4" />
                  )}
                </div>
                {/* Content */}
                <NeoCard className="p-4 mb-3 flex-1" hover={false}>
                  <h3 className="font-heading font-bold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.desc}
                  </p>
                  <p className="font-body text-xs bg-neo-orange/10 border-2 border-neo-orange/30 p-2">
                    💡 <strong>Tip:</strong> {item.tip}
                  </p>
                </NeoCard>
              </div>
            ))}
          </div>
        </section>

        {/* Companies Section */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-2">
            Egyptian Tech Companies
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 mb-6">
            Companies actively hiring engineers in Egypt.
          </p>

          {/* Filters */}
          <div className="space-y-3 mb-6">
            <div>
              <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Type
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["all", "All"],
                    ["egyptian_startup", "Startups"],
                    ["egyptian_corporate", "Corporate"],
                    ["multinational", "Multinational"],
                  ] as const
                ).map(([val, label]) => (
                  <FilterButton
                    key={val}
                    label={label}
                    active={filters.type === val}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, type: val }))
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ["all", "All"],
                      ["startup", "<50"],
                      ["mid", "50–500"],
                      ["large", "500+"],
                    ] as const
                  ).map(([val, label]) => (
                    <FilterButton
                      key={val}
                      label={label}
                      active={filters.size === val}
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, size: val }))
                      }
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <FilterButton
                    label="All"
                    active={filters.stack === "all"}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, stack: "all" }))
                    }
                  />
                  {[
                    "Python",
                    "Java",
                    "JavaScript",
                    "React",
                    "Node.js",
                    ".NET",
                    "Flutter",
                    "C++",
                  ].map((s) => (
                    <FilterButton
                      key={s}
                      label={s}
                      active={filters.stack === s}
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, stack: s }))
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{companies.length}</strong> companies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>

          {filtered.length === 0 && (
            <NeoCard className="p-10 text-center">
              <p className="font-heading font-bold text-xl mb-2">
                No companies match your filters
              </p>
              <NeoButton
                onClick={() =>
                  setFilters({ type: "all", stack: "all", size: "all" })
                }
                variant="secondary"
                className="mt-4"
              >
                Clear filters
              </NeoButton>
            </NeoCard>
          )}
        </section>

        {/* Job Boards */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-2">
            Job Boards
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 mb-6">
            Where to search for tech jobs in Egypt and globally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobBoards.map((board) => (
              <NeoCard
                key={board.id}
                id={`board-${board.id}`}
                className="p-5 flex flex-col"
                accent={ACCENT}
              >
                <div className="flex items-center gap-2 mb-2">
                  <NeoBadge
                    label={board.type}
                    customColor={
                      board.type === "local"
                        ? { bg: "#DCFCE7", border: "#16A34A", text: "#14532D" }
                        : board.type === "remote"
                          ? {
                              bg: "#F3E8FF",
                              border: "#9333EA",
                              text: "#581C87",
                            }
                          : {
                              bg: "#EFF6FF",
                              border: "#2563EB",
                              text: "#1E3A8A",
                            }
                    }
                    size="sm"
                  />
                </div>
                <h3 className="font-heading font-bold text-base mb-1">
                  {board.name}
                </h3>
                <p className="font-body text-sm text-gray-600 dark:text-gray-400 flex-1 mb-2">
                  {board.description}
                </p>
                <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Best for: {board.bestFor}
                </p>
                <NeoButton
                  href={board.url}
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
            ))}
          </div>
        </section>

        {/* Remote Work Guide */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-2 flex items-center gap-2">
            <Globe className="text-[var(--text-primary)]" size={28} /> Remote
            Work Guide
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 mb-6">
            The biggest opportunity for Egyptian developers.
          </p>

          <NeoAccordion
            exclusive
            accent={ACCENT}
            items={remoteGuide.map((item) => ({
              id: item.id,
              trigger: (
                <span className="font-heading font-bold text-sm">
                  {item.title}
                </span>
              ),
              content: (
                <p className="font-body text-sm leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              ),
            }))}
          />
        </section>

        {/* Internship Guide */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-2 flex items-center gap-2">
            <GraduationCap className="text-[var(--text-primary)]" size={28} />{" "}
            Internship Guide
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 mb-6">
            How to land your first internship in Egypt.
          </p>

          <NeoAccordion
            exclusive
            accent={ACCENT}
            items={internshipGuide.map((item) => ({
              id: item.id,
              trigger: (
                <span className="font-heading font-bold text-sm">
                  {item.title}
                </span>
              ),
              content: (
                <p className="font-body text-sm leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              ),
            }))}
          />
        </section>

        {/* FAQ */}
        <section className="reveal">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-4">
            FAQ
          </h2>
          <NeoAccordion
            exclusive
            accent={ACCENT}
            items={careerFaqs.map((faq) => ({
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
