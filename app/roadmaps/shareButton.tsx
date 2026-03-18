"use client";
import { useToast } from "@/components/ui/NeoToast";
import { Share2 } from "lucide-react";
import { Track } from "@/data/roadmaps";
import { useProgress } from "@/hooks/useProgress";

export default function ShareButton({ track, allStepIds }: { track: Track; allStepIds: string[] }) {
  const { show } = useToast();
  const { percentage } = useProgress(track.id);

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
    <button
      onClick={handleShare}
      className="p-1.5 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
      title="Share progress"
    >
      <Share2 size={14} />
    </button>
  );
}
