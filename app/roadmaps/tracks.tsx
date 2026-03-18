import { TrackId, tracks } from "@/data/roadmaps"
import { cn } from "@/lib/utils"
import Link from "next/link"
export default function Tracks({ activeTrack } : { activeTrack: TrackId | null }) {
  return (
  <div>
    <h2 className="font-heading font-bold text-xl mb-4">
      Choose Your Track
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {tracks.map((track) => (
        <Link
          href={`/roadmaps/${track.id}`}
          key={track.id}
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
        </Link>
      ))}
    </div>
  </div>
  )
}
