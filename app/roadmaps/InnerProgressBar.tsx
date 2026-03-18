'use client';
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Track } from "@/data/roadmaps";
import { useProgress } from "@/hooks/useProgress";

export default function InnerProgressBar({ track }: { track: Track }) {

  const allStepIds = track.phases.flatMap((p) => p.steps.map((s) => s.id));
  const { percentage, completed } = useProgress(track.id);


  return (
    <ProgressBar
      value={percentage(allStepIds.length)}
      accent={track.accentColor}
      label={`${completed.length} of ${allStepIds.length} steps completed`}
      size="md"
    />
  )
}
