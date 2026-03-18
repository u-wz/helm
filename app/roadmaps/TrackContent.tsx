import { NeoCard } from "@/components/ui/NeoCard";
import { Track } from "@/data/roadmaps";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { RoadmapPhase } from "@/data/roadmaps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import PhaseCheckListItemCheckBox from "./PhaseCheckListItemCheckBox";
import InteractiveProgressBar from "./ProgressBar";
import ShareButton from "./shareButton";
import InnerProgressBar from "./InnerProgressBar";
import ResetButton from "./ResetButton";

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
  const { isCompleted } = useProgress(trackKey);
  const done = isCompleted(stepId);

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 border-2 border-black dark:border-white",
        done && "opacity-70",
      )}
    >
      <PhaseCheckListItemCheckBox trackKey={trackKey} accent={accent} stepId={stepId} />
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
  return (
    <div id={phase.id}>
      <InteractiveProgressBar
        trackId={trackId}
        phase={phase}
        accent={accent}
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

export default function TrackContent({ track }: { track: Track }) {
  const allStepIds = track.phases.flatMap((p) => p.steps.map((s) => s.id));


  return (
    <div className="space-y-8">
      {/* Overall progress sidebar card */}
      <NeoCard className="p-5" accent={track.accentColor}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading font-bold text-base">
            {track.name} Progress
          </h3>
          <div className="flex gap-2">
            <ShareButton track={track} allStepIds={allStepIds} />
            <ResetButton trackId={track.id} />
          </div>
        </div>
        <InnerProgressBar track={track} />
      </NeoCard>

      {/* Visual Flowchart */}
      {/*<div className="flex flex-col items-center gap-3">
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
      </div>*/}

      {/* Phase Accordions */}
      <div className="space-y-4">
        <Accordion type="multiple" >
          {track.phases.map((phase) => (
            <AccordionItem value={phase.id}>
              <AccordionTrigger>
                <div>
                  <p className="text-xs font-body uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Phase {phase.number}
                  </p>
                  <p className="font-heading font-bold text-lg">{phase.name}</p>
                  <p className="font-body text-sm font-normal text-gray-600 dark:text-gray-400">
                    {phase.durationEstimate}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <PhaseSection
                  phase={phase}
                  trackId={track.id}
                  accent={track.accentColor}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Track FAQs */}
      <div>
        <h3 className="font-heading font-bold text-xl mb-4">Track FAQs</h3>
        <Accordion type="multiple">
          {track.faqs.map((faq, i) => (
            <AccordionItem value={`${track.id}-faq-${i}`} key={`${track.id}-faq-${i}`}>
              <AccordionTrigger>
                <span className="font-heading font-bold text-sm">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
