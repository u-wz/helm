"use client";
import { useProgress } from "@/hooks/useProgress";
import { RotateCcw } from "lucide-react";

export default function ResetButton({ trackId }: { trackId: string }) {
  const { reset } = useProgress(trackId);

  return (
    <button
      onClick={reset}
      className="p-1.5 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
      title="Reset progress"
    >
      <RotateCcw size={14} />
    </button>
  );
}
