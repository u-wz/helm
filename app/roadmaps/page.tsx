"use client";
import { useState } from "react";
import { tracks, Track, RoadmapPhase } from "@/data/roadmaps";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoAccordion } from "@/components/ui/NeoAccordion";
import { NeoStar } from "@/components/ui/NeoStar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useProgress } from "@/hooks/useProgress";
import { useCopyLink } from "@/hooks/useCopyLink";
import { useToast } from "@/components/ui/NeoToast";
import {
  ArrowDown,
  RotateCcw,
  Share2,
  Link,
  CheckSquare,
  Square,
} from "lucide-react";
import { cn } from "@/lib/utils";

function PhaseChecklistItem({
  stepId,
  title,
  description,
  resourceName,
  resourceUrl,
  trackKey,
  accent,
}: {
  stepId: string;
  title: string;
  description?: string;
  resourceName?: string;
  resourceUrl?: string;
  trackKey: string;
  accent: string;
}) {
  const { isCompleted, toggle } = useProgress(trackKey);
  const done = isCompleted(stepId);

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 border-2 border-black dark:border-white",
        "hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors",
        done && "opacity-70",
      )}
      onClick={() => toggle(stepId)}
    >
      <span
        className="mt-0.5 flex-shrink-0"
        style={{ color: done ? accent : undefined }}
      >
        {done ? <CheckSquare size={20} /> : <Square size={20} />}
      </span>
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "font-body font-semibold text-sm",
            done && "line-through text-gray-400",
          )}
        >
          {title}
        </p>
        {description && (
          <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {description}
          </p>
        )}
        {resourceName && resourceUrl && (
          <a
            href={resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-body text-xs underline underline-offset-2 mt-1 inline-block"
            style={{ color: accent }}
          >
            Best resource: {resourceName} →
          </a>
        )}
      </div>
    </div>
  );
}

function PhaseSection({
  phase,
  trackId,
  accent,
}: {
  phase: RoadmapPhase;
  trackId: string;
  accent: string;
}) {
  const { completed, percentage } = useProgress(trackId);
  const phaseStepIds = phase.steps.map((s) => s.id);
  const phaseCompleted = phaseStepIds.filter((id) =>
    completed.includes(id),
  ).length;
  const phasePercent = Math.round((phaseCompleted / phase.steps.length) * 100);

  return (
    <div id={phase.id}>
      <ProgressBar
        value={phasePercent}
        accent={accent}
        label={`${phaseCompleted}/${phase.steps.length} steps completed`}
        className="mb-4"
      />
      <div className="space-y-2 mb-4">
        {phase.steps.map((step) => (
          <PhaseChecklistItem
            key={step.id}
            stepId={step.id}
            title={step.title}
            description={step.description}
            resourceName={step.resourceName}
            resourceUrl={step.resourceUrl}
            trackKey={trackId}
            accent={accent}
          />
        ))}
      </div>
      <div
        className="border-2 border-black dark:border-white p-4 mt-4"
        style={{ borderLeftColor: accent, borderLeftWidth: "4px" }}
      >
        <p className="font-body font-semibold text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
          Build at end of this phase:
        </p>
        <p className="font-heading font-bold text-base">{phase.buildProject}</p>
        <p className="font-body text-sm text-gray-600 dark:text-gray-400 mt-1">
          {phase.buildProjectDescription}
        </p>
      </div>
    </div>
  );
}

function TrackContent({ track }: { track: Track }) {
  const allStepIds = track.phases.flatMap((p) => p.steps.map((s) => s.id));
  const { completed, reset, percentage } = useProgress(track.id);
  const { show } = useToast();
  const { copy } = useCopyLink();

  const handleShare = () => {
    const pct = percentage(allStepIds.length);
    navigator.clipboard.writeText(
      `I'm ${pct}% through the ${track.name} roadmap on EG CS Guide! 🚀 https://hellm.vercel.app/roadmaps`,
    );
    show(
      `Progress shared! You're ${pct}% through ${track.name}!`,
      "success",
      "🎉",
    );
  };

  return (
    <div className="space-y-8">
      {/* Overall progress sidebar card */}
      <NeoCard className="p-5" accent={track.accentColor}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading font-bold text-base">
            {track.name} Progress
          </h3>
          <div className="flex gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
              title="Share progress"
            >
              <Share2 size={14} />
            </button>
            <button
              onClick={reset}
              className="p-1.5 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
              title="Reset progress"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
        <ProgressBar
          value={percentage(allStepIds.length)}
          accent={track.accentColor}
          label={`${completed.length} of ${allStepIds.length} steps completed`}
          size="md"
        />
      </NeoCard>

      {/* Visual Flowchart */}
      <div className="flex flex-col items-center gap-3">
        {track.phases.map((phase, index) => (
          <div key={phase.id} className="w-full flex flex-col items-center">
            <button
              onClick={() =>
                document
                  .getElementById(`accordion-${phase.id}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={cn(
                "w-full max-w-lg border-2 border-black dark:border-white p-4 font-heading font-bold text-left",
                "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo dark:hover:shadow-neo-white",
                "transition-all duration-150 shadow-neo dark:shadow-neo-white cursor-pointer",
              )}
              style={{
                backgroundColor: track.accentColor + "20",
                borderLeftColor: track.accentColor,
                borderLeftWidth: "4px",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-0.5">
                    Phase {phase.number}
                  </p>
                  <p className="text-lg">{phase.name}</p>
                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    {phase.durationEstimate} • {phase.steps.length} steps
                  </p>
                </div>
                <ArrowDown size={18} />
              </div>
            </button>
            {index < track.phases.length - 1 && (
              <div className="flex flex-col items-center my-1">
                <div className="w-0.5 h-6 bg-black dark:bg-white" />
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black dark:border-t-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Phase Accordions */}
      <div className="space-y-4">
        {track.phases.map((phase) => (
          <div key={phase.id} id={`accordion-${phase.id}`}>
            <NeoAccordion
              accent={track.accentColor}
              items={[
                {
                  id: phase.id,
                  trigger: (
                    <div>
                      <p className="text-xs font-body uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Phase {phase.number}
                      </p>
                      <p className="font-heading font-bold text-lg">
                        {phase.name}
                      </p>
                      <p className="font-body text-sm font-normal text-gray-600 dark:text-gray-400">
                        {phase.durationEstimate}
                      </p>
                    </div>
                  ),
                  content: (
                    <PhaseSection
                      phase={phase}
                      trackId={track.id}
                      accent={track.accentColor}
                    />
                  ),
                },
              ]}
            />
          </div>
        ))}
      </div>

      {/* Track FAQs */}
      <div>
        <h3 className="font-heading font-bold text-xl mb-4">Track FAQs</h3>
        <NeoAccordion
          exclusive
          accent={track.accentColor}
          items={track.faqs.map((faq, i) => ({
            id: `${track.id}-faq-${i}`,
            trigger: (
              <span className="font-heading font-bold text-sm">
                {faq.question}
              </span>
            ),
            content: (
              <p className="font-body text-sm leading-relaxed">{faq.answer}</p>
            ),
          }))}
        />
      </div>
    </div>
  );
}

export default function RoadmapsPage() {
  const [activeTrack, setActiveTrack] = useState<string>("webdev");
  const currentTrack = tracks.find((t) => t.id === activeTrack)!;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="bg-neo-blue text-white border-b-2 border-black overflow-hidden relative">
        <NeoStar
          variant="sunburst"
          className="absolute top-2 right-20 w-16 h-16 text-neo-pink drop-shadow-[4px_4px_0px_#0A0A0A] animate-bounce-subtle"
        />
        <NeoStar
          variant="asterisk"
          className="absolute bottom-2 right-1/4 w-12 h-12 text-neo-yellow drop-shadow-[4px_4px_0px_#0A0A0A] rotate-45"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 relative z-10">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-2">
            Learning Roadmaps
          </h1>
          <p className="font-body text-lg text-white">
            Pick your track. Follow the phases. Build real things.
          </p>
          <div className="mt-4 w-24 h-1 bg-neo-yellow" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 space-y-10">
        {/* Track Selector */}
        <div>
          <h2 className="font-heading font-bold text-xl mb-4">
            Choose Your Track
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={cn(
                  "border-2 border-black dark:border-white p-3 font-heading font-bold text-sm",
                  "transition-all duration-150 flex flex-col items-center gap-1 cursor-pointer",
                  activeTrack === track.id
                    ? "translate-x-0.5 translate-y-0.5 shadow-none"
                    : "shadow-neo dark:shadow-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5",
                )}
                style={
                  activeTrack === track.id
                    ? {
                        backgroundColor: track.accentColor,
                        color: ["webdev", "security", "cloud", "data"].includes(
                          track.id,
                        )
                          ? "white"
                          : "#0A0A0A",
                        borderColor: track.accentColor,
                      }
                    : {}
                }
              >
                <span className="text-xl">{track.icon}</span>
                <span className="text-xs text-center leading-tight">
                  {track.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Track description */}
        <NeoCard className="p-5" accent={currentTrack.accentColor}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{currentTrack.icon}</span>
            <div>
              <h2 className="font-heading font-black text-2xl">
                {currentTrack.name}
              </h2>
            </div>
          </div>
          <p className="font-body text-base">{currentTrack.description}</p>
        </NeoCard>

        <TrackContent track={currentTrack} />
      </div>
    </div>
  );
}
