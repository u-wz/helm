"use client";
import { useState } from "react";
import Image from "next/image";
import { reviews, Review, ReviewerRole } from "@/data/reviews";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────
// Constants
// ─────────────────────────────────────────

const ACCENT = "#FFE500";

const ROLE_STYLES: Record<
  ReviewerRole,
  { bg: string; border: string; text: string }
> = {
  student: { bg: "#EFF6FF", border: "#2563EB", text: "#1E3A8A" },
  developer: { bg: "#F0FDF4", border: "#16A34A", text: "#14532D" },
  freelancer: { bg: "#FFF7ED", border: "#EA580C", text: "#7C2D12" },
  graduate: { bg: "#FAF5FF", border: "#9333EA", text: "#581C87" },
};

// ─────────────────────────────────────────
// Stars
// ─────────────────────────────────────────

function Stars({ rating }: { rating: 5 | 4 }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24">
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill={i < rating ? ACCENT : "transparent"}
            stroke={i < rating ? "#0A0A0A" : "#9CA3AF"}
            strokeWidth="1.5"
          />
        </svg>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// Avatar with initials fallback
// ─────────────────────────────────────────

function Avatar({
  src,
  fallback,
  name,
}: {
  src: string;
  fallback: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-14 h-14 flex-shrink-0 flex items-center justify-center border-2 border-black dark:border-white font-heading font-black text-sm select-none"
        style={{ backgroundColor: ACCENT, color: "#0A0A0A" }}
        aria-label={name}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div className="w-14 h-14 flex-shrink-0 relative border-2 border-black dark:border-white overflow-hidden">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover object-top"
        onError={() => setFailed(true)}
        sizes="56px"
      />
    </div>
  );
}

// ─────────────────────────────────────────
// Single big review card
// ─────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  const [imgFailed, setImgFailed] = useState(false);
  const role = ROLE_STYLES[review.role];

  return (
    <article
      className={cn(
        // fixed width — big card
        "w-[340px] sm:w-[380px] flex-shrink-0",
        // neobrutalism
        "border-2 border-black dark:border-white",
        "shadow-[5px_5px_0px_0px_#0A0A0A] dark:shadow-[5px_5px_0px_0px_rgba(245,245,240,0.7)]",
        "bg-[var(--bg-primary)]",
        // no radius — ever
        "flex flex-col",
      )}
    >
      {/* Photo — tall, covers top third of card */}
      <div className="relative h-52 w-full overflow-hidden border-b-2 border-black dark:border-white flex-shrink-0">
        {!imgFailed ? (
          <Image
            src={review.imageSrc}
            alt={review.name}
            fill
            className="object-cover object-top"
            onError={() => setImgFailed(true)}
            sizes="380px"
          />
        ) : (
          // Fallback: big initials on yellow bg
          <div
            className="w-full h-full flex items-center justify-center font-heading font-black text-5xl select-none"
            style={{ backgroundColor: ACCENT, color: "#0A0A0A" }}
          >
            {review.avatarFallback}
          </div>
        )}

        {/* Gradient so text always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Highlight tag — bottom left of photo */}
        <span
          className="absolute bottom-3 left-3 font-body font-bold text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-black"
          style={{ backgroundColor: ACCENT, color: "#0A0A0A" }}
        >
          {review.highlight}
        </span>

        {/* Role badge — top right */}
        <span
          className="absolute top-3 right-3 font-body font-semibold text-[10px] uppercase tracking-wide px-2 py-1"
          style={{
            backgroundColor: role.bg + "f0",
            border: `1px solid ${role.border}`,
            color: role.text,
          }}
        >
          {review.roleLabel}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Quote */}
        <div className="flex-1">
          <div
            className="font-heading font-black text-5xl leading-none mb-1 select-none -ml-0.5"
            style={{ color: ACCENT }}
            aria-hidden
          >
            "
          </div>
          <p className="font-body text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {review.quote}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-gray-200 dark:border-gray-700" />

        {/* Footer: avatar + info + stars */}
        <div className="flex items-center gap-3">
          <Avatar
            src={review.imageSrc}
            fallback={review.avatarFallback}
            name={review.name}
          />
          <div className="flex-1 min-w-0">
            <p className="font-heading font-bold text-sm leading-tight truncate">
              {review.name}
            </p>
            {(review.university || review.yearLabel) && (
              <p className="font-body text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5">
                {[review.university, review.yearLabel]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            <div className="mt-1.5">
              <Stars rating={review.rating} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────
// Infinite slider
// ─────────────────────────────────────────

// Duplicate the array — the track is 200% wide, we translate -50% to loop
const TRACK = [...reviews, ...reviews];

export function ReviewsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-16 overflow-hidden bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-8 bg-black dark:bg-white" aria-hidden />
              <span className="font-body text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400">
                From the community
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl md:text-5xl leading-none">
              What students{" "}
              <span className="relative inline-block">
                <span
                  className="absolute bottom-0 left-0 right-0 h-3 -z-0"
                  style={{ backgroundColor: ACCENT }}
                  aria-hidden
                />
                <span className="relative z-10">&amp; devs</span>
              </span>{" "}
              say
            </h2>
          </div>

          {/* Average rating pill */}
          <div
            className="self-start sm:self-auto inline-flex items-center gap-2.5 px-4 py-2.5 border-2 border-black dark:border-white shadow-neo dark:shadow-neo-white flex-shrink-0"
            style={{ backgroundColor: ACCENT }}
          >
            <Stars rating={5} />
            <span className="font-heading font-black text-sm text-black">
              5.0 / 5
            </span>
            <span className="font-body text-xs font-semibold text-black/60">
              ({reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* ── Slider track ── full bleed, no max-width */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        /* Mobile: pause on touch-hold */
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Left fade mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--bg-primary), transparent)",
          }}
          aria-hidden
        />
        {/* Right fade mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--bg-primary), transparent)",
          }}
          aria-hidden
        />

        {/* Moving track */}
        <div
          className={cn(
            "flex gap-5 w-max px-5",
            // use the existing `animate-marquee` from tailwind.config.ts
            // (translateX 0 → -50%, 30s linear infinite)
            "animate-marquee",
            paused && "[animation-play-state:paused]",
          )}
        >
          {TRACK.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
