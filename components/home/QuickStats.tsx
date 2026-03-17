"use client";
import { NeoCard } from "@/components/ui/NeoCard";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 70, suffix: "+", label: "Free Courses", accent: "#FFB300" },
  { number: 6, suffix: "", label: "Learning Tracks", accent: "#4361EE" },
  { number: 30, suffix: "+", label: "Companies", accent: "#FF6B35" },
  { number: 100, suffix: "%", label: "Free to Use", accent: "#06D6A0" },
];

function AnimatedCounter({
  target,
  suffix,
  accent,
}: {
  target: number;
  suffix: string;
  accent: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div
      ref={ref}
      className="font-heading font-black text-4xl md:text-5xl mb-1"
      style={{ color: accent }}
    >
      {count}
      {suffix}
    </div>
  );
}

export function QuickStats() {
  return (
    <section className="py-12 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <NeoCard
              key={stat.label}
              className={`p-6 text-center reveal-scale stagger-${i + 1}`}
              accent={stat.accent}
            >
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                accent={stat.accent}
              />
              <div className="font-body text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
