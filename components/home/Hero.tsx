import { DialogContent, DialogTrigger } from "@/components/ui/NeoDialog";
import { NeoButton } from "@/components/ui/NeoButton";
import { SplitText } from "@/components/ui/SplitText";
import { NeoStar } from "@/components/ui/NeoStar";
import { ArrowRight, Map, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog } from "../ui/NeoDialog";
import { FeelingLostModal } from "./FeelingLostModal";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToYearFilter = () => {
    document
      .getElementById("year-filter")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] md:min-h-screen bg-neo-bg dark:bg-neo-dark bg-grid flex flex-col justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <NeoStar
          variant="sparkle"
          className="absolute top-10 -right-4 md:right-20 w-16 h-16 md:w-24 md:h-24 animate-bounce-subtle text-neo-blue drop-shadow-[4px_4px_0px_#0A0A0A] dark:drop-shadow-[4px_4px_0px_#FFF] opacity-40 md:opacity-100"
        />
        <NeoStar
          variant="fat-star"
          className="absolute bottom-40 right-1/4 w-12 h-12 md:w-20 md:h-20 -rotate-12 text-neo-pink drop-shadow-[4px_4px_0px_#0A0A0A] dark:drop-shadow-[4px_4px_0px_#FFF]"
          style={{
            animationDelay: "500ms",
            animation: "bounce-subtle 3s ease-in-out infinite",
          }}
        />
        <NeoStar
          variant="sunburst"
          className="absolute top-1/3 left-5 md:left-20 w-12 h-12 md:w-16 md:h-16 rotate-45 text-neo-purple drop-shadow-[4px_4px_0px_#0A0A0A] dark:drop-shadow-[4px_4px_0px_#FFF]"
        />
        <NeoStar
          variant="asterisk"
          className="absolute bottom-32 left-1/4 w-10 h-10 md:w-14 md:h-14 text-neo-green rotate-12 drop-shadow-[4px_4px_0px_#0A0A0A] dark:drop-shadow-[4px_4px_0px_#FFF]"
          style={{
            animationDelay: "700ms",
            animation: "bounce-subtle 4s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 w-full relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="max-w-4xl flex flex-col items-center md:items-start">
          <p
            className={`font-body font-semibold text-[10px] md:text-base uppercase tracking-widest text-black/70 dark:text-white/70 mb-6 border-2 border-black dark:border-white inline-block px-3 py-1 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Free. Open Source. Community Driven
          </p>

          <h1
            className={`font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black dark:text-white leading-[1.1] md:leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="block md:inline">
              <SplitText
                text="Everything you need to "
                delay={30}
                className="md:mr-3"
              />
            </span>
            <span className="relative inline-block mt-1 md:mt-0">
              <span className="relative z-10">
                <SplitText text="survive & thrive" delay={50} />
              </span>
              <span
                className={`absolute bottom-1 left-0 h-2 md:h-3 bg-neo-yellow dark:bg-neo-yellow/30 -z-0 transition-all duration-700 delay-500 ${
                  mounted ? "w-full" : "w-0"
                }`}
              />
            </span>{" "}
            <SplitText text="in computer science" delay={70} className="mt-2" />
          </h1>

          <p
            className={`font-body text-base md:text-lg text-black/70 dark:text-white/70 mb-8 max-w-2xl transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Roadmaps, Courses, Companies, Tools, CV tips, Project ideas — all
            curated for students.
          </p>

          <div
            className={`flex flex-wrap justify-center md:justify-start gap-3 transition-all duration-700 delay-[400ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <NeoButton
              size="lg"
              variant="primary"
              onClick={scrollToYearFilter}
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="text-base"
            >
              Start Here
            </NeoButton>

            <Dialog>
              <DialogTrigger asChild>
                <NeoButton
                  size="lg"
                  variant="secondary"
                  icon={<HelpCircle size={20} />}
                  iconPosition="right"
                  className="text-base"
                >
                  I&apos;m feeling lost
                </NeoButton>
              </DialogTrigger>
              <DialogContent>
                <FeelingLostModal />

              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-black dark:border-white bg-black dark:bg-white overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-white dark:text-black font-heading font-black text-xl flex-shrink-0 tracking-widest uppercase px-6"
            >
              Built for Students &nbsp;•&nbsp; Community Driven &nbsp;•&nbsp;
              Open Source &nbsp;•&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
