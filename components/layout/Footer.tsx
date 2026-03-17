"use client";
import Link from "next/link";
import Image from "next/image";
import {
  NAV_LINKS,
  SITE_NAME,
  AUTHOR_NAME,
  AUTHOR_GITHUB,
  GITHUB_REPO,
} from "@/lib/constants";
import {
  Star,
  Share2,
  Heart,
  ArrowUpRight,
  MessageSquareCode,
} from "lucide-react";
import { useToast } from "@/components/ui/NeoToast";
import { NeoStar } from "@/components/ui/NeoStar";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { useState } from "react";

export function Footer() {
  const { show } = useToast();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin);
    show("Site link copied! Share with friends 🔗");
  };

  return (
    <footer className="border-t-4 border-black dark:border-white bg-neo-purple dark:bg-black relative overflow-hidden mt-16">
      <NeoStar
        variant="asterisk"
        className="absolute top-5 right-10 w-16 h-16 text-neo-yellow opacity-50 drop-shadow-none rotate-12"
      />
      <NeoStar
        variant="flower"
        className="absolute bottom-5 left-10 w-20 h-20 text-neo-pink opacity-50 drop-shadow-none -rotate-12"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="mb-2">
              <Image
                src="/Helm.svg"
                alt="Helm Logo"
                width={114}
                height={48}
                className="h-12 w-auto drop-shadow-[4px_4px_0px_#0A0A0A] dark:drop-shadow-[4px_4px_0px_#FF0F80]"
              />
            </div>
            <p className="font-body text-base md:text-lg text-white dark:text-gray-300 font-bold max-w-md border-l-4 border-neo-yellow pl-4">
              Everything you need to survive and thrive in Computer Science.
              Free and Open Source.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neo-yellow text-black border-2 border-black dark:border-white px-4 py-2 font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
              >
                <Star size={18} /> Star on GitHub
              </a>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white text-black border-2 border-black dark:border-white px-4 py-2 font-heading font-bold shadow-[4px_4px_0px_0px_#0A0A0A] dark:shadow-[4px_4px_0px_0px_#F5F5F0] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
              >
                <Share2 size={18} /> Share Site
              </button>
              <button
                onClick={() => setShowFeedbackModal(true)}
                className="flex items-center gap-2 bg-neo-pink text-white border-2 border-black dark:border-white px-4 py-2 font-heading font-bold shadow-[4px_4px_0px_0px_#0A0A0A] dark:shadow-[4px_4px_0px_0px_#F5F5F0] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
              >
                <MessageSquareCode size={18} /> Feedback
              </button>
            </div>
          </div>

          {/* Links Col */}
          <div className="grid grid-cols-2 gap-8 lg:justify-items-end pt-2">
            <div className="space-y-4">
              <h4 className="font-heading font-black text-xl text-neo-yellow dark:text-neo-green drop-shadow-[2px_2px_0px_#0A0A0A] dark:drop-shadow-none uppercase">
                Navigation
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body font-bold text-base text-white dark:text-white hover:text-neo-yellow dark:hover:text-neo-green transition-colors flex items-center gap-2 group cursor-pointer relative"
                    >
                      <ArrowUpRight
                        size={16}
                        className="absolute -left-5 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300"
                      />
                      <span className="group-hover:translate-x-5 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-black text-xl text-neo-yellow dark:text-neo-green drop-shadow-[2px_2px_0px_#0A0A0A] dark:drop-shadow-none uppercase">
                Community
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`${GITHUB_REPO}/issues/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-base text-white dark:text-white hover:text-neo-yellow dark:hover:text-neo-green transition-colors flex items-center gap-2 group cursor-pointer relative"
                  >
                    <ArrowUpRight
                      size={16}
                      className="absolute -left-5 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-5 transition-transform duration-300">
                      Report an Issue
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`${GITHUB_REPO}/pulls`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-base text-white dark:text-white hover:text-neo-yellow dark:hover:text-neo-green transition-colors flex items-center gap-2 group cursor-pointer relative"
                  >
                    <ArrowUpRight
                      size={16}
                      className="absolute -left-5 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-5 transition-transform duration-300">
                      Contribute
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={AUTHOR_GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-base text-white dark:text-white hover:text-neo-yellow dark:hover:text-neo-green transition-colors flex items-center gap-2 group cursor-pointer relative"
                  >
                    <ArrowUpRight
                      size={16}
                      className="absolute -left-5 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-5 transition-transform duration-300">
                      Creator
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-black dark:border-white bg-neo-green dark:bg-white py-4 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading font-black text-black flex items-center gap-2 text-base md:text-lg">
            Made with <Heart size={18} className="fill-neo-pink text-black" />{" "}
            by{" "}
            <a
              href={AUTHOR_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline underline-offset-4 cursor-pointer"
            >
              {AUTHOR_NAME}
            </a>
          </p>
          <div className="flex gap-4 font-heading font-bold text-black text-xs md:text-sm">
            <span>© 2026 Helm</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
      {showFeedbackModal && (
        <FeedbackModal onClose={() => setShowFeedbackModal(false)} />
      )}
    </footer>
  );
}
