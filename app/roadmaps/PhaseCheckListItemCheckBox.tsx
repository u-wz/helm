"use client";
import { CheckSquare, Square } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

export default function PhaseCheckListItemCheckBox({
  trackKey, accent, stepId
} : { trackKey: string; accent: string; stepId: string }) {

  let { isCompleted, toggle } = useProgress(trackKey);
  let done = isCompleted(stepId)

  return (
    <span
      className="mt-0.5 shrink-0 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      style={{ color: done ? accent : undefined }}
      onClick={() => toggle(stepId)}
    >
      {done ? <CheckSquare size={20} /> : <Square size={20} />}
    </span>
  )
}
