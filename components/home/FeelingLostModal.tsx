'use client'
import { useState } from 'react'
import { X, ArrowRight, ExternalLink } from 'lucide-react'
import { NeoButton } from '@/components/ui/NeoButton'
import { NeoCard } from '@/components/ui/NeoCard'
import { cn } from '@/lib/utils'
import { DialogClose, DialogHeader, DialogTitle } from '../ui/NeoDialog'

type Step = 'question' | 'brand-new' | 'know-basics' | 'cant-find-job' | 'scared'

const options = [
  { id: 'brand-new', label: "I'm brand new to programming", emoji: '👶' },
  { id: 'know-basics', label: "I know some basics but don't know what to do next", emoji: '🤔' },
  { id: 'cant-find-job', label: "I know what to learn but can't find a job", emoji: '😤' },
  { id: 'scared', label: "I'm about to graduate and I'm scared", emoji: '😰' },
]

export function FeelingLostModal() {
  const [step, setStep] = useState<Step>('question')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#0A0A0A] dark:shadow-[8px_8px_0px_0px_#F5F5F0]">
        <DialogHeader className="flex flex-row items-center justify-between p-6 border-b-2 border-black dark:border-white bg-neo-yellow dark:bg-neo-dark">
          <DialogTitle className="font-heading font-black text-2xl">Let&apos;s figure this out 🧭</DialogTitle>
          <DialogClose className="border-2 border-black dark:border-white p-1.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer">
            <X size={18} />
          </DialogClose>
        </DialogHeader>

        <div className="p-6">
          {step === 'question' && (
            <div>
              <p className="font-body text-lg mb-6">What describes you right now?</p>
              <div className="space-y-3">
                {options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setStep(opt.id as Step)}
                    className={cn(
                      'w-full text-left p-4 border-2 border-black dark:border-white',
                      'font-body font-medium text-base flex items-center gap-3',
                      'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo dark:hover:shadow-neo-white',
                      'transition-all duration-150 cursor-pointer'
                    )}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'brand-new' && (
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Perfect. Start here, in this order:</h3>
              <div className="space-y-4 mb-6">
                <NeoCard className="p-4" accent="#FFE500">
                  <p className="font-body font-semibold text-sm uppercase tracking-wide mb-1 text-gray-500 dark:text-gray-400">Step 1</p>
                  <p className="font-heading font-bold text-lg mb-1">Watch CS50 Week 0</p>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400">"This will change how you think about computing."</p>
                  <a href="https://cs50.harvard.edu/x/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 font-body font-bold text-sm underline underline-offset-2">
                    cs50.harvard.edu/x <ExternalLink size={12} />
                  </a>
                </NeoCard>
                <NeoCard className="p-4" accent="#4361EE">
                  <p className="font-body font-semibold text-sm uppercase tracking-wide mb-1 text-gray-500 dark:text-gray-400">Step 2</p>
                  <p className="font-heading font-bold text-lg mb-1">Start The Odin Project</p>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400">"The best free guided curriculum for web development."</p>
                  <a href="https://theodinproject.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 font-body font-bold text-sm underline underline-offset-2">
                    theodinproject.com <ExternalLink size={12} />
                  </a>
                </NeoCard>
                <NeoCard className="p-4" accent="#06D6A0">
                  <p className="font-body font-semibold text-sm uppercase tracking-wide mb-1 text-gray-500 dark:text-gray-400">Step 3</p>
                  <p className="font-heading font-bold text-lg mb-1">Make a GitHub account</p>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400">"Today. Not tomorrow. Your GitHub is your portfolio."</p>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 font-body font-bold text-sm underline underline-offset-2">
                    github.com <ExternalLink size={12} />
                  </a>
                </NeoCard>
              </div>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 italic mb-4">Come back after CS50 Week 0. You&apos;ll know what to do next.</p>
              <NeoButton href="https://cs50.harvard.edu/x/" target="_blank" rel="noopener noreferrer" icon={<ExternalLink size={14} />} iconPosition="right">
                Go to CS50 →
              </NeoButton>
            </div>
          )}

          {step === 'know-basics' && (
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">The issue is probably one of these:</h3>
              <div className="space-y-3 mb-6">
                <NeoCard className="p-4 cursor-pointer" accent="#4361EE" hover>
                  <NeoButton href="/roadmaps" className="text-left block w-full" variant="ghost">
                    <p className="font-heading font-bold">Option A: "I don&apos;t know what to specialize in"</p>
                    <p className="font-body text-sm text-gray-600 dark:text-gray-400">→ Go to Roadmaps page and read about each track</p>
                  </NeoButton>
                </NeoCard>
                <NeoCard className="p-4" accent="#06D6A0">
                  <p className="font-heading font-bold">Option B: "I know my track but don&apos;t know what to learn next"</p>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400 mt-1">→ Scroll up and pick your year. We&apos;ll show you exactly what to do.</p>
                </NeoCard>
                <NeoCard className="p-4" accent="#FFE500">
                  <p className="font-heading font-bold">Option C: "I keep starting and not finishing"</p>
                  <p className="font-body text-sm mt-1">Honest advice: pick ONE resource and finish it. Elzero HTML/CSS for web, CS50P for Python. The habit of finishing is more valuable than the course itself.</p>
                </NeoCard>
              </div>
              <NeoButton href="/roadmaps" icon={<ArrowRight size={14} />} iconPosition="right">
                View Roadmaps
              </NeoButton>
            </div>
          )}

          {step === 'cant-find-job' && (
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Read this. Seriously:</h3>
              <div className="space-y-3 mb-6">
                {[
                  { check: 'GitHub profile with 3+ repos?', hint: 'If no: stop applying and build something first' },
                  { check: 'LinkedIn profile complete and professional?', hint: 'If no: takes 2 hours, do it today' },
                  { check: '2+ deployed projects with live demos?', hint: 'This is the most common missing piece' },
                  { check: 'CV is 1 page, projects are prominent?', hint: 'See CV & Projects page for templates' },
                  { check: 'Applied to 50+ jobs (not 5)?', hint: 'Most people apply to 5–10 and give up. Apply to 50+' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 border-2 border-black dark:border-white">
                    <span className="text-xl">✅</span>
                    <div>
                      <p className="font-heading font-bold text-sm">{item.check}</p>
                      <p className="font-body text-xs text-gray-500 dark:text-gray-400">{item.hint}</p>
                    </div>
                  </div>
                ))}
              </div>
              <NeoButton href="/careers" icon={<ArrowRight size={14} />} iconPosition="right">
                Go to Careers Guide
              </NeoButton>
            </div>
          )}

          {step === 'scared' && (
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">You have more time than you think.</h3>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4">3 months of focused work = job-ready. Here&apos;s what to do:</p>
              <div className="space-y-3 mb-6">
                {[
                  { priority: '1', action: 'Finish or polish your graduation project — it needs to work and be on GitHub', accent: '#FF0F80' },
                  { priority: '2', action: 'Build your CV using the templates on the CV page — 1 page, projects first', accent: '#9B5DE5' },
                  { priority: '3', action: 'Set up LinkedIn professionally and connect with 20 people in your field', accent: '#4361EE' },
                  { priority: '4', action: 'Apply to 10 companies per week, starting NOW, not after graduation', accent: '#FF6B35' },
                  { priority: '5', action: 'Practice 2 LeetCode Easy problems per day', accent: '#06D6A0' },
                ].map(item => (
                  <div key={item.priority} className="flex items-start gap-3 p-3 border-2 border-black dark:border-white">
                    <span
                      className="w-7 h-7 border-2 border-black dark:border-white flex items-center justify-center font-heading font-black text-sm flex-shrink-0"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.priority}
                    </span>
                    <p className="font-body text-sm">{item.action}</p>
                  </div>
                ))}
              </div>
              <NeoButton href="/cv-projects" icon={<ArrowRight size={14} />} iconPosition="right">
                Go to CV & Projects
              </NeoButton>
            </div>
          )}

          {step !== 'question' && (
            <button
              onClick={() => setStep('question')}
              className="mt-4 font-body text-sm underline underline-offset-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
            >
              ← Back to options
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
