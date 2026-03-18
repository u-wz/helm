import { tracks, TrackId } from "@/data/roadmaps";
import { NeoCard } from "@/components/ui/NeoCard";
import { NeoStar } from "@/components/ui/NeoStar";
import Tracks from "../tracks";
import { notFound } from "next/navigation";
import TrackContent from "../TrackContent";

export default async function RoadmapsPage({ params }: { params: Promise<{ roadmap: TrackId }> } ) {
  const { roadmap } = await params;
  const currentTrack = tracks.find((t) => t.id === roadmap);

  if (!currentTrack) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] ">
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
         {/*Track Selector */}
        <Tracks activeTrack={currentTrack.id} />

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
