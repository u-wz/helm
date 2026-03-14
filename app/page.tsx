"use client";
import { useState, useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { QuickStats } from "@/components/home/QuickStats";
import { YearFilter } from "@/components/home/YearFilter";
import { SiteOverview } from "@/components/home/SiteOverview";
import { FeelingLostModal } from "@/components/home/FeelingLostModal";
import { NeoAccordion } from "@/components/ui/NeoAccordion";
import { faqs } from "@/data/faqs";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReviewsSection } from "@/components/home/Reviewssection";

export default function Home() {
  const [showLostModal, setShowLostModal] = useState(false);
  const homeFaqs = faqs.filter((f) => f.page === "home");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero onFeelingLost={() => setShowLostModal(true)} />

      <div className="reveal">
        <QuickStats />
      </div>

      <div className="reveal">
        <YearFilter />
      </div>

      <div className="reveal">
        <SiteOverview />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-[var(--bg-primary)] reveal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-heading font-black text-3xl md:text-4xl mb-2">
            FAQ
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 mb-6">
            Common questions about this guide.
          </p>
          <NeoAccordion
            exclusive
            accent="#FFE500"
            items={homeFaqs.map((faq) => ({
              id: faq.id,
              trigger: (
                <span className="font-heading font-bold text-sm">
                  {faq.question}
                </span>
              ),
              content: (
                <p className="font-body text-sm leading-relaxed">
                  {faq.answer}
                </p>
              ),
            }))}
          />
        </div>
      </section>
      <ReviewsSection />

      {showLostModal && (
        <FeelingLostModal onClose={() => setShowLostModal(false)} />
      )}
    </div>
  );
}
