'use client';
import { ProgressBar } from "@/components/ui/ProgressBar";
import { RoadmapPhase, RoadmapStep } from "@/data/roadmaps";
import { useProgress } from "@/hooks/useProgress";

export default function InteractiveProgressBar({ trackId, phase, accent }: { trackId: string; phase: RoadmapPhase; accent: string }) {

  const { completed } = useProgress(trackId);
  const phaseStepIds = phase.steps.map((s: RoadmapStep) => s.id);
  const phaseCompleted = phaseStepIds.filter((id: string) =>
    completed.includes(id),
  ).length;
  const phasePercent = Math.round((phaseCompleted / phase.steps.length) * 100);

  return (
    <ProgressBar
      value={phasePercent}
      accent={accent}
      label={`${phaseCompleted}/${phase.steps.length} steps completed`}
      className="mb-4"
    />
  )
}
