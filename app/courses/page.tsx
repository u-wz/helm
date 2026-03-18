"use client";
import { useState, useMemo, useCallback } from "react";
import {
  courses,
  Course,
  TrackName,
  CourseType,
  CourseFormat,
  ContentLanguage,
} from "@/data/courses";
import { faqs } from "@/data/faqs";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoBadge } from "@/components/ui/NeoBadge";
import { NeoInput } from "@/components/ui/NeoInput";
import { NeoAccordion } from "@/components/ui/NeoAccordion";
import { NeoStar } from "@/components/ui/NeoStar";
import { StarRating } from "@/components/ui/StarRating";
import { useToast } from "@/components/ui/NeoToast";
import { useCopyLink } from "@/hooks/useCopyLink";
import {
  Search,
  ExternalLink,
  Link,
  X,
  Youtube,
  Globe,
  BookOpen,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BADGE_COLORS } from "@/lib/constants";

interface Filters {
  search: string;
  tracks: TrackName[];
  type: CourseType | "all";
  format: CourseFormat | "all";
  hasCertificate: boolean | null;
  contentLanguage: ContentLanguage | "all";
}

const defaultFilters: Filters = {
  search: "",
  tracks: [],
  type: "all",
  format: "all",
  hasCertificate: null,
  contentLanguage: "all",
};

const TRACK_OPTIONS: { value: TrackName; label: string }[] = [
  { value: "web", label: "Web Dev" },
  { value: "ai_ml", label: "AI/ML" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "mobile", label: "Mobile" },
  { value: "cloud", label: "Cloud/DevOps" },
  { value: "data", label: "Data" },
  { value: "cs_fundamentals", label: "CS Fundamentals" },
  { value: "math", label: "Math" },
];

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useState(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  });
  return debounced;
}

function filterCourses(courses: Course[], filters: Filters): Course[] {
  return courses.filter((course) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        course.title.toLowerCase().includes(q) ||
        course.platform.toLowerCase().includes(q) ||
        (course.instructor?.toLowerCase().includes(q) ?? false) ||
        course.tags.some((t) => t.toLowerCase().includes(q));
      if (!match) return false;
    }
    if (
      filters.tracks.length > 0 &&
      !filters.tracks.some((t) => course.tracks.includes(t))
    )
      return false;
    if (filters.type !== "all" && course.type !== filters.type) return false;
    if (filters.format !== "all" && course.format !== filters.format)
      return false;
    if (
      filters.hasCertificate !== null &&
      course.hasCertificate !== filters.hasCertificate
    )
      return false;
    if (
      filters.contentLanguage !== "all" &&
      course.contentLanguage !== filters.contentLanguage
    )
      return false;
    return true;
  });
}

function FinancialAidModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  const [answers, setAnswers] = useState({
    country: "Egypt",
    income: "",
    why_course: "",
    why_aid: "",
    use: "",
  });
  const [generated, setGenerated] = useState("");
  const { show } = useToast();

  const generate = () => {
    const text = `Financial Aid Application for: ${course.title}

Country: ${answers.country}
Monthly Household Income: ${answers.income}

Why I want to take this course:
${answers.why_course}

Why I cannot afford it:
${answers.why_aid}

How I will use what I learn:
${answers.use}

Note: I am a CS student in Egypt and this course is critical for my career development. Egypt's current economic situation and currency devaluation make international course fees a significant financial burden.`;
    setGenerated(text);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated);
    show(
      "Application text copied! Paste it in Coursera financial aid form",
      "success",
      "📋",
    );
  };

  const platformUrl = course.platform.toLowerCase().includes("coursera")
    ? `https://www.coursera.org/financial-aid`
    : `https://www.edx.org/financial-assistance`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#0A0A0A]">
        <div className="flex items-center justify-between p-5 border-b-2 border-black dark:border-white bg-neo-green">
          <h2 className="font-heading font-black text-xl">
            💸 Financial Aid Helper
          </h2>
          <button onClick={onClose} className="border-2 border-black p-1.5 cursor-pointer">
            <X size={16} />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <p className="font-body text-sm">
            <strong>Course:</strong> {course.title}
          </p>
          <p className="font-body text-xs bg-neo-green/20 border-2 border-neo-green p-3">
            ✅ Egyptian students have very high approval rates. Apply honestly —
            most are approved within 10–15 days.
          </p>

          {!generated ? (
            <>
              {[
                {
                  id: "country",
                  label: "What country are you from?",
                  hint: "Coursera weighs this heavily — Egypt qualifies strongly",
                },
                {
                  id: "income",
                  label: "Monthly household income (approx USD)",
                  hint: "Under $600/month has very high approval rate",
                },
                {
                  id: "why_course",
                  label: "Why do you want to take this course?",
                  hint: "Be specific: career goals, skills, job market",
                  multiline: true,
                },
                {
                  id: "why_aid",
                  label: "Why can't you afford it?",
                  hint: "Mention being a student, EGP devaluation, family situation",
                  multiline: true,
                },
                {
                  id: "use",
                  label: "How will you use what you learn?",
                  hint: "Projects you will build, jobs you are targeting",
                  multiline: true,
                },
              ].map((q) => (
                <div key={q.id}>
                  <label className="font-body font-semibold text-sm block mb-1">
                    {q.label}
                  </label>
                  <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {q.hint}
                  </p>
                  <NeoInput
                    type={q.multiline ? "textarea" : "text"}
                    value={answers[q.id as keyof typeof answers]}
                    onChange={(v) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: v }))
                    }
                    rows={3}
                  />
                </div>
              ))}
              <NeoButton
                onClick={generate}
                accent="#06D6A0"
                className="w-full justify-center"
              >
                Generate Application Text
              </NeoButton>
            </>
          ) : (
            <>
              <textarea
                readOnly
                value={generated}
                rows={10}
                className="w-full border-2 border-black dark:border-white bg-[var(--bg-secondary)] p-3 font-body text-xs"
              />
              <div className="flex gap-3 flex-wrap">
                <NeoButton onClick={copy} variant="primary">
                  Copy Text
                </NeoButton>
                <NeoButton
                  href={platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<ExternalLink size={14} />}
                  iconPosition="right"
                >
                  Open{" "}
                  {course.platform.includes("Coursera") ? "Coursera" : "edX"}{" "}
                  Aid Page
                </NeoButton>
                <button
                  onClick={() => setGenerated("")}
                  className="font-body text-sm underline cursor-pointer"
                >
                  Edit answers
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const { show } = useToast();
  const { copy } = useCopyLink();
  const [showAid, setShowAid] = useState(false);

  const typeColor =
    course.type === "free"
      ? "free"
      : course.type === "paid"
        ? "paid"
        : "arabic";
  const FormatIcon =
    course.format === "youtube"
      ? Youtube
      : course.format === "book"
        ? BookOpen
        : Globe;

  return (
    <>
      <NeoCard
        id={`course-${course.id}`}
        className="flex flex-col p-5"
        accent="#06D6A0"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <NeoBadge
                label={
                  course.type === "audit_free"
                    ? "Audit Free"
                    : course.type.charAt(0).toUpperCase() + course.type.slice(1)
                }
                variant={typeColor as any}
                size="sm"
              />
              <span className="text-gray-400">
                <FormatIcon size={14} />
              </span>
              {course.isFeatured && (
                <NeoBadge
                  label="Featured"
                  customColor={{
                    bg: "#FFE500",
                    border: "#0A0A0A",
                    text: "#0A0A0A",
                  }}
                  size="sm"
                />
              )}
            </div>
            <p className="font-body text-xs text-gray-500 dark:text-gray-400 font-medium">
              {course.platform}
            </p>
          </div>
          <button
            onClick={() => {
              copy(`course-${course.id}`);
              show("Link copied! 🔗", "success");
            }}
            className="flex-shrink-0 p-1.5 border-2 border-black dark:border-white opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
            title="Copy link"
          >
            <Link size={14} />
          </button>
        </div>

        {/* Title & instructor */}
        <h3 className="font-heading font-bold text-base mb-1 line-clamp-2">
          {course.title}
        </h3>
        {course.instructor && (
          <p className="font-body text-sm text-gray-500 dark:text-gray-400 mb-2">
            by {course.instructor}
          </p>
        )}

        <p className="font-body text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-1 mb-3">
          {course.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <NeoBadge
            label={course.level}
            variant={
              course.level === "beginner"
                ? "beginner"
                : course.level === "intermediate"
                  ? "intermediate"
                  : course.level === "advanced"
                    ? "advanced"
                    : "custom"
            }
            customColor={
              course.level === "all"
                ? { bg: "#F0F0F0", border: "#666", text: "#333" }
                : undefined
            }
          />
          {course.tracks.slice(0, 2).map((t) => (
            <NeoBadge
              key={t}
              label={t.replace("_", " ")}
              customColor={{
                bg: "#EFF6FF",
                border: "#2563EB",
                text: "#1E3A8A",
              }}
            />
          ))}
          {course.tracks.length > 2 && (
            <NeoBadge
              label={`+${course.tracks.length - 2}`}
              customColor={{ bg: "#F0F0F0", border: "#999", text: "#555" }}
            />
          )}
        </div>

        {/* Rating & Arabic */}
        <div className="flex items-center gap-3 mb-3">
          <StarRating rating={course.rating} accent="#06D6A0" showNumber />
          {course.durationHours && (
            <span className="font-body text-xs text-gray-400">
              {course.durationHours}h
            </span>
          )}
          {course.hasArabic && <NeoBadge label="🇪🇬 Arabic" variant="arabic" />}
          {course.hasCertificate && (
            <NeoBadge label="Certificate" variant="certificate" />
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-2">
          <NeoButton
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="primary"
            icon={<ExternalLink size={12} />}
            iconPosition="right"
            accent="#06D6A0"
            className="text-black dark:text-white border-neo-green"
          >
            Visit Course
          </NeoButton>
          {course.financialAidAvailable && (
            <NeoButton
              size="sm"
              variant="secondary"
              onClick={() => setShowAid(true)}
            >
              💸 Financial Aid
            </NeoButton>
          )}
        </div>
      </NeoCard>

      {showAid && (
        <FinancialAidModal course={course} onClose={() => setShowAid(false)} />
      )}
    </>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="w-full">
      <p className="font-body text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">
        {label}
      </p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-3 py-2 border-2 border-black dark:border-white font-body font-semibold text-sm transition-all duration-100 shadow-neo dark:shadow-neo-white focus:outline-none focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-none bg-[#FFFFF0] dark:bg-[#141414] text-black dark:text-white cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-black dark:text-white">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [search, setSearch] = useState("");
  const [showRecommend, setShowRecommend] = useState(false);
  const { show } = useToast();
  const courseFaqs = faqs.filter((f) => f.page === "courses");

  // Simple debounce
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const handleSearchChange = (val: string) => {
    setSearch(val);
    clearTimeout((window as any).__searchTimer);
    (window as any).__searchTimer = setTimeout(() => {
      setDebouncedSearch(val);
    }, 300);
  };

  const activeFilters = { ...filters, search: debouncedSearch };
  const filtered = useMemo(
    () => filterCourses(courses, activeFilters),
    [
      activeFilters.search,
      activeFilters.tracks,
      activeFilters.type,
      activeFilters.format,
      activeFilters.hasCertificate,
      activeFilters.contentLanguage,
    ],
  );

  const toggleTrack = (t: TrackName) => {
    setFilters((prev) => ({
      ...prev,
      tracks: prev.tracks.includes(t)
        ? prev.tracks.filter((x) => x !== t)
        : [...prev.tracks, t],
    }));
  };

  const hasActiveFilters =
    filters.tracks.length > 0 ||
    filters.type !== "all" ||
    filters.format !== "all" ||
    filters.hasCertificate !== null ||
    filters.contentLanguage !== "all" ||
    debouncedSearch;

  const totalFree = courses.filter((c) => c.type === "free").length;
  const totalArabic = courses.filter((c) => c.hasArabic).length;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="bg-neo-green border-b-2 border-black overflow-hidden relative">
        <NeoStar
          variant="asterisk"
          className="absolute top-4 right-1/3 w-16 h-16 text-white drop-shadow-[4px_4px_0px_#0A0A0A] rotate-12 animate-bounce-subtle"
        />
        <NeoStar
          variant="sunburst"
          className="absolute bottom-4 right-10 w-20 h-20 text-neo-pink drop-shadow-[4px_4px_0px_#0A0A0A] -rotate-12"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 relative z-10">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-2">
            Free & Paid Courses
          </h1>
          <p className="font-body text-lg">
            200+ curated courses. Rated by real students. Filter to find what
            you need.
          </p>
          <p className="font-body text-sm mt-1 text-black/70 dark:text-white/70">
            {totalFree} free • {courses.length - totalFree} paid/audit •{" "}
            {totalArabic} with Arabic content
          </p>
          <div className="mt-4 w-24 h-1 bg-black" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 space-y-6">
        {/* Search */}
        <NeoInput
          placeholder="Search courses, topics, or platforms..."
          value={search}
          onChange={handleSearchChange}
          icon={<Search size={18} />}
          clearable
          className="text-base py-3"
        />

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <FilterSelect
            label="Track"
            value={filters.tracks.length === 0 ? "all" : filters.tracks[0]}
            onChange={(val) => setFilters((prev) => ({ ...prev, tracks: val === "all" ? [] : [val as TrackName] }))}
            options={[{ value: "all", label: "All Tracks" }, ...TRACK_OPTIONS]}
          />

          <FilterSelect
            label="Type"
            value={filters.type}
            onChange={(val) => setFilters((prev) => ({ ...prev, type: val as any }))}
            options={[
              { value: "all", label: "All Types" },
              { value: "free", label: "Free" },
              { value: "paid", label: "Paid" },
              { value: "audit_free", label: "Audit Free" }
            ]}
          />

          <FilterSelect
            label="Format"
            value={filters.format}
            onChange={(val) => setFilters((prev) => ({ ...prev, format: val as any }))}
            options={[
              { value: "all", label: "All Formats" },
              { value: "youtube", label: "YouTube" },
              { value: "website", label: "Website" },
              { value: "book", label: "Book" }
            ]}
          />

          <FilterSelect
            label="Language"
            value={filters.contentLanguage}
            onChange={(val) => setFilters((prev) => ({ ...prev, contentLanguage: val as any }))}
            options={[
              { value: "all", label: "All Languages" },
              { value: "english", label: "English" },
              { value: "arabic", label: "Arabic" },
              { value: "bilingual", label: "Bilingual" }
            ]}
          />

          <FilterSelect
            label="Certificate"
            value={filters.hasCertificate === null ? "all" : filters.hasCertificate.toString()}
            onChange={(val) => setFilters((prev) => ({ ...prev, hasCertificate: val === "all" ? null : val === "true" }))}
            options={[
              { value: "all", label: "Any" },
              { value: "true", label: "With Cert" },
              { value: "false", label: "No Cert" }
            ]}
          />
        </div>

        {/* Results bar */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="font-body text-sm text-gray-600 dark:text-gray-400">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{courses.length}</strong> courses
          </p>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setFilters(defaultFilters);
                setSearch("");
                setDebouncedSearch("");
              }}
              className="font-body text-sm underline underline-offset-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <X size={14} /> Clear all filters
            </button>
          )}
        </div>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 group">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <NeoCard className="p-10 text-center">
            <p className="font-heading font-bold text-xl mb-2">
              No courses match your filters
            </p>
            <p className="font-body text-gray-500 dark:text-gray-400">
              Try removing some filters or searching for something else.
            </p>
            <NeoButton
              onClick={() => {
                setFilters(defaultFilters);
                setSearch("");
                setDebouncedSearch("");
              }}
              variant="secondary"
              className="mt-4"
            >
              Clear filters
            </NeoButton>
          </NeoCard>
        )}

        {/* Recommend a Resource */}
        <NeoCard className="p-6 border-dashed" accent="#06D6A0">
          <h3 className="font-heading font-bold text-xl mb-2">
            Know a great resource we&apos;re missing?
          </h3>
          <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4">
            Help other Egyptian students by recommending a course, YouTube
            channel, or learning resource.
          </p>
          <NeoButton
            href="https://github.com/u-wz/helm/issues/new?title=Resource+Recommendation&body=**Resource+Name:**%0A**URL:**%0A**Why+it's+great:**"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<ExternalLink size={14} />}
            iconPosition="right"
          >
            Suggest on GitHub
          </NeoButton>
        </NeoCard>

        {/* FAQ */}
        <div>
          <h2 className="font-heading font-black text-2xl mb-4">FAQ</h2>
          <NeoAccordion
            exclusive
            accent="#06D6A0"
            items={courseFaqs.map((faq) => ({
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
        </div>
      </div>
    </div>
  );
}
